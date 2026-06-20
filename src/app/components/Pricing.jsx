"use client";

import React from "react";
import Link from "next/link";
import {
  FiMapPin,
  FiCalendar,
  FiStar,
  FiShield,
  FiRefreshCw,
  FiInbox,
  FiGlobe,
  FiClock,
  FiSend,
  FiGift,
  FiTag,
} from "react-icons/fi";

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
      { threshold: 0.05 },
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="pricing"
      className="relative bg-[#F7FBFF] py-24 md:py-32 overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      {/* Ambient blob */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-[#05A7F4]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[#05A7F4] text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            Pricing & OFFERS
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-5 tracking-tight leading-tight">
            Discover Our{" "}
            <span className="italic text-[#05A7F4]">Best Deals</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Choose the plan that suits your business requirements and start
            utilizing your prestigious Swedish address today.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Pay for 1 Year – Get 3 Months Free */}
          <article className="reveal bg-white rounded-3xl border border-[#E1EDF8] p-8 flex flex-col justify-between shadow-[0_2px_16px_rgba(5,167,244,0.06)] hover:shadow-[0_8px_32px_rgba(5,167,244,0.12)] transition-all duration-400 group relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#05A7F4]/30 to-transparent" />
            <div className="absolute top-5 right-5 bg-[#EEF6FD] text-[#05A7F4] text-[11px] font-bold px-3 py-1 rounded-lg tracking-wide">
              Best Value
            </div>

            <div>
              <div className="w-11 h-11 rounded-xl bg-[#F7FBFF] border border-[#E1EDF8] flex items-center justify-center text-[#05A7F4] mb-6">
                <FiGift className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2 leading-snug">
                Pay for 1 Year <br />{" "}
                <span className="text-[#05A7F4]">Get 3 Months Free</span>
              </h3>
              <p className="text-slate-400 text-sm mb-7 leading-relaxed">
                Choose an annual subscription and receive an additional 3 months
                completely free, giving you even more value throughout the year.
              </p>
              <div className="bg-[#F7FBFF] border border-[#E1EDF8] rounded-2xl p-4 mb-8">
                <span className="text-[2.75rem] font-black text-[#0a1628] tracking-tight leading-none">
                  12
                </span>
                <span className="text-slate-500 text-sm font-semibold">
                  {" "}
                  Months Paid
                </span>
                <div className="text-xs text-[#05A7F4] mt-1.5 font-bold">
                  + 3 Months Completely Free
                </div>
              </div>
            </div>

            <Link
              href="/#contact"
              className="w-full py-3.5 px-6 rounded-xl border border-[#E1EDF8] text-slate-600 hover:text-[#0a1628] hover:border-[#0a1628]/20 hover:bg-[#F7FBFF] font-semibold transition-all duration-200 text-sm text-center block"
            >
              Claim Offer
            </Link>
          </article>

          {/* Card 2: Featured — Rent Your Postbox for Just 1 KR */}
          <article className="reveal reveal-delay-1 bg-[#0a1628] text-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_16px_48px_rgba(10,22,40,0.3)] relative transform md:-translate-y-5 overflow-hidden border border-[#1E293B]">
            {/* Animated glow */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#05A7F4]/15 rounded-full blur-[60px] blob-1 pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#05A7F4]/10 rounded-full blur-[60px] blob-2 pointer-events-none" />

            <div className="absolute top-5 right-5 bg-[#05A7F4] text-white text-[11px] font-bold px-3 py-1 rounded-lg tracking-wide">
              Popular Choice
            </div>

            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-[#05A7F4] mb-6">
                <FiTag className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                Rent Your Postbox <br />{" "}
                <span className="text-[#05A7F4]">for Just 1 KR</span>
              </h3>
              <p className="text-slate-400 text-sm mb-7 leading-relaxed">
                Start for only 1 KR during your first month when signing a
                12-month agreement. A simple and affordable way to get started
                with your new business address.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-8 relative z-10">
                <span className="text-[2.75rem] font-black text-white tracking-tight leading-none">
                  1
                </span>
                <span className="text-slate-300 text-sm font-semibold">
                  {" "}
                  KR
                </span>
                <div className="text-xs text-slate-400 mt-1.5 font-medium">
                  First month, then standard rate
                </div>
              </div>
            </div>

            <Link
              href="/#contact"
              className="relative z-10 w-full py-3.5 px-6 rounded-xl bg-[#05A7F4] hover:bg-[#0393d6] text-white font-semibold transition-all duration-200 text-sm shadow-[0_4px_16px_rgba(5,167,244,0.4)] hover:shadow-[0_6px_24px_rgba(5,167,244,0.5)] active:scale-[0.98] text-center block"
            >
              Claim Offer
            </Link>
          </article>

          {/* Card 3: Södermalm Special Offer */}
          <article className="reveal reveal-delay-2 bg-white rounded-3xl border border-[#E1EDF8] p-8 flex flex-col justify-between shadow-[0_2px_16px_rgba(5,167,244,0.06)] hover:shadow-[0_8px_32px_rgba(5,167,244,0.12)] transition-all duration-400 group relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#05A7F4]/30 to-transparent" />
            <div className="absolute top-5 right-5 bg-[#EEF6FD] text-[#05A7F4] text-[11px] font-bold px-3 py-1 rounded-lg tracking-wide">
              Location Promo
            </div>

            <div>
              <div className="w-11 h-11 rounded-xl bg-[#F7FBFF] border border-[#E1EDF8] flex items-center justify-center text-[#05A7F4] mb-6">
                <FiMapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2 leading-snug">
                Södermalm <br />{" "}
                <span className="text-[#05A7F4]">Special Offer</span>
              </h3>
              <p className="text-slate-400 text-sm mb-7 leading-relaxed">
                Rent a postbox at our Kocksgatan, Södermalm location for only
                2,400 KR per year. Enjoy a premium Stockholm address at an
                exceptional annual price.
              </p>
              <div className="bg-[#F7FBFF] border border-[#E1EDF8] rounded-2xl p-4 mb-8">
                <span className="text-[2.75rem] font-black text-[#0a1628] tracking-tight leading-none">
                  2,400
                </span>
                <span className="text-slate-500 text-sm font-semibold">
                  {" "}
                  KR / year
                </span>
                <div className="text-xs text-slate-400 mt-1.5 font-medium">
                  Kocksgatan, Södermalm
                </div>
              </div>
            </div>

            <Link
              href="/#contact"
              className="w-full py-3.5 px-6 rounded-xl border border-[#E1EDF8] text-slate-600 hover:text-[#0a1628] hover:border-[#0a1628]/20 hover:bg-[#F7FBFF] font-semibold transition-all duration-200 text-sm text-center block"
            >
              Claim Offer
            </Link>
          </article>
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
                Visit us at one of our locations to take advantage of these
                exclusive promotions. Our team will help you choose the right
                solution and activate your postbox quickly.
              </p>
              <p className="text-slate-400 text-[11px] italic mt-2">
                Certain offers may require eligibility verification or be
                subject to specific terms and conditions.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#05A7F4] hover:bg-[#0393d6] text-white text-sm font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-[0_4px_14px_rgba(5,167,244,0.35)] hover:shadow-[0_6px_20px_rgba(5,167,244,0.45)] whitespace-nowrap"
              >
                <FiMapPin className="w-4 h-4" />
                Visit Us
              </a>
            </div>
          </div>
        </div>

        {/* Additional Customer Benefits */}
        <div className="text-center max-w-2xl mx-auto mt-28 mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="text-[#05A7F4] text-xs font-semibold tracking-[0.18em] uppercase">
              Additional Customer Benefits
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-5 tracking-tight leading-tight">
            More Than Just a{" "}
            <span className="italic text-[#05A7F4]">Postbox</span>
          </h2>
          <p className="reveal reveal-delay-2 text-slate-500 text-base leading-relaxed font-medium">
            Enjoy extra services and benefits that make managing your mail
            easier, wherever you are.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <article className="reveal reveal-delay-1 bg-white rounded-3xl border border-[#E1EDF8] p-8 flex flex-col justify-between shadow-[0_2px_16px_rgba(5,167,244,0.06)] hover:shadow-[0_8px_32px_rgba(5,167,244,0.12)] transition-all duration-400 group relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#05A7F4]/30 to-transparent" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EEF6FD] text-[#05A7F4] flex items-center justify-center mb-6 border border-[#05A7F4]/10 group-hover:bg-[#05A7F4] group-hover:text-white transition-all duration-300 shadow-sm">
                <FiInbox className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0a1628] mb-3 leading-snug">
                24/7 Letter Drop-Off
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                <span className="font-extrabold">
                  Need to drop off important documents outside office hours?
                </span>{" "}
                <br /> <br /> You can bring your letters to us 24 hours a day, 7
                days a week, making mail handling fit your schedule.
              </p>
            </div>
            <div className="mt-auto bg-[#F5FAFF] border border-[#E1EDF8] rounded-xl p-3.5 flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-white border border-[#E1EDF8] flex items-center justify-center shadow-sm shrink-0">
                <FiClock className="w-3.5 h-3.5 text-[#05A7F4]" />
              </div>
              <span className="text-[#05A7F4] text-[11px] font-bold tracking-wide">
                Always open. Always convenient.
              </span>
            </div>
          </article>
          {/* Benefit 1 */}
          <article className="reveal bg-white rounded-3xl border border-[#E1EDF8] p-8 flex flex-col justify-between shadow-[0_2px_16px_rgba(5,167,244,0.06)] hover:shadow-[0_8px_32px_rgba(5,167,244,0.12)] transition-all duration-400 group relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#05A7F4]/30 to-transparent" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EEF6FD] text-[#05A7F4] flex items-center justify-center mb-6 border border-[#05A7F4]/10 group-hover:bg-[#05A7F4] group-hover:text-white transition-all duration-300 shadow-sm">
                <FiRefreshCw className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180" />
              </div>
              <h3 className="text-lg font-bold text-[#0a1628] mb-3 leading-snug">
                Switch to Postbox24 & <br /> Get 3 Months Free
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                <span className="font-extrabold">
                  Already have a postbox elsewhere?
                </span>{" "}
                <br /> <br />
                Transfer your existing postbox to Postbox24 and receive 3 months
                free of charge.
              </p>
            </div>
            <div className="mt-auto bg-[#F5FAFF] border border-[#E1EDF8] rounded-xl p-3.5 flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-white border border-[#E1EDF8] flex items-center justify-center shadow-sm shrink-0">
                <FiShield className="w-3.5 h-3.5 text-[#05A7F4]" />
              </div>
              <span className="text-[#05A7F4] text-[11px] font-bold tracking-wide">
                Proof of your current provider may be required.
              </span>
            </div>
          </article>

          {/* Benefit 2 */}

          {/* Benefit 3 */}
          <article className="reveal reveal-delay-2 bg-white rounded-3xl border border-[#E1EDF8] p-8 flex flex-col justify-between shadow-[0_2px_16px_rgba(5,167,244,0.06)] hover:shadow-[0_8px_32px_rgba(5,167,244,0.12)] transition-all duration-400 group relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#05A7F4]/30 to-transparent" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EEF6FD] text-[#05A7F4] flex items-center justify-center mb-6 border border-[#05A7F4]/10 group-hover:bg-[#05A7F4] group-hover:text-white transition-all duration-300 shadow-sm">
                <FiGlobe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0a1628] mb-3 leading-snug">
                Mail Scanning Wherever You Are
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                <span className="font-extrabold">
                  Traveling or living abroad?
                </span>{" "}
                <br /> <br /> We can scan your incoming mail and send it to you
                digitally, ensuring you never miss important correspondence no
                matter where you are.
              </p>
            </div>
            <div className="mt-auto bg-[#F5FAFF] border border-[#E1EDF8] rounded-xl p-3.5 flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-white border border-[#E1EDF8] flex items-center justify-center shadow-sm shrink-0">
                <FiSend className="w-3.5 h-3.5 text-[#05A7F4]" />
              </div>
              <span className="text-[#05A7F4] text-[11px] font-bold tracking-wide">
                Stay connected. Stay informed.
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
