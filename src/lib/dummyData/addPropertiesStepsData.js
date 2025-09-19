import { BitcoinCardIcon } from "@/components/shared/Icons/BitcoinCardIcon";
import { BuildingIcon } from "@/components/shared/Icons/BuildingIcon";
import { HouseIcon } from "@/components/shared/Icons/HouseIcon";
import { LocationAddIcon } from "@/components/shared/Icons/LocationAddIcon";
import { UserProfileAddIcon } from "@/components/shared/Icons/UserProfileAddIcon";

export const addPropertiestepsData = [
    {
      id: 'personal',
      icon: <UserProfileAddIcon />,
      title: 'Personal Details',
      details: 'Your Name/Email',
       activeColor: "#FFFFFF", 
    inactiveColor: "#4E6164" 
    },
    {
      id: 'property',
      icon: <HouseIcon />,
      title: 'Property Details',
      details: 'Property Type',
      activeColor: "#FFFFFF", 
      inactiveColor: "#4E6164" 
    },
    {
      id: 'features',
      icon: <BuildingIcon />,
      title: 'Property Features',
      details: 'Media/Bedrooms/Floor',
       activeColor: "#FFFFFF", 
    inactiveColor: "#4E6164" 
    },
    {
      id: 'area',
      icon: <LocationAddIcon />,
      title: 'Property Area',
      details: 'Covered Area',
      activeColor: "#FFFFFF", 
      inactiveColor: "#4E6164" 
    },
    {
      id: 'price',
      icon: <BitcoinCardIcon />,
      title: 'Price Details',
      details: 'Expected Price',
      activeColor: "#FFFFFF", 
      inactiveColor: "#4E6164" 
    }
  ];