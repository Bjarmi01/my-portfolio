import Link from 'next/link';

export default function Footer() {
   return (
     <footer className="bg-[#42224A] text-[#ccf381] px-8 py-[7em]">
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
         {/* Left Section */}
         <div className="flex flex-col space-y-4">
           <h3 className="text-sm text-[#d9d9d9] uppercase tracking-wide">Say Hello</h3>
           <Link href="mailto:bjarmi2001@gmail.com" className="text-lg text-[#ccf381] hover:underline">
             bjarmi2001@gmail.com
           </Link>
         </div>
 
         {/* Center Section */}
         <div className="flex flex-col space-y-4 mt-8 md:mt-0">
           <Link href="/" className="text-lg hover:underline">Home</Link>
           <Link href="/articles" className="text-lg hover:underline">My Shelf</Link>
           <Link href="/resume" className="text-lg hover:underline">My Résumé</Link>
         </div>
 
         {/* Bottom Section */}
         <div className="w-full mt-8 md:mt-0 md:w-auto text-center md:text-right">
           <p className="text-[#d9d9d9] text-sm">
             © Sigurður Bjarmi Halldórsson 2025
           </p>
           <div className="flex justify-center md:justify-end space-x-4 mt-4">
             <Link href="https://twitter.com/BjarmiUr" target="_blank" rel="noopener noreferrer" className="hover:underline">
               TW
             </Link>
             <Link href="https://github.com/Bjarmi01" target="_blank" rel="noopener noreferrer" className="hover:underline">
               GH
             </Link>
             <Link href="https://www.linkedin.com/in/sigur%C3%B0ur-bjarmi-halld%C3%B3rsson-7a14a82a3/" target="_blank" rel="noopener noreferrer" className="hover:underline">
               LN
             </Link>
             <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
               YT
             </Link>
           </div>
         </div>
       </div>
     </footer>
   );
 }
 