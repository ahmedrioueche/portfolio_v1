"use client";

import React, { useState, useEffect } from "react";
import { FaSpinner, FaTimes } from "react-icons/fa";
import Image from "next/image";

interface ProjectDetailProps {
  image: string;
  text: string;
  imagePosition: "left" | "right";
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  image,
  text,
  imagePosition,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsImageLoaded(false); // Reset image load state when modal closes
  };

  const handleClickOutsideModal = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("modal-overlay")) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("click", handleClickOutsideModal);
    } else {
      document.removeEventListener("click", handleClickOutsideModal);
    }
    return () => {
      document.removeEventListener("click", handleClickOutsideModal);
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        className={`flex flex-col md:flex-row ${
          imagePosition === "left" ? "" : "md:flex-row-reverse"
        } gap-12 items-center mt-10 transition-transform transform hover:scale-105 cursor-pointer`}
      >
        <div
          className={`flex-1 ${
            imagePosition === "left" ? "md:pr-8" : "md:pl-8"
          } flex justify-center`}
        >
          <Image
            src={image}
            alt="Project"
            height={800}
            width={800}
            className="w-full h-auto max-w-[800px] rounded-lg shadow-lg object-cover"
            onClick={handleImageClick}
          />
        </div>
        <div
          className={`flex-1 ${
            imagePosition === "left" ? "md:pl-8" : "md:pr-8"
          } mb-6 md:mb-0`}
        >
          <p className="text-lg leading-relaxed">{text}</p>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-0 z-50 modal-overlay"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {!isImageLoaded && ( // Show spinner while image is loading
              <div className="flex items-center justify-center w-full h-full">
                <FaSpinner className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white" />
              </div>
            )}
            <Image
              src={image}
              alt="Project"
              height={1200}
              width={1000}
              className={`max-w-[90vw] max-h-[90vh] object-contain rounded-lg ${
                !isImageLoaded ? "hidden" : "block"
              }`}
              priority // Prioritize loading this image
              onLoadingComplete={() => setIsImageLoaded(true)} // Set image load state to true
            />
            {isImageLoaded && ( // Render close button only after image is loaded
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition"
                aria-label="Close modal"
              >
                <FaTimes size={24} />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
