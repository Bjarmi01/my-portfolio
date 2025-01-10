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
        className="snap-start h-screen flex flex-row items-center justify-between px-40 mt-[5.5vh] bg-[#4831d4]"
      >
      <div className='w-1/2'>
      <h1
          className={`text-[#ccf381] max-w-[25vw] leading-none text-[4em] font-bold transform transition-all duration-500 ease-in-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          My Journey So Far
        </h1>
        <p
          className={`text-white max-w-[27vw] leading-relaxed mt-4 transform transition-all duration-500 ease-in-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          At <strong>Beanfee</strong>, I developed scalable, clean-code solutions with <strong>TypeScript</strong>, <strong>Flutter</strong>, and <strong>Firebase</strong>. I also contributed to improving user experiences at <strong>Stokkur</strong>, using <strong>agile methodologies</strong>.
        </p>
        <p
          className={`text-white max-w-[27vw] leading-relaxed mt-4 transform transition-all duration-500 ease-in-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          My final project with <strong>Showdeck</strong> during university gave me hands-on experience in <strong>full-stack development</strong>, using <strong>Vue.js</strong>, <strong>FastAPI</strong>, and <strong>Docker</strong> to solve complex challenges.
        </p>
      </div>
      <Image
        src="/images/programmer_illustration.png"
        alt="Programmer Illustration"
        width={700}
        height={722}
        className={`object-cover transform transition-all duration-500 ease-in-out delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        />
     </section>
   )
 }
 