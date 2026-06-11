"use client";

import Hero from "@/components/Hero";
// import GalleryPage from "./gallery/page";
// import WorkPage from "./work/page";
import Contact from "./contact/page";
// import SkillsPage from "./skills/page";
import Quote from "./quote/page";

export default function Home() {
  return (
    <main className="relative px-6 sm:px-12">
      {/* ✨ Simple Gradient Background */}

      {/* 🌟 Page Sections */}
      <Hero />
      {/* <WorkPage />
      <SkillsPage /> */}
      <Quote />
      {/* <GalleryPage /> */}
      <Contact />
    </main>
  );
}
