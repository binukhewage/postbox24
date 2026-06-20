"use client";

import React from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      quote:
        "Smooth, simple, and professional. I've used Postbox24 for several years.",
    },
    {
      quote:
        "The perfect solution when I wanted to separate my business mail from my home address.",
    },
    {
      quote: "Excellent service, secure handling, and friendly staff.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-1 text-amber-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-4.5 h-4.5" />
            ))}
          </div>
          <span className="inline-block text-[#05A7F4] text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] tracking-tight leading-tight">
            What Our <span className="italic text-[#05A7F4]">Clients Say</span>
          </h2>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Fade masks */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div className="flex gap-5 animate-marquee hover:[animation-play-state:paused] w-max select-none">
          {[...reviews, ...reviews, ...reviews, ...reviews].map((item, idx) => (
            <div
              key={idx}
              className="w-[280px] md:w-[320px] shrink-0 bg-[#F7FBFF] border border-[#E1EDF8] p-6 md:p-7 rounded-2xl relative flex flex-col justify-center hover:shadow-[0_6px_24px_rgba(5,167,244,0.1)] hover:border-[#05A7F4]/25 transition-all duration-300 whitespace-normal"
            >
              {/* Quote watermark */}
              <div className="absolute top-4 right-5 text-[#05A7F4]/8 pointer-events-none">
                <FaQuoteRight className="w-8 h-8" />
              </div>

              <p className="text-slate-600 text-sm leading-[1.75] italic relative z-10">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
