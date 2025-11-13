"use client";
import { usePathname } from "next/navigation";

export const appConditionalBg = () => {
  const pathname = usePathname();

  const hiddenRoutes = [
    "/dashboard",
    "/admin",
    "/user",
    "/super-admin-dashboard",
  ];

  const shouldHideBg = hiddenRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return shouldHideBg ? "bg-transparent" : "bg-primaryColorLight";
};
