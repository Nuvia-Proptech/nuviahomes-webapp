import React from "react";

export const BookingsItems = ({key, date, day, items}) => {
  return (
    <div key={key} className="w-full text-base font-urbanist">
      <div className="text-textColor font-semibold bg-secondaryColor/90 flex justify-between items-center p-2">
        <p>{date}</p>
        <p className="w-24">{day}</p>
      </div>
      {items.map((item, i) => (
        <div
          key={i}
          className="text-textColorFaded text-base font-normal flex justify-between items-center p-2"
        >
          <div className="flex gap-10 items-center">
            <p className="w-40">{item.time}</p>
            <div className="flex items-center gap-2">
              <span className={`${item.color} w-2 h-2 rounded-full`}></span>
              <span>{item.label}</span>
            </div>
          </div>
          <p className="w-24">{day}</p>
        </div>
      ))}
    </div>
  );
};