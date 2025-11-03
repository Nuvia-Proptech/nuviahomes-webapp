import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import React from "react";
import { UserDashBoardHeader } from "../UserDashBoardHeader";
import Link from "next/link";
import { PlusSquareIcon } from "@/components/shared/Icons/PlusSquareIcon";
import appRoutes from "@/constants/AppRoutes";
import { UserProjectCard } from "./UserProjectCard";
import { userProjectsData } from "@/lib/dummyData/userProjectsData";

export const UserProjectsIndex = () => {
  return (
    <AppWrapper className="">
      <UserDashBoardHeader />

      <div className="bg-neutralColor-900 p-3 rounded-2xl w-full font-urbanist my-2">
        <div className="my-3 flex justify-between items-center">
          <div>
            <p className="md:text-4xl font-semibold text-textColor font-urbanist">
              My Projects
            </p>
            <p className="text-textColor text-sm font-normal font-urbanist">
              A quick glance at all properties and Investments
            </p>
          </div>

          <button className="flex flex-row justify-center items-center gap-2.5 rounded-[12px] p-2.5 bg-textColor cursor-pointer">
            <PlusSquareIcon />
            <p className="font-publicSans text-base font-normal text-[#F9F6FE]">
              Add Project
            </p>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
      {userProjectsData.map((project) => (
        <UserProjectCard key={project.id} project={project} />
      ))}
    </div>
      </div>
    </AppWrapper>
  );
};
