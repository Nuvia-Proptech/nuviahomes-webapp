import React from "react";
import { RoleSwitcher } from "@/components/shared/RoleSwitcher";

const AgentSettingsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p className="text-gray-600 mb-6">Agent settings page</p>

      <RoleSwitcher />
    </div>
  );
};

export default AgentSettingsPage;
