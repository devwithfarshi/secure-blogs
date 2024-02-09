import Image from "next/image";

const SingleBlog = () => {
  return (
    <>
      <section className="md:px-0 py-10 px-5 h-full flex md:flex-row flex-col gap-20">
        <figure>
          <Image
            src={"/images/about.png"}
            alt="About Page"
            width={500}
            height={500}
            objectFit="contain"
          />
        </figure>
        <div>
          <h2 className="text-[4rem] font-semibold">Title</h2>
          <div className="flex items-center gap-5 my-10 text-center">
            <Image
              src={"/images/about.png"}
              alt="About Page"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h6 className="text-2xl text-[#aaa]">Author</h6>
              <p className="text-2xl ">Terry Jefferson</p>
            </div>
            <div>
              <h6 className="text-2xl text-[#aaa]">Published</h6>
              <p className="text-2xl ">Date of published</p>
            </div>
          </div>
          <p className="text-3xl mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            eligendi dolor voluptatibus nihil vel veritatis!
          </p>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
