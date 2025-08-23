import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";

export default function FAQS() {
  return (
    <div className="flex px-14">
      <div className="mb-10 w-1/2">
        <p className="text-20 gradient-text">You've questions?</p>
        <p className="text-[32px] font-semibold mb-5">Frequently Asked Questions</p>
        <p className="text-16">
         If the question is not available on our FAQ section, Feel free <br /> to contact us personally, we will resolve your respective <br /> doubts. 
        </p>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="w-1/2 space-y-3">
        <div className="collapse collapse-plus border border-gray-500">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">What is AI</div>
          <div className="collapse-content text-sm border-t border-gray-500 pt-4 mx-3">
            AI stands for Artificial Intelligence, which refers to the
            simulation of human intelligence in machines. It enables them to
            perform tasks like problem-solving, learning, and decision-making.
          </div>
        </div>
        <div className="collapse collapse-plus border border-gray-500">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">What is AI</div>
          <div className="collapse-content text-sm border-t border-gray-500 pt-4 mx-3">
            AI stands for Artificial Intelligence, which refers to the
            simulation of human intelligence in machines. It enables them to
            perform tasks like problem-solving, learning, and decision-making.
          </div>
        </div>
        <div className="collapse collapse-plus border border-gray-500">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">What is AI</div>
          <div className="collapse-content text-sm border-t border-gray-500 pt-4 mx-3">
            AI stands for Artificial Intelligence, which refers to the
            simulation of human intelligence in machines. It enables them to
            perform tasks like problem-solving, learning, and decision-making.
          </div>
        </div>
        <div className="collapse collapse-plus border border-gray-500">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">What is AI</div>
          <div className="collapse-content text-sm border-t border-gray-500 pt-4 mx-3">
            AI stands for Artificial Intelligence, which refers to the
            simulation of human intelligence in machines. It enables them to
            perform tasks like problem-solving, learning, and decision-making.
          </div>
        </div>
        <div className="collapse collapse-plus border border-gray-500">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">What is AI</div>
          <div className="collapse-content text-sm border-t border-gray-500 pt-4 mx-3">
            AI stands for Artificial Intelligence, which refers to the
            simulation of human intelligence in machines. It enables them to
            perform tasks like problem-solving, learning, and decision-making.
          </div>
        </div>
        
        
      </div>
    </div>
  );
}
{
  /* <div className="w-1/2 py-5 border border-black">
  <Accordion
    type="single"
    collapsible
    className="w-full  space-y-9"
    defaultValue="item-1"
  >
    <AccordionItem value="item-1" className="border rounded-lg px-2">
      <AccordionTrigger className="hover:no-underline">
        What is AI
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance border-t pt-5 mr-9">
        <p>
          AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" className="border rounded-lg px-2">
      <AccordionTrigger className="hover:no-underline">
        What is AI
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance border-t pt-5 mr-9">
        <p>
          AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3" className="border rounded-lg px-2">
      <AccordionTrigger className="hover:no-underline">
        What is AI
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance border-t pt-5 mr-9">
        <p>
          AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</div> */
}
