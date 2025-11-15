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
      {/* Desktop Version - Hidden on mobile */}
      <div className="hidden md:block">
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
        <div className="skewed overflow-hidden flex justify-between text-lg text-black max-w-[95rem] mx-auto z-50 ">
          <div className="widget-tab-style border-r border-white/35 h-[65px] w-full flex flex-col justify-center px-2 md:px-4 ">
            <p className="unskewed text-2">Location</p>
            <div className="unskewed flex text-12 justify-between ">
              <p className=" ">Choose what you are looking at</p>
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

      {/* Mobile Version - Hidden on desktop */}
      <div className="block md:hidden px-4">
        {/* Tabs */}
        <div className="flex justify-center mb-4 gap-1 ">
          {["Buy", "Rent", "Invest"].map((item) => (
            <button
              key={item}
              className="flex-1 h-[50px] btn2-gradient border border-gray-400 text-base font-medium"
            >
              {item}
            </button>
          ))}
        </div>
        
        {/* Main Widget Container */}
        <div className="bg-[#DFE6E7] rounded-lg p-4 space-y-3">
          {/* Location */}
          <div className="widget-tab-style bg-white rounded-lg p-3 shadow-sm">
            <p className="text-sm font-semibold text-gray-700 mb-1">Location</p>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-600">Choose what you are looking at</p>
              <Image src={mapIcon} alt="" className="w-5 h-5" />
            </div>
          </div>
          
          {/* Dates Row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="text-sm font-semibold text-gray-700 mb-1">Check-in</p>
              <div className="flex items-center gap-2">
                <p className="text-xs text-gray-600">Choose date</p>
                <Image src={calendarIcon} alt="" className="w-4 h-4" />
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="text-sm font-semibold text-gray-700 mb-1">Check-out</p>
              <div className="flex items-center gap-2">
                <p className="text-xs text-gray-600">Choose date</p>
                <Image src={calendarIcon} alt="" className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          {/* Property */}
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-sm font-semibold text-gray-700 mb-1">Property Type</p>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-600">Choose type</p>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          
          {/* Search Button */}
          <button className="w-full bg-[#1c0845] rounded-xl py-4 shadow-lg">
            <div className="flex items-center justify-center text-white gap-2">
              <span className="font-medium">{searchText || "Search Properties"}</span>
              <Image src={searchIcon} alt="Search icon" className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}