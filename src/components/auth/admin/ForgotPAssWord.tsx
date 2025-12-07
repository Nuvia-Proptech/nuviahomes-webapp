import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ForgotPAssWord() {
  return (
    <div className="bg-gray-50">
      <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
        <div className="max-w-[460px] w-full">
          <div className="p-6 sm:p-8 rounded bg-white border border-gray-200 shadow-sm">
            <div className="flex justify-center">
              <Image src={logo} alt="Logo" />
            </div>
            <div className="text-black mt-8 mb-4">
              <p className="text-24">Forgot Password</p>
              <p>
                Enter your email and we&apos;ll send you instructions to reset
                your password
              </p>
            </div>
            <form className="space-y-6">
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
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="!mt-6">
                {/* <Link href=""> */}
                <button
                  type="button"
                  className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white btn-gradient focus:outline-none cursor-pointer"
                >
                  Resend Reset Link
                </button>
                {/* </Link> */}
              </div>
              <Link
                href="/login"
                className="flex gap-1 items-center justify-center text-blue-500"
              >
                <ChevronLeft size={20} /> Back to Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
