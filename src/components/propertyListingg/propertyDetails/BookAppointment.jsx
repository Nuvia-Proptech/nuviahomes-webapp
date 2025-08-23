import React from "react";
import egImage from "@/assets/New Bloom(magazine)-01-2.3.001-bigpicture_01_6.jpg";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function BookAppointment() {
  return (
    <div>
      <div className="flex gap-5 justify-between listedProperty border border-gray-500 rounded-2xl p-3 mb-5">
        <button className="btn2-gradient border border-gray-500 rounded-xl h-[40px] w-full cursor-pointer">
          Share
        </button>
        <button className="btn2-gradient border border-gray-500 rounded-xl h-[40px] w-full cursor-pointer">
          Save
        </button>
      </div>
      {/*  */}
      <div className="listedProperty border border-gray-500 rounded-2xl p-3">
        <p className="text-3xl hover:no-underline mb-5">Book Appointment</p>

        <div className="flex items-center gap-4 mb-10">
          <div className="relative min-w-[95px] min-h-[95px] rounded-full overflow-hidden">
            <Image src={egImage} alt="" fill />
          </div>
          <div className="font-light">
            <p className="text-[20px] mb-1">Sara Conor</p>
            <div className="flex items-center gap-3 text-sm">
              <Phone size={16} />
              <p>+234 816 5026</p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail size={16} />
              <p>sara@gmail.com</p>
            </div>
          </div>
        </div>

        <div>
          <form action="" className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="" className="mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="forms-gradient h-[59px] rounded-2xl border border-gray-500 p-4 outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="forms-gradient h-[59px] rounded-2xl border border-gray-500 p-4 outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter name"
                className="forms-gradient h-[59px] rounded-2xl border border-gray-500 p-4 outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-1">Message</label>
              <textarea
                name=""
                id=""
                placeholder="Message"
                className="forms-gradient h-[183px] rounded-2xl border border-gray-500 p-4 outline-0"
              ></textarea>
            </div>
            <button className="btn-gradient h-[50px] w-full rounded-2xl">Make Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
}
