import React from "react";
import { ChevronDown, DollarSign, Wallet } from "lucide-react";

export const GrowthChart = () => {
  return (
    <div className="w-full md:w-1/3 flex flex-col items-center">
      {/* YEAR SELECT */}
      <button className="w-fit flex justify-center items-center gap-2 px-4 py-2 rounded-sm bg-primaryColorMain/15 text-primaryColorMain text-sm font-medium font-publicSans uppercase">
        <p>2023</p>
        <ChevronDown size={16} />
      </button>

      {/* SEMI-CIRCLE GAUGE */}
      <div className="font-medium font-publicSans my-5">
        <p className="text-2xl text-grayColor/90 text-center">78%</p>
        <p className="text-sm text-grayColor/70 text-center mt-1">Growth</p>
        <p className="text-base text-grayColor/70 text-center mt-2">
          62% Portfolio Growth
        </p>
      </div>

      {/* STAT CARDS */}
      <div className="mt-4 flex justify-between gap-4 font-publicSans">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-sm bg-primaryColorMain/15 text-primaryColorMain">
            <DollarSign size={20} />
          </div>
          <div>
            <p className="text-xs text-grayColor/70 font-normal">2023</p>
            <p className="text-sm text-grayColor/90 font-semibold">$32.5k</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-2 rounded-sm bg-infoColorMain/15 text-infoColorMain">
            <Wallet size={20} />
          </div>
          <div>
            <p className="text-xs text-grayColor/70 font-normal">2022</p>
            <p className="text-sm text-grayColor/90 font-semibold">$41.2k</p>
          </div>
        </div>
      </div>
    </div>
  );
};
