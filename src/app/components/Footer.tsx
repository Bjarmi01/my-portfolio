export default function Footer() {
   return (
     <footer className="bg-[#42224A] text-[#ccf381] px-8 py-[7em]">
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
         {/* Left Section */}
         <div className="flex flex-col space-y-4">
           <h3 className="text-sm text-[#d9d9d9] uppercase tracking-wide">Say Hello</h3>
           <a href="mailto:bjarmi2001@gmail.com" className="text-lg text-[#ccf381] hover:underline">
             bjarmi2001@gmail.com
           </a>
         </div>
 
         {/* Center Section */}
         <div className="flex flex-col space-y-4 mt-8 md:mt-0">
           <a href="/" className="text-lg hover:underline">Home</a>
           <a href="/articles" className="text-lg hover:underline">My Shelf</a>
           <a href="/resume" className="text-lg hover:underline">My Résumé</a>
         </div>
 
         {/* Bottom Section */}
         <div className="w-full mt-8 md:mt-0 md:w-auto text-center md:text-right">
           <p className="text-[#d9d9d9] text-sm">
             © Sigurður Bjarmi Halldórsson 2025
           </p>
           <div className="flex justify-center md:justify-end space-x-4 mt-4">
             <a href="https://twitter.com/BjarmiUr" target="_blank" rel="noopener noreferrer" className="hover:underline">
               TW
             </a>
             <a href="https://github.com/Bjarmi01" target="_blank" rel="noopener noreferrer" className="hover:underline">
               GH
             </a>
             <a href="https://www.linkedin.com/in/sigur%C3%B0ur-bjarmi-halld%C3%B3rsson-7a14a82a3/" target="_blank" rel="noopener noreferrer" className="hover:underline">
               LN
             </a>
             <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
               YT
             </a>
           </div>
         </div>
       </div>
     </footer>
   );
 }
 