import React from "react";
import { SuperAdminHeader } from "../SuperAdminHeader";
import { TotalSpendingItemsCard } from "@/components/shared/TotalSpendingItemsCard";
import { totalSpendingData } from "@/lib/dummyData/totalSpendingData";
import { PlusSquareIcon } from "@/components/shared/Icons/PlusSquareIcon";

export const PropertiesIndex = () => {
  return (
    <div className="w-full flex-1 md:ml-60 justify-center items-center h-screen text-black bg-[#F9FBFB] ">
      <SuperAdminHeader />
      {/* Page title and Button */}
      <div className="px-4">
        <div className="py-5 flex justify-between items-center">
          <div>
            <p className="md:text-4xl font-semibold text-[#344346] font-urbanist">
              Properties
            </p>
            <p className="text-[#344346] text-sm font-normal font-urbanist">
              A quick glance at all properties
            </p>
          </div>
          <button className="flex flex-row justify-center items-center gap-2.5 rounded-[12px] p-2.5 bg-gradient-to-br from-[#1B5590] via-[#35AF72] to-[#B5E03A]">
            <PlusSquareIcon />
            <p className="font-publicSans text-base font-normal text-[#F9F6FE]">
              Add Property
            </p>
          </button>
        </div>

        {/* Total Spending Section */}
        <div className="my-3 flex flex-row flex-wrap gap-5">
          {totalSpendingData.map((item) => {
            return (
              <TotalSpendingItemsCard
                key={item.id}
                title={item.title}
                price={item.price}
                icon={item.icon}
                iconClassName={item.iconClassName}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
