'use client';

import { useSectionContext } from '../context/SectionContext';

export default function SectionIndicator() {
  const sections = 5;
  const { currentSection, setCurrentSection } = useSectionContext();

  return (
    <div className="fixed top-[70%] right-[2em] md:right-24 hidden md:flex flex-col items-center space-y-4 transform -translate-y-1/2">
      {Array.from({ length: sections }, (_, i) => (
        <div
          key={i}
          onClick={() => {
            setCurrentSection(i);
            const section = document.querySelectorAll('section')[i];
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className={`relative cursor-pointer transition-all duration-300 ${
            currentSection === 2
              ? i === currentSection
                ? 'border-2 border-[#ccf381] bg-transparent w-6 h-6'
                : 'bg-[#ccf381] rotate-45 w-4 h-4'
              : i === currentSection
              ? 'border-2 border-[#4831d4] bg-transparent w-6 h-6'
              : 'bg-[#4831d4] rotate-45 w-[14px] h-[14px]'
          }`}
        />
      ))}
    </div>
  );
}
