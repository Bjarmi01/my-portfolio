'use client';

import { useEffect, useState } from 'react';

export const useControlledScroll = (sectionIds: string[]) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); // Prevent multiple scroll actions at once

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault(); // Prevent default scroll behavior

      if (isScrolling) return; // Skip if already scrolling

      const direction = Math.sign(event.deltaY); // Positive for down, negative for up
      const newSectionIndex = Math.max(
        0,
        Math.min(sectionIds.length - 1, currentSection + direction)
      );

      if (newSectionIndex !== currentSection) {
        setIsScrolling(true); // Block further scrolls during the transition
        setCurrentSection(newSectionIndex);

        const targetSection = document.getElementById(sectionIds[newSectionIndex]);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }

        // Allow scrolling again after the animation completes
        setTimeout(() => setIsScrolling(false), 800); // Adjust timeout based on scroll animation duration
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentSection, isScrolling, sectionIds]);

  return sectionIds[currentSection];
};
