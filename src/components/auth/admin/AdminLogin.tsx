"use client";
import React, { useState, Suspense } from "react";
import { EyeClosedIcon, EyeIcon, Loader2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { useSignIn } from "@/lib/api/requests/auth/useSignIn/useSignIn";
import { FormInput } from "@/components/shared/form/FormInput";

function AdminLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { control, errors, submitSignIn, isPending } = useSignIn();

  return (
    <div className="bg-slate-50">
      <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
        <div className="max-w-[460px] w-full">
          <div className="p-6 sm:p-8 rounded bg-white border border-slate-200 shadow-xl">
            <div className="flex justify-center flex-col items-center gap-4">
              <Image src={logo} alt="Logo" priority />
              <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="h-3.5 w-3.5" />
                Admin Portal
              </div>
            </div>

            <div className="text-black mt-8 mb-6 text-center">
              <h1 className="text-2xl font-bold">Admin Login</h1>
              <p className="text-slate-500 text-sm mt-1">
                Management and System Administration
              </p>
            </div>

            <form className="space-y-5" onSubmit={submitSignIn}>
              {/* Email */}
              <FormInput
                name="email"
                label="Administrator Email"
                type="email"
                placeholder="admin@nuviahomes.com"
                control={control}
                errors={errors}
              />

              {/* Password */}
              <FormInput
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                control={control}
                errors={errors}
                icon={
                  showPassword ? (
                    <EyeClosedIcon className="text-slate-400" />
                  ) : (
                    <EyeIcon className="text-slate-400" />
                  )
                }
                onIconClick={() => setShowPassword((prev) => !prev)}
              />

              <div className="flex items-center justify-end">
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
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isPending}
                  className={`w-full py-3 px-4 text-[15px] font-bold tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none flex items-center justify-center gap-2 shadow-lg shadow-blue-200 ${
                    isPending
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Authenticating...
                    </>
                  ) : (
                    "Authorize & Enter"
                  )}
                </button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-slate-400 text-xs">
                This area is for authorized Nuvia Homes personnel only.
                Unauthorized access is strictly prohibited.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/user-login"
              className="text-slate-500 text-sm hover:text-blue-600 transition-colors"
            >
              ← Back to User Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminLogin() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
            <p className="text-slate-500 font-medium animate-pulse">
              Loading Admin Portal...
            </p>
          </div>
        </div>
      }
    >
      <AdminLoginForm />
    </Suspense>
  );
}
