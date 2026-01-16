import { UserPropertiesIndex } from "@/components/dashboard/User/properties/UserPropertiesIndex";
import React from "react";
import appRoutes from "@/constants/AppRoutes";

// Agent My Listings page - shares component with Owner's Properties
const AgentListingsPage = () => {
  return (
    <UserPropertiesIndex
      submitRoute={appRoutes.dashboard.agent.listings.submitListing}
    />
  );
};

export default AgentListingsPage;
