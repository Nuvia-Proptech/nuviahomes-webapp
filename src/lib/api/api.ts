import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { ApiTimeout, ApiUrl } from "./baseUrl";
import { webStorage } from "../storage/webStorage";

/**
 * Storage key for the authentication token
 */
const AUTH_TOKEN_KEY = "auth_token";

/**
 * Type definition for API response wrapper
 */
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

/**
 * Type definition for file upload
 */
export interface FileUpload {
  uri: string;
  name: string;
  type: string;
}

/**
 * Custom error class for API errors
 */
export class ApiError extends Error {
  status?: number;
  data?: any;

  constructor(message: string, status?: number, data?: any) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

/**
 * Redacts sensitive data from request body for logging
 * @param data - The request body data
 * @returns Sanitized data with sensitive fields redacted
 */
const sanitizeRequestData = (data: any): any => {
  if (!data || typeof data !== "object") {
    return data;
  }

  const sensitiveFields = [
    "password",
    "confirmPassword",
    "oldPassword",
    "newPassword",
    "token",
    "secret",
  ];
  const sanitized = { ...data };

  const redactSensitiveFields = (obj: any): any => {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => redactSensitiveFields(item));
    }

    const result = { ...obj };
    for (const key in result) {
      if (
        sensitiveFields.some((field) =>
          key.toLowerCase().includes(field.toLowerCase())
        )
      ) {
        result[key] = "[REDACTED]";
      } else if (typeof result[key] === "object") {
        result[key] = redactSensitiveFields(result[key]);
      }
    }
    return result;
  };

  return redactSensitiveFields(sanitized);
};

/**
 * Sanitizes headers for logging - shows presence but not actual values
 * @param headers - Request headers
 * @returns Object indicating which headers are present
 */
const sanitizeHeaders = (headers: any): Record<string, string> => {
  if (!headers || typeof headers !== "object") {
    return {};
  }

  const result: Record<string, string> = {};
  for (const key in headers) {
    if (key.toLowerCase() === "authorization") {
      result[key] = headers[key] ? "[PRESENT]" : "[NOT_PRESENT]";
    } else {
      result[key] = "[PRESENT]";
    }
  }
  return result;
};

/**
 * Logs API error details to console for debugging
 * @param error - The axios error object
 */
const logApiError = (error: AxiosError) => {
  const config = error.config;
  if (!config) {
    console.error("API Error:", error);
    return;
  }

  // Prepare sanitized request context
  const requestContext = {
    method: config.method?.toUpperCase(),
    url: config.url,
    baseURL: config.baseURL,
    timeout: config.timeout,
    headers: sanitizeHeaders(config.headers),
    data: sanitizeRequestData(config.data),
    params: config.params,
  };

  // Prepare response context if available
  const responseContext = error.response
    ? {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
      }
    : null;

  // Log error with context
  console.error("API Request Error:", {
    error: error.message,
    code: error.code,
    request: requestContext,
    response: responseContext,
  });
};

/**
 * Main API class that handles all HTTP requests
 * Provides a clean interface for making API calls with automatic token management
 */
class Api {
  private instance: AxiosInstance;

