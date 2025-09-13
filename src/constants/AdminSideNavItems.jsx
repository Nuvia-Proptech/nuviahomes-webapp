import appRoutes from "./AppRoutes";
import { ChatsIcon } from "@/components/shared/Icons/ChatsIcon";

export const adminSideNavItems = [
  {
    title: "Dashboard",
    path: appRoutes.dashboard.admin.index,
    icon: <ChatsIcon />
  },
  {
    title: "Users",
    path: appRoutes.dashboard.admin.users,
    icon: <ChatsIcon />
  },
  {
    title: "Investments",
    path: appRoutes.dashboard.admin.investments,
    icon: <ChatsIcon />
  },
  {
    title: "Properties",
    path: appRoutes.dashboard.admin.properties,
    icon: <ChatsIcon />
  },
  {
    title: "Projects",
    path: appRoutes.dashboard.admin.projects,
    icon: <ChatsIcon />
  },
  {
    title: "Payements",
    path: appRoutes.dashboard.admin.payments,
    icon: <ChatsIcon />
  },
  {
    title: "Messages",
    path: appRoutes.dashboard.admin.messages,
    icon: <ChatsIcon />
  },
  {
    title: "Bookings",
    path: appRoutes.dashboard.admin.bookings,
    icon: <ChatsIcon />
  },
  {
    title: "Reports",
    path: appRoutes.dashboard.admin.reports,
    icon: <ChatsIcon />
  },
  {
    title: "Settings",
    path: appRoutes.dashboard.admin.settings,
    icon: <ChatsIcon />
  },
];
