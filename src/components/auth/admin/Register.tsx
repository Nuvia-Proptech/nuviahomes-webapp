"use client";
import React, { useState } from "react";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import faceBookIcon from "@/assets/socials/facebook.svg";
import twitter from "@/assets/socials/twitter.svg";
import google from "@/assets/socials/google.svg";
import { useSignUp } from "@/lib/api/requests/auth/useSignUp/useSignUp";
import { FormInput } from "@/components/shared/form/FormInput";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { control, errors, submitSignUp, isPending } = useSignUp();

  return (
    <div className="bg-gray-50">
      <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
        <div className="max-w-[460px] w-full">
          <div className="p-6 sm:p-8 rounded bg-white border border-gray-200 shadow-sm">
            <div className="flex justify-center">
              <Image src={logo} alt="Logo" />
            </div>
            <div className="text-black mt-8 mb-4">
              <p className="text-24">Adventure starts here</p>
              <p>Make your app management easy and fun!</p>
            </div>
            <form onSubmit={submitSignUp} className="space-y-6">
              {/* First Name */}
              <FormInput
                name="first_name"
                label="First Name"
                placeholder="Enter your first name"
                control={control}
                errors={errors}
              />

              {/* Last Name */}
              <FormInput
                name="last_name"
                label="Last Name"
                placeholder="Enter your last name"
                control={control}
                errors={errors}
              />

              {/* Email */}
              <FormInput
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                control={control}
                errors={errors}
              />

              {/* Phone */}
              <FormInput
                name="phone"
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone number"
                control={control}
                errors={errors}
              />

              {/* Password */}
              <FormInput
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                control={control}
                errors={errors}
                icon={
                  showPassword ? (
                    <EyeClosedIcon className="text-black" />
                  ) : (
                    <EyeIcon className="text-black" />
                  )
                }
                onIconClick={() => setShowPassword((prev) => !prev)}
              />

              {/* Confirm Password */}
              <FormInput
                name="password_confirmation"
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                control={control}
                errors={errors}
                icon={
                  showConfirmPassword ? (
                    <EyeClosedIcon className="text-black" />
                  ) : (
                    <EyeIcon className="text-black" />
                  )
                }
                onIconClick={() => setShowConfirmPassword((prev) => !prev)}
              />

              {/* Terms and Conditions */}
              <div className="flex flex-wrap items-center">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm text-slate-900"
                  >
                    I agree to
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="javascript:void(0);"
                    className="text-blue-600 hover:underline font-semibold ml-1"
                  >
                    privacy policy and terms
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <div className="!mt-12">
                <button
                  type="submit"
                  disabled={isPending}
                  className={`w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white btn-gradient focus:outline-none ${
                    isPending
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  {isPending ? "Signing up..." : "Sign up"}
                </button>
              </div>

              <p className="text-slate-900 text-sm !mt-6 text-center">
                Already have an account?{" "}
                <Link
                  href="/user-login"
                  className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Log in
                </Link>
              </p>
            </form>

            {/* OR */}
            <div className="text-black flex items-center mt-4">
              <div className="bg-gray-400 h-[1px] w-full"></div>
              <p className="text-center text-black mx-5">or</p>
              <div className="bg-gray-400 h-[1px] w-full"></div>
            </div>

            {/* Social Login */}
            <div className="flex justify-center gap-3 mt-4">
              {[
                { socialMedia: faceBookIcon, socialUrl: "", name: "Facebook" },
                { socialMedia: twitter, socialUrl: "", name: "Twitter" },
                { socialMedia: google, socialUrl: "", name: "Google" },
              ].map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className="hover:opacity-80 transition-opacity"
                  aria-label={`Sign up with ${item.name}`}
                >
                  <Image src={item.socialMedia} alt={item.name} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
