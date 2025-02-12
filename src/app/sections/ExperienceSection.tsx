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
          className={`text-[#ccf381] md:max-w-[20vw] leading-none text-xl md:text-[4em] font-bold transform transition-all duration-500 ease-in-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          My Journey So Far
        </h1>
        <p
          className={`text-white text-xs md:text-base md:max-w-[27vw] leading-relaxed mt-4 transform transition-all duration-500 ease-in-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          I specialize in front-end development, leveraging frameworks like Flutter and Vue.js to create intuitive user interfaces. While I gained foundational skills in React and TypeScript through academic projects, I quickly developed a strong ability to design and adapt to evolving technologies.
        </p>
        <p
          className={`text-white text-xs md:text-base md:max-w-[27vw] leading-relaxed mt-4 transform transition-all duration-500 ease-in-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          At Beanfee, I honed my skills in writing clean, maintainable code while thriving in a fast-paced startup environment. As an intern at Stokkur, I collaborated with product managers and designers to turn ideas into functional features, sharpening my communication and problem-solving skills.
        </p>
        <p
          className={`hidden md:flex text-white text-xs md:text-base md:max-w-[27vw] leading-relaxed mt-4 transform transition-all duration-500 ease-in-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          During my final project at Reykjavik University, I integrated technologies like Vue.js, Tailwind CSS, TypeScript, and Django to develop a real-time communication tool. This experience enhanced my ability to deliver user-focused solutions through cross-disciplinary collaboration.
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
 