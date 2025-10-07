import { cn } from "@/lib/utils";
import React from "react";

export const AppWrapper = ({ children, className }) => {
  return (
    <div className={cn("w-full flex-1 md:ml-52 justify-center items-center text-black bg-secondaryColor", className)}>
      {children}
    </div>
  );
};
