import React from "react";
import { cn } from "@/lib/utils";

interface AppTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  rows?: number;
  resize?: boolean;
}

export const AppTextarea = ({
  className,
  inputClassName,
  labelClassName,
  label,
  placeholder,
  name,
  rows = 4,
  resize = false,
  ...props
}: AppTextareaProps) => {
  return (
    <div
      className={cn(
        "w-80 flex flex-col text-sm font-normal font-publicSans gap-1 text-textColor",
        className
      )}
    >
      {label && (
        <label
          data-slot="label"
          htmlFor={name}
          className={cn("font-medium", labelClassName)}
        >
          {label}
        </label>
      )}
      <textarea
        data-slot="textarea"
        name={name}
        placeholder={placeholder}
        rows={rows}
        className={cn(
          "w-full border border-neutralColor-700 px-4 py-3 rounded-md text-[#22303E66] text-sm focus:outline-none focus:text-slate-900",
          resize ? "resize-y" : "resize-none",
          "min-h-[100px]",
          inputClassName
        )}
        {...props}
      />
    </div>
  );
};
