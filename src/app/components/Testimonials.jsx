"use client";

import React from "react";

export default function Testimonials() {
  const reviews = [
    {
      quote: "The dynamic digital scan allows us to manage our business mail from anywhere. Postbox24 has been an absolute game-changer for our remote team.",
      author: "Lars Svensson",
      role: "Founder, Nordic Tech Solutions",
    },
    {
      quote: "A professional presence in Östermalm has boosted our credibility significantly. The setup was instant, and the mail forwarding is flawless.",
      author: "Sofia Andersson",
      role: "Director, Swedish Creative Agency",
    },
    {
      quote: "Excellent BankID integration! Registration took under 5 minutes, and our mail was scanned and forwarded immediately.",
      author: "Emil Nilsson",
      role: "COO, SwedeSaaS Group",
    },
    {
      quote: "Having a professional address in central Stockholm completely changed my business image. Very reliable support.",
      author: "Elin Lindqvist",
      role: "Freelance Designer",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Rating Stars & Title */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* 5 Stars */}
          <div className="flex items-center gap-1 text-amber-400 mb-4 text-xl">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
        </div>
      </div>

      {/* Moving Testimonials Track */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left and Right Fade Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Track container */}
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max select-none">
          {/* Double-map reviews list for seamless looping */}
          {[...reviews, ...reviews, ...reviews].map((item, idx) => (
            <div
              key={idx}
              className="w-[280px] md:w-[400px] shrink-0 bg-slate-50/50 border border-slate-200/60 p-6 md:p-8 rounded-3xl relative flex flex-col justify-between hover:shadow-md hover:border-secondary/20 transition-all duration-300 whitespace-normal"
            >
              {/* Quote Mark Watermark */}
              <div className="absolute top-4 right-6 text-secondary/10 pointer-events-none">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.85h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.85h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="relative z-10">
                <p className="text-slate-600 text-sm md:text-base leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.author}</h4>
                  <p className="text-slate-400 text-xs mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
