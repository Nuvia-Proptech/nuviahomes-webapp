"use client"
import React from "react";
import { SuperAdminHeader } from "../SuperAdminHeader";
import { totalSpendingData } from "@/lib/dummyData/totalSpendingData";
import { PlusSquareIcon } from "@/components/shared/Icons/PlusSquareIcon";
import Link from "next/link";
import { SelectDropDown } from "@/components/shared/SelectDropDown";
import appRoutes from "@/constants/AppRoutes";
import { TotalSpendingItemsCard } from "@/components/shared/TotalSpendingItemsCard";
import { InvestmentTables } from "./InvestmentTables";
import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import { CreatePlanSheet } from "./CreatePlan/CreatePlanSheet";
import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export const InvesmentsIndex = () => {
  const [isCreateSheetOpen, setIsCreateSheetOpen] = useState(false);

  return (
    <AppWrapper>
      {/* <div className="w-full flex-1 md:ml-60 justify-center items-center min-h-auto text-black"> */}
      <SuperAdminHeader />
      <div className="px-4">
        <div className="py-5 flex justify-between items-center">
          <div>
            <p className="md:text-4xl font-semibold text-textColor font-urbanist">
              Investment Plans
            </p>
            <p className="text-textColor text-sm font-normal font-urbanist">
              A quick glance at all plans
            </p>
          </div>
        <button
            onClick={() => setIsCreateSheetOpen(true)}
            className="flex flex-row justify-center items-center gap-2.5 rounded-[12px] p-2.5 bg-gradient-to-br from-[#1B5590] via-[#35AF72] to-[#B5E03A] cursor-pointer"
          >
            <PlusSquareIcon />
            <p className="font-publicSans text-base font-normal text-[#F9F6FE]">
              Create Plans
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

        <div className="w-full px-4 bg-white rounded-sm py-7 my-5">
          <div className="flex flex-row flex-wrap justify-between items-center gap-4">
            {/* Show Dropdown  */}
            <SelectDropDown
              label="show"
              options={
                <>
                  <option value="10">10</option>
                  <option value="5">5</option>
                  <option value="15">5</option>
                  <option value="20">20</option>
                </>
              }
            />

            {/* Filters and Search  */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search  */}
              <input
                type="text"
                placeholder="Search Plans"
                className="bg-transparent border border-[#22303E66] rounded-sm text-sm font-urbanist font-normal px-3 py-1 placeholder:text-[#6C8184] focus:outline-none"
              />

              {/* Plan Status  */}
              <SelectDropDown
                id="propertyStatus"
                options={
                  <>
                    <option value="Property Type" disabled defaultValue={true}>
                      Plan Status
                    </option>
                    <option value="All">All</option>
                    <option value="Active">Active</option>
                    <option value="Paused">Paused</option>
                  </>
                }
              />
            </div>
          </div>

          {/* ?Tables */}
          <InvestmentTables />
        </div>
      </div>
      {/* Create Plan Sheet */}
      <Sheet open={isCreateSheetOpen} onOpenChange={setIsCreateSheetOpen}>
        <SheetContent className="sm:max-w-lg md:max-w-3xl overflow-y-auto">
          <CreatePlanSheet onClose={() => setIsCreateSheetOpen(false)} />
        </SheetContent>
      </Sheet>
    </AppWrapper>
  );
};
