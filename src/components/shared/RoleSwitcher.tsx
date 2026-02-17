"use client";
import React from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { defaultRedirects } from "@/config/routeConfig";

export const RoleSwitcher = () => {
  const { user, updateUserRole } = useAuthStore();
  const router = useRouter();

  const handleRoleSwitch = (role: string) => {
    if (user?.role === role) return;
    
    // Update role in frontend only
    updateUserRole(role);

    // Redirect to appropriate dashboard
    const redirectUrl =
      defaultRedirects.authenticated[
        role as keyof typeof defaultRedirects.authenticated
      ] || "/user";
    
    router.push(redirectUrl);
  };

  const roles = [
    { id: "user", label: "Investor (User)" },
    { id: "owner", label: "Owner" },
    { id: "agent", label: "Agent" },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 my-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-600">
        Switch Role (Dev Tool)
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
            disabled={user?.role === role.id}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors
              ${
                user?.role === role.id
                  ? "bg-primary text-white cursor-default"
                  : "bg-white border border-gray-300 hover:bg-gray-100 text-gray-700"
              }
            `}
          >
            {role.label}
          </button>
        ))}
      </div>
    </div>
  );
};

