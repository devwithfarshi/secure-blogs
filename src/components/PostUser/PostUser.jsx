import Image from "next/image";

const PostUser = () => {
  return (
    <>
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
    </>
  );
};

export default PostUser;
