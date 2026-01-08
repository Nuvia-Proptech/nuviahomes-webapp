interface ProjectSlugRoutes {
  index: string;
  editProject: string;
}

interface AppRoutes {
  home: {
    index: string;
  };
  auth: {
    authIndex: string;
    signUp: string;
    signIn: string;
    adminSignIn: string;
    forgotPassword: string;
    otpVerification: string;
    resetPassword: string;
  };
  dashboard: {
    admin: {
      index: string;
      users: {
        index: string;
        userOverview: string;
        userOverviewSecurity: string;
      };
      investments: string;
      properties: {
        index: string;
        addProperties: string;
      };
      projects: {
        index: string;
        slug: (slug: string) => ProjectSlugRoutes;
        projectDetails: string;
      };
      payments: string;
      messages: string;
      bookings: string;
      reports: string;
      settings: string;
    };
    user: {
      index: string;
      properties: {
        index: string;
        submitProperty: string;
      };
      projects: {
        index: string;
        submitProject: string;
      };
      investments: {
        index: string;
        InvestmentsCategory: string;
      };
      transactions: string;
      messages: string;
      bookings: string;
      settings: string;
      help: string;
      profile: string;
    };
  };
}

const appRoutes: AppRoutes = {
  // home routes
  home: {
    index: "/",
  },
  // auth routes
  auth: {
    authIndex: "/auth",
    signUp: "/user-register",
    signIn: "/user-login",
    adminSignIn: "/nuvia-proptech-admin-login",
    forgotPassword: "/forgot-password",
    otpVerification: "/auth/forgot-password/otp-verification",
    resetPassword: "/auth/forgot-password/reset-password",
  },
  // dashboard routes
  dashboard: {
    admin: {
      index: "/admin",
      users: {
        index: "/admin/users",
        userOverview: "/admin/users/user-overview",
        userOverviewSecurity: "/admin/users/user-details-edit",
      },
      investments: "/admin/investments",
      properties: {
        index: "/admin/properties",
        addProperties: "/admin/properties/add-properties",
      },
      projects: {
        index: "/admin/projects",
        slug: (slug: string) => ({
          index: `/admin/projects/${slug}`,
          editProject: `/admin/projects/${slug}/edit-project`,
        }),
        projectDetails: "/admin/projects/project-details",
      },
      payments: "/admin/payments",
      messages: "/admin/messages",
      bookings: "/admin/bookings",
      reports: "/admin/reports",
      settings: "/admin/settings",
    },
    user: {
      index: "/user",
      properties: {
        index: "/user/properties",
        submitProperty: "/user/properties/submit-property",
      },
      projects: {
        index: "/user/projects",
        submitProject: "/user/projects/submit-project",
      },
      investments: {
        index: "/user/investments",
        InvestmentsCategory: "/user/investments/investments-category",
      },
      transactions: "/user/transactions",
      messages: "/user/messages",
      bookings: "/user/bookings",
      settings: "/user/settings",
      help: "/user/help",
      profile: "/user/profile",
    },
  },
};

export default appRoutes;
