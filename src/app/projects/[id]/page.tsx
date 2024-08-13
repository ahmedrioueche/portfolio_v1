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
    return notFound(); // or return a custom 404 component
  }

  // Ensure images are unique
  const uniqueImages = Array.from(new Set(project.images));

  // Example description items with one image per item
  const descriptionItems = [
    {
      text: 'This is the main description of the project, detailing its purpose and features. It provides a comprehensive overview of what the project entails.',
      image: uniqueImages[0] || '', // Use the first image if available
      imagePosition: 'left' as 'left' | 'right', // Example positioning
    },
    {
      text: 'Additional details or a section about the project, such as its development process, challenges faced, or technologies used.',
      image: uniqueImages[1] || '', // Use the second image if available
      imagePosition: 'right' as 'left' | 'right', // Example positioning
    },
    {
      text: 'Further insights into the project, such as future improvements, user feedback, or additional functionality planned for future versions.',
      image: uniqueImages[2] || '', // Use the third image if available
      imagePosition: 'left' as 'left' | 'right', // Example positioning
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      {/* Project Details */}
      <div className="space-y-8">
        {descriptionItems.map((item, index) => (
          <ProjectDetail
            key={index}
            image={item.image}
            text={item.text}
            imagePosition={item.imagePosition}
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
