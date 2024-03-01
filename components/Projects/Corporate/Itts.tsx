import Image from "next/image";
import React from "react";

function Itts() {
  return (
    <div className="flex justify-center flex-col items-center text-center">
      <h2 className="text-4xl">ITTS</h2>
      <a href="https://www.itoolsinnova.com/" target="_blank" rel="noreferrer">
        <Image
          className="flex align-middle justify-center mt-10 mb-10 rounded-lg lg:w-full"
          src="/images/itts.png"
          alt="image"
          width={500}
          height={250}
        />
      </a>
      <p>ITTs</p>
    </div>
  );
}

export default Itts;
