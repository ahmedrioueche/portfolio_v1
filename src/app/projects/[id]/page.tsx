import { projects } from '../../lib/data';
import { notFound } from 'next/navigation';
import ProjectDetail from '../../components/ProjectDetail';
import Link from 'next/link';

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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <div className="space-y-8">
        {imageDescPairs.map((item, index) => (
          <ProjectDetail
            key={index}
            image={item.image}
            text={item.description}
            imagePosition={index % 2 == 0? "left" : "right"}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href="/#projects"
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
