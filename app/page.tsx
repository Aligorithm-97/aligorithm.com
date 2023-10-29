"use client";

import Experience from "@/components/Experience";
import HeroSection from "@/components/Hero/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto py-4 px-12 h-screen">
        <HeroSection />
        <Projects />
        <Experience />
      </div>
    </main>
  );
}
