import NavLinks from "./NavLinks";
const Links = ({ setNavOpen }) => {
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
      title: "create post",
      path: "/createpost",
    },
    {
      title: "contact",
      path: "/contact",
    },
  ];

  const isAdmin = true;
  const session = true;
  return (
    <>
      {links.map((link) => (
        <>
          <NavLinks
            setNavOpen={setNavOpen}
            key={link.title}
            title={link.title}
            path={link.path}
          />
        </>
      ))}
      {session ? (
        <>
          {isAdmin && (
            <NavLinks setNavOpen={setNavOpen} title={"admin"} path={"/admin"} />
          )}
          <button
            className={`uppercase inline-block text-2xl font-medium transition-all duration-150 py-2 px-4 rounded dark:bg-[--bg-light] dark:text-[--text-dark] bg-[--bg-dark] text-[--text] hover:opacity-70`}
          >
            Log out
          </button>
        </>
      ) : (
        <>
          <NavLinks setNavOpen={setNavOpen} title={"Login"} path={"/login"} />
        </>
      )}
    </>
  );
};

export default Links;
