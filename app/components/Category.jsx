import React from "react";
import Image from "next/image";

export default function Category({ children, link }) {
  return (
    <div className="group w-full h-44 lg:w-full lg:h-72 rounded-3xl relative cursor-pointer pointer-events-auto">
      <Image
        alt={children}
        className="absolute rounded-3xl object-cover"
        src={link}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />

      <div className="h-full w-full bg-black rounded-3xl absolute opacity-30 group-hover:opacity-20 transition-opacity duration-300"></div>
      <div className="font-mont w-full h-full absolute font-bold grid place-items-center text-center text-white lg:text-3xl text-xl p-3  z-10">
        <p>{children}</p>
      </div>
    </div>
  );
}
