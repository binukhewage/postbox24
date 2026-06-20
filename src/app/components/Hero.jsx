import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pb-36 bg-white overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="blob-1 absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#05A7F4]/5 blur-[80px]" />
        <div className="blob-2 absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#05A7F4]/6 blur-[100px]" />
      </div>

      {/* Centered Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        {/* Top Kicker Badge */}
        <div className="animate-fadeSlideUp inline-flex items-center gap-2 bg-[#EEF6FD] text-[#05A7F4] text-[13px] font-bold tracking-wider px-4 py-1.5 rounded-lg mb-7 border border-[#05A7F4]/20 uppercase">
          <span>🏷️</span> PostBoxes Since 1999
        </div>

        {/* Main Heading */}
        <h1 className="animate-fadeSlideUp [animation-delay:80ms] text-[clamp(2.5rem,5.5vw,4.2rem)] font-display font-normal text-[#0a1628] leading-[1.08] tracking-tight mb-8 max-w-4xl">
          The Only{" "}
          <span className="italic text-[#05A7F4] block md:inline">Postbox Deals & Special Offers</span>{" "}
          You’ll Ever Need.
        </h1>

        {/* Description */}
        <p className="animate-fadeSlideUp [animation-delay:160ms] text-[1.02rem] text-slate-500 leading-relaxed mb-10 max-w-2xl">
          Establish your official presence in Stockholm or Gothenburg at unbeatable promotional rates. Save up to 30% on our annual plans, enjoy free provider migration, and get premium mail scanning starting at just 129 kr/month.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fadeSlideUp [animation-delay:240ms] flex flex-wrap justify-center gap-3.5 mb-20 w-full sm:w-auto">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-2 bg-[#05A7F4] text-white border border-[#E1EDF8] text-[#0a1628] font-semibold py-3.5 px-6 rounded-full transition-all duration-300 hover:shadow-[0_4px_16px_rgba(10,22,40,0.06)] active:scale-[0.98] text-sm shadow-sm"
          >
             View Our Offers
             <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          
        </div>

        {/* Image Mockup Section with floating cards */}
        <div className="animate-fadeSlideUp [animation-delay:320ms] relative w-full max-w-4xl mt-6 px-4 md:px-8">
          
          {/* Top Floating Badge */}
          <div className="absolute top-[-24px] left-[10%] z-20 bg-white border border-[#E1EDF8] px-4 py-2.5 rounded-xl shadow-[0_8px_24px_rgba(5,167,244,0.12)] flex items-center gap-2 hover:translate-y-[-2px] transition-transform duration-300">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-50 text-green-600 text-xs font-bold border border-green-200/50">
              ✓
            </span>
            <span className="text-xs font-black text-[#0a1628]">3 Months FREE Transfer</span>
          </div>

          {/* Left Floating Card */}
          <div className="hidden sm:flex absolute -left-12 top-[35%] z-20 bg-white border border-[#E1EDF8] p-5 rounded-2xl shadow-[0_12px_32px_rgba(10,22,40,0.08)] flex-col items-start gap-1 max-w-[190px] hover:translate-y-[-4px] transition-transform duration-300">
            <span className="flex items-center gap-1.5 text-green-600 bg-green-50 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200/50">
              <span>🏷️</span> Save 30%
            </span>
            <div className="text-[10px] text-slate-400 font-semibold mt-1">Annual Deal</div>
            <div className="text-2xl font-black text-[#0a1628]">129 kr<span className="text-xs font-normal text-slate-400">/mo</span></div>
            <div className="text-[9px] text-slate-400 leading-none">Billed annually</div>
          </div>

          {/* Right Floating Card */}
          <div className="hidden sm:flex absolute -right-12 top-[20%] z-20 bg-white border border-[#E1EDF8] p-5 rounded-2xl shadow-[0_12px_32px_rgba(10,22,40,0.08)] flex-col items-start gap-1 max-w-[200px] hover:translate-y-[-4px] transition-transform duration-300">
            <span className="flex items-center gap-1.5 text-[#05A7F4] bg-[#EEF6FD] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#05A7F4]/20">
              <span>★</span> Popular
            </span>
            <div className="text-[10px] text-slate-400 font-semibold mt-1">Kista 4 Special</div>
            <div className="text-2xl font-black text-[#05A7F4] leading-none">199 kr<span className="text-xs font-normal text-slate-400">/mo</span></div>
            <div className="text-[9px] text-slate-400">Cancel anytime, monthly billing</div>
          </div>

          {/* Center Image Framework Container */}
          <div className="w-full bg-white rounded-3xl border border-[#E1EDF8] shadow-[0_24px_64px_rgba(10,22,40,0.08)] overflow-hidden p-3 aspect-[16/10] relative z-10">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#F7FBFF]">
              <Image
                src="/postbox_set.png"
                alt="Sleek metallic business postbox set"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/45 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md border border-white/50 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-bold text-[#0a1628]">
                📍 Premium Service Office (Stockholm)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Angled background divider at the bottom of the hero - White to Blue transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[52%] bg-[#05A7F4] z-0" 
        style={{ clipPath: "polygon(0 45%, 100% 0, 100% 100%, 0 100%)" }}
      >
        {/* Subtle white grid overlay inside the blue area */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
      </div>
    </section>
  );
}
