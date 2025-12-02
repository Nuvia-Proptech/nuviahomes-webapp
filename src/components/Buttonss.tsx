import React from "react";

interface ButtonssProps {
  btnContent: React.ReactNode;
  btnStyle?: string;
}

function Buttonss({ btnContent, btnStyle }: ButtonssProps) {
  return (
    <button
      type="button"
      className={`text-gray-900 ${btnStyle} hover:bg-gradient-to-br focus:ring-4 focus:outline-none text-white rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-xl font-semibold`}
    >
      {btnContent}
    </button>
  );
}

export default Buttonss;
