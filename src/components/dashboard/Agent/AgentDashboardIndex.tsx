"use client";
import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import React from "react";
import { PlusSquareIcon } from "@/components/shared/Icons/PlusSquareIcon";
import { RecentSubmission } from "../User/userDashboard/RecentSubmission/RecentSubmission";
import { RecentNotifications } from "../User/userDashboard/RecentNotifcations";
import { TotalRevenueCard } from "../User/Transactions/TotalRevenue/TotalRevenueCard";
import { useRouter } from "next/navigation";
import appRoutes from "@/constants/AppRoutes";
import { TourCalendar } from "./TourCalendar";

export const AgentDashboardIndex = () => {
  const router = useRouter();

  const handleAddListing = () => {
    router.push(appRoutes.dashboard.agent.listings.submitListing);
  };

  return (
    <AppWrapper className="">
      <div className="bg-neutralColor-900 p-3 rounded-2xl w-full font-urbanist my-2 text-textColorDark">
        <div className="my-3 flex flex-col sm:flex-row gap-2.5 justify-between sm:items-center">
          <div>
            <p className="md:text-4xl font-semibold text-textColor font-urbanist">
              Dashboard
            </p>
            <p className="text-textColor text-sm font-normal font-urbanist">
              A quick glance at all properties and investments
            </p>
          </div>

          <button
            onClick={handleAddListing}
            className="max-w-48 flex flex-row justify-center items-center gap-2.5 rounded-[12px] p-2.5 btn-gradient cursor-pointer"
          >
            <PlusSquareIcon />
            <p className="font-publicSans text-base font-normal text-[#F9F6FE]">
              New Listing
            </p>
          </button>
        </div>

        <div className="flex flex-col xl:flex-row gap-5">
          {/* Main Content */}
          <div className="w-full xl:w-3/4 flex flex-col gap-6">
             

            {/* Revenue Chart */}
            <div>
              <TotalRevenueCard />
            </div>

            {/* Recent Properties (Submission) */}
            <div>
              <RecentSubmission />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full xl:w-1/4 flex flex-col gap-5">
             <RecentNotifications />
             <TourCalendar />
          </div>
        </div>
      </div>
    </AppWrapper>
  );
};
