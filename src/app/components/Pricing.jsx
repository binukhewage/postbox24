"use client";

import React from "react";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50/50 py-20 md:py-24 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Discover Our Best Deals
          </h2>
          <p className="text-slate-600 text-lg">
            Choose the plan that suits your business requirements and start utilizing your prestigious Swedish address today.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Annual Bundle */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 relative group">
            {/* Top Badge */}
            <div className="absolute top-5 right-5 bg-secondary/15 text-secondary text-xs font-bold px-3 py-1 rounded-full">
              Save 30%
            </div>

            <div>
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-secondary mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Annual Bundle</h3>
              
              {/* Description */}
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Sign up for 1 year and enjoy our lowest monthly rate plus priority support.
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900">129 kr</span>
                <span className="text-slate-500 text-sm font-medium"> / month</span>
                <div className="text-xs text-slate-400 mt-1">Billed annually</div>
              </div>
            </div>

            <button className="w-full py-3.5 px-6 rounded-2xl border-2 border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 font-bold transition-colors duration-200 text-sm active:scale-98">
              Order Now
            </button>
          </div>

          {/* Card 2: Kista 4 Deal (Featured Card) */}
          <div className="bg-brand-dark text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl relative transform md:-translate-y-4 border border-slate-800 group overflow-hidden">
            {/* Glossy radial overlay for premium highlight */}
            <div className="absolute -top-1/2 -left-1/2 w-200 h-200 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Top Badge */}
            <div className="absolute top-5 right-5 bg-secondary text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-sm">
              Popular Choice
            </div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-secondary mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.246.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.77-.564-.37-1.81.588-1.81h4.907a1 1 0 00.95-.69l1.519-4.674z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2">Kista 4 Deal</h3>
              
              {/* Description */}
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Ideal for growing businesses. Secure your spot in the Swedish tech hub with our flexible monthly plan.
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">199 kr</span>
                <span className="text-slate-400 text-sm font-medium"> / month</span>
                <div className="text-xs text-slate-400 mt-1">Cancel anytime</div>
              </div>
            </div>

            <button className="relative z-10 w-full py-3.5 px-6 rounded-2xl bg-secondary hover:bg-secondary-hover text-white font-bold transition-all duration-200 text-sm shadow-md hover:shadow-lg active:scale-98">
              Order Now
            </button>
          </div>

          {/* Card 3: Nationwide Special */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 relative group">
            {/* Top Badge */}
            <div className="absolute top-5 right-5 bg-secondary/15 text-secondary text-xs font-bold px-3 py-1 rounded-full">
              Full Suite
            </div>

            <div>
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-secondary mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Nationwide Special</h3>
              
              {/* Description */}
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Get access to premier addresses in both Stockholm and Gothenburg, including priority mail forwarding.
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900">2,400 kr</span>
                <span className="text-slate-500 text-sm font-medium"> / year</span>
                <div className="text-xs text-slate-400 mt-1">Billed annually</div>
              </div>
            </div>

            <button className="w-full py-3.5 px-6 rounded-2xl border-2 border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 font-bold transition-colors duration-200 text-sm active:scale-98">
              Order Now
            </button>
          </div>
        </div>

        {/* Redeem Offers Section */}
        <div className="mt-16 bg-sky-50/70 border border-sky-100 rounded-2xl p-6 md:py-6 md:px-8 max-w-5xl mx-auto w-full shadow-xs relative overflow-hidden group">
          {/* Ambient blur graphic inside container */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-left">
            <div className="flex-1">
              {/* Title */}
              <h3 className="text-lg font-extrabold text-slate-900 mb-1.5">
                Want to Redeem These Offers?
              </h3>
              {/* Description */}
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Visit us at one of our locations to take advantage of these exclusive promotions. Our team will help you choose the right solution and activate your postbox quickly.
              </p>
              {/* Terms Footer */}
              <p className="text-slate-400 text-[10px] italic mt-2">
                Certain offers may require eligibility verification or be subject to specific terms and conditions.
              </p>
            </div>

            {/* Button */}
            <div className="shrink-0">
              <a
                href="#locations"
                className="inline-flex items-center gap-2 bg-[#05A7F4] hover:bg-[#05A7F4]/80 text-white text-xs font-bold py-3 px-6 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-95 whitespace-nowrap"
              >
                📍 View Our Locations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
