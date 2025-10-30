import { AppWrapper } from "@/components/shared/AppSetup/AppWrapper";
import React from "react";
import { UserDashBoardHeader } from "../UserDashBoardHeader";
import { PlusSquareIcon } from "lucide-react";
import { UserPropertiesCard } from "./UserPropertiesCard";

const propertiesData = [
  {
    id: 1,
    status: ["For sale", "New Listing", "Virtual Tour", "Lekki", "Logos"],
    price: "#80,000,00",
    paymentType: "Full Payment",
    title: "4 Bedroom Luxury Penthouse with Ocean View",
    location: "Lekki Logos",
    wishlistCount: 120,
    downPayment: "#2000,000",
    downPaymentTime: "One Time",
    installments: "#54,166,667",
    installmentCount: 12,
    firstPaymentDate: "01-11-2024"
  },
  {
    id: 2,
    status: ["For sale", "For Rent", "Open House", "Awka", "Anambra"],
    price: "#200,000",
    paymentType: "7 Payments",
    title: "3 Bedroom Commercial Villa in Tempsite Awka",
    location: "Awka Anambra",
    wishlistCount: 50,
    downPayment: "#5500",
    downPaymentTime: "One Time",
    installments: "#5500",
    installmentCount: 12,
    firstPaymentDate: "17-09-2025"
  },
  {
    id: 3,
    status: ["For sale", "Land", "Distress Sale", "GRA Phase 2", "Rivers"],
    price: "#95,000,000",
    paymentType: "6 Payments",
    title: "2 Plots of Fenced Land with C of O",
    location: "Port Harcourt Rivers",
    wishlistCount: 30,
    downPayment: "#4,000,000",
    downPaymentTime: "One Time",
    installments: "#11,000,000",
    installmentCount: 5,
    firstPaymentDate: "15-12-2024"
  },
  
];

// Filter options
const cityOptions = ["All Cities", "Lekki", "Awka", "Port Harcourt", "Matforma"];
const purposeOptions = ["Property Purpose", "For sale", "For Rent", "Land"];
const typeOptions = ["Property Type", "Residential", "Commercial", "Land"];

export const UserPropertiesIndex = () => {
  return (
    <AppWrapper className="">
      <UserDashBoardHeader />

      <div className="bg-neutralColor-900 p-3 rounded-2xl w-full font-urbanist my-2">
        <div className="my-3 flex justify-between items-center">
          <div>
            <p className="md:text-4xl font-semibold text-textColor font-urbanist">
              Properties
            </p>
            <p className="text-textColor text-sm font-normal font-urbanist">
              A quick glance at all properties and Investments
            </p>
          </div>

          <button className="flex gap-2.5 rounded-[12px] p-2.5 bg-textColor cursor-pointer">
            <PlusSquareIcon />
            <p className="font-publicSans text-base font-normal text-[#F9F6FE]">
              New Listing
            </p>
          </button>
        </div>

        
        {propertiesData.map((item) => (
            <UserPropertiesCard 
            key={item.id}
            id={item.id}
            status={item.status}
            price={item.price}
            title={item.title}
            location={item.location}
            paymentType={item.paymentType}
            wishlistCount={item.wishlistCount}
            downPayment={item.downPayment}
            downPaymentTime={item.downPaymentTime}
            installments={item.installments}
            firstPaymentDate={item.firstPaymentDate}
             />
          ))}
      </div>
    </AppWrapper>
  );
};
