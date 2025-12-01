"use client";
import React, { useState } from "react";
import { ArrowDownBoldIcon } from "@/components/shared/Icons/ArrowDownBoldIcon";

export const FilterDropdown = ({
  options,
  selected,
  onSelect,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative font-urbanist text-textColorDark">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2 bg-white border rounded-xl text-sm font-medium w-fit"
      >
        <span className="text-sm font-medium">{selected}</span>

        <ArrowDownBoldIcon className={`${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 mt-1 w-64 bg-white border rounded-xl shadow-lg z-50 py-2">
            {options.map((option, index) => (
              <button
                key={option}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm transition-colors ${
                  selected === option
                    ? "bg-primaryColor/5"
                    : "text-textColorDark hover:bg-gray-50"
                }`}
              >
                <span className="font-medium">{option}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
