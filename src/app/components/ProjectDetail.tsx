
'use client'; 

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 

interface ProjectDetailProps {
  image: string;
  text: string;
  imagePosition: 'left' | 'right'; 
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ image, text, imagePosition }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter(); 

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBackToProjects = () => {
    router.push('/'); 
  };

  return (
    <>
      <div
        className={`flex flex-col md:flex-row ${imagePosition === 'left' ? '' : 'md:flex-row-reverse'} gap-12 items-center mt-10 transition-transform transform hover:scale-105 cursor-pointer`}
      >
        <div className={`flex-1 ${imagePosition === 'left' ? 'md:pr-8' : 'md:pl-8'} flex justify-center`}>
          <img
            src={image}
            alt="Project"
            className="w-full h-auto max-w-[800px] rounded-lg shadow-lg object-cover"
            onClick={handleImageClick}
          />
        </div>
        <div className={`flex-1 ${imagePosition === 'left' ? 'md:pl-8' : 'md:pr-8'} mb-6 md:mb-0`}>
          <p className="text-lg leading-relaxed">{text}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-full max-h-full">
            <img
              src={image}
              alt="Project"
              className="w-full h-auto max-h-screen object-contain"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-2xl bg-gray-800 rounded-full p-2 hover:bg-gray-600"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
