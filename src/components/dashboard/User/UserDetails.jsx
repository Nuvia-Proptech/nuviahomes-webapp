"use client"
import { MessageNotificationIcon } from "@/components/shared/Icons/MessageNotificationIcon";
import { NotificationBingIcon } from "@/components/shared/Icons/NotificationBingIcon";
import team from "@/assets/images/team1.png";
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import appRoutes from "@/constants/AppRoutes";

export const UserDetails = ({className}) => {
    const router = useRouter();

    const handleProfileClick = (e) => {
      e.stopPropagation();
      router.push(appRoutes.dashboard.user.profile);
    };
  return (
    <div className={`flex gap-2.5 ${className}`}>
        {/* Message Notification */}
        <div className="w-14 h-14 rounded-full bg-white hidden lg:flex justify-center items-center">
          <button>
            <MessageNotificationIcon />
          </button>
        </div>
        {/* General Message */}
        <div className="w-14 h-14 rounded-full bg-white hidden lg:flex justify-center items-center">
          <button>
            <NotificationBingIcon />
          </button>
        </div>
        {/* User Profile */}
        <button onClick={handleProfileClick} className="flex gap-2 justify-center items-center cursor-pointer">
          <div className="w-14 h-14 rounded-full bg-[#FBEFEF] flex justify-center items-center">
            <Image
              className="h-9 w-9 rounded-full border border-neutralColor-900"
              height={40}
              width={40}
              src={team}
              alt="User Profile Image"
            />
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="text-sm text-textColor font-bold">Osim Faith</p>
            <p className="text-sm text-textColor font-normal">
              dbossosim@gmail.com
            </p>
          </div>
        </button>
      </div>
  )
}
