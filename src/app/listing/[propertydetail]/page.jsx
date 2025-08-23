import AltHero from "@/components/shared/AltHero";
import React from "react";
import egImage from "@/assets/New Bloom(magazine)-01-2.3.001-bigpicture_01_6.jpg";
import Image from "next/image";
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

export default function PropertyDetalPage({ params }) {
  console.log(`Params here: ${params.propertydetail}`)
  return (
    <div>
      <AltHero pageName={params.propertydetail} />

      <div className="container px-4 md:px-8 mx-auto space-y-5">
        <DisplayGrid />
        <div className="flex gap-8">
          <div className="w-2/3 space-y-5">
            <PropertyFeatures />
            <PropertyVideoAndDescription />
            <Amenities />
            <FloorPlan />
            <PropertyLocation />
            <Gallery />
            <Review />
            <WriteARewiew />
          </div>
          <div className="w-1/3 space-y-10">
            <BookAppointment />
            <FeaturedProperty />
          </div>
        </div>

      </div>
    </div>
  );
}
