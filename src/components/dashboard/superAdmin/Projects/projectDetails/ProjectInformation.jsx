import React from "react";

export const ProjectInformation = ({
  project
}) => {
  return (
    <div className="w-full max-w-lg bg-white px-3 py-3.5 font-urbanist">
      {/* Header */}
      <h2 className="text-xl text-textColor font-semibold text-left mb-4">
        Project Information
      </h2>

      <div className="my-5">
        {/* Start date */}
        <div className="w-full flex justify-between text-textColor text-base font-normal font-urbanist my-2-5">
          <p className="font-semibold">Start Date</p>
          <p>{project.startDate}</p>
        </div>

        {/* end Date */}
        <div className="w-full flex justify-between text-textColor text-base font-normal font-urbanist my-2.5">
          <p className="font-semibold">End Date</p>
          <p>{project.endDate}</p>
        </div>

        {/* Project Type */}
        <div className="w-full flex justify-between text-textColor text-base font-normal font-urbanist my-2.5">
          <p className="font-semibold">Project Type</p>
          <p>{project.projectType}</p>
        </div>

        {/* current Pahse */}
        <div className="w-full flex justify-between text-textColor text-base font-normal font-urbanist my-2.5">
          <p className="font-semibold">Current Phase</p>
          <p>{project.currentPhase}</p>
        </div>

        {/* location */}
        <div className="w-full flex justify-between text-textColor text-base font-normal font-urbanist my-2.5">
          <p className="font-semibold">Location</p>
          <p>{project.location}</p>
        </div>

        {/* project description */}
        <div className="my-5">
          <h2 className="text-xl text-textColor font-semibold text-left mb-4">
            Description
          </h2>
          <p className="text-textColor text-base font-normal font-urbanist text-justify">
            Our current project, dubbed "Future Vision," aims to revolutionize
            urban living by integrating smart technology into everyday life. We
            are developing innovative solutions that enhance sustainability and
            connectivity in cities. The team is focused on creating
            user-friendly applications that empower residents to engage with
            their environment.{" "}
          </p>
        </div>

        {/* Project Team */}
        <div className="my-5">
          <h2 className="text-xl text-textColor font-semibold text-left mb-4">
            Team
          </h2>
          {/* Lead */}
          <div className="w-full flex justify-between text-textColor text-base font-normal font-urbanist my-2-5">
            <p className="font-semibold">Lead</p>
            <p>{project.leader}</p>
          </div>

          {/* Co-lead */}
          <div className="w-full flex justify-between text-textColor text-base font-normal font-urbanist my-2-5">
            <p className="font-semibold">Co-Lead</p>
            <p>{project.coLeader}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
