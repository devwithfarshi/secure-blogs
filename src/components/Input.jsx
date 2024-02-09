const Input = ({ type, name, placeholder }) => {
  return (
    <>
      <input
        className="h-[5rem] px-5 text-2xl bg-[--bgSoft] rounded-lg outline-none text-[--textSoft]"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
