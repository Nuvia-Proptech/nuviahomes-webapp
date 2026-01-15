import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";

interface FormInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  control: Control<any>;
  errors: FieldErrors;
  icon?: React.ReactNode;
  onIconClick?: () => void;
}

export function FormInput({
  name,
  label,
  type = "text",
  placeholder,
  control,
  errors,
  icon,
  onIconClick,
}: FormInputProps) {
  const error = errors[name];

  return (
    <div>
      <label className="text-slate-900 text-sm font-medium mb-2 block">
        {label}
      </label>
      <div className="relative flex items-center">
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type={type}
              className={`w-full text-slate-900 text-sm border placeholder:text-slate-400 ${
                error ? "border-red-500" : "border-slate-300"
              } px-4 py-3 ${
                icon ? "pr-12" : ""
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder={placeholder}
            />
          )}
        />
        {icon && (
          <button
            type="button"
            onClick={onIconClick}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#22303E66]"
          >
            {icon}
          </button>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1">{error?.message as string}</p>
      )}
    </div>
  );
}
