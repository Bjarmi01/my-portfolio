export default function ArticlesPage() {
   return (
     <main className="min-h-screen flex flex-col items-center justify-center bg-[#F9F9F9] p-8">
       <h1 className="text-[3em] text-[#4831d4] font-bold">My Articles</h1>
       <p className="text-gray-600 text-lg mt-4">
         Insights on web development, design, and my personal journey.
       </p>
       <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
           <h2 className="text-[#4831d4] font-bold text-lg">Article 1</h2>
           <p className="text-gray-600 text-sm mt-2">A brief description of the article.</p>
         </div>
         <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
           <h2 className="text-[#4831d4] font-bold text-lg">Article 2</h2>
           <p className="text-gray-600 text-sm mt-2">A brief description of the article.</p>
         </div>
       </div>
     </main>
   );
 }
 