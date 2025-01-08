export default function ResumePage() {
   return (
     <main className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
       <h1 className="text-[3em] text-[#4831d4] font-bold">My Résumé</h1>
       <p className="text-gray-600 text-lg mt-4">
         A detailed view of my education, experience, and skills.
       </p>
       <div className="mt-8 max-w-4xl">
         <h2 className="text-[#4831d4] font-bold text-xl">Education</h2>
         <p className="text-gray-600 mt-2">B.Sc. in Computer Science, Reykjavik University (2021–2024)</p>
 
         <h2 className="text-[#4831d4] font-bold text-xl mt-6">Experience</h2>
         <p className="text-gray-600 mt-2">
           Flutter Developer at Beanfee - Worked on scalable mobile/web apps.
         </p>
       </div>
     </main>
   );
 }
 