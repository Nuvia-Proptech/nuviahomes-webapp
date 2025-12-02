import React from "react";

export const AppGradientButton = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`font-publicSans text-base font-medium text-[#F9F6FE] flex flex-row justify-center items-center gap-2.5 rounded-xl p-2.5 bg-gradient-to-br from-[#1B5590] via-[#35AF72] to-[#B5E03A] cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};
