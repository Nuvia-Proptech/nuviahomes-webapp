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
    <div className="flex flex-col h-full overflow-y-auto no-scrollbar">
      {/* Fixed top logo section */}
      <div className="flex justify-center py-2 border-neutral-800">
        <Link href="/">
          <Image src={logo} alt="Logo" width={120} height={40} />
        </Link>
      </div>

      {/* Scrollable menu area */}
      <div className="flex-1 mb-10">
        <div className="mt-5">
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
      </div>

      {/* Fixed bottom card/button */}
      <div className="p-2">
        <div className="relative aspect-square rounded-lg bg-dashboard-user mx-2.5">
          <button className="mx-3 w-32 flex justify-center items-center rounded-3xl p-2.5 bg-gradient-to-br from-[#1B5590] via-[#35AF72] to-[#B5E03A] cursor-pointer absolute bottom-5 left-1/2 -translate-x-1/2">
            <p className="font-urbanist text-sm font-normal text-white">
              Download
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
