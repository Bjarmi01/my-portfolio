import Image from 'next/image';

export default function ExperienceSection() {
   return (
     <section id="section3" className="snap-start h-screen flex flex-row items-center justify-between px-40 mt-[5.5vh] bg-[#4831d4]">
      <div className='w-1/2'>
       <h1 className="text-[#ccf381] max-w-[27vw] leading-none text-[4em] font-bold">Over the years,</h1>
       <p className="text-white max-w-[27vw] leading-relaxed mt-4">I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.</p>
        <p className="text-white max-w-[27vw] leading-relaxed mt-4">Currently, I work at Shopify as a Senior Frontend Engineer crafting thoughtful and inclusive experiences that adhere to web standards for over 3 million merchants across the world.</p>
        <p className="text-white max-w-[27vw] leading-relaxed mt-4">Before now, I was Principal Frontend Engineer at hellotax, where I worked on a suite of tools and services tailored towards automated VAT compliance for multi-channel sellers in Europe.</p>
        <p className="text-white max-w-[27vw] leading-relaxed mt-4">Prior to hellotax, I was Senior frontend engineering consultant with Pixel2HTML, building JavaScript applications and interfaces for orgs and individuals.</p>
        <p className="text-white max-w-[27vw] leading-relaxed mt-4">I once also led the frontend team at Conectar, an e-learning startup through building multiple React applications into a single robust learning platform.</p>
      </div>
        <Image
          src="/images/programmer_illustration.png"
          alt="Programmer Illustration"
          width={700}
          height={722}
          className="object-cover"
          />
     </section>
   )
 }
 