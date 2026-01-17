import { UserPropertiesIndex } from "@/components/dashboard/User/properties/UserPropertiesIndex";
import React from "react";
import appRoutes from "@/constants/AppRoutes";

// Owner Properties page - shares component with Agent's My Listings
const OwnerPropertiesPage = () => {
  return <UserPropertiesIndex submitRoute={appRoutes.dashboard.owner.properties.submitProperty} />;
};

export default OwnerPropertiesPage;
