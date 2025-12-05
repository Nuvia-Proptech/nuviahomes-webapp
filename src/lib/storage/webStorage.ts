/**
 * Client-side storage utility for Next.js applications
 * Uses browser localStorage for persistent storage
 *
 * Features:
 * - Client-side only: Uses localStorage for fast, synchronous access
 * - Type-safe: Full TypeScript support with proper return types
 * - Flexible: Supports strings, numbers, and booleans
 * - Safe: Handles errors gracefully and checks for browser environment
 */

/**
 * Check if we're running in a browser environment
 */
const isBrowser =
  typeof window !== "undefined" && typeof localStorage !== "undefined";

/**
 * Storage class providing access to browser localStorage
 */
class WebStorage {
  /**
   * Get a string value from storage
   * @param key - Storage key
   * @returns The stored value or undefined if not found
   */
  async getString(key: string): Promise<string | undefined> {
    return this.getStringSync(key);
  }

  /**
   * Get a string value synchronously
   * @param key - Storage key
   * @returns The stored value or undefined if not found
   */
  getStringSync(key: string): string | undefined {
    if (!isBrowser) {
      console.warn("localStorage is not available in this environment");
      return undefined;
    }
    try {
      const value = localStorage.getItem(key);
      return value ?? undefined;
    } catch (error) {
      console.error(`Error getting value for key "${key}":`, error);
      return undefined;
    }
  }

  /**
   * Set a string value in storage
   * @param key - Storage key
   * @param value - Value to store
   */
  async set(key: string, value: string | number | boolean): Promise<void> {
    this.setSync(key, value);
  }

  /**
   * Set a value synchronously
   * @param key - Storage key
   * @param value - Value to store
   */
  setSync(key: string, value: string | number | boolean): void {
    if (!isBrowser) {
      console.warn("localStorage is not available in this environment");
      return;
    }
    try {
      const stringValue = String(value);
      localStorage.setItem(key, stringValue);
    } catch (error) {
      console.error(`Error setting value for key "${key}":`, error);
    }
  }

  /**
   * Delete a value from storage
   * @param key - Storage key
   */
  async delete(key: string): Promise<void> {
    this.deleteSync(key);
  }

  /**
   * Delete a value synchronously
   * @param key - Storage key
   */
  deleteSync(key: string): void {
    if (!isBrowser) {
      console.warn("localStorage is not available in this environment");
      return;
    }
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error deleting value for key "${key}":`, error);
    }
  }

  /**
   * Get a boolean value from storage
   * @param key - Storage key
   * @returns The stored boolean value or undefined if not found
   */
  async getBoolean(key: string): Promise<boolean | undefined> {
    const value = await this.getString(key);
    if (value === undefined) return undefined;
    return value === "true";
  }

  /**
   * Get a boolean value synchronously
   * @param key - Storage key
   * @returns The stored boolean value or undefined if not found
   */
  getBooleanSync(key: string): boolean | undefined {
    const value = this.getStringSync(key);
    if (value === undefined) return undefined;
    return value === "true";
  }

  /**
   * Get a number value from storage
   * @param key - Storage key
   * @returns The stored number value or undefined if not found
   */
  async getNumber(key: string): Promise<number | undefined> {
    const value = await this.getString(key);
    if (value === undefined) return undefined;
    const num = Number(value);
    return isNaN(num) ? undefined : num;
  }

  /**
   * Get a number value synchronously
   * @param key - Storage key
   * @returns The stored number value or undefined if not found
   */
  getNumberSync(key: string): number | undefined {
    const value = this.getStringSync(key);
    if (value === undefined) return undefined;
    const num = Number(value);
    return isNaN(num) ? undefined : num;
  }

  /**
   * Check if a key exists in storage
   * @param key - Storage key
   * @returns True if the key exists, false otherwise
   */
  async contains(key: string): Promise<boolean> {
    const value = await this.getString(key);
    return value !== undefined;
  }

  /**
   * Check if a key exists in storage synchronously
   * @param key - Storage key
   * @returns True if the key exists, false otherwise
   */
  containsSync(key: string): boolean {
    const value = this.getStringSync(key);
    return value !== undefined;
  }

  /**
   * Clear all values from storage (use with caution!)
   */
  async clearAll(): Promise<void> {
    this.clearAllSync();
  }

  /**
   * Clear all values from storage synchronously (use with caution!)
   */
  clearAllSync(): void {
    if (!isBrowser) {
      console.warn("localStorage is not available in this environment");
      return;
    }
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing storage:", error);
    }
  }

  /**
   * Get all keys in storage
   * @returns Array of all storage keys
   */
  async getAllKeys(): Promise<string[]> {
    return this.getAllKeysSync();
  }

  /**
   * Get all keys in storage synchronously
   * @returns Array of all storage keys
   */
  getAllKeysSync(): string[] {
    if (!isBrowser) {
      console.warn("localStorage is not available in this environment");
      return [];
    }
    try {
      return Object.keys(localStorage);
    } catch (error) {
      console.error("Error getting all keys:", error);
      return [];
    }
  }
}

/**
 * Singleton instance of WebStorage
 * Use this throughout your application for consistent storage access
 */
export const webStorage = new WebStorage();

/**
 * Export the class for testing or creating custom instances
 */
export { WebStorage };
