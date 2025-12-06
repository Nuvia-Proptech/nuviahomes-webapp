# Web Storage Utility

A client-side storage solution for Next.js applications using browser localStorage. This utility provides a consistent, type-safe API for storing and retrieving data in the browser.

## Features

- 💾 **localStorage**: Fast client-side storage for persistent data
- 🔒 **Type-safe**: Full TypeScript support with proper type inference
- ⚡ **Flexible**: Supports both synchronous and asynchronous operations
- 🛡️ **Safe**: Handles errors gracefully and checks for browser environment
- 🎯 **Simple**: Clean, intuitive API for common storage operations

## Installation

The storage utility is already included in your project at:

```
src/lib/storage/webStorage.ts
```

## Usage

### Basic Usage

For client-side operations (like in React components):

```typescript
import { webStorage } from "@/lib/storage/webStorage";

// Store a value
webStorage.setSync("user_name", "John Doe");

// Retrieve a value
const userName = webStorage.getStringSync("user_name");
console.log(userName); // "John Doe"

// Delete a value
webStorage.deleteSync("user_name");
```

### API Methods

#### Synchronous Methods (Recommended)

```typescript
// Get string value
const value = webStorage.getStringSync(key: string): string | undefined

// Get boolean value
const isActive = webStorage.getBooleanSync(key: string): boolean | undefined

// Get number value
const count = webStorage.getNumberSync(key: string): number | undefined

// Set value
webStorage.setSync(key: string, value: string | number | boolean): void

// Delete value
webStorage.deleteSync(key: string): void

// Check if key exists
const exists = webStorage.containsSync(key: string): boolean

// Get all keys
const keys = webStorage.getAllKeysSync(): string[]

// Clear all storage (use with caution!)
webStorage.clearAllSync(): void
```

#### Async Methods (Also Available)

All synchronous methods have async equivalents that return Promises:

```typescript
// Get string value
const value = await webStorage.getString(key: string): Promise<string | undefined>

// Set value
await webStorage.set(key: string, value: string | number | boolean): Promise<void>

// Delete value
await webStorage.delete(key: string): Promise<void>

// Get boolean value
const isActive = await webStorage.getBoolean(key: string): Promise<boolean | undefined>

// Get number value
const count = await webStorage.getNumber(key: string): Promise<number | undefined>

// Check if key exists
const exists = await webStorage.contains(key: string): Promise<boolean>

// Get all keys
const keys = await webStorage.getAllKeys(): Promise<string[]>

// Clear all storage (use with caution!)
await webStorage.clearAll(): Promise<void>
```

## Examples

### Authentication Token Storage

The API client (`api.ts`) already uses this storage for managing auth tokens:

```typescript
import { api } from "@/lib/api/api";

// Login and store token
const response = await api.post("/auth/login", { email, password });
api.setAuthToken(response.token); // Uses webStorage.setSync internally

// Token is automatically added to all API requests
const userData = await api.get("/user/profile");

// Logout and clear token
api.clearAuthToken(); // Uses webStorage.deleteSync internally
```

### Storing User Preferences

```typescript
// Client-side component
"use client";

import { webStorage } from "@/lib/storage/webStorage";

export function ThemeToggle() {
  const toggleTheme = () => {
    const currentTheme = webStorage.getStringSync("theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    webStorage.setSync("theme", newTheme);
  };

  return <button onClick={toggleTheme}>Toggle Theme</button>;
}
```


## Storage Location

- **Client-side**: Data is stored in browser `localStorage`
- **Persistence**: Data persists across browser sessions until explicitly cleared
- **Scope**: Data is scoped to the origin (protocol + domain + port)

## Best Practices

1. **Use sync methods for simplicity**: For most use cases, the synchronous methods (`getStringSync()`, `setSync()`, `deleteSync()`) are simpler and more straightforward.

2. **Handle undefined values**: Always check for `undefined` when retrieving values, as keys may not exist in storage.

3. **Don't store sensitive data**: localStorage is accessible via JavaScript, so avoid storing highly sensitive information like passwords or payment details.

4. **Keep data size reasonable**: While localStorage can typically store 5-10MB, it's best to keep stored data minimal for performance.

## Important Considerations

1. **Browser-only**: This storage utility only works in browser environments. It will gracefully handle server-side rendering by returning undefined/doing nothing.

2. **localStorage limits**: localStorage has a size limit (typically 5-10MB depending on the browser). For larger data, consider using IndexedDB or a backend database.

3. **Security**: Data in localStorage is accessible to any JavaScript running on your page. Never store sensitive information like passwords, credit card numbers, or API keys.

4. **Same-origin policy**: localStorage is scoped to the origin (protocol + domain + port). Data stored on `https://example.com` is not accessible from `https://api.example.com`.

## TypeScript Support

The storage utility is fully typed:

```typescript
const stringValue: string | undefined = webStorage.getStringSync("key");
const boolValue: boolean | undefined = await webStorage.getBoolean("isActive");
const numValue: number | undefined = await webStorage.getNumber("count");
```

## License

Part of the Nuvia Homes project.
