import React from 'react';
import { cn } from '@/lib/utils';

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
}) => {
  return (
    <div
      className={cn(
        "w-80 flex flex-col text-sm font-normal font-publicSans gap-1 text-textColor",
        className
      )}
    >
      <label
        data-slot="label"
        htmlFor={name}
        className={cn(
          "font-medium",
          labelClassName
        )}
      >
        {label}
      </label>
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