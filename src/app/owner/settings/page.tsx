import React from "react";
import { RoleSwitcher } from "@/components/shared/RoleSwitcher";

const OwnerSettingsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p className="text-gray-600 mb-6">Owner settings page</p>

      <RoleSwitcher />
    </div>
  );
};

export default OwnerSettingsPage;
