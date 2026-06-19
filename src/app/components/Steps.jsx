"use client";

import React from "react";

export default function Steps() {
  const steps = [
    {
      n: "01",
      title: "Choose Your Address",
      desc: "Select the PO box and location that best fit your needs.",
    },
    {
      n: "02",
      title: "Register the Address",
      desc: "Use it as your official mailing address for business or personal purposes.",
    },
    {
      n: "03",
      title: "Receive Your Mail",
      desc: "Collect your mail whenever it is convenient for you.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-18">
          <span className="inline-block text-[#05A7F4] text-xs font-semibold tracking-[0.15em] uppercase mb-4">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-5 tracking-tight leading-tight">
            Get Started in{" "}
            <span className="italic text-[#05A7F4]">3 Simple Steps</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Establish your official presence in Sweden in less than 5 minutes with our fully digital process.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-start justify-between gap-10 md:gap-6">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[2.6rem] left-[calc(16.66%+2.5rem)] right-[calc(16.66%+2.5rem)] h-px bg-gradient-to-r from-[#E1EDF8] via-[#05A7F4]/30 to-[#E1EDF8] z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal flex-1 flex flex-col items-center text-center relative z-10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Number circle */}
              <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[#E1EDF8] flex flex-col items-center justify-center mb-6 shadow-[0_4px_16px_rgba(5,167,244,0.08)] relative group hover:border-[#05A7F4]/40 hover:shadow-[0_8px_24px_rgba(5,167,244,0.14)] transition-all duration-300">
                <span className="text-[10px] font-bold text-[#05A7F4] tracking-widest uppercase opacity-60">Step</span>
                <span className="text-2xl font-black text-[#0a1628] leading-none">{step.n}</span>
              </div>
              <h3 className="text-base font-bold text-[#0a1628] mb-2.5">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}