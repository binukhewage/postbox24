import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Shield, Zap, Lock } from "lucide-react";
import JsonLd from "./JsonLd";

export default function FAQ() {
  const faqs = [
    {
      q: "Kan jag använda adressen för mitt företag?",
      a: "Ja. Våra adresser kan användas som ditt företags officiella postadress.",
    },
    {
      q: "Kan privatpersoner hyra en postbox?",
      a: "Självklart. Både företag och privatpersoner är välkomna.",
    },
    {
      q: "Hur snabbt kan jag komma igång?",
      a: "De flesta postboxar kan aktiveras kort efter att din registrering har slutförts.",
    },
    {
      q: "Kan ni skanna min post när jag är utomlands?",
      a: "Ja. Vi erbjuder postskanning för kunder som reser mycket eller bor utanför Sverige.",
    },
    {
      q: "Hur länge har Postbox24 varit verksamt?",
      a: "Postbox24 har stolt tillhandahållit professionella postboxar och posthantering sedan 1999.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <JsonLd schema={faqSchema} />
      <section
        id="faq"
        className="bg-white py-24 md:py-32 border-y border-[#E1EDF8] overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7">
            <span className="inline-block text-[#05A7F4] text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Vanliga frågor
            </span>
            <h2 className="text-4xl font-display font-normal text-[#0a1628] mb-10 tracking-tight leading-tight">
              Vanliga{" "}
              <span className="italic text-[#05A7F4]">frågor</span>
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl border border-[#E1EDF8] bg-white hover:border-[#05A7F4]/20 hover:bg-[#F7FBFF]/50 transition-all duration-300 [&[open]]:border-[#05A7F4]/30 [&[open]]:shadow-[0_4px_20px_rgba(5,167,244,0.08)] [&[open]]:bg-[#F7FBFF] overflow-hidden"
                >
                  <summary className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none list-none cursor-pointer">
                    <span className="font-semibold text-sm text-slate-700 group-hover:text-[#0a1628] transition-colors duration-200">
                      {faq.q}
                    </span>
                    <span className="ml-4 shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 bg-[#F7FBFF] text-slate-400 border border-[#E1EDF8] group-open:bg-[#05A7F4] group-open:text-white group-open:rotate-90">
                      <FiChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-[#E1EDF8]/40 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Right Column: About Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0a1628] text-white rounded-3xl p-8 shadow-[0_16px_48px_rgba(10,22,40,0.2)] relative overflow-hidden border border-[#1E293B]">
              {/* Ambient glows */}
              <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#05A7F4]/12 rounded-full blur-[60px] blob-2 pointer-events-none" />
              <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#05A7F4]/8 rounded-full blur-[50px] blob-1 pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-block text-[#05A7F4] text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                  Sedan 1999
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  Om Postbox24
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                  Vi har erbjudit säker, flexibel och professionell posthantering i Sverige i över två decennier, vilket hjälper entreprenörer och företag att växa på distans med trygghet.
                </p>

                {/* Engaging bullet details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#05A7F4] shrink-0 mt-0.5 shadow-sm">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white mb-0.5">
                        Godkänt av Bolagsverket
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                        Verkliga kommersiella gatuadresser i Stockholm & Göteborg (inga c/o-adresser i bostadsområden).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#05A7F4] shrink-0 mt-0.5 shadow-sm">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white mb-0.5">
                        Skanning samma dag
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                        Breven öppnas, skannas i hög upplösning och skickas som säkra PDF-filer inom några timmar.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#05A7F4] shrink-0 mt-0.5 shadow-sm">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white mb-0.5">
                        BankID-säkerhet
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                        Identitetsverifiering och posthantering följer strikt GDPR och svensk lagstiftning.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/8">
                  {[
                    { val: "25+", label: "År" },
                    { val: "10k+", label: "Kunder" },
                    { val: "99.9%", label: "Precision" },
                  ].map(({ val, label }) => (
                    <div key={label} className="text-center md:text-left">
                      <div className="text-[#05A7F4] font-black text-2xl mb-1 leading-none">
                        {val}
                      </div>
                      <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
