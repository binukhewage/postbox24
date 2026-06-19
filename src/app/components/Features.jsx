"use client";

import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <section id="services" className="bg-white py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Intro */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Why Choose PostBox
          </h2>
          <p className="text-slate-600 text-lg">
            We provide the infrastructure for your success, blending 15+ years of heritage with modern digital efficiency.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Feature Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-start p-2 rounded-2xl">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Business Address</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Establish legitimacy with a prestigious physical office location in Stockholm or Gothenburg.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start p-2 rounded-2xl">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Secure Handling</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Confidential mail sorting, digital scanning, and secure forwarding of all your physical letters.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-start p-2 rounded-2xl">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 19v-8.93a2 2 0 01.89-1.664l8-5.333a2 2 0 012.22 0l8 5.333A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-2.25-1.5a2 2 0 00-2.22 0l-2.25 1.5" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Flexible Mailboxes</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Access your mail 24/7 or receive same-day notifications and PDF copies.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-start p-2 rounded-2xl">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 13a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Trusted Heritage</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Operating continuously in Sweden with thousands of satisfied local and international clients.
              </p>
            </div>
          </div>

          {/* Right Visual Column (Overlapping Images) */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] flex items-center justify-center">
            {/* Back Card: Sleek Metallic Mailboxes */}
            <div className="absolute top-0 left-0 w-[78%] aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 transition-transform duration-300 hover:scale-101">
              <Image
                src="/postbox_set.png"
                alt="Sleek metallic business postbox set"
                fill
                sizes="(max-width: 1024px) 80vw, 360px"
                className="object-cover"
              />
            </div>

            {/* Front Card: Lady Reading Mail with a Smile */}
            <div className="absolute bottom-4 right-0 w-[72%] aspect-[1/1] bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-102 hover:rotate-0 rotate-1 z-10">
              <Image
                src="/woman_reading_mail.png"
                alt="Happy businesswoman reading digitized mail"
                fill
                sizes="(max-width: 1024px) 70vw, 300px"
                className="object-cover"
              />
            </div>

            {/* Overlapping Glass Card Badge */}
            <div className="absolute -bottom-2 -left-4 max-w-[240px] bg-white/90 backdrop-blur-md border border-slate-200/60 p-4 rounded-2xl shadow-xl flex items-start gap-3.5 z-20">
              <div className="text-secondary font-black text-2xl leading-none">25+</div>
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 mb-0.5">Years of Experience</h4>
                <p className="text-[10px] text-slate-500 leading-relaxed">
                  Trusted by over 10,000 businesses globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
