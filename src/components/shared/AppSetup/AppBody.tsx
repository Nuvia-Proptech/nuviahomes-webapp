"use client";
import { appConditionalBg } from "@/constants/appConditionalBg";

export const AppBody = ({ children, className }) => {
  const bgClass = appConditionalBg();

  return <body className={`${className} ${bgClass}`}>{children}</body>;
}
