"use client";
import React from "react";
import Image from "next/image";
import houseImage from "@/assets/images/house.png";
import { TimerIcon } from "@/components/shared/Icons/TimerIcon";
import { CheckCircle, XCircle } from "lucide-react"; // Example icons

export const RecentSubmissionTableBodies = ({
  id,
  street,
  city,
  type,
  date,
  time,
  status,
}) => {
  // Map each status to its color and icon
  const statusMap = {
    Pending: {
      bg: "bg-warningColor/10",
      text: "text-warningColor",
      icon: <TimerIcon className="w-4 h-4 text-warningColor" />,
    },
    Cancelled: {
      bg: "bg-dangerColor/10",
      text: "text-dangerColor",
      icon: <XCircle className="w-4 h-4 text-dangerColor" />,
    },
    Approved: {
      bg: "bg-successColor/10",
      text: "text-successColor",
      icon: <CheckCircle className="w-4 h-4 text-successColor" />,
    },
  };

  // fallback if status is unexpected
  const { bg, text, icon } = statusMap[status] || statusMap["Pending"];

  return (
    <tr
      key={id}
      className="border-b border-[#F5F5F5] font-semibold font-urbanist text-sm"
    >
      {/* Property */}
      <td className="flex items-center justify-start gap-2 py-3">
        <Image
          className="object-cover rounded-sm"
          height={40}
          width={40}
          src={houseImage}
          alt="Property Image"
        />
        <div>
          <p className="font-semibold text-textColor">{street}</p>
          <p className="text-xs text-textColorFaded">{city}</p>
        </div>
      </td>

      {/* Type */}
      <td>
        <p className="text-xs text-textColorFaded">{type}</p>
      </td>

      {/* Date & Time */}
      <td>
        <div>
          <p className="text-textColor">{date}</p>
          <p className="text-xs text-textColorFaded">at {time}</p>
        </div>
      </td>

      {/* Status */}
      <td>
        <div
          className={`${bg} py-1.5 px-2.5 rounded-md gap-2 flex justify-center items-center w-fit h-fit`}
        >
          {icon}
          <p className={`${text} text-xs`}>{status}</p>
        </div>
      </td>
    </tr>
  );
};
