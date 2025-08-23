import React from "react";
import egImage from "@/assets/New Bloom(magazine)-01-2.3.001-bigpicture_01_6.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Review() {
  let items = [1, 2];
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
            140 Reviews
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div className="divide-y divide-gray-500">
              {items.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="relative min-w-[95px] min-h-[95px] rounded-full overflow-hidden">
                    <Image src={egImage} alt="" fill />
                  </div>
                  <div>
                    <p className="text-[28px]">Samuelson Denise</p>
                    <p className="text-16 mb-3">19, August 2025</p>
                    <p className="text-14">
                      Introducing Palm Harbour Terrace, a stunning waterfront
                      property that offers a unique blend of luxury and
                      convenience. Nestled in a serene location, this property
                      boasts breathtaking views of the ocean and easy access
                    </p>
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
