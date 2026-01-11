"use client";
import React, { Suspense, useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { ChevronLeft, Loader2, EyeClosedIcon, EyeIcon, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useResetPassword } from "@/lib/api/requests/auth/useResetPassword/useResetPassword";
import { FormInput } from "@/components/shared/form/FormInput";

function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { control, errors, submitResetPassword, isPending, hasToken } =
    useResetPassword();

  if (!hasToken) {
    return (
      <div className="bg-gray-50">
        <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
          <div className="max-w-[460px] w-full">
            <div className="p-6 sm:p-8 rounded bg-white border border-gray-200 shadow-sm">
              <div className="flex justify-center">
                <Image src={logo} alt="Logo" />
              </div>
              <div className="flex flex-col items-center text-center mt-8">
                <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
                <p className="text-24 text-black">Invalid Reset Link</p>
                <p className="text-gray-600 mt-2">
                  This password reset link is invalid or has expired. Please
                  request a new password reset.
                </p>
                <Link
                  href="/forgot-password"
                  className="mt-6 w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white btn-gradient focus:outline-none flex items-center justify-center gap-2 cursor-pointer"
                >
                  Request New Reset Link
                </Link>
                <Link
                  href="/user-login"
                  className="flex gap-1 items-center justify-center text-blue-500 mt-4"
                >
                  <ChevronLeft size={20} /> Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
        <div className="max-w-[460px] w-full">
          <div className="p-6 sm:p-8 rounded bg-white border border-gray-200 shadow-sm">
            <div className="flex justify-center">
              <Image src={logo} alt="Logo" />
            </div>
            <div className="text-black mt-8 mb-4">
              <p className="text-24">Reset Password</p>
              <p>Enter your new password below</p>
            </div>
            <form className="space-y-6" onSubmit={submitResetPassword}>
              <FormInput
                name="newPassword"
                label="New Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
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

              <FormInput
                name="confirmPassword"
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
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

              <div className="!mt-6">
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
                      Resetting Password...
                    </>
                  ) : (
                    "Reset Password"
                  )}
                </button>
              </div>
              <Link
                href="/user-login"
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

export default function ResetPassword() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}
