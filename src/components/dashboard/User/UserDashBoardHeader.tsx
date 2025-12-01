"use client"
import { SearchIcon } from "@/components/shared/Icons/SearchIcon";
import React from "react";
import { UserDetails } from "./UserDetails";
import { Menu } from "lucide-react"

export const UserDashBoardHeader = ({ onNavClick }) => {
 
  return (
    <div className="bg-neutralColor-900 p-3 rounded-2xl w-full flex justify-between font-urbanist">
      <div className="max-w-48 sm:max-w-80 w-full flex gap-3 justify-center items-center border border-grayColor rounded-2xl h-12 py-2 px-3 font-urbanist">
        <SearchIcon width="20" height="20" />
        <input
          type="text"
          placeholder="Search Contents"
          className="w-full border-none outline-none text-textColor text-sm focus:outline-none focus:text-slate-900"
        />
      </div>

      <UserDetails className="hidden md:flex" />

      <button onClick={onNavClick} className="text-textColor md:hidden">
          <Menu size={32} />
          </button>
    </div>
  );
};
