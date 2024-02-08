import Links from "./Links/Links";
import Link from "next/link";
import ThemeIcon from "./ThemeIcon/ThemeIcon";

const Header = () => {
  return (
    <header className="border-b py-5">
      <nav className="container flex justify-between items-center">
        <div className="text-[3rem] uppercase font-semibold">
          <Link href={"/"}>Secure Blog</Link>
        </div>
        <ul className="flex items-center gap-20 ">
          <Links />
          <ThemeIcon />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
