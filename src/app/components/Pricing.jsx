"use client";

import React from "react";
import { FiMapPin, FiCalendar, FiStar, FiShield, FiRefreshCw, FiInbox, FiGlobe } from "react-icons/fi";

export default function Pricing() {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="pricing" className="relative bg-[#F7FBFF] py-24 md:py-32 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      {/* Ambient blob */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-[#05A7F4]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[#05A7F4] text-xs font-semibold tracking-[0.15em] uppercase mb-4">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-5 tracking-tight leading-tight">
            Discover Our{" "}
            <span className="italic text-[#05A7F4]">Best Deals</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Choose the plan that suits your business requirements and start utilizing your prestigious Swedish address today.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

          {/* Card 1: Annual Bundle */}
          <div className="reveal bg-white rounded-3xl border border-[#E1EDF8] p-8 flex flex-col justify-between shadow-[0_2px_16px_rgba(5,167,244,0.06)] hover:shadow-[0_8px_32px_rgba(5,167,244,0.12)] transition-all duration-400 group relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#05A7F4]/30 to-transparent" />
            <div className="absolute top-5 right-5 bg-[#EEF6FD] text-[#05A7F4] text-[11px] font-bold px-3 py-1 rounded-lg tracking-wide">
              Save 30%
            </div>

            <div>
              <div className="w-11 h-11 rounded-xl bg-[#F7FBFF] border border-[#E1EDF8] flex items-center justify-center text-[#05A7F4] mb-6">
                <FiCalendar className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">Annual Bundle</h3>
              <p className="text-slate-400 text-sm mb-7 leading-relaxed">
                Sign up for 1 year and enjoy our lowest monthly rate plus priority support.
              </p>
              <div className="mb-8">
                <span className="text-[2.75rem] font-black text-[#0a1628] tracking-tight leading-none">129</span>
                <span className="text-slate-400 text-sm font-medium"> kr / month</span>
                <div className="text-xs text-slate-400 mt-1.5 font-medium">Billed annually</div>
              </div>
            </div>

            <button className="w-full py-3.5 px-6 rounded-xl border border-[#E1EDF8] text-slate-600 hover:text-[#0a1628] hover:border-[#0a1628]/20 hover:bg-[#F7FBFF] font-semibold transition-all duration-200 text-sm">
              Order Now
            </button>
          </div>

          {/* Card 2: Featured — Kista 4 Deal */}
          <div className="reveal reveal-delay-1 bg-[#0a1628] text-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_16px_48px_rgba(10,22,40,0.3)] relative transform md:-translate-y-5 overflow-hidden border border-[#1E293B]">
            {/* Animated glow */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#05A7F4]/15 rounded-full blur-[60px] blob-1 pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#05A7F4]/10 rounded-full blur-[60px] blob-2 pointer-events-none" />

            <div className="absolute top-5 right-5 bg-[#05A7F4] text-white text-[11px] font-bold px-3 py-1 rounded-lg tracking-wide">
              Popular Choice
            </div>

            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-[#05A7F4] mb-6">
                <FiStar className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Kista 4 Deal</h3>
              <p className="text-slate-400 text-sm mb-7 leading-relaxed">
                Ideal for growing businesses. Secure your spot in the Swedish tech hub with our flexible monthly plan.
              </p>
              <div className="mb-8">
                <span className="text-[2.75rem] font-black text-white tracking-tight leading-none">199</span>
                <span className="text-slate-400 text-sm font-medium"> kr / month</span>
                <div className="text-xs text-slate-500 mt-1.5 font-medium">Cancel anytime</div>
              </div>
            </div>

            <button className="relative z-10 w-full py-3.5 px-6 rounded-xl bg-[#05A7F4] hover:bg-[#0393d6] text-white font-semibold transition-all duration-200 text-sm shadow-[0_4px_16px_rgba(5,167,244,0.4)] hover:shadow-[0_6px_24px_rgba(5,167,244,0.5)] active:scale-[0.98]">
              Order Now
            </button>
          </div>

          {/* Card 3: Nationwide Special */}
          <div className="reveal reveal-delay-2 bg-white rounded-3xl border border-[#E1EDF8] p-8 flex flex-col justify-between shadow-[0_2px_16px_rgba(5,167,244,0.06)] hover:shadow-[0_8px_32px_rgba(5,167,244,0.12)] transition-all duration-400 group relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#05A7F4]/30 to-transparent" />
            <div className="absolute top-5 right-5 bg-[#EEF6FD] text-[#05A7F4] text-[11px] font-bold px-3 py-1 rounded-lg tracking-wide">
              Full Suite
            </div>

            <div>
              <div className="w-11 h-11 rounded-xl bg-[#F7FBFF] border border-[#E1EDF8] flex items-center justify-center text-[#05A7F4] mb-6">
                <FiShield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">Nationwide Special</h3>
              <p className="text-slate-400 text-sm mb-7 leading-relaxed">
                Get access to premier addresses in both Stockholm and Gothenburg, including priority mail forwarding.
              </p>
              <div className="mb-8">
                <span className="text-[2.75rem] font-black text-[#0a1628] tracking-tight leading-none">2,400</span>
                <span className="text-slate-400 text-sm font-medium"> kr / year</span>
                <div className="text-xs text-slate-400 mt-1.5 font-medium">Billed annually</div>
              </div>
            </div>

            <button className="w-full py-3.5 px-6 rounded-xl border border-[#E1EDF8] text-slate-600 hover:text-[#0a1628] hover:border-[#0a1628]/20 hover:bg-[#F7FBFF] font-semibold transition-all duration-200 text-sm">
              Order Now
            </button>
          </div>
        </div>

        {/* Redeem Offers Section */}
        <div className="reveal mt-16 bg-white border border-[#E1EDF8] rounded-2xl p-6 md:py-6 md:px-8 max-w-5xl mx-auto w-full shadow-[0_2px_12px_rgba(5,167,244,0.06)] relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1 bg-[#05A7F4] rounded-l-2xl" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pl-4">
            <div className="flex-1">
              <h3 className="text-base font-bold text-[#0a1628] mb-1.5">
                Want to Redeem These Offers?
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Visit us at one of our locations to take advantage of these exclusive promotions. Our team will help you choose the right solution and activate your postbox quickly.
              </p>
              <p className="text-slate-400 text-[11px] italic mt-2">
                Certain offers may require eligibility verification or be subject to specific terms and conditions.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#locations"
                className="inline-flex items-center gap-2 bg-[#05A7F4] hover:bg-[#0393d6] text-white text-sm font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-[0_4px_14px_rgba(5,167,244,0.35)] hover:shadow-[0_6px_20px_rgba(5,167,244,0.45)] whitespace-nowrap"
              >
                <FiMapPin className="w-4 h-4" />
                Visit Us
              </a>
            </div>
          </div>
        </div>

        

        

      </div>
    </section>
  );
}