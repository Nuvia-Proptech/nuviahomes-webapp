import React from "react";
import floorPlan from "@/assets/Plan.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function FloorPlan() {
  let items = [1, 2, 3];
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
            Floor Plan
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div className="border border-gray-500 overflow-hidden rounded-2xl">
              {items.map((i) => (
                <div
                  key={i}
                  className="listedProperty p-5"
                  style={{ borderBottom: "1px solid #6a7282" }}
                >
                  <p className="pb-4 px-5 text-[28px]">First Floor</p>
                  <div
                    key={i}
                    className="relative h-[415px] rounded-2xl overflow-hidden"
                  >
                    <Image src={floorPlan} alt="" fill />
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
