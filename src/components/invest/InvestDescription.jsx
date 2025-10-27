import React from "react";
import AltHero from "../shared/AltHero";

export const InvestDescription = () => {
  return (
    <div>
      <div className="mx-6">
        <div className="md:flex gap-4 md:space-y-4 my-16">
          <div className="md:w-1/2">
            <p className="text-4xl md:text-6xl leading-normal">
              Unlock a World of Real Estate Investment
            </p>
          </div>
          <div className="md:w-1/2 space-y-6">
            <p>
              Best for those who wants a balance of good returns and medium,
              risk. Our Plans invest in Rented buildings and properties all over
              West Africa and returns 20 - 30 Percent per annum
            </p>

            <div>
              <p className="font-semibold my-2">Expected Outcomes</p>
              <p>
                Our real estate plans is invested into a portfolio of properties
                across west Africa. Your funds are pooled and used to purchase a
                property which is then rented out and managed by experts to
                generate returns for you
              </p>
            </div>
          </div>
        </div>
        {/* Belt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  place-items-center text-center">
          <div>
            <p className="text-3xl md:text-4xl font-semibold">
              20-30<span className="gradient-text">%</span>
            </p>
            <p className="text-gray-400 font-medium text-sm">
              Expected Returns
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-semibold">Medium</p>
            <p className="text-gray-400 font-medium text-sm">Risk Level</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-semibold">
              100<span className="gradient-text">%</span>
            </p>
            <p className="text-gray-400 font-medium text-sm">
              Capital Guranteed
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-semibold">
              0<span className="gradient-text">%</span>
            </p>
            <p className="text-gray-400 font-medium text-sm">
              {" "}
              Return Gurateed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
