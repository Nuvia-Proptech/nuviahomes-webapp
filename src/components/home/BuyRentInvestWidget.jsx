import React from "react";
import { Calendar, ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import mapIcon from "@/assets/icons/map.svg";
import calendarIcon from "@/assets/icons/calendar.svg";
import arroewDownIcon from "@/assets/icons/arrow-down.svg";
import searchIcon from "@/assets/icons/search-icon.svg";

export default function BuyRentInvestWidget({widgetStyle, searchText}) {
  return (
    <div className={`${widgetStyle} `}>
      <div className="flex justify-center z-50 -mb-3 ">
        {["Buy", "Rent", "Invest"].map((item) => (
          <div
            key={item}
            className="h-[55px] w-[120px] flex justify-center items-center btn2-gradient border border-gray-400 skewed -ml-3"
          >
            <button className="unskewed text-lg">{item}</button>
          </div>
        ))}
      </div>
      {/*  */}
      <div className="skewed overflow-hidden flex justify-between text-lg text-black max-w-[95rem] mx-auto z-50">
        <div className="widget-tab-style border-r border-white/35 h-[65px] w-full flex flex-col justify-center px-2">
          <p className="unskewed text-2">Location</p>
          <div className="unskewed flex text-12 justify-between">
            <p className="">Choose what you are looking at</p>
            <Image src={mapIcon} alt="" className="w-4 " />
          </div>
        </div>
        <div className="border-r border-white/1 bg-[#DFE6E7] h-[65px] w-full flex flex-col justify-center px-2">
          <p className="unskewed text-2">Checkin</p>
          <div className="unskewed flex gap-4 text-12">
            <p className="">Choose date</p>
            <Image src={mapIcon} alt="" className="w-4 " />
          </div>
        </div>
        <div className=" border-r border-white/1 bg-[#DFE6E7] h-[65px] w-full flex flex-col justify-center px-2">
          <p className="unskewed text-2">Checkout</p>
          <div className="unskewed flex gap-4 text-12">
            <p>Choose date</p>
            <Image src={mapIcon} alt="" className="w-4 " />
          </div>
        </div>
        <div className="border-r border-white/1 bg-[#DFE6E7] h-[65px] w-full flex flex-col justify-center px-2">
          <p className="unskewed text-2">Property</p>
          <div className="unskewed flex items-center gap-4 text-12">
            <p>Choose type</p>
            <ChevronDown />
            {/* <Image src={mapIcon} alt="" className="" /> */}
          </div>
        </div>
        <div className="h-[65px] bg-[#DFE6E7] w-full flex flex-col justify-center items-center px-2">
          <div className="border rounded-2xl bg-[#1c0845] px-2">
            <div className="flex items-center text-white">
              {<p className="unskwewd">{searchText}</p>}
              <span className="unskewed"><Image src={searchIcon} alt="Search icon" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
