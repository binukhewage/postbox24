"use client";

import React from "react";

export default function Services() {
  const audience = [
    {
      title: "Swedish Entrepreneurs",
      desc: "Launching your startup or scaling your existing business with a premium capital presence.",
      icon: (
        <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Remote Individuals",
      desc: "Freelancers and remote workers who want to separate their personal address from business records.",
      icon: (
        <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "International Companies",
      desc: "Setting up a local Swedish branch with a registered address in a reputable business district.",
      icon: (
        <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V9a2 2 0 00-2-2h-1.03a2 2 0 01-1.87-1.3L13 2.5M12 21a9 9 0 110-18 9 9 0 010 18z" />
        </svg>
      ),
    },
  ];

  const suite = [
    "Virtual Addresses",
    "Mail Forwarding",
    "Parcel Receipt",
    "Dedicated Phone Lines",
    "Meeting Rooms",
    "Mail Scanning",
  ];

  return (
    <section className="bg-slate-50/50 py-20 md:py-24 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Who Our Services Are For */}
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Who Our Services Are For
          </h2>
          <div className="space-y-6">
            {audience.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/60 p-6 rounded-2xl flex gap-5 shadow-sm hover:shadow-md hover:border-secondary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Comprehensive Service Suite */}
        <div className="lg:sticky lg:top-28">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Comprehensive Service Suite
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Tailored virtual office solutions designed for today's dynamic business landscape.
          </p>

          {/* Badges cloud */}
          <div className="flex flex-wrap gap-3 mb-10">
            {suite.map((tag, idx) => (
              <span
                key={idx}
                className="bg-white border border-slate-200/80 text-slate-700 font-semibold px-4 py-2 rounded-full text-sm shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Referral card matching mockup */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm relative overflow-hidden group">
            {/* Top accent light blue strip */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-secondary" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-secondary tracking-wider uppercase mb-1">Referral Platform</div>
                <h4 className="font-extrabold text-slate-900 text-lg mb-2">Get 1 Month Free Referral Code</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Invite your friends to register and receive rewards. Share your custom link today.
                </p>
                <button className="text-secondary font-bold text-sm flex items-center gap-1 hover:text-secondary-hover transition-colors duration-200">
                  Find out how it works 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
