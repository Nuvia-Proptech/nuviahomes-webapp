"use client";
import React, { useState, Suspense } from "react";
import { EyeClosedIcon, EyeIcon, Loader2 } from "lucide-react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import faceBookIcon from "@/assets/socials/facebook.svg";
import twitter from "@/assets/socials/twitter.svg";
import google from "@/assets/socials/google.svg";
import { useSignIn } from "@/lib/api/requests/auth/useSignIn/useSignIn";
import { FormInput } from "@/components/shared/form/FormInput";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { control, errors, submitSignIn, isPending } = useSignIn();

  return (
    <div className="bg-gray-50">
      <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
        <div className="max-w-[460px] w-full">
          <div className="p-6 sm:p-8 rounded bg-white border border-gray-200 shadow-sm">
            <div className="flex justify-center">
              <Image src={logo} alt="Logo" />
            </div>
            <div className="text-black mt-8 mb-4">
              <p className="text-24">Welcome to Nuvia Homes!</p>
              <p>Please Sign-in to your account</p>
            </div>
            <form className="space-y-6" onSubmit={submitSignIn}>
              {/* Email */}
              <FormInput
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
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

              {/* Remember me & Forgot Password */}
              <div className="flex flex-wrap items-center justify-between">
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
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              {/* Submit Button */}
              <div className="!mt-12">
                <button
                  type="submit"
                  disabled={isPending}
                  className={`w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white btn-gradient focus:outline-none flex items-center justify-center gap-2 ${
                    isPending
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Signing In...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </div>

              <p className="text-slate-900 text-sm !mt-6 text-center">
                Don&apos;t have an account?
                <Link
                  href="/user-register"
                  className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Register here
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
                  aria-label={`Sign in with ${item.name}`}
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

export default function Login() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
