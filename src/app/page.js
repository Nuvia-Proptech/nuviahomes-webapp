import Buttonss from "@/components/Buttonss";
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
import TestimonialCarousel from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Nav  />
      <div className="relative h-[100vh] w-full px-2">
        <div className="skewed btn-gradient h-72 w-72 absolute left-16 overflow-hidden p-[2px]">
          <div className="h-full w-full bg-[#1c0845] rounded-[16px]"></div>
        </div>
        <div className="skewed btn-gradient h-72 w-72 absolute bottom-6 right-16 overflow-hidden p-[2px]">
          <div className="h-full w-full bg-[#1c0845] rounded-[16px]"></div>
        </div>
        {/* <div className="h-[90%] w-full relative overflow-hidden bg-green-200">
          <Image src={homeHeroBannerDesktop} alt="" className="w-full object-cover" />
        </div> */}
        <Image
          src={homeHeroBannerDesktop}
          alt=""
          layout="responsive"
          width={1400}
          height={900}
          className="relative top-1/2 -translate-y-1/2"
        />
      </div>
      {/* top-1/2 -translate-y-1/2 */}

      <BuyRentInvestWidget widgetStyle="-mt-32 flex flex-col" />
      <CorePrinciples />
      <WhatNuviaOffersYou />
      <FeaturedListedProperties />
      <StartBuilding />
      <ProfitsChart />
      <TestimonialCarousel />
      <PopularPlaces />
      <LatestNews />
    </div>
  );
}
