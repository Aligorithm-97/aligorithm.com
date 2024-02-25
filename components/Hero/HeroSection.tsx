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
  SiNextdotjs,
  //SiAngular,
  SiPostgresql,
  SiMysql,
  SiMicrosoftsqlserver,
  SiMongodb,
  //SiNginx,
  SiDocker,
} from "react-icons/si";
import { DiJava, DiNodejs } from "react-icons/di";
import { BsFiletypeScss } from "react-icons/bs";
import { BiLogoVuejs } from "react-icons/bi";
import HeroItem from "./HeroItem";

const icons = [
  <SiJavascript key={1} />,
  <SiTypescript key={2} />,
  <SiReact key={3} />,
  <SiRedux key={4} />,
  <SiNextdotjs key={5} />,
  <BiLogoVuejs key={6} />,
  <DiNodejs key={8} />,
  <DiJava key={9} />,
  <SiSpring key={10} />,
  <AiFillHtml5 key={11} />,
  <SiCss3 key={12} />,
  <BsFiletypeScss key={13} />,
  <SiTailwindcss key={14} />,
  <SiPostgresql key={15} />,
  <SiMysql key={16} />,
  <SiMicrosoftsqlserver key={17} />,
  <SiMongodb key={18} />,
  <SiDocker key={19} />,
];
function HeroSection() {
  const constraintsRef = useRef(null);
  return (
    <section id="landing" className="max-h-screen h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-12 h-1/2 pt-14">
        <div className="col-span-7 place-self-center text-center">
          <h1 className="text-white mb-4 text-2xl  lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
              ALİ TEMURTAŞ
            </span>
          </h1>
          <h2 className="text-white lg:text-4xl text-xl w-auto italic mt-10 ">
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
              priority
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
        <a
          className="px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-white hover:text-black border border-white text-white mt-16 lg:mt-0"
          href="/cvtrialAli.pdf"
          download
        >
          Download CV
        </a>
      </div>
      <div className="mt-10 grid">
        <motion.div
          className="container w-full lg:w-full min-w-fit h-52 bg-[#121212] overflow-hidden rounded-lg grid lg:grid-cols-9 grid-cols-6"
          ref={constraintsRef}
        >
          {icons.map((e, i) => {
            return (
              <HeroItem key={i} icon={e} constraintsRef={constraintsRef} />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
