"use client";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";

export default function Nav({ styleProp }) {
  const currentPage = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="top-0 z-50 text-white ">
      <div className={`bg-${isOpen ? "gray-200" : "[#fdf6ee]"} py-5 relative`}>
        {/* Mobile Header */}
        <div className="flex justify-between items-center p-2 md:hidden">
          <div className="border p-1">
            <Image
              src={logo}
              alt="Nuvia homes logo"
              className="font-bold italic w-20"
            />
          </div>
          <button onClick={toggleMenu} className="group z-50">
            <div
              className={`w-6 h-0.5 bg-black mb-1 transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-black mb-1 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } absolute backdrop-blur-md bg-white/10 py-1 z-40 top-0 h-screen w-screen transform transition-transform duration-500 ease-in-out md:hidden`}
        >
          <div className="flex justify-between items-center p-4">
            <p>nailed_by_starrque</p>
            <X size={28} onClick={toggleMenu} />
          </div>
          <ul className="ml-8 space-y-2 text-lg">
            {[
              { pageName: "Home", pageUrl: "/" },
              { pageName: "About Us", pageUrl: "/about" },
              { pageName: "Services", pageUrl: "/services" },
              { pageName: "Contact Us", pageUrl: "/contact" },
            ].map((page, i) => (
              <li key={i}>
                <Link
                  href={page.pageUrl}
                  className={`hover-gradient-text ${
                    currentPage === page.pageUrl
                      ? "text-transparent bg-clip-text bg-[linear-gradient(114.84deg,#1b5590_11.99%,#35af72_47.99%,#b5e03a_84.69%)]"
                      : "text-white"
                  }`}
                >
                  {page.pageName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Navbar */}
        <nav className="bg-white/10 backdrop-blur-2xl skewed px-3 hidden md:block p-2 container mx-auto max-w-6xl text-white">
          <div className="unskewed">
            <ul className="flex justify-between items-center gap-8">
              <li className="skewed border border-gray-500 py-2 px-3">
                <Image
                  src={logo}
                  alt="Nuvia homes logo"
                  className="unskewed font-bold italic w-20"
                />
              </li>

              {[
                { name: "Home", url: "/" },
                { name: "Who We Are", url: "/who-we-are" },
                { name: "Listings", url: "/listing" },
                { name: "Agents", url: "/agents" },
                { name: "Our Blog", url: "/our-blog" },
                { name: "Contact Us", url: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.url}
                    className={`hover-gradient-text md:font-bold ${
                      currentPage === link.url
                        ? "text-transparent bg-clip-text bg-[linear-gradient(114.84deg,#1b5590_11.99%,#35af72_47.99%,#b5e03a_84.69%)]"
                        : "text-white"
                    } transition-all duration-300`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <div className="flex gap-2">
                <li className="skewed text-[#1c0845] bg-gray-100 px-4 py-2">
                  <Link href="/invest" className="unskewed">
                    Invest
                  </Link>
                </li>
                <li className="skewed btn-gradient py-2 px-4 flex gap-1">
                  <Link href="/admin-register" className="unskewed">
                    Login
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
