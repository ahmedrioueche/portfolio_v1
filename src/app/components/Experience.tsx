"use client";

import React, { useState } from "react";
import { experience } from "../utils/data";
import { ArrowUpRight, Rocket } from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const parseDate = (dateString: string) => {
  const [month, year] = dateString.split(" ");
  return new Date(`${month} 1, ${year}`).getTime(); // Parse into a full date and return timestamp (milliseconds)
};

export default function Experience() {
  // Create an array of boolean values for each experience item, initially all false (collapsed)
  const [expandedItems, setExpandedItems] = useState(
    new Array(experience.length).fill(false)
  );

  // Toggle the expansion state for the specific item
  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => {
      const newExpandedItems = [...prev];
      newExpandedItems[index] = !newExpandedItems[index];
      return newExpandedItems;
    });
  };

  return (
    <section id="experience" className="w-full text-white section-offset">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl font-bold relative inline-block group">
          My Experience
          <span className="block h-[2px] bg-primary absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </h2>
      </div>
      <div className="flex flex-col mx-auto px-4">
        {experience
          .sort((a, b) => parseDate(b.startDate) - parseDate(a.startDate)) // Sort by startDate in descending order
          .filter((exp) => exp.isVisible === true)
          .map((exp, index) => (
            <div key={index} className="mb-6 w-full">
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Company info section */}
                  <div className="md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-gray-700">
                    <div className="flex items-center">
                      {exp.companyLogo && (
                        <img
                          src={exp.companyLogo}
                          alt={exp.companyName}
                          className="w-16 h-16 object-cover rounded-full mr-4"
                        />
                      )}
                      <div>
                        <h3 className="text-xl font-semibold">
                          {exp.companyName}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {exp.startDate} - {exp.endDate}
                        </p>
                        <p className="text-sm text-gray-300 font-medium">
                          {exp.jobTitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="md:w-2/3 p-6">
                    {/* Summary - Always visible */}
                    <h4 className="text-lg font-semibold mb-2">Summary</h4>

                    {/* Key achievements/summary bullet points could go here */}
                    <div className="mb-4">
                      <ul className="list-disc pl-5 text-gray-300">
                        {exp.summary &&
                          exp.summary.map((item: string, i: number) => (
                            <li key={i} className="mb-1">
                              {item}
                            </li>
                          ))}
                      </ul>
                    </div>

                    {exp.link && exp.link !== "null" && (
                      <div className="mt-4">
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center transition-colors duration-200"
                        >
                          <span className="text-primary font-medium hover:text-primary/90 hover:underline underline-offset-4">
                            View Project
                          </span>
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="ml-2 text-primary group-hover:translate-x-1 transition-transform duration-200"
                            size="xs"
                          />
                        </a>
                      </div>
                    )}
                    {/* Collapsible content */}
                    {expandedItems[index] && (
                      <div className="mt-6 pt-6 border-t border-gray-700">
                        <h4 className="text-lg font-semibold mb-2">
                          About {exp.companyName}
                        </h4>
                        <p className="text-gray-400 mb-4">{exp.introduction}</p>

                        <h4 className="text-lg font-semibold mb-2">
                          Description
                        </h4>
                        <p className="text-gray-400 mb-4">{exp.description}</p>

                        <h4 className="text-lg font-semibold mb-2">My Work</h4>
                        <p className="text-gray-400 mb-4">{exp.myWork}</p>

                        <h4 className="text-lg font-semibold mb-2">
                          Conclusion
                        </h4>
                        <p className="text-gray-400">{exp.conclusion}</p>
                      </div>
                    )}

                    <button
                      onClick={() => toggleExpanded(index)}
                      className="mt-4 px-4 py-2 bg-primary/20 text-primary hover:bg-primary/30 rounded-md transition-colors duration-300"
                    >
                      {expandedItems[index] ? "Show Less" : "Show More Details"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
