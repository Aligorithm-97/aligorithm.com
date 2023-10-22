"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useRef } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiTypescript,
  SiReact,
  SiSpring,
  SiCss3,
  SiRedux,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { DiJava, DiNodejs } from "react-icons/di";
import { BsFiletypeScss } from "react-icons/bs";
import { BiLogoVuejs } from "react-icons/bi";
function HeroSection() {
  const constraintsRef = useRef(null);
  return (
    <section className="h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-12 h-1/2">
        <div className="col-span-7 place-self-center text-center">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-600">
              ALİ TEMURTAŞ
            </span>
          </h1>
          <h2 className="text-white text-4xl w-auto italic mt-10">
            <TypeAnimation
              sequence={[
                "Information Systems Engineer",
                1000,
                "Full-Stack Developer",
                1000,
                "Life-Long Learner",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
        </div>
        <div className="col-span-5 place-self-center mt-20 lg:mt-15">
          <div className="rounded-full bg-[181818] w-[250px] h-[250px] lg-w-[400px] lg-h-[400px] relative">
            <Image
              className="absolute transform rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/aligorithm.jpg"
              alt="image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 border border-white text-white mt-10">
          Download CV
        </button>
      </div>
      <div className="mt-16 flex justify-center align-middle">
        <motion.div
          className="container w-1/2 lg:w-screen min-w-fit h-52 bg-[#121212] overflow-hidden rounded-lg flex align-middle justify-center"
          ref={constraintsRef}
        >
          <motion.div
            className="item self-center flex justify-center items-center text-4xl w-12 h-12  rounded-xl bg-orange-500 m-2"
            drag
            dragConstraints={constraintsRef}
          >
            <AiFillHtml5 />
          </motion.div>
          <motion.div
            className="item self-center flex justify-center items-center text-4xl w-12 h-12  rounded-xl bg-white m-2"
            drag
            dragConstraints={constraintsRef}
          >
            <SiTypescript />
          </motion.div>
          <motion.div
            className="item self-center flex justify-center items-center text-4xl w-12 h-12  rounded-xl bg-blue-500 m-2"
            drag
            dragConstraints={constraintsRef}
          >
            <SiReact />
          </motion.div>
          <motion.div
            className="item self-center flex justify-center items-center text-4xl w-12 h-12  rounded-xl bg-white m-2"
            drag
            dragConstraints={constraintsRef}
          >
            <DiJava />
          </motion.div>
          <motion.div
            className="item self-center flex justify-center items-center text-4xl w-12 h-12  rounded-xl bg-green-500 m-2"
            drag
            dragConstraints={constraintsRef}
          >
            <SiSpring />
          </motion.div>
          <motion.div
            className="item self-center flex justify-center items-center text-4xl w-12 h-12  rounded-xl bg-white m-2"
            drag
            dragConstraints={constraintsRef}
          >
            <SiCss3 />
          </motion.div>
          <motion.div
            className="item self-center flex justify-center items-center text-4xl w-12 h-12  rounded-xl bg-white m-2"
            drag
            dragConstraints={constraintsRef}
          >
            <BsFiletypeScss />
          </motion.div>
          <motion.div
            className="item self-center flex justify-center items-center text-4xl w-12 h-12  rounded-xl bg-white m-2"
            drag
            dragConstraints={constraintsRef}
          >
            <DiNodejs />
          </motion.div>
          <motion.div
            className="item self-center flex justify-center items-center text-4xl w-12 h-12  rounded-xl bg-white m-2"
            drag
            dragConstraints={constraintsRef}
          >
            <SiRedux />
          </motion.div>
          <motion.div
            className="item self-center flex justify-center items-center text-4xl w-12 h-12  rounded-xl bg-white m-2"
            drag
            dragConstraints={constraintsRef}
          >
            <BiLogoVuejs />
          </motion.div>
          <motion.div
            className="item self-center flex justify-center items-center text-4xl w-12 h-12  rounded-xl bg-white m-2"
            drag
            dragConstraints={constraintsRef}
          >
            <SiJavascript />
          </motion.div>
          <motion.div
            className="item self-center flex justify-center items-center text-4xl w-12 h-12  rounded-xl bg-white m-2"
            drag
            dragConstraints={constraintsRef}
          >
            <SiTailwindcss />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
