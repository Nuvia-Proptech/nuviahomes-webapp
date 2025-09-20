const appRoutes = {
    // home routes
    home: {
      index: '/',
    },
    // auth routes
    auth: {
      authIndex: '/auth',
      signUp: '/auth/sign-up',
      signIn: '/auth/sign-in',
      forgotPassword: '/auth/forgot-password',
      otpVerification: '/auth/forgot-password/otp-verification',
      resetPassword: '/auth/forgot-password/reset-password',
    },
    // dashboard routes
    dashboard: {
     admin: {
        index: '/dashboard/admin',
        users: '/dashboard/admin/users',
        investments: '/dashboard/admin/investments',
        properties: {
          index: '/dashboard/admin/properties',
          addProperties: '/dashboard/admin/properties/add-properties'
        },
        projects: '/dashboard/admin/projects',
        payments: '/dashboard/admin/payments',
        messages: '/dashboard/admin/messages',
        bookings: '/dashboard/admin/bookings',
        reports: '/dashboard/admin/reports',
        settings: '/dashboard/admin/settings',
      },
      user: {
        index: '/dashboard/user',
      },
    },
  };
  
  export default appRoutes;