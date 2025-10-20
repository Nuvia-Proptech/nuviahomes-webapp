import React from "react";
import Image from "next/image";
import PropertyDetailsCarousel from "./PropertyDetailsCarousel";

export default function DisplayGrid({ property }) {
  return (
    <div className="h-[600px] grid gap-6 grid-cols-4">
      <div className="col-start-1 col-end-3 row-start-1 row-end-3 rounded-2xl overflow-hidden relative">
        <PropertyDetailsCarousel property={property} />
      </div>
      <div className="col-start-3 col-end-5 rounded-2xl overflow-hidden relative">
        {property?.images?.[0] && (
          <Image src={property.images[0]} fill alt={property.title} className="object-cover" />
        )}
      </div>
      <div className="col-start-3 col-end-4 row-start-2 row-end-3 rounded-2xl overflow-hidden relative">
        {property?.images?.[1] && (
          <Image src={property.images[1]} fill alt={property.title} className="object-cover" />
        )}
      </div>
      <div className="row-start-2 row-end-3 rounded-2xl overflow-hidden relative">
        {property?.images?.[2] && (
          <Image src={property.images[2]} fill alt={property.title} className="object-cover" />
        )}
      </div>
    </div>
  );
}