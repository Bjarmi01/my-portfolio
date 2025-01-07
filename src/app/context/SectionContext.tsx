// context/SectionContext.tsx
'use client';

import { createContext, useContext, useState } from 'react';

interface SectionContextProps {
  currentSection: number;
  setCurrentSection: (index: number) => void;
}

const SectionContext = createContext<SectionContextProps | undefined>(undefined);

export const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSectionContext must be used within a SectionProvider');
  }
  return context;
};
