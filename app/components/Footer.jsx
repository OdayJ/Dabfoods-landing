import React from "react";
import Image from "next/image";
import { BsShop, BsInstagram, BsFacebook } from "react-icons/bs";
import { BiSolidMap } from "react-icons/bi";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-[#115D99] w-full grid place-items-center h-fit gap-2 py-10 mt-36">
      <div className="flex w-full  gap-12 items-center max-w-7xl  justify-start pb-12 lg:px-48 px-12 pt-12">
        <div className=" w-[140px] self-start hidden lg:block">
          <Image
            className="hidden lg:block"
            src="/FooterLogo.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="flex flex-col gap-8 self-start">
          <div className=" w-[80px] self-start lg:hidden ">
            <Image
              className="lg:hidden"
              src="/FooterLogo.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <h1 className="text-[#F5FAFF] text-xl font-medium ">Information</h1>
          <div className="flex gap-2">
            <BiSolidMap size={24} fill="#f5faff" />
            <p className="text-[#f5faff]">
              1st floor, Jamous plaza,
              <br /> Airport Road, Amman
            </p>
          </div>
          <div className="flex gap-2">
            <AiFillPhone size={24} fill="#f5faff" />
            <p className="text-[#f5faff]">+962799984303</p>
          </div>
          <div className="flex gap-2 ">
            <AiOutlineClockCircle size={24} fill="#f5faff" />
            <p className="text-[#f5faff]">
              Showroom Hours : 10:00 - 20:00, <br className="lg:hidden" />
              Saturday to Friday.
            </p>
          </div>
          <div className="flex gap-2">
            <AiOutlineClockCircle size={24} fill="#f5faff" />
            <p className="text-[#f5faff]"> Management Hours : 9:00 - 17:00</p>
          </div>
        </div>
        <div className=" flex-col gap-4 self-start hidden lg:flex ">
          <h1 className="text-[#F5FAFF] text-xl font-medium">Links</h1>
          <ul className="flex flex-col gap-8 text-[#F5FAFF] font-regular font-karla text-sm ">
            <li>Terms of service</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Delivery & shipping</li>
          </ul>
        </div>
      </div>
      <div className=" flex-col gap-4 self-start flex lg:hidden w-full px-12 pb-12">
        <h1 className="text-[#F5FAFF] text-xl font-medium">Links</h1>
        <ul className="grid grid-cols-2 gap-8 text-[#F5FAFF] font-regular font-karla  ">
          <li>Terms of service</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
          <li>Delivery & shipping</li>
        </ul>
      </div>
      <ul className="flex gap-8 pb-8">
        <a
          target="_blank"
          href="https://www.facebook.com/dabfoodsjordan/"
          className="cursor-pointer hover:opacity-80"
        >
          <BsFacebook size={24} fill="#f5faff" />
        </a>
        <a className="cursor-pointer hover:opacity-80">
          <BsShop size={24} fill="#f5faff" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/dabfoodsjo/?hl=en-gb"
          className="cursor-pointer hover:opacity-80"
        >
          <BsInstagram size={24} fill="#f5faff" />
        </a>
      </ul>
      <p className="text-[#F5FAFF] text-xl font-karla font-bold">We accept</p>
      <div className=" w-[240px] ">
        <Image
          src="/Payments.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="h-0.5 w-full bg-white opacity-50 my-4"></div>
      <p className="text-[#f5faff] opacity-80 text-xs">
        All rights reserved. Dabfoods © 2023
      </p>
    </div>
  );
}
