import React from "react";
import { ArrowRight } from "lucide-react";

// Mock data for frontend development
const mockPlaces = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
    name: "Spain",
    properties: 4
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    name: "Paris",
    properties: 12
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    name: "London",
    properties: 8
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
    name: "Dubai",
    properties: 15
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    name: "Tokyo",
    properties: 6
  }
];

export default function PopularPlaces() {
  // You can replace this with your API data later
  const places = mockPlaces;

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="space-y-2 my-10">
          <p className="text-20 gradient-text">Checkout Our New</p>
          <p className="text-40 leading-none">Popular places</p>
          <p className="smallText">
            Explore the Most Popular and Fast-Growing Places in Real Estate.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {places.map((place) => (
            <div
              key={place.id}
              className="border border-gray-500 rounded-2xl p-2 max-w-2xl h-[500px] relative listedProperty overflow-hidden"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover rounded-xl"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              
              <div className="text-white absolute left-[10%] bottom-[10%] z-10">
                <p className="text-24 font-semibold">{place.name}</p>
                <p className="text-xl font-medium">{place.properties} Properties</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* See More Button */}
        <div className="mt-8 flex justify-start">
          <button className="flex items-center gap-2 text-16 hover:gap-3 transition-all gradient-text font-semibold">
            See More
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}