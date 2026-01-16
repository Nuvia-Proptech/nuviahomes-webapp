"use client";
import Image from "next/image";
import React from "react";
// import Image from "next/image"; // Assuming image usage, but using div bg for now based on dummy data or placeholder

export const EstateDevCard = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm w-full font-urbanist h-full flex flex-col justify-between max-w-[320px]">
      <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-gray-100">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop"
          alt="Estate Development"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
          Foundation Complete
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-textColorDark mb-2">
          Estate Development
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          Invest in apartments, duplexes, and smart homes for best returns
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div>
          <p className="text-xs text-gray-500 mb-1">Min Amount</p>
          <p className="text-lg font-bold text-textColorDark">#1,250,000</p>
        </div>
        <button className="px-6 py-2.5 btn-gradient text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
          invest Now
        </button>
      </div>
    </div>
  );
};
