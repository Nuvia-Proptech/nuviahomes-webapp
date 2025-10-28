"use client";
import { useState } from "react";

export default function StartBuilding() {
  const [monthlyIncome, setMonthlyIncome] = useState(1);
  const [investPercent, setInvestPercent] = useState(20);
  const [periodYears, setPeriodYears] = useState(45);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p- 6 text-white md:relative">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        Start building your future
      </h2>

      <div className="grid md:grid-cols-3 gap-20 w-full max-w-[90rem] ">
        {/* Monthly Income */}
        <div className="flex flex-col items-center justify-between md:sticky md:top-4">
          <p className="text-lg text-24 w-full">
            How much do you earn monthly?
          </p>
          <div className="flex items-center gap-4 w-full">
            <input
              type="range"
              min="1"
              max="10000"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              className="w-full accent-green-400"
            />
            <p className="text-xl">${monthlyIncome}</p>
          </div>
          <span className="text-16 text-gray-300 w-full">
            You can type in your exact income in the display field
          </span>
        </div>

        {/* Invest Percentage */}
        <div className="flex flex-col items-center justify-between">
          <p className="text-lg text-24 w-full">
            What income % do you want to invest monthly?
          </p>
          <div className="flex items-center gap-4 w-full">
            <input
              type="range"
              min="1"
              max="100"
              value={investPercent}
              onChange={(e) => setInvestPercent(e.target.value)}
              className="w-full accent-green-400"
            />
            <p className="text-xl">{investPercent}%</p>
          </div>
          <span className="text-16 text-gray-300 w-full">
            You can type in your exact income in the display field
          </span>
        </div>

        {/* Period in Years */}
        <div className="md:sticky md:top-4">
          <p className="mb-4 text-lg text-24">For a period of</p>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="1"
              max="60"
              value={periodYears}
              onChange={(e) => setPeriodYears(e.target.value)}
              className="w-full accent-green-400"
            />
            <p className="text-xl">{periodYears}yrs</p>
          </div>
        </div>
        {/* You get */}
        <div className="flex flex-col items-center mt-32 col-span-3">
          <p className="text-24">You get</p>
          <p className="text-40">80,045.06</p>
          <p className="gradient-text text-24">In 45 years</p>
          <ul className="list-disc list-inside flex gap-10 mt-10">
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
