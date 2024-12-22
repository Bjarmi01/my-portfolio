import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="snap-start h-screen custom-gradient md:bg-custom-gradient flex flex-col items-center justify-center p-4">
      <div className="w-48 h-48 mb-4 ml-64 border-2 border-white">

      <Image
        src="/images/placeholder_avatar.png"
        alt="My Photo"
        width={200}
        height={200}
        className="mt-[-10px] ml-[-10px]"
        />
        </div>
      <h1 className="text-3xl font-semibold mb-2">Welcome to My Portfolio</h1>
      <p className="text-center max-w-md">
        A quick glimpse into who I am, what I do, and what I’ve built.
      </p>
    </section>
  )
}
