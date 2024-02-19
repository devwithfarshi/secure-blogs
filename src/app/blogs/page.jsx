import SingleBlogs from "@/components/SingleBlogs/SingleBlogsCard";
import { getPosts } from "@/lib/data";

const Blogs = async () => {
  const posts = await getPosts();
  return (
    <>
      <section
        className="md:px-0 px-5 h-full
      flex flex-wrap items-start gap-5 justify-center
      "
      >
        {posts?.length > 0 ? (
          posts.map((post, i) => {
            return (
              <>
                <SingleBlogs key={post.slug} post={post} />
              </>
            );
          })
        ) : (
          <>
            <h3 className="text-center font-semibold text-3xl">
              No posts in database!
            </h3>
          </>
        )}
      </section>
    </>
  );
};

export default Blogs;
