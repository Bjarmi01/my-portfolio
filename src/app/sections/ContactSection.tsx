'use client';

import { useState, useEffect } from 'react';
import Button from '../components/Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('#section5');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        setStatus(data.message || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="section5" 
      className="snap-start h-screen flex flex-col items-center justify-center p-4 overflow-hidden"
    >
      <h1
        className={`text-[3.2em] text-[#4831d4] font-bold leading-none transform transition-all duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        Send me a message!
      </h1>
      <p
        className={`text-[1.6em] text-gray-600 text-center leading-tight mt-4 mb-[3.3em] max-w-[701px] transform transition-all duration-1000 ease-in-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        Have a question, proposal, or just want <br /> to say hello? Let's connect!
      </p>
      <form className="w-full max-w-2xl space-y-6" onSubmit={handleSubmit}>
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
              value={formData.name}
              onChange={handleChange}
              className="peer w-full bg-transparent border-none outline-none text-lg py-6"
              required
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
              value={formData.email}
              onChange={handleChange}
              className="peer w-full bg-transparent border-none outline-none text-lg py-6"
              required
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
            value={formData.message}
            onChange={handleChange}
            rows={2}
            className="peer w-full bg-transparent border-none outline-none text-lg pb-6 mt-6 resize-none"
            required
          ></textarea>
        </div>
        <div className="flex justify-center items-center">
          <Button type="submit">{loading ? "Sending..." : "Shoot"}</Button>
        </div>
        {status && <p className="text-center mt-4 text-gray-600">{status}</p>}
      </form>
    </section>
  );
}
