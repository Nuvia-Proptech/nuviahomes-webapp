import React from "react";
import { ChevronDownIcon } from "./Icons/ChevronDownIcon";

export const SelectDropDown = ({ label, options, id }) => {
  return (
    <div className="flex items-center gap-2">
      <label
      htmlFor={`${label}`}
        className="text-base font-normal font-urbanist text-[#22303EE5] capitalize"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={`${id | label}`}
          className="bg-transparent border border-[#22303E66] rounded-md text-[#6C8184] font-normal font-urbanist text-sm px-3 pr-7 py-1.5 focus:outline-none appearance-none"
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
