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
        index: '/admin',
        users: {
          index: '/admin/users',
          userOverview: '/admin/users/user-overview',
          userOverviewSecurity: '/admin/users/user-overview-security',
          userOverviewSecurity: '/admin/users/user-details-edit',
        },
        investments: '/admin/investments',
        properties: {
          index: '/admin/properties',
          addProperties: '/admin/properties/add-properties'
        },
        projects: {
          index: '/admin/projects',        
          slug: (slug) => ({
            index: `/admin/projects/${slug}`,
            editProject: `/admin/projects/${slug}/edit-project`,
          }),
          projectDetails: '/admin/projects/project-details'
        },
        payments: '/admin/payments',
        messages: '/admin/messages',
        bookings: '/admin/bookings',
        reports: '/admin/reports',
        settings: '/admin/settings',
      },
      user: {
        index: '/user',
        properties: {
          index: '/user/properties',
          submitProperty: '/user/properties/submit-property'
        },
        projects: {
          index: '/user/projects',
          submitProject: '/user/projects/submit-project',
        },
        investments: {
          index: '/user/investments',
          InvestmentsCategory: '/user/investments/investments-category'
        },
        transactions: '/user/transactions',
        messages: '/user/messages',
        bookings: '/user/bookings', 
        settings: '/user/settings',
        help: '/user/help',
        profile: '/user/profile',
      },
    },
  };
  
  export default appRoutes;