import { CourtHouseIcon } from "@/components/shared/Icons/CourtHouseIcon";
import { CreditCardIcon } from "@/components/shared/Icons/CreditCardIcon";
import { DatabaseIcon } from "@/components/shared/Icons/DatabaseIcon";
import { HandWithDollarIcon } from "@/components/shared/Icons/HandWithDollarIcon";
import { ProfileTwoUserIcon } from "@/components/shared/Icons/ProfileTwoUserIcon";

export const totalSpendingData = [
    {
      id: 1,
      icon: <ProfileTwoUserIcon />,
      iconClassName: "bg-[#F2EDFD]",
      title: "Investment Plans",
      price: "#0.00"
    },
    {
      id: 2,
      icon: <CreditCardIcon />,
      iconClassName: "border border-[#D89818]",
      title: "Due Amount",
      price: "#0.00"
    },
    {
      id: 3,
      icon: <DatabaseIcon />,
      iconClassName: "border border-[#5818D8]",
      title: "Total Profits",
      price: "#0.00"
    },
    {
      id: 4,
      icon: <HandWithDollarIcon />,
      iconClassName: "border border-[#48A848]",
      title: "Total Invest",
      price: "#0.00"
    },
    {
      id: 5,
      icon: <CourtHouseIcon />,
      iconClassName: "bg-[#FBEFEF]",
      title: "Withdrawals",
      price: "#0.00"
    },
  ]