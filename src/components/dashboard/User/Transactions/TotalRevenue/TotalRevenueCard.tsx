"use client";
import { TotalRevenue } from "./TotalRevenue";
import { GrowthChart } from "./GrowthChart";

export const TotalRevenueCard = () => {
  return (
    <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-3 font-urbanist flex flex-col md:flex-row gap-5 lg:gap-1">
      {/* LEFT: Bar Chart */}
      <TotalRevenue />

      {/* RIGHT SECTION: GrowthChart */}
      <GrowthChart />
    </div>
  );
};
