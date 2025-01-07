'use client';

import { useEffect, useState } from 'react';

export default function SectionIndicator() {
  const sections = 5; // Number of sections
  const [activeSection, setActiveSection] = useState(0);

  // Track active section using Intersection Observer
  useEffect(() => {
    const sectionElements = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sectionElements).indexOf(entry.target);
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionElements.forEach((sec) => observer.observe(sec));

    return () => {
      sectionElements.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <div className="fixed top-[70%] right-12 flex flex-col items-center space-y-4 transform -translate-y-1/2">
      {Array.from({ length: sections }, (_, i) => (
        <div
          key={i}
          onClick={() => {
            const section = document.querySelectorAll('section')[i];
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className={`relative cursor-pointer transition-all duration-300 ${
            activeSection === 2
              ? i === activeSection
                ? 'border-2 border-[#ccf381] bg-transparent w-[1em] h-[1em]'
                : 'bg-[#ccf381] rotate-45 w-[0.7em] h-[0.7em]'
              : i === activeSection
              ? 'border-2 border-[#4831d4] bg-transparent w-[1em] h-[1em]'
              : 'bg-[#4831d4] rotate-45 w-[0.7em] h-[0.7em]'
          }`}
        >
        </div>
      ))}
    </div>
  );
}
