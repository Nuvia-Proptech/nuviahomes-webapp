import Image from "next/image";
import React from "react";
import cryptoLogos from "@/assets/crypto-logos.png";

export default function EasyPayment() {
  return (
    // <div className="container px-4 mx-auto">
    //   <div className="flex flex-col md:flex-row gap-10">
    //     <div className="w-full flex flex-col justify-center">
    //       <p className="text-56 mb-2">
    //         Easy Payment With Cryptocurrencies
    //       </p>
    //       <p className="text-20">
    //         You can invest, Buy, sell, manage properties and projects on here
    //         using crypto paymen
    //       </p>
    //     </div>
    //     {/*  */}
    //     <div className=" w-full flex justify-center">
    //       <Image src={cryptoLogos} alt="" />
    //     </div>
    //   </div>
    // </div>
    <div className="container px-4 mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        {/* Text Block */}
        <div className="w-full flex flex-col justify-center p-6 rounded-xl">
          <p className="text-56 mb-2">
            Easy Payment With Cryptocurrencies
          </p>
          <p className="text-20">
            You can invest, buy, sell, manage properties and projects on here
            using crypto payment.
          </p>
        </div>

        {/* Image Block */}
        <div className="w-full flex justify-center items-center p-6 rounded-xl">
          <Image
            src={cryptoLogos}
            alt="Crypto logos"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
