import appRoutes from "./AppRoutes";
import { ChatsIcon } from "@/components/shared/Icons/ChatsIcon";
import { ElementEqualIcon } from "@/components/shared/Icons/ElementEqualIcon";
import { BitcoinCardIcon } from "@/components/shared/Icons/BitcoinCardIcon";
import { GrMoney } from "react-icons/gr";
import { investorGeneralItems } from "./SharedSideNavItems";

// Investor (User) Main Menu Items
export const userMainMenuItems = [
  {
    title: "Dashboard",
    path: appRoutes.dashboard.user.index,
    icon: <ElementEqualIcon />,
  },
  {
    title: "Investments",
    path: appRoutes.dashboard.user.investments.index,
    icon: <GrMoney className="h-5 w-5" />,
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
];

// Re-export shared general items for investor
export const userGeneralItems = investorGeneralItems;
