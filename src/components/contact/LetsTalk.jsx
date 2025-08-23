import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function LetsTalk() {
  return (
    <div className="flex justify-between py-10 px-14 mb-20 gap-20">
      {/* col -1 */}
      <div className="w-1/2">
        <div className="mb-10">
          <p className="text-20 gradient-text">You've got a question?</p>
          <p className="text-[32px] font-semibold mb-5">Lets's Talk</p>
          <p className="text-16">
            Get in touch with us using the enquiry form or cintact details below
          </p>
        </div>
        {/*  */}
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="featured-gradient border border-gray-500 p-3 rounded-md">
              <Mail />
            </div>
            <div>
              <p className="text-20 font-semibold mb-1">Quick Contact</p>
              <p className="text-16">Email nuviahomes.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="featured-gradient border border-gray-500 p-3 rounded-md">
              <Phone />
            </div>
            <div>
              <p className="text-20 font-semibold mb-1">Quick Contact</p>
              <p className="text-16">Email nuviahomes.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="featured-gradient border border-gray-500 p-3 rounded-md">
              <MapPin />
            </div>
            <div>
              <p className="text-20 font-semibold mb-1">Quick Contact</p>
              <p className="text-16">Email nuviahomes.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* col - 2 */}
      <div className="w-1/2">
        <form action="">
          {/* First and last name */}
          <div className="flex justify-between gap-2 mb-5">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="mb-3 text-xl font-semibold">
                First Name
              </label>
              <input
                type="text"
                className="border border-gray-500 outline-0 w-full p-3 rounded-md forms-gradient"
                placeholder="First Name"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="mb-3 text-xl font-semibold">
                Last Name
              </label>
              <input
                type="text"
                className="border border-gray-500 outline-0 w-full p-3 rounded-md forms-gradient"
                placeholder="Last Name"
              />
            </div>
          </div>
          {/* Email and messgae */}
          <div className="mb-5 space-y-2">
            <div className="flex flex-col">
              <label htmlFor="" className="mb-3 text-xl font-semibold w-full">
                Email
              </label>
              <input
                type="text"
                className="border border-gray-500 outline-0 w-full p-3 rounded-md forms-gradient"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-3 text-xl font-semibold w-full">
                Message
              </label>
              <textarea
                name=""
                id=""
                className="border h-[220px] border-gray-500 outline-0 w-full p-3 rounded-md forms-gradient"
              ></textarea>
            </div>
          </div>
          {/* checkbox and submite button */}
          <div className="flex justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="border h-5 w-5 text-red-400"
                />
                <label htmlFor="">
                  I agree to recive other communication messages
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="border h-5 w-5 text-red-400"
                />
                <label htmlFor="">
                  I give my consent to Nuvia home to store my data
                </label>
              </div>
            </div>
            <button className="btn-gradient px-4 h-12 skewed">
              <span className="unskewed">Submit message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
