import Image from "next/image";
import React from "react";
import houseImage from "@/assets/images/house.png";
import { TimerIcon } from "@/components/shared/Icons/TimerIcon";
import { EyeIcon } from "@/components/shared/Icons/EyeIcon";
import { MoreIcon } from "@/components/shared/Icons/MoreIcon";

export const PropertiesTableBodies = ({
  id,
  street,
  city,
  type,
  category,
  price,
  user,
  isFeatured,
  status
}) => {
  const isFeaturedValue = isFeatured === true ? "Yes" : "No";
  return (
    <tr
      key={id}
      className="border-t border-[#22303E38] font-semibold font-urbani text-sm"
    >
      <td className="text-[#78778B] py-2">{id}</td>
      <td className="flex items-center justify-start gap-2 py-3">
        <Image
          className="object-cover rounded-sm"
          height={40}
          width={40}
          src={houseImage}
          alt="Property Image"
        />
        <div>
          <p className="font-semibold text-[#344346]">{street}</p>
          <p className="text-xs text-[#78778B]">{city}</p>
        </div>
      </td>
      <td className="py-3">
        <div className="">
          <p
            className={`${
              type === "Buy" ? "bg-[#4212A1]" : "bg-[#D89818]"
            } rounded-sm py-1 px-2 w-fit h-fit text-white`}
          >
            {type}
          </p>
          <p className="text-[#78778B] mt-1">{category}</p>
        </div>
      </td>
      <td>
        <div>
          <p className="text-[#344346]">{price}</p>
          <p class="text-xs text-[#78778B">@ {user}</p>
        </div>
      </td>
      <td>
        <p
          class={`${
            isFeatured === true
              ? "bg-[#71DD3747] text-[#48A848]"
              : "bg-[#EB212147] text-[#B43C3C]"
          } py-1 px-2 w-fit h-fit rounded-[5px]`}
        >
          {isFeaturedValue}
        </p>
      </td>
      <td>
        <div className="bg-[#FFAB001A] py-1.5 px-2.5 rounded-md gap-2 flex justify-center items-center  w-fit h-fit">
          <TimerIcon />
          <p class="text-[#FFAB00] text-xs">{status}</p>
        </div>
      </td>
      <td>
        <div class="flex items-center gap-3">
          <button title="View">
            <EyeIcon />
          </button>
          <button title="More">
            <MoreIcon />
          </button>
        </div>
      </td>
    </tr>
  );
};
