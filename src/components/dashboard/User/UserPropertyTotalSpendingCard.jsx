import React from "react";
import { cn } from "@/lib/utils";
import { Building2Icon } from "lucide-react";

export const UserPropertyTotalSpendingCard = ({
  icon,
  iconClassName,
  title,
  price,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-64 flex flex-row items-center gap-5 rounded-xl bg-white p-3 shadow-md shadow-[#22303E1A]",
        className
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "rounded-full p-1 w-12 h-12 flex justify-center items-center bg-secondaryColor",
          iconClassName
        )}
      >
        <Building2Icon />
      </div>
      {/* Title and Amount */}
      <div>
        <p className="text-black text-base font-normal font-urbanist capitalize">
          {title}
        </p>
        <p className="text-textColorDark text-lg font-semibold font-urbanist">
          {price}
        </p>
      </div>
    </div>
  );
};
