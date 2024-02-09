"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLinks = ({ title, path, setNavOpen }) => {
  const pathName = usePathname();
  return (
    <>
      <Link
        onClick={() => setNavOpen(false)}
        href={path}
        className={`uppercase inline-block text-2xl font-medium transition-all duration-150 py-2 px-4 rounded-3xl
        hover:dark:bg-[--bg-light] hover:dark:text-[--text-dark] hover:bg-[--bg-dark] hover:text-[--text]
        ${
          pathName === path &&
          "dark:bg-[--bg-light] dark:text-[--text-dark] bg-[--bg-dark] text-[--text]"
        }`}
      >
        {title}
      </Link>
    </>
  );
};

export default NavLinks;
