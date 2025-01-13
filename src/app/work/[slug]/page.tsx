import { notFound } from 'next/navigation';
import ProjectDetail from './ProjectDetail';
import { projects } from '@/app/data/projectsData';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

// Generate Static Parameters
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return projects.map((project) => ({
    slug: project.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}
