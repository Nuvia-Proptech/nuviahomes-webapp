"use client";
import React, { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    // #22303EE5
    // #22303E66 placeh
    <div className="border-4 max-w-[35rem] mx-auto px-4 bg-white text-black">
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[13px] text-[#22303EE5]">
          Username?
        </legend>
        <input
          type="text"
          className="input bg-transparent focus:outline-hidden border border-gray-500 text-[15px] text-[#22303E66]"
          placeholder="Enter your username"
        />
        {/* <p className="label">Optional</p> */}
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[13px] text-[#22303EE5]">
          Email
        </legend>
        <input
          type="text"
          className="input bg-transparent focus:outline-hidden border border-gray-500 text-[15px] text-[#22303E66]"
          placeholder="Enter your email"
        />
        {/* <p className="label">Optional</p> */}
      </fieldset>
      <fieldset className="fieldset relative">
        <legend className="fieldset-legend text-[13px] text-[#22303EE5]">
          Password
        </legend>
        <input
          type={showPassword ? "text" : "password"}
          className="input bg-transparent focus:outline-hidden border border-gray-500 text-[15px] text-[#22303E66]"
          placeholder="Enter your password"
        />
        {/* <p className="label">Optional</p> */}
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2  text-[#22303E66]"
        >
          {showPassword ? (
            <EyeClosed size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </fieldset>
      
      <div class="flex items-start mb-5 text-red-500">
        <div class="flex items-center h-5 text-red-500">
          <input
            id="terms"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-gray-300 rounded-sm text-red-500"
            required
          />
        </div>
        <label for="terms" class="ms-2 text-sm font-medium text-gray-900">
          I agree to
          <a href="#" class="text-blue-600 hover:underline">
            terms and conditions
          </a>
        </label>
      </div>
    </div>
  );
}
