"use client";
import BuyRentInvestWidget from "@/components/home/BuyRentInvestWidget";
import PropertyCard from "@/components/propertyListingg/PropertyCard";
import AltHero from "@/components/shared/AltHero";
import React from "react";
import { PropertyDetailData } from "@/lib/dummyData/PropertyDetailData";



export default function Page() {


  return (
    <section>
      <AltHero pageName="Property Listing" />
      <BuyRentInvestWidget searchText="Search" widgetStyle="w-full mt-20" />
      <div className="container px-4 md:px-10 mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 md:gap-8">
          {PropertyDetailData.map((property) => (
            <PropertyCard key={property.id} property={{ ...property, image: property.images[0] }} />
          ))}
        </div>
      </div>
    </section>
  );
}