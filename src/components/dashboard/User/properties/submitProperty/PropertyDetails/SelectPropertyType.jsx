import React, { useState } from 'react'
import { InnerCircledBorderIcon } from '@/components/shared/Icons/InnerCircledBorderIcon';
import { propertyTypeData } from '@/lib/dummyData/propertyTypeData';

export const SelectPropertyType = () => {
    const [propertyType, setPropertyType] = useState("sell")

  return (
    <div className="grid sm:grid-cols-2 gap-3 lg:my-3">
        {propertyTypeData.map((item) => (
          <div
            key={item.id}
            onClick={() => setPropertyType(item.id)}
            className={`border px-5.5 py-4 rounded-xl w-full ${
              propertyType === item.id
                ? "border-primaryColor"
                : "border-neutralColor-700"
            }`}
          >
            <div className="flex flex-col justify-center items-center gap-5">
               {/* Clone the icon element and modify its fill prop with appropriate fill color*/}
               {React.cloneElement(item.icon, {
                    fill: propertyType === item.id ? item.activeColor : item.inactiveColor,
                  })}
              <p className="text-center font-urbanist font-semibold text-sm text-black">
                {item.title}
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 my-1">
              <p className="text-center font-urbanist font-normal text-sm text-textColor">
                {item.description}
              </p>

              {propertyType === item.id ? (
                <InnerCircledBorderIcon />
              ) : (
                <p
                  className={`w-4.5 h-4.5 rounded-full border border-neutralColor-70}`}
                ></p>
              )}
            </div>
          </div>
        ))}
      </div>
  )
}
