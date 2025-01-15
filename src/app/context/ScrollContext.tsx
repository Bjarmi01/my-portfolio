'use client';

import { useCallback, useEffect, useState, useMemo } from 'react';
import { useSectionContext } from '../context/SectionContext';

export const useControlledScroll = (sectionIds: string[]) => {
  const { currentSection, setCurrentSection } = useSectionContext();
  const [isScrolling, setIsScrolling] = useState(false);

  const isMobile = useMemo(() => {
    return typeof window !== 'undefined' && window.innerWidth < 768;
  }, []);

  const isFirefox = useMemo(() => {
    return (
      typeof navigator !== 'undefined' &&
      navigator.userAgent.toLowerCase().includes('firefox')
    );
  }, []);
  
  const scrollToSection = useCallback(
    (index: number) => {
    const targetSection = document.getElementById(sectionIds[index]);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setCurrentSection(index);
      }
    },
    [sectionIds, setCurrentSection]
  );

  useEffect(() => {
    if (isMobile) return;
    
    const handleWheel = (event: WheelEvent) => {
      if (!isFirefox) {
        event.preventDefault(); // Only prevent default on non-Firefox browsers
      }    

      if (isScrolling) return;
      
      const deltaYNormalized = Math.sign(event.deltaY) * Math.min(Math.abs(event.deltaY), 70);

      const direction = Math.sign(deltaYNormalized);
      const newSectionIndex = Math.max(
        0,
        Math.min(sectionIds.length - 1, currentSection + direction)
      );

      if (newSectionIndex !== currentSection) {
        setIsScrolling(true);
        scrollToSection(newSectionIndex);
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (isScrolling) return;

      const { key } = event;
      const isSpacebar = key === ' ' || key === 'Spacebar';
      const isArrowDown = key === 'ArrowDown';
      const isArrowUp = key === 'ArrowUp';

      if (isSpacebar || isArrowDown) {
        event.preventDefault();
        const nextSection = Math.min(currentSection + 1, sectionIds.length - 1);
        scrollToSection(nextSection);
      }

      if (isArrowUp) {
        event.preventDefault();
        const prevSection = Math.max(currentSection - 1, 0);
        scrollToSection(prevSection);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isFirefox, isMobile, currentSection, sectionIds, isScrolling, scrollToSection]);

  return sectionIds[currentSection];
};
