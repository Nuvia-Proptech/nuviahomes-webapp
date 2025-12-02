"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "./Icons/ChevronDownIcon";
import { cn } from "@/lib/utils";



export const MultiSelectDropdown = ({
  label,
  options,
  placeholder = "Select items...",
  className,
}) => {
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (value) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const removeOption = (value) => {
    setSelected((prev) => prev.filter((v) => v !== value));
  };

  const displayText =
    selected.length === 0
      ? placeholder
      : selected.map((v) => options.find((o) => o.value === v)?.label).join(", ");

  return (
    <div className={cn("flex flex-col gap-1 w-full", className)}>
      <label className="text-base font-normal font-publicSans text-[#22303EE5] capitalize">
        {label}
      </label>

      <div className="relative">
        {/* Clickable input area */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "min-h-[40px] w-full border border-[#22303E66] rounded-md px-3 py-2 flex flex-wrap items-center gap-2 cursor-pointer bg-white",
            "focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500",
            selected.length === 0 && "text-gray-400"
          )}
        >
          {selected.length === 0 ? (
            <span>{placeholder}</span>
          ) : (
            selected.map((value) => {
              const opt = options.find((o) => o.value === v);
              if (!opt) return null;
              return (
                <span
                  key={value}
                  className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded-full"
                >
                  {opt.label}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeOption(value);
                    }}
                    className="ml-1 text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </span>
              );
            })
          )}
          <ChevronDownIcon
            fill="#6C8184"
            width="14"
            className={cn("ml-auto transition-transform", isOpen && "rotate-180")}
          />
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#22303E66] rounded-md shadow-lg z-10 max-h-60 overflow-auto">
            {options.map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(opt.value)}
                  onChange={() => toggleOption(opt.value)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{opt.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Optional: hidden inputs for form submission */}
      {selected.map((value) => (
        <input key={value} type="hidden" name={`${label.toLowerCase()}[]`} value={value} />
      ))}
    </div>
  );
};