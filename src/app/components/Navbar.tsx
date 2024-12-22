'use client'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between p-7 h-20 bg-transparent w-full text-lg fixed">
      <div>Bjarmi</div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-6 h-4 flex flex-col justify-around items-end group"
        aria-label="Toggle menu"
      >
        {/* Top line */}
        <span
          className={`block h-[2px] w-full bg-sky-950 z-10 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'rotate-45 translate-y-[7px] w-7' : ''}`}
        ></span>

        {/* Bottom line */}
        <span
          className={`block h-[2px] w-2/3 bg-sky-950 z-2 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? '-rotate-45 translate-x-[1px] w-7 z-10' : ''}`}
        ></span>
      </button>

      {isOpen && (
        <div className="absolute top-3 right-3 bg-white text-base shadow-lg rounded p-10">
          <ul className="space-y-2">
            <li><a href="#about" className="block hover:text-red-500">About</a></li>
            <li><a href="#experience" className="block hover:text-red-500">Experience</a></li>
            <li><a href="#projects" className="block hover:text-red-500">Projects</a></li>
            <li><a href="#contact" className="block hover:text-red-500">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}
