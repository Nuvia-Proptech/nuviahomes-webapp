import React, { useMemo, useState } from "react";
import { SuperAdminHeader } from "../SuperAdminHeader";
import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import { projectData } from "@/lib/dummyData/projectsData";
import { ProjectTables } from "./ProjectTables";
import { SelectDropDown } from "@/components/shared/SelectDropDown";
import { AppInput } from "@/components/shared/AppSetup/AppInput";
import { TotalSpendingItemsCard } from "@/components/shared/TotalSpendingItemsCard";
import { totalProjectData } from "@/lib/dummyData/totalProjectData";
import Link from "next/link";
import { PlusSquareIcon } from "@/components/shared/Icons/PlusSquareIcon";
import appRoutes from "@/constants/AppRoutes";

export const ProjectsIndex = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    if (!searchQuery) return projectData;

    return projectData.filter(
      (project) =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.team.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [projectData, searchQuery]);

  const onSearchHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <AppWrapper>
      <SuperAdminHeader />

      <div className="px-4">
        <div className="py-5 flex justify-between items-center">
          <p className="md:text-4xl font-semibold text-textColor font-urbanist">
            Projects
          </p>

          <Link href={appRoutes.dashboard.admin.projects.index}>
            <button className="flex flex-row justify-center items-center gap-2.5 rounded-[12px] p-2.5 bg-textColor cursor-pointer">
              <PlusSquareIcon />
              <p className="font-publicSans text-base font-normal text-[#F9F6FE]">
                Add Project
              </p>
            </button>
          </Link>
        </div>

        {/* Total Spending Section */}
        <div className="my-3 flex flex-row flex-wrap gap-5">
          {totalProjectData.map((item) => {
            return (
              <TotalSpendingItemsCard
                key={item.id}
                title={item.title}
                price={item.price}
                icon={item.icon}
                iconClassName={item.iconClassName}
                className="py-4"
              />
            );
          })}
        </div>

        <div className="bg-white">
          {/* ?\Show and search */}
          <div className="flex flex-row flex-wrap justify-between items-center gap-4 my-5 py-5">
            {/* Show Dropdown  */}
            <SelectDropDown
              label="show"
              options={
                <>
                  <option value="10">10</option>
                  <option value="5">5</option>
                  <option value="15">5</option>
                  <option value="20">20</option>
                </>
              }
            />

            {/* Filters and Search  */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search  */}
              <AppInput
                type="text"
                placeholder="Search projects"
                onChange={onSearchHandler}
                className="w-60"
              />
            </div>
          </div>
          {/* ?Tables */}
          <ProjectTables projectData={filteredProjects} />
        </div>
      </div>
    </AppWrapper>
  );
};
