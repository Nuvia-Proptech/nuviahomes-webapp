import React from "react";

export const DocumentFowardIcon = ({width="20", height="20", stroke="white"}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        opacity="0.4"
        d="M9.16671 14.1667L10.8334 12.5L9.16671 10.8334L10.8334 12.5H5.83337"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 8.33329V12.5C18.3333 16.6666 16.6666 18.3333 12.5 18.3333H7.49996C3.33329 18.3333 1.66663 16.6666 1.66663 12.5V7.49996C1.66663 3.33329 3.33329 1.66663 7.49996 1.66663H11.6666"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 8.33329H15C12.5 8.33329 11.6666 7.49996 11.6666 4.99996V1.66663L18.3333 8.33329Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
