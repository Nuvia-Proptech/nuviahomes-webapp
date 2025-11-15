import React from "react";

export const InvestDescription = () => {
  return (
    <div className="px-4 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Main Description */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start mb-20 md:mb-32">
          {/* Left - Big Title */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Unlock a World of Real Estate Investment
            </h1>
          </div>

          {/* Right  */}
          <div className="space-y-8 text-gray-300">
            <p className="text-lg leading-relaxed">
              Best for those who want a balance of good returns and medium risk. 
              Our Plans invest in rented buildings and properties all over West Africa 
              and deliver <span className="text-white font-semibold">20 - 30% per annum</span>.
            </p>

            <div className="space-y-3">
              <p className="font-semibold text-white text-xl">Expected Outcomes</p>
              <p className="text-base leading-relaxed">
                Our real estate plans pool your funds with others to acquire high-yield 
                properties across West Africa. Each property is professionally managed 
                and rented out — generating consistent passive income that’s distributed 
                directly to you as the investor.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          <div className="space-y-2">
            <p className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold">
              20-30<span className="gradient-text">%</span>
            </p>
            <p className="text-gray-400 text-sm md:text-base font-medium">
              Expected Returns
            </p>
          </div>

          {/* Medium Risk */}
          <div className="space-y-2">
            <p className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold">
              Medium
            </p>
            <p className="text-gray-400 text-sm md:text-base font-medium">
              Risk Level
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold">
              100<span className="gradient-text">%</span>
            </p>
            <p className="text-gray-400 text-sm md:text-base font-medium">
              Capital Guaranteed
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold ">
              0<span className="text-white">%</span>
            </p>
            <p className="text-gray-400 text-sm md:text-base font-medium">
              Return Guaranteed
            </p>
            <p className="text-xs text-gray-500 mt-1">
              (Performance-based — not fixed)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};