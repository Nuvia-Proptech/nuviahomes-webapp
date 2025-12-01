import React from "react";
import { ChevronDownIcon } from "./Icons/ChevronDownIcon";
import { cn } from "@/lib/utils";

export const TotalSpendingItemsCard = ({
  icon,
  iconClassName,
  title,
  price,
  className
}) => {
  return (
    <div className={cn("w-80 flex flex-row justify-between items-center rounded-xl bg-white px-3 py-2 shadow-md shadow-[#22303E1A]", className)}>
     <div className="flex flex-row gap-10">
         {/* Icon */}
      <div className={cn("rounded-md p-1 w-12 h-12 flex justify-center items-center", iconClassName)}>
        {icon}
      </div>
      {/* Title and Amount */}
      <div>
        <p className="text-black text-base font-normal font-urbanist capitalize">
          {title}
        </p>
        <p className="text-textColorDark text-lg font-semibold font-urbanist">
          {price}
        </p>
      </div>
     </div>
      {/* Chevron down */}
      <ChevronDownIcon fill="#22303EE5" />
    </div>
  );
};
