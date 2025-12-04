import React from "react";
import { ChevronDownIcon } from "./Icons/ChevronDownIcon";
import { cn } from "@/lib/utils";

interface SelectDropDownProps {
  label?: string;
  options: React.ReactNode;
  id?: string;
  className?: string;
  selectClassName?: string;
}

export const SelectDropDown = ({
  label,
  options,
  id,
  className,
  selectClassName,
}: SelectDropDownProps) => {
  return (
    <div className={cn(`flex items-center gap-2`, className)}>
      {label && (
        <label
          htmlFor={id || label}
          className="text-base font-normal font-publicSans text-[#22303EE5] capitalize"
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        <select
          id={id || label}
          className={cn(
            "bg-transparent border border-[#22303E66] rounded-md text-[#6C8184] font-normal font-urbanist text-sm px-3 pr-7 py-1.5 focus:outline-none appearance-none h-10 ",
            selectClassName
          )}
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
