import React from "react";
import { ProjectsTableBodies } from "./ProjectsTableBodies";

export const ProjectTables = ({ projectData }) => {
  return (
    <div className="overflow-x-auto my-5">
      <table className="min-w-[900px] w-full text-sm text-left text-textColor">
        <thead className="">
          <tr className="text-textColor font-semibold text-sm font-urbanist">
            <th className="py-2 w-16">ID</th>
            <th className="py-2 w-64">Project</th>
            <th className="py-2 w-32">Leader</th>
            <th className="py-2 w-40">Team</th>
            <th className="py-2 w-24">Start date</th>
            <th className="py-2 w-24">End date</th>
            <th className="py-2 w-32">Progress</th>
            <th className="py-2 w-24">Actions</th>
          </tr>
        </thead>

        <tbody className="">
          {projectData.map((project) => {
            return (
              <ProjectsTableBodies
                id={project.id}
                name={project.name}
                location={project.location}
                leader={project.leader}
                startDate={project.startDate}
                endDate={project.endDate}
                progress={project.progress}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
