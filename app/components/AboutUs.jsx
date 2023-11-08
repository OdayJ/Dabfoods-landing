"use client";
import React from "react";
import CtaButton from "./CtaButton";
import Image from "next/image";
import useSmoothScroll from "../Hooks/useSmoothScroll";

export default function AboutUs() {
  const scrollToSection = useSmoothScroll();
  return (
    <>
      <div className="grid lg:grid-cols-2 h-full w-full gap-12 lg:gap-x-12">
        <p
          id="About"
          className="lg:col-start-2 font-karla font-medium bg-[#F5FAFF] text-[#115D99] w-fit rounded-xl px-8 py-1 lg:self-start "
        >
          About us
        </p>
        <h1 className="lg:col-start-2 font-mont font-bold text-[#242B33] text-4xl">
          Dabfoods
        </h1>
        <div className="lg:col-start-1 lg:row-span-3 lg:row-start-2">
          <Image
            alt="Showroom"
            className="rounded-3xl"
            src="/Showroom.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="flex flex-col h-fit  lg:w-[540px] lg:max-w-[540px]">
          <p className="font-karla font-medium text-[#242B33] opacity-80">
            Welcome to Disruptive Authentic Brands “DAB Foods”, your number one
            destination for all your gourmet needs.
            <br />
            <br />
            Founded in 2021, DAB Foods - Distributors of Sysco and Hunter’s
            Foods - is Jordan's first startup dedicated to delivering the finest
            American and International gourmet ingredients while enjoying
            the most unique shopping experience in town.
            <br />
            <br />
            At DAB Foods, our customers’ satisfaction is a top priority, which
            is reflected through our motto “Wasta Free Quality” which expresses
            our dedication to provide the best and highest quality products to
            all our customers equally, we guarantee that you always get what we
            promise without compromising quality.
            <br />
            <br />
            DAB Foods brings recognized brands you can trust, Quality your
            customers will notice and supply that doesn’t run dry.
          </p>
        </div>

        <div
          onClick={() => scrollToSection("Contact")}
          className="lg:col-start-2"
        >
          <CtaButton>Contact us</CtaButton>
        </div>
      </div>
    </>
  );
}
