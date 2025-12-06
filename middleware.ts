import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  publicRoutes,
  authRoutes,
  defaultRedirects,
} from "@/config/routeConfig";

/**
 * Next.js Middleware for Route Protection
 *
 * This middleware runs on every request and checks if the user is authenticated
 * before allowing access to protected routes.
 *
 * Flow:
 * 1. Check if route is public → allow access
 * 2. Check if user has auth token in cookies
 * 3. If authenticated and trying to access auth pages → redirect to dashboard
 * 4. If not authenticated and trying to access protected route → redirect to login
 */

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get auth token from cookies (stored by Zustand persist)
  const authStorage = request.cookies.get("auth-storage");
  let isAuthenticated = false;
  let userRole = "user";

  if (authStorage) {
    try {
      const authData = JSON.parse(authStorage.value);
      isAuthenticated = !!authData?.state?.access_token;
      userRole = authData?.state?.user?.role || "user";
    } catch (error) {
      // Invalid auth data, treat as unauthenticated
      isAuthenticated = false;
    }
  }

  // Allow access to public routes
  if (publicRoutes.includes(pathname)) {
    // If authenticated user tries to access auth pages, redirect to dashboard
    if (isAuthenticated && authRoutes.includes(pathname)) {
      const dashboardUrl =
        defaultRedirects.authenticated[
          userRole as keyof typeof defaultRedirects.authenticated
        ];
      return NextResponse.redirect(new URL(dashboardUrl, request.url));
    }
    return NextResponse.next();
  }

  // Check if trying to access protected route without authentication
  if (!isAuthenticated) {
    // Redirect to login page
    const loginUrl = new URL(defaultRedirects.unauthenticated, request.url);
    // Add redirect parameter to return user after login
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // User is authenticated, allow access
  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
