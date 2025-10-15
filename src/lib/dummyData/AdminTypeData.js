import { BuildingIconTwo } from "@/components/shared/Icons/BuildingIconTwo";
import { CrownIcon } from "@/components/shared/Icons/CrownIcon";
import { ShoppingBagIcon } from "@/components/shared/Icons/ShoppingBagIcon";

export const adminTypeData = [
    {
      id: "builder",
      icon: <BuildingIconTwo />,
      title: "I am the Builder",
      description:
        "List property as Builder, list your project and get a high reach very fast",
        activeColor: "#5818D8", 
      inactiveColor: "#344346" 
    },
    {
      id: "owner",
      icon: <CrownIcon />,
      title: "I am the Owner",
      description:
        "Submit property as an individual.Lease, Rent or Sell at the best price",
        activeColor: "#5818D8", 
      inactiveColor: "#344346" 
    },
    {
      id: "broker",
      icon: <ShoppingBagIcon />,
      title: "I am the Broker",
      description:
        "Earn highest commission by listing your clients properties at the best price",
        activeColor: "#5818D8", 
      inactiveColor: "#344346" 
    },
  ];