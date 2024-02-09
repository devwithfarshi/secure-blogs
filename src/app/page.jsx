import Link from "next/link";
import Image from "next/image";
const Home = () => {
  return (
    <section className="md:px-0 px-5 h-full flex items-center md:flex-row flex-col justify-between">
      <div className="text-container flex-1">
        <h1 className="md:text-[9rem] text-[5rem] font-bold">
          Creative Thoughts Agency.
        </h1>
        <p className="md:w-full w-[80%] text-3xl leading-loose my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          dolorem a voluptatum iste sapiente incidunt.
        </p>
        <div className="flex gap-[2rem] ">
          <Link
            href={"/blogs"}
            className="btn bg-[--btn] hover:bg-[--textSoft] hover:text-[--text-dark] text-[--textSoft]"
          >
            Read Blogs
          </Link>
          <Link
            href={"/contact"}
            className="btn bg-[--textSoft] text-[--text-dark] hover:bg-[--btn] hover:text-[--textSoft]"
          >
            Contact
          </Link>
        </div>
        <div className="relative w-[50rem] h-[10rem]">
          <Image
            src={"/images/brands.png"}
            objectFit="contain"
            alt="Hero Image"
            fill
          />
        </div>
      </div>
      <Image
        className="flex-1 bg-transparent"
        width={500}
        height={500}
        src={"/images/hero.gif"}
        alt="Hero Image"
      />
    </section>
  );
};

export default Home;
