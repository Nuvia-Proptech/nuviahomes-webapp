import { SettingsIcon } from "@/components/shared/Icons/SettingsIcon";
import { MessageQuestionIcon } from "@/components/shared/Icons/MessageQuestionIcon";
import { LogoutIcon } from "@/components/shared/Icons/LogoutIcon";

// Shared General Items for all dashboard roles (Owner, Investor, Agent)
// These items appear in the "GENERAL" section of every dashboard sidebar
export const createGeneralItems = (basePath: string) => [
  {
    title: "Settings",
    path: `${basePath}/settings`,
    icon: <SettingsIcon />,
  },
  {
    title: "Help",
    path: `${basePath}/help`,
    icon: <MessageQuestionIcon />,
  },
  {
    title: "Logout",
    path: "",
    icon: <LogoutIcon />,
  },
];

// Pre-configured general items for each role
export const ownerGeneralItems = createGeneralItems("/owner");
export const investorGeneralItems = createGeneralItems("/user");
export const agentGeneralItems = createGeneralItems("/agent");
