import React from 'react'
import {  Search, Bell } from "lucide-react";

export const SuperAdminHeader = () => {
  return (
    <div className="w-full">
        <div className="flex justify-between items-center text-black py-4 border w-full bg-white px-4">
          <div>
            <p className="text-24">Nuvia Home Properties</p>
            <p className="text-12">Nuvia Home Properties</p>
          </div>
          <div className="flex justify-between gap-2 items-center">
            <div className="relative w-full max-w-sm border-black">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full border border-gray-300 bg-white px-4 py-2 pl-10 text-gray-700 focus:outline-none"
              />
            </div>

            <div className="bg-[#F9FBFB] rounded-full p-3">
              <Bell />
            </div>
          </div>
        </div>
        
      </div>
  )
}
