import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa"; // 👈 Added

export default function PropertyCard({ property }) {
  return (
    <Link href={`/listing/${property.id}`} className="border rounded-xl p-2 w-full listedProperty">
      <div className="h-[300px] mb-3 rounded-xl overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="mediumText flex items-center gap-1">{property.price}</p>
      <p className="inbtwnText">{property.title}</p>
      <p className="text-sm py-2">{property.location}</p>

      <div className="flex items-center justify-between py-2 border-t text-sm">
        <div className="flex items-center gap-2">
          <FaBed /> <p>{property.beds} Beds</p>
        </div>
        <div className="flex items-center gap-2">
          <FaBath /> <p>{property.baths} Bathrooms</p>
        </div>
        <div className="flex items-center gap-2">
          <FaRulerCombined /> <p>{property.size}</p>
        </div>
      </div>
    </Link>
  );
}
