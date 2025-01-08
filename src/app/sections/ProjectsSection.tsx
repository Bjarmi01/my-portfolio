import Button from "../components/Button";

export default function ProjectsSection() {
  return (
    <section id="section4" className="snap-start h-screen flex flex-col items-center justify-center p-8 bg-[#F9F9F9]">
      <div className="flex flex-row container w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        {/* First Section */}
        <div className="flex-1 flex flex-col items-start justify-center p-[7em] border-r border-[#4831d44d]">
          <h1 className="text-[3.2em] text-[#4831d4] font-bold mb-4 leading-none">I build & design stuff</h1>
          <p className="text-[1.6em] text-gray-600 leading-tight mb-6">Open source projects, web apps and experimentals.</p>
          <Button href="/work">SEE MY WORK</Button>
        </div>

        {/* Second Section */}
        <div className="w-full flex-1 flex flex-col items-start justify-center p-[7em]">
          <h1 className="text-[3.2em] text-[#4831d4] font-bold mb-4 leading-none">I write, sometimes</h1>
          <p className="text-[1.6em] text-gray-600 leading-tight mb-6">About design, frontend dev, learning and life.</p>
          <Button href="/articles">READ MY ARTICLES</Button>
        </div>
      </div>
    </section>
  );
}
