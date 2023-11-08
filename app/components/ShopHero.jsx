import React from "react";
import CtaButton from "./CtaButton";

export default function ShopHero() {
  return (
    <div className="w-screen h-[434px] bg-[#F5FAFF] flex  justify-center items-center ">
      <div className="max-w-[1230px] flex gap-2 justify-center items-center px-10">
        <div className="flex flex-col gap-10 ">
          <p className="text-4xl font-bold font-mont text-[#115D99]">
            Discover Keto-Friendly Delights: Where Health Meets Flavor!
          </p>
          <p className="opacity-50 text-[#242B33]">
            Shop everyday essentials and the freshest organic produce, meats and
            the healthiest of products.
          </p>
          <div>
            <CtaButton children="Shop" />
          </div>
        </div>
        <img src="Veg.png" className="w-[619px]" />
      </div>
    </div>
  );
}
