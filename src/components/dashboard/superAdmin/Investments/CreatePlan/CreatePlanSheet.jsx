import React from "react";
import { AppInput } from "@/components/shared/AppSetup/AppInput";
import { AppTextarea } from "@/components/shared/AppSetup/AppTextarea";
import { SelectDropDown } from "@/components/shared/SelectDropDown";
import { ImageUploadSection } from "../../Properties/addProperties/PropertyFeatures/ImageUploadSection";
import { MultiSelectDropdown } from "@/components/shared/MultiSelectDropdown";

export const CreatePlanSheet = ({ onClose }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-textColor font-urbanist mb-6">
        Create Investment Plan
      </h2>

      <form className="space-y-6">
        {/* Plan Name & Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AppInput
            label="Plan Name"
            name="planName"
            placeholder="e.g. Gold Plan"
          />
          <AppInput
            label="Address"
            name="Address"
            placeholder="e.g. white house, opposite government house"
          />
          <div className="w-full">
            <SelectDropDown
              className="flex-col text-left items-start gap-0 text-base font-publicSans capitalize w-full"
              selectClassName="w-full text-gray-400 "
              label="State"
              options={
                <>
                  <option value="" disabled hidden>
                    Select State...
                  </option>

                  <option value="lagos">Lagos</option>
                </>
              }
            />
          </div>
          <div className="w-full">
            <SelectDropDown
              className="flex-col text-left items-start gap-0 text-base font-publicSans capitalize w-full"
              selectClassName="w-full text-gray-400 "
              label="Country"
              options={
                <>
                  <option value="" disabled hidden>
                    Select Country...
                  </option>

                  <option value="nigeria">Nigeria</option>
                </>
              }
            />
          </div>
          <div className="w-full col-span-2">
            <SelectDropDown
              className="flex-col text-left items-start gap-0 text-base font-publicSans capitalize w-full"
              selectClassName="w-full text-gray-400 "
              label="Amenities"
              options={
                <>
                  <option value="" disabled hidden>
                    Select Amenities...
                  </option>

                  <option value="waterHeater">Water Heater</option>
                  <option value="freezer">Freezer</option>
                  <option value="wifi">Wifi</option>
                </>
              }
            />
          </div>
          <div className="w-full col-span-2">
            <SelectDropDown
              className="flex-col text-left items-start gap-0 text-base font-publicSans capitalize w-full"
              selectClassName="w-full text-gray-400 "
              label="Video Url"
              options={
                <>
                  <option value="" disabled hidden>
                    Select Video...
                  </option>

                  <option value="url">Url</option>
                </>
              }
            />
          </div>
        </div>

        {/* Description */}
        <AppTextarea
          label="Plan Description"
          name="description"
          placeholder="Full property description..."
          className="min-h-32 w-full "
        />

        {/* Investment Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AppInput
            label="Minimum Amount"
            name="minAmount"
            placeholder="e.g. $500"
          />
          <AppInput
            label="Maximum Amount"
            name="maxAmount"
            placeholder="e.g. $50,000"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AppInput
            label="Total Investment Budget"
            name="totalInvestmentBudget"
            placeholder="e.g. $2,000,000"
            type="number"
          />
          <AppInput
            label="Expected Profit"
            name="roi"
            placeholder="e.g. $20,000"
            type="number"
          />
        </div>

        {/* Status & Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="w-full">
            <SelectDropDown
              className="flex-col text-left items-start gap-0 text-base font-publicSans capitalize w-full"
              selectClassName="w-full text-gray-400 "
              label="Investments Starts"
              options={
                <>
                  <option value="" disabled hidden>
                    Select State...
                  </option>

                  <option value="active">Active</option>
                  <option value="paused">Paused</option>
                  <option value="coming_soon">Coming Soon</option>
                </>
              }
            />
          </div>

          <div className="w-full">
            <SelectDropDown
              className="flex-col text-left items-start gap-0 text-base font-normal font-urbanist capitalize w-full"
              selectClassName="w-full  text-gray-400"
              label="Investments Ends"
              options={
                <>
                  <option value="" disabled hidden>
                    Select Ends...
                  </option>
                  <option value="fixed">Fixed Return</option>
                  <option value="flexible">Flexible</option>
                  <option value="real_estate">Real Estate</option>
                </>
              }
            />
          </div>
          <div className="w-full">
            <SelectDropDown
              className="flex-col text-left items-start gap-0 text-base font-normal font-urbanist capitalize w-full"
              selectClassName="w-full  text-gray-400"
              label="Investments Return Schedule"
              options={
                <>
                  <option value="" disabled hidden>
                    Select Ends...
                  </option>
                  <option value="fixed">Fixed Return</option>
                  <option value="flexible">Flexible</option>
                  <option value="real_estate">Real Estate</option>
                </>
              }
            />
          </div>
          <div className="w-full">
            <SelectDropDown
              className="flex-col text-left items-start gap-0 text-base font-normal font-urbanist capitalize w-full"
              selectClassName="w-full  text-gray-400"
              label="Status"
              options={
                <>
                  <option value="" disabled hidden>
                    Select Status...
                  </option>
                  <option value="active">Active</option>
                  <option value="paused">Paused</option>
                  <option value="coming_soon">Coming Soon</option>
                </>
              }
            />
          </div>

          <ImageUploadSection/>
        </div>

        {/* Submit Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-md text-textColorFaded hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-br from-[#1B5590] via-[#35AF72] to-[#B5E03A] text-white rounded-md font-medium"
          >
            Create Plan
          </button>
        </div>
      </form>
    </div>
  );
};
