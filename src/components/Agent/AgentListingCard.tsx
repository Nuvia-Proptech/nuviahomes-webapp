"use client";
import React, { useState } from "react";
import PropertyCard from "@/components/propertyListingg/PropertyCard";
import AltHero from "@/components/shared/AltHero";
import { PropertyDetailData } from "@/lib/dummyData/PropertyDetailData";

export const AgentListingCard = () => {
  const [activeTab, setActiveTab] = useState("rental");

  // Filter to select based on selected tab
  const filteredProperties = PropertyDetailData.filter(
    (property) => property.type.toLowerCase() === activeTab
  ).slice(0, 8);

  return (
    <section>
      {/* Tabs */}
      <div className="flex mt-12 mb-8 border-b-1 border-gray-700 mx-10">
        <div className="flex   pt-1 ">
          <button
            onClick={() => setActiveTab("rental")}
            className={`relative px-6 md:px-12 py-2      border-gray-700 border-1 rounded-tl-md  text-sm font-medium transition-all ${
              activeTab === "rental"
                ? " text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Rental
            {activeTab === "rental" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#1b5590] via-[#35af72] to-[#b5e03a] rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("sale")}
            className={`relative px-6 py-2 md:px-12 text-sm font-medium transition-all border-gray-700 border-1 rounded-tr-md ${
              activeTab === "sale"
                ? " text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Sale
            {activeTab === "sale" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#1b5590] via-[#35af72] to-[#b5e03a] rounded-full" />
            )}
          </button>
        </div>
      </div>

      {/* Property Cards */}
      <div className="container px-10 mx-auto">
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 md:gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={{ ...property, image: property.images[0] }}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 mt-10">
            No properties available for {activeTab}.
          </p>
        )}
      </div>
    </section>
  );
};
