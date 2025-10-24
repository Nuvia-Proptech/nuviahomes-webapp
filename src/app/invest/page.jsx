import React from "react";
import Nav from "@/components/shared/Nav";
import AltHero from "@/components/shared/AltHero";

export default function InvestPage() {
  return (
    <section>
      <AltHero pageName=" Invest" />
      <div>
        <div className="flex">
          <div className="w-1/2">
            <p>Unlock a World of Real Estate Investment</p>
          </div>
          <div className="w-1/2">
            <p>
              Best for those who wants a balance of good returns and medium,
              risk. Our Plans invest in Rented buildings and properties all over
              West Africa and returns 20 - 30 Percent per annum
            </p>

            <div>
              <p>Expected Outcomes</p>
              <p>
                Our real estate plans is invested into a portfolio of properties
                across west Africa. Your funds are pooled and used to purchase a
                property which is then rented out and managed by experts to
                generate returns for you
              </p>
            </div>
          </div>
        </div>
        {/* Belt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p>20-30%</p>
            <p>Expected Returns</p>
          </div>
          <div>
            <p>Medium</p>
            <p>Risk Level</p>
          </div>
          <div>
            <p>100%</p>
            <p>Capital Guranteed</p>
          </div>
          <div>
            <p>0%</p>
            <p>Return Gurateed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
