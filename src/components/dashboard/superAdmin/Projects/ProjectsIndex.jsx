import React, { useMemo, useState } from "react";
import { SuperAdminHeader } from "../SuperAdminHeader";
import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import { projectData } from "@/lib/dummyData/projectsData";
import { ProjectTables } from "./ProjectTables";
import { SelectDropDown } from "@/components/shared/SelectDropDown";
import { AppInput } from "@/components/shared/AppSetup/AppInput";

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

  return (
    <AppWrapper>
      <SuperAdminHeader />
      <div className="px-4">
        {/* ?\Show and search */}
        <div className="flex flex-row flex-wrap justify-between items-center gap-4">
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
              onChange={(e) => onSearch(e.target.value)}
              className="w-60"
            />
          </div>
        </div>
        {/* ?Tables */}
        <ProjectTables />
      </div>
    </AppWrapper>
  );
};
