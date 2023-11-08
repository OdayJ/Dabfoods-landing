import CtaButton from "./CtaButton";
import LinkList from "./LinkList";
import LanguageButton from "./LanguageButton";
import Image from "next/image";
import React from "react";

export default function Nav() {
  return (
    <div className="flex items-center max-w-7xl w-full px-10 py-8 justify-between fixed top-0 z-50 bg-white">
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
  );
}
