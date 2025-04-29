"use client";

import React from "react";
import ProjectsCarousel from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col space-y-16">
      <div id="home">
        <Banner />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <ProjectsCarousel />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
