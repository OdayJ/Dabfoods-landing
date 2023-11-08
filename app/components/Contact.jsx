"use client";
import React from "react";
import CtaButton from "./CtaButton";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
export default function Contact() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [state, handleSubmit] = useForm("mzblgndd");
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [showForm, setShowForm] = React.useState(true);
  const handleExpand = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };
  const variants = {
    collapsed: { height: "66%" },
    expanded: { height: "100%" },
  };
  return (
    <div
      id="Contact"
      className="w-full h-fit  flex flex-col lg:flex-row  justify-between gap-8 lg:gap-24 pb-12  items-center rounded-3xl px-8  pt-6"
    >
      <div className="flex flex-col gap-8 items-center justify-between">
        <p className="font-mont font-bold  text-4xl md:text-5xl lg:text-6xl text-[#115D99]">
          Get in touch
        </p>
        <p className="lg:text-lg text-sm md:text-lg font-karla font-bold text-[#242B33] opacity-80">
          One of our members will shortly be with you
        </p>
        <div className=" lg:w-full md:w-2/3 w-full py-12 lg:py-0">
          <Image
            alt="contact"
            src="/ContactImg.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="lg:w-2/3 w-full flex flex-col gap-8"
      >
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input
            type="name"
            name="name"
            id="name"
            className="border-b-2 outline-none  text-[#242B33] opacity-70"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-b-2 outline-none text-[#242B33] opacity-70"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="grid grid-rows-2 ">
          <label>Message</label>
          <motion.textarea
            initial="collapsed"
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={variants}
            transition={{ duration: 0.7 }}
            name="message"
            type="message"
            id="message"
            className="border-b-2 outline-none text-[#242B33] opacity-70 resize-none "
            onClick={handleExpand}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-[#115D99] text-[#F5FAFF] font-karla text-lg font-bold w-fit px-8 h-10 rounded-full hover:opacity-90"
        >
          Send
        </button>
      </form>
    </div>
  );
}
