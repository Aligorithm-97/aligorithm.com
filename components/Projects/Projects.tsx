"use client";
import React from "react";
import Title from "../Title";
import Carousel from "react-bootstrap/Carousel";
import Itools from "./Corporate/Itools";
import Itts from "./Corporate/Itts";
function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 mb-28 sm:mb-40 text-white min-h-screen h-fit md:mt-0 mt-16"
    >
      <Title>Projects</Title>
      <Carousel fade>
        <Carousel.Item className="mb-5">
          <Itools />
        </Carousel.Item>
        <Carousel.Item className="mb-5">
          <Itts />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Projects;
