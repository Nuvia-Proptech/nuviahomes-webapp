import Image from "next/image";
import React from "react";
import egImage from "@/assets/New Bloom(magazine)-01-2.3.001-bigpicture_01_6.jpg";

export default function BlogArticlesCard() {
  return (
    <div className="min-w-[310px]">
      <div className="w-full">
        <div className="rounded-2xl h-[164px] relative">
          <Image src={egImage} alt="" className="w-full h-full object-cover rounded-xl" />
        </div>
        {/*  */}
        <div>
          <div className="flex justify-between text-12 my-4">
            <p>Osim Faith</p>
            <p>20th May, 2025</p>
          </div>
          <p className="text-16 mb-2">10 Essential Tips Every First-Time Homebuyer Should Know</p>
          <p className="text-12 ">Buying your first home is one of the biggest financial and emotional........</p>
        </div>
        <div className="gradient-text flex justify-end mt-4">
          <button>See more</button>
        </div>
      </div>
    </div>
  );
}
