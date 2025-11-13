"use client";
import { UserSidebarNav } from "@/components/dashboard/User/UserSidebarNav";
import { UserDashBoardHeader } from "@/components/dashboard/User/UserDashBoardHeader";

const UserLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar fixed to the left on tablet/desktop*/}
      <aside className="fixed h-screen w-60 bg-neutralColor-900">
        <UserSidebarNav />
      </aside>

      {/* Main content */}
      <main className="ml-60 flex-1 overflow-y-auto no-scrollbar p-2">
        <div>
          <UserDashBoardHeader />
        </div>
        {children}
      </main>
    </div>
  );
};

export default UserLayout;
