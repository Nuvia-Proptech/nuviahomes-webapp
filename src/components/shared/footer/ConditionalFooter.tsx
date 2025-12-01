"use client";
import { usePathname } from "next/navigation";
import Footer from "@/components/shared/footer/Footer";

export function ConditionalFooter() {
  const pathname = usePathname();
  
  // Routes where footer should be hidden
  const hiddenRoutes = ["/dashboard", "/admin", "/user", "/super-admin-dashboard"];
  
  // Check if current path starts with any hidden route
  const shouldHideFooter = hiddenRoutes.some((route) => pathname.startsWith(route));
  
  return !shouldHideFooter ? <Footer /> : null;
}