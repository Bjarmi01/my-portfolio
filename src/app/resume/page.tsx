'use client'

import Image from 'next/image';
import Link from 'next/link';
import jsPDF from 'jspdf';
import { resumeData } from "../data/resumeData";

export default function ResumePage() {
  const {education, technicalSkills, experience, references } = resumeData;

  const downloadPDF = () => {
    const element = document.querySelector('#resume-content');
    if (!element) {
      console.error('Resume content not found!');
      return;
    }
  
    const doc = new jsPDF('p', 'pt', 'a4');
    doc.html(element as HTMLElement, {
      callback: function (doc) {
        doc.save('resume.pdf');
      },
      x: 10,
      y: 10,
      html2canvas: {
        scale: 0.5, // Scale the content to fit within A4 dimensions
      },
    });
  };  

  return (
    <main className="bg-white">
      <div className="relative flex flex-row bg-[#f5f4fc] xl:my-[15em] xl:mx-[10em] py-[13em] xl:py-[6.7em] px-[3.5em] rounded-lg" id="resume-content">
        <div className="absolute right-[2em] top-[2em] flex items-center space-x-4">
          <Link 
            href="https://www.linkedin.com/in/sigur%C3%B0ur-bjarmi-halld%C3%B3rsson-7a14a82a3/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn Profile"
            className="cursor-pointer"  
          >
            <Image
              src="/images/linkedin-icon.svg"
              alt="LinkedIn Icon"
              width={20}
              height={20}
              className="object-cover"
            />
          </Link>
          <button
            onClick={downloadPDF}
            className="flex items-center space-x-2 text-[#4831d4] font-semibold cursor-pointer"
          >
            <Image
              src="/images/download-icon.svg"
              alt="Download Icon"
              width={20}
              height={20}
              className="object-cover"
            />
            <span>Download</span>
          </button>
        </div>
        <section className="flex flex-col mr-24">
          <div className="flex items-baseline">
            <a
              href="https://bjarmi.dev"
              target="_blank"
              className="relative inline-block text-[#4831d4] text-lg font-bold z-0 after:content-[''] after:bg-[#ccf381] after:h-[0.6em] after:w-[109%] after:block after:absolute after:-mt-2.5 after:-ml-[4%] after:-z-10 after:transition-transform after:duration-300 hover:after:translate-y-[0.2em] hover:after:scale-y-50"
              >
              bjarmi.dev
            </a>
          </div>
          <span className="text-lg">Reykjavík, Iceland</span>
          <div className="flex items-baseline">
            <a
              href="mailto:bjarmi2001@gmail.com"
              className="relative inline-block text-[#4831d4] text-lg font-bold z-0 mb-[2em] after:content-[''] after:bg-[#ccf381] after:h-[0.6em] after:w-[109%] after:block after:absolute after:top-[60%] after:left-[-4%] after:-z-10 after:transition-transform after:duration-300 hover:after:translate-y-[0.2em] hover:after:scale-y-50"
            >
              bjarmi2001@gmail.com
            </a>
          </div>
          <div className="gap-4">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category} className="mb-[2em]">
                <h2 className="text-xl font-bold text-[#4831d4]">{category}</h2>
                <ul className="list-none">
                  {skills.map((skill, idx) => (
                    <li 
                      key={idx} 
                      className="relative pl-4 text-[#474747bf] before:content-[''] before:w-[0.5em] before:h-[0.5em] before:bg-current before:inline-block before:absolute before:left-0 before:top-[0.5em]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <div>
          <header className="text-left mb-16">
            <h1 className="text-6xl leading-none font-bold text-[#4831d4] mb-[0.5em]">Sigurður Bjarmi<br />Halldórsson</h1>
            <h2 className="text-gray-600 text-[1.6em] m-0 max-w-[70%]">Frontend Developer with Expertise in Modern Technologies and Distributed Systems.</h2>
            <p className="text-gray-600 max-w-[70%] text-[1.2em] mt-[2em]">
            Experienced in full-stack and cross-platform development, I specialize in 
    creating scalable, efficient, and user-friendly solutions. With a strong foundation 
    in Flutter, Vue.js, and TypeScript, I thrive on solving complex problems, 
    collaborating with teams, and building impactful software solutions.
            </p>
            <hr className="border-t border-gray-300 mt-12 w-[110%] -ml-[8%]" />
          </header>

          <section className="mb-12">
            <h2 className="relative inline-block text-[1.424em] font-bold text-[#4831d4] z-0 after:content-[''] after:bg-[#ccf381] after:h-[0.6em] after:w-[109%] after:block after:absolute after:-mt-4 after:-ml-[4%] after:-z-10">
              Education
            </h2>
            {education.map((edu, idx) => (
              <div key={idx} className="mt-4">
                <header className="flex flex-row justify-between">
                  <h3 className="text-[1.266em] font-bold">{edu.institution}
                    <span className="text-gray-600 font-normal"> | {edu.degree}</span>
                  </h3>
                  <p className="text-sm text-gray-500">{edu.period}</p>
                </header>
                {edu.details && (
                  <ul className="list-none mt-2 max-w-[70%]">
                    {edu.details.map((detail, index) => (
                      <li key={index} className="relative pl-4 text-[#474747bf] before:content-[''] before:w-[0.5em] before:h-[0.5em] before:bg-current before:inline-block before:absolute before:left-0 before:top-[0.5em]">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>


          <section className="mb-12">
            <h2 className="relative inline-block text-[1.424em] font-bold text-[#4831d4] z-0 after:content-[''] after:bg-[#ccf381] after:h-[0.6em] after:w-[109%] after:block after:absolute after:-mt-4 after:-ml-[4%] after:-z-10">
              Experience
            </h2>
            {experience.map((job, idx) => (
              <div key={idx} className="mt-4">
                 <header className="flex flex-row justify-between">
                  <h3 className="text-[1.266em] font-bold">{job.company}
                    <span className="text-gray-600 font-normal"> | {job.role}</span>
                  </h3>
                  <p className="text-sm text-gray-500">{job.period}</p>
                </header>
                <ul className="list-none mt-2 max-w-[70%]">
                  {job.points.map((point, index) => (
                    <li key={index} className="relative pl-4 text-[#474747bf] before:content-[''] before:w-[0.5em] before:h-[0.5em] before:bg-current before:inline-block before:absolute before:left-0 before:top-[0.5em]">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

            <section className="mb-12">
            <h2 className="relative inline-block text-[1.424em] font-bold text-[#4831d4] z-0 after:content-[''] after:bg-[#ccf381] after:h-[0.6em] after:w-[109%] after:block after:absolute after:-mt-4 after:-ml-[4%] after:-z-10">
              References
            </h2>
            <ul className="list-none mt-4">
              {references.map((reference, idx) => (
                <li key={idx} className="relative mb-4 pl-4 text-[#474747bf] before:content-[''] before:w-[0.5em] before:h-[0.5em] before:bg-current before:inline-block before:absolute before:left-0 before:top-[0.5em]">
                  <h3 className="font-bold text-[#4831d4]">
                    {reference.name}
                  </h3>
                  <p className="text-gray-600">
                    {reference.title} | {reference.phone} |{" "}
                    <a
                      href={`mailto:${reference.email}`}
                      className="text-[#4831d4] underline"
                    >
                      {reference.email}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <section className="mb-12">
            <h2 className="relative inline-block text-[1.424em] font-bold text-[#4831d4] z-0 after:content-[''] after:bg-[#ccf381] after:h-[0.6em] after:w-[109%] after:block after:absolute after:-mt-4 after:-ml-[4%] after:-z-10">
              Projects
            </h2>
            <p className="text-gray-600 max-w-[70%] text-[1.2em]">
              Link to some of my work can be found here  
              <a
                href="https://bjarmi.dev/work"
                target="_blank"
                className="relative inline-block ml-2 text-[#4831d4] text-lg font-bold z-0 after:content-[''] after:bg-[#ccf381] after:h-[0.6em] after:w-[109%] after:block after:absolute after:-mt-2.5 after:-ml-[4%] after:-z-10 after:transition-transform after:duration-300 hover:after:translate-y-[0.2em] hover:after:scale-y-50"
                >
                bjarmi.dev/work
              </a>
            </p>
            </section>
          </div>
        </div>
    </main>
  );
}
