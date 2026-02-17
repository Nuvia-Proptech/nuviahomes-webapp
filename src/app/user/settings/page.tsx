"use client";
import React from "react";
import { RoleSwitcher } from "@/components/shared/RoleSwitcher";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import appRoutes from "@/constants/AppRoutes";

const UserSettingsPage = () => {
  const router = useRouter();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p className="text-gray-600 mb-6">Manage your account settings here.</p>

      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Account Type</h3>
          <p className="text-sm text-gray-500">Upgrade your account to list properties or manage clients.</p>
        </div>
        <Button onClick={() => router.push(appRoutes.dashboard.user.upgradeAccount)}>
          Become an Agent or Owner
        </Button>
      </div>

      <RoleSwitcher />
    </div>
    );
};

export default UserSettingsPage;
