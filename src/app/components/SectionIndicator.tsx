'use client'

import { useEffect, useState } from 'react'

export default function SectionIndicator() {
  const sections = 5
  const [activeSection, setActiveSection] = useState(0)

  // Track active section using Intersection Observer
  useEffect(() => {
    const sectionElements = document.querySelectorAll('section')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Array.from(sectionElements).indexOf(entry.target)
          setActiveSection(index)
        }
      })
    }, { threshold: 0.5 })
    
    sectionElements.forEach(sec => observer.observe(sec))

    return () => {
      sectionElements.forEach(sec => observer.unobserve(sec))
    }
  }, [])

  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-2">
      {Array.from({ length: sections }, (_, i) => (
        <div
          key={i}
          onClick={() => {
            const section = document.querySelectorAll('section')[i]
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
            i === activeSection ? 'bg-black' : 'bg-gray-400'
          }`}
        />
      ))}
    </div>
  )
}
