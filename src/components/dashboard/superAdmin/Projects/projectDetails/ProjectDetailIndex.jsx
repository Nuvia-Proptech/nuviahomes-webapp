import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import React, { useState } from "react";
import { SuperAdminHeader } from "../../SuperAdminHeader";
import { Timeline } from "./Timeline";
import { ProjectInformation } from "./ProjectInformation";
import appRoutes from "@/constants/AppRoutes";
import { PlusSquareIcon } from "@/components/shared/Icons/PlusSquareIcon";
import Link from "next/link";
import { ProjectTotalSpendingCard } from "../ProjectTotalSpendingCard";
import { UserIcon } from "@/components/shared/Icons/UserIcon";
import { useParams } from "next/navigation";

export const ProjectDetailIndex = ({ project, milestones }) => {
  const [detailView, setDetailView] = useState("overview");
  const params = useParams();
  const slug = params.slug;

  return (
    <AppWrapper>
      <SuperAdminHeader />
      <div className="px-4">
        <div className="py-5 flex justify-between items-center">
          {/* project name and Location */}
          <div>
            <p className="md:text-4xl font-semibold text-textColor font-urbanist">
              {project.name}
            </p>
            <p className="text-textColor text-xs font-normal font-urbanist">
              {project.location}
            </p>
          </div>
          {/* Pause and edit btn */}
          <div className="flex gap-4.5">
            <Link href={appRoutes.dashboard.admin.projects.slug(slug).index}>
              <button className="flex flex-row justify-center items-center gap-2.5 rounded-[12px] p-2.5 bg-textColor cursor-pointer">
                <PlusSquareIcon />
                <p className="font-publicSans text-base font-normal text-white">
                  Pause Project
                </p>
              </button>
            </Link>
            <Link href={appRoutes.dashboard.admin.projects.slug(slug).editProject}>
              <button className="flex flex-row justify-center items-center gap-2.5 rounded-[12px] p-2.5 bg-primaryColor cursor-pointer">
                <PlusSquareIcon />
                <p className="font-publicSans text-base font-normal text-white">
                  Edit Project
                </p>
              </button>
            </Link>
          </div>
        </div>

        <div className="my-5 flex flex-wrap gap-4">
          <ProjectTotalSpendingCard
            title="Overall Progress"
            item="75%"
            progress={70}
            icon={<UserIcon fill="#5818D8" />}
            iconClassName="bg-[#F2EDFD]"
          />

          <ProjectTotalSpendingCard
            title="Budget Utilized"
            item="#250M"
            progress={20}
            description="#150M of #500M"
            icon={<UserIcon fill="#B43C3C" />}
            iconClassName="bg-[#FBEFEF]"
          />

          <ProjectTotalSpendingCard
            title="Total Bookings"
            item="12/09/2026"
            progress={20}
            description="120 Days Left"
            icon={<UserIcon fill="#48A848" />}
            iconClassName="bg-[#DFE6E7]"
          />

          <ProjectTotalSpendingCard
            title="Projected Finish"
            item="#250M"
            progress={20}
            description="#150M of #500M"
            icon={<UserIcon fill="#48A848" />}
            iconClassName="bg-[#DFE6E7]"
          />
        </div>

        {/*'overview', 'timeline/milestones', 'documentation & files'  */}
        <div className="bg-white w-full flex gap-3 my-5">
          {["overview", "timeline/milestones", "documentation & files"].map(
            (item) => (
              <div
                key={item}
                onClick={() => setDetailView(item)}
                className={`p-3.5 text-xl text-textColor font-normal font-urbanist capitalize  border-b-4 ${
                  detailView === item
                    ? "border-b-primaryColor/60 bg-[#DFE6E757]"
                    : "border-b-transparent"
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>

        {/* Project information and Project Timeline */}
        <div className="flex justify-between flex-wrap gap-3">
          <ProjectInformation project={project} />
          <Timeline milestones={milestones} />
        </div>
      </div>
    </AppWrapper>
  );
};
