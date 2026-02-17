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
    // Investor (User) routes
    user: {
      index: string;
      investments: {
        index: string;
        InvestmentsCategory: string;
      };
      transactions: string;
      messages: string;
      settings: string;
      help: string;
      profile: string;
      upgradeAccount: string;
    };
    // Owner routes
    owner: {
      index: string;
      properties: {
        index: string;
        submitProperty: string;
      };
      projects: {
        index: string;
        submitProject: string;
      };
      transactions: string;
      messages: string;
      bookings: string;
      settings: string;
      help: string;
      upgradeAccount: string;
    };
    // Agent routes
    agent: {
      index: string;
      listings: {
        index: string;
        submitListing: string;
      };
      investments: {
        index: string;
      };
      transactions: string;
      messages: string;
      bookings: string;
      settings: string;
      help: string;
      upgradeAccount: string;
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
    // Investor (User) dashboard routes
    user: {
      index: "/user",
      investments: {
        index: "/user/investments",
        InvestmentsCategory: "/user/investments/investments-category",
      },
      transactions: "/user/transactions",
      messages: "/user/messages",
      settings: "/user/settings",
      help: "/user/help",
      profile: "/user/profile",
      upgradeAccount: "/user/upgrade-account",
    },
    // Owner dashboard routes
    owner: {
      index: "/owner",
      properties: {
        index: "/owner/properties",
        submitProperty: "/owner/properties/submit-property",
      },
      projects: {
        index: "/owner/projects",
        submitProject: "/owner/projects/submit-project",
      },
      transactions: "/owner/transactions",
      messages: "/owner/messages",
      bookings: "/owner/bookings",
      settings: "/owner/settings",
      help: "/owner/help",
      upgradeAccount: "/owner/upgrade-account",
    },
    // Agent dashboard routes
    agent: {
      index: "/agent",
      listings: {
        index: "/agent/listings",
        submitListing: "/agent/listings/submit-property",
      },
      investments: {
        index: "/agent/investments",
      },
      transactions: "/agent/transactions",
      messages: "/agent/messages",
      bookings: "/agent/bookings",
      settings: "/agent/settings",
      help: "/agent/help",
      upgradeAccount: "/agent/upgrade-account",
    },
  },
};

export default appRoutes;
