import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import React from "react";
import { UserDashBoardHeader } from "../UserDashBoardHeader";
import Link from "next/link";
import { PlusSquareIcon } from "@/components/shared/Icons/PlusSquareIcon";
import { UserProfileImage } from "./UserProfileImage";
import { UserProfileForms } from "./UserProfileForms";

export const UserProfileIndex = () => {
  return (
    <AppWrapper className="">
      <UserDashBoardHeader />
      <div className="bg-neutralColor-900 p-3 rounded-2xl w-full font-urbanist my-2">
        <div className="my-3 flex justify-between items-center">
          <div>
            <p className="md:text-4xl font-semibold text-textColor font-urbanist">
              My Profile
            </p>
            <p className="text-textColor text-sm font-normal font-urbanist">
              A quick glance at all properties and Investments
            </p>
          </div>
          <Link href={"appRoutes.dashboard.admin.properties.addProperties"}>
            <button className="flex flex-row justify-center items-center gap-2.5 rounded-[12px] p-2.5 bg-textColor cursor-pointer">
              <PlusSquareIcon />
              <p className="font-publicSans text-base font-normal text-[#F9F6FE]">
                Change Password
              </p>
            </button>
          </Link>
        </div>

        <div className="w-full bg-white shadow rounded-lg p-5 font-urbanist my-2">
            <UserProfileImage />
            <UserProfileForms />
        </div>
      </div>
    </AppWrapper>
  );
};
