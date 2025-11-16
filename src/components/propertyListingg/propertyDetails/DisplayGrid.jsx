import React from "react";
import Image from "next/image";
import PropertyDetailsCarousel from "./PropertyDetailsCarousel";

export default function DisplayGrid({ property }) {
  const images = property?.images || [];

  return (
    <>
      {/* MOBILE */}
      <div className="block md:hidden rounded-2xl overflow-hidden shadow-lg">
        <PropertyDetailsCarousel property={property} />
      </div>

      {/* DESKTOP*/}
      <div className="hidden md:grid md:h-[600px] grid-cols-4 gap-6">
        <div className="col-start-1 col-end-3 row-start-1 row-end-3 rounded-2xl overflow-hidden relative shadow-lg">
          <PropertyDetailsCarousel property={property} />
        </div>

        {/* Top Right */}
        <div className="col-start-3 col-end-5 rounded-2xl overflow-hidden relative shadow-lg">
          {images[0] && (
            <Image
              src={images[0]}
              fill
              alt={`${property.title} - view 1`}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          )}
        </div>

        {/* Bottom Right – First */}
        <div className="col-start-3 col-end-4 row-start-2 row-end-3 rounded-2xl overflow-hidden relative shadow-lg">
          {images[1] && (
            <Image
              src={images[1]}
              fill
              alt={`${property.title} - view 2`}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          )}
        </div>

        {/* Bottom Right – Second */}
        <div className="col-start-4 col-end-5 row-start-2 row-end-3 rounded-2xl overflow-hidden relative shadow-lg">
          {images[2] && (
            <Image
              src={images[2]}
              fill
              alt={`${property.title} - view 3`}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          )}
        </div>
      </div>
    </>
  );
}