import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQS() {
  const faqs = [
    {
      q: "What is AI",
      a: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
    },
  ].concat(Array(4).fill({
    q: "What is AI",
    a: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
  }));

  return (
    <div className="flex flex-col lg:flex-row sm:px-8 lg:px-14 gap-8 lg:gap-0">
      {/* LEFT TEXT */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <p className="text-lg sm:text-20 gradient-text">You've questions?</p>
        <p className="text-2xl sm:text-[32px] font-semibold mb-3 sm:mb-5">
          Frequently Asked Questions
        </p>
        <p className="text-sm sm:text-16">
          If the question is not available on our FAQ section, feel free <br className="hidden sm:inline" />{" "}
          to contact us personally, we will resolve your respective <br className="hidden sm:inline" /> doubts.
        </p>
      </div>

      {/* RIGHT ACCORDION */}
      <div className="w-full lg:w-1/2">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-gray-500 rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 text-base sm:text-lg font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 pt-2 pb-4 text-sm sm:text-base border-t border-gray-500">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}