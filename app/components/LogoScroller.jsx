"use client";
import React, { useEffect, useState } from "react";

// Define your logos array outside of the component
const logos = [
  "BMLogo.png",
  "GrillMatesLogo.png",
  "HuntersLogo.png",
  "KaliKetoLogo.png",
  "PalminiLogo.png",
  // ... add more logos if you have them
];

const LogoScroller = ({}) => {
  React.useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  // We initialize animated as false and then set it in useEffect to avoid SSR issues

  return (
    <div className="flex flex-col gap-14 items-center justify-center ">
      <h1 className="lg:col-start-2 font-mont font-bold text-[#115D99] text-4xl">
        Our Partners
      </h1>
      <div className="scroller " direction="right" speed="fast">
        <div className="scroller__inner">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`/${logo}`} // Make sure to put the correct path to your images here
              alt={`${logo}`}
              className=" h-12 md:h-18 lg:h-24 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoScroller;
