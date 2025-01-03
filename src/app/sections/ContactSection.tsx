import Button from '../components/Button'

export default function ContactSection() {
   return (
     <section className="snap-start h-screen flex flex-col items-center justify-center p-4">
       <h1 className="text-[3.2em] text-[#4831d4] font-bold leading-none">Send me a message!</h1>
       <p className="text-[1.6em] text-gray-600 text-center leading-tight mt-4 mb-[3.3em] max-w-[701px]">Got question or a proposal, or just want <br/> to say hello? Go ahead.</p>
       <form className="w-full max-w-2xl space-y-6">
        <div className="flex flex-row space-x-14">
          {/* Name Input */}
          <div className="flex-1 relative border-b border-gray-300 focus-within:border-[#4831d4] transition-all duration-300">
            <label
              htmlFor="name"
              className="absolute left-0 top-0 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:text-[#4831d4]"
              >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="peer w-full bg-transparent border-none outline-none text-lg py-6"
              />
          </div>

          {/* Email Input */}
          <div className="flex-1 relative border-b border-gray-300 focus-within:border-[#4831d4] transition-all duration-300">
            <label
              htmlFor="email"
              className="absolute left-0 top-0 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:text-[#4831d4]"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="peer w-full bg-transparent border-none outline-none text-lg py-6"
            />
          </div>
        </div>

        {/* Message Input */}
        <div className="relative border-b border-gray-300 focus-within:border-[#4831d4] transition-all duration-300">
          <label
            htmlFor="message"
            className="absolute left-0 top-0 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:text-[#4831d4]"
            >
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Write your message here..."
            rows={2}
            className="peer w-full bg-transparent border-none outline-none text-lg py-6 resize-none"
          ></textarea>
        </div>
        <div className="flex justify-center items-center">
          <Button>Shoot</Button>
        </div>
        </form>
     </section>
   )
 }
 