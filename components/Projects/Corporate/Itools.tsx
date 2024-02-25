import Image from "next/image";
import React from "react";

function Itools() {
  return (
    <div className="flex justify-center flex-col items-center text-center">
      <h2 className="text-4xl">ITOOLS</h2>
      <a href="https://www.itoolsinnova.com/" target="_blank" rel="noreferrer">
        <Image
          className="flex align-middle justify-center mt-10 mb-10 rounded-lg lg:w-full"
          src="/images/itools.png"
          alt="image"
          width={500}
          height={250}
        />
      </a>
      <p>
        I developed a full stack web application called ITOOLS for Innova
        Service Delivery Unit all by myself. I did everything from scratch. By
        saying scratch I mean from designing pages in Figma all the way up to
        the deployment and maintenance. I used React for the frontend side,
        Express.js(Nodejs) for the backend side. I also used the SQL server as a
        database and IIS for the deployment process. ITOOLS has been in use
        since January 2023. It has over 100 users and most of them are using the
        system daily.
      </p>
    </div>
  );
}

export default Itools;
