"use client";
import React, { useState } from "react";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import faceBookIcon from "@/assets/socials/facebook.svg";
import twitter from "@/assets/socials/twitter.svg";
import google from "@/assets/socials/google.svg";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    // max-w-[35rem]
    <div className="bg-gray-50">
      <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
        <div className="max-w-[460px] w-full">
          <div className="p-6 sm:p-8 rounded bg-white border border-gray-200 shadow-sm">
            <div className="flex justify-center">
              <Image src={logo} alt="Logo" />
            </div>
            <div className="text-black mt-8 mb-4">
              <p className="text-24">Adventure starts here</p>
              <p>Make your app managment easy and fun!</p>
            </div>
            <form className="space-y-6">
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Username
                </label>
                <div className="relative flex items-center">
                  <input
                    name="username"
                    type="text"
                    required
                    className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md focus:outline-none"
                    placeholder="Enter your username"
                  />
                </div>
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    name="username"
                    type="email"
                    required
                    className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md focus:outline-none"
                    placeholder="Enter your emil"
                  />
                </div>
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md focus:outline-none"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2  text-[#22303E66]"
                  >
                    {showPassword ? (
                      <EyeClosedIcon className="text-black" />
                    ) : (
                      <EyeIcon className="text-black" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap items-center">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                  />
                  <label
                    for="remember-me"
                    className="ml-3 block text-sm text-slate-900"
                  >
                    I agree to
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="jajvascript:void(0);"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    privcy policy and terms
                  </a>
                </div>
              </div>

              <div className="!mt-12">
                <Link href="#">
                  <button
                    type="button"
                    className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white btn-gradient focus:outline-none cursor-pointer"
                  >
                    Sign up
                  </button>
                </Link>
              </div>
              <p className="text-slate-900 text-sm !mt-6 text-center">
                Already have an account?{" "}
                <a
                  href="/user-login"
                  className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Login in
                </a>
              </p>
            </form>
            {/* OR */}
            <div className="text-black flex items-center mt-4">
              <div className="bg-gray-400 h-[1px] w-full"></div>
              <p className="text-center text-black mx-5">or</p>
              <div className="bg-gray-400 h-[1px] w-full"></div>
            </div>
            {/* social */}
            <div className="flex justify-center gap-3 mt-4">
              {[
                { socialMedia: faceBookIcon, socialUrl: "" },
                { socialMedia: twitter, socialUrl: "" },
                { socialMedia: google, socialUrl: "" },
              ].map((item) => (
                <Image src={item.socialMedia} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// https://flowbite.com/blocks/marketing/login/
// https://tailwindflex.com/tag/login
// https://readymadeui.com/tailwind-blocks/login-form
