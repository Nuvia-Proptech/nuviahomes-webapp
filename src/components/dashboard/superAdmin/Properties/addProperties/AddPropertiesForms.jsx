import React, { useState } from "react";
import { PropertyDetails } from "./PropertyDetails/PropertyDetails";
import { PropertyFeatures } from "./PropertyFeatures/PropertyFeatures";
import { PropertyArea } from "./PropertyArea/PropertyArea";
import { PriceDetails } from "./PriceDetails/PriceDetails";
import { AddPropertiesSideBar } from "./AddPropertiesSideBar";
import { AppPropertiesNavigation } from "./AppPropertiesNavigation";
import { addPropertiestepsData } from "@/lib/dummyData/addPropertiesStepsData";
import { PersonalDetails } from "./PersonalDetails/PersonalDetails";

export const AddPropertiesForms = () => {
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
        return <PropertyArea />;
      default:
        return <PriceDetails />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      <AddPropertiesSideBar
        steps={addPropertiestepsData}
        currentStep={currentStep}
        goToStep={goToStep}
      />

      <div className="max-w-3xl ml-10">
        {/* Step Content */}
        <div className="mb-8">{renderStep()}</div>

        {/* Navigation Buttons */}
        <AppPropertiesNavigation
          currentStep={currentStep}
          totalSteps={addPropertiestepsData.length}
          onNext={nextStep}
          onPrev={prevStep}
        />
      </div>
    </div>
  );
};
