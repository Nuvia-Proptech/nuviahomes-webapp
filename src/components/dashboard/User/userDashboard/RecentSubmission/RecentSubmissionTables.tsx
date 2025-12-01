import { recentSubmissionData } from "@/lib/dummyData/recentSubmissionsData";
import React from "react";
import { RecentSubmissionTableBodies } from "./RecentSubmissionTableBodies";

export const RecentSubmissionTables = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full min-w-2xl text-sm text-left text-textColor">
        <thead className="">
          <tr className="text-textColor font-semibold text-sm font-urbanist">
            <th className="py-2">Project Name</th>
            <th className="py-2">Project Type</th>
            <th className="py-2">Date Submitted</th>
            <th className="py-2">Current Project Status</th>
          </tr>
        </thead>

        <tbody className="">
          {recentSubmissionData.map((item) => {
            return (
              <RecentSubmissionTableBodies
                id={item.id}
                street={item.street}
                city={item.city}
                type={item.type}
                date={item.date}
                time={item.time}
                status={item.status}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
