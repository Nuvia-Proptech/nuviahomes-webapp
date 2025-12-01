import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function FeaturedProperty() {
  const properties = [
    {
      id: 1,
      title: "Palm Harbour Terrace",
      price: "₦1,500,000 / Yearly",
      location: "No. 24 Green Valley Estate, Ifite Awka, Anambra",
      image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Luxe City Apartment",
      price: "₦3,200,000 / Yearly",
      location: "Victoria Island, Lagos",
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Hillside Duplex",
      price: "₦2,850,000 / Yearly",
      location: "Independence Layout, Enugu",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "The Beachfront Villa",
      price: "₦7,500,000 / Yearly",
      location: "Lekki Phase 1, Lagos",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Lakewood Luxury Apartments",
      price: "₦4,200,000 / Yearly",
      location: "Maitama, Abuja",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div>
      <p className="text-3xl mb-4">Featured Properties</p>

      <div className="space-y-4">
        {properties.map((property) => (
          <div className="forms-gradient flex gap-3 border border-gray-500 rounded-xl p-2" key={property.id}>
            <div className="relative h-[98px] w-1/3 rounded-lg overflow-hidden">
              <Image
                src={property.image}
                alt={property.title}
                fill
                style={{ objectFit: "cover" }}
                // onError={(e) => {
                //   e.target.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80";
                // }}
              />
            </div>
            <div className="w-2/3">
              <p className="text-24 mb-1">{property.title}</p>
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <MapPin size={16} />
                  <p className="text-14 font-light text-gray-300 text-xs">{property.location}</p>
                </div>
                <div className="flex justify-between">
                  <button className="text-xs rounded-sm px-2 bg-red-900 mt-1">For Sale</button>
                  <p>
                    {property.price.split(" ")[0]}{" "}
                    <span className="text-14 font-light">{property.price.split(" ").slice(1).join(" ")}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}