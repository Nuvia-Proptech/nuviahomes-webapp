import { MapPin } from "lucide-react";
import React from "react";
import houseImg from "@/assets/icons/house.svg";
import Image from "next/image";

export default function PropertyFeatures() {
  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="listedProperty border border-gray-500 rounded-2xl p-3">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[32px]">Palm Pearl Habour</p>
          <p className="flex text-16">
            <MapPin /> No. 24 Green Valley Estate.
          </p>
        </div>
        <div>
          <p className="text-[28px]">
            30,000,000<span className="text-14">/Yearly</span>
          </p>
        </div>
      </div>

      <hr className="border border-gray-500 my-5" />

      <div className="grid grid-cols-3 gap-3">
        {items.map((i) => (
          <div key={i} className="flex gap-3">
            <div className="border border-gray-500 p-1 rounded-sm">
              <Image src={houseImg} alt="" />
            </div>
            <p className="text-16 font-semibold">
              Bedrooms: <span className="font-light">3 Beds</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
