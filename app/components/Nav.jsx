import CtaButton from "./CtaButton";
import LinkList from "./LinkList";
import LanguageButton from "./LanguageButton";
import Image from "next/image";
import React from "react";

export default function Nav() {
  return (
    <div className="w-full bg-white grid place-items-center fixed top-0 z-50">
      <div className="flex items-center max-w-7xl w-full px-10 py-8 justify-between ">
        <div className=" w-36">
          <Image
            alt="Logo"
            src="/Logo.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <LinkList />
        <div className="flex  gap-4">
          <CtaButton children="Shop" />
          <LanguageButton />
        </div>
      </div>
    </div>
  );
}
