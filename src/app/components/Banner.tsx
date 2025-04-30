import React, { useEffect, useState, useCallback } from "react";
import TrackVisibility from "react-on-screen";
import { ArrowDownCircle } from "react-bootstrap-icons";
import "../globals.css";
import { personalData } from "../../constants/data";

const titles = [
  "Computer Engineer",
  "Full-Stack Developer",
  "Frontend Developer",
];

const Banner: React.FC = () => {
  const [text, setText] = useState(titles[0]);
  const [displayString, setDisplayString] = useState(titles[0]);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Animation speeds
  const deleteSpeed = 50;
  const writeSpeed = 100;

  const handleTypingEffect = useCallback(() => {
    if (isDeleting) {
      setDisplayString((prev) => prev.slice(0, -1));
      if (displayString.length <= 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
        setText(titles[(index + 1) % titles.length]);
      }
    } else {
      setDisplayString((prev) => text.slice(0, prev.length + 1));
      if (displayString === text) {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    }
  }, [isDeleting, text, displayString, index]);

  useEffect(() => {
    const intervalId = setInterval(
      handleTypingEffect,
      isDeleting ? deleteSpeed : writeSpeed
    );
    return () => clearInterval(intervalId);
  }, [handleTypingEffect, isDeleting]);

  // Reset download status after showing success/error message
  useEffect(() => {
    if (downloadStatus !== "idle") {
      const timer = setTimeout(() => {
        setDownloadStatus("idle");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [downloadStatus]);

  return (
    <section className="relative py-10 md:py-28" id="home">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/10 -z-10" />
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center mx-auto">
          <div className="w-full md:w-1/2 flex flex-col justify-center md:order-1">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`${
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }`}
                >
                  <span className="text-primary text-lg font-mono mb-3 block">
                    {personalData.greeting}
                  </span>
                  <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight">
                    {personalData.name}
                  </h1>

                  <div className="flex items-center mb-6">
                    <div className="h-1 w-16 bg-primary mr-4" />
                    <span className="text-xl md:text-2xl text-primary font-medium">
                      {displayString}
                      <span className="ml-1 animate-pulse">|</span>
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{personalData.location}</span>
                  </div>
                  {/* Mobile Image - Appears right after name on small screens */}
                  <div className="flex justify-center md:hidden mb-6">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                      <img
                        src="/images/ahmed.jpg"
                        alt="Ahmed Drioueche"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg mb-8 max-w-lg">
                    {personalData.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/files/Ahmed_Drioueche_CV.pdf"
                      download="Ahmed_Drioueche_CV.pdf"
                      className="flex items-center justify-center bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg transition-all duration-300 group"
                    >
                      Download My Resume
                      <ArrowDownCircle
                        size={20}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </a>

                    <a
                      href="#projects"
                      className="flex items-center justify-center border border-primary text-primary hover:bg-primary/10 py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      View My Work
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </div>

          {/* Desktop Image - Only visible on desktop */}
          <div className="hidden md:flex md:w-[45%] justify-center md:order-2">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <img
                src="/images/ahmed.jpg"
                alt="Ahmed Drioueche"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
