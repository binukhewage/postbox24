import React from "react";
import Image from "next/image";
import { FiBriefcase, FiShield, FiInbox, FiAward } from "react-icons/fi";

export default function Features() {
  return (
    <section
      id="services"
      className="relative bg-white py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative ambient glows (Matching Hero) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="blob-3 absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-[#05A7F4]/5 blur-[90px]" />
        <div className="blob-4 absolute bottom-0 -left-20 w-[600px] h-[600px] rounded-full bg-[#05A7F4]/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        {/* Intro Section - Centered or Left Aligned (Kept Left for Grid Layout, styled like Hero) */}
        <div className="max-w-2xl mb-16 flex flex-col items-start">
          {/* Top Kicker Badge (Matched with Hero) */}
          <span className="inline-block text-[#05A7F4] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Varför välja oss
          </span>

          <h2 className="animate-fadeSlideUp [animation-delay:80ms] text-[clamp(2rem,4vw,3.5rem)] font-display font-normal text-[#0a1628] tracking-tight leading-[1.08] mb-6">
            Varför välja{" "}
            <span className="italic text-[#05A7F4]">Postbox24?</span>
          </h2>
          <p className="animate-fadeSlideUp [animation-delay:160ms] text-[1.02rem] text-slate-500 leading-relaxed max-w-xl">
            Vi bygger infrastrukturen för din framgång och förenar över 25 års erfarenhet med modern digital effektivitet.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Left Feature Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Företagsadress",
                desc: "Stärk företagets legitimitet med en representativ fysisk kontorsadress i Stockholm eller Göteborg.",
                icon: <FiBriefcase className="w-5 h-5" />,
                delay: "240ms",
              },
              {
                title: "Säker hantering",
                desc: "Konfidentiell postsortering, digital skanning och säker eftersändning av alla dina fysiska brev.",
                icon: <FiShield className="w-5 h-5" />,
                delay: "320ms",
              },
              {
                title: "Flexibla postboxar",
                desc: "Få tillgång till din post dygnet runt eller ta emot aviseringar och PDF-kopior samma dag.",
                icon: <FiInbox className="w-5 h-5" />,
                delay: "400ms",
              },
              {
                title: "Tryggt sedan 1999",
                desc: "Verksamma i Sverige sedan 1999 med tusentals nöjda svenska och internationella kunder.",
                icon: <FiAward className="w-5 h-5" />,
                delay: "480ms",
              },
            ].map((feat, i) => (
              <div
                key={i}
                className={`animate-fadeSlideUp group flex flex-col items-start p-7 rounded-2xl border border-[#E1EDF8] bg-white hover:bg-[#F7FBFF] hover:border-[#05A7F4]/30 hover:shadow-[0_12px_32px_rgba(10,22,40,0.06)] hover:-translate-y-1 transition-all duration-300`}
                style={{ animationDelay: feat.delay }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#EEF6FD] text-[#05A7F4] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#05A7F4] group-hover:text-white transition-all duration-300 shadow-sm border border-[#05A7F4]/10">
                  {feat.icon}
                </div>
                <h3 className="text-base font-bold text-[#0a1628] mb-2">
                  {feat.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Visual Column (Matched with Hero's Image Framework Container) */}
          <div className="animate-fadeSlideUp [animation-delay:560ms] lg:col-span-5 relative w-full">
            <div className="w-full bg-white rounded-3xl border border-[#E1EDF8] shadow-[0_24px_64px_rgba(10,22,40,0.08)] overflow-hidden p-3 aspect-[4/3] sm:aspect-[1.4] lg:aspect-square relative z-10 group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#F7FBFF]">
                <Image
                  src="/4.png"
                  alt="Stilrena postboxar i metall för företag"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/45 via-transparent to-transparent pointer-events-none" />

                {/* Overlay Stat Badge (Styled like Hero's floating badges) */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md border border-[#E1EDF8] p-4 rounded-2xl shadow-[0_12px_32px_rgba(10,22,40,0.08)] flex items-start gap-3 max-w-[220px] hover:translate-y-[-2px] transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#EEF6FD] flex items-center justify-center border border-[#05A7F4]/20 shrink-0">
                    <span className="text-[#05A7F4] font-black text-lg leading-none">
                      25+
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0a1628] mb-0.5">
                      Års erfarenhet
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                      Betrott av över 10 000 företag världen över.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
