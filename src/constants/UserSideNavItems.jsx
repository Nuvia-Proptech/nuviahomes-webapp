import appRoutes from "./AppRoutes";
import { ChatsIcon } from "@/components/shared/Icons/ChatsIcon";
import { ElementEqualIcon } from "@/components/shared/Icons/ElementEqualIcon";
import { BuildingIcon } from "@/components/shared/Icons/BuildingIcon";
import { BitcoinCardIcon } from "@/components/shared/Icons/BitcoinCardIcon";
import { BuildingIconTwo } from "@/components/shared/Icons/BuildingIconTwo";
import { ArchiveBookIcon } from "@/components/shared/Icons/ArchiveBookIcon";
import { SettingsIcon } from "@/components/shared/Icons/SettingsIcon";
import { MessageQuestionIcon } from "@/components/shared/Icons/MessageQuestionIcon";
import { LogoutIcon } from "@/components/shared/Icons/LogoutIcon";

export const userMainMenuItems = [
  {
    title: "Dashboard",
    path: appRoutes.dashboard.user.index,
    icon: <ElementEqualIcon />,
  },

  {
    title: "Properties",
    path: appRoutes.dashboard.user.properties,
    icon: <BuildingIcon />,
  },
  {
    title: "Projects",
    path: appRoutes.dashboard.user.projects,
    icon: <BuildingIconTwo />,
  },
  {
    title: "Transactions",
    path: appRoutes.dashboard.user.transactions,
    icon: <BitcoinCardIcon />,
  },
  {
    title: "Messages",
    path: appRoutes.dashboard.user.messages,
    icon: <ChatsIcon />,
  },
  {
    title: "Bookings",
    path: appRoutes.dashboard.user.bookings,
    icon: <ArchiveBookIcon />,
  },
];

export const userGeneralItems = [
  {
    title: "Settings",
    path: appRoutes.dashboard.user.settings,
    icon: <SettingsIcon />,
  },
  {
    title: "Help",
    path: appRoutes.dashboard.user.help,
    icon: <MessageQuestionIcon />,
  },
  {
    title: "Logout",
    path: "",
    icon: <LogoutIcon />,
  },
];
