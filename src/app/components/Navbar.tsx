"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useWindowSize } from "react-use";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();
  return size.width > 640 ? (
    <nav className="h-20 flex justify-between bg-gradient-to-b from-black text-white">
      <Link className="hover:skew-x-12 duration-100" href="/">
        <img src="/diestaLogo.svg" alt="Logo" className="max-h-12 m-4" />
      </Link>
      <div className="flex justify-between gap-4 mr-4 mt-auto mb-auto">
        <Link className="hover:-translate-y-1 duration-100" href="/events">
          <span>Events</span>
        </Link>
        <Link className="hover:-translate-y-1 duration-100" href="/rulebook">
          <span>Rulebook</span>
        </Link>
        <Link className="hover:-translate-y-1 duration-100" href="/calender">
          <span>Calander</span>
        </Link>
        <Link className="hover:-translate-y-1 duration-100" href="/sponsers">
          <span>Sponsers</span>
        </Link>
        <Link className="hover:-translate-y-1 duration-100" href="/team">
          <span>Team</span>
        </Link>
      </div>
    </nav>
  ) : (
    <nav className="h-20 flex justify-between bg-gradient-to-b from-black">
      <Link href="/">
        <img src="/diestaLogo.svg" alt="Logo" className="max-h-12 m-4" />
      </Link>
      <div
        className={
          "flex flex-col justify-items-end h-max duration-150 " +
          `${
            isOpen
              ? " bg-gradient-to-b from-primary via-tertiary to-quaternary from-black text-white"
              : ""
          } `
        }
      >
        <button
          className="text-white p-4 text-right hover:translate-x-2 duration-100"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        {isOpen ? (
          <div className="flex flex-col gap-4 mr-4 m-4">
            <Link className="hover:translate-x-2 duration-100" href="/events">
              <span>Events</span>
            </Link>
            <Link className="hover:translate-x-2 duration-100" href="/rulebook">
              <span>Rulebook</span>
            </Link>
            <Link className="hover:translate-x-2 duration-100" href="/calender">
              <span>Calander</span>
            </Link>
            <Link className="hover:translate-x-2 duration-100" href="/sponsers">
              <span>Sponsers</span>
            </Link>
            <Link className="hover:translate-x-2 duration-100" href="/team">
              <span>Team</span>
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
