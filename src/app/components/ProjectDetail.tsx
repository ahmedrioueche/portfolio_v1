"use client";

import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
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

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Close the modal if clicking outside of it
  const handleClickOutsideModal = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("modal-overlay")) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener("click", handleClickOutsideModal);
    }
    return () => {
      window.removeEventListener("click", handleClickOutsideModal);
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
            height={120}
            width={100}
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
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 modal-overlay">
          <div className="relative max-w-[90%] max-h-[90%]">
            <Image
              src={image}
              alt="Project"
              height={1200}
              width={1000}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
          <button
            onClick={handleCloseModal}
            className="absolute top-1 right-1 text-white text-2xl rounded-full p-2 hover:bg-gray-800 transition"
            aria-label="Close modal"
          >
            <FaTimes size={20} />
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
