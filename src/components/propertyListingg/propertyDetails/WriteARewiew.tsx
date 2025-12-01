import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function WriteARewiew() {
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
            <form action="">
              <div className="flex flex-col gap-4 mb-4">
                <textarea name="" id="" placeholder="Message" className="forms-gradient h-[183px] rounded-2xl border border-gray-500 p-4 outline-0"></textarea>
                <input type="text" placeholder="Choose Rating" className="forms-gradient h-[59px] rounded-2xl border border-gray-500 p-4 outline-0" />
              </div>
              <div className="flex gap-4 mb-4">
                <input type="text" placeholder="Your Name" className="forms-gradient h-[59px] rounded-2xl border border-gray-500 p-4 outline-0 w-full" />
                <input type="text" placeholder="Your Name" className="forms-gradient h-[59px] rounded-2xl border border-gray-500 p-4 outline-0 w-full" />
              </div>
              <div className="flex justify-end">
                <button className="btn-gradient h-[50px] w-[308px] rounded-2xl">Submite Review</button>
              </div>
            </form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
