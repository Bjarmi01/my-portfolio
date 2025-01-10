import React, { MouseEventHandler } from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
  children,
  onClick,
  href,
  className = "",
  type = "button",
}: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`relative inline-flex items-center justify-between px-[4.6em] py-[1.6em] border border-[#4831d4] text-[#4831d4] font-bold uppercase tracking-wide transition-all duration-300 overflow-hidden group ${className}`}
      >
        <span className="absolute inset-0 w-0 bg-[#4831d4] transition-all duration-300 group-hover:w-full"></span>
        <span className="relative group-hover:text-white">{children}</span>
        <svg
          className="ml-2 w-5 h-5 relative group-hover:text-white transition-all duration-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative inline-flex items-center justify-between px-[3em] py-[1.25em] border border-[#4831d4] text-[#4831d4] font-bold uppercase tracking-wide transition-all duration-300 overflow-hidden group ${className}`}
    >
      <span className="absolute inset-0 w-0 bg-[#4831d4] transition-all duration-300 group-hover:w-full"></span>
      <span className="relative group-hover:text-white">{children}</span>
      <svg
        className="ml-2 w-5 h-5 relative group-hover:text-white transition-all duration-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </button>
  );
}
