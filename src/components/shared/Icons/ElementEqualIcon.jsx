import React from "react";

export const ElementEqualIcon = ({
  width = "20",
  height = "20",
  stroke = "white",
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <path
        d="M18.3333 6.89163V3.52496C18.3333 2.19996 17.8 1.66663 16.475 1.66663H13.1083C11.7833 1.66663 11.25 2.19996 11.25 3.52496V6.89163C11.25 8.21663 11.7833 8.74996 13.1083 8.74996H16.475C17.8 8.74996 18.3333 8.21663 18.3333 6.89163Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.74996 7.09996V3.31663C8.74996 2.14163 8.21663 1.66663 6.89163 1.66663H3.52496C2.19996 1.66663 1.66663 2.14163 1.66663 3.31663V7.09163C1.66663 8.27496 2.19996 8.74163 3.52496 8.74163H6.89163C8.21663 8.74996 8.74996 8.27496 8.74996 7.09996Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.74996 16.475V13.1083C8.74996 11.7833 8.21663 11.25 6.89163 11.25H3.52496C2.19996 11.25 1.66663 11.7833 1.66663 13.1083V16.475C1.66663 17.8 2.19996 18.3333 3.52496 18.3333H6.89163C8.21663 18.3333 8.74996 17.8 8.74996 16.475Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M12.5 12.9166H17.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        opacity="0.4"
        d="M12.5 16.25H17.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
