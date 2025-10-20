import AltHero from "@/components/shared/AltHero";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
      <div className="container px-4 md:px-8 mx-auto space-y-5">
        <DisplayGrid property={property} />
        <div className="flex gap-8">
          <div className="w-2/3 space-y-5">
            <PropertyFeatures property={property} />
            <PropertyVideoAndDescription property={property} />
            <Amenities property={property} />
            <FloorPlan property={property} />
            <PropertyLocation property={property} />
            <Gallery property={property} />
            <Review propertyId={property.id} />
            <WriteARewiew propertyId={property.id} />
          </div>
          <div className="w-1/3 space-y-10">
            <BookAppointment propertyId={property.id} />
            <FeaturedProperty />
          </div>
        </div>
      </div>
    </div>
  );
}