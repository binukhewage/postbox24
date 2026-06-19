"use client";

import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Locations() {
  return (
    <section id="locations" className="bg-[#F7FBFF] py-24 md:py-32 border-y border-[#E1EDF8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <span className="inline-block text-[#05A7F4] text-xs font-semibold tracking-[0.15em] uppercase mb-4">Locations</span>
            <h2 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-4 tracking-tight leading-tight">
              Prime Swedish{" "}
              <span className="italic text-[#05A7F4]">Locations</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Prestigious address options in Sweden's two largest business cities.
            </p>
          </div>

          
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stockholm Card */}
          <div className="reveal group bg-white rounded-3xl border border-[#E1EDF8] overflow-hidden shadow-[0_4px_20px_rgba(5,167,244,0.06)] hover:shadow-[0_12px_40px_rgba(5,167,244,0.12)] transition-all duration-400 flex flex-col">
            <div className="relative w-full aspect-[16/9] bg-[#F7FBFF] overflow-hidden">
              <Image
                src="/stockolm.webp"
                alt="Map preview of Stockholm, Östermalm"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 via-transparent to-transparent" />
              
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#0a1628] mb-2">Stockholm Flagship Address</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  Position your company in the prestigious business district of Östermalm. Ideal for tech startups, premium consulting firms, and established corporate brands looking for top-tier branding.
                </p>
                <div className="mb-5">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Sub-Locations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Södermalm", "Farsta", "Skärholmen"].map((loc) => (
                      <span key={loc} className="bg-[#F7FBFF] border border-[#E1EDF8] text-slate-500 text-xs font-medium px-3 py-1 rounded-lg">
                        📍 {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#E1EDF8]">
                <span className="text-xs font-bold text-[#05A7F4] uppercase tracking-wider">Starting at 129kr / mo</span>
                <a href="#pricing" className="inline-flex items-center gap-1 text-[#0a1628] hover:text-[#05A7F4] font-semibold text-sm transition-colors duration-200 group/link">
                  View Offers
                  <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Gothenburg Card */}
          <div className="reveal reveal-delay-1 group bg-white rounded-3xl border border-[#E1EDF8] overflow-hidden shadow-[0_4px_20px_rgba(5,167,244,0.06)] hover:shadow-[0_12px_40px_rgba(5,167,244,0.12)] transition-all duration-400 flex flex-col">
            <div className="relative w-full aspect-[16/9] bg-[#F7FBFF] overflow-hidden">
              <Image
                src="/gothernburg.webp"
                alt="Map preview of Gothenburg, Inom Vallgraven"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 via-transparent to-transparent" />
              
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#0a1628] mb-2">Gothenburg Strategic Hub</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  Set up a local presence in Sweden's industrial capital and largest shipping port. Outstanding logistics access, perfect for trade companies, e-commerce brands, and regional support offices.
                </p>
                <div className="mb-5">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Sub-Locations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Central location"].map((loc) => (
                      <span key={loc} className="bg-[#F7FBFF] border border-[#E1EDF8] text-slate-500 text-xs font-medium px-3 py-1 rounded-lg">
                        📍 {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#E1EDF8]">
                <span className="text-xs font-bold text-[#05A7F4] uppercase tracking-wider">Starting at 199kr / mo</span>
                <a href="#pricing" className="inline-flex items-center gap-1 text-[#0a1628] hover:text-[#05A7F4] font-semibold text-sm transition-colors duration-200 group/link">
                  View Offers
                  <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}