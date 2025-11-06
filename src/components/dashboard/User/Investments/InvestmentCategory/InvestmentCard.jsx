import React from "react";
import { HiUsers } from "react-icons/hi";

export const InvestmentCard = ({
  image,
  status,
  statusBg,
  title,
  description,
  roi,
  duration,
  percentComplete,
  amountRaised,
  goalAmount,
  investors,
  riskLevel,
  riskColor,
  minAmount,
  onInvestClick,
  investment,
}) => {
  return (
    <div className="gradient-border">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-7xl h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-48 rounded-lg overflow-hidden mx-4 mt-4 ">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div
            className={`absolute top-3 left-3 ${statusBg} text-gray-800 px-4 py-1 rounded-sm text-sm font-medium`}
          >
            {status}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Badges */}
          <div className="flex gap-3 mb-4 justify-between">
            <span className="bg-gray-500 text-white px-3 py-1 rounded text-xs font-medium">
              {roi}
            </span>
            <span className="bg-gray-500 text-white px-3 py-1 rounded text-xs font-medium">
              {duration}
            </span>
          </div>

          {/* Title and Description */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-6 flex-1">{description}</p>

          {/* Funding Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600">Funding Progress</span>
              <span className="text-sm font-semibold text-gray-900">
                {percentComplete}% Completed
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
              <div
                className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${percentComplete}%` }}
              ></div>
            </div>

            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-gray-900">
                {amountRaised} Raised
              </span>
              <span className="text-sm text-gray-600">{goalAmount} Goal</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 text-gray-600">
                <HiUsers className="w-4 h-4" />
                <span className="text-sm">{investors} Investors</span>
              </div>
              <span className={`text-sm font-medium ${riskColor}`}>
                {riskLevel}
              </span>
            </div>
          </div>

          {/* CTA Section  */}
          <div className="flex justify-between items-center mt-auto">
            <div>
              <p className="text-xs text-gray-500 mb-1">Min Amount</p>
              <p className="text-xl font-bold text-gray-900">{minAmount}</p>
            </div>
            <button
              onClick={() => onInvestClick(investment)}
              className="btn-gradient text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
