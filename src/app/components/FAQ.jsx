import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Shield, Zap, Lock } from "lucide-react";
import JsonLd from "./JsonLd";

export default function FAQ() {
  const faqs = [
    {
      q: "Can I use the address for my business?",
      a: "Yes. Our addresses can be used as your official business mailing address.",
    },
    {
      q: "Can private individuals rent a postbox?",
      a: "Absolutely. Both businesses and private individuals are welcome.",
    },
    {
      q: "How quickly can I get started?",
      a: "Most postboxes can be activated shortly after your registration is completed.",
    },
    {
      q: "Can you scan my mail while I'm abroad?",
      a: "Yes. We offer mail scanning services for customers who are traveling or living outside Sweden.",
    },
    {
      q: "How long has Postbox24 been operating?",
      a: "Postbox24 has proudly provided professional postbox and mail handling services since 1999.",
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
              FAQ
            </span>
            <h2 className="text-4xl font-display font-normal text-[#0a1628] mb-10 tracking-tight leading-tight">
              Frequently Asked{" "}
              <span className="italic text-[#05A7F4]">Questions</span>
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
                  Since 1999
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  About Postbox24
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                  We've provided secure, flexible, and professional mail
                  handling across Sweden for over two decades, helping
                  entrepreneurs and companies scale remotely with confidence.
                </p>

                {/* Engaging bullet details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#05A7F4] shrink-0 mt-0.5 shadow-sm">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white mb-0.5">
                        Bolagsverket Compliant
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                        Real commercial street addresses in Stockholm &
                        Gothenburg (never residential PO Boxes).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#05A7F4] shrink-0 mt-0.5 shadow-sm">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white mb-0.5">
                        Same-Day Digitizing
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                        Letters opened, scanned in high resolution, and sent as
                        secure PDFs within hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#05A7F4] shrink-0 mt-0.5 shadow-sm">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white mb-0.5">
                        BankID Security
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                        Identity verification and mail handling conform strictly
                        to GDPR & Swedish privacy laws.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/8">
                  {[
                    { val: "25+", label: "Years" },
                    { val: "10k+", label: "Clients" },
                    { val: "99.9%", label: "Accuracy" },
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
