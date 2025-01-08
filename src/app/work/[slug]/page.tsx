import { projects } from "@/app/data/projectsData";
import { notFound } from 'next/navigation';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-[#4831d4]">{project.name}</h1>
      <p className="text-lg text-gray-600 mt-4">
        Detailed information about {project.name}.
      </p>
      <figure className="mt-8">
        <span
          className="text-gray-500"
          dangerouslySetInnerHTML={{ __html: project.logo || project.name }}
        />
      </figure>
    </main>
  );
}
