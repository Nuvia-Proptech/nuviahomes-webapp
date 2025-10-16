import React, { useState, useMemo } from "react";
import { SuperAdminHeader } from "../SuperAdminHeader";
import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import { PaymentsTables } from "./PaymentsTables";
import { SelectDropDown } from "@/components/shared/SelectDropDown";
import { AppInput } from "@/components/shared/AppSetup/AppInput";
import { paymentsData } from "@/lib/dummyData/paymentsData";
import { FilterIcon } from "@/components/shared/Icons/FilterIcon";

export const PaymentsIndex = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPayments = useMemo(() => {
    if (!searchQuery) return paymentsData;

    return paymentsData.filter(
      (pay) =>
        pay.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pay.accountName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pay.method.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [paymentsData, searchQuery]);

  const onSearchHandler = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <AppWrapper>
      <SuperAdminHeader />
      <div className="px-4">
        <p className="md:text-4xl font-semibold text-textColor font-urbanist py-5">
          Payment requests
        </p>

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
            <div className="flex justify-center items-center  gap-5">
              {/* Search  */}
              <AppInput
                type="text"
                placeholder="Search"
                onChange={onSearchHandler}
                className="w-60"
              />

               <button className="flex justify-center items-center border border-textColorFaded/40 gap-3 h-10 py-1 px-2.5 rounded-md">
              <p className="text-sm text-textColorFaded/40 font-normal font-publicSans">Filter</p>
              <FilterIcon />
            </button>
            </div>
          </div>

          {/* ?Tables */}
          <PaymentsTables paymentsData={filteredPayments} />
        </div>
      </div>
    </AppWrapper>
  );
};
