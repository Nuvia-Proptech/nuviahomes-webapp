import React from "react";

interface FormStep {
  id: string | number;
  title: string;
  details: string;
  icon: React.ComponentType<{ fill?: string }>;
  activeColor: string;
  inactiveColor: string;
}

interface AppFormSideBarProps {
  steps: FormStep[];
  currentStep: number;
  goToStep: (index: number) => void;
}

export const AppFormSideBar = ({
  steps,
  currentStep,
  goToStep,
}: AppFormSideBarProps) => {
  return (
    <div className="w-full lg:w-64 lg:border-r border-[#C6D0D2] p-6 font-urbanist">
      <div className="w-full space-y-2 flex justify-between lg:block">
        {steps.map((step, index) => {
          const isActive = currentStep === index;
          return (
            <div key={step.id}>
              <div
                className={`flex items-start sm:p-3 rounded-lg cursor-pointer transition-all ${
                  isActive ? "" : ""
                }`}
                onClick={() => goToStep(index)}
              >
                <div
                  className={`lg:mr-3 flex items-center justify-center w-9 h-9 rounded-sm ${
                    isActive
                      ? "bg-primaryColor text-white"
                      : "bg-[#DFE6E7] text-textColor"
                  }`}
                >
                  {/* Render the icon component with appropriate fill color*/}
                  <step.icon
                    fill={isActive ? step.activeColor : step.inactiveColor}
                  />
                </div>

                {/* Horizontal right Border except the last */}
                {/* {index < steps.length - 1 && (
                <div
                  className="border-b border-[#DFE6E7] w-8 sm:w-14
              py-1 mt-3 lg:hidden"
                ></div>
              )} */}

                <div className="hidden lg:block">
                  <p
                    className={`text-sm font-semibold ${
                      isActive ? "text-primaryColor" : "text-textColor"
                    }`}
                  >
                    {step.title}
                  </p>
                  <p className="text-textColor/60 text-xs mt-1">
                    {step.details}
                  </p>
                </div>
              </div>

              {/* Vertical bottom Border except the last */}
              {index < steps.length - 1 && (
                <div
                  className="border-b border-[#DFE6E7] w-10
             rotate-90 py-1 ml-3 hidden lg:block"
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
