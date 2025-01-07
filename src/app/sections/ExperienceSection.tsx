import Image from 'next/image';

export default function ExperienceSection() {
   return (
     <section id="section3" className="snap-start h-screen flex flex-row items-center justify-between px-40 mt-[5.5vh] bg-[#4831d4]">
      <div className='w-1/2'>
        <h1 className="text-[#ccf381] max-w-[25vw] leading-none text-[4em] font-bold">My Journey So Far</h1>
        <p className="text-white max-w-[27vw] leading-relaxed mt-4">  At <strong>Beanfee</strong>, I developed scalable, clean-code solutions with <strong>TypeScript</strong>, <strong>Flutter</strong>, and <strong>Firebase</strong>. I also contributed to improving user experiences at <strong>Stokkur</strong>, using <strong>agile methodologies</strong>.</p>
        <p className="text-white max-w-[27vw] leading-relaxed mt-4">  My <strong>Showdeck project</strong> during university gave me hands-on experience in <strong>full-stack development</strong>, using <strong>Vue.js</strong>, <strong>FastAPI</strong>, and <strong>Docker</strong> to solve complex challenges.</p>
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
 