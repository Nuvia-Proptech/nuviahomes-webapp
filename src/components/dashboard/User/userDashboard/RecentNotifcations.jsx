import { MoreIcon } from "@/components/shared/Icons/MoreIcon";
import React from "react";

export const RecentNotifications = () => {
  return (
    <div className="w-full max-w-96 bg-white shadow rounded-lg p-3 font-urbanist my-5">
      <div className="mb-5 flex justify-between">
        <h2 className="text-textColorDark text-xl font-semibold">
          Recent Notifcations
        </h2>
        <MoreIcon />
      </div>
    </div>
  );
};
