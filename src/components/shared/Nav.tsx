"use client";
import { X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";

export default function Nav({ styleProp }) {
  const currentPage = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at the top
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const pages = [
    { name: "Home", url: "/" },
    { name: "Who We Are", url: "/who-we-are" },
    { name: "Listings", url: "/listing" },
    { name: "Agents", url: "/agents" },
    { name: "Our Blog", url: "/our-blog" },
    { name: "Contact Us", url: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
          <button 
            onClick={toggleMenu} 
            className="group z-50 relative p-2   hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div
              className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ease-in-out rounded-full ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ease-in-out rounded-full ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out rounded-full ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu - BEAUTIFIED */}
        <nav
          className={`${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } fixed top-0 left-0 h-[100dvh] w-screen backdrop-blur-xl bg-gradient-to-br from-[#1b5590]/95 via-[#35af72]/95 to-[#1b5590]/95 z-40 transform transition-all duration-500 ease-out md:hidden`}
        >
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#b5e03a]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#35af72]/10 rounded-full blur-3xl" />
          
          <div className="relative h-full flex flex-col justify-center px-8">
            {/* Logo at top */}
            <div className="absolute top-8 left-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-lg">
                <Image
                  src={logo}
                  alt="Nuvia homes logo"
                  className="w-16"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-1 mt-8">
              {pages.map((page, i) => (
                <li
                  key={i}
                  className={`transform transition-all duration-500 ease-out ${
                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <Link
                    href={page.url}
                    onClick={() => setIsOpen(false)}
                    className={`block py-4 px-6 rounded-xl text-2xl font-semibold transition-all duration-300 ${
                      currentPage === page.url
                        ? "bg-white/20 text-white scale-105 shadow-lg w-[93%] mx-auto"
                        : "text-white/90 hover:text-white hover:bg-white/10 hover:translate-x-2 "
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        currentPage === page.url 
                          ? "bg-gradient-to-r from-[#1b5590] via-[#35af72] to-[#b5e03a] w-6" 
                          : "bg-white/50"
                      }`} />
                      {page.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className={`mt-12 space-y-3 transform transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`} style={{ transitionDelay: "350ms" }}>
              <Link
                href="/invest"
                className="block text-center bg-white text-[#1b5590] font-bold py-4 px-6 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Invest
              </Link>
              <Link
                href="/user-login"
                className="block text-center bg-gradient-to-r from-[#1b5590] via-[#35af72] to-[#b5e03a] text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>

            {/* Footer */}
            <div className={`absolute bottom-8 left-8 right-8 border-t border-white/20 pt-6 transform transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`} style={{ transitionDelay: "400ms" }}>
              <p className="text-white/60 text-sm">© 2025 Nuvia Homes</p>
              <p className="text-white/40 text-xs mt-1">Building your future home</p>
            </div>
          </div>
        </nav>

        {/* Desktop Navbar - UNCHANGED */}
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

            { pages.map((link, i) => (
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
                  <Link href="/user-login" className="unskewed">
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