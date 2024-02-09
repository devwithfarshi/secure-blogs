"use client";
import { Circles } from "react-loader-spinner";

const loading = () => {
  return (
    <section className="h-full flex items-center justify-center">
      <Circles
        height="80"
        width="80"
        color="royalblue"
        ariaLabel="circles-loading"
        // wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </section>
  );
};

export default loading;
