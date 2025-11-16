import { MapPin } from "lucide-react";
import React from "react";
import houseImg from "@/assets/icons/house.svg";
import Image from "next/image";

export default function PropertyFeatures({ property }) {
  return (
    <div className="listedProperty border border-gray-500 rounded-2xl p-3 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex-1">
          <p className="text-[32px] leading-tight">{property.title}</p>
          <p className="flex items-center gap-2 text-16 text-gray-300">
            <MapPin size={18} />
            {property.location}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[28px] whitespace-nowrap">
            {property.price.split('/')[0]}
            <span className="text-14 text-gray-400">
              /{property.price.split('/')[1]}
            </span>
          </p>
        </div>
      </div>

      <hr className="border border-gray-500 my-5" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {property.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="border border-gray-500 p-2 rounded-lg flex-shrink-0">
              <Image src={houseImg} alt="" width={24} height={24} />
            </div>
            <p className="text-16 font-semibold leading-tight">
              {feature.label}:{" "}
              <span className="font-light text-gray-300">{feature.value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}