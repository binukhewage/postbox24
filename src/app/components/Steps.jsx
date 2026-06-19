"use client";

import React from "react";

export default function Steps() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-slate-600">
            Establish your official presence in Sweden in less than 5 minutes with our fully digital process.
          </p>
        </div>

        {/* Steps Flow Container */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4">
            {/* Step 1 */}
            <div className="flex-1 flex flex-col items-center group text-center">
              {/* Number Circle */}
              <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-secondary font-black text-2xl mb-6 shadow-sm group-hover:scale-105 group-hover:border-secondary group-hover:shadow-md transition-all duration-300 relative bg-white">
                <div className="absolute inset-2 rounded-full bg-secondary/5 -z-10" />
                01
              </div>
              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Choose Your Address</h3>
              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Select the PO box and location that best fit your needs.
              </p>
            </div>

            {/* Flow Arrow 1 */}
            <div className="hidden md:flex items-center justify-center self-start mt-7 text-secondary/35 shrink-0 animate-pulse">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="flex-1 flex flex-col items-center group text-center">
              {/* Number Circle */}
              <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-secondary font-black text-2xl mb-6 shadow-sm group-hover:scale-105 group-hover:border-secondary group-hover:shadow-md transition-all duration-300 relative bg-white">
                <div className="absolute inset-2 rounded-full bg-secondary/5 -z-10" />
                02
              </div>
              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Register the Address</h3>
              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Use it as your official mailing address for business or personal purposes.
              </p>
            </div>

            {/* Flow Arrow 2 */}
            <div className="hidden md:flex items-center justify-center self-start mt-7 text-secondary/35 shrink-0 animate-pulse">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="flex-1 flex flex-col items-center group text-center">
              {/* Number Circle */}
              <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-secondary font-black text-2xl mb-6 shadow-sm group-hover:scale-105 group-hover:border-secondary group-hover:shadow-md transition-all duration-300 relative bg-white">
                <div className="absolute inset-2 rounded-full bg-secondary/5 -z-10" />
                03
              </div>
              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Receive Your Mail</h3>
              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Collect your mail whenever it is convenient for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
