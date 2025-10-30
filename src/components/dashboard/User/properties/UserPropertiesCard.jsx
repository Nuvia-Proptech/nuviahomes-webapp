import React from "react";
import houseImg from "@/assets/images/house.png";
import Image from "next/image";
import { Heart, MapPin, Wallet, ShoppingBag } from "lucide-react";

export const UserPropertiesCard = ({
  id,
  status,
  price,
  title,
  location,
  paymentType,
  wishlistCount,
  downPayment,
  downPaymentTime,
  installments,
  firstPaymentDate,
}) => {
  return (
    <div
      key={id}
      className="w-full bg-white shadow rounded-xl p-3 font-urbanist my-2.5 flex gap-3.5"
    >
      {/* image */}
      <div className="relative w-40 h-40 rounded-xl overflow-hidden bg-transparent">
        <Image
          src={houseImg}
          alt="Property Image"
          fill
          className="object-cover"
          sizes="185px"
        />
      </div>

      {/* Other contents */}
      <div className="font-urbanist w-full">
        {/* property statuses and payment amount */}
        <div className="flex justify-between">
          {/* House status */}
          <div className="flex gap-2">
            {status.map((item) => (
              <p className="px-2.5 py-1 w-fit h-fit bg-neutralColor-900 rounded-full text-black text-xs font-normal">
                {item}
              </p>
            ))}
          </div>

          {/* House price and payment type */}
          <div>
            <p className="text-2xl text-textColorDark font-semibold">{price}</p>
            <p className="text-sm text-textColor font-normal text-center">
              {paymentType}
            </p>
          </div>
        </div>

        {/* title and Location */}
        <h2 className="text-2xl text-textColorDark font-semibold">{title}</h2>
        <div className="flex items-center gap-1 text-textColor">
          <MapPin size={16} />
          <span className="text-sm font-normal">{location}</span>
        </div>

        {/* wishlist, downpayment, installment and firstpayment */}
        <div className="mt-3 flex justify-between flex-wrap gap-5">
          {/* wishlist */}
          <div className="flex items-center gap-2 text-textColor">
            <Heart size={22} />
            <div>
              <p className="text-sm font-normal">In Wishlist of </p>
              <p className="text-sm text-textColorDark font-semibold">
                {wishlistCount} Visitors
              </p>
            </div>
          </div>

          {/* Downpayment */}
          <div className="flex items-center gap-2 text-textColor">
            <Wallet size={22} />
            <div>
              <p className="text-sm font-normal">Down Payment</p>
              <p className="text-sm text-textColorDark font-semibold">
                {downPayment}
                <span className="text-sm font-normal ml-1">
                  {downPaymentTime}
                </span>
              </p>
            </div>
          </div>

          {/* Installment */}
          <div className="flex items-center gap-2 text-textColor">
            <ShoppingBag size={22} />
            <div>
              <p className="text-sm font-normal">Installments</p>
              <p className="text-sm text-textColorDark font-semibold">
                {installments}{" "}
                <span className="text-sm font-normal ml-1">{paymentType}</span>{" "}
              </p>
            </div>
          </div>

          {/* First payment date */}
          <div className="flex items-center gap-2 text-textColor">
            <Wallet size={22} />
            <div>
              <p className="text-sm font-normal">First Payment</p>
              <p className="text-sm text-textColorDark font-semibold">
                {firstPaymentDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
