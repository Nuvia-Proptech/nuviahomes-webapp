import React from "react";

export const UserProgressProjectCard = ({
  title,
  location,
  progress,
  color,
  status,
}) => {
  const colorClasses =
    color === "orange"
      ? {
          track: "bg-gray-200",
          bar: "bg-warningColor",
          circleBorder: "border-warningColor",
          
          badge: "bg-warningColor text-white",
        }
      : {
          track: "bg-gray-200",
          bar: "bg-successColorLight",
          circleBorder: "border-successColorLight",
          
          badge: "bg-successColorLight text-white",
        };

  return (
    <div className="flex flex-col w-full font-urbanist">
      <h3 className="text-base text-textColorDark font-semibold">{title}</h3>
      <p className="text-textColor text-sm font-normal">{location}</p>

      {/* Progress Bar */}
      <div className="flex items-center mt-3 space-x-3">
        <div className="relative flex-1 h-1.5 rounded-full bg-gray-200 overflow-visible">
          {/* Filled bar */}
          <div
            className={`absolute top-0 left-0 h-full rounded-full ${colorClasses.bar}`}
            style={{ width: `${progress}%` }}
          />

          {/* Pointer circle */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 ${colorClasses.circleBorder} bg-white flex items-center justify-center`}
            style={{ left: `${progress}%` }}
          >
            <div
              className={`w-2.5 h-2.5 rounded-full bg-white`}
            />
          </div>
        </div>

        {/* Percentage badge */}
        <div
          className={`text-sm font-semibold px-2 py-1 rounded ${colorClasses.badge}`}
        >
          {progress}
        </div>
      </div>

      {/* Status */}
      <div className="mt-4 flex items-center text-sm">
        <span className="text-textColor font-semibold mr-2">Status :</span>
        <span className="text-textColor font-normal">{status}</span>
      </div>
    </div>
  );
};
