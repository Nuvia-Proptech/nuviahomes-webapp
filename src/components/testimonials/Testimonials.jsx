"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Samuelson Okoi",
    role: "Sales Executive at Risevest",
    message:
      "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while investors browse verified listings and invest securely.",
    img: "/avatar1.jpg",
  },
  {
    name: "Samuelson Okoi",
    role: "Sales Executive at Risevest",
    message:
      "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while investors browse verified listings and invest securely.",
    img: "/avatar2.jpg",
  },
  {
    name: "Samuelson Okoi",
    role: "Sales Executive at Risevest",
    message:
      "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while investors browse verified listings and invest securely.",
    img: "/avatar3.jpg",
  },
  {
    name: "Samuelson Okoi",
    role: "Sales Executive at Risevest",
    message:
      "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while investors browse verified listings and invest securely.",
    img: "/avatar4.jpg",
  },
  {
    name: "Samuelson Okoi",
    role: "Sales Executive at Risevest",
    message:
      "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while investors browse verified listings and invest securely.",
    img: "/avatar1.jpg",
  },
  {
    name: "Samuelson Okoi",
    role: "Sales Executive at Risevest",
    message:
      "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while investors browse verified listings and invest securely.",
    img: "/avatar2.jpg",
  },
  {
    name: "Samuelson Okoi",
    role: "Sales Executive at Risevest",
    message:
      "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while investors browse verified listings and invest securely.",
    img: "/avatar3.jpg",
  },
  {
    name: "Samuelson Okoi",
    role: "Sales Executive at Risevest",
    message:
      "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while investors browse verified listings and invest securely.",
    img: "/avatar4.jpg",
  },
  {
    name: "Samuelson Okoi",
    role: "Sales Executive at Risevest",
    message:
      "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while investors browse verified listings and invest securely.",
    img: "/avatar1.jpg",
  },
  {
    name: "Samuelson Okoi",
    role: "Sales Executive at Risevest",
    message:
      "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while investors browse verified listings and invest securely.",
    img: "/avatar2.jpg",
  },
  {
    name: "Samuelson Okoi",
    role: "Sales Executive at Risevest",
    message:
      "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while investors browse verified listings and invest securely.",
    img: "/avatar3.jpg",
  },
  {
    name: "Samuelson Okoi",
    role: "Sales Executive at Risevest",
    message:
      "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while investors browse verified listings and invest securely.",
    img: "/avatar4.jpg",
  },
];

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="bg-[#0f0c29] py-10 px-6 relative">
      <div className="flex justify-end gap-2 mb-4">
        <Button
          onClick={scrollPrev}
          variant="ghost"
          size="icon"
          className="bg-[#1e1a3a] text-white rounded-full hover:bg-[#2a2454]"
        >
          <ChevronLeft />
        </Button>
        <Button
          onClick={scrollNext}
          variant="ghost"
          size="icon"
          className="bg-[#1e1a3a] text-white rounded-full hover:bg-[#2a2454]"
        >
          <ChevronRight />
        </Button>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
  <div className="grid grid-cols-2 gap-6">
    {testimonials.map((t, i) => (
      <Card key={i} className="bg-transparent border border-lime-400/50 text-white p-4 rounded-xl">
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-300">{t.role}</p>
            </div>
            <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full" />
          </div>
          <p className="text-sm text-gray-200 italic">"{t.message}"</p>
        </CardContent>
      </Card>
    ))}
  </div>
</div>

    </div>
  );
}
