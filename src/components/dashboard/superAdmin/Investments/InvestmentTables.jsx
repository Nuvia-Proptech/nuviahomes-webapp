import React from "react";
import { InvestmentTableBodies } from "./InvestmentTableBodies";
import { InvestmentData } from "@/lib/dummyData/investmentData";

export const InvestmentTables = () => {
  return (
    <div className="overflow-x-auto my-5">
      <table className="min-w-[900px] w-full text-sm text-left text-textColor">
        <thead className="">
          <tr className="text-textColor font-semibold text-sm font-urbanist">
            <th className="py-5">ID</th>
            <th>Plan</th>
            <th>Investment Amount</th>
            <th>Target Investment</th>
            <th>Installment</th>
            <th>Status</th>
            <th>Profit</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="">
          {InvestmentData.map((item) => {
            return (
                <InvestmentTableBodies
                key={item.id}
                id={item.id}          
                plan={item.plan}
                investmentAmount={item.investmentAmount}
                targetInvestment={item.targetInvestment}
                profit={item.profit}
                isInstallment={item.installment}
                status={item.status}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
