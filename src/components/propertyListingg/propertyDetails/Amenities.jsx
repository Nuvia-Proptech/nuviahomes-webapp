import React from "react";
import houseImg from "@/assets/icons/house.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Amenities() {
  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="listedProperty border border-gray-500 rounded-2xl px-3">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-3xl hover:no-underline">
            Amenities
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-5 text-balance">
            <div className="grid grid-cols-3 gap-2">
              {items.map((i) => (
                <div key={i} className="flex gap-3">
                  <div className="border border-gray-500 p-1 rounded-sm">
                    <Image src={houseImg} alt="" />
                  </div>
                  <p className="text-16 font-semibold">
                    Bedrooms: <span className="font-light">3 Beds</span>
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
