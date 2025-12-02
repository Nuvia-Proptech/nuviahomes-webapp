import Image from "next/image";
import React from "react";
import houseImage from "@/assets/images/house.png";
import { TimerIcon } from "@/components/shared/Icons/TimerIcon";
import { EyeIcon } from "@/components/shared/Icons/EyeIcon";
import { MoreIcon } from "@/components/shared/Icons/MoreIcon";
import { CircleStop, CircleCheck } from "lucide-react";

export const InvestmentTableBodies = ({
  id,
  plan,
  investmentAmount,
  targetInvestment,
  profit,
  isInstallment,
  status,
}) => {
  const isInstallmentValue = isInstallment === true ? "Yes" : "No";

  return (
    <tr
      key={id}
      className="border-t border-textColor/25 font-semibold font-urbanist text-sm "
    >
      <td className="text-textColorFaded py-2">{id}</td>
      <td className="flex items-center justify-start gap-3 py-3">
        <div>
          <p className="font-semibold text-textColor">{plan}</p>
        </div>
      </td>
      <td className="py-3">
        <div className="">
          <p className="text-textColor mt-1">{investmentAmount}</p>
        </div>
      </td>
      <td>
        <div>
          <p className="text-textColor">{targetInvestment}</p>
        </div>
      </td>
      <td>
        <p
          className={`${
            isInstallment === true
              ? "bg-successColor/30 text-successColor"
              : "bg-dangerColor/30 text-dangerColor"
          } py-1 px-2 w-fit h-fit rounded-[5px]`}
        >
          {isInstallmentValue}
        </p>
      </td>
      <td>
        <div>
          <p className="text-textColor">{profit}</p>
          <p className="text-xs text-textColorFaded"></p>
        </div>
      </td>
      <td>
        <div
          className={`${
            status === "Active"
              ? "bg-successColor/30 text-successColor"
              : "bg-dangerColor/30 text-dangerColor"
          } py-1 px-2 w-fit h-fit rounded-[5px] flex items-center gap-1.5`}
        >
          {status === "Active" ? (
            <CircleCheck size={14} />
          ) : (
            <CircleStop size={14} />
          )}
          <span>{status}</span>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
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