  constructor() {
    // Initialize axios instance with base configuration
    this.instance = axios.create({
      baseURL: ApiUrl,
      timeout: ApiTimeout,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    // Request interceptor to add authorization token
    this.instance.interceptors.request.use(
      (config) => {
        // Get token from Zustand's persisted auth storage
        const authStorageRaw = webStorage.getStringSync("auth-storage");

        if (authStorageRaw) {
          try {
            const authData = JSON.parse(authStorageRaw);
            const token = authData?.state?.access_token;

            if (token) {
              // Add Bearer token to Authorization header
              config.headers.Authorization = `Bearer ${token}`;
            }
          } catch {
            // Ignore parsing errors
          }
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor to handle errors globally
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        // Log API error details for debugging
        logApiError(error);

        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          throw new ApiError(
            error.response.data?.message || error.message,
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          // The request was made but no response was received
          throw new ApiError(
            "No response from server. Please check your connection"
          );
        } else {
          // Something happened in setting up the request that triggered an Error
          throw new ApiError(error.message);
        }
      }
    );
  }

  /**
   * Sets the authentication token in storage
   * @param token - The authentication token to store
   */
  setAuthToken(token: string): void {
    webStorage.setSync(AUTH_TOKEN_KEY, token);
  }

  /**
   * Removes the authentication token from storage
   */
  clearAuthToken(): void {
    webStorage.deleteSync(AUTH_TOKEN_KEY);
  }

  /**
   * Gets the current authentication token
   * @returns The stored authentication token or undefined
   */
  getAuthToken(): string | undefined {
    return webStorage.getStringSync(AUTH_TOKEN_KEY);
  }

  /**
   * Performs a GET request
   * @param url - The endpoint URL
   * @param params - Optional query parameters
   * @param config - Optional axios configuration
   * @returns Promise with the response data
   * @example
   * const countries = await api.get<Country[]>('/countries', { region: 'europe' });
   */
  async get<Response = any>(
    url: string,
    params?: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const response = await this.instance.get<Response>(url, {
      params,
      ...config,
    });
    return response.data;
  }

  /**
   * Performs a POST request
   * @param url - The endpoint URL
   * @param data - The request body data
   * @param config - Optional axios configuration
   * @returns Promise with the response data
   * @example
   * const newCountry = await api.post<CountryData, Country>('/countries', countryData);
   */
  async post<Data = any, Response = any>(
    url: string,
    data?: Data,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const response = await this.instance.post<Response>(url, data, config);
    return response.data;
  }

  /**
   * Performs a PUT request
   * @param url - The endpoint URL
   * @param data - The request body data
   * @param config - Optional axios configuration
   * @returns Promise with the response data
   * @example
   * const updatedCountry = await api.put<CountryData, Country>('/countries/1', countryData);
   */
  async put<Data = any, Response = any>(
    url: string,
    data?: Data,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const response = await this.instance.put<Response>(url, data, config);
    return response.data;
  }

  /**
   * Performs a PATCH request
   * @param url - The endpoint URL
   * @param data - The request body data
   * @param config - Optional axios configuration
   * @returns Promise with the response data
   * @example
   * const patchedCountry = await api.patch<Partial<CountryData>, Country>('/countries/1', { name: 'New Name' });
   */
  async patch<Data = any, Response = any>(
    url: string,
    data?: Data,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const response = await this.instance.patch<Response>(url, data, config);
    return response.data;
  }

  /**
   * Performs a DELETE request
   * @param url - The endpoint URL
   * @param config - Optional axios configuration
   * @returns Promise with the response data
   * @example
   * await api.delete<void>('/countries/1');
   */
  async delete<Response = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const response = await this.instance.delete<Response>(url, config);
    return response.data;
  }

  /**
   * Uploads a file using multipart/form-data
   * @param url - The endpoint URL
   * @param file - The file to upload
   * @param additionalData - Optional additional form data
   * @param config - Optional axios configuration
   * @returns Promise with the response data
   * @example
   * const uploadedFile = await api.upload<UploadResponse>('/upload', {
   *   uri: 'file://path/to/file.jpg',
   *   name: 'photo.jpg',
   *   type: 'image/jpeg'
   * });
   */
  async upload<Response = any>(
    url: string,
    file: FileUpload,
    additionalData?: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const formData = new FormData();

    // Append the file
    formData.append("file", {
      uri: file.uri,
      name: file.name,
      type: file.type,
    } as any);

    // Append additional data if provided
    if (additionalData) {
      Object.keys(additionalData).forEach((key) => {
        formData.append(key, additionalData[key]);
      });
    }

    const response = await this.instance.post<Response>(url, formData, {
      ...config,
      headers: {
        ...config?.headers,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  }

  /**
   * Uploads multiple files using multipart/form-data
   * @param url - The endpoint URL
   * @param files - Array of files to upload
   * @param additionalData - Optional additional form data
   * @param config - Optional axios configuration
   * @returns Promise with the response data
   * @example
   * const uploadedFiles = await api.uploadMultiple<UploadResponse>('/upload-multiple', [
   *   { uri: 'file://path/to/file1.jpg', name: 'photo1.jpg', type: 'image/jpeg' },
   *   { uri: 'file://path/to/file2.jpg', name: 'photo2.jpg', type: 'image/jpeg' }
   * ]);
   */
  async uploadMultiple<Response = any>(
    url: string,
    files: FileUpload[],
    additionalData?: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const formData = new FormData();

    // Append all files
    files.forEach((file, index) => {
      formData.append(`files[${index}]`, {
        uri: file.uri,
        name: file.name,
        type: file.type,
      } as any);
    });

    // Append additional data if provided
    if (additionalData) {
      Object.keys(additionalData).forEach((key) => {
        formData.append(key, additionalData[key]);
      });
    }

    const response = await this.instance.post<Response>(url, formData, {
      ...config,
      headers: {
        ...config?.headers,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  }

  /**
   * Gets the underlying axios instance for advanced use cases
   * @returns The axios instance
   */
  getAxiosInstance(): AxiosInstance {
    return this.instance;
  }
}

// Create and export a singleton instance
export const api = new Api();

// Export the class for testing or creating custom instances
export { Api };
