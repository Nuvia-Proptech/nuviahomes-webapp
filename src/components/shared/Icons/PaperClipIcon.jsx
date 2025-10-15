import React from "react";

export const PaperClipIcon = ({stroke="#344346", width="20", height="20" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 10.0251L12.9167 10.0251C14.525 10.0251 15.8333 8.71673 15.8333 7.1084C15.8333 5.50006 14.525 4.19173 12.9167 4.19173L8.33333 4.19173C5.10833 4.19173 2.5 6.80006 2.5 10.0251C2.5 13.2501 5.10833 15.8584 8.33333 15.8584L13.3333 15.8584C16.0917 15.8584 18.3333 13.6167 18.3333 10.8584"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
