import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import Cookies from "js-cookie";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface AuthState {
  access_token: string | null;
  user: User | null;
  setAuth: (token: string, user: User) => void;
  clearAuth: () => void;
  getToken: () => string | null;
  getUser: () => User | null;
  isAuthenticated: () => boolean;
}

// Custom storage that uses both localStorage and cookies
const customStorage = {
  getItem: (name: string) => {
    // Try to get from localStorage first
    const value = localStorage.getItem(name);
    return value;
  },
  setItem: (name: string, value: string) => {
    // Store in localStorage
    localStorage.setItem(name, value);

    // Also store in cookies for middleware access
    try {
      const data = JSON.parse(value);
      if (data?.state?.access_token) {
        // Store auth token in httpOnly-like cookie (7 days expiry)
        Cookies.set("auth-storage", value, {
          expires: 7,
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production",
        });
      }
    } catch {
      // Ignore parsing errors
    }
  },
  removeItem: (name: string) => {
    localStorage.removeItem(name);
    Cookies.remove("auth-storage");
  },
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      access_token: null,
      user: null,

      setAuth: (token: string, user: User) => {
        set({ access_token: token, user });
      },

      clearAuth: () => {
        set({ access_token: null, user: null });
      },

      getToken: () => {
        return get().access_token;
      },

      getUser: () => {
        return get().user;
      },

      isAuthenticated: () => {
        return !!get().access_token;
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => customStorage),
    }
  )
);
