'use client'

import { useState } from 'react';
import { Lilita_One } from 'next/font/google';
import Link from 'next/link';
import { useControlledScroll } from '../context/ScrollContext';

const lilita_one = Lilita_One({
  subsets: ['latin'],
  weight: '400', // Adjust weights as needed
});

export default function LandingNavbar() {
  const visibleSection = useControlledScroll(['section1', 'section2', 'section3', 'section4', 'section5']);
  const isFirstPage = visibleSection === 'section1';
  const isThirdPage = visibleSection === 'section3';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-[3em] md:p-[6em] h-[7em] md:h-[11.12em] bg-transparent w-full text-lg fixed z-50 transition-transform duration-300">
      <div
        className={`${lilita_one.className} text-3xl md:text-[2.5em] font-bold transition-all duration-300 ${
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
          className={`block h-[2px] w-full z-10 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'bg-[#4831d4] rotate-45 translate-y-[16px]' : isThirdPage ? 'bg-[#ccf381]' : isFirstPage ? 'bg-[#ccf381] md:bg-[#4831d4]' : 'bg-[#4831d4]'}`}
        ></span>

        {/* Bottom line */}
        <span
          className={`block h-[2px] w-2/3 z-10 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'bg-[#4831d4] -rotate-45 w-full z-10' : isThirdPage ? 'bg-[#ccf381]' : isFirstPage ? 'bg-[#ccf381] md:bg-[#4831d4]' : 'bg-[#4831d4]'}`}
        ></span>
      </button>
      
      {/* Drawer */}
      <div
        className={`flex flex-col justify-around fixed md:justify-normal md:absolute w-full left-0 top-0 bottom-0 right-0 md:w-[22em] md:top-[1.4em] md:right-[3.41em] md:left-auto md:bottom-auto bg-white text-base shadow-md p-[3.5em] md:my-[1.2em] transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
      <ul
          className={`space-y-10 md:space-y-6 mt-8 relative opacity-0 transform translate-x-10 transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 translate-x-0' : ''
          }`}
          style={{ transitionDelay: '0ms' }} // First item animates immediately
        >
          <li className="relative">
            <Link
              href="/work"
              className="text-[1.5em] md:text-xl text-[#4831d4] relative group"
            >
              My Work
              <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/articles"
              className="text-[1.5em] md:text-xl text-[#4831d4] relative group"
            >
              My Articles
              <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/resume"
              className="text-[1.5em] md:text-xl text-[#4831d4] relative group"
            >
              My Résumé
              <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
            </Link>
          </li>
        </ul>

        <div
          className={`space-y-10 md:space-y-3 mt-12 opacity-0 transform translate-x-10 transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 translate-x-0' : ''
          }`}
          style={{ transitionDelay: '200ms' }} // Animates after 200ms
        >
          <h3 className="text-[1.5em] md:text-sm text-gray-500 uppercase mb-4">Say Hello</h3>
          <p className="text-[#4831d4]">
            <a href="mailto:bjarmi2001@gmail.com" className="text-[1.5em] md:text-xl text-[#4831d4] relative group">
              bjarmi2001@gmail.com
              <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
            </a>
          </p>
        </div>

        <div
          className={`mt-12 flex space-x-12 md:space-x-4 opacity-0 transform translate-x-10 transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 translate-x-0' : ''
          }`}
          style={{ transitionDelay: '400ms' }} // Animates after 400ms
        >
          <a href="https://x.com/BjarmiUr" target="_blank" className="text-xl md:text-md text-[#4831d4] relative group">
            TW
            <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
          </a>
          <a href="https://github.com/Bjarmi01" target="_blank" className="text-xl md:text-md text-[#4831d4] relative group">
            GH
            <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
          </a>
          <a href="https://www.linkedin.com/in/sigur%C3%B0ur-bjarmi-halld%C3%B3rsson-7a14a82a3/" target="_blank" className="text-xl md:text-md text-[#4831d4] relative group">
            LN
            <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
          </a>
          <a href="https://www.instagram.com/sigurdur.bjarmi/" target="_blank" className="text-xl md:text-md text-[#4831d4] relative group">
            IN
            <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
          </a>
        </div>
      </div>
    </nav>
  )
}
