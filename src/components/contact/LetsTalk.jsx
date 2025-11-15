import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function LetsTalk() {
  return (
    <div className="flex flex-col lg:flex-row justify-between py-6 sm:py-10 sm:px-8 lg:px-14 mb-12 sm:mb-20 gap-8 lg:gap-20">
      {/* ---------- LEFT COLUMN ---------- */}
      <div className="w-full lg:w-1/2">
        <div className="mb-8 sm:mb-10">
          <p className="text-lg sm:text-20 gradient-text">You've got a question?</p>
          <p className="text-2xl sm:text-[32px] font-semibold mb-3 sm:mb-5">
            Let's Talk
          </p>
          <p className="text-sm sm:text-16">
            Get in touch with us using the enquiry form or contact details below
          </p>
        </div>

        {/* Contact items */}
        <div className="space-y-4 sm:space-y-5">
          {[
            { Icon: Mail, title: "Quick Contact", text: "Email nuviahomes.com" },
            { Icon: Phone, title: "Quick Contact", text: "Email nuviahomes.com" },
            { Icon: MapPin, title: "Quick Contact", text: "Email nuviahomes.com" },
          ].map(({ Icon, title, text }, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-4">
              <div className="featured-gradient border border-gray-500 p-2.5 sm:p-3 rounded-md">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-base sm:text-20 font-semibold mb-0.5">{title}</p>
                <p className="text-sm sm:text-16">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- RIGHT COLUMN (FORM) ---------- */}
      <div className="w-full lg:w-1/2">
        <form>
          {/* First & Last name */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4 sm:mb-5">
            {["First Name", "Last Name"].map((label) => (
              <div key={label} className="flex-1 flex flex-col">
                <label className="mb-2 text-base sm:text-xl font-semibold">
                  {label}
                </label>
                <input
                  type="text"
                  placeholder={label}
                  className="border border-gray-500 outline-0 w-full p-2.5 sm:p-3 rounded-md forms-gradient"
                />
              </div>
            ))}
          </div>

          {/* Email & Message */}
          <div className="space-y-4 mb-5">
            <div className="flex flex-col">
              <label className="mb-2 text-base sm:text-xl font-semibold">Email</label>
              <input
                type="text"
                placeholder="Your Email"
                className="border border-gray-500 outline-0 w-full p-2.5 sm:p-3 rounded-md forms-gradient"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-base sm:text-xl font-semibold">Message</label>
              <textarea
                rows={6}
                className="border border-gray-500 outline-0 w-full p-2.5 sm:p-3 rounded-md forms-gradient resize-none"
                placeholder="Write your message..."
              />
            </div>
          </div>

          {/* Checkboxes + Submit */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="space-y-2">
              {[
                "I agree to receive other communication messages",
                "I give my consent to Nuvia home to store my data",
              ].map((txt) => (
                <div key={txt} className="flex items-center gap-2">
                  <input type="checkbox" className="h-5 w-5 accent-red-400" />
                  <label className="text-sm sm:text-base">{txt}</label>
                </div>
              ))}
            </div>
            <button className="btn-gradient h-12 skewed px-4 sm:px-6">
              <span className="unskewed">Submit message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}