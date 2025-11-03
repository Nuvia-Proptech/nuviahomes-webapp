import React, { useState } from "react";
import { ImageUploadSection } from "./ImageUploadSection";
import { SelectDropDown } from "@/components/shared/SelectDropDown";
import { AppInput } from "@/components/shared/AppSetup/AppInput";
import { InnerCircledBorderIcon } from "@/components/shared/Icons/InnerCircledBorderIcon";

export const PropertyFeatures = () => {
  const [isCommonArea, setIsCommonArea] = useState("yes");
  return (
    <div className="my-8">
      <p className="text-textColor/90 text-sm font-normal font-publicSans">
        Upload Property Media
      </p>

      <ImageUploadSection />

{/* Forms Sections */}
      <div  className="grid md:grid-cols-2 gap-4 my-5">
        {/* BedRooms */}
        <AppInput label="Bedrooms" placeholder="5" />

        {/* Floor number */}
        <AppInput label="Floor No" placeholder="8" />

        {/* Bathrooms */}
        <AppInput label="Bathrooms" placeholder="3" />

        {/* property type */}
        <SelectDropDown
          className="flex-col justify-start items-start gap-0.5"
          selectClassName="w-[360px] h-10"
          label="Furnished Status"
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
      

{/* IsCommon area section */}
      <div>
        <p className="text-sm text-textColor font-normal font-publicSans">
          Is there any common area?
        </p>
        {["yes", "no"].map((item) => (
          <div
            onClick={() => setIsCommonArea(item)}
            className="flex items-center gap-2 my-3"
          >
            {isCommonArea === item ? (
              <InnerCircledBorderIcon />
            ) : (
              <p
                className={`w-4.5 h-4.5 rounded-full border border-neutralColor-70}`}
              ></p>
            )}
            <p className="capitalize text-textColor font-urbanist text-sm font-normal">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
