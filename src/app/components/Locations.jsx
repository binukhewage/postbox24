"use client";

import React from "react";
import Image from "next/image";

export default function Locations() {
  return (
    <section id="locations" className="bg-slate-50/50 py-20 md:py-24 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Prime Swedish Locations
            </h2>
            <p className="text-slate-600 text-lg">
              Provide prestigious address options in Sweden's two largest business cities.
            </p>
          </div>
          
          {/* Quick Info Badges */}
          <div className="flex flex-wrap gap-3 text-xs font-semibold">
            <span className="flex items-center gap-1.5 bg-green-500/10 text-green-700 px-3.5 py-1.5 rounded-full border border-green-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Stockholm: East and West
            </span>
            <span className="flex items-center gap-1.5 bg-blue-500/10 text-blue-700 px-3.5 py-1.5 rounded-full border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Gothenburg: Strategic Hub
            </span>
          </div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Stockholm Card */}
          <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group flex flex-col justify-between">
            {/* Map Placeholder Image */}
            <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden border-b border-slate-150">
              <Image
                src="/stockolm.webp"
                alt="Map preview of Stockholm, Östermalm"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover group-hover:scale-101 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              
              {/* Floating Address Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-slate-200/50 shadow px-4 py-2 rounded-xl text-xs font-extrabold text-slate-800">
                📍 Östermalm, Stockholm
              </div>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Stockholm Flagship Address</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Position your company in the prestigious business district of Östermalm. Ideal for tech startups, premium consulting firms, and established corporate brands looking for top-tier branding.
                </p>
                {/* Stockholm Sub-locations */}
                <div className="mb-6">
                  <h4 className="text-xxs font-bold text-slate-400 uppercase tracking-wider mb-2">Sub-Locations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Södermalm", "Farsta", "Skärholmen"].map((loc) => (
                      <span key={loc} className="bg-slate-50 border border-slate-200/60 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full">
                        📍 {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">Starting at 129kr / mo</span>
                <a
                  href="#pricing"
                  className="text-slate-900 hover:text-secondary font-bold text-sm flex items-center gap-1 transition-colors duration-200"
                >
                  View Offers
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Gothenburg Card */}
          <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group flex flex-col justify-between">
            {/* Map Placeholder Image */}
            <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden border-b border-slate-150">
              <Image
                src="/gothernburg.webp"
                alt="Map preview of Gothenburg, Inom Vallgraven"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover group-hover:scale-101 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              
              {/* Floating Address Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-slate-200/50 shadow px-4 py-2 rounded-xl text-xs font-extrabold text-slate-800">
                📍 Inom Vallgraven, Gothenburg
              </div>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Gothenburg Strategic Hub</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Set up a local presence in Sweden's industrial capital and largest shipping port. Outstanding logistics access, perfect for trade companies, e-commerce brands, and regional support offices.
                </p>
                {/* Gothenburg Sub-locations */}
                <div className="mb-6">
                  <h4 className="text-xxs font-bold text-slate-400 uppercase tracking-wider mb-2">Sub-Locations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Central location"].map((loc) => (
                      <span key={loc} className="bg-slate-50 border border-slate-200/60 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full">
                        📍 {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">Starting at 199kr / mo</span>
                <a
                  href="#pricing"
                  className="text-slate-900 hover:text-secondary font-bold text-sm flex items-center gap-1 transition-colors duration-200"
                >
                  View Offers
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
