import appRoutes from "./AppRoutes";
import { ChatsIcon } from "@/components/shared/Icons/ChatsIcon";
import { ElementEqualIcon } from "@/components/shared/Icons/ElementEqualIcon";
import { BuildingIcon } from "@/components/shared/Icons/BuildingIcon";
import { BitcoinCardIcon } from "@/components/shared/Icons/BitcoinCardIcon";
import { ArchiveBookIcon } from "@/components/shared/Icons/ArchiveBookIcon";
import { GrMoney } from "react-icons/gr";

// Agent Main Menu Items
export const agentMainMenuItems = [
  {
    title: "Dashboard",
    path: appRoutes.dashboard.agent.index,
    icon: <ElementEqualIcon />,
  },
  {
    title: "My Listings",
    path: appRoutes.dashboard.agent.listings.index,
    icon: <BuildingIcon />,
  },
  {
    title: "Investments",
    path: appRoutes.dashboard.agent.investments.index,
    icon: <GrMoney className="h-5 w-5" />,
  },
  {
    title: "Transactions",
    path: appRoutes.dashboard.agent.transactions,
    icon: <BitcoinCardIcon />,
  },
  {
    title: "Messages",
    path: appRoutes.dashboard.agent.messages,
    icon: <ChatsIcon />,
  },
  {
    title: "Bookings",
    path: appRoutes.dashboard.agent.bookings,
    icon: <ArchiveBookIcon />,
  },
];
