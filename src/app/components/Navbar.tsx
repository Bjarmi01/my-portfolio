'use client'

import { useState } from 'react';
import { useControlledScroll } from '../context/ScrollContext';
import { Lilita_One } from 'next/font/google';

const lilita_one = Lilita_One({
  subsets: ['latin'],
  weight: '400', // Adjust weights as needed
});

export default function Navbar() {
  const visibleSection = useControlledScroll(['section1', 'section2', 'section3', 'section4', 'section5']);
  const isFirstPage = visibleSection === 'section1';
  const isThirdPage = visibleSection === 'section3';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between pl-[6em] pr-[6em] h-[11.12em] bg-transparent w-full text-lg fixed z-50">
      <div
        className={`${lilita_one.className} text-[2.5em] font-bold transition-all duration-300 ${
          isFirstPage ? 'text-[#ccf381]' : isThirdPage ? 'text-[#ccf381] text-[1.8em]' : 'text-[#4831d4] text-[1.8em]'
        }`}
      >
        <a href="/">{isFirstPage ? 'Bjarmi' : 'B'}</a>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-[2.08em] h-[1.79em] inline-flex flex-col justify-around items-end group`}
        aria-label="Toggle menu"
      >
        {/* Top line */}
        <span
          className={`block h-[2px] w-full bg-[#4831d4] z-10 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'rotate-45 translate-y-[16px]' : isThirdPage ? 'bg-[#ccf381]' : ''}`}
        ></span>

        {/* Bottom line */}
        <span
          className={`block h-[2px] w-2/3 bg-[#4831d4] z-2 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? '-rotate-45 w-full z-10' : isThirdPage ? 'bg-[#ccf381]' : ''}`}
        ></span>
      </button>

      {isOpen && (
  <div className="absolute w-[22em] top-[1.4em] right-[3.41em] bg-white text-base shadow-md p-[3.5em] my-[1.2em]">
    <ul className="space-y-6 mt-8 relative">
      <li className="relative">
        <a
          href="#work"
          className="text-xl text-[#4831d4] relative group"
        >
          My Work
          <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
        </a>
      </li>
      <li className="relative">
        <a
          href="#shelf"
          className="text-xl text-[#4831d4] relative group"
        >
          My Shelf
          <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
        </a>
      </li>
      <li className="relative">
        <a
          href="#resume"
          className="text-xl text-[#4831d4] relative group"
        >
          My Résumé
          <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
        </a>
      </li>
    </ul>

    <div className="mt-12">
      <h3 className="text-sm text-gray-500 uppercase mb-4">Say Hello</h3>
      <p className="text-[#4831d4]">
        <a href="mailto:bjarmi2001@gmail.com" className="text-xl text-[#4831d4] relative group">
          bjarmi2001@gmail.com
          <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
        </a>
        <a href="https://t.me/example" className="text-xl text-[#4831d4] relative group">
          t.me/example
          <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
        </a>
      </p>
    </div>

    <div className="mt-12 flex space-x-4">
      <a href="#twitter" className="text-md text-[#4831d4] relative group">
        TW
        <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
      </a>
      <a href="#github" className="text-md text-[#4831d4] relative group">
        GH
        <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
      </a>
      <a href="#linkedin" className="text-md text-[#4831d4] relative group">
        LN
        <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
      </a>
      <a href="#youtube" className="text-md text-[#4831d4] relative group">
        YT
        <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
      </a>
    </div>
  </div>
)}
    </nav>
  )
}
