import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { InvestPortfolio } from "./InvestPortfolio";
import { InvestLogo } from "../shared/Icons/InvestLogo";

export const HowInvestmentWorks = () => {
  return (
    <main className="flex flex-col md:flex-row mt-6 md:mt-12 ">
      <div className="min-h-full  mx-auto text-white p-8">
        {/* Logo */}

        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <div className="mb-4">
              <InvestLogo />
            </div>
            <h1 className="text-5xl font-bold mb-4">
              How Real Estate
              <br />
              Investment Works
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              For those who wants a balance of good returns and medium risk,
              this explains how it works
            </p>
          </div>

          {/* Right Side - Chart and Info */}
          <div className="space-y-2 md:col-span-2">
            <InvestPortfolio />
            {/* Chart Card */}
            <div className=" rounded-2xl mt-4 md:flex items-start  ">
              {/* Funds Till Maturity */}
              <div className=" rounded-xl py-4 mb-4 flex-1">
                <h3 className="font-semibold mb-2 ">Funds Till Maturity</h3>
                <p className="text-lg text-gray-300 ">
                  You can sell the investment in full over at maturity or send
                  your funds back to your wallet or to your personal bank
                  account
                </p>
              </div>

              {/* Start Investing Button */}
              <button className=" text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 btn-gradient h-fit my-auto">
                start investing
                <GoArrowUpRight />
              </button>
            </div>

            {/* Description Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className=" rounded-xl p-4 border-1 border-gray-700 forms-gradient">
                <h4 className="text-sm font-semibold mb-2">Description</h4>
                <p className="text-xs text-gray-300">
                  Funds you invested are deployed into our ongoing property
                  purchases
                </p>
              </div>

              <div className=" rounded-xl p-4 border-1 border-gray-700 forms-gradient">
                <h4 className="text-sm font-semibold mb-2">Description</h4>
                <p className="text-xs text-gray-300">
                  Returns start coming in on the first week of each new month
                </p>
              </div>

              <div className=" rounded-xl p-4 border-1 border-gray-700 forms-gradient">
                <h4 className="text-sm font-semibold mb-2">Description</h4>
                <p className="text-xs text-gray-300">
                  You get to choose durations between 3 to 6 months or a year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
