"use client";
import { AdminSideBarNav } from "@/components/dashboard/superAdmin/AdminSideBarNav";

const AdminLayout = ({children}) => {
  return (
    <div className="flex bg-secondaryColor">
      <AdminSideBarNav />
      <main className="flex-1 overflow-auto no-scrollbar w-fit">{children}</main>
    </div>
  );
}

export default AdminLayout