import Image from "next/image";
import React from "react";
import photo from "@/assets/New Bloom(magazine)-01-2.3.001-bigpicture_01_6.jpg"
import bedSymbol from "@/assets/material-symbols_bed-outline.png"
import Link from "next/link";

export default function PropertyCard({postId}) {
  return (
    <Link href={`/listing/${postId}`}>
      <div className="border rounded-xl p-2 w-full listedProperty">
        {/* max-w-80 */}
      <div className="h-[300px] mb-3 rounded-xl overflow-hidden">
        <Image
          src={photo}
          alt=""
          className="w-full h-full object-cover "
        />
      </div>
      <p className="mediumText flex items-center gap-1">
        N1,500,000 <span className="text-base font-normal">/Yearly</span>
      </p>
      <p className="inbtwnText">Palm Habour Terrace</p>
      <p className="text-sm py-2">No. 24 Green Valley Estate. Ifite Awka Anambra</p>
      <div>
        <div className="flex items-center justify-between py-2 border-t text-sm">
          <div className="flex items-center gap-2">
            <Image src={bedSymbol} alt="" />
            <p>3Beds</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={bedSymbol} alt="" />
            <p>3Bathrooms</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={bedSymbol} alt="" />
            <p>5x7 m2</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
