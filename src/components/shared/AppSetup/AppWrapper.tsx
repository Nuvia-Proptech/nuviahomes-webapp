import { cn } from "@/lib/utils";
import React from "react";

export const AppWrapper = ({ children, className }) => {
  return (
    <div className={cn("w-full flex-1 justify-center items-center text-black overflow-auto no-scrollbar", className)}>
      {children}
    </div>
  );
};
