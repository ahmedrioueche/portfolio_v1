"use client";

import React, { useState, useEffect } from "react";
import { Spotlight } from "./ui/spotlight";

export default function Hero() {
  const [isEngineer, setIsEngineer] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEngineer((prev) => !prev);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-[80vh] text-center px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      <div className="relative z-10">
        <p className="text-3xl md:text-4xl font-light mb-2">
          Hi there!
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          I am{" "}
          <span className="text-red-500 text-5xl md:text-6xl font-extrabold">
            Ahmed Drioueche
          </span>
        </h1>
        <p className="text-2xl md:text-3xl font-light">
          A{" "}
          <span
            className={`transition-opacity duration-1000 ease-in-out ${
              isEngineer ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-red-500 font-bold text-2xl md:text-3xl">
              Computer Engineer
            </span>
          </span>
          <span
            className={`transition-opacity duration-1000 ease-in-out ${
              isEngineer ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-red-500 font-bold text-2xl md:text-3xl">
              Software Developer
            </span>
          </span>
        </p>
      </div>

      <div className="relative z-10 space-x-4 mt-8">
        <a
          href="#about"
          className="bg-red-500 text-white py-3 px-6 rounded-full text-lg font-medium shadow-lg hover:bg-red-400 transition-colors duration-300"
        >
          Contact Me
        </a>
        <a
          href="#projects"
          className="border-2 border-red-500 text-red-500 py-3 px-6 rounded-full text-lg font-medium transition-transform duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-red-400 hover:to-red-500 hover:text-white"
        >
          My Work
        </a>
      </div>
    </section>
  );
}
