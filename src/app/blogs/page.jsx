import SingleBlogs from "@/components/SingleBlogs/SingleBlogsCard";

const Blogs = () => {
  return (
    <>
      <section
        className="md:px-0 px-5 h-full
      flex flex-wrap items-start gap-5 justify-center
      "
      >
        {[...Array(15)].map((v, i) => {
          return (
            <>
              <SingleBlogs />
            </>
          );
        })}
      </section>
    </>
  );
};

export default Blogs;
