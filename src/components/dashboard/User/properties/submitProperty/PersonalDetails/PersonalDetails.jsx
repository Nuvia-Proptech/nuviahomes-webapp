import { AppInput } from "@/components/shared/AppSetup/AppInput";
import { InnerCircledBorderIcon } from "@/components/shared/Icons/InnerCircledBorderIcon";
import { adminTypeData } from "@/lib/dummyData/AdminTypeData";
import React, { useState } from "react";

export const PersonalDetails = () => {
  const [adminType, setAdminType] = useState("builder");
 
  return (
    <div className="my-8">
      <div className="flex flex-wrap gap-3 my-3">
        {adminTypeData.map((item) => (
          <div
            key={item.id}
            onClick={() => setAdminType(item.id)}
            className={`border px-5.5 py-4 rounded-xl w-60 ${
              adminType === item.id
                ? "border-primaryColor"
                : "border-neutralColor-700"
            }`}
          >
            <div className="flex flex-col justify-center items-center gap-5">
               {/* Clone the icon element and modify its fill prop with appropriate fill color*/}
               {React.cloneElement(item.icon, {
                    fill: adminType === item.id ? item.activeColor : item.inactiveColor,
                  })}
              <p className="text-center font-urbanist font-semibold text-sm text-black">
                {item.title}
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 my-1">
              <p className="text-center font-urbanist font-normal text-sm text-textColor">
                {item.description}
              </p>

              {adminType === item.id ? (
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

      <form action=""  className="grid md:grid-cols-2 gap-4 my-5">
        <AppInput label="First Name" placeholder="John" />

        <AppInput label="Last Name" placeholder="John" />

        <AppInput label="Username" placeholder="John" />

        <AppInput label="Email" placeholder="example@gmail.com" />

        <AppInput label="Phone No." placeholder="+234 9384 039 4593" />
      </form>
    </div>
  );
};
