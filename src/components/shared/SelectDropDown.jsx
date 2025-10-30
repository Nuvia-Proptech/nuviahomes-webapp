import React from "react";
import { ChevronDownIcon } from "./Icons/ChevronDownIcon";
import { cn } from "@/lib/utils";

export const SelectDropDown = ({ label, options, id, className, selectClassName }) => {
  return (
    <div className={cn(`flex items-center gap-2`, className)}>
      <label
      htmlFor={`${label}`}
        className="text-base font-normal font-urbanist text-[#22303EE5] capitalize"
      >
        {label}
      </label>
      <div className="relative w-full">
        <select
          id={`${id | label}`}
          className={cn("bg-transparent border border-[#22303E66] rounded-md text-[#6C8184] font-normal font-urbanist text-sm px-3 pr-7 py-1.5 focus:outline-none appearance-none", selectClassName)}
        >
          {options}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
          <ChevronDownIcon fill="#6C8184" width="10" />
        </div>
      </div>
    </div>
  );
};
