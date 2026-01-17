"use client";
import React, { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { defaultRedirects } from "@/config/routeConfig";
import { Loader2 } from "lucide-react";

export const RoleSwitcher = () => {
  const { user, updateUserRole } = useAuthStore();
  const router = useRouter();
  const [loadingRole, setLoadingRole] = useState<string | null>(null);

  const handleRoleSwitch = async (role: string) => {
    if (user?.role === role) return;

    setLoadingRole(role);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Update role in store
    updateUserRole(role);

    // Redirect to appropriate dashboard
    const redirectUrl =
      defaultRedirects.authenticated[
        role as keyof typeof defaultRedirects.authenticated
      ];
    router.push(redirectUrl);

    setLoadingRole(null);
  };

  const roles = [
    { id: "user", label: "Investor (User)" },
    { id: "owner", label: "Owner" },
    { id: "agent", label: "Agent" },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 my-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-600">
        Role Switcher (Test Mode)
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Current Role:{" "}
        <span className="font-bold capitalize text-gray-600">{user?.role}</span>
      </p>

      <div className="flex flex-wrap gap-3">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => handleRoleSwitch(role.id)}
            disabled={!!loadingRole || user?.role === role.id}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors
              ${
                user?.role === role.id
                  ? "bg-primary text-white cursor-default"
                  : "bg-white border border-gray-300 hover:bg-gray-100 text-gray-700"
              }
              ${
                loadingRole && loadingRole !== role.id
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }
            `}
          >
            {loadingRole === role.id && (
              <Loader2 className="h-4 w-4 animate-spin" />
            )}
            {role.label}
          </button>
        ))}
      </div>
    </div>
  );
};
