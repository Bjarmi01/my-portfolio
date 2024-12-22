export default function ProjectsSection() {
   return (
     <section className="snap-start h-screen flex flex-col items-center justify-center p-4 bg-gray-200">
       <h2 className="text-2xl font-bold mb-4">Projects</h2>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
         <div className="p-4 bg-white rounded shadow">
           <h3 className="font-semibold mb-2">Project A</h3>
           <p>A brief description of Project A. <a href="#" className="text-blue-600 underline">View on GitHub</a></p>
         </div>
         <div className="p-4 bg-white rounded shadow">
           <h3 className="font-semibold mb-2">Project B</h3>
           <p>A brief description of Project B. <a href="#" className="text-blue-600 underline">Demo</a></p>
         </div>
         <div className="p-4 bg-white rounded shadow">
           <h3 className="font-semibold mb-2">Project C</h3>
           <p>A brief description of Project C. <a href="#" className="text-blue-600 underline">View on GitHub</a></p>
         </div>
       </div>
     </section>
   )
 }
 