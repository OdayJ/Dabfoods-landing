import React from "react";
import Image from "next/image";
export default function ItemCard({ children, id, image }) {
  return (
    <div className="h-[193px] w-[189px] grid grid-rows-2 border-2 border-[#7B7D80] border-opacity-20 rounded-xl bg-white">
      <div className=" rounded-xl h-full w-full">
        <Image
          alt="contact"
          className="rounded-xl object-cover"
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="flex w-full h-full flex-col justify-between p-4 font-karla text-[#242B33] ">
        <p className="opacity-60 text-xs">{id}</p>
        <p className=" uppercase text-sm font-bold line-clamp-2">{children}</p>
      </div>
    </div>
  );
}
