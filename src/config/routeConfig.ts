import appRoutes from "@/constants/AppRoutes";

/**
 * Route Configuration for Authentication
 *
 * PUBLIC ROUTES: Routes accessible without authentication
 * PROTECTED ROUTES: All other routes require authentication
 *
 * To modify in the future:
 * - Add new public routes to the publicRoutes array
 * - Protected routes are automatically enforced (no action needed)
 */

// Routes that don't require authentication
export const publicRoutes = [
  appRoutes.home.index,
  appRoutes.auth.authIndex,
  appRoutes.auth.signUp,
  appRoutes.auth.signIn,
  appRoutes.auth.adminSignIn,
  appRoutes.auth.forgotPassword,
  appRoutes.auth.otpVerification,
  appRoutes.auth.resetPassword,
  appRoutes.home.whoWeAre,
  appRoutes.home.listing,
  appRoutes.home.agents,
  appRoutes.home.ourBlog,
  appRoutes.home.contact,
  appRoutes.home.invest,
];

// Routes that should redirect to dashboard if already authenticate
export const authRoutes = [
  appRoutes.auth.authIndex,
  appRoutes.auth.signUp,
  appRoutes.auth.signIn,
  appRoutes.auth.adminSignIn,
];

// Default redirect routes based on user role
export const defaultRedirects = {
  unauthenticated: appRoutes.auth.signIn,
  authenticated: {
    user: appRoutes.dashboard.user.index,
    admin: appRoutes.dashboard.admin.index,
    "super-admin": appRoutes.dashboard.admin.index,
    super_admin: appRoutes.dashboard.admin.index,
    agent: appRoutes.dashboard.agent.index,
    investor: appRoutes.dashboard.user.index,
    owner: appRoutes.dashboard.owner.index,
  },
};
