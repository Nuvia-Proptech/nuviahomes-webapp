import React from "react";
import { UserInvestmentTableBody } from "./UserInvestmentTableBody";
import { UserInvestmentData } from "@/lib/dummyData/UserInvestmentData";
import { SelectDropDown } from "@/components/shared/SelectDropDown";
export const UserInvestmentTable = () => {
  return (
    <div className="overflow-x-auto my-5 bg-white w-full px-4  rounded-sm py-5 ">
      <p className="mb-2 font-semibold text-lg">All Investments</p>
      <div className="flex flex-row flex-wrap justify-between items-center gap-4">
        {/* Show Dropdown  */}
        <SelectDropDown
          className=""
          selectClassName=" h-7 py-0"
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
            className=""
            
            selectClassName=" h-7 py-0 rounded-sm"
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
          {/* </div> */}
        </div>
      </div>
      <table className="min-w-[900px] w-full text-sm text-left text-textColor">
        <thead className="">
          <tr className="text-textColor font-semibold text-sm font-urbanist">
            <th className="py-5 pr-6">ID</th>
            <th className="pr-6">Plan</th>
            <th className="pr-6">Invested Amount</th>
            <th className="pr-6">Date of return</th>
            <th className="pr-6">Installment</th>
            <th className="pr-6">Profit</th>
            <th className="pr-6">Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="">
          {UserInvestmentData.map((item) => {
            return (
              <UserInvestmentTableBody
                key={item.id}
                id={item.id}
                plan={item.plan}
                investedAmount={item.investedAmount}
                dateOfReturn={item.dateOfReturn}
                installment={item.installment}
                profit={item.profit}
                status={item.status}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
