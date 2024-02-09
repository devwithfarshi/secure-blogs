import Image from "next/image";
const About = () => {
  return (
    <section className="md:px-0 px-5 h-full flex items-center md:flex-row flex-col justify-between">
      <div className="flex-[.7]">
        <div className="text-[--btn] text-3xl font-semibold">About Agency</div>
        <h2 className="text-[5rem] font-semibold my-10 leading-tight capitalize">
          We create digital ideas that are bigger, bolder, braver and better.
        </h2>
        <p className="mb-10 text-justify w-[80%] text-2xl capitalize">
          we careate digital ideas that are bigger, bolder, braver and better.
          We belive in good ideas fiexibility and precission. We&apos;re
          world&apos;s Our Special Team best consulting & finance solution
          provider. Wide range of web and softare develoopment services.
        </p>
        <div className="flex items-center justify-between w-[80%]">
          <div className="text-center">
            <span className="text-[--btn] text-[3rem] font-semibold">10K+</span>
            <p className="text-2xl">Year of experience</p>
          </div>
          <div className="text-center">
            <span className="text-[--btn] text-[3rem] font-semibold">
              234K+
            </span>
            <p className="text-2xl">People reached</p>
          </div>
          <div className="text-center">
            <span className="text-[--btn] text-[3rem] font-semibold">5K+</span>
            <p className="text-2xl">Services and plugins</p>
          </div>
        </div>
      </div>
      <figure>
        <Image
          src={"/images/about.png"}
          alt="About Page"
          width={500}
          height={500}
        />
      </figure>
    </section>
  );
};

export default About;
