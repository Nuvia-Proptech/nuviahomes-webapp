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
    // <div className="navbar shadow-sm z-50 max-w-6xl absolute rounded-tl-4xl rounded-tr-md rounded-bl-md rounded-br-4xl bg-white/20 backdrop-blur-2xl">
    //   <div className="navbar-start">
    //     <Link href="/" className="btn btn-ghost text-xl"><Image src={logo} alt="Nuvia Homes logo" /> </Link>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       <li>
    //         <Link href="/"> Home</Link>
    //       </li>
    //       <li>
    //         <Link href="/who-we-are">Who We Are</Link>
    //       </li>
    //       <li>
    //         <details>
    //           <summary>Listing</summary>
    //           <ul className="p-2 rounded-none bg-white/20 backdrop-blur-2xl">
    //             <li>
    //               <a>Submenu 1</a>
    //             </li>
    //             <li>
    //               <a>Submenu 2</a>
    //             </li>
    //           </ul>
    //         </details>
    //       </li>
    //       <li>
    //         <Link href="/agents">Agents</Link>
    //       </li>
    //       <li>
    //         <Link href="/our-blog">Our Blog</Link>
    //       </li>
    //       <li>
    //         <Link href="/contact">Contact Us</Link>
    //       </li>
    //       <li>
    //         <Link href="/">Invest</Link>
    //       </li>
    //       <li>
    //         <Link href="/">Login / SignUp</Link>
    //       </li>
    //       {/* <li>
    //         <a>Item 3</a>
    //       </li> */}
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //    {/* <div className="dropdown dropdown-center">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           {" "}
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />{" "}
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-screen p-2 shadow "
    //       >
    //         <li>
    //           <a>Item 1</a>
    //         </li>
    //         <li>
    //           <a>Parent</a>
    //           <ul className="p-2">
    //             <li>
    //               <a>Submenu 1</a>
    //             </li>
    //             <li>
    //               <a>Submenu 2</a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li>
    //           <a>Item 3</a>
    //         </li>
    //       </ul>
    //     </div> */}

    //     <div className="drawer drawer-end lg:hidden justify-end">
    //       <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    //       <div className="drawer-content">
    //         {/* Page content here */}
    //         <label
    //           htmlFor="my-drawer-4"
    //           className="drawer-button btn btn-ghost"
    //         >
    //           {/* Open drawer */}
    //           <Menu />
    //         </label>
    //       </div>
    //       <div className="drawer-side h">
    //         <label
    //           htmlFor="my-drawer-4"
    //           aria-label="close sidebar"
    //           className="drawer-overlay"
    //         ></label>
    //         <ul className="menu bg-base-200 text-base-content min-h-screen w-80 p-4 z-50">
    //           {/* Sidebar content here */}
    //           <li>
    //             <a>Sidebar Item 1</a>
    //           </li>
    //           <li>
    //             <a>Sidebar Item 2</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <header className="sticky top-0 z-50 text-white">
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
        <nav className={`${styleProp} skewed px-3 hidden md:block p-2 container mx-auto max-w-6xl text-white`}>
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
                <ul className="skewed btn-gradient py-2 px-4 flex gap-1">
                  <li className="unskewed">
                    <Link href="/">Login /</Link>
                  </li>
                  <li className="unskewed">
                    <Link href="/">Signup</Link>
                  </li>
                </ul>
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
