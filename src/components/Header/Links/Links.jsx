import Link from "next/link";

const Links = () => {
  const links = [
    {
      title: "home",
      path: "/",
    },
    {
      title: "about",
      path: "/about",
    },
    {
      title: "blogs",
      path: "/blogs",
    },
    {
      title: "contact",
      path: "/contact",
    },
  ];
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.path}
          className="uppercase inline-block text-3xl font-medium transition-all duration-150 hover:text-[royalblue]"
        >
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default Links;
