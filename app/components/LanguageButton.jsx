"use client";
import React from "react";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";

export default function LanguageButton() {
  const [language, setLanguage] = React.useState("English");
  const controls = useAnimation();
  const [isToggled, setIsToggled] = React.useState(false);

  const toggleRotation = () => {
    // Toggle the state
    setIsToggled(!isToggled);
    // Start the animation
    controls.start({
      rotate: isToggled ? 0 : 180,
      transition: { duration: 0.5 },
    });
  };
  return (
    <div className="flex w-auto gap-2 items-center text-[#242B33] text-lg font-karla font-bold">
      <CiGlobe size={21} />
      <p>{language}</p>
      <motion.button animate={controls} onClick={toggleRotation}>
        <MdOutlineKeyboardArrowDown size={21} />
      </motion.button>
    </div>
  );
}
