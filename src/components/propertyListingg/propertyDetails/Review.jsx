import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Review({ property }) {
  // Debugging log (remove in production)
  console.log("Review: Received property", {
    propertyId: property?.id,
    reviews: property?.reviews,
  });

  return (
    <div className="listedProperty border border-gray-500 rounded-2xl px-3">
      <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-3xl hover:no-underline">
            {property.reviews.length} Reviews
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div className="divide-y divide-gray-500">
              {property.reviews.map((review, index) => (
                <div key={index} className="flex items-center gap-4 py-4">
                  <div className="relative min-w-[95px] min-h-[95px] rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={
                        review.image ||
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
                      }
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[28px]">{review.name}</p>
                    <p className="text-16 mb-3">{review.date}</p>
                    <p className="text-14">{review.comment}</p>
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