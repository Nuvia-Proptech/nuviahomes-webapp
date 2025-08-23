import Image from "next/image";
import React from "react";
import phoneImage from "@/assets/Frame 6996.png";

export default function DownloadOurApp() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center rounded-2xl my-10 container mx-auto bg-[#1c0845] border border-gray-500">
        {/* Text Column */}
        <div className="w-full md:w-2/3 p-6 sm:p-10">
          <p className="text-4xl md:text-5xl lg:text-[56px] leading-tight mb-4">
            Check out the Nuvia Homes app—find your dream home!
          </p>
          <p className="text-xl md:text-[32px]">
            Download our real estate app now to{" "}
            <span className="gradient-text">
              explore listings, discover lands and
            </span>
            properties,
            <span className="gradient-text">and find your perfect home</span>
            with ease!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <button className="gap-2 btn-gradient rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl py-2 px-4 text-base flex items-center justify-center text-white">
              {/* Google Play SVG */}
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1142_8148)">
                  <path d="M3.89 0.705744..." fill="#FDF7ED" />
                </g>
                <defs>
                  <clipPath id="clip0_1142_8148">
                    <rect
                      width="36"
                      height="36"
                      fill="white"
                      transform="translate(0.887695 0.547363)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-start leading-4">
                Get it on <br /> Google store
              </p>
            </button>

            <button className="gap-2 btn-gradient rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl py-2 px-4 text-base flex items-center justify-center text-white">
              {/* Apple Store SVG */}
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.1342 8.9716..." fill="#FDF7ED" />
                <path d="M21.4851 33.8024..." fill="#FDF7ED" />
              </svg>
              <p className="text-start leading-4">
                Get it on <br /> Google store
              </p>
            </button>
          </div>

          <p className="text-2xl md:text-3xl">
            Don't lose it when it comes out.
          </p>
        </div>

        {/* Image Column */}
        <div className="w-full md:w-1/3 flex justify-center items-center p-6 md:p-10">
          <Image
            src={phoneImage}
            alt="Phone showing app"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
