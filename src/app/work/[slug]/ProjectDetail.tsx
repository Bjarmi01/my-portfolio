'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { Project } from '@/app/types/project';

export default function ProjectDetail({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
      if (!project.images || project.images.length === 0) return;
   
      const interval = setInterval(() => {
         setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
       }, 5000);
   
       return () => clearInterval(interval);
     }, [project.images]);

  const handleNextImage = () => {
      if (!project.images) return;
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
  };

  const handlePrevImage = () => {
      if (!project.images) return;
      setCurrentImageIndex((prev) =>
         prev === 0 ? project.images!.length - 1 : prev - 1
      );
  };

  const handleDotClick = (index: number) => {
      setCurrentImageIndex(index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
   const { id, value } = e.target;
   setFormData((prev) => ({ ...prev, [id]: value }));
 };

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
   setLoading(true);
   setStatus('');

   try {
     const response = await fetch('/api/sendEmail', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData),
     });

     if (response.ok) {
       setStatus('Message sent successfully!');
       setFormData({ name: '', email: '', message: '' });
     } else {
       const data = await response.json();
       setStatus(data.message || 'Failed to send message.');
     }
   } catch (error) {
     console.error('Error:', error);
     setStatus('Something went wrong. Please try again later.');
   } finally {
     setLoading(false);
   }
 };

  return (
    <main className="min-h-screen flex flex-col items-center bg-[#f5f4fc] mx-auto px-12 pt-20">
      {/* Project Name */}
      <h1 className="text-4xl font-bold text-[#474747] mb-14">{project.name}</h1>

      {/* Image Carousel */}
      {project.images && project.images.length > 0 ? (
         <div className="relative max-w-[1200px] w-full h-[600px] mb-8 overflow-hidden">
            {/* Carousel Wrapper */}
            <div
               className="flex transition-transform duration-700 ease-in-out"
               style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`,
               }}
            >
            {project.images.map((image, index) => (
               <div
                  key={index}
                  className="w-full flex-shrink-0 flex items-center justify-center"
                  style={{ height: '600px' }}
                  >
                  <Image
                  src={image}
                  alt={`${project.name} Image ${index + 1}`}
                  className="w-full h-full object-contain rounded-lg"
                  width={1200}
                  height={600}
                  />
               </div>
            ))}
            </div>

            {/* Navigation Arrows */}
            {project.images.length > 1 && (
               <div>
               <button
                  onClick={handlePrevImage}
                  className="absolute top-1/2 --left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
                  >
                  &#9664;
               </button>
               <button
                  onClick={handleNextImage}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
                  >
                  &#9654;
               </button>
               </div>
            )}
         </div>
      ) : (
        <p className="text-gray-500 text-lg">No images available for this project.</p>
      )}

      {/* Image Index */}
      <div className="flex space-x-2 mt-4">
        {project.images!.map((_: string, index: number) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex
                ? 'bg-[#4831d4]'
                : 'bg-gray-300'
            } transition`}
          ></button>
        ))}
      </div>

      {/* Project Description */}
      <div className="text-left max-w-5xl mt-8 mx-auto">
         <div
            className="text-gray-700 text-xl leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.description || '' }}
         ></div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row mt-12 pt-12 border-t border-[#cbc9dd] w-full max-w-7xl mb-28">
         <div className=" max-w-lg mr-12">
            <h1 className="text-7xl text-[#4831d4] font-extrabold">Let&apos;s work together</h1>
            <p className="mt-4 text-2xl text-[#3d155f]">Like my work and want something similar? Sure, let&apos;s get to business!</p>
         </div>
         <form className="basis-3/4 w-full space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:space-x-14">
               {/* Name Input */}
               <div className="flex-1 relative border-b border-gray-300 focus-within:border-[#4831d4] transition-all duration-300">
               <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-none outline-none text-lg py-6 text-[#3d155f80] transition-colors duration-300 focus:text-[#4831d4]"
                  required
               />
               <label
                  htmlFor="name"
                  className="absolute left-0 top-0 text-[#3d155f80] text-sm transition-all duration-300 pointer-events-none peer-focus:text-[#4831d4]"
               >
                  Your Name
               </label>
               </div>
   
               {/* Email Input */}
               <div className="flex-1 relative mt-6 md:mt-0 border-b border-gray-300 focus-within:border-[#4831d4] transition-all duration-300">
               <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-none outline-none text-lg py-6 text-[#3d155f80] transition-colors duration-300 focus:text-[#4831d4]"
                  required
               />
               <label
                  htmlFor="email"
                  className="absolute left-0 top-0 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:text-[#4831d4]"
               >
                  Email Address
               </label>
               </div>
            </div>
   
            {/* Message Input */}
            <div className="relative border-b border-gray-300 focus-within:border-[#4831d4] transition-all duration-300">
               <textarea
               id="message"
               placeholder="Write your message here..."
               value={formData.message}
               onChange={handleChange}
               rows={2}
               className="peer w-full bg-transparent border-none outline-none text-lg pb-6 mt-6 resize-none text-[#3d155f80] transition-colors duration-300 focus:text-[#4831d4]"
               required
               ></textarea>
               <label
               htmlFor="message"
               className="absolute left-0 top-0 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:text-[#4831d4]"
               >
               Your Message
               </label>
            </div>
            <div className="flex justify-center items-center">
               <Button type="submit">{loading ? "Sending..." : "Shoot"}</Button>
            </div>
            {status && <p className="text-center mt-4 text-gray-600">{status}</p>}
         </form>
      </div>
    </main>
  );
}
