import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PropertyLocation({ property }) {
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
            Property Location
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div className="rounded-2xl overflow-hidden">
              <iframe
                src={property.mapEmbedUrl}
                width="600"
                height="450"
                style={{border:"0", width: "100%"}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}