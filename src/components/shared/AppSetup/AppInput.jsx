import React from "react";
import { cn } from "@/lib/utils"

export const AppInput = ({
  className,
  inputClassName,
  labelClassName,
  label,
  type = "text",
  placeholder,
  name,
  ...props
}) => {
  return (
    <div
      className={cn("w-full max-w-80 flex flex-col text-sm font-normal font-publicSans gap-1 text-textColor", className)}
    >
      <label data-slot="label" htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <input
      data-slot="input"
        name={name}
        placeholder={placeholder}
        type={type}
        className={cn("w-full h-9 border border-textColor px-3.5 py-1.5 rounded-sm text-[#22303E66]", inputClassName)}
        {...props}
      />
    </div>
  );
};
