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
        users: {
          index: '/dashboard/admin/users',
          userOverview: '/dashboard/admin/users/user-overview',
          userOverviewSecurity: '/dashboard/admin/users/user-overview-security',
          userOverviewSecurity: '/dashboard/admin/users/user-details-edit',
        },
        investments: '/dashboard/admin/investments',
        properties: {
          index: '/dashboard/admin/properties',
          addProperties: '/dashboard/admin/properties/add-properties'
        },
        projects: {
          index: '/dashboard/admin/projects',        
          slug: (slug) => ({
            index: `/dashboard/admin/projects/${slug}`,
            editProject: `/dashboard/admin/projects/${slug}/edit-project`,
          }),
          projectDetails: '/dashboard/admin/projects/project-details'
        },
        payments: '/dashboard/admin/payments',
        messages: '/dashboard/admin/messages',
        bookings: '/dashboard/admin/bookings',
        reports: '/dashboard/admin/reports',
        settings: '/dashboard/admin/settings',
      },
      user: {
        index: '/dashboard/user',
        properties: {
          index: '/dashboard/user/properties',
          submitProperty: '/dashboard/user/properties/submit-property'
        },
        projects: {
          index: '/dashboard/user/projects',
          submitProject: '/dashboard/user/projects/submit-project',
        },
        investments: {
          index: '/dashboard/user/investments',
          InvestmentsCategory: '/dashboard/user/investments/investments-category'
        },
        projects: '/dashboard/user/projects',
        transactions: '/dashboard/user/transactions',
        messages: '/dashboard/user/messages',
        bookings: '/dashboard/user/bookings', 
        settings: '/dashboard/user/settings',
        help: '/dashboard/user/help',
        profile: '/dashboard/user/profile',
      },
    },
  };
  
  export default appRoutes;