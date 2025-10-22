import React from "react";

export const LogoutIcon = ({
  width = "24",
  height = "24",
  stroke = "#1C0845",
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <g opacity="0.4">
        <path
          d="M17.4395 14.62L19.9995 12.06L17.4395 9.5"
          stroke={stroke}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.75977 12.0596H19.9298"
          stroke={stroke}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M11.76 20C7.33999 20 3.75999 17 3.75999 12C3.75999 7 7.33999 4 11.76 4"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
