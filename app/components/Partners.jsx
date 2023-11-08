import React from "react";

export default function Partners() {
  return (
    <div className="flex max-w-[1230px] gap-28 items-center justify-center flex-col">
      <p className="font-bold font-mont text-5xl text-[#115D99]">
        Your favourite brands all in one place
      </p>
      <div className="gap-8 flex flex-col ">
        <div className="grid grid-cols-4 place-items-center gap-4">
          <img src="HuntersLogo.png" className=" h-[70px]" />
          <img src="KaliKetoLogo.png" className=" h-[70px]" />
          <img src="RendarsLogo.png" className=" h-[70px]" />
          <img src="PalminiLogo.png" className=" h-[70px]" />
        </div>
        <div className="grid grid-cols-3 place-items-center gap-4">
          <img src="PastaLogo.png" className=" h-[170px]" />
          <img src="GrillMatesLogo.png" className=" h-[170px]" />
          <img src="BMLogo.png" className=" h-[170px]" />
        </div>
      </div>
    </div>
  );
}
