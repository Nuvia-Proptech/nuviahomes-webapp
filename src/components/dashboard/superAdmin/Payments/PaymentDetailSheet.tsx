import React from "react";
import { Button } from "@/components/ui/button";
import { SheetTitle } from "@/components/ui/sheet";
import Image from "next/image";
import paymentImage from "@/assets/images/payment.jpg";
import { CloseSquareIcon } from "@/components/shared/Icons/CloseSquareIcon";
import { TickGoodSquareIcon } from "@/components/shared/Icons/TickGoodSquareIcon";

export const PaymentDetailSheet = ({ payment, onClose }) => {
  if (!payment) return null;

  return (
    <div className="h-full flex flex-col p-5 overflow-y-scroll no-scrollbar">
      <SheetTitle className="text-xl font-medium font-urbanist text-textColor mt-5">
        Payment information
      </SheetTitle>

      <div className="flex justify-between my-3">
        <div>
          <p className="text-black text-lg font-normal font-urbanist">
            Amount Paid :
          </p>
          <p className="text-base text-textColorFaded font-normal font-publicSans">{`#${payment.amount}`}</p>
        </div>
        <div>
          <p className="text-black text-lg font-normal font-urbanist">
            Date Paid :
          </p>
          <p className="text-base text-textColorFaded font-normal font-publicSans">
            {payment.date}
          </p>
        </div>
        <div>
          <p className="text-black text-lg font-normal font-urbanist">
            Payment Method :
          </p>
          <p className="text-base text-textColorFaded font-normal font-publicSans">
            {payment.method}
          </p>
        </div>
      </div>

      {/* Sumarry section */}
      <div className="my-5">
        <p className="text-xl font-medium font-urbanist text-textColor my-2.5">
          Summary
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* Accont number */}
          <div className="font-publicSans">
            <p className="text-sm text-grayColor/90 font-medium">
              Account number
            </p>
            <div className="py-2 px-3.5 w-full border border-grayColor/20 rounded-md text-grayColor/40 text-base font-normal mt-1">
              {payment.accountNumber}
            </div>
          </div>
          {/* Account Name */}
          <div className="font-publicSans">
            <p className="text-sm text-grayColor/90 font-medium">
              Account Name
            </p>
            <div className="py-2 px-3.5 w-full border border-grayColor/20 rounded-md text-grayColor/40 text-base font-normal mt-1">
              {payment.name}
            </div>
          </div>
          {/* Address */}
          <div className="font-publicSans">
            <p className="text-sm text-grayColor/90 font-medium">Address</p>
            <div className="py-2 px-3.5 w-full border border-grayColor/20 rounded-md text-grayColor/40 text-base font-normal mt-1">
              {payment.address}
            </div>
          </div>
          {/* Amount paid */}
          <div className="font-publicSans">
            <p className="text-sm text-grayColor/90 font-medium">Amount Paid</p>
            <div className="py-2 px-3.5 w-full border border-grayColor/20 rounded-md text-grayColor/40 text-base font-normal mt-1">{`#${payment.amount}`}</div>
          </div>
        </div>

        <div className="w-full border border-grayColor/20 rounded-md p-5 my-3 flex justify-between">
          <p className="text-sm text-grayColor/40 font-normal font-public-sans">
            Payment Proof
          </p>
          <Image
            className="object-cover h-full"
            height={150}
            width={150}
            src={paymentImage}
            alt="Payment Image"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button className="py-2 px-5 bg transparent border-2 border-grayColor/20 rounded-lg text-black text-sm font-normal font-publicSans" onClick={onClose}>
          Close
        </button>
        <div className="flex gap-3">
          <button className="py-2 px-3 bg-dangerColor/15 rounded-xl flex flex-row gap-2 w-fit h-fit cursor-pointer">
            <CloseSquareIcon />
            <p className="text-dangerColor text-sm font-normal font-publicSans">
              Reject
            </p>
          </button>

          <button className="py-2 px-3 bg-successColor/15 rounded-xl flex flex-row gap-2 w-fit h-fit cursor-pointer">
            <TickGoodSquareIcon />
            <p className="text-successColor text-sm font-normal font-publicSans">
              Approve
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
