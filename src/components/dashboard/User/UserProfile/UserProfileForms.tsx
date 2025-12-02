import { AppInput } from "@/components/shared/AppSetup/AppInput";
import { SelectDropDown } from "@/components/shared/SelectDropDown";
import React from "react";

export const UserProfileForms = () => {
  return (
    <form action="" className="">
      <div className="grid md:grid-cols-2 gap-4 mt-7">
        {/* First Name */}
        <AppInput
          label="First Name"
          name="FirstName"
          placeholder="John"
          className="w-full"
        />

        {/* Last Name */}
        <AppInput
          label="Last Name"
          name="LastName"
          placeholder="Doe"
          className="w-full"
        />

        {/* Email */}
        <AppInput
          label="Email"
          name="Email"
          placeholder="john.doe@example.com"
          className="w-full"
        />

        {/* Organisation */}
        <AppInput
          label="Organisation"
          name="Organisation"
          placeholder="Themeselection"
          className="w-full"
        />

        {/* Phone number */}
        <AppInput
          label="Phone Number"
          name="PhoneNumber"
          placeholder="202 555 0111"
          className="w-full"
        />

        {/* Address */}
        <AppInput
          label="Address"
          name="Address"
          placeholder="Address"
          className="w-full"
        />

        {/* State */}
        <AppInput
          label="State"
          name="State"
          placeholder="Lagos"
          className="w-full"
        />

        {/* Zip Code" */}
        <AppInput
          label="Zip Code"
          name="ZipCode"
          placeholder="123456"
          className="w-full"
        />

        {/* ?country */}
        <SelectDropDown
          className="flex-col justify-start items-start w-full"
          selectClassName="w-full h-10"
          label="Select Country"
          options={
            <>
              <option value="" disabled>
                Select Country
              </option>
              <option value="ng">Nigeria</option>
              <option value="gh">Ghana</option>
            </>
          }
        />

        {/* Language */}
        <SelectDropDown
          className="flex-col justify-start items-start w-full"
          selectClassName="w-full h-10"
          label="Select Language"
          options={
            <>
              <option value="" disabled>
                Select Language
              </option>
              <option value="en">English</option>
              <option value="fr">French</option>
            </>
          }
        />
        {/* Time */}
        <SelectDropDown
          className="flex-col justify-start items-start w-full"
          selectClassName="w-full h-10"
          label="Time Zone"
          options={
            <>
              <option value="" disabled>
                Time Zone
              </option>
              <option value="wat">WAT</option>
              <option value="est">EST</option>
            </>
          }
        />

        {/* Currency */}
        <SelectDropDown
          className="flex-col justify-start items-start w-full"
          selectClassName="w-full h-10"
          label="Select Currency"
          options={
            <>
              <option value="" disabled>
                Select Currency
              </option>
              <option value="ngn">Naira</option>
              <option value="usd">Dollar</option>
            </>
          }
        />
      </div>

      <div className="flex justify-end gap-5 mt-7">
        <button className="bg-neutralColor-900 text-textColor px-4 py-2 rounded-md text-base font-medium cursor-pointer">
          Cancel
        </button>

        <button className="flex flex-row justify-center items-center gap-2.5 rounded-lg px-5 py-2.5 bg-gradient-to-br from-[#1B5590] via-[#35AF72] to-[#B5E03A] cursor-pointer">
          <p className="font-urbanist text-base font-normal text-white">
            Save Changes
          </p>
        </button>
      </div>
    </form>
  );
};
