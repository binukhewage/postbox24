"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Full-height generated Stockholm Skyline background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/heroimage.png"
          alt="Stockholm Skyline Background"
          fill
          priority
          className="object-cover object-right md:object-center"
        />
        {/* Modern white gradient/glass overlay to blend skyline with background and keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-50% to-white/10 md:to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy Column */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-amber-500/20">
            <span>🇸🇪</span> SWEDISH REGISTERED ADDRESS FROM 129 SEK/MONTH
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6">
            Exclusive Postbox Offers from{" "}
            <span className="text-secondary relative inline-block">
              Postbox24
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
            Secure a professional address with ease in the heart of Stockholm or
            Gothenburg. Establish your prestigious presence with our premium
            virtual office services tailored for freelancers and global
            enterprises.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
            <a
              href="#pricing"
              className="bg-brand-dark hover:bg-slate-800 text-white text-center font-bold py-4 px-8 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 flex items-center justify-center gap-2"
            >
              <span>🚀</span> Start Now From 129kr
            </a>
            <a
              href="#faq"
              className="border border-slate-300 hover:border-secondary hover:text-secondary text-slate-700 text-center font-bold py-4 px-8 rounded-full transition-all duration-200 flex items-center justify-center gap-2 bg-white"
            >
              <span>💬</span> Speak to our Team
            </a>
          </div>

          {/* Checkbox List */}
          <ul className="space-y-3.5 text-sm font-medium text-slate-700 bg-white/40 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/25 max-w-xl">
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary/10 text-secondary shrink-0">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              Official Address for Registration (Bolagsverket & Skatteverket)
            </li>
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary/10 text-secondary shrink-0">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              Secure Mail Handling and PDF Forwarding
            </li>
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary/10 text-secondary shrink-0">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              Premium locations (Stockholm and Gothenburg)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

