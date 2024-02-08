"use client";
import { BsMoonStarsFill } from "react-icons/bs";

const ThemeIcon = () => {
  const themeHandler = () => {
    document.querySelector("html").classList.toggle("dark");
  };
  return (
    <div className="cursor-pointer" onClick={themeHandler}>
      <BsMoonStarsFill className="text-3xl dark:text-[#ffffff] text-[#32174D]" />
    </div>
  );
};

export default ThemeIcon;
