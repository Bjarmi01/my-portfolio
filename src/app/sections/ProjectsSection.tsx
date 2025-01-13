'use client';

import { useState, useEffect } from 'react';
import Button from "../components/Button";

export default function ProjectsSection() {
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

    const section = document.querySelector('#section4');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section 
      id="section4" 
      className="relative h-screen flex flex-col items-center justify-center p-8 bg-white overflow-hidden"
    >
      <div className="flex flex-col xl:flex-row container h-full xl:h-auto w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        {/* First Section */}
        <div className="flex-1 flex flex-col items-start justify-center p-10 md:py-[4em] md:px-[6em] xl:p-[7em] border-b  xl:border-r border-[#4831d44d]">
        <h1
            className={`text-3xl md:text-[2.2em]  xl:text-[3.2em] text-[#4831d4] font-black mb-4 leading-none transform transition-all duration-1000 ease-in-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            I build & <br />design stuff
          </h1>
          <p
            className={`text-[1.2em]  xl:text-[1.8em] text-gray-600 leading-tight tracking-wide mb-10 md:mb-[1em]  xl:mb-[2em] transform transition-all duration-1000 ease-in-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Open source <br />projects, web apps <br />and other projects.
          </p>
          <Button href="/work" >SEE MY WORK</Button>
        </div>

        {/* Second Section */}
        <div className="w-full flex-1 flex flex-col items-start justify-center p-10 md:py-[4em] md:px-[6em]  xl:p-[7em]">
        <h1
            className={`text-3xl md:text-[2.2em]  xl:text-[3.2em] text-[#4831d4] font-black mb-4 leading-none transform transition-all duration-1000 ease-in-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            I write, <br />sometimes
          </h1>
          <p
            className={`text-[1.2em]  xl:text-[1.8em] text-gray-600 leading-tight tracking-wide mb-10 md:mb-[1em]  xl:mb-[2em] transform transition-all duration-1000 ease-in-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Some articles <br />I&apos;ve written <br />in the past.
          </p>
          <Button href="/articles">READ MY ARTICLES</Button>
        </div>
      </div>
    </section>
  );
}
