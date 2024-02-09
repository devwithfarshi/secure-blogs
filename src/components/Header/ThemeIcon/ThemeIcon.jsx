"use client";
import { BsMoonStarsFill } from "react-icons/bs";

const ThemeIcon = () => {
  const themeHandler = () => {
    document.querySelector("html").classList.toggle("dark");
  };
  return (
    <div className="cursor-pointer" onClick={themeHandler}>
      <BsMoonStarsFill className="text-3xl dark:text-[--text] text-[--bg-dark]" />
    </div>
  );
};

export default ThemeIcon;
