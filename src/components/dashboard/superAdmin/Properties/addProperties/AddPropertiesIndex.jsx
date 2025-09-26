"use client";
import React from "react";
import { AddPropertiesForms } from "./AddPropertiesForms";
import { SuperAdminHeader } from "../../SuperAdminHeader";
import { CloseSquareIcon } from "@/components/shared/Icons/CloseSquareIcon";
import { TickGoodSquareIcon } from "@/components/shared/Icons/TickGoodSquareIcon";

export const AddPropertiesIndex = () => {
  return (
    <div className="w-full flex-1 md:ml-52 justify-center items-center h-screen text-black bg-secondaryColor">
      <SuperAdminHeader />
      <div className="py-5 flex justify-between items-center px-4">
        <div>
          <p className="md:text-4xl font-semibold text-textColor font-urbanist">
            Properties
          </p>
          <p className="text-textColor text-sm font-normal font-urbanist">
            A quick glance at all properties
          </p>
        </div>

        <div className="flex gap-3">
          <button className="p-2.5 bg-dangerColor/15 rounded-xl flex flex-row gap-2 w-fit h-fit cursor-pointer">
            <CloseSquareIcon />
            <p className="text-dangerColor text-sm font-normal font-publicSans">
              Reject
            </p>
          </button>

          <button className="p-2.5 bg-successColor/15 rounded-xl flex flex-row gap-2 w-fit h-fit cursor-pointer">
            <TickGoodSquareIcon />
            <p className="text-successColor text-sm font-normal font-publicSans">
              Reject
            </p>
          </button>
        </div>
      </div>

      <AddPropertiesForms />
    </div>
  );
};
