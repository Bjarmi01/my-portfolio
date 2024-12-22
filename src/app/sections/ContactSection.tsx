export default function ContactSection() {
   return (
     <section className="snap-start h-screen flex flex-col items-center justify-center p-4 bg-white">
       <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
       <p className="mb-4">Feel free to reach out if you're interested in working together or just want to say hi!</p>
       <a href="mailto:youremail@example.com" className="text-blue-600 underline">
         youremail@example.com
       </a>
     </section>
   )
 }
 