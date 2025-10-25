import { MessageNotificationIcon } from "@/components/shared/Icons/MessageNotificationIcon";
import { NotificationBingIcon } from "@/components/shared/Icons/NotificationBingIcon";
import { SearchIcon } from "@/components/shared/Icons/SearchIcon";
import team from "@/assets/images/team1.png";
import React from "react";
import Image from "next/image";

export const UserDashBoardHeader = () => {
  return (
    <div className="bg-neutralColor-900 p-3 rounded-2xl w-full flex justify-between font-urbanist">
      <div className="w-80 flex gap-3 justify-center items-center border border-tertiaryColor rounded-2xl h-12 py-2 px-3 font-urbanist">
        <SearchIcon width="20" height="20" />
        <input
          type="text"
          placeholder="Search Contents"
          className="w-full border-none outline-none text-textColor text-sm focus:outline-none focus:text-slate-900"
        />
      </div>

      <div className="flex gap-2.5">
        {/* Message Notification */}
        <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center">
          <button>
            <MessageNotificationIcon />
          </button>
        </div>
        {/* General Message */}
        <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center">
          <button>
            <NotificationBingIcon />
          </button>
        </div>
        {/* User Profile */}
        <button className="flex gap-2 justify-center items-center">
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
    </div>
  );
};
