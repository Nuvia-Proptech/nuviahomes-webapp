import Image from "next/image";
import React from "react";
import houseImage from "@/assets/images/house.png";
import { EyeIcon } from "@/components/shared/Icons/EyeIcon";
import { MoreIcon } from "@/components/shared/Icons/MoreIcon"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";

export const PaymentsTableBodies = ({
  id,
  name,
  method,
  amount,
  charge,
  date,
  payable,
}) => {
  return (
    <tr
    //   onClick={handleClick}
      key={id}
      className="border-t border-textColor/25 font-semibold font-urbanist text-sm"
    >
      <td className="text-textColorFaded py-2">{id}</td>
      <td className="">
        <p className="font-semibold text-textColorFaded">{name}</p>
      </td>
      <td className="flex items-center justify-start gap-2 py-3">
        <Image
          className="object-cover rounded-full"
          height={40}
          width={40}
          src={houseImage}
          alt="Property Image"
        />
        <div>
          <p className="font-semibold text-textColorFaded">{method}</p>
        </div>
      </td>

      <td>
        <p className="font-semibold text-textColorFaded">{amount}</p>
      </td>
      <td>
        <p className="font-semibold text-textColorFaded">{charge}</p>
      </td>
      <td>
        <p className="font-semibold text-textColorFaded">{date}</p>
      </td>
      <td>
        <p className="font-semibold text-textColorFaded">{payable}</p>
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
