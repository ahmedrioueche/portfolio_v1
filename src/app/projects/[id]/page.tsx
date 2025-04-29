"use client";
import { projects } from "../../../utils/data";
import { notFound } from "next/navigation";
import ProjectDetail from "../../components/ProjectDetail";
import Link from "next/link";
import ProjectConclusion from "@/app/components/ProjectConclusion";
import { FaArrowLeft, FaGithub, FaRocket } from "react-icons/fa";

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
    <div className=" mx-auto px-4 py-14 project-offset">
      <div className="flex flex-row items-center mb-1">
        <h1 className="text-2xl md:text-4xl font-bold mr-4">{project.title}</h1>
        <div className="flex items-center space-x-3">
          {project.demoLink && project.demoLink !== "null" && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-primary transition duration-300"
              title="View Demo"
            >
              <FaRocket />
            </a>
          )}
          {project.githubLink && project.githubLink !== "null" && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-primary transition duration-300"
              title="View on GitHub"
            >
              <FaGithub />
            </a>
          )}
        </div>
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
