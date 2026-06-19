"use client";

import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Can I use the address for my business?",
      a: "Yes. Our addresses can be used as your official business mailing address.",
    },
    {
      q: "Can private individuals rent a postbox?",
      a: "Absolutely. Both businesses and private individuals are welcome.",
    },
    {
      q: "How quickly can I get started?",
      a: "Most postboxes can be activated shortly after your registration is completed.",
    },
    {
      q: "Can you scan my mail while I'm abroad?",
      a: "Yes. We offer mail scanning services for customers who are traveling or living outside Sweden.",
    },
    {
      q: "How long has Postbox24 been operating?",
      a: "Postbox24 has proudly provided professional postbox and mail handling services since 1999.",
    },
  ];

  return (
    <section id="faq" className="bg-white py-24 md:py-32 border-y border-[#E1EDF8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
        {/* Left Column: FAQ Accordion */}
        <div className="lg:col-span-7">
          <span className="inline-block text-[#05A7F4] text-xs font-semibold tracking-[0.15em] uppercase mb-4">FAQ</span>
          <h2 className="text-4xl font-display font-normal text-[#0a1628] mb-10 tracking-tight leading-tight">
            Frequently Asked{" "}
            <span className="italic text-[#05A7F4]">Questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#05A7F4]/30 shadow-[0_4px_20px_rgba(5,167,244,0.08)] bg-[#F7FBFF]"
                      : "border-[#E1EDF8] bg-white hover:border-[#05A7F4]/20 hover:bg-[#F7FBFF]/50"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className={`font-semibold text-sm transition-colors duration-200 ${isOpen ? "text-[#0a1628]" : "text-slate-700 group-hover:text-[#0a1628]"}`}>
                      {faq.q}
                    </span>
                    <span className={`ml-4 shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#05A7F4] text-white rotate-90" : "bg-[#F7FBFF] text-slate-400 border border-[#E1EDF8]"}`}>
                      <FiChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: About Card */}
        <div className="lg:col-span-5">
          <div className="bg-[#0a1628] text-white rounded-3xl p-8 shadow-[0_16px_48px_rgba(10,22,40,0.2)] relative overflow-hidden border border-[#1E293B]">
            {/* Ambient glows */}
            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#05A7F4]/12 rounded-full blur-[60px] blob-2 pointer-events-none" />
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#05A7F4]/8 rounded-full blur-[50px] blob-1 pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block text-[#05A7F4] text-[10px] font-bold tracking-[0.15em] uppercase mb-3">Since 1999</span>
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">About Postbox24</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                For over 25 years, Postbox24 has provided secure, flexible, and professional mailing solutions across Sweden. From entrepreneurs launching new businesses to international companies seeking a Swedish presence, our services help customers receive and manage mail with confidence, convenience, and privacy.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/8">
                {[
                  { val: "15+", label: "Years" },
                  { val: "10k+", label: "Clients" },
                  { val: "99.9%", label: "Accuracy" },
                ].map(({ val, label }) => (
                  <div key={label} className="text-center md:text-left">
                    <div className="text-[#05A7F4] font-black text-2xl mb-1 leading-none">{val}</div>
                    <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}