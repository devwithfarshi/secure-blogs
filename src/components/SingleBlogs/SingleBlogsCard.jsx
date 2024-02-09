import Image from "next/image";
import Link from "next/link";
const SingleBlogs = () => {
  return (
    <>
      <section
        style={{
          border: ".1rem solid #aaaaaa70",
        }}
        className="relative rounded-sm basis-[30%] p-5"
      >
        <figure>
          <Image
            src={"/images/about.png"}
            alt="About Page"
            width={500}
            height={500}
          />
        </figure>
        <h6 className="text-3xl font-semibold">Title</h6>
        <p className="text-xl my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          eligendi dolor voluptatibus nihil vel veritatis!
        </p>
        <Link className="text-2xl underline" href={"/blogs/1"}>
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
