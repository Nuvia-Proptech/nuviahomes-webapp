"use client";
import { usePathname } from "next/navigation";
import Footer from "@/components/shared/footer/Footer";

export function ConditionalFooter() {
  const pathname = usePathname();
  const footerRoutes = ["/", "/who-we-are", "/listing", "/agents", "/our-blog", "/contact"];
  const showFooter = footerRoutes.includes(pathname);

  return showFooter ? <Footer /> : null;
}