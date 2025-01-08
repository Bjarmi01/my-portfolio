import { projects } from '../data/projectsData';
import Link from 'next/link';
import Image from 'next/image';

export default function WorkPage() {
  return (
    <main className="h-auto flex flex-col items-center bg-[#f5f4fc] py-[10.2em] px-[3.5em]">
      <header className="relative text-center mt-12 mb-[3.5em]">
        <h1 className="text-4xl font-bold text-[#474747] mt-[0.67em]">
          <span className="opacity-70">/</span>
          work
          <span className="opacity-70">.</span>
          </h1>
        <p className="text-lg text-gray-600 mt-4">
          Selected projects showcasing my skills in web and mobile development.
        </p>
      </header>

      <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-2 duration-500"
          >
            <Link
              href={
                project.internalPage
                  ? `/work/${project.name.toLowerCase().replace(/\s+/g, '-')}`
                  : `https://${project.siteName}`
              }
              target={project.internalPage ? '_self' : '_blank'}
              rel={project.internalPage ? '' : 'noopener noreferrer'}
              className="block"
            >
              <figure className="h-[10em] flex items-center justify-center bg-[#f7f6fa]">
                {project.logo && (
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={140}
                      height={140}
                      className="object-contain"
                    />
                  )}
              </figure>
              <div className="p-[2em]">
                <h5 className="text-xl font-semibold text-[#474747] ">{project.name}</h5>
                {project.siteName && (
                  <p className="text-sm text-[#4831d4] mt-2">
                    Visit: <span>{project.siteName}</span>
                  </p>
                )}
              </div>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
