"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-600">
              ALİ TEMURTAŞ
            </span>
          </h1>
          <h2 className="text-white text-2xl">
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
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-4">
            asdgasldkjglkasdg
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 border border-white text-white mt-3">
              Download Cv
            </button>
          </div>
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
    </section>
  );
}

export default HeroSection;
