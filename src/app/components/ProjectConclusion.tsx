import React from "react";

interface ProjectConclusionProps {
  text: string;
}

const ProjectConclusion: React.FC<ProjectConclusionProps> = ({ text }) => {
  return (
    <div className="bg-transparent">
      <div className="flex justify-center">
        <div className="max-w-4xl text-lg leading-relaxed text-start px-2 py-8 rounded-lg shadow-lg">
          {text}
        </div>
      </div>
    </div>
  );
};

export default ProjectConclusion;
