import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function PropertyDetailsCarousel({ property }) {
  // Debugging log (remove in production)
  console.log("PropertyDetailsCarousel: Received property", {
    propertyId: property?.id,
    images: property?.images,
  });

  // Fallback if no images are provided
  if (!property?.images?.length) {
    return (
      <div className="w-full min-h-[415px] flex items-center justify-center bg-gray-100 rounded-2xl">
        <p>No images available</p>
      </div>
    );
  }

  // Get only the first 5 images
  const displayImages = property.images.slice(0, 3);

  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {displayImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full aspect-[16/9] min-h-[415px] md:min-h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src={image}
                  alt={`${property.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 text-black" />
        <CarouselNext className="right-4 text-black" />
      </Carousel>
    </div>
  );
}