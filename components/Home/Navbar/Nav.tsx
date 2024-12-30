"use client";
import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

//define props type
type Props = {
  openNav: () => void;
};
const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [navBg]);
  return (
    <div
      className={` fixed ${
        navBg ? "bg-[#240b39]" : "fixed"
      } w-full h-[12vh] z-[10] flex items-center  transition-all duration-200 ease-in-out`}
    >
      <div className="flex items-center justify-between w-[95%] mx-auto sm:w-[90%] xl-w-[80%]">
        {/* Logo */}
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={160}
          height={160}
          className="ml-[-1.5rem] sm:ml-0"
        />

        {/* Nav */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navLink) => {
              return (
                <a key={navLink.id} href={navLink.url}>
                  <p className="nav__link">{navLink.label}</p>
                </a>
              );
            })}
          </div>
          {/* Button */}
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
              Hire Me
            </button>
            {/* Burger */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
