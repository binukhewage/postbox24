"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border border-[#E1EDF8] shadow-[0_8px_32px_rgba(5,167,244,0.08)] py-2.5 px-5 rounded-2xl"
          : "bg-white/95 border border-[#F0F7FE] shadow-[0_2px_16px_rgba(10,22,40,0.06)] py-3.5 px-7 rounded-2xl"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Image
            src="/logo.webp"
            alt="Postbox24 Logo"
            width={140}
            height={35}
            priority
            className="w-auto h-7 object-contain transition-opacity duration-200 group-hover:opacity-80"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { href: "#locations", label: "Locations" },
            { href: "#services", label: "Our Services" },
            { href: "#faq", label: "FAQ" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-slate-600 hover:text-[#0a1628] hover:bg-[#F7FBFF] px-4 py-2 rounded-xl transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-1.5 bg-[#0a1628] text-white text-sm font-semibold py-2.5 px-5 rounded-xl transition-all duration-300 hover:bg-[#1E293B] hover:shadow-[0_4px_16px_rgba(10,22,40,0.25)] active:scale-[0.97]"
          >
            Book Now
            <FiArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-[#05A7F4] rounded-xl hover:bg-[#F7FBFF] focus:outline-none transition-all duration-200"
          aria-label="Toggle navigation menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-right ${isOpen ? "rotate-[-45deg] translate-y-[7px]" : ""}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-right ${isOpen ? "rotate-[45deg] -translate-y-[9px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-72 opacity-100 mt-4 pt-4 border-t border-[#E1EDF8]" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col gap-1 pb-2">
          {[
            { href: "#locations", label: "Locations" },
            { href: "#services", label: "Our Services" },
            { href: "#faq", label: "FAQ" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-[#05A7F4] hover:bg-[#F7FBFF] px-3 py-2.5 rounded-xl transition-all duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="bg-[#0a1628] text-white text-center font-semibold py-3 rounded-xl transition-all duration-200 hover:bg-[#1E293B] mt-2 text-sm"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}