import Image from "next/image";
import React from "react";
import egImage from "@/assets/New Bloom(magazine)-01-2.3.001-bigpicture_01_6.jpg";

export default function TrendingBlog() {
  let items = [1, 2, 3];
  return (
    <div className="featured-gradient border border-gray-500 rounded-xl p-4">
      <p className="text-3xl mb-16">Trending</p>
      <div className="space-y-5">
        {items.map(() => (
          <div className="rounded-2xl h-[157px] relative">
            <Image
              src={egImage}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="text-white absolute left-[5%] bottom-3">
              <p className="text-16">
                Top 10 Best appreciating condos in Las Vegas
              </p>
              <p className="text-14">28 May 2025</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
