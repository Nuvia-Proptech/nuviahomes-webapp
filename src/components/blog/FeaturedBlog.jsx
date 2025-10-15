import Image from "next/image";
import React from "react";
import egImage from "@/assets/New Bloom(magazine)-01-2.3.001-bigpicture_01_6.jpg";
import avatar from "@/assets/icons/Frame 7218.png";
import { Calendar } from "lucide-react";

export default function FeaturedBlog() {
  return (
    <div className="relative h-[531px] rounded-xl overflow-hidden ">
      <Image src={egImage} alt="" className="h-full rounded-xl w-full" />
      <div className="absolute bottom-0 bg-white/5 backdrop-blur-sm w-full p-4">
        <p className="text-24">Rent or buy:How much can you afford</p>
        <p>
          At Nuvia homes you can invest, buy and rent any property with ease
        </p>
        {/* bottom line */}
        <div className="flex justify-between">
          {/* col - 1 */}
          <div className="flex gap-4">
            <div className="flex items-center">
              <div className="h-9 w-9 flex items-center justify-center">
                <Image
                  src={avatar}
                  alt="person avatar"
                  className="object-cover"
                />
              </div>
              <p>Osim Faith</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-8 w-8 rounded-full flex items-center justify-center border border-gray-100">
                <Calendar className="" size={20} />
              </div>
              <p>Osim Faith</p>
            </div>
          </div>
          {/* travel fashion houses */}
          <div className="flex gap-2">
            <button className="border border-gray-100 cursor-pointer text-base font-light h-6 px-4 rounded-full">
              Travel
            </button>
            <button className="border border-gray-100 cursor-pointer text-base font-light h-6 px-4 rounded-full">
              Fashion
            </button>
            <button className="border border-gray-100 cursor-pointer text-base font-light h-6 px-4 rounded-full">
              Houses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
