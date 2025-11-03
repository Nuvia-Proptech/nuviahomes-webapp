import React from "react";
import houseImg from "@/assets/images/house.png";
import Image from "next/image";
import { MoreIcon } from "@/components/shared/Icons/MoreIcon";
import { TeamAvatarGroup } from "@/components/shared/TeamAvatarGroup";
import { MessageCircle } from "lucide-react";

export const UserProjectCard = ({ project }) => {
  const hoursPercentage = (project.hours.completed / project.hours.total) * 100;

  const teamMembersForAvatar = project.teamMembers.avatars.map(
    (avatar, index) => ({
      id: index,
      avatar: avatar,
      name: `Team Member ${index + 1}`,
    })
  );

  return (
    <div className="bg-white rounded-2xl p-4 shadow-md font-urbanist">
      {/* Project image, title and client name */}
      <div className="flex justify-between">
        <div className="flex gap-2.5 justify-center items-center">
          {/* Image */}
          <div className="relative w-10 h-10 rounded-sm overflow-hidden bg-transparent">
            <Image
              src={houseImg}
              alt="project image"
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>

          {/* title and client name  */}
          <div>
            <p className="text-textColor text-base font-semibold">
              Mayfair Lounge Project
            </p>
            <p className="text-textColorFaded text-sm font-semibold">
              Client: Osim Faith Ofuka
            </p>
          </div>
        </div>

        <MoreIcon />
      </div>

      {/* Budget Section & Dates Section */}
      <div className="my-3 flex justify-between">
        <div className="p-2.5 bg-neutralColor-900 w-fit rounded-sm flex flex-col gap-1.5 justify-between">
          <p className="text-xs font-semibold text-black">
            {project.totalBudget}/
            <span className="text-textColor">{project.originalBudget}</span>
          </p>
          <p className="text-sm text-gray-600 font-medium">Total Budget</p>
        </div>
        {/* Dates Section */}
        <div className="p-2w-fit">
          <p className="text-sm text-textColor font-semibold">
            Start Date:{" "}
            <span className="text-xs text-textColorFaded font-semibold">
              {project.startDate}
            </span>
          </p>
          <p className="text-sm text-textColor font-semibold mt-1.5">
            Deadline:{" "}
            <span className="text-xs text-textColorFaded font-semibold">
              {project.deadline}
            </span>
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-textColorFaded text-sm font-semibold leading-relaxed">
        {project.description}
      </p>

      {/* Divider */}
      <div className="border-t border-[#22303E38] my-4"></div>

      {/* Progress Section */}
      <div className="space-y-4">
        {/* Hours Progress */}
        <div className="flex justify-between items-center my-2">
          <p className="text-sm font-semibold text-textColor">
            All Hours: {project.hours.completed}/{project.hours.total}
          </p>
          <div className="py-2 px-5 rounded-sm bg-successColor/20 text-xs text-successColor font-semibold">
            {project.hours.daysLeft} days left
          </div>
        </div>

        {/* Tasks Progress */}
        <div>
          <div className="flex justify-between items-center my-3">
            <p className="text-sm font-semibold text-textColorFaded">
              Tasks: {project.tasks.completed}/{project.tasks.total}
            </p>
            <p className="text-sm font-semibold text-textColorFaded">
              {project.tasks.completedPercentage}% Completed
            </p>
          </div>
          <div className="w-full bg-grayColor/10 rounded-full h-2">
            <div
              className="bg-primaryColor/80 h-2 rounded-full"
              style={{ width: `${project.tasks.completedPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="flex justify-between items-center mt-6">
        {/* Avatar Stack */}

        <TeamAvatarGroup
          members={teamMembersForAvatar}
          maxDisplay={3}
          size="md"
        />
        <p className="text-xs text-textColorFaded font-semibold">
          {project.teamMembers.count} Members on this project
        </p>

        <button className="flex justify-center items-center gap-2.5 text-textColorFaded text-sm font-semibold">
          <MessageCircle />
          {/* chat/comment length */}
          <p>54</p>
        </button>
      </div>
    </div>
  );
};
