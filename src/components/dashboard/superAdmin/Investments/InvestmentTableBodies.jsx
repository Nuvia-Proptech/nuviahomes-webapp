import Image from "next/image";
import React from "react";
import houseImage from "@/assets/images/house.png";
import { TimerIcon } from "@/components/shared/Icons/TimerIcon";
import { EyeIcon } from "@/components/shared/Icons/EyeIcon";
import { MoreIcon } from "@/components/shared/Icons/MoreIcon";

export const InvestmentTableBodies = ({
  id,
  plan,
  investmentAmount,
  type,
  targetInvestment,
  price,
  profit,
  isInstallment,
  status
}) => {
  const isInstallmentValue = isInstallment === true ? "Yes" : "No";
  return (
    <tr
      key={id}
      className="border-t border-textColor/25 font-semibold font-urbanist text-sm"
    >
      <td className="text-textColorFaded py-2">{id}</td>
      <td className="flex items-center justify-start gap-2 py-3">
        {/* <Image
          className="object-cover rounded-sm"
          height={40}
          width={40}
          src={houseImage}
          alt="Property Image"
        /> */}
        <div>
          <p className="font-semibold text-textColor">{plan}</p>
          {/* <p className="text-xs text-textColorFaded">{city}</p> */}
        </div>
      </td>
      <td className="py-3">
        <div className="">
          {/* <p
            className={`${
              type === "Buy" ? "bg-primaryColorStrong" : "bg-alertColor"
            } rounded-sm py-1 px-2 w-fit h-fit text-white`}
          >
            {}
          </p> */}
          <p className="text-textColor mt-1">{investmentAmount}</p>
        </div>
          </td>
           <td>
        <div>
          <p className="text-textColor">{targetInvestment}</p>
          <p class="text-xs text-textColorFaded"> {}</p>
        </div>
      </td>
      <td>
        <div>
          <p className="text-textColor">{targetInvestment}</p>
          <p class="text-xs text-textColorFaded"> {}</p>
        </div>
      </td>
      <td>
        <p
          class={`${
            isInstallment === true
              ? "bg-successColor/30 text-successColor"
              : "bg-dangerColor/30 text-dangerColor"
          } py-1 px-2 w-fit h-fit rounded-[5px]`}
        >
          {isInstallmentValue}
        </p>
      </td>
      <td>
        <div className="bg-warningColor/10 py-1.5 px-2.5 rounded-md gap-2 flex justify-center items-center  w-fit h-fit">
          <TimerIcon />
          <p class="text-warningColor text-xs">{status}</p>
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
