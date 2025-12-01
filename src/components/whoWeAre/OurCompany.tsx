import React from "react";
import Image from "next/image";
// import whoWeAreBAnner from "@/assets/our-company/Frame 7051.png";
import whoWeAreBAnner from "@/assets/our-company/Frame 7051.png"

export default function OurCompany() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-40 ">
      <div className="md:w-1/2">
        <p className="text-base md:text-lg font-semibold text-primary gradient-text">
          Know About Us
        </p>
        <p className="text-3xl md:text-4xl font-bold leading-tight">
          Our Company
        </p>
        <p className="text-sm md:text-base leading-relaxed mb-5">
          Our platform revolutionizes property management, development, and
          investment. Property Owners can easily submit their listings, while
          Investors can explore verified options and invest securely using
          credit cards or cryptocurrency.
        </p>
        <p className="text-20 mb-3">
          Discover more about our mission and values.
        </p>
        <p className="text-sm md:text-base leading-relaxed mb-5">
          We offer a seamless solution for property management, development, and
          investment. Property Owners can submit their properties with ease, and
          Investors can browse through verified listings and make secure
          investments using either card or crypto. Our platform is designed to
          simplify property management, development, and investment. Property
          Owners can submit their properties effortlessly, while Investors can
          browse verified listings and invest securely using card or
          cryptocurrency.
        </p>
        <p className="text-20 mb-3">
          Learn more about who we are and what we stand for.
        </p>
        <p className="text-sm md:text-base leading-relaxed">
          We provide a comprehensive platform for property management,
          development, and investment. Property Owners can easily submit their
          properties, and Investors can explore verified listings and invest
          securely using credit cards or crypto.
        </p>
      </div>
      <div>
        <Image src={whoWeAreBAnner} alt="" />
      </div>
    </div>
  );
}
