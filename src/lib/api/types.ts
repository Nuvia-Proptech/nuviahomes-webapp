/**
 * Common API types and interfaces
 */

/**
 * Generic pagination parameters
 */
export interface PaginationParams {
  page?: number;
  size?: number;
}

/**
 * Generic sort parameters
 */
export interface SortParams {
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

/**
 * Common query parameters combining pagination and sorting
 */
export interface QueryParams extends PaginationParams, SortParams {
  [key: string]: any;
}

/**
 * Generic API response wrapper for paginated data
 */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/**
 * Generic API error response
 */
export interface ApiErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
  statusCode: number;
  timestamp: string;
}

/**
 * Success response wrapper
 */
export interface SuccessResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

/**
 * File upload progress callback
 */
export type UploadProgressCallback = (progress: {
  loaded: number;
  total: number;
  percentage: number;
}) => void;
