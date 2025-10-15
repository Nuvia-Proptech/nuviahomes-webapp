import React from "react";
import egImage from "@/assets/New Bloom(magazine)-01-2.3.001-bigpicture_01_6.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function PropertyVideoAndDescription() {
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
            <AccordionTrigger className="px-3 text-3xl hover:no-underline">Property Vidoe</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="relative h-[415px] rounded-2xl overflow-hidden">
                <Image src={egImage} alt="" fill />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* 💥💥💥Description💥💥💥 */}
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
              <p>
                Introducing Palm Harbour Terrace, a stunning waterfront property
                that offers a unique blend of luxury and convenience. Nestled in
                a serene location, this property boasts breathtaking views of
                the ocean and easy access to pristine beaches. With spacious
                layouts and modern amenities, residents can enjoy a comfortable
                lifestyle.
              </p>
              <p>
                The perks of Palm Harbour Terrace include a state-of-the-art
                fitness center, a sparkling swimming pool, and beautifully
                landscaped gardens perfect for relaxation. The property is also
                equipped with smart home technology, ensuring security and
                andscaped gardens perfect for relaxation. The property is also
                equipped with smart home technology, ensuring security and ease
                of living fect for relaxation. The property is also equipped
                with smart home technology, ensuring security and.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
