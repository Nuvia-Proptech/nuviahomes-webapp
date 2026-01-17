import appRoutes from "./AppRoutes";
import { ChatsIcon } from "@/components/shared/Icons/ChatsIcon";
import { ElementEqualIcon } from "@/components/shared/Icons/ElementEqualIcon";
import { BuildingIcon } from "@/components/shared/Icons/BuildingIcon";
import { BitcoinCardIcon } from "@/components/shared/Icons/BitcoinCardIcon";
import { BuildingIconTwo } from "@/components/shared/Icons/BuildingIconTwo";
import { ArchiveBookIcon } from "@/components/shared/Icons/ArchiveBookIcon";

// Owner Main Menu Items
export const ownerMainMenuItems = [
  {
    title: "Dashboard",
    path: appRoutes.dashboard.owner.index,
    icon: <ElementEqualIcon />,
  },
  {
    title: "Properties",
    path: appRoutes.dashboard.owner.properties.index,
    icon: <BuildingIcon />,
  },
  {
    title: "Projects",
    path: appRoutes.dashboard.owner.projects.index,
    icon: <BuildingIconTwo />,
  },
  {
    title: "Transactions",
    path: appRoutes.dashboard.owner.transactions,
    icon: <BitcoinCardIcon />,
  },
  {
    title: "Messages",
    path: appRoutes.dashboard.owner.messages,
    icon: <ChatsIcon />,
  },
  {
    title: "Bookings",
    path: appRoutes.dashboard.owner.bookings,
    icon: <ArchiveBookIcon />,
  },
];
