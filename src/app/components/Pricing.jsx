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
            Priser & Erbjudanden
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-5 tracking-tight leading-tight">
            Upptäck våra{" "}
            <span className="italic text-[#05A7F4]">bästa erbjudanden</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Välj det abonnemang som passar ditt företags behov och börja
            använda din representativa svenska adress redan idag.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Pay for 1 Year – Get 3 Months Free */}
          <article className="reveal bg-white rounded-3xl border border-[#E1EDF8] p-8 flex flex-col justify-between shadow-[0_2px_16px_rgba(5,167,244,0.06)] hover:shadow-[0_8px_32px_rgba(5,167,244,0.12)] transition-all duration-400 group relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#05A7F4]/30 to-transparent" />
            <div className="absolute top-5 right-5 bg-[#EEF6FD] text-[#05A7F4] text-[11px] font-bold px-3 py-1 rounded-lg tracking-wide">
              Bäst värde
            </div>

            <div>
              <div className="w-11 h-11 rounded-xl bg-[#F7FBFF] border border-[#E1EDF8] flex items-center justify-center text-[#05A7F4] mb-6">
                <FiGift className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2 leading-snug">
                Betala för 1 år <br />{" "}
                <span className="text-[#05A7F4]">få 3 månader gratis</span>
              </h3>
              <p className="text-slate-400 text-sm mb-7 leading-relaxed">
                Välj ett årsabonnemang och få ytterligare 3 månader helt kostnadsfritt, vilket ger dig ännu mer värde under året.
              </p>
              <div className="bg-[#F7FBFF] border border-[#E1EDF8] rounded-2xl p-4 mb-8">
                <span className="text-[2.75rem] font-black text-[#0a1628] tracking-tight leading-none">
                  12
                </span>
                <span className="text-slate-500 text-sm font-semibold">
                  {" "}
                  månader betalda
                </span>
                <div className="text-xs text-[#05A7F4] mt-1.5 font-bold">
                  + 3 månader helt gratis
                </div>
              </div>
            </div>

            <Link
              href="/#contact"
              className="w-full py-3.5 px-6 rounded-xl border border-[#E1EDF8] text-slate-600 hover:text-[#0a1628] hover:border-[#0a1628]/20 hover:bg-[#F7FBFF] font-semibold transition-all duration-200 text-sm text-center block"
            >
              Ta del av erbjudandet
            </Link>
          </article>

          {/* Card 2: Featured — Rent Your Postbox for Just 1 KR */}
          <article className="reveal reveal-delay-1 bg-[#0a1628] text-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_16px_48px_rgba(10,22,40,0.3)] relative transform md:-translate-y-5 overflow-hidden border border-[#1E293B]">
            {/* Animated glow */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#05A7F4]/15 rounded-full blur-[60px] blob-1 pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#05A7F4]/10 rounded-full blur-[60px] blob-2 pointer-events-none" />

            <div className="absolute top-5 right-5 bg-[#05A7F4] text-white text-[11px] font-bold px-3 py-1 rounded-lg tracking-wide">
              Populärt val
            </div>

            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-[#05A7F4] mb-6">
                <FiTag className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                Hyr din postbox <br />{" "}
                <span className="text-[#05A7F4]">för endast 1 kr</span>
              </h3>
              <p className="text-slate-400 text-sm mb-7 leading-relaxed">
                Börja för endast 1 kr under din första månad när du tecknar ett 12-månadersavtal. Ett enkelt och prisvärt sätt att komma igång.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-8 relative z-10">
                <span className="text-[2.75rem] font-black text-white tracking-tight leading-none">
                  1
                </span>
                <span className="text-slate-300 text-sm font-semibold">
                  {" "}
                  kr
                </span>
                <div className="text-xs text-slate-400 mt-1.5 font-medium">
                  Första månaden, därefter ordinarie pris
                </div>
              </div>
            </div>

            <Link
              href="/#contact"
              className="relative z-10 w-full py-3.5 px-6 rounded-xl bg-[#05A7F4] hover:bg-[#0393d6] text-white font-semibold transition-all duration-200 text-sm shadow-[0_4px_16px_rgba(5,167,244,0.4)] hover:shadow-[0_6px_24px_rgba(5,167,244,0.5)] active:scale-[0.98] text-center block"
            >
              Ta del av erbjudandet
            </Link>
          </article>

          {/* Card 3: Södermalm Special Offer */}
          <article className="reveal reveal-delay-2 bg-white rounded-3xl border border-[#E1EDF8] p-8 flex flex-col justify-between shadow-[0_2px_16px_rgba(5,167,244,0.06)] hover:shadow-[0_8px_32px_rgba(5,167,244,0.12)] transition-all duration-400 group relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#05A7F4]/30 to-transparent" />
            <div className="absolute top-5 right-5 bg-[#EEF6FD] text-[#05A7F4] text-[11px] font-bold px-3 py-1 rounded-lg tracking-wide">
              Lokalkampanj
            </div>

            <div>
              <div className="w-11 h-11 rounded-xl bg-[#F7FBFF] border border-[#E1EDF8] flex items-center justify-center text-[#05A7F4] mb-6">
                <FiMapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2 leading-snug">
                Södermalm <br />{" "}
                <span className="text-[#05A7F4]">Specialerbjudande</span>
              </h3>
              <p className="text-slate-400 text-sm mb-7 leading-relaxed">
                Hyr en postbox på vårt kontor på Kocksgatan, Södermalm för endast 2 400 kr per år. Få en attraktiv adress i Stockholm till ett oslagbart årspris.
              </p>
              <div className="bg-[#F7FBFF] border border-[#E1EDF8] rounded-2xl p-4 mb-8">
                <span className="text-[2.75rem] font-black text-[#0a1628] tracking-tight leading-none">
                  2 400
                </span>
                <span className="text-slate-500 text-sm font-semibold">
                  {" "}
                  kr / år
                </span>
                <div className="text-xs text-slate-400 mt-1.5 font-medium">
                  Kocksgatan, Södermalm
                </div>
              </div>
            </div>

            <Link
              href="https://postbox24.se/collections/valj-din-postbox/products/postbox-12-man"
              className="w-full py-3.5 px-6 rounded-xl border border-[#E1EDF8] text-slate-600 hover:text-[#0a1628] hover:border-[#0a1628]/20 hover:bg-[#F7FBFF] font-semibold transition-all duration-200 text-sm text-center block"
            >
              Ta del av erbjudandet
            </Link>
          </article>
        </div>

        {/* Redeem Offers Section */}
        <div className="reveal mt-16 bg-white border border-[#E1EDF8] rounded-2xl p-6 md:py-6 md:px-8 max-w-5xl mx-auto w-full shadow-[0_2px_12px_rgba(5,167,244,0.06)] relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1 bg-[#05A7F4] rounded-l-2xl" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pl-4">
            <div className="flex-1">
              <h3 className="text-base font-bold text-[#0a1628] mb-1.5">
                Vill du ta del av dessa erbjudanden?
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Besök oss på något av våra kontor för att utnyttja dessa exklusiva kampanjer. Vårt team hjälper dig att välja rätt lösning och aktiverar din postbox snabbt.
              </p>
              <p className="text-slate-400 text-[11px] italic mt-2">
                Vissa erbjudanden kan kräva behörighetsverifiering eller omfattas av särskilda villkor.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#05A7F4] hover:bg-[#0393d6] text-white text-sm font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-[0_4px_14px_rgba(5,167,244,0.35)] hover:shadow-[0_6px_20px_rgba(5,167,244,0.45)] whitespace-nowrap"
              >
                <FiMapPin className="w-4 h-4" />
                Besök oss
              </a>
            </div>
          </div>
        </div>

        {/* Additional Customer Benefits */}
        <div className="text-center max-w-2xl mx-auto mt-28 mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="text-[#05A7F4] text-xs font-semibold tracking-[0.18em] uppercase">
              Extra kundförmåner
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-5 tracking-tight leading-tight">
            Mer än bara en{" "}
            <span className="italic text-[#05A7F4]">postbox</span>
          </h2>
          <p className="reveal reveal-delay-2 text-slate-500 text-base leading-relaxed font-medium">
            Dra nytta av extra tjänster och förmåner som gör det enklare att hantera din post, oavsett var du befinner dig.
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
                Inlämning av brev dygnet runt
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                <span className="font-extrabold">
                  Behöver du lämna in viktiga dokument utanför kontorstid?
                </span>{" "}
                <br /> <br /> Du kan lämna dina brev hos oss 24 timmar om dygnet, 7 dagar i veckan, så att posthanteringen passar ditt schema.
              </p>
            </div>
            <div className="mt-auto bg-[#F5FAFF] border border-[#E1EDF8] rounded-xl p-3.5 flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-white border border-[#E1EDF8] flex items-center justify-center shadow-sm shrink-0">
                <FiClock className="w-3.5 h-3.5 text-[#05A7F4]" />
              </div>
              <span className="text-[#05A7F4] text-[11px] font-bold tracking-wide">
                Alltids öppet. Alltid enkelt.
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
                Byt till Postbox24 & <br /> få 3 månader gratis
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                <span className="font-extrabold">
                  Har du redan en postbox hos en annan leverantör?
                </span>{" "}
                <br /> <br />
                Flytta din befintliga postbox till Postbox24 så bjuder vi på 3 månadsavgifter helt kostnadsfritt.
              </p>
            </div>
            <div className="mt-auto bg-[#F5FAFF] border border-[#E1EDF8] rounded-xl p-3.5 flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-white border border-[#E1EDF8] flex items-center justify-center shadow-sm shrink-0">
                <FiShield className="w-3.5 h-3.5 text-[#05A7F4]" />
              </div>
              <span className="text-[#05A7F4] text-[11px] font-bold tracking-wide">
                Kopia på avtal/faktura från din nuvarande leverantör kan behöva uppvisas.
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
                Postskanning oavsett var du är
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                <span className="font-extrabold">
                  Reser du mycket eller bor utomlands?
                </span>{" "}
                <br /> <br /> Vi kan skanna din inkommande post och skicka den digitalt till dig, så att du aldrig missar viktig korrespondens oavsett var du befinner dig.
              </p>
            </div>
            <div className="mt-auto bg-[#F5FAFF] border border-[#E1EDF8] rounded-xl p-3.5 flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-white border border-[#E1EDF8] flex items-center justify-center shadow-sm shrink-0">
                <FiSend className="w-3.5 h-3.5 text-[#05A7F4]" />
              </div>
              <span className="text-[#05A7F4] text-[11px] font-bold tracking-wide">
                Håll dig uppkopplad. Håll dig informerad.
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
