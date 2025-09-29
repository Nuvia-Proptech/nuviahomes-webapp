import { DiscIcon } from "@/components/shared/Icons/DiscIcon";
import { SettingsDeadlineIcon } from "@/components/shared/Icons/SettingsDeadlineIcon";
import { SettingsInProgressIcon } from "@/components/shared/Icons/SettingsInProgressIcon";
import { SharedGoodIcon } from "@/components/shared/Icons/SharedGoodIcon";

export const totalProjectData = [
    {
      id: 1,
      icon: <DiscIcon />,
      iconClassName: "bg-[#F2EDFD]",
      title: "All Projects",
      price: "120"
    },
    {
      id: 2,
      icon: <SharedGoodIcon />,
      iconClassName: "border border-successColor",
      title: "Approved projects",
      price: "100"
    },
    {
      id: 3,
      icon: <SettingsInProgressIcon />,
      iconClassName: "border border-primaryColor",
      title: "Ongoing Projects",
      price: "25"
    },
    {
      id: 4,
      icon: <SettingsDeadlineIcon />,
      iconClassName: "border border-[#D89818]",
      title: "Pending approval",
      price: "10"
    },
  ]