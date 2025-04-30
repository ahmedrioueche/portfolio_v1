"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faChevronRight,
  faChevronLeft,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { projects } from "../../constants/data";
import Image from "next/image";

export default function ProjectsCarousel() {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const allProjects = projects
    .sort((a, b) => a.rank - b.rank)
    .filter((project) => project.isVisible === true);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 2, allProjects.length));
  };

  // Image slider settings
  const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props: any) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-all"
        aria-label="Next image"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    );
  }

  function PrevArrow(props: any) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-all"
        aria-label="Previous image"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    );
  }

  return (
    <section id="projects" className="w-full text-white">
      <div className="flex flex-col items-center container mx-auto md:px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold relative inline-block group">
            My Best Projects
            <span className="block h-[2px] bg-primary absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 w-full">
          {allProjects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="rounded-xl overflow-hidden flex flex-col lg:flex-row h-full border border-gray-700 hover:border-gray-600 transition-colors duration-200"
            >
              {/* Image Slider - Left Side (50%) */}
              <div className="lg:w-1/2 relative h-[300px] lg:h-[400px]">
                <div className="h-full w-full">
                  <Slider
                    {...imageSliderSettings}
                    className="h-full slick-height-fix"
                  >
                    {project.imageDescPairs.map((pair, index) => (
                      <div
                        key={index}
                        className="relative h-[300px] lg:h-[400px]"
                      >
                        <Image
                          src={pair.image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          style={{ objectFit: "cover" }}
                          priority={index === 0}
                          quality={90}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              {/* Content Section - Right Side (50%) */}
              <Link
                href={project.detailsLink}
                className="lg:w-1/2 bg-gray-800 p-6 lg:p-8 flex flex-col group cursor-pointer hover:bg-gray-750 transition-colors duration-200"
              >
                <div className="mb-4">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3 ">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.split(",").map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs lg:text-sm bg-gray-700  px-3 py-1 rounded-full"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-gray-300 mb-6 text-sm lg:text-base group-hover:text-gray-200">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-auto pt-4">
                  <div className="text-primary font-medium flex items-center group-hover:underline underline-offset-4">
                    View Details
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="ml-1 group-hover:translate-x-1 transition-transform duration-200"
                      size="xs"
                    />
                  </div>

                  <div
                    className="flex space-x-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.demoLink !== "null" && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary/80 transition-colors duration-200"
                        aria-label="Live Demo"
                        title="Live Demo"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                      </a>
                    )}
                    {project.githubLink !== "null" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary/80 transition-colors duration-200"
                        aria-label="GitHub Repository"
                        title="Source Code"
                      >
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {visibleProjects < allProjects.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMoreProjects}
              className="px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              Load More Projects
              <FontAwesomeIcon
                icon={faChevronDown}
                className="animate-bounce"
              />
            </button>
          </div>
        )}
      </div>

      {/* Add global styles to ensure consistent slider heights */}
      <style jsx global>{`
        .slick-height-fix,
        .slick-height-fix .slick-list,
        .slick-height-fix .slick-track,
        .slick-height-fix .slick-slide,
        .slick-height-fix .slick-slide > div {
          height: 100%;
        }

        .slick-slide > div {
          display: flex;
        }
      `}</style>
    </section>
  );
}
