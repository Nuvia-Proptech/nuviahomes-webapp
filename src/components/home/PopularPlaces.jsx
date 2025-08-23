import Image from "next/image";
import React from "react";
import sectionImage from "@/assets/New Bloom(magazine)-01-2.3.001-bigpicture_01_6.jpg";

export default function PopularPlaces() {
  let items = [1, 2, 3, 4, 5];
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="space-y-2 my-10">
          <p className="text-20 gradient-text">Checkout Our New</p>
          <p className="text-40 leading-none">Popular places</p>
          <p className="smallText">
            Explore the Most Popular and Fast-Growing Places in Real Estate.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-gray-500 rounded-2xl p-2 max-w-2xl h-[500px] relative listedProperty"
            >
              <Image
                src={sectionImage}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="text-white absolute left-[10%] top-[80%]">
                <p className="text-24">Spain</p>
                <p className="text-xl">4 Properties</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
