"use client";
import React from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { defaultRedirects } from "@/config/routeConfig";
import { Loader2 } from "lucide-react";
import { useRequestRoleChange } from "@/lib/api/requests/auth/useRequestRoleChange";

export const RoleSwitcher = () => {
  const { user, updateUserRole, setAuth, access_token } = useAuthStore();
  const router = useRouter();

  const { requestRoleChange, isPending } = useRequestRoleChange({
    onSuccess: (data) => {
      // Update the auth store with the new user data from the API
      if (access_token && data.user) {
        setAuth(access_token, data.user);
      } else if (data.user) {
        // Fallback: just update the role if we don't have the full user object
        updateUserRole(data.user.role);
      }

      // Redirect to appropriate dashboard
      const redirectUrl =
        defaultRedirects.authenticated[
          data.user.role as keyof typeof defaultRedirects.authenticated
        ];
      router.push(redirectUrl);
    },
  });

  const handleRoleSwitch = (role: string) => {
    if (user?.role === role || isPending) return;
    requestRoleChange(role);
  };

  const roles = [
    { id: "user", label: "Investor (User)" },
    { id: "owner", label: "Owner" },
    { id: "agent", label: "Agent" },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 my-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-600">
        Switch Role
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
            disabled={isPending || user?.role === role.id}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors
              ${
                user?.role === role.id
                  ? "bg-primary text-white cursor-default"
                  : "bg-white border border-gray-300 hover:bg-gray-100 text-gray-700"
              }
              ${
                isPending && user?.role !== role.id
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }
            `}
          >
            {isPending && user?.role !== role.id && (
              <Loader2 className="h-4 w-4 animate-spin" />
            )}
            {role.label}
          </button>
        ))}
      </div>
    </div>
  );
};

