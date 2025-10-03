import { BuildingIcon } from "@/components/shared/Icons/BuildingIcon";
import { HouseIcon } from "@/components/shared/Icons/HouseIcon";

export const editProjectStepsData = [
    {
      id: 'property',
      icon: <HouseIcon />,
      title: 'Property Details',
      details: 'Property Type',
      activeColor: "#FFFFFF", 
      inactiveColor: "#4E6164" 
    },
    {
      id: 'documents',
      icon: <BuildingIcon />,
      title: 'Project Documents',
      details: 'Documents Deeds',
       activeColor: "#FFFFFF", 
    inactiveColor: "#4E6164" 
    },
    
  ];