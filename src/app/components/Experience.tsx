"use client";

import React, { useState } from "react";
import { experience } from "../lib/data";

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
    <section id="experience" className="w-full py-12 text-white section-offset">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl font-bold relative inline-block group">
          My Experience
          <span className="block h-[2px] bg-red-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 max-w-7xl mx-auto">
        {experience
          .sort((a, b) => parseDate(b.startDate) - parseDate(a.startDate)) // Sort by startDate in descending order
          .map((exp, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
                <div className="flex items-center p-6">
                  {/* Company logo */}
                  {exp.companyLogo && (
                    <img
                      src={exp.companyLogo}
                      alt={exp.companyName}
                      className="w-16 h-16 object-cover rounded-full mr-4"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">{exp.companyName}</h3>
                    <p className="text-sm text-gray-500">
                      {exp.startDate} - {exp.endDate}
                    </p>
                    <p className="text-sm text-gray-400">{exp.jobTitle}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold">Introduction</h4>
                  <p className="text-gray-400 mb-4">{exp.introduction}</p>

                  {/* Collapsible content */}
                  {expandedItems[index] && (
                    <>
                      <h4 className="text-lg font-semibold">Description</h4>
                      <p className="text-gray-400 mb-4">{exp.description}</p>
                      <h4 className="text-lg font-semibold">My Work</h4>
                      <p className="text-gray-400 mb-4">{exp.myWork}</p>
                      <h4 className="text-lg font-semibold">Conclusion</h4>
                      <p className="text-gray-400">{exp.conclusion}</p>
                    </>
                  )}

                  <button
                    onClick={() => toggleExpanded(index)}
                    className="mt-4 text-sm text-blue-500 hover:text-blue-300"
                  >
                    {expandedItems[index] ? "Show Less" : "Show More"}
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
