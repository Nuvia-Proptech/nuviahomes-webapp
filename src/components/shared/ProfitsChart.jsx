"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const data = [
  { month: "Jan", value: 1800 },
  { month: "Feb", value: 2600 },
  { month: "March", value: 2500 },
  { month: "April", value: 5200 },
  { month: "May", value: 5000 },
  { month: "June", value: 4700 },
  { month: "July", value: 4500 },
  { month: "Aug", value: 4600 },
  { month: "Sept", value: 7000 },
  { month: "Oct", value: 7200 },
  { month: "Nov", value: 7300 },
  { month: "Dec", value: 10000 },
];

export default function ProfitsChart() {
  const [range, setRange] = useState("All");

  return (
    <div className=" md:mx-20 p-6 md:px-14 px-6  rounded-xl text-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Your Profits</h2>
        <div className="flex gap-2">
          {["All", "1M", "6M", "1Y", "YTD"].map((label) => (
            <Button
              key={label}
              size="sm"
              variant={range === label ? "default" : "secondary"}
              className={cn(
                "rounded-full px-3",
                range === label
                  ? "bg-lime-400 text-black hover:bg-lime-500"
                  : "bg-[#1e1a3a] text-gray-300 hover:bg-[#2a2454]"
              )}
              onClick={() => setRange(label)}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#4b4a6a"
            />
            <XAxis dataKey="month" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e1a3a",
                border: "none",
                borderRadius: "0.5rem",
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#d4ff00"
              strokeWidth={3}
              dot={{ r: 5, fill: "#d4ff00", strokeWidth: 2 }}
              activeDot={{
                r: 7,
                fill: "#0f0c29",
                stroke: "#d4ff00",
                strokeWidth: 3,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
