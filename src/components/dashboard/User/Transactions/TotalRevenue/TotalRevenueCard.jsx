"use client";
import { TotalRevenue } from "./TotalRevenue";
import { GrowthChart } from "./GrowthChart";

export const TotalRevenueCard = () => {
  return (
    <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-3 font-urbanist flex">
      {/* LEFT: Bar Chart */}
      <TotalRevenue />

      {/* RIGHT SECTION: GrowthChart */}
      <GrowthChart />
    </div>
  );
};
