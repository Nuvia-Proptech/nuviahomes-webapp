import React from "react";
import houseImg from "@/assets/icons/house.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Amenities({ property }) {

  return (
    <div className="listedProperty border border-gray-500 rounded-2xl px-3 md:px-6 py-4">
      <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="text-3xl hover:no-underline py-4">
            Amenities
          </AccordionTrigger>
          <AccordionContent className="pt-4 pb-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {property.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="border border-gray-500 p-2 rounded-lg flex-shrink-0">
                    <Image src={houseImg} alt="" width={24} height={24} />
                  </div>
                  <p className="text-16 font-semibold leading-tight">
                    {amenity.label}:{" "}
                    <span className="font-light text-gray-300">{amenity.value}</span>
                  </p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}