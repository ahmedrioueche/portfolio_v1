"use client";

import React from "react";
import ProjectsCarousel from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Banner from "./components/Banner"
import SimpleBanner from "./components/SimpleBanner"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Banner />
      <ProjectsCarousel/>
      <Skills/>
      <Contact/>
    </div>
  );
}
