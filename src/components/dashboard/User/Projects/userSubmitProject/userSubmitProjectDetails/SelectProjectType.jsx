import React, { useState } from 'react'
import { projectTypeData } from '@/lib/dummyData/projectTypeData';
import { TickGoodSquareIcon } from '@/components/shared/Icons/TickGoodSquareIcon';

export const SelectProjectType = () => {
    const [projectType, setProjectType] = useState("development")

  return (
    <div className="flex flex-wrap justify-center items-center gap-3 my-3">
        {projectTypeData.map((item) => (
          <div
            key={item.id}
            onClick={() => setProjectType(item.id)}
            className={`border px-5.5 py-4 rounded-xl w-[350px] ${
              projectType === item.id
                ? "border-primaryColor"
                : "border-neutralColor-700"
            }`}
          >
            <div className="flex flex-col justify-center items-center gap-5">
               {/* Clone the icon element and modify its fill prop with appropriate fill color*/}
               {React.cloneElement(item.icon, {
                    fill: projectType === item.id ? item.activeColor : item.inactiveColor,
                  })}
              <p className="text-center font-urbanist font-semibold text-sm text-black">
                {item.title}
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 my-1">
              <p className="text-center font-urbanist font-normal text-sm text-textColor">
                {item.description}
              </p>

              {projectType === item.id ? (
               <TickGoodSquareIcon fill='#5818D8' />
              ) : (
                <p
                  className={`w-4.5 h-4.5 rounded-sm border border-neutralColor-70}`}
                ></p>
              )}
            </div>
          </div>
        ))}
      </div>
  )
}
