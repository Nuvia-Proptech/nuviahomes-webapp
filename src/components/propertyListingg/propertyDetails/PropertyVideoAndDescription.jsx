import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";


export default function PropertyVideoAndDescription({ property }) {
  return (
    <div className="space-y-5">
      <div className="listedProperty border border-gray-500 rounded-2xl px-3">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-3 text-3xl hover:no-underline">Property Video</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="relative h-[415px] rounded-2xl overflow-hidden">
                <Image src={property.videoImage} alt="" fill />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* Description */}
      <div className="listedProperty border border-gray-500 rounded-2xl px-3">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-3xl hover:no-underline">Description</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>{property.description}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}