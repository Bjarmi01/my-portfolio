'use client'

import { useState } from 'react';
import { Lilita_One } from 'next/font/google';
import Link from 'next/link';
import { useControlledScroll } from '../context/ScrollContext';

const lilita_one = Lilita_One({
  subsets: ['latin'],
  weight: '400', // Adjust weights as needed
});

export default function DefaultNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute flex items-center justify-between pl-[6em] p-[6em] h-[11.12em] bg-transparent w-full text-lg z-50 transition-transform duration-300">
      <div
        className={`${lilita_one.className} text-[#4831d4] text-[2.5em] font-bold transition-all duration-300`}
      >
        <a href="/">Bjarmi</a>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-[2.08em] h-[1.79em] inline-flex flex-col justify-around items-end group`}
        aria-label="Toggle menu"
      >
        {/* Top line */}
        <span
          className={`block h-[2px] w-full bg-[#4831d4] z-10 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'rotate-45 translate-y-[16px]' : ''}`}
        ></span>

        {/* Bottom line */}
        <span
          className={`block h-[2px] w-2/3 bg-[#4831d4] z-2 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? '-rotate-45 w-full z-10' : ''}`}
        ></span>
      </button>

      {isOpen && (
  <div className="absolute w-[22em] top-[1.4em] right-[3.41em] bg-white text-base shadow-md p-[3.5em] my-[1.2em]">
    <ul className="space-y-6 mt-8 relative">
      <li className="relative">
        <Link
          href="/work"
          className="text-xl text-[#4831d4] relative group"
        >
          My Work
          <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
        </Link>
      </li>
      <li className="relative">
        <Link
          href="/articles"
          className="text-xl text-[#4831d4] relative group"
        >
          My Articles
          <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
        </Link>
      </li>
      <li className="relative">
        <Link
          href="/resume"
          className="text-xl text-[#4831d4] relative group"
        >
          My Résumé
          <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
        </Link>
      </li>
    </ul>

    <div className="mt-12">
      <h3 className="text-sm text-gray-500 uppercase mb-4">Say Hello</h3>
      <p className="text-[#4831d4]">
        <a href="mailto:bjarmi2001@gmail.com" className="text-xl text-[#4831d4] relative group">
          bjarmi2001@gmail.com
          <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
        </a>
      </p>
    </div>

    <div className="mt-12 flex space-x-4">
      <a href="https://x.com/BjarmiUr" target="_blank" className="text-md text-[#4831d4] relative group">
        TW
        <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
      </a>
      <a href="https://github.com/Bjarmi01" target="_blank" className="text-md text-[#4831d4] relative group">
        GH
        <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
      </a>
      <a href="https://www.linkedin.com/in/sigur%C3%B0ur-bjarmi-halld%C3%B3rsson-7a14a82a3/" target="_blank" className="text-md text-[#4831d4] relative group">
        LN
        <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
      </a>
      <a href="https://www.instagram.com/sigurdur.bjarmi/" target="_blank" className="text-md text-[#4831d4] relative group">
        IN
        <span className="absolute w-1/5 min-w-[1em] h-full opacity-0 top-0 right-0 bg-[#4831d4] transform transition-transform duration-300 group-hover:opacity-20 group-hover:translate-x-[6px]"></span>
      </a>
    </div>
  </div>
)}
    </nav>
  )
}
