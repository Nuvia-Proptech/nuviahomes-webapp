"use client"
import React, { useState } from "react";
import { EditProjectDetails } from "./userSubmitProjectDetails/UserSubmitProjectDetails";
import { EditProjectDocument } from "./userSubmitProjectDouments/UserSubmitEditProjectDocument";
import { AppFormSideBar } from "@/components/shared/AppFormSideBar";
import { AppFormNavigation } from "@/components/shared/AppFormNavigation";
import { editProjectStepsData } from "@/lib/dummyData/editProjectStepsData";

export const UserSubmitProjectForms = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Navigation handlers
  const nextStep = () => {
    if (currentStep < editProjectStepsData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (index) => {
    setCurrentStep(index);
  };

  // Render current step component
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <EditProjectDetails />;
      case 1:
        return <EditProjectDocument />;
      default:
        return <EditProjectDocument />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex mt-5">
      <AppFormSideBar
        steps={editProjectStepsData}
        currentStep={currentStep}
        goToStep={goToStep}
      />

      <div className="max-w-3xl ml-10">
        {/* Step Content */}
        <div className="mb-8">{renderStep()}</div>

        {/* Navigation Buttons */}
        <AppFormNavigation
          currentStep={currentStep}
          totalSteps={editProjectStepsData.length}
          onNext={nextStep}
          onPrev={prevStep}
        />
      </div>
    </div>
  );
};
