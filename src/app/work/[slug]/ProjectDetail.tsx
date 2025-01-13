'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProjectDetail({ project }: { project: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-[#f5f4fc] p-8">
      {/* Project Name */}
      <h1 className="text-4xl font-bold text-[#4831d4] mb-8">{project.name}</h1>

      {/* Image Carousel */}
      {project.images ? (
        <div className="relative w-full max-w-4xl h-[400px] mb-8">
          <Image
            src={project.images[currentImageIndex]}
            alt={`${project.name} Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            width={1200}
            height={600}
          />
          <button
            onClick={handlePrevImage}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            &#9664;
          </button>
          <button
            onClick={handleNextImage}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            &#9654;
          </button>
        </div>
      ) : (
        <p className="text-gray-500 text-lg">No images available for this project.</p>
      )}

      {/* Project Description */}
      <div className="text-left max-w-3xl">
        <p className="text-gray-700 text-lg leading-relaxed">{project.description}</p>
      </div>
    </main>
  );
}
