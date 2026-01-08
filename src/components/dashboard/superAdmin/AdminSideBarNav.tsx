"use client";
import React, { memo } from "react";
import Link from "next/link";
import { adminSideNavItems } from "@/constants/AdminSideNavItems";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { SideBarMenuItem } from "@/components/shared/SideBarMenuItem";
import { LogoutModal } from "@/components/shared/LogoutModal";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AdminSideBarNav = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const { clearAuth } = useAuthStore();
  const router = useRouter();

  const handleLogoutConfirm = () => {
    clearAuth();
    router.push("/nuvia-proptech-admin-login");
    setIsLogoutModalOpen(false);
  };

  return (
    <div className="flex flex-col space-y-6 w-full bg-primaryColorLight shadow-lg h-full relative">
      <div className="cursor-pointer flex justify-center py-5">
        <Link href="/">
          <Image src={logo} alt="Logo" width={120} height={40} />
        </Link>
      </div>

      <div className="flex flex-col space-y-2 md:px-6">
        {adminSideNavItems.map((item, idx) => {
          return (
            <SideBarMenuItem
              key={idx}
              item={item}
              onItemClick={() => {
                if (item.title === "Logout") {
                  setIsLogoutModalOpen(true);
                }
              }}
            />
          );
        })}
      </div>

      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogoutConfirm}
      />
    </div>
  );
};

const memoizedAdminSideBarNav = memo(AdminSideBarNav);
export { memoizedAdminSideBarNav as AdminSideBarNav };
