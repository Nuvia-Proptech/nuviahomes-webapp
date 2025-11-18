import React from "react";

export default function WriteAgent() {
  return (
    <div className="lg:w-1/3 border border-gray-500 p-4 rounded-2xl ">
      <p className="text-3xl mb-10">Write Agent</p>

      <form action="" className="space-y-6">
        <div className="flex flex-col space-y-3">
          <label htmlFor="" className="text-16 font-semibold">
            Email
          </label>
          <input
            type="text"
            placeholder="samuel@gmail.com"
            className="forms-gradient border border-gray-500 h-[60px] rounded-2xl px-4 outline-0"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="" className="text-16 font-semibold">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="+234 817 387 4083"
            className="forms-gradient border border-gray-500 h-[60px] rounded-2xl px-4 outline-0"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="" className="text-16 font-semibold">
            Message
          </label>
          <textarea
            name=""
            id=""
            placeholder="Type your massage here"
            className="forms-gradient border border-gray-500 h-[183px] rounded-2xl p-4 outline-0"
          ></textarea>
        </div>
        <div className="flex justify-center ">
          <button className="btn-gradient mx-auto py-4 px-20 rounded-[20px] md:w-full">Send a message</button>
        </div>
      </form>
    </div>
  );
}
