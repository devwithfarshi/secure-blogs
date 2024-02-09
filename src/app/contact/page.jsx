import Image from "next/image";
import Input from "../../components/Input";

const Contact = () => {
  return (
    <section className="md:px-0 px-5 h-full flex items-center md:flex-row flex-col justify-between">
      <figure>
        <Image
          src={"/images/contact.png"}
          alt="About Page"
          width={500}
          height={500}
        />
      </figure>
      <form className="flex flex-col gap-10 flex-[.7]">
        <Input type={"text"} name="name" placeholder={"Name and Surname"} />
        <Input type={"email"} name="email" placeholder={"Email address"} />
        <Input
          type="text"
          name="phone"
          placeholder={"Phone Number (Optional)"}
        />
        <textarea
          className="h-[20rem] p-5 text-2xl bg-[--bgSoft] rounded-lg outline-none text-[--textSoft] resize-none"
          name="message"
          id="message"
          placeholder="Message"
        ></textarea>
        <button className="btn uppercase bg-[--btn] hover:opacity-70">
          send
        </button>
      </form>
    </section>
  );
};

export default Contact;
