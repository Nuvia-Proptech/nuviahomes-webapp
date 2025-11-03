import { ArrowLeftIcon } from "@/components/shared/Icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/shared/Icons/ArrowRightIcon";
import React from "react";

export const SubmitPropertiesNavigation = ({
  currentStep,
  totalSteps,
  onNext,
  onPrev,
}) => {
  return (
    <div className="flex justify-between mt-8 pt-6 ">
      <button
        onClick={onPrev}
        disabled={currentStep === 0}
        className={`flex flex-row justify-center items-center gap-2.5  px-5 py-2 rounded-lg font-normal font-urbanist text-xs ${
          currentStep === 0
            ? "cursor-not-allowed"
            : "bg-[#F4F6F6] text-[#6C8184] hover:bg-primaryColor hover:text-white"
        }`}
      >
        <ArrowLeftIcon />
        <p>Previous</p>
      </button>

      {currentStep === totalSteps - 1 ? (
        <button className="flex flex-row justify-center items-center gap-2.5 rounded-lg px-5 py-2.5 bg-gradient-to-br from-[#1B5590] via-[#35AF72] to-[#B5E03A] cursor-pointer">
          <p className="font-urbanist text-base font-normal text-white">
          Submit
          </p>
        </button>
      ) : (
        <button
          onClick={onNext}
          className="flex flex-row justify-center items-center gap-2.5 px-5 py-2 bg-primaryColor text-white rounded-lg font-normal"
        >
         <p>Next</p>
         <ArrowRightIcon />
        </button>
      )}
    </div>
  );
};
