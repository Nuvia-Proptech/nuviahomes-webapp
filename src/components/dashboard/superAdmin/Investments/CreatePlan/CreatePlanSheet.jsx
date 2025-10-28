import React from "react";
import { AppInput } from "@/components/shared/AppSetup/AppInput";
import { AppTextarea } from "@/components/shared/AppSetup/AppTextarea";
import { SelectDropDown } from "@/components/shared/SelectDropDown";

export const CreatePlanSheet = ({ onClose }) => {
  return (
    <div className="p-6">
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
          <AppInput
            label="State"
            name="State"
            placeholder="e.g. Lagos"
          />
          <AppInput
            label="Country"
            name="Country"
            placeholder="e.g. Nigeria"
                  />
                  
        </div>

        {/* Description */}
        <AppTextarea
          label="Plan Description"
          name="description"
          placeholder="Full details about the investment plan..."
          className="min-h-32"
        />

        {/* Investment Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AppInput
            label="Minimum Amount"
            name="minInvestment"
            placeholder="e.g. $500"
          />
          <AppInput
            label="Maximum Investment"
            name="maxInvestment"
            placeholder="e.g. $50,000"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AppInput
            label="Duration (Months)"
            name="duration"
            placeholder="e.g. 6"
            type="number"
          />
          <AppInput
            label="Expected ROI (%)"
            name="roi"
            placeholder="e.g. 20"
            type="number"
          />
        </div>

        {/* Status & Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectDropDown
            label="Plan Status"
            options={
              <>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="coming_soon">Coming Soon</option>
              </>
            }
          />

          <SelectDropDown
            label="Plan Type"
            options={
              <>
                <option value="fixed">Fixed Return</option>
                <option value="flexible">Flexible</option>
                <option value="real_estate">Real Estate</option>
              </>
            }
          />
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
