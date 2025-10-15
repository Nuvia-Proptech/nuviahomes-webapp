import React from "react";

export const AppFormSideBar = ({ steps, currentStep, goToStep }) => {
  return (
    <div className="w-64 border-r border-[#C6D0D2] p-6 font-urbanist">
      <div className="space-y-2">
        {steps.map((step, index) => {
          const isActive = currentStep === index;
          return (
            <div key={step.id}>
              <div
                className={`flex items-start p-3 rounded-lg cursor-pointer transition-all ${
                  isActive ? "" : ""
                }`}
                onClick={() => goToStep(index)}
              >
                <div
                  className={`mr-3 flex items-center justify-center w-9 h-9 rounded-sm ${
                    isActive
                      ? "bg-primaryColor text-white"
                      : "bg-[#DFE6E7] text-textColor"
                  }`}
                >
                  {/* Clone the icon element and modify its fill prop with appropriate fill color*/}
                  {React.cloneElement(step.icon, {
                    fill: isActive ? step.activeColor : step.inactiveColor,
                  })}
                </div>

                <div>
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
             rotate-90 py-1 ml-3"
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
