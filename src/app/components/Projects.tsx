"use client";

import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { projects } from "../lib/data";

export default function ProjectsCarousel() {
  const outerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const innerSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section id="projects" className="w-full py-12 text-white section-offset">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl font-bold relative inline-block group">
          My Best Projects
          <span className="block h-[2px] bg-primary absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </h2>
      </div>
      <Slider {...outerSettings} className="max-w-3xl mx-auto">
        {projects
          .sort((a, b) => a.rank - b.rank)
          .filter((project) => project.isVisible === true)
          .map((project) => (
            <div key={project.id} className="p-4">
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
                <Link href={project.detailsLink} passHref>
                  <div className="block cursor-pointer">
                    {/* Inner Slider for Images */}
                    <Slider {...innerSettings}>
                      {project.imageDescPairs.map((pair, index) => (
                        <img
                          key={index}
                          src={pair.image}
                          className="w-full h-64 object-cover"
                        />
                      ))}
                    </Slider>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <div className="w-[85%]">
                        <p className="text-base text-gray-500 mb-2">
                          {project.techStack}
                        </p>
                      </div>
                      <div className="w-[95%]">
                        <p className="text-gray-400">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="absolute bottom-4 right-4 flex space-x-4">
                  {project.demoLink !== "null" && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-300"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                    </a>
                  )}
                  {project.githubLink !== "null" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-300"
                    >
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </section>
  );
}
