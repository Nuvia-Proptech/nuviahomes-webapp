"use client";
import { UserSidebarNav } from "@/components/dashboard/User/UserSidebarNav";

const userLayout = ({ children }) => {
  return (
    <div className="flex bg-white p-2 gap-2.5">
      <UserSidebarNav />
      <main className="overflow-auto no-scrollbar w-full">{children}</main>
    </div>
  );
};

export default userLayout;
