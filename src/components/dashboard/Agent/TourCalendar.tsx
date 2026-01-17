"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const TourCalendar = () => {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  // Mock calender grid for September 2025
  // Sept 1 2025 is Monday.
  // Image shows 28, 29, 30, 1...

  const calendarDays = [
    { day: 28, current: false },
    { day: 29, current: false },
    { day: 30, current: false },
    { day: 1, current: true },
    { day: 2, current: true },
    { day: 3, current: true },
    { day: 4, current: true },
    { day: 5, current: true },
    { day: 6, current: true },
    {
      day: 7,
      current: true,
      selected: true,
      color: "bg-purple-100 text-primaryColorMain",
    },
    { day: 8, current: true },
    { day: 9, current: true },
    { day: 10, current: true },
    { day: 11, current: true },
    { day: 12, current: true },
    { day: 13, current: true },
    { day: 14, current: true },
    {
      day: 15,
      current: true,
      selected: true,
      color: "bg-primaryColorMain text-white",
    },
    { day: 16, current: true },
    { day: 17, current: true },
    { day: 19, current: true },
    { day: 20, current: true },
    { day: 21, current: true },
    { day: 22, current: true, selected: true, color: "bg-gray-200" },
    { day: 23, current: true },
    { day: 24, current: true },
    { day: 25, current: true },
    {
      day: 26,
      current: true,
      selected: true,
      color: "bg-green-100 text-successColor",
    },
    { day: 27, current: true, selected: true, color: "bg-red-500 text-white" },
    { day: 28, current: true },
    { day: 29, current: true },
    { day: 30, current: true },
    { day: 31, current: true },
    { day: 1, current: false },
    { day: 2, current: false },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm w-full font-urbanist mt-5">
      <h3 className="text-lg font-semibold text-textColorDark mb-4">
        Tour Calendar
      </h3>

      <div className="flex justify-between items-center mb-6">
        <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <ChevronLeft size={16} className="text-gray-600" />
        </button>
        <span className="text-sm font-semibold text-textColorDark">
          Septemper 2025
        </span>
        <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <ChevronRight size={16} className="text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-4 mb-2">
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-xs text-gray-500 font-medium"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-4">
        {calendarDays.map((date, index) => (
          <div key={index} className="flex justify-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-medium 
              ${!date.current ? "text-gray-300" : "text-textColorDark"}
              ${date.selected ? date.color : ""}
            `}
            >
              {date.day}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
