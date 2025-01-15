"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const Scroller = () => {
  return (
    <button
      onClick={scrollToTop}
      className={` fixed bottom-4 md:right-4 right-1 md:p-3 p-2 rounded-full md:hidden z-50 bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group`}
    >
      <div className="relative w-8 h-8 transform transition-transform group-hover:-translate-y-1">
        <Image
          src="/rocket (2).png"
          alt="Scroll to top"
          fill
          className="object-contain"
        />
      </div>
    </button>
  );
};

export default Scroller;
