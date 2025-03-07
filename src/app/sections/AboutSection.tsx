'use client';

import { useState, useEffect } from 'react';

export default function AboutSection() {
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

    const section = document.querySelector('#section2');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

   return (
      <section 
        id="section2" 
        className="relative h-screen flex flex-col items-center justify-center px-10 md:px-40 overflow-hidden"
      >
      {/* First Row */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        {/* Left Side */}
        <div className="text-left mb-4 md:mb-0">
        <h1
            className={`text-4xl md:text-6xl pb-4 text-[#4831d4] font-bold transform transition-all duration-700 ease-in-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            About Me
          </h1>
          <p
            className={`max-w-xl text-[19px] md:text-[22px] leading-relaxed text-gray-600 transform transition-all duration-700 ease-in-out delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            I&apos;m a full-stack developer passionate about building seamless, efficient digital experiences. My tech stack includes Next.js, Flutter, Vue.js, TypeScript, Django, FastAPI, and Firebase. I focus on writing clean, scalable code, continuously expanding my knowledge in both frontend and backend technologies. View my projects on 
            <a
              href="https://bjarmi.dev/work"
              className="relative inline-block ml-2 text-[#4831d4] text-[19px] md:text-[22px] font-bold z-0 after:content-[''] after:bg-[#ccf381] after:h-[0.6em] after:w-[109%] after:block after:absolute after:-mt-2.5 after:-ml-[4%] after:-z-10 after:transition-transform after:duration-300 hover:after:translate-y-[0.2em] hover:after:scale-y-50"
              >
              bjarmi.dev/work
            </a>
          </p>
        </div>
        <div className="hidden md:block mr-32">
          <svg xmlns="http://www.w3.org/2000/svg" width="423" height="154" viewBox="0 0 523 214" data-shape="true" aria-hidden="true" id="cs-pattern-right"><path fill="#4831d4" d="M313.651 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 20.388a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM332.62 39.611a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001.001zM351.587 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM370.555 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM389.522 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM465.394 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM484.362 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM503.33 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM522.298 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM313.651 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 58.834a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM408.49 58.834a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM427.458 58.834a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM446.427 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 78.057a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 97.28a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM408.49 97.28a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM427.458 97.28a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM446.427 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 116.504a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM313.651 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 135.726a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 154.95a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM313.651 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM332.62 174.173a1.5 1.5 0 11-3.002-.002 1.5 1.5 0 013.001.002zM351.587 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM370.555 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM389.522 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM465.394 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM484.362 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM503.33 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.002zM522.298 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM313.651 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 193.395a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM408.49 193.395a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM427.458 193.395a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002zM446.427 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 212.619a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0z"></path><path fill="none" stroke="#4831d4" strokeMiterlimit="50" strokeWidth="2" d="M16.753 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM44.822 9.614a7.892 7.892 0 11-15.784-.002 7.892 7.892 0 0115.784.002zM72.89 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.783 0zM100.96 9.614a7.892 7.892 0 11-15.783-.002 7.892 7.892 0 0115.783.002zM129.028 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0z"></path></svg>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full mt-12">
        <div className="hidden md:block ml-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="275" height="143" viewBox="0 0 325 193" data-shape="true" aria-hidden="true" id="cs-pattern-left"><path fill="none" stroke="#4831d4" strokeMiterlimit="50" strokeWidth="2" d="M17.053 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM45.122 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM73.19 9.57a7.891 7.891 0 11-15.781 0 7.891 7.891 0 0115.782 0zM101.26 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM129.329 9.57a7.891 7.891 0 11-15.783 0 7.891 7.891 0 0115.783 0zM238.083 103.963v0l-.561 22.259v0l22.259-.561v0l-.561 22.258v0l22.259-.56v0l-.561 22.258v0l22.259-.56v0l-.559 22.26v0l22.26-.56v0"></path></svg>
        </div>
        {/* Right Side */}
        <div className="text-left md:ml-12">
        <h1
            className={`text-4xl md:text-6xl pb-4 text-[#4831d4] font-bold transform transition-all duration-700 ease-in-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Engineering
          </h1>
          <p
            className={`max-w-xl text-[19px] md:text-[22px] leading-relaxed text-gray-600 transform transition-all duration-700 ease-in-out delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            I build robust applications prioritizing clean architecture, scalability, and user-centric design. I collaborate closely with cross-functional teams, utilizing agile practices and iterative development to deliver high-quality, practical solutions.
          </p>
        </div>
      </div>
     </section>
   )
 }
 