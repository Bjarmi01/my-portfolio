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
          className={`text-[#ccf381] md:max-w-[450px] leading-none text-2xl md:text-6xl font-bold transform transition-all duration-500 ease-in-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          My Experience 
        </h1>

        <h3
          className={`text-white text-md md:text-3xl md:max-w-[750px] leading-relaxed mt-4 transform transition-all duration-500 ease-in-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          Full-Stack Skills
        </h3>
        <p
          className={`text-white text-xs md:text-xl md:max-w-[750px] leading-relaxed transform transition-all duration-500 ease-in-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          Proficient in frameworks like Flutter, Vue.js, Next.js, and TypeScript, and backend technologies including Django, Firebase, and serverless architectures
        </p>

        <h3
          className={`text-white text-md md:text-3xl md:max-w-[750px] leading-relaxed mt-4 transform transition-all duration-500 ease-in-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          Beanfee: Leadership & Growth
        </h3>
        <p
          className={`text-white text-xs md:text-xl md:max-w-[750px] leading-relaxed transform transition-all duration-500 ease-in-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          Led frontend development of a Flutter app focused on classroom engagement. Managed features, ensured scalable code, and collaborated effectively with multidisciplinary teams.
        </p>

        <h3
          className={`text-white text-md md:text-3xl md:max-w-[750px] leading-relaxed mt-4 transform transition-all duration-500 ease-in-out delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          Stokkur: Agile Development
        </h3>
        <p
          className={`text-white text-xs md:text-xl md:max-w-[750px] leading-relaxed transform transition-all duration-500 ease-in-out delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          Worked within an agile team developing performant Flutter mobile apps. Engaged in sprint planning, rigorous code reviews, and feedback loops for rapid, high-quality development.
        </p>

        <h3
          className={`text-white text-md md:text-3xl md:max-w-[750px] leading-relaxed mt-4 transform transition-all duration-500 ease-in-out delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          Academic Project: Showdeck
        </h3>
        <p
          className={`text-white text-xs md:text-xl md:max-w-[750px] leading-relaxed transform transition-all duration-500 ease-in-out delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          Developed a real-time chat feature as an extension of Showdeck&apos;s existing website using Vue.js, TypeScript, Django, and Tailwind CSS. I Led the frontend development, contributed to backend integration, and helped deliver a polished, collaborative solution along with my team.
        </p>
        <p
          className={`text-white text-xs md:text-xl md:max-w-[750px] mt-4 leading-relaxed transform transition-all duration-500 ease-in-out delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >  
          See more details on 
          <a
            href="https://bjarmi.dev/work"
            className="relative inline-block ml-2 text-[#ccf381] text-lg font-bold z-0 after:content-[''] after:bg-[#1f1753] after:h-[0.6em] after:w-[109%] after:block after:absolute after:-mt-2.5 after:-ml-[4%] after:-z-10 after:transition-transform after:duration-300 hover:after:translate-y-[0.2em] hover:after:scale-y-50"
            >
            bjarmi.dev/work
          </a>
        </p>
      </div>
      <Image
        src="/images/programmer_illustration.png"
        alt="Programmer Illustration"
        width={600}
        height={622}
        className={`hidden md:flex mt-10 object-cover transform transition-all duration-500 ease-in-out delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        />
     </section>
   )
 }
 