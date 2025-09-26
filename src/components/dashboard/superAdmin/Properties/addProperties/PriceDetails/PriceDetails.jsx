import { AppInput } from "@/components/shared/AppSetup/AppInput";
import React from "react";
import { RadioOptionSelector } from "../RadioOptionSelector";

export const PriceDetails = () => {
  return (
    <div className="my-5">
      <div className="mb-5 flex flex-wrap justify-center items-center md:justify-start gap-4">
        {/* Extracted Price */}
        <AppInput
          label="Extracted Price"
          placeholder="25000"
          inputClassName="w-64"
          inputHasRightItem={true}
          rightItem={
            <p className="text-base text-[#22303E66] font-normal font-publicSans">
              #
            </p>
          }
        />

        {/* Price Per SQFT */}
        <AppInput
          label="Price Per SQFT"
          placeholder="2000"
          inputClassName="w-64"
          inputHasRightItem={true}
          rightItem={
            <p className="text-base text-[#22303E66] font-normal font-publicSans">
              #
            </p>
          }
        />

        {/* Plot Area */}
        <AppInput
          label="Plot Area"
          placeholder="25000"
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
        {/* Show price As */}
        <RadioOptionSelector
          title="Show Price As"
          options={["Negotiable", "Call for price"]}
        />

        {/* Price includes */}
        <RadioOptionSelector
          title="Price includes"
          options={["New Property", "Resale"]}
        />
      </div>
    </div>
  );
};
