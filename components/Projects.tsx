"use client";
import Image from "next/image";
import React from "react";
import Title from "./Title";

function Projects() {
  return (
    <section id="projects" className="h-full text-white lg:h-screen">
      <Title>Projects</Title>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-6 place-self-center text-center mt-20 lg:mt-15 lg:mr-10">
          <h2 className="text-4xl">ITOOLS</h2>
          <Image
            className="flex align-middle justify-center mt-10 mb-10 rounded-lg"
            src="/images/itools.png"
            alt="image"
            width={1000}
            height={500}
          />
          <h3>
            I developed a full stack web application called ITOOLS for Innova
            Service Delivery Unit all by myself. I did everything from scratch.
            By saying scratch I mean from designing pages in Figma all the way
            up to the deployment and maintenance. I used React for the frontend
            side, Express.js(Nodejs) for the backend side. I also used the SQL
            server as a database and IIS for the deployment process. ITOOLS has
            been in use since January 2023. It has over 100 users and most of
            them are using the system daily.
          </h3>
        </div>
        <div className="col-span-6 place-self-center text-center mt-20 lg:mt-15 lg:ml-10">
          <h1 className="text-4xl">ITTS</h1>
          <Image
            className="flex align-middle justify-center mt-10 mb-10 rounded-lg"
            src="/images/itools.png"
            alt="image"
            width={1000}
            height={500}
          />
          <h3>
            I developed a full stack web application called ITOOLS for Innova
            Service Delivery Unit all by myself. I did everything from scratch.
            By saying scratch I mean from designing pages in Figma all the way
            up to the deployment and maintenance. I used React for the frontend
            side, Express.js(Nodejs) for the backend side. I also used the SQL
            server as a database and IIS for the deployment process. ITOOLS has
            been in use since January 2023. It has over 100 users and most of
            them are using the system daily.
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Projects;
