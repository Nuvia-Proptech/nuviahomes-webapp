import React from "react";
import { AdminSideBarNav } from "../dashboard/superAdmin/AdminSideBarNav";

interface AppAdminNavProps {
  children: React.ReactNode;
  className?: string;
}

export const AppAdminNav = ({ children, className }: AppAdminNavProps) => {
  return (
    <section className={`bg-secondaryColor flex flex-row ${className}`}>
      <AdminSideBarNav />
      {children}
    </section>
  );
};
