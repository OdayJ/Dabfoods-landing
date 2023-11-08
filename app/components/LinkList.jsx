"use client";
import React, { useState } from "react";
import useSmoothScroll from "../Hooks/useSmoothScroll";

export default function LinkList() {
  const scrollToSection = useSmoothScroll();
  const [activeLink, setActiveLink] = useState("top");
  const handleLinkClick = (section) => {
    scrollToSection(section);
    setActiveLink(section);
  };

  const opacityClass = (section) =>
    section === activeLink ? "opacity-100" : "opacity-60";

  return (
    <div className="flex gap-8 text-[#242B33] font-bold font-karla text-lg items-center justify-center">
      <a
        onClick={() => handleLinkClick("top")}
        className={`cursor-pointer ${opacityClass("top")}`}
      >
        Home
      </a>
      <a
        onClick={() => handleLinkClick("About")}
        className={`cursor-pointer ${opacityClass("About")}`}
      >
        About Us
      </a>
      <a
        onClick={() => handleLinkClick("Products")}
        className={`cursor-pointer ${opacityClass("Products")}`}
      >
        Products
      </a>
      <a
        onClick={() => handleLinkClick("Contact")}
        className={`cursor-pointer ${opacityClass("Contact")}`}
      >
        Contacts
      </a>
    </div>
  );
}
