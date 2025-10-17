"use client";
import { usePathname } from "next/navigation";
import Footer from "@/components/shared/footer/Footer";

export function ConditionalFooter() {
  const pathname = usePathname();

  
  const footerRoutes = ["/", "/who-we-are", "/listing", "/agents", "/our-blog", "/contact"];

  // Show footer if the path matches or starts with one of the routes
  const showFooter = footerRoutes.some((route) => pathname.startsWith(route));

  return showFooter ? <Footer /> : null;
}
