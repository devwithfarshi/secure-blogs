"use client";
import Links from "./Links/Links";
import Link from "next/link";
import ThemeIcon from "./ThemeIcon/ThemeIcon";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="border-b py-5 ">
      <nav className="container md:p-0 px-3 flex justify-between items-center ">
        <div className="text-[3rem] uppercase font-semibold">
          <Link href={"/"}>Secure Blog</Link>
        </div>
        <ul
          className={`transition-all duration-150 flex items-center gap-14 md:flex-row md:relative md:right-0 md:top-0 md:translate-y-[-0%] flex-col absolute  top-[50%] translate-y-[-50%] right-0  ${
            navOpen
              ? "bg-[--bgSoft] justify-center px-[2rem] h-[100vh]"
              : "right-[-50%]"
          }`}
        >
          <Links setNavOpen={setNavOpen} />
          <ThemeIcon />
        </ul>
        <FaBarsStaggered
          onClick={() => {
            setNavOpen(!navOpen);
          }}
          className="md:hidden block text-[3rem] z-10"
        />
      </nav>
    </header>
  );
};

export default Header;
