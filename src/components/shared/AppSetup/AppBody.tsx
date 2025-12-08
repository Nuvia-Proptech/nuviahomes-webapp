"use client";
import { useAppConditionalBg } from "@/hooks/useAppConditionalBg";
import { cn } from "@/lib/utils";
import React from "react";

export const AppBody = ({ children, className }: { children: React.ReactNode, className: string }) => {
  const bgClass = useAppConditionalBg();
  return <body className={cn("min-h-screen", bgClass, className)}>{children}</body>;
};
