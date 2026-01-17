"use client";
import Image from "next/image";
import React from "react";
// import { Eye } from "lucide-react";
// Using simple table structure based on image

const portfolioData = [
  {
    id: 1,
    name: "Bedroom Bungalow",
    location: "Onitsha",
    type: "Residential",
    invested: "# 300,000",
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-600",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=100", // Placeholder
  },
  {
    id: 2,
    name: "Awka Mall",
    location: "Aroma",
    type: "Complex",
    invested: "# 440,000",
    status: "Approved",
    statusColor: "bg-green-100 text-successColor",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?w=100",
  },
  {
    id: 3,
    name: "Bedroom Bungalow",
    location: "Onitsha",
    type: "Residential",
    invested: "# 820,000",
    status: "Approved",
    statusColor: "bg-green-100 text-successColor",
    img: "https://images.unsplash.com/photo-1600596542815-27b88eeb2349?w=100",
  },
];

export const UserPortfolioTable = () => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm w-full font-urbanist">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-textColorDark">
          My Portfolio
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="text-left">
              <th className="pb-4 text-sm font-medium text-gray-500 font-publicSans">
                Project Name
              </th>
              <th className="pb-4 text-sm font-medium text-gray-500 font-publicSans">
                Project Type
              </th>
              <th className="pb-4 text-sm font-medium text-gray-500 font-publicSans">
                Invested
              </th>
              <th className="pb-4 text-sm font-medium text-gray-500 font-publicSans">
                Current Project Status
              </th>
            </tr>
          </thead>
          <tbody className="space-y-4">
            {portfolioData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-4 pr-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                      width={100}
                      height={100}
                    />
                    <div>
                      <p className="font-semibold text-textColorDark text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">{item.location}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 pr-4 text-sm text-gray-600">{item.type}</td>
                <td className="py-4 pr-4 text-sm font-semibold text-textColorDark">
                  {item.invested}
                </td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium ${item.statusColor}`}
                  >
                    {item.status === "Pending" && (
                      <span className="mr-1">⏳</span>
                    )}
                    {item.status === "Approved" && (
                      <span className="mr-1">✓</span>
                    )}
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
