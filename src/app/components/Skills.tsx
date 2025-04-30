"use client";

import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiElectron,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiPython,
  SiPostgresql,
  SiSupabase,
  SiNodedotjs,
  SiC,
  SiGraphql,
  SiRedux,
  SiReactquery,
} from "react-icons/si";
import { FaGem, FaEnvelope, FaJava } from "react-icons/fa";
import { FiCloudLightning } from "react-icons/fi";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const skills: Skill[] = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Nodejs", icon: SiNodedotjs },
  { name: "ReactJS", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Electron", icon: SiElectron },
  { name: "Python", icon: SiPython },
  { name: "C", icon: SiC },
  { name: "Java", icon: FaJava },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Prisma", icon: SiPrisma },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Supabase", icon: SiSupabase },
  { name: "Nodemailer", icon: FaEnvelope },
  { name: "Pusher", icon: FiCloudLightning },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Gemini", icon: FaGem },
  { name: "Redux", icon: SiRedux },
  { name: "React Query", icon: SiReactquery },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 px-0">
      <div className="w-full max-w-none">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold relative inline-block group">
            My Skills
            <span className="block h-[2px] bg-primary absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center w-full px-0">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group w-24 h-24 flex flex-col items-center justify-center"
            >
              {React.createElement(skill.icon, {
                className:
                  "text-5xl transition-transform duration-300 transform group-hover:scale-125",
              })}
              <div className="absolute bottom-0 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <span className="bg-black text-white text-sm rounded-lg py-1 px-3 mt-2">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
