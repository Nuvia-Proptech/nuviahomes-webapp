import React from "react";
import { Bath, Bed, Ruler, Star } from "lucide-react";

const mockProperties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    status: "For Sale",
    price: 1500000,
    priceType: "Yearly",
    title: "Palm Habour Terrace",
    rating: 4,
    reviews: 200,
    beds: 3,
    baths: 3,
    area: 120,
    address: "No 24 Green Vallet Estates"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    status: "For Rent",
    price: 850000,
    priceType: "Monthly",
    title: "Sunset Villa Gardens",
    rating: 5,
    reviews: 145,
    beds: 4,
    baths: 2,
    area: 150,
    address: "No 12 Ocean View Drive"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&q=80",
    status: "For Sale",
    price: 2200000,
    priceType: "Yearly",
    title: "Royal Heights Mansion",
    rating: 4,
    reviews: 89,
    beds: 5,
    baths: 4,
    area: 200,
    address: "No 7 Luxury Lane Estate"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    status: "For Rent",
    price: 650000,
    priceType: "Monthly",
    title: "Maple Leaf Apartments",
    rating: 3,
    reviews: 320,
    beds: 2,
    baths: 2,
    area: 85,
    address: "No 45 Downtown Circle"
  }
];

// Helper function to render stars 
const renderStars = (rating) => {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function FeaturedListedProperties() {
 
  const properties = mockProperties;

  return (
    <section className="mb-16 md:mb-28">
      <div className="container mx-auto px-14">
        <div className="flex flex-col md:flex-row justify-between my-10">
          <div className="space-y-2">
            <p className="text-20 gradient-text">Checkout Our New</p>
            <p className="text-40 leading-none">Featured listed properties</p>
            <p className="smallText">
              Top Location With The Most In-demand Properties.
            </p>
          </div>
          <div className="flex gap-3 items-end">
            <button className="skewed h-9 btn2-gradient py-1.5 px-4 flex items-center justify-center text-white border border-gray-600">
              <span className="unskewed">Buy</span>
            </button>
            <button className="skewed h-9 btn-gradient py-1.5 px-4 flex items-center justify-center text-white border border-gray-600">
              <span className="unskewed">Rent</span>
            </button>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {properties.map((property) => (
            <div
              key={property.id}
              className="flex flex-col lg:flex-row justify-between gap-5 md:items-center border border-gray-400 rounded-xl p-2 listedProperty"
            >
              {/* Image Wrapper */}
              <div className="w-full lg:w-1/2 h-60 lg:h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 space-x-1.5  space-y-8">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-12 bg-[#B43C3C52] py-1 px-3 flex items-center rounded-lg border border-[#C0C0C0] shadow-[0_4px_49px_0_#0007481F] backdrop-blur-[15px]">
                    {property.status}
                  </div>
                  <p className="text-24 flex items-center gap-1">
                    N{property.price.toLocaleString()}
                    <span className="text-14 font-normal">/{property.priceType}</span>
                  </p>
                </div>

                <p className="text-24 font-semibold mb-1">{property.title}</p>

                {/* Reviews */}
                <div className="flex items-center mb-3">
                  {renderStars(property.rating)}
                  <p className="text-12 ml-2">({property.reviews} Reviews)</p>
                </div>

                {/* Icons Row */}
                <div className="text-14 flex items-center justify-between p-2 border-b border-gray-500 text-sm md:mt-8 md:pb-6">
                  <div className="flex items-center gap-2">
                    <Bed />
                    <p>{property.beds} Beds</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath />
                    <p>{property.baths} Baths</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler />
                    <p>{property.area} sqm</p>
                  </div>
                </div>

                {/* Address and CTA */}
                <div className="flex items-center justify-between gap-4 p-2 mt-2">
                  <p className="text-14">{property.address}</p>
                  <button className="bg-gray-100 rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl py-1.5 px-4 text-14 flex items-center justify-center text-gray-800">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}