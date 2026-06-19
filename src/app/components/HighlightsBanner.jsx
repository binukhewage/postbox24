"use client";

import React from "react";

export default function HighlightsBanner() {
  return (
    <section className="bg-brand-dark text-white py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Transfer Offer */}
          <div className="flex gap-4 items-start p-4 bg-slate-900/40 rounded-2xl border border-slate-800/40 hover:border-secondary/20 transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-base text-white mb-1">Transfer Offer</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Easily transfer your current address to Postbox24 with our simple, guided process.
              </p>
            </div>
          </div>

          {/* Column 2: 24/7 Drop-Off */}
          <div className="flex gap-4 items-start p-4 bg-slate-900/40 rounded-2xl border border-slate-800/40 hover:border-secondary/20 transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-base text-white mb-1">24/7 Drop-Off</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Physical drop-off point for parcels and documents, ensuring 24/7 availability for your partners.
              </p>
            </div>
          </div>

          {/* Column 3: Digital Scanning */}
          <div className="flex gap-4 items-start p-4 bg-slate-900/40 rounded-2xl border border-slate-800/40 hover:border-secondary/20 transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0a8 8 0 11-16 0 8 8 0 0116 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-base text-white mb-1">Digital Scanning</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Secure physical-to-digital scanning, letting you read your mail from anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
