import { educationData } from "@/constants/data";
import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="w-full text-light-text-primary dark:text-dark-text-primary py-16"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block group font-satisfy">
            My Education
            <span className="block h-[2px] bg-primary absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="bg-gray-800 border-l-4 border-primary shadow-xl p-6 rounded-xl hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold text-primary font-stix">
                {edu.degree}
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-1">
                {edu.institution}
              </p>
              <p className="text-gray-500 text-xs md:text-sm mb-3">
                {edu.period}
              </p>
              <p className="text-white text-sm md:text-base">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
