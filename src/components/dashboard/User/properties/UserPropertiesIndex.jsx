"use client";
import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import React, { useState } from "react";
import { PlusSquareIcon } from "lucide-react";
import { UserPropertiesCard } from "./UserPropertiesCard";
import { FilterDropdown } from "./FilterDropDown";
import { userPropertiesData } from "@/lib/dummyData/userPropertiesData";
import { AppGradientButton } from "@/components/shared/AppSetup/AppGradientButton";
import { useRouter } from 'next/navigation';
import appRoutes from "@/constants/AppRoutes";

// Filter options
const cityOptions = [
  "All Cities",
  "Lekki",
  "Awka",
  "Port Harcourt",
  "Matforma",
];
const purposeOptions = ["Property Purpose", "For sale", "For Rent", "Land"];
const typeOptions = ["Property Type", "Residential", "Commercial", "Land"];

export const UserPropertiesIndex = () => {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedPurpose, setSelectedPurpose] = useState("Property Purpose");
  const [selectedType, setSelectedType] = useState("Property Type");
  const [showNewListing, setShowNewListing] = useState(false);

  // Filter properties based on selections
  const filteredProperties = userPropertiesData.filter((property) => {
    // City filter
    if (
      selectedCity !== "All Cities" &&
      !property.status.includes(selectedCity)
    ) {
      return false;
    }

    // Purpose filter
    if (
      selectedPurpose !== "Property Purpose" &&
      !property.status.includes(selectedPurpose)
    ) {
      return false;
    }

    // Type filter
    if (
      selectedType !== "Property Type" &&
      !property.status.includes(selectedType)
    ) {
      return false;
    }

    // New Listing filter
    if (showNewListing && !property.status.includes("New Listing")) {
      return false;
    }

    return true;
  });

  // Route to Submit Property
  const handleSubmitPropertyClick = (e) => {
    e.stopPropagation();
    router.push(appRoutes.dashboard.user.properties.submitProperty);
  };
  return (
    <AppWrapper className="">

      <div className="bg-neutralColor-900 p-3 rounded-2xl w-full font-urbanist my-2">
        <div className="my-3 flex justify-between items-center">
          <div>
            <p className="md:text-4xl font-semibold text-textColor font-urbanist">
              Properties
            </p>
            <p className="text-textColor text-sm font-normal font-urbanist">
              A quick glance at all properties and Investments
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <FilterDropdown
              options={cityOptions}
              selected={selectedCity}
              onSelect={setSelectedCity}
              placeholder="All Cities"
            />

            <FilterDropdown
              options={purposeOptions}
              selected={selectedPurpose}
              onSelect={setSelectedPurpose}
              placeholder="Property Purpose"
            />

            <FilterDropdown
              options={typeOptions}
              selected={selectedType}
              onSelect={setSelectedType}
              placeholder="Property Type"
            />

            <AppGradientButton onClick={handleSubmitPropertyClick}>
              New Listing
              <PlusSquareIcon />
            </AppGradientButton>
          </div>
        </div>

        <div className="mt-10">
          {filteredProperties.map((item) => (
            <UserPropertiesCard
              key={item.id}
              id={item.id}
              status={item.status}
              price={item.price}
              title={item.title}
              location={item.location}
              paymentType={item.paymentType}
              wishlistCount={item.wishlistCount}
              downPayment={item.downPayment}
              downPaymentTime={item.downPaymentTime}
              installments={item.installments}
              firstPaymentDate={item.firstPaymentDate}
            />
          ))}

          {filteredProperties.length === 0 && (
            <div className="flex justify-center items-center h-screen">
              <p className="text-textColor text-lg text-center">
                No properties found matching your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </AppWrapper>
  );
};
