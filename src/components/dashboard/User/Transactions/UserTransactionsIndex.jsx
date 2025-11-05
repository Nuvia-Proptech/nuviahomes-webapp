"use client";
import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import React, { useMemo, useState } from "react";
import { TotalRevenueCard } from "./TotalRevenue/TotalRevenueCard";
import { SelectDropDown } from "@/components/shared/SelectDropDown";
import { AppInput } from "@/components/shared/AppSetup/AppInput";
import { UserTransactionsTables } from "./UserTransactionsTables";
import { userTransactionsData } from "@/lib/dummyData/userTransactionData";
import { UserTransactionProfileReport } from "./TotalRevenue/UserTransactionProfileReport";

export const UserTransactionsIndex = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTransactions = useMemo(() => {
    if (!searchQuery) return userTransactionsData;

    return userTransactionsData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.street.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.city.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [userTransactionsData, searchQuery]);

  const onSearchHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <AppWrapper className="">
      <div className="bg-neutralColor-900 p-3 rounded-2xl w-full font-urbanist my-2">
        <p className="md:text-4xl font-semibold text-textColor font-urbanist">
          All Transactions
        </p>
        <p className="text-textColor text-sm font-normal font-urbanist">
          A quick glance at all properties
        </p>

        <div className="flex gap-5 my-5">
          <TotalRevenueCard />
          <div>
            <UserTransactionProfileReport />
          </div>
        </div>

        <div className="bg-white p-4">
          <h2 className="text-grayColor/90 text-xl font-semibold">
            Transaction History
          </h2>
          {/* ?\Show and search */}
          <div className="flex flex-row flex-wrap justify-between items-center gap-4 my-5">
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
              <AppInput
                type="text"
                placeholder="Search Transactions"
                onChange={onSearchHandler}
                className="w-60"
              />

              {/* transaction Status  */}
              <SelectDropDown
                id="transactionStatus"
                options={
                  <>
                    <option value="TransactionStatus" defaultValue={true}>
                      Transaction Status
                    </option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                  </>
                }
              />
            </div>
          </div>

          {/* ?Tables */}
          <UserTransactionsTables transactions={filteredTransactions} />
        </div>
      </div>
    </AppWrapper>
  );
};
