// components/dashboard/superAdmin/AdminSideBarNav.jsx
"use client";
import React, { memo } from "react";
import Link from "next/link";
import { adminSideNavItems } from "@/constants/AdminSideNavItems";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { SideBarMenuItem } from "@/components/shared/SideBarMenuItem";

const AdminSideBarNav = () => {
  return (
    <div className="md:w-52 bg-white h-screen flex-shrink-0 fixed left-0 top-0 hidden md:block z-10">
      <div className="flex flex-col space-y-6 w-full bg-primaryColorLight shadow-lg h-full">
        <div className="cursor-pointer flex justify-center py-5">
          <Link href="/">
            <Image src={logo} alt="Logo" width={120} height={40} />
          </Link>
        </div>

        <div className="flex flex-col space-y-2 md:px-6">
          {adminSideNavItems.map((item, idx) => {
            return <SideBarMenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

const memoizedAdminSideBarNav = memo(AdminSideBarNav)
export { memoizedAdminSideBarNav as AdminSideBarNav}