"use client";

import React from "react";
import { RefreshCw, Clock, Globe } from "lucide-react";

export default function HighlightsBanner() {
  const benefits = [
    {
      title: "3 Months Free Switch",
      desc: "Transfer your postbox to us and get 3 months free. Proof of current provider required.",
      icon: RefreshCw,
    },
    {
      title: "24/7 Letter Drop-Off",
      desc: "Bring your letters 24/7, making mail handling fit your schedule completely.",
      icon: Clock,
    },
    {
      title: "Mail Scanning",
      desc: "We scan incoming mail and send it digitally so you never miss important correspondence.",
      icon: Globe,
    },
  ];

  return (
    <section className="bg-[#05A7F4]/6 py-10 md:py-12 relative overflow-hidden border-y border-[#05A7F4]/15">
      {/* Subtle background decorative element */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-20 left-1/3 w-[400px] h-[400px] bg-[#05A7F4]/3 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Compact Header */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl md:text-3xl font-display font-normal text-[#0a1628] tracking-tight leading-tight">
              Additional <span className="italic text-[#05A7F4] block md:inline">Benefits</span>
            </h2>
            <p className="text-slate-500 text-[12px] leading-relaxed mt-2.5 max-w-[220px]">
              Designed to make managing your official mail simple and hassle-free.
            </p>
          </div>

          {/* Right Column: Horizontal items */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-lg bg-[#EEF6FD] text-[#05A7F4] flex items-center justify-center border border-[#05A7F4]/10 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1628] text-sm mb-1 tracking-tight leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-500 text-[12px] leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}