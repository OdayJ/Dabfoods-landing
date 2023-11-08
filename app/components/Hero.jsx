import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      id="Hero"
      className=" w-full h-fit bg-[#F5FAFF] flex flex-col lg:flex-row gap-2 justify-center  items-center rounded-3xl px-8 lg:px-20 lg:py-0 pt-6"
    >
      <div className="flex flex-col gap-8">
        <p className="text-3xl lg:text-[50px] lg:leading-[72.5px] font-bold font-mont text-[#242B33]">
          Taste America with <span className="text-[#115D99]">Wasta-Free </span>
          Quality Products.
        </p>
        <p className="hidden lg:block font-karla font-medium opacity-50 text-[#242B33]">
          Experience a taste of America with our curated trends, delightful
          recipes, and the newest grocery innovations.
        </p>
      </div>
      <div className="w-full md:w-2/3 lg:w-full lg:h-[400px] ">
        <Image
          alt="hero"
          src="/Foods.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}
