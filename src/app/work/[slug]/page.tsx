import { projects } from "@/app/data/projectsData";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
  params: { slug: string }; // Define params explicitly as an object with a slug key
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!project) {
    notFound(); // Trigger a 404 if the project isn't found
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-[#f5f4fc]">
      <h1 className="text-4xl font-bold text-[#4831d4]">COMING SOON</h1>
    </main>
  );
}

// Add the generateStaticParams function
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}
