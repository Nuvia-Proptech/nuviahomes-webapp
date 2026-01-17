"use client";
import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import React from "react";
import { PlusSquareIcon } from "@/components/shared/Icons/PlusSquareIcon";
import { userTotalSpendingData } from "@/lib/dummyData/usersTotalSpendingData";
import { UserPropertyTotalSpendingCard } from "../User/UserPropertyTotalSpendingCard";
import { UserProjectProgress } from "../User/userDashboard/userProjectProgress/UserProjectProgress";
import { UserProfitReport } from "../User/userDashboard/userProfitReport/UserProfitReport";
import { RecentSubmission } from "../User/userDashboard/RecentSubmission/RecentSubmission";
import { RecentNotifications } from "../User/userDashboard/RecentNotifcations";
import { useRouter } from "next/navigation";
import appRoutes from "@/constants/AppRoutes";

export const OwnerDashboardIndex = () => {
  const router = useRouter();

  const handleAddProperty = () => {
    router.push(appRoutes.dashboard.owner.properties.submitProperty);
  };

  return (
    <AppWrapper className="">
      <div className="bg-neutralColor-900 p-3 rounded-2xl w-full font-urbanist my-2">
        <div className="my-3 flex flex-col sm:flex-row gap-2.5 justify-between sm:items-center">
          <div>
            <p className="md:text-4xl font-semibold text-textColor font-urbanist">
              Owner Dashboard
            </p>
            <p className="text-textColor text-sm font-normal font-urbanist">
              Overview of your properties and projects
            </p>
          </div>

          <button
            onClick={handleAddProperty}
            className="max-w-48 flex flex-row justify-center items-center gap-2.5 rounded-[12px] p-2.5 btn-gradient cursor-pointer"
          >
            <PlusSquareIcon />
            <p className="font-publicSans text-base font-normal text-[#F9F6FE]">
              Add Property
            </p>
          </button>
        </div>

        {/* Total Spending Section */}
        <div className="my-5 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
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

        <div className="flex flex-col-reverse xl:flex-row gap-5">
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
