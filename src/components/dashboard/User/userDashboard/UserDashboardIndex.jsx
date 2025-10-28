import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import React from "react";
import { UserDashBoardHeader } from "../UserDashBoardHeader";
import { PlusSquareIcon } from "@/components/shared/Icons/PlusSquareIcon";
import Link from "next/link";
import { userTotalSpendingData } from "@/lib/dummyData/usersTotalSpendingData";
import { UserPropertyTotalSpendingCard } from "../UserPropertyTotalSpendingCard";
import { UserProjectProgress } from "./userProjectProgress/UserProjectProgress";
import { UserProfitReport } from "./userProfitReport/UserProfitReport";
import { RecentSubmission } from "./RecentSubmission/RecentSubmission";
import { RecentNotifications } from "./RecentNotifcations";

export const UserDashboardIndex = () => {
  return (
    <AppWrapper className="">
      <UserDashBoardHeader />
      <div className="bg-neutralColor-900 p-3 rounded-2xl w-full font-urbanist my-2">
        <div className="my-3 flex justify-between items-center">
          <div>
            <p className="md:text-4xl font-semibold text-textColor font-urbanist">
              Dashboard
            </p>
            <p className="text-textColor text-sm font-normal font-urbanist">
              A quick glance at all properties and Investments
            </p>
          </div>
          <Link href={"appRoutes.dashboard.admin.properties.addProperties"}>
            <button className="flex flex-row justify-center items-center gap-2.5 rounded-[12px] p-2.5 bg-gradient-to-br from-[#1B5590] via-[#35AF72] to-[#B5E03A] cursor-pointer">
              <PlusSquareIcon />
              <p className="font-publicSans text-base font-normal text-[#F9F6FE]">
                Add Property
              </p>
            </button>
          </Link>
        </div>

        {/* Total Spending Section for user */}
        <div className="my-5 flex flex-row flex-wrap gap-3">
          {userTotalSpendingData.map((item) => {
            return (
              <UserPropertyTotalSpendingCard
                key={item.id}
                title={item.title}
                price={item.price}
                fill={item.fill}
              />
            );
          })}
        </div>

      <div className="flex gap-5">
      <div>
          <UserProjectProgress />
          <RecentSubmission />
        </div>
        <div>
          <UserProfitReport />
          <RecentNotifications />
        </div>
      </div>
      </div>
    </AppWrapper>
  );
};
