"use client";
import { useState } from "react";

export default function StartBuilding() {
  const [monthlyIncome, setMonthlyIncome] = useState(1);
  const [investPercent, setInvestPercent] = useState(20);
  const [periodYears, setPeriodYears] = useState(45);

  return (
    <div className="min-h-screen flex flex-col justify-center px-4 py-12 text-white md:px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        Start building your future
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 w-full max-w-[90rem] mx-auto">
        {/* Monthly Income */}
        <div className="flex flex-col justify-between space-y-6 md:sticky md:top-4 md:space-y-0">
          <p className="text-lg text-24">
            How much do you earn monthly?
          </p>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="1"
              max="10000"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              className="w-full h-3 accent-green-400 rounded-lg cursor-pointer"
            />
            <p className="text-xl whitespace-nowrap">${monthlyIncome}</p>
          </div>
          <span className="text-16 text-gray-300">
            You can type in your exact income in the display field
          </span>
        </div>

        {/* Invest Percentage */}
        <div className="flex flex-col justify-between space-y-6 md:space-y-0">
          <p className="text-lg text-24">
            What income % do you want to invest monthly?
          </p>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="1"
              max="100"
              value={investPercent}
              onChange={(e) => setInvestPercent(e.target.value)}
              className="w-full h-3 accent-green-400 rounded-lg cursor-pointer"
            />
            <p className="text-xl whitespace-nowrap">{investPercent}%</p>
          </div>
          <span className="text-16 text-gray-300">
            You can type in your exact income in the display field
          </span>
        </div>

        {/* Period in Years */}
        <div className="flex flex-col justify-between space-y-6 md:sticky md:top-4 md:space-y-0">
          <p className="text-lg text-24">For a period of</p>
          <div className="flex items-center gap-4 " >
            <input
              type="range"
              min="1"
              max="60"
              value={periodYears}
              onChange={(e) => setPeriodYears(e.target.value)}
              className="w-full h-3 accent-green-400 rounded-lg cursor-pointer"
            />
            <p className="text-xl whitespace-nowrap">{periodYears}yrs</p>
          </div>
          <div cl></div>
        </div>

        {/* You get – Full width result */}
        <div className="col-span-1 md:col-span-3 flex flex-col items-center mt-10 md:mt-32">
          <p className="text-24">You get</p>
          <p className="text-40 font-bold">80,045.06</p>
          <p className="gradient-text text-24">In {periodYears} years</p>
          
          <ul className="list-disc list-inside flex flex-col md:flex-row gap-8 md:gap-10 mt-10 text-left">
            <li className="text-20">
              <span className="text-16">Returns</span> 60,000.06
            </li>
            <li className="text-20">
              <span className="text-16">Returns</span> 60,000.06
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}