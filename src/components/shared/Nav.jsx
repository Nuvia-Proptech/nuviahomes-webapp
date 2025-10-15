"use client";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";

export default function Nav({styleProp}) {
  let currentPage = usePathname();
  // console.log(currentPage)
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="top-0 z-50 text-white">
      <div className={`bg-${isOpen ? "gray-200" : "[#fdf6ee]"}  py-5 relative`}>
        {/* 💥💥💥💥💥💥 */}
        <div className="flex justify-between items-center p-2 md:hidden">
          <div className="border p-1">
            <Image
              src={logo}
              alt="Nuvia homes logo"
              className="font-bold italic w-20"
            />
          </div>
          <div>
            <button onClick={() => setIsOpen(!isOpen)} className={`group z-50`}>
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
        </div>
        {/* 💥💥💥💥💥💥 */}

        {/* {isOpen && ( */}
        <nav
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } absolute backdrop-blur-md bg-white/10 py-1 z-40 top-0 h-screen w-screen transform -translate-x-full transition-transform duration-500 ease-in-out md:hidden`}
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
              <Link key={i} href={page.pageUrl}>
                {page.pageName}
              </Link>
            ))}
          </ul>
          {/* <div className="flex items-center gap-3">
              <FaTiktok size={20} />
              <FaInstagram size={20} />
              <FaPhone size={20} />
            </div> */}
        </nav>
        {/* )} */}

        {/* Desktop */}
        <nav className={`bg-white/10 backdrop-blur-2xl skewed px-3 hidden md:block p-2 container mx-auto max-w-6xl text-white`}>
          <div className="unskewed">
            <ul className="flex justify-between items-center gap-8">
              <li className="skewed border border-gray-500 py-2 px-3">
                <Image
                  src={logo}
                  alt="Nuvia homes logo"
                  className="unskewed font-bold italic w-20"
                />
              </li>
              <li>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/who-we-are" className="">
                  Who We Are
                </Link>
              </li>
              {/*  */}
              <li className="dropdown dropdown-bottom dropdown-center">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-1"
                >
                  <Link href="/listing">Listings</Link> <ChevronDown />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <Link href="/">Item 1</Link>
                  </li>
                  <li>
                    <Link href="">Item 2</Link>
                  </li>
                </ul>
              </li>
              {/*  */}
              <li>
                <Link href="/agents" className="">
                  Agents
                </Link>
              </li>
              <li>
                <Link href="/our-blog" className="">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="">
                  Contact Us
                </Link>
              </li>
              <div className="flex gap-2">
                <li className="skewed text-[#1c0845] bg-gray-100 px-4 py-2">
                  <Link href="/invest" className="unskewed">
                    Invest
                  </Link>
                </li>
                <li className="skewed btn-gradient py-2 px-4 flex gap-1">
                    <Link href="/admin-register" className="unskewed">Login</Link>
                </li>
              </div>
            </ul>
            {/* <div className="flex items-center gap-3">
              <FaTiktok size={20} />
              <FaInstagram size={20} />
            </div> */}
          </div>
        </nav>
      </div>
    </header>
  );
}
