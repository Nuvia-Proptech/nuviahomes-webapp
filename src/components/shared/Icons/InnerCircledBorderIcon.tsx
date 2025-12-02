import React from "react";

export const InnerCircledBorderIcon = ({
  width = "18",
  height = "17",
  fill = "#5818D8",
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 17" fill="none">
      <path
        d="M9 17C4.30182 17 0.5 13.1982 0.5 8.5C0.5 3.80182 4.30182 0 9 0C13.6982 0 17.5 3.80182 17.5 8.5C17.5 13.1982 13.6982 17 9 17ZM9 4.63636C6.86727 4.63636 5.13636 6.36727 5.13636 8.5C5.13636 10.6327 6.86727 12.3636 9 12.3636C11.1327 12.3636 12.8636 10.6327 12.8636 8.5C12.8636 6.36727 11.1327 4.63636 9 4.63636Z"
        fill={fill}
      />
    </svg>
  );
};
