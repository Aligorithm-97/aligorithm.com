"use client";

import About from "@/components/About";
import HeroSection from "@/components/Hero/HeroSection";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroSection />
        <About />
      </div>
    </main>
  );
}
