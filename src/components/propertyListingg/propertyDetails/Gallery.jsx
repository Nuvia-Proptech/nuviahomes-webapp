import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Gallery({ property }) {
  return (
    <div className="listedProperty border border-gray-500 rounded-2xl px-3">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-3 text-3xl hover:no-underline">
            Gallery
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div className="grid gap-4 grid-cols-3">
              {property.images.map((img, i) => (
                <div key={i} className="relative h-[202px] rounded-2xl overflow-hidden">
                  <Image src={img} alt={`Gallery Image ${i + 1}`} fill />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}