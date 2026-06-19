"use client";

import React, { useState } from "react";

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
    <section id="faq" className="bg-slate-50/50 py-20 md:py-24 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: FAQ Accordion */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left font-bold text-slate-800 hover:text-slate-950 transition-colors duration-200 focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <span className="ml-4 shrink-0 text-slate-400 group-hover:text-slate-600">
                      {isOpen ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: About Card */}
        <div className="lg:col-span-5">
          <div className="bg-brand-dark text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
            {/* Glossy background circle */}
            <div className="absolute -bottom-1/4 -right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-2xl font-bold text-white mb-4">About Postbox24</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              For over 25 years, Postbox24 has provided secure, flexible, and professional mailing solutions across Sweden. <br /> From entrepreneurs launching new businesses to international companies seeking a Swedish presence, our services help customers receive and manage mail with confidence, convenience, and privacy.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
              <div className="text-center md:text-left">
                <div className="text-secondary font-black text-2xl mb-1">15+</div>
                <div className="text-slate-500 text-xxs font-bold uppercase tracking-wider">Years</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-secondary font-black text-2xl mb-1">10k+</div>
                <div className="text-slate-500 text-xxs font-bold uppercase tracking-wider">Clients</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-secondary font-black text-2xl mb-1">99.9%</div>
                <div className="text-slate-500 text-xxs font-bold uppercase tracking-wider">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
