import React, { Children } from "react";

export default function CtaButton({ children }) {
  return (
    <button className="bg-[#115D99] text-[#F5FAFF] font-karla text-lg font-bold w-fit px-8 h-10 rounded-full hover:opacity-90">
      {children}
    </button>
  );
}
