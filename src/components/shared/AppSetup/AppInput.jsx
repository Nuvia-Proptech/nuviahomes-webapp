import React from "react";
import { cn } from "@/lib/utils";

export const AppInput = ({
  className,
  inputClassName,
  labelClassName,
  label,
  type = "text",
  placeholder,
  name,
  inputHasRightItem = false,
  rightItem,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-[360px] flex flex-col text-sm font-normal font-publicSans gap-1 text-textColor",
        className
      )}
    >
      <label
        data-slot="label"
        htmlFor={name}
        className={cn("font-medium", labelClassName)}
      >
        {label}
      </label>
      <div className="flex justify-between gap-4 w-full h-10 border border-neutralColor-700 px-4 py-1.5 rounded-md">
        <input
          data-slot="input"
          name={name}
          placeholder={placeholder}
          type={type}
          className={cn(
            "w-full border-none outline-none text-[#22303E66] text-sm focus:outline-none focus:text-slate-900",
            inputClassName
          )}
          {...props}
        />

        {inputHasRightItem && ( <div className="w-fit">{rightItem}</div> )}
      </div>
    </div>
  );
};
