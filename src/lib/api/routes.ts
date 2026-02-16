export const API_ROUTES = {
  auth: {
    createAccount: "/api/auth/signup",
    signIn: "/api/auth/login",
    verifyAccount: "/api/auth/verify",
    // verifyOtp: "/api/auth/verify-otp",
    forgotPassword: "/api/auth/forgot-password",
    resetPassword: "/api/auth/reset-password",
    // verifyForgotPassword: "/api/auth/verify-forgot-password",
    // resetForgotPassword: "/api/auth/reset-forgot-password",
  },
  users: {
    requestRoleChange: "/api/users/request-role-change",
    changeRole: (userId: string) => `/api/users/${userId}/change-role`,
  },
};
