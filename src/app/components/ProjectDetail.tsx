'use client'; 

import React, { useState, useEffect } from 'react';
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

  // Close the modal if clicking outside of it
  const handleClickOutsideModal = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal-overlay')) {
      handleCloseModal();
    }
  };

  // Add the click event listener to close modal when clicking outside
  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('click', handleClickOutsideModal);
    }
    return () => {
      window.removeEventListener('click', handleClickOutsideModal);
    };
  }, [isModalOpen]);

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
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 modal-overlay">
          <div className="relative max-w-[85%] max-h-[85%]">
            <img
              src={image}
              alt="Project"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white text-xl bg-gray-800 rounded-full p-2 opacity-0 hover:opacity-100 transition-opacity duration-300"
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
