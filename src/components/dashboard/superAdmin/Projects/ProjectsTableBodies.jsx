import Image from "next/image";
import React from "react";
import houseImage from "@/assets/images/house.png";
import team from "@/assets/images/team1.png";
import team2 from "@/assets/images/team2.jpg";
import team3 from "@/assets/images/team3.png";
import { EyeIcon } from "@/components/shared/Icons/EyeIcon";
import { MoreIcon } from "@/components/shared/Icons/MoreIcon";
import { ProgressBar } from "./ProgressBar";
import { TeamAvatarGroup } from "./TeamAvatarGroup";

const teamMembers = [
  {
    id: "1",
    name: "John Doe",
    avatar: team,
  },
  {
    id: "2",
    name: "Jane Smith",
    avatar: team2,
  },
  {
    id: "3",
    name: "Mike Johnson",
    avatar: team3,
  },
  {
    id: "4",
    name: "Sarah Wilson",
    avatar: houseImage,
  },
  {
    id: "5",
    name: "David Brown",
    avatar: team,
  },
];

export const ProjectsTableBodies = ({
  id,
  name,
  location,
  leader,
  startDate,
  endDate,
  progress,
}) => {
  return (
    <tr
      key={id}
      className="border-t border-textColor/25 font-semibold font-urbanist text-sm"
    >
      <td className="text-textColorFaded py-2">{id}</td>
      <td className="flex items-center justify-start gap-2 py-3">
        <Image
          className="object-cover rounded-full"
          height={40}
          width={40}
          src={houseImage}
          alt="Property Image"
        />
        <div>
          <p className="font-semibold text-textColor">{name}</p>
          <p className="text-xs text-textColorFaded">{location}</p>
        </div>
      </td>
      <td className="">
        <p className="text-sm text-textColorFaded">{leader}</p>
      </td>
      <td>
        <TeamAvatarGroup members={teamMembers} maxDisplay={3} size="lg" />
      </td>
      <td>
        <p className="text-sm text-textColorFaded">{startDate}</p>
      </td>
      <td>
        <p className="text-sm text-textColorFaded">{endDate}</p>
      </td>
      <td>
        <ProgressBar progress={progress} />
      </td>
      <td>
        <div class="flex items-center gap-3">
          <button title="View">
            <EyeIcon />
          </button>
          <button title="More">
            <MoreIcon />
          </button>
        </div>
      </td>
    </tr>
  );
};
