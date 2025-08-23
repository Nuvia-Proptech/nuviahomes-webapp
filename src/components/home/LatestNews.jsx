import Image from "next/image";
import React from "react";
import sectionImage from "@/assets/New Bloom(magazine)-01-2.3.001-bigpicture_01_6.jpg";

export default function LatestNews() {
  let items = [1, 2, 3, 4];
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="space-y-2 my-10">
          <p className="text-20 gradient-text">Checkout Our New</p>
          <p className="text-40 leading-none">Latest news</p>
          <p className="smallText">
            Stay Updated with the Latest Real Estate News and Market Trends.
          </p>
        </div>
        {/* Cards */}
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div key={i} className="listedProperty rounded-2xl border border-gray-500">
              <div className="m-2 rounded-2xl max-w-2xl h-[300px] relative">
                <Image
                  src={sectionImage}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="text-white absolute left-0 bottom-6 w-full px-4">
                  <p className="smallText mb-2">
                    Top 10 Best appreciating condos in Las Vegas
                  </p>
                  <div className="flex justify-between">
                    <p className="text-sm">28 May 2025</p>
                    <button className="skewed btn-gradient text-xs px-3 py-1">
                      <span className="unskewed">Continue Reading</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
