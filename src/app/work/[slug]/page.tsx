import { notFound } from 'next/navigation';
import { projects } from '@/app/data/projectsData';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProjectDetailPage({ params }: { params: any }) {
  const { slug } = params;
  const project = projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-[#f5f4fc]">
      <h1 className="text-4xl font-bold text-[#4831d4]">COMING SOON</h1>
    </main>
  );
}

// Function to generate static parameters
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return projects.map((project) => ({
    slug: project.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

