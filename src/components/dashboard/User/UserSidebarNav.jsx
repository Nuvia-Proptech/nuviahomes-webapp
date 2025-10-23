"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { UserNavMenuItem } from "./UserNavMenuItem";
import {
  userGeneralItems,
  userMainMenuItems,
} from "@/constants/UserSideNavItems";

export const UserSidebarNav = () => {
  return (
    <div className="md:w-52 h-screen bg-neutralColor-900 overflow-auto no-scrollbar">
      <div className="flex flex-col justify-between h-full w-full">
        {/* Logo Section */}
        <div className="cursor-pointer flex justify-center py-3">
          <Link href="/">
            <Image src={logo} alt="Logo" width={120} height={40} />
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-sm font-normal text-textColor mb-3 ml-5">
            MAIN MENU
          </p>
          {userMainMenuItems.map((item) => (
            <UserNavMenuItem key={item.path} item={item} />
          ))}

          <p className="text-sm font-normal text-textColor mt-9 mb-3 ml-5">
            GENERAL
          </p>
          {userGeneralItems.map((item) => (
            <UserNavMenuItem key={item.path} item={item} />
          ))}
        </div>

        <div className="relative h-44 w-48 rounded-lg bg-dashboard-user">
          <button className="ml-3 w-39 flex justify-center items-center rounded-3xl p-2.5 bg-gradient-to-br from-[#1B5590] via-[#35AF72] to-[#B5E03A] cursor-pointer">
            <p className="font-urbanist text-sm font-normal text-white">
              Download
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
