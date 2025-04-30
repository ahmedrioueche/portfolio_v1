"use client";

import React, { useState } from "react";
import ProjectsCarousel from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import { Reviews } from "./components/Reviews";
import { Feedback } from "./components/Feedback";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            retry: 1,
          },
        },
      })
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col space-y-16">
      <QueryClientProvider client={queryClient}>
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
        <div id="feedback">
          <Feedback />
        </div>
        <div id="comments">
          <Reviews />
        </div>
      </QueryClientProvider>
    </div>
  );
}
