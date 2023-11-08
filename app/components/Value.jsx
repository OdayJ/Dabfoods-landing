import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { BsGlobeAmericas } from "react-icons/bs";
import { HiCheckBadge, HiMiniGlobeAmericas } from "react-icons/hi2";
export default function Value({ name, desc }) {
  return (
    <div className="flex flex-col h-auto w-auto items-center justify-center">
      {name == "Fast Delivery" && <MdDeliveryDining size={70} fill="#115D99" />}
      {name == "Authentic Brands" && <HiCheckBadge size={70} fill="#115D99" />}
      {name == "American Products" && (
        <HiMiniGlobeAmericas size={70} fill="#115D99" />
      )}
      <p className="text-2xl text-[#115D99] font-mont font-bold ">{name}</p>
      <p className="text-[#242B33] font-karla opacity-50 text-sm">{desc}</p>
    </div>
  );
}
