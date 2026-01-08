import AdminLogin from "@/components/auth/admin/AdminLogin";
import React from "react";

export const metadata = {
  title: "Admin Login | Nuvia Homes",
  description: "Administrative access portal for Nuvia Homes",
};

export default function AdminLoginPage() {
  return (
    <main>
      <AdminLogin />
    </main>
  );
}
