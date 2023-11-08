"use client";

import React from "react";
import Image from "next/image";

export default function Careem() {
  const redirectToStore = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the device is an iOS device
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // Redirect to Apple App Store
      window.location.href =
        "https://apps.apple.com/us/app/careem-rides-food-more/id592978487";
    }
    // Check if the device is an Android device
    else if (/android/i.test(userAgent)) {
      // Redirect to Google Play Store
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.careem.acma";
    } else {
      // If device is neither iPhone nor Android, perhaps redirect to a website or show an alert
      window.location.href =
        "https://apps.apple.com/us/app/careem-rides-food-more/id592978487";
    }
  };
  return (
    <div className=" w-full h-fit bg-[#F5FAFF] flex flex-col lg:flex-row  justify-between gap-8 pb-12  items-center rounded-3xl px-8 lg:px-20 pt-6">
      <div className=" w-64  lg:w-80">
        <Image
          alt="careem"
          src="/Careem.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="flex flex-col gap-8">
        <p className="hidden lg:block text-3xl lg:text-[50px] lg:leading-[72.5px] font-bold font-mont text-[#115D99]">
          Anywhere, at all times
        </p>
        <p className="hidden lg:block font-karla font-medium opacity-50 text-[#242B33]">
          We deliver to you wherever you are. Head to our Careem store to find
          out more!
        </p>
        <button
          onClick={redirectToStore}
          className="bg-[#115D99] text-[#F5FAFF] font-karla text-lg font-bold w-fit px-8 h-14 md:text-lg md:h-10 rounded-full hover:opacity-90"
        >
          Careem Store
        </button>
      </div>
    </div>
  );
}
