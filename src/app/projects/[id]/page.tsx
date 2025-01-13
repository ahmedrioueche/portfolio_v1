"use client";
import { projects } from "../../lib/data";
import { notFound } from "next/navigation";
import ProjectDetail from "../../components/ProjectDetail";
import Link from "next/link";
import ProjectConclusion from "@/app/components/ProjectConclusion";
import { FaArrowLeft, FaRocket } from "react-icons/fa";

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
  const { id } = params;
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return notFound();
  }

  const imageDescPairs = project.imageDescPairs;

  return (
    <div className="max-w-4xl mx-auto px-4 py-14 project-offset">
      {/* Div that acts like a link to the project demo */}
      <div
        className={`flex flex-row ${
          project.demoLink && project.demoLink !== "null"
            ? "hover:text-primary transition duration-300"
            : ""
        } mb-1`}
      >
        {project.demoLink && project.demoLink !== "null" ? (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center cursor-pointer"
          >
            <h1 className="text-2xl md:text-4xl font-bold mr-3">
              {project.title}
            </h1>
            <FaRocket className="mt-1" />
          </a>
        ) : (
          <div className="flex items-center">
            <h1 className="text-2xl md:text-4xl font-bold mr-3">
              {project.title}
            </h1>
          </div>
        )}
      </div>

      <h4 className="text-lg font-thin text-gray-500 mb-4">
        {project.techStack}
      </h4>

      <div className="space-y-8">
        <div className="">
          {project.description && (
            <ProjectConclusion text={project.description} />
          )}
        </div>

        {imageDescPairs.map((item, index) => (
          <ProjectDetail
            key={index}
            image={item.image}
            text={item.description}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
        {project.conclusion && <ProjectConclusion text={project.conclusion} />}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href="/#projects"
          className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary/90 transition duration-300"
        >
          <div className="flex flex-row space-x-2">
            <FaArrowLeft className="mt-1 mr-2" />
            Back to Projects
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
