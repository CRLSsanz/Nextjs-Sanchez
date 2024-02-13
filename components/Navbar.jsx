"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav
        className={`w-10 fixed bottom-0 left-1/2 -ml-5 flex justify-center ${
          navbar
            ? "bg-transparent z-50 transform transition-all duration-300 "
            : " bg-gray-900/90 "
        }  `}
      >
        <button
          className=" text-gray-100 active:bg-none active:bg-transparent active:animate-ping focus:outline-none"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <svg
              fill="currentColor"
              className="py-2"
              width="25px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m14.41 3.27-.82-.94L8 7.17 2.41 2.33l-.82.94L7.05 8l-5.46 4.73.82.94L8 8.83l5.59 4.84.82-.94L8.95 8l5.46-4.73z" />
            </svg>
          ) : (
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M5 15H19M5 9H19"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={`fixed top-0 z-0 flex flex-col justify-center text-center text-gray-200 bg-gray-900/70 w-full h-full
        ${
          navbar
            ? " opacity-100 pointer-events-auto "
            : "opacity-0 pointer-events-none transform transition-all duration-1000 "
        }`}
      >
        <div className="h-[350px] flex flex-col justify-evenly text-teal-400 font-semibold">
          <div
            className={`bg-[#333] flex items-center justify-center w-full transform transition-all duration-500 ${
              navbar ? " h-16 " : " h-0 "
            } `}
            onClick={() => setNavbar(!navbar)}
          >
            <Link href="/">Home</Link>
          </div>

          <div
            className={`bg-[#333] flex items-center justify-center w-full transform transition-all duration-500 ${
              navbar ? " h-16 " : " h-0 "
            } `}
            onClick={() => setNavbar(!navbar)}
          >
            <Link href="/repair">Reparacion</Link>
          </div>

          <div
            className={`bg-[#333] flex items-center justify-center w-full transform transition-all duration-500 ${
              navbar ? " h-16 " : " h-0 "
            } `}
            onClick={() => setNavbar(!navbar)}
          >
            <Link href="/tecnologia">Tecnologia</Link>
          </div>

          <div
            className={`bg-[#333] flex items-center justify-center w-full transform transition-all duration-500 ${
              navbar ? " h-16 " : " h-0 "
            } `}
            onClick={() => setNavbar(!navbar)}
          >
            <Link href="/clases">Clases</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
