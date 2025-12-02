import React from "react";

export const NoteIcon = ({ width = "20", height = "20", stroke = "white" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M16.6667 6.87496V15C16.6667 17.5 15.175 18.3333 13.3334 18.3333H6.66671C4.82504 18.3333 3.33337 17.5 3.33337 15V6.87496C3.33337 4.16663 4.82504 3.54163 6.66671 3.54163C6.66671 4.05829 6.87502 4.52496 7.21668 4.86662C7.55835 5.20829 8.02504 5.41663 8.54171 5.41663H11.4584C12.4917 5.41663 13.3334 4.57496 13.3334 3.54163C15.175 3.54163 16.6667 4.16663 16.6667 6.87496Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 3.54163C13.3333 4.57496 12.4916 5.41663 11.4583 5.41663H8.54163C8.02496 5.41663 7.55827 5.20829 7.2166 4.86662C6.87494 4.52496 6.66663 4.05829 6.66663 3.54163C6.66663 2.50829 7.50829 1.66663 8.54163 1.66663H11.4583C11.975 1.66663 12.4416 1.87496 12.7833 2.21663C13.125 2.5583 13.3333 3.02496 13.3333 3.54163Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M6.66663 10.8334H9.99996"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M6.66663 14.1666H13.3333"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
