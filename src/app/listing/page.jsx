import BuyRentInvestWidget from "@/components/home/BuyRentInvestWidget";
import PropertyCard from "@/components/propertyListingg/PropertyCard";
import AltHero from "@/components/shared/AltHero";
import Nav from "@/components/shared/Nav";
import React from "react";

export default function page() {
  let listCardDetails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <section>
      {/* <Nav /> */}
      <AltHero pageName="Property Listing" />
      <BuyRentInvestWidget searchText="Search" widgetStyle="w-full mt-20" />
      <div className="container px-10 mx-auto mt-64">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 md:gap-8">
          {listCardDetails.map((property, i) => (
            <PropertyCard key={i} postId={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
