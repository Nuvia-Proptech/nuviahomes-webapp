"use client";
import React, { useState } from "react";
import { Eye, EyeClosed, EyeClosedIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import faceBookIcon from "@/assets/socials/facebook.svg";
import twitter from "@/assets/socials/twitter.svg";
import github from "@/assets/socials/github.svg";
import google from "@/assets/socials/google.svg";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div class="bg-gray-50">
      <div class="min-h-screen flex flex-col items-center justify-center py-20 px-4">
        <div class="max-w-[460px] w-full">
          <div class="p-6 sm:p-8 rounded bg-white border border-gray-200 shadow-sm">
            <div className="flex justify-center">
              <Image src={logo} alt="Logo" />
            </div>
            <div className="text-black mt-8 mb-4">
              <p className="text-24">Welcome to Nuvia Homes!</p>
              <p>Please Sign-in to your account</p>
            </div>
            <form class="space-y-6">
              <div>
                <label class="text-slate-900 text-sm font-medium mb-2 block">
                  Email Or Username
                </label>
                <div class="relative flex items-center">
                  <input
                    name="username"
                    type="text"
                    required
                    class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md focus:outline-none"
                    placeholder="Enter your emil"
                  />
                </div>
              </div>
              <div>
                <label class="text-slate-900 text-sm font-medium mb-2 block">
                  Password
                </label>
                <div class="relative flex items-center">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md focus:outline-none"
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
              <div class="flex flex-wrap items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                  />
                  <label
                    for="remember-me"
                    class="ml-3 block text-sm text-slate-900"
                  >
                    Remember me
                  </label>
                </div>
                <div class="text-sm">
                  <Link
                    href="forgot-password"
                    class="text-blue-600 hover:underline font-semibold"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <div class="!mt-12">
                <Link href="/super-admin-dashboard">
                  <button
                    type="button"
                    class="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white btn-gradient focus:outline-none cursor-pointer"
                  >
                    Sign In
                  </button>
                </Link>
              </div>
              <p class="text-slate-900 text-sm !mt-6 text-center">
                Already have an account?
                <a
                  href="javascript:void(0);"
                  class="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Register heree
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
                { socialMedia: github, socialUrl: "" },
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
