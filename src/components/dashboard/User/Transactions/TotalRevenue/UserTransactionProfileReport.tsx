"use client";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { ArrowUp } from "lucide-react";

const data = [
  { value: 30 },
  { value: 100 },
  { value: 40 },
  { value: 90 },
  { value: 50 },
  { value: 95 },
];

export const UserTransactionProfileReport = () => {
  return (
    <div className="w-full max-w-96 rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
      <h2 className="text-textColorDark text-lg font-medium font-publicSans">
        Profile Report
      </h2>

      <div className="flex gap-3">
        {/* year and Stats */}
        <div className="">
          <div className="bg-warningColor/20 px-2.5 py-1 my-1">
            <p className="text-warningColor">YEAR 2022</p>
          </div>
          {/* stats */}
          <div className="flex items-center space-x-1 mt-4 font-publicSans">
            <ArrowUp className="text-successColorLight w-4 h-4" />
            <span className="text-successColorLight text-sm font-normal">
              68.2%
            </span>
          </div>
          <p className="text-textColorDark font-medium text-2xl">#84,686k</p>
        </div>

        {/* Chart */}
        <div className="mt-3 h-24 w-32 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#FFAB00" 
                strokeWidth={4}
                dot={false}
                activeDot={{
                  r: 6,
                  fill: "#F59E0B",
                  strokeWidth: 3,
                  stroke: "white",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
