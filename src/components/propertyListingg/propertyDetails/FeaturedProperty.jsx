import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import egImage from "@/assets/New Bloom(magazine)-01-2.3.001-bigpicture_01_6.jpg";

export default function FeaturedProperty() {
  let items = [1, 2, 3, 4, 5];
  return (
    <div>
      <p className="text-3xl mb-4">Featured Property</p>

      <div className="space-y-4">
        {items.map(() => (
          <div className="forms-gradient flex gap-3 border border-gray-500 rounded-xl p-2">
            <div className="relative h-[93px] w-1/3 rounded-lg overflow-hidden">
              <Image src={egImage} alt="" fill />
            </div>
            <div className="w-2/3">
              <p className="text-24 mb-2">Palm Harbour Terrace</p>
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <MapPin size={16} />
                  <p className="text-14 font-light">
                    No. 20 green Valley Estate.
                  </p>
                </div>
                <div className="flex justify-between">
                  <button className="text-sm">For Sale</button>
                  <p>
                    N1,500,000{" "}
                    <span className="text-14 font-light">/Yearly</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
