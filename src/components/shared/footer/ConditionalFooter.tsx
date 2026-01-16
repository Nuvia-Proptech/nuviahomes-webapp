"use client";
import { usePathname } from "next/navigation";
import Footer from "@/components/shared/footer/Footer";

export function ConditionalFooter() {
  const pathname = usePathname();
  
  // Routes where footer should be hidden
  const hiddenRoutes = [
    "/dashboard",
    "/admin",
    "/user",
    "/owner",
    "/agent",
    "/super-admin-dashboard",
    "/nuvia-proptech-admin-login",
  ];
  
  // Check if current path starts with any hidden route
  const shouldHideFooter = hiddenRoutes.some((route) => pathname.startsWith(route));
  
  return !shouldHideFooter ? <Footer /> : null;
}