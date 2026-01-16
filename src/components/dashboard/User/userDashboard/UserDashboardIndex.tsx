import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import React from "react";

import { RecentSubmission } from "./RecentSubmission/RecentSubmission";
import { RecentNotifications } from "./RecentNotifcations";
import { TotalRevenueCard } from "../Transactions/TotalRevenue/TotalRevenueCard";
import { EstateDevCard } from "./EstateDevCard";

export const UserDashboardIndex = () => {
  return (
    <AppWrapper className="">
      <div className="bg-neutralColor-900 p-3 rounded-2xl w-full font-urbanist my-2">
        <div>
          <p className="md:text-4xl font-semibold text-textColor font-urbanist">
            Dashboard
          </p>
          <p className="text-textColor text-sm font-normal font-urbanist">
            A quick glance at all properties and Investments
          </p>
        </div>

        {/* Total Revenue Card (Requested) */}
        <div className="my-5 flex flex-col-reverse xl:flex-row gap-5">
          <TotalRevenueCard />
          <EstateDevCard />
        </div>

        <div className="flex flex-col-reverse xl:flex-row gap-5">
          <div>
            <RecentSubmission />
          </div>
          <div>
            <RecentNotifications />
          </div>
        </div>
      </div>
    </AppWrapper>
  );
};
