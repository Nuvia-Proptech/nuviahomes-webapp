import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  publicRoutes,
  authRoutes,
  defaultRedirects,
} from "@/config/routeConfig";
import appRoutes from "@/constants/AppRoutes";

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

/**
 * Check if the given pathname is a public route
 * Handles both exact matches and prefix matches for nested routes
 */
function isPublicRoute(pathname: string): boolean {
  return publicRoutes.some((route) => {
    // Exact match for root path
    if (route === "/") {
      return pathname === "/";
    }
    // For other routes, check if pathname exactly matches or starts with the route
    return pathname === route || pathname.startsWith(route + "/");
  });
}

/**
 * Check if the given pathname is an auth route (login/register pages)
 */
function isAuthRoute(pathname: string): boolean {
  return authRoutes.some((route) => {
    if (route === "/") {
      return pathname === "/";
    }
    return pathname === route || pathname.startsWith(route + "/");
  });
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API routes - they handle their own authentication
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Get auth token from cookies (stored by Zustand persist)
  const authStorage = request.cookies.get("auth-storage");
  let isAuthenticated = false;
  let userRole = "user";

  if (authStorage) {
    try {
      const authData = JSON.parse(authStorage.value);
      isAuthenticated = !!authData?.state?.access_token;
      userRole = authData?.state?.user?.role || "user";
    } catch {
      // Invalid auth data, treat as unauthenticated
      isAuthenticated = false;
    }
  }

  // Debug log for middleware
  if (isAuthenticated) {
    console.log(
      `[Middleware] Path: ${pathname} | Auth: YES | Role: ${userRole}`
    );
  }

  // Allow access to public routes
  if (isPublicRoute(pathname)) {
    // If authenticated user tries to access auth pages, redirect to dashboard
    if (isAuthenticated && isAuthRoute(pathname)) {
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
    // For admin routes, redirect to admin login
    const isTryingAdmin = pathname.startsWith("/admin");
    const loginPath = isTryingAdmin
      ? appRoutes.auth.adminSignIn
      : defaultRedirects.unauthenticated;

    const loginUrl = new URL(loginPath, request.url);
    // Add redirect parameter to return user after login
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // --- ROLE BASED ACCESS CONTROL (RBAC) ---
  const normalizedRole = userRole.toLowerCase();
  const isAdmin =
    normalizedRole === "admin" ||
    normalizedRole === "super-admin" ||
    normalizedRole === "super_admin";

  // 1. Admin trying to access user dashboard
  if (isAdmin && pathname.startsWith("/user")) {
    console.log(`[Middleware] Admin redirected from /user to /admin`);
    return NextResponse.redirect(
      new URL(appRoutes.dashboard.admin.index, request.url)
    );
  }

  // 2. User trying to access admin dashboard
  if (!isAdmin && pathname.startsWith("/admin")) {
    console.log(`[Middleware] Non-admin redirected from /admin to /user`);
    return NextResponse.redirect(
      new URL(appRoutes.dashboard.user.index, request.url)
    );
  }

  // User is authenticated and has correct role for the path, allow access
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
