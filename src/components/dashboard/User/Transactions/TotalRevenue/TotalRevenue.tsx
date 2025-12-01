import { MoreIcon } from "@/components/shared/Icons/MoreIcon";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", y2022: 12, y2021: -12 },
  { name: "Feb", y2022: 8, y2021: -18 },
  { name: "Mar", y2022: 10, y2021: -10 },
  { name: "Apr", y2022: 28, y2021: -18 },
  { name: "May", y2022: 12, y2021: -16 },
  { name: "Jun", y2022: 18, y2021: -19 },
  { name: "Jul", y2022: 16, y2021: -15 },
];

export const TotalRevenue = () => {
  return (
    <div className="w-full md:w-2/3 pr-4 md:border-r border-grayColor/10">
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium text-grayColor/90 font-publicSans">
          Total Revenue
        </p>
        <MoreIcon width="15" height="15" />
      </div>

      <div className="flex gap-3 mb-5">
        <p className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 bg-primaryColorMain rounded-full"></span>
          <span className="text-xs font-normal text-grayColor/70 font-publicSans">
            2022
          </span>
        </p>
        <p className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 bg-infoColorMain rounded-full"></span>
          <span className="text-xs font-normal text-grayColor/70 font-publicSans">
            2021
          </span>
        </p>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart barGap={-12} data={data}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 13, fill: "#22303E66" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 13, fill: "#22303E66" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip cursor={false} />
          <Bar dataKey="y2022" fill="#696CFF " radius={6} barSize={12} />
          <Bar dataKey="y2021" fill="#03C3EC" radius={6} barSize={12} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
