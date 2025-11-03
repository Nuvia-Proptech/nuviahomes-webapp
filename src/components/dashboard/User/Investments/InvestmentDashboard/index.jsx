import React from "react";
import {
  FaWallet,
  FaChartLine,
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaPaypal,
  FaCreditCard,
  FaExchangeAlt,
} from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";

export function FinancialDashboard() {
  const cards = [
    {
      title: "Main balance",
      amount: "#400,000",
      change: "+15%",
      subtext: "₦20,000 ",
      condition: "better than last month",
      positive: true,
      icon: <FaWallet className="text-purple-600" />,
      bgColor: "bg-purple-100",
    },
    {
      title: "Interest balance",
      amount: "#500",
      change: "+30%",
      subtext: "₦1000 ",
      condition: "better than last month",
      positive: true,
      icon: <FaChartLine className="text-yellow-600" />,
      bgColor: "bg-yellow-100",
    },
    {
      title: "Running investments",
      amount: "50",
      change: "-15%",
      condition: "worst than last month",
      subtext: "₦100 ",
      positive: false,
      icon: <FaMoneyBillWave className="text-red-600" />,
      bgColor: "bg-red-100",
    },
    {
      title: "Total deposits",
      amount: "#400,000",
      change: "+15%",
      subtext: "₦10,000 ",
      condition: "better than last month",
      positive: true,
      icon: <FaWallet className="text-teal-600" />,
      bgColor: "bg-teal-100",
    },
    {
      title: "Total investments",
      amount: "200",
      change: "+150%",
      condition: "better than last month",
      subtext: "₦10,000 ",
      positive: true,
      icon: <FaFileInvoiceDollar className="text-lime-600" />,
      bgColor: "bg-lime-100",
    },
    {
      title: "Total earn",
      amount: "#50,000",
      change: "+15%",
      condition: "better than last month",
      subtext: "₦20,0000 ",
      positive: true,
      icon: <FaChartLine className="text-purple-600" />,
      bgColor: "bg-purple-100",
    },
  ];

  const notifications = [
    {
      title: "Paypal",
      subtitle: "Send money",
      icon: <FaPaypal className="text-blue-600" />,
      bgColor: "bg-red-100",
    },
    {
      title: "Wallet",
      subtitle: "Mac'D",
      icon: <MdAccountBalanceWallet className="text-green-600" />,
      bgColor: "bg-green-100",
    },
    {
      title: "Transfer",
      subtitle: "Refund",
      icon: <FaExchangeAlt className="text-cyan-600" />,
      bgColor: "bg-cyan-100",
    },
    {
      title: "Credit Card",
      subtitle: "Ordered Food",
      icon: <FaCreditCard className="text-purple-600" />,
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto">
       
        <div className="flex gap-6 min-h-0">
          {/* Main Content */}
          <div className="flex-1 min-h-0">
            <div className="grid grid-cols-3 gap-4 h-full">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 shadow-sm flex flex-col h-full"
                >
                 
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-gray-600 text-lg font-semibold">
                      {card.title}
                    </h3>
                    <div className={`${card.bgColor} p-2 rounded-full`}>
                      {card.icon}
                    </div>
                  </div>

                  {/* Bottom: Stats */}
                  <div className="mt-auto">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold text-gray-900">
                        {card.amount}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          card.positive
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {card.change}
                      </span>
                    </div>

                    <p className="text-xs flex items-center gap-1">
                      {card.positive ? (
                        <GoArrowUpRight className="w-3 h-3 text-green-600" />
                      ) : (
                        <GoArrowDownRight className="w-3 h-3 text-red-600" />
                      )}
                      <span className={card.positive ? "text-green-600" : "text-red-600"}>
                        {card.subtext}
                      </span>
                      <span className="text-gray-500 ml-3">{card.condition}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications Sidebar  */}
          <div className="w-80 bg-white rounded-2xl p-6 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Notifications
              </h2>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>

            <div className="space-y-4 flex-1 overflow-y-auto">
              {notifications.map((notif, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`${notif.bgColor} p-3 rounded-lg`}>
                    {notif.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {notif.title}
                    </p>
                    <p className="text-xs text-gray-500">{notif.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}