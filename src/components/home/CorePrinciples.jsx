import Image from "next/image";
import React from "react";
import corePrincipalsImage from "@/assets/Frame 7045.png";

export default function CorePrinciples() {
  return (
<div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24 container mx-auto px-14 pt-28">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6">
        <div className="space-y-3">
          <p className="text-base md:text-lg font-semibold text-primary gradient-text">
            Learn More About Us
          </p>
          <p className="text-3xl md:text-4xl font-bold leading-tight">
            Our Core Principles
          </p>
        </div>
        <p className="text-sm md:text-base leading-relaxed">
          At Nuvia Homes, our journey has been defined by innovation and
          unwavering dedication. We started as a passionate team with a vision
          to transform the real estate landscape. Our goal was to create a
          platform that transcends the conventional limits of property buying
          and selling.
          We believe in making the process seamless and enjoyable for everyone
          involved. With cutting-edge technology and a customer-first approach,
          we strive to enhance the experience for our clients.
          Our commitment to excellence drives us to continuously improve and
          adapt. We are not just about transactions; we are about building
          lasting relationships. As we grow, we remain focused on our mission to
          redefine real estate. Join us as we embark on this exciting journey
          together.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full">
        <Image
          src={corePrincipalsImage}
          alt="Core Principles Illustration"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
