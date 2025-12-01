import React, { useState } from "react";
import { PropertyDetails } from "./PropertyDetails/PropertyDetails";
import { PropertyFeatures } from "./PropertyFeatures/PropertyFeatures";
import { PropertyArea } from "./PropertyArea/PropertyArea";
import { PriceDetails } from "./PriceDetails/PriceDetails";
import { SubmitPropertiesNavigation } from "./SubmitPropertiesNavigation";
import { addPropertiestepsData } from "@/lib/dummyData/addPropertiesStepsData";
import { PersonalDetails } from "./PersonalDetails/PersonalDetails";
import { AppFormSideBar } from "@/components/shared/AppFormSideBar";

export const SubmitPropertiesForms = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Navigation handlers
  const nextStep = () => {
    if (currentStep < addPropertiestepsData.length - 1) {
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
        return <PersonalDetails />;
      case 1:
        return <PropertyDetails />;
      case 2:
        return <PropertyFeatures />;
      case 3:
        return <PropertyArea />;
      case 4:
        return <PriceDetails />;
      default:
        return <PriceDetails />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row pr-2.5 mt-1.5">
      <AppFormSideBar
        steps={addPropertiestepsData}
        currentStep={currentStep}
        goToStep={goToStep}
      />

      <div className="max-w-3xl ml-2.5 lg:ml-10">
        {/* Step Content */}
        <div className="mb-8">{renderStep()}</div>

        {/* Navigation Buttons */}
        <SubmitPropertiesNavigation
          currentStep={currentStep}
          totalSteps={addPropertiestepsData.length}
          onNext={nextStep}
          onPrev={prevStep}
        />
      </div>
    </div>
  );
};
