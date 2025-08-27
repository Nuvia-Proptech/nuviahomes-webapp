'use client'
import BuyRentInvestWidget from "@/components/home/BuyRentInvestWidget";
import CorePrinciples from "@/components/home/CorePrinciples";
import FeaturedListedProperties from "@/components/home/FeaturedListedProperties";
import LatestNews from "@/components/home/LatestNews";
import PopularPlaces from "@/components/home/PopularPlaces";
import WhatNuviaOffersYou from "@/components/home/WhatNuviaOffersYou";
import Nav from "@/components/shared/Nav";
import Image from "next/image";
import homeHeroBannerDesktop from "@/assets/icons/desktop-hero-banner.svg";
import StartBuilding from "@/components/shared/StartBuilding";
import ProfitsChart from "@/components/shared/ProfitsChart";
import TestimonialsSlider from "@/components/testimonials/TestimonialsSlider";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="relative h-[90vh] w-full px-20">
        <div className="skewed btn-gradient h-64 w-64 absolute top-6 left-32 overflow-hidden p-[2px]">
          <div className="h-full w-full bg-[#1c0845] rounded-[16px]"></div>
        </div>
        <div className="skewed btn-gradient h-64 w-64 absolute bottom-6 right-32 overflow-hidden p-[2px]">
          <div className="h-full w-full bg-[#1c0845] rounded-[16px]"></div>
        </div>
        {/* <div className="h-[90%] w-full relative overflow-hidden bg-green-200">
          <Image src={homeHeroBannerDesktop} alt="" className="w-full object-cover" />
        </div> */}
        <div className="absolute top-40 left-60 z-50">
          <p className="text-40 mb-8">
            Buy, Rent, or Invest in <br></br> Verified Properties with Ease
          </p>
          <p>
            Download our mobile app to unlock exclusive features, manage your
            investments <br></br> seamlessly, and explore a world of real estate
            opportunities at your fingertips!
          </p>
          {/* <!-- Download buttons --> */}
          <div className="flex gap-3 mt-10">
            <button className="skewed gap-1 btn-gradient py-2 px-4 text-base flex items-center justify-center text-white">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="unskewed"
              >
                <g clipPath="url(#clip0_1142_8148)">
                  <path
                    d="M3.89 0.705744C4.07284 0.601151 4.28 0.54653 4.49064 0.547373C4.70129 0.548215 4.908 0.604491 5.09 0.710544L23.9132 11.6905L18.0884 16.9321L3.2876 3.61214L3.2876 1.74734C3.28742 1.53606 3.34304 1.32848 3.44881 1.14558C3.55459 0.962689 3.70678 0.810962 3.89 0.705744ZM3.2876 6.84254L3.2876 30.2521L16.2956 18.5473L3.2876 6.84254ZM3.2876 33.4825L3.2876 35.3473C3.28754 35.5585 3.34319 35.7659 3.44893 35.9487C3.55467 36.1314 3.70676 36.283 3.88985 36.3882C4.07293 36.4934 4.28053 36.5484 4.49167 36.5477C4.70282 36.547 4.91003 36.4906 5.0924 36.3841L23.9132 25.4041L18.0884 20.1625L3.2876 33.4825ZM26.09 24.1345L33.89 19.5841C34.0713 19.4785 34.2217 19.3272 34.3262 19.1452C34.4308 18.9633 34.4858 18.7572 34.4858 18.5473C34.4858 18.3375 34.4308 18.1314 34.3262 17.9494C34.2217 17.7675 34.0713 17.6162 33.89 17.5105L26.09 12.9601L19.8812 18.5473L26.09 24.1345Z"
                    fill="#FDF7ED"
                  />
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

              <p className="text-start leading-4 unskewed">
                Get it on <br />
                Google store
              </p>
            </button>
            <button className="skewed gap-1 btn-gradient py-2 px-2 text-base flex items-center justify-center text-white">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="unskewed"
              >
                <path
                  d="M18.1342 8.9716C18.1792 7.61411 18.5512 5.61611 19.8517 4.30361C21.0592 3.08411 22.5292 2.49011 23.4442 2.21861C23.5248 2.19337 23.6103 2.18812 23.6933 2.20331C23.7764 2.2185 23.8545 2.25368 23.921 2.30579C23.9874 2.35791 24.0402 2.42541 24.0747 2.50247C24.1092 2.57953 24.1245 2.66383 24.1192 2.74811C24.0592 4.04711 23.7172 5.98511 22.8352 7.0231C22.0042 8.0011 20.6692 9.2971 18.7117 9.51611C18.6367 9.52422 18.5608 9.51597 18.4893 9.49195C18.4178 9.46792 18.3523 9.42868 18.2974 9.37693C18.2426 9.32518 18.1995 9.26215 18.1714 9.19218C18.1432 9.1222 18.1305 9.04695 18.1342 8.9716Z"
                  fill="#FDF7ED"
                />
                <path
                  d="M21.4851 33.8024C22.4256 34.1624 23.3751 34.5254 24.2346 34.5254C26.0751 34.5254 31.4316 30.2804 31.6236 25.8734C31.6251 25.7624 31.5958 25.6531 31.5388 25.5578C31.4819 25.4624 31.3996 25.3847 31.3011 25.3334C29.9391 24.5714 27.7131 22.6724 27.6366 19.9109C27.5466 16.6919 29.1621 14.1359 30.3846 13.0784C30.6606 12.8399 30.7551 12.4199 30.5091 12.1529C29.3961 10.9379 27.1581 9.2654 25.1151 9.3059C23.6301 9.3359 22.2906 9.8909 21.1401 10.3649C20.2596 10.7294 19.4901 11.0474 18.8511 11.0474C18.2466 11.0474 17.5206 10.7324 16.6866 10.3679C15.5646 9.8789 14.2476 9.3059 12.7716 9.3059C10.0356 9.3059 4.62964 11.5754 4.62964 20.3339C4.62964 24.9764 9.42214 34.6484 13.4676 34.5254C14.3406 34.5254 15.2736 34.1654 16.2006 33.8054C17.1126 33.4514 18.0171 33.1004 18.8511 33.1004C19.6566 33.1004 20.5656 33.4499 21.4851 33.8024Z"
                  fill="#FDF7ED"
                />
              </svg>
              <p className="text-start leading-4 unskewed">
                Get it on <br />
                Google store
              </p>
            </button>
          </div>
        </div>
        <div className="relative top-0 h-full">
          <Image src={homeHeroBannerDesktop} alt="" fill className="" />
        </div>
      </div>
      {/* top-1/2 -translate-y-1/2 */}

      <BuyRentInvestWidget widgetStyle="-mt-32 flex flex-col" />
      <CorePrinciples />
      <WhatNuviaOffersYou />
      <FeaturedListedProperties />
      <StartBuilding />
      <ProfitsChart />
      {/* <TestimonialCarousel /> */}
      <TestimonialsSlider />
      <PopularPlaces />
      <LatestNews />
    </div>
  );
}
