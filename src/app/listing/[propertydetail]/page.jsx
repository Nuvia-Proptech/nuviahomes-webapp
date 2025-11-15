import AltHero from "@/components/shared/AltHero";
import React from "react";
import DisplayGrid from "@/components/propertyListingg/propertyDetails/DisplayGrid";
import PropertyVideoAndDescription from "@/components/propertyListingg/propertyDetails/PropertyVideoAndDescription";
import Amenities from "@/components/propertyListingg/propertyDetails/Amenities";
import FloorPlan from "@/components/propertyListingg/propertyDetails/FloorPlan";
import Gallery from "@/components/propertyListingg/propertyDetails/Gallery";
import Review from "@/components/propertyListingg/propertyDetails/Review";
import WriteARewiew from "@/components/propertyListingg/propertyDetails/WriteARewiew";
import PropertyLocation from "@/components/propertyListingg/propertyDetails/PropertyLocation";
import PropertyFeatures from "@/components/propertyListingg/propertyDetails/PropertyFeatures";
import BookAppointment from "@/components/propertyListingg/propertyDetails/BookAppointment";
import FeaturedProperty from "@/components/propertyListingg/propertyDetails/FeaturedProperty";
import { PropertyDetailData } from "@/lib/dummyData/PropertyDetailData";

export default function PropertyDetalPage({ params }) {
  const property = PropertyDetailData.find((p) => p.id.toString() === params.propertydetail);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <AltHero pageName={property.title} />

      <div className="container px-4 md:px-8 lg:px-12 mx-auto py-8 lg:py-12">
        <DisplayGrid property={property} />

        {/* RESPONSIVE LAYOUT — Mobile: sidebar on top, Desktop: sidebar on right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-10 lg:mt-16">
          {/* Main Content — full width on mobile */}
          <div className="w-full lg:w-2/3 space-y-10 lg:space-y-16 order-2 lg:order-1">
            <PropertyFeatures property={property} />
            <PropertyVideoAndDescription property={property} />
            <Amenities property={property} />
            <FloorPlan property={property} />
            <PropertyLocation property={property} />
            <Gallery property={property} />
            <Review propertyId={property.id} property={property} />
            <WriteARewiew propertyId={property.id} />
          </div>

          {/* Sidebar — full width & on top on mobile, sticky on desktop */}
          <aside className="w-full lg:w-1/3 order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 space-y-8">
              <BookAppointment propertyId={property.id} property={property} />
              <FeaturedProperty />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}