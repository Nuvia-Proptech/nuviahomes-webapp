import { AppInput } from "@/components/shared/AppSetup/AppInput";
import { SelectDropDown } from "@/components/shared/SelectDropDown";
import React, { useState } from "react";
import { RadioOptionSelector } from "../RadioOptionSelector";

export const PropertyArea = () => {
  return (
    <div className="my-5">
      {/* Forms Sections */}
      <div className="mb-5 flex flex-wrap justify-center items-center md:justify-start gap-4">
        {/* Total Area */}
        <AppInput
          label="Total Area"
          placeholder="1000"
          inputClassName="w-64"
          inputHasRightItem={true}
          rightItem={
            <p className="text-base text-[#22303E66] font-normal font-publicSans">
              sq-ft
            </p>
          }
        />

        {/* Carpet Area */}
        <AppInput
          label="Carpet Area"
          placeholder="2000"
          inputClassName="w-64"
          inputHasRightItem={true}
          rightItem={
            <p className="text-base text-[#22303E66] font-normal font-publicSans">
              sq-ft
            </p>
          }
        />

        {/* Plot Area */}
        <AppInput
          label="Plot Area"
          placeholder="1000"
          inputClassName="w-64"
          inputHasRightItem={true}
          rightItem={
            <p className="text-base text-[#22303E66] font-normal font-publicSans">
              sq-ft
            </p>
          }
        />

        {/* property type */}
        <SelectDropDown
          className="flex-col justify-start items-start gap-0.5"
          selectClassName="w-[360px] h-10"
          label="Available From"
          options={
            <>
              <option value="10" disbabled defaultValue={true}>
                Select Furnished Status
              </option>
              <option value="10">Completed</option>
              <option value="5">Pending</option>
            </>
          }
        />
      </div>

      <div className="grid md:grid-cols-2">
        {/* Possesion Status */}
        <RadioOptionSelector
          title="Possesion Status"
          options={["Under Construction", "Ready to move"]}
        />
        {/* Transaction Type */}
        <RadioOptionSelector
          title="Transaction Type"
          options={["New Property", "Resale"]}
        />
        {/* Is Property Facing Main Road? */}
        <RadioOptionSelector
          title="Is Property Facing Main Road?"
          options={["yes", "no"]}
        />
        {/* Gated Coomunity? */}
        <RadioOptionSelector title="Gated Coomunity?" options={["yes", "no"]} />
      </div>
    </div>
  );
};
