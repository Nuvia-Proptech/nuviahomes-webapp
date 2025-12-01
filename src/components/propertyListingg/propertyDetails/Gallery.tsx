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
    <div className="listedProperty border border-gray-500 rounded-2xl px-3 md:px-6">
      <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="px-3 text-3xl hover:no-underline py-4">
            Gallery
          </AccordionTrigger>
          <AccordionContent className="pt-4 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {property.images.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-md"
                >
                  <Image
                    src={img}
                    alt={`Gallery Image ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}