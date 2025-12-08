"use client";
import { User } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import SideBar from "../dashboard/superAdmin/Users/UsersOverview/SideBar";
import UserOverview from "../dashboard/superAdmin/Users/UsersOverview/UserOverview";
import KYCDetails from "../dashboard/superAdmin/Users/UsersOverview/KYCDetails";

export default function SecondOne() {
  const [btnClick, setBtnClick] = useState("Overview");

  return (
    <div className="p-[25px] bg-secondaryColor">
      <div className="flex gap-[20px]">
        <SideBar />
        {/* col-2 */}
        <div className="w-full">
          <div className="flex gap-[32px] mb-[34px]">
            {["Overview", "Security", "Billings & Investments"].map(
              (item, i) => (
                <Button
                  key={i}
                  className={`bg-transparent hover:bg ${
                    btnClick === item ? "bg-blue-500 text-white" : "text-black"
                  } font-normal flex items-center py-[8px] px-[16px]`}
                  onClick={() => setBtnClick(item)}
                >
                  <User />
                  {item}
                </Button>
              )
            )}
          </div>
          {/* <p>btn: {btnClick}</p> */}
          {btnClick === "Overview" ? (
            <UserOverview />
          ) : btnClick === "Security" ? (
            <KYCDetails />
          ) : (
            <div>
              hh
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
