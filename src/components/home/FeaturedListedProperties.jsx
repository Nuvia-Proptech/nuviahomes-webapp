import React from "react";
import beautifulHouse from "@/assets/a beautiful house.png";
import Image from "next/image";
import { Bath, Bed, RulerDimensionLineIcon } from "lucide-react";

export default function FeaturedListedProperties() {
  let items = [1, 2, 3, 4];
  return (
    <section className="mb-16 md:mb-24">
      <div className="container mx-auto px-14">
        <div className="flex flex-col md:flex-row justify-between my-10">
          <div className="space-y-2 ">
            <p className="text-20 gradient-text">Checkout Our New</p>
            <p className="text-40 leading-none">Featured listed properties</p>
            <p className="smallText">
              Top Location With The Most In-emand Properties.
            </p>
          </div>
          <div className="flex gap-3 items-end">
            <button className="skewed h-9 btn2-gradient  py-1.5 px-4 flex items-center justify-center text-white border border-gray-600">
              <span className="unskewed">Buy</span>
            </button>
            <button className="skewed h-9 btn-gradient py-1.5 px-4 flex items-center justify-center text-white border border-gray-600">
              <span className="unskewed">Rent</span>
            </button>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col lg:flex-row justify-between gap-5 md:items-center border border-gray-400 rounded-xl p-2 listedProperty"
            >
              {/* Image Wrapper */}
              <div className="w-full lg:w-1/2">
                <Image
                  src={beautifulHouse}
                  alt="Property"
                  className="w-full h-full max-h-64 lg:max-h-80 object-cover rounded-xl"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-12 bg-[#B43C3C52] py-1 px-3 flex items-center rounded-lg border border-[#C0C0C0] shadow-[0_4px_49px_0_#0007481F] backdrop-blur-[15px]">
                    For Sale
                  </div>
                  <p className="text-24 flex items-center gap-1">
                    N1,500,000{" "}
                    <span className="text-14 font-normal">/Yearly</span>
                  </p>
                </div>

                <p className="text-24 font-semibold mb-1">
                  Palm Habour Terrace
                </p>

                {/* Reviews */}
                <div className="flex items-center mb-3">
                  <div>⭐🌟⭐⭐</div>
                  <p className="text-12 ml-2">(200 Reviews)</p>
                </div>

                {/* Icons Row */}
                <div className="text-14 flex items-center justify-between p-2 border-b border-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <Bed />
                    <p>3 Beds</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath />
                    <p>3 Baths</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <RulerDimensionLineIcon />
                    <p>120 sqm</p>
                  </div>
                </div>

                {/* Address and CTA */}
                <div className="flex items-center justify-between gap-4 p-2 mt-2">
                  <p className="text-14">No 24 Green Vallet Estates</p>
                  <button className="bg-gray-100 rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl py-1.5 px-4 text-14 flex items-center justify-center text-gray-800">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
