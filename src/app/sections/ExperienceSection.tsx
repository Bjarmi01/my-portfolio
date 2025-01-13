'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('#section3');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

   return (
     <section 
        id="section3" 
        className="relative h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-[15vw] md:px-40 mt-[5.5vh] bg-[#4831d4] overflow-hidden"
      >
      <div className='w-full md:w-1/2'>
      <h1
          className={`text-[#ccf381] md:max-w-[25vw] leading-none text-xl md:text-[4em] font-bold transform transition-all duration-500 ease-in-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          My Journey So Far
        </h1>
        <p
          className={`text-white text-xs md:tex-[1.3em] md:max-w-[27vw] leading-relaxed mt-4 transform transition-all duration-500 ease-in-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          In my previous roles, I focused on front-end development using frameworks like Flutter and Vue.js, honing my ability to create intuitive, visually appealing user interfaces. While I initially gained experience with React and TypeScript through academic projects, I quickly developed a strong foundation and a keen eye for design. My adaptability and eagerness to grow have consistently enabled me to master new tools and technologies, allowing me to contribute effectively to dynamic and evolving development stacks.
        </p>
        <p
          className={`text-white text-xs md:tex-[1.3em] md:max-w-[27vw] leading-relaxed mt-4 transform transition-all duration-500 ease-in-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          During my time at Beanfee, working in a startup environment taught me the importance of writing clean, maintainable code and leveraging Git-based workflows for smooth collaboration. Similarly, as an intern at Stokkur, I worked closely with product managers and designers to translate ideas into actionable features, which improved my communication skills and ability to balance technical considerations with user-centric design.
        </p>
        <p
          className={`hidden md:flex text-white text-xs md:tex-[1.3em] md:max-w-[27vw] leading-relaxed mt-4 transform transition-all duration-500 ease-in-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          One of my most rewarding experiences was my final project at Reykjavik University, where I integrated multiple technologies—Vue.js, Tailwind CSS, TypeScript, Docker, and Django—to build a real-time communication feature for a startup. This experience deepened my understanding of the development process end-to-end and demonstrated the value of collaborating across disciplines to deliver seamless, user-focused solutions.
        </p>
      </div>
      <Image
        src="/images/programmer_illustration.png"
        alt="Programmer Illustration"
        width={700}
        height={722}
        className={`mt-10 object-cover transform transition-all duration-500 ease-in-out delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        />
     </section>
   )
 }
 