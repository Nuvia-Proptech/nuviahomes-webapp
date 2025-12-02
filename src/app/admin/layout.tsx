"use client";
import { AdminSideBarNav } from "@/components/dashboard/superAdmin/AdminSideBarNav";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex bg-secondaryColor">
      <aside className="fixed h-screen w-60 bg-primaryColorLight">
        <AdminSideBarNav />
      </aside>
      <main className="ml-60 flex-1 overflow-y-auto no-scrollbar w-full">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
