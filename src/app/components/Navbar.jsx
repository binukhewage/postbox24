"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-lg py-3 px-6 rounded-full"
          : "bg-white/95 border border-slate-100 shadow-md py-4 px-8 rounded-2xl md:rounded-full"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt="Postbox24 Logo"
            width={140}
            height={35}
            priority
            className="w-auto h-7 object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#locations"
            className="text-sm font-semibold text-slate-700 hover:text-secondary transition-colors duration-200"
          >
            Locations
          </a>
          <a
            href="#services"
            className="text-sm font-semibold text-slate-700 hover:text-secondary transition-colors duration-200"
          >
            Our Services
          </a>
          <a
            href="#faq"
            className="text-sm font-semibold text-slate-700 hover:text-secondary transition-colors duration-200"
          >
            FAQ
          </a>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="#pricing"
            className="bg-brand-dark hover:bg-slate-800 text-white text-sm font-bold py-2.5 px-6 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 block"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-secondary focus:outline-none transition-colors duration-200"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-100 flex flex-col gap-4 animate-fadeIn">
          <a
            href="#locations"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-slate-700 hover:text-secondary transition-colors duration-200 py-1"
          >
            Locations
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-slate-700 hover:text-secondary transition-colors duration-200 py-1"
          >
            Our Services
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-slate-700 hover:text-secondary transition-colors duration-200 py-1"
          >
            FAQ
          </a>
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="bg-brand-dark hover:bg-slate-800 text-white text-center font-bold py-3 rounded-xl transition-colors duration-200 mt-2 block"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
