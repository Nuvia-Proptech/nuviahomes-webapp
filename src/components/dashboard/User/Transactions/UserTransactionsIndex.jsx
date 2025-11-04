import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import React from "react";
import { UserDashBoardHeader } from "../UserDashBoardHeader";
import { TotalRevenueCard } from "./TotalRevenue/TotalRevenueCard";
import { UserProfitReport } from "../userDashboard/userProfitReport/UserProfitReport";

export const UserTransactionsIndex = () => {
  return (
    <AppWrapper className="">
      <UserDashBoardHeader />

      <div className="bg-neutralColor-900 p-3 rounded-2xl w-full font-urbanist my-2">
        <p className="md:text-4xl font-semibold text-textColor font-urbanist">
          All Transactions
        </p>
        <p className="text-textColor text-sm font-normal font-urbanist">
          A quick glance at all properties
        </p>

        <div className="flex gap-5 my-5">
          <TotalRevenueCard />
          <div>
            <UserProfitReport />
          </div>
        </div>
      </div>
    </AppWrapper>
  );
};
