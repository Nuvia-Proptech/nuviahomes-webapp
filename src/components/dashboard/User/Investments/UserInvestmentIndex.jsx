import React from "react";
import { UserDashBoardHeader } from "../UserDashBoardHeader";
import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import { PlusSquareIcon } from "@/components/shared/Icons/PlusSquareIcon";
import appRoutes from "@/constants/AppRoutes";
import Link from "next/link";
import { FinancialDashboard } from "./InvestmentDashboard";

const UserInvestmentIndex = () => {
  return (
    <AppWrapper>
      <UserDashBoardHeader />
      <div className="bg-neutralColor-900 p-3 rounded-2xl w-full font-urbanist my-2">
        <div className="my-3 flex justify-between items-center">
          <div>
            <p className="md:text-4xl font-semibold text-textColor font-urbanist">
              Investments
            </p>
            <p className="text-textColor text-sm font-normal font-urbanist">
              A quick glance at all Investments
            </p>
          </div>
          <div className="flex gap-4">
            <Link href={appRoutes.dashboard.admin.properties.addProperties}>
              <button className="flex flex-row justify-center items-center gap-2.5 rounded-[12px] p-2.5 bg-indigo-800 cursor-pointer">
                <PlusSquareIcon />
                <p className="font-publicSans text-base font-normal text-[#F9F6FE]">
                  window
                </p>
              </button>
            </Link>
            <Link href={appRoutes.dashboard.admin.properties.addProperties}>
              <button className="flex flex-row justify-center items-center gap-2.5 rounded-[12px] p-2.5 bg-gradient-to-br from-[#1B5590] via-[#35AF72] to-[#B5E03A] cursor-pointer">
                <PlusSquareIcon />
                <p className="font-publicSans text-base font-normal text-[#F9F6FE]">
                  Add Property
                </p>
              </button>
            </Link>
          </div>
        </div>
        <FinancialDashboard />
      </div>
    </AppWrapper>
  );
};

export default UserInvestmentIndex;
