"use client";

import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {projects} from "../lib/data"

export default function ProjectsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="projects" className="w-full py-12 text-white section-offset">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl font-bold relative inline-block group">
          My Best Projects
          <span className="block h-[2px] bg-red-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </h2>
      </div>
      <Slider {...settings} className="max-w-3xl mx-auto">
      {projects
        .sort((a, b) => a.rank - b.rank) 
        .map((project) => (
          <div key={project.id} className="p-4">
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
              <Link href={project.detailsLink} passHref>
                <div className="block cursor-pointer">
                  <img
                    src={project.imageDescPairs[0].image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </div>
              </Link>
              <div className="absolute bottom-4 right-4 flex space-x-4">
                {project.demoLink !== 'null' && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-300"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                 </a>
                )}
                {project.githubLink !== 'null' && (
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
