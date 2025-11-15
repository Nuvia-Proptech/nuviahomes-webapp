"use client";
import React, { useState } from "react";
import { UserSidebarNav } from "@/components/dashboard/User/UserSidebarNav";
import { UserDashBoardHeader } from "@/components/dashboard/User/UserDashBoardHeader";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const UserLayout = ({ children }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleOnNavClick = () => {
    setIsSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
  };
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar fixed to the left on tablet/desktop*/}
      <aside className="fixed h-screen w-40 lg:w-52 xl:w-60 bg-neutralColor-900 hidden md:block">
        <UserSidebarNav />
      </aside>

      {/* Mobile Navigation */}
      <Sheet
        className="md:hidden"
        open={isSheetOpen}
        onOpenChange={setIsSheetOpen}
      >
        <SheetContent side="left" className="w-60 no-scrollbar">
          <UserSidebarNav onCloseSheet={handleCloseSheet} />
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <main className="ml-0 md:ml-40 lg:ml-52 xl:ml-60 flex-1 overflow-y-auto no-scrollbar p-0.5 sm:p-2">
        <div>
          <UserDashBoardHeader onNavClick={handleOnNavClick} />
        </div>
        {children}
      </main>
    </div>
  );
};

export default UserLayout;
