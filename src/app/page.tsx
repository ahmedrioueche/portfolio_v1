"use client";

import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsCarousel from "./components/Projects";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import Banner from "./components/Banner"

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
