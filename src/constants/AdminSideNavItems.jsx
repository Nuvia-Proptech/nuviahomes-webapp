import { HouseIcon } from "@/components/shared/Icons/HouseIcon";
import appRoutes from "./AppRoutes";
import { ChatsIcon } from "@/components/shared/Icons/ChatsIcon";
import { PeopleIcon } from "@/components/shared/Icons/PeopleIcon";
import { DocumentFowardIcon } from "@/components/shared/Icons/DocumentFowardIcon";
import { ElementEqualIcon } from "@/components/shared/Icons/ElementEqualIcon";
import { TaskSquareIcon } from "@/components/shared/Icons/TaskSquareIcon";
import { WalletAddIcon } from "@/components/shared/Icons/WalletAddIcon";
import { NoteIcon } from "@/components/shared/Icons/NoteIcon";
import { SettingsCpuIcon } from "@/components/shared/Icons/SettingsCpuIcon";

export const adminSideNavItems = [
  {
    title: "Dashboard",
    path: appRoutes.dashboard.admin.index,
    icon: <ElementEqualIcon />
  },
  {
    title: "Users",
    path: appRoutes.dashboard.admin.users.index,
    icon: <PeopleIcon />
  },
  {
    title: "Investments",
    path: appRoutes.dashboard.admin.investments,
    icon: <DocumentFowardIcon />
  },
  {
    title: "Properties",
    path: appRoutes.dashboard.admin.properties.index,
    icon: <HouseIcon fill="white" width="20" height="20" />
  },
  {
    title: "Projects",
    path: appRoutes.dashboard.admin.projects,
    icon: <TaskSquareIcon />
  },
  {
    title: "Payements",
    path: appRoutes.dashboard.admin.payments,
    icon: <WalletAddIcon />
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
    icon: <NoteIcon />
  },
  {
    title: "Settings",
    path: appRoutes.dashboard.admin.settings,
    icon: <SettingsCpuIcon />
  },
];
