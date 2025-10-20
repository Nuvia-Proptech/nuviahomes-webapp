import { MapPin } from "lucide-react";
import React from "react";
import houseImg from "@/assets/icons/house.svg";
import Image from "next/image";

export default function PropertyFeatures({ property }) {
  return (
    <div className="listedProperty border border-gray-500 rounded-2xl p-3">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[32px]">{property.title}</p>
          <p className="flex text-16">
            <MapPin /> {property.location}
          </p>
        </div>
        <div>
          <p className="text-[28px]">
            {property.price.split('/')[0]}<span className="text-14">/{property.price.split('/')[1]}</span>
          </p>
        </div>
      </div>

      <hr className="border border-gray-500 my-5" />

      <div className="grid grid-cols-3 gap-3">
        {property.features.map((feature, i) => (
          <div key={i} className="flex gap-3">
            <div className="border border-gray-500 p-1 rounded-sm">
              <Image src={houseImg} alt="" />
            </div>
            <p className="text-16 font-semibold">
              {feature.label}: <span className="font-light">{feature.value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}