import React from "react";
import egImage from "@/assets/New Bloom(magazine)-01-2.3.001-bigpicture_01_6.jpg";
import Image from "next/image";
import PropertyDetailsCarousel from "./PropertyDetailsCarousel";

export default function DisplayGrid() {
  return (
    <div className="h-[600px] grid gap-6 grid-cols-4">
      <div className="col-start-1 col-end-3 row-start-1 row-end-3 bg-green-300 rounded-2xl overflow-hidden relative">
        <PropertyDetailsCarousel />
        {/* <Image src={egImage} fill className="" /> */}
      </div>
      <div className="bg-pink-300 col-start-3 col-end-5 rounded-2xl overflow-hidden relative">
        <Image src={egImage} fill className="" />
      </div>
      <div className="bg-pink-300 col-start-3 col-end-4 row-start-2 row-end-3 rounded-2xl  overflow-hidden relative">
        <Image src={egImage} fill className="" />
      </div>
      <div className="bg-pink-300 row-start-2 row-end-3 rounded-2xl overflow-hidden relative">
        <Image src={egImage} fill className="" />
      </div>
    </div>
  );
}
