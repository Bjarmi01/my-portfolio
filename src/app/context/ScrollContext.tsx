// context/ScrollContext.tsx
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

const ScrollContext = createContext<number>(0);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let index = 0;

      sections.forEach((section, i) => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.5) {
          index = i;
        }
      });

      setScrollIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <ScrollContext.Provider value={scrollIndex}>{children}</ScrollContext.Provider>;
};

export const useScrollIndex = () => useContext(ScrollContext);
