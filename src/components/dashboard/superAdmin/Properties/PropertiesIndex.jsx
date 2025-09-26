import React from "react";
import { SuperAdminHeader } from "../SuperAdminHeader";
import { TotalSpendingItemsCard } from "@/components/shared/TotalSpendingItemsCard";
import { totalSpendingData } from "@/lib/dummyData/totalSpendingData";
import { PlusSquareIcon } from "@/components/shared/Icons/PlusSquareIcon";
import { SelectDropDown } from "@/components/shared/SelectDropDown";
import { PropertiesTables } from "./PropertiesTables";
import Link from 'next/link';
import appRoutes from "@/constants/AppRoutes";

export const PropertiesIndex = () => {

  return (
    <div className="w-full flex-1 md:ml-52 justify-center items-center h-screen text-black bg-secondaryColor">
      <SuperAdminHeader />
      {/* Page title and Button */}
      <div className="px-4">
        <div className="py-5 flex justify-between items-center">
          <div>
            <p className="md:text-4xl font-semibold text-textColor font-urbanist">
              Properties
            </p>
            <p className="text-textColor text-sm font-normal font-urbanist">
              A quick glance at all properties
            </p>
          </div>
          <Link href={appRoutes.dashboard.admin.properties.addProperties}>
          <button className="flex flex-row justify-center items-center gap-2.5 rounded-[12px] p-2.5 bg-gradient-to-br from-[#1B5590] via-[#35AF72] to-[#B5E03A] cursor-pointer">
            <PlusSquareIcon />
            <p className="font-publicSans text-base font-normal text-[#F9F6FE]">
              Add Property
            </p>
          </button>
          </Link>
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
                placeholder="Search Property"
                className="bg-transparent border border-[#22303E66] rounded-sm text-sm font-urbanist font-normal px-3 py-1 placeholder:text-[#6C8184] focus:outline-none"
              />

              {/* Property Status  */}
              <SelectDropDown
                id="propertyStatus"
                options={
                  <>
                    <option value="Property Status" disabled defaultValue={true}>
                      Property Status
                    </option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                  </>
                }
              />

              {/* Property Type  */}
              <SelectDropDown
                id="propertyStatus"
                options={
                  <>
                    <option value="Property Type" disabled defaultValue={true}>
                      Property Type
                    </option>
                    <option value="Apartment">Apartment</option>
                    <option value="Duplex">Duplex</option>
                  </>
                }
              />
            </div>
          </div>

          {/* ?Tables */}
          <PropertiesTables />
        </div>
      </div>
    </div>
  );
};
