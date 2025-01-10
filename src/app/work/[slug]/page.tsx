import { projects } from "@/app/data/projectsData";
import { notFound } from "next/navigation";

// Define the shape of `params` explicitly
interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  // Find the project based on the slug from params
  const project = projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!project) {
    notFound(); // Trigger 404 page if the project isn't found
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-[#f5f4fc]">
      <h1 className="text-4xl font-bold text-[#4831d4]">COMING SOON</h1>
    </main>
  );
}

// Add the generateStaticParams function here
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}
