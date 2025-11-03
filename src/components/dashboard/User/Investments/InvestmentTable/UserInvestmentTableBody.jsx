import React from "react";
import { EyeIcon } from "@/components/shared/Icons/EyeIcon";
import { MoreIcon } from "@/components/shared/Icons/MoreIcon";
import { CircleStop, CircleCheck } from "lucide-react";

export const UserInvestmentTableBody = ({
  id,
  plan,
  investedAmount,
  dateOfReturn,
  installment, 
  profit,
  status,
}) => {
  return (
    <tr
      key={id}
      className="border-t border-textColor/25 font-semibold font-urbanist text-sm"
    >
      <td className="text-textColorFaded py-4 pr-6">{id}</td>

      <td className="py-4 pr-6">
        <p className="font-semibold text-textColor">{plan}</p>
      </td>

      <td className="py-4 pr-6 text-textColor">{investedAmount}</td>

      <td className="py-4 pr-6 text-textColor">{dateOfReturn}</td>

      <td className="py-4 pr-6">
        {installment ? (
          <span className="text-white bg-purple-600 text-xs px-2 py-1 rounded-sm font-semibold">
            {installment}
          </span>
        ) : null}
      </td>

      <td className="py-4 pr-6 text-textColor">{profit}</td>

      <td className="py-4 pr-6">
        <div
          className={`${
            status === "Active"
              ? "bg-successColor/20 text-successColor"
              : "bg-dangerColor/20 text-dangerColor"
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

      {/* Action */}
      <td className="py-4">
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