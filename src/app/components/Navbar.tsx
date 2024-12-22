"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useWindowSize } from "react-use";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();
  const path = usePathname();
  console.log(path);
  return size.width > 640 ? (
    <nav className="h-20 z-10 flex justify-between bg-gradient-to-b from-secondry ">
      <Link className="hover:skew-x-12 duration-100" href="/">
        <img src="/diestaLogo.svg" alt="Logo" className="max-h-12 m-4" />
      </Link>
      <div className="flex justify-between gap-4 mr-4 mt-auto mb-auto ">
        <Link
          className={
            "hover:-translate-y-1 duration-100 font-bold " +
            `${
              path == "/"
                ? "text-white"
                : "bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent"
            }`
          }
          href="/"
        >
          <span>Home</span>
        </Link>
        <Link
          className={
            "hover:-translate-y-1 duration-100 font-bold " +
            `${
              path == "/events"
                ? "text-white"
                : "bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent"
            }`
          }
          href="/events"
        >
          <span>Events</span>
        </Link>
        <Link
          className={
            "hover:-translate-y-1 duration-100 font-bold " +
            `${
              path == "/rulebook"
                ? "text-white"
                : "bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent"
            }`
          }
          href="/rulebook"
        >
          <span>Rulebook</span>
        </Link>
        <Link
          className={
            "hover:-translate-y-1 duration-100 font-bold " +
            `${
              path == "/calender"
                ? "text-white"
                : "bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent"
            }`
          }
          href="/calender"
        >
          <span>Calender</span>
        </Link>
        <Link
          className={
            "hover:-translate-y-1 duration-100 font-bold " +
            `${
              path == "/sponsers"
                ? "text-white"
                : "bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent"
            }`
          }
          href="/sponsers"
        >
          <span>Sponsers</span>
        </Link>
        <Link
          className={
            "hover:-translate-y-1 duration-100 font-bold " +
            `${
              path == "/team"
                ? "text-white"
                : "bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent"
            }`
          }
          href="/team"
        >
          <span>Team</span>
        </Link>
      </div>
    </nav>
  ) : (
    <nav className="h-20 z-20 flex justify-between bg-gradient-to-b from-secondry">
      <Link className="hover:skew-x-12 duration-100" href="/">
        <img src="/diestaLogo.svg" alt="Logo" className="max-h-12 m-4" />
      </Link>
      <div
        className={
          "flex z-20 flex-col justify-items-center h-max duration-150 " +
          `${
            isOpen
              ? " w-80 rounded-lg bg-gradient-to-b from-black  to-secondry"
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
          <div className=" flex text-xl flex-col justify-items-center gap-4 mr-4 m-4">
            <Link
              className="hover:translate-x-2 duration-100 flex justify-between"
              href="/"
            >
              <div className="font-bold bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent">
                Home
              </div>
              {path == "/" ? (
                <div className="w-4 content-center">
                  <img src="/diestalogo.svg" alt="logo" />
                </div>
              ) : null}
            </Link>
            <Link
              className="hover:translate-x-2 duration-100 flex justify-between"
              href="/events"
            >
              <div className="font-bold bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent">
                Events
              </div>
              {path == "/events" ? (
                <div className="w-4 content-center">
                  <img src="/diestalogo.svg" alt="logo" />
                </div>
              ) : null}
            </Link>
            <Link
              className="hover:translate-x-2 duration-100 flex justify-between"
              href="/rulebook"
            >
              <div className="font-bold bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent">
                Rulebook
              </div>
              {path == "/rulebook" ? (
                <div className="w-4 content-center">
                  <img src="/diestalogo.svg" alt="logo" />
                </div>
              ) : null}
            </Link>
            <Link
              className="hover:translate-x-2 duration-100 flex justify-between"
              href="/calender"
            >
              <div className="font-bold bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent">
                Calender
              </div>
              {path == "/calender" ? (
                <div className="w-4 content-center">
                  <img src="/diestalogo.svg" alt="logo" />
                </div>
              ) : null}
            </Link>
            <Link
              className="hover:translate-x-2 duration-100 flex justify-between"
              href="/sponsers"
            >
              <div className="font-bold bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent">
                Sponsers
              </div>
              {path == "/sponsers" ? (
                <div className="w-4 content-center">
                  <img src="/diestalogo.svg" alt="logo" />
                </div>
              ) : null}
            </Link>
            <Link
              className="hover:translate-x-2 duration-100 flex justify-between"
              href="/team"
            >
              <div className="font-bold bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent">
                Team
              </div>
              {path == "/team" ? (
                <div className="w-4 content-center">
                  <img src="/diestalogo.svg" alt="logo" />
                </div>
              ) : null}
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
