import React from "react";
import { SelectProjectType } from "./SelectProjectType";
import { AppInput } from "@/components/shared/AppSetup/AppInput";
import { AppTextarea } from "@/components/shared/AppSetup/AppTextarea";
import { SelectDropDown } from "@/components/shared/SelectDropDown";

export const EditProjectDetails = () => {
  return (
    <div className="my-8">
      <SelectProjectType />

      <form action="" className="">
        <div className="grid md:grid-cols-2 gap-4 my-5">
          <AppInput
            label="Property Name"
            name="PropertyName"
            placeholder="Property  display name"
          />
          <AppInput
            label="Property  Highlight"
            name="PropertyHighlight"
            placeholder="Property highlight name"
          />
        </div>
        <AppTextarea
          className="w-full"
          label="Property Description"
          placeholder="Full property description"
          name="description"
        />

        <div className="grid md:grid-cols-2 gap-4 my-5">
          {/* property type */}
          <SelectDropDown
            className="flex-col justify-start items-start"
            selectClassName="w-[360px] h-10"
            label="Property Type"
            options={
              <>
                <option value="10" disbabled defaultValue={true}>
                  Select propterty Type
                </option>
                <option value="10">Apartment</option>
                <option value="5">Duplex</option>
              </>
            }
          />

          {/* Zip code */}
          <AppInput label="Zip Code" placeholder="23784" />

          {/* ?country */}
          <SelectDropDown
            className="flex-col justify-start items-start"
            selectClassName="w-[360px] h-10"
            label="Select Country"
            options={
              <>
                <option value="10" disabled defaultValue={true}>
                  Select Country
                </option>
                <option value="10">Nigeria</option>
                <option value="5">Ghana</option>
              </>
            }
          />

          {/* State */}
          <AppInput label="State" placeholder="FCT" />

          {/* City */}
          <AppInput label="City" placeholder="Abuja" />

          {/* LandMArke */}
          <AppInput label="Landmark" placeholder="Zuma Rock" />
        </div>
        <AppTextarea
          className="w-full"
          label="Street"
          placeholder="No. 13 off Kubwa express way"
          name="street"
        />
      </form>
    </div>
  );
};
