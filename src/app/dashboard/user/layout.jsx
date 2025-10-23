"use client";
import { UserSidebarNav } from "@/components/dashboard/User/UserSidebarNav";

const userLayout = ({ children }) => {
  return (
    <div className="flex bg-white p-2">
      <UserSidebarNav />
      <main className="flex-1 overflow-auto no-scrollbar w-fit">{children}</main>
    </div>
  );
};

export default userLayout;
