"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
export default function Home() {
  const constraintsRef = useRef(null);
  return (
    <>
      <button className="btn">Generate Pdf</button>
      <button className="btn">DARK/LIGHT MODE</button>
      <section className="flex flex-col justify-center h-screen align-middle">
        <h1>ALİ TEMURTAŞ</h1>
        <span>HTML CSS JS REACT .... with logos</span>
        <span>I can play with logos like framer motion drag </span>
        <motion.div className="container" ref={constraintsRef}>
          <motion.div className="item" drag dragConstraints={constraintsRef}>
            asdgaksldg
          </motion.div>
          <motion.div className="item" drag dragConstraints={constraintsRef} />
          <motion.div className="item" drag dragConstraints={constraintsRef} />
          <motion.div className="item" drag dragConstraints={constraintsRef} />
        </motion.div>
      </section>
      <section className="flex justify-center h-screen align-middle">
        EXPERIENCE
      </section>
      <section className="flex justify-center h-screen align-middle">
        CORPORATE PROJECTS
      </section>
      <section className="flex justify-center h-screen align-middle">
        INDIVIDUAL PROJECTS
      </section>
    </>
  );
}
