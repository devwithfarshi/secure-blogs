import Image from "next/image";
import Link from "next/link";
const SingleBlogs = ({ post }) => {
  return (
    <>
      <section
        style={{
          border: ".1rem solid #aaaaaa70",
        }}
        className="relative rounded-sm basis-[30%] p-5"
      >
        {post.image && (
          <figure className="w-[100%] h-[50rem] relative mb-5">
            <Image
              src={post.image}
              alt={post.title.slice(0, 10)}
              fill
              objectFit="contain"
            />
          </figure>
        )}
        <h6 className="text-3xl font-semibold">{post.title}</h6>
        <p className="text-xl my-5">{post.body.slice(0, 15)}</p>
        <Link className="text-2xl underline" href={`/blogs/${post._id}`}>
          Read More
        </Link>
        <span className="inline-block absolute top-[50%] text-2xl font-bold rotate-90 right-[-5%]">
          Feb 14 2024
        </span>
      </section>
    </>
  );
};

export default SingleBlogs;
