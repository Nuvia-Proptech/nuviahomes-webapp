import { cn } from "@/lib/utils";
import React from "react";
import { ProgressBar } from "./ProgressBar";

export const ProjectTotalSpendingCard = ({
  className,
  title,
  item,
  description,
  progress,
  icon,
  iconClassName,
}) => {
  return (
    <div
      className={cn(
        "w-64 fl rounded-xl bg-white p-4 shadow-md shadow-[#22303E1A] font-urbanist relative",
        className
      )}
    >
      <div className="relative">
        <div className="flex flex-col gap-0.5 mb-4">
          <p className="text-sm text-black font-normal">{title}</p>
          <p className="text-2xl text-[#0F1415] font-bold font-publicSans">
            {item}
          </p>
          <p className="text-sm text-textColor font-normal/80">{description}</p>
        </div>
        <div
          className={cn(
            "w-10.5 h-9.5 rounded-md absolute top-1 right-1 flex justify-center items-center",
            iconClassName
          )}
        >
          {icon}
        </div>
      </div>

      <ProgressBar
        progress={progress}
        isPercent={false}
        className="mr-0 absolute bottom-4 left-4 right-4"
      />
    </div>
  );
};
