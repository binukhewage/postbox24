"use client";

import React from "react";
import Link from "next/link";
import { FiPhone, FiMessageSquare, FiMapPin } from "react-icons/fi";

export default function FooterCTA() {
  const contacts = [
    {
      title: "Telefonsupport",
      icon: <FiPhone className="w-4.5 h-4.5" />,
      content: (
        <div className="space-y-2 text-xs text-slate-500">
          <p>
            <span className="font-semibold text-slate-700">Telefon: </span>
            <a
              href="tel:087430770"
              className="hover:text-[#05A7F4] transition-colors font-semibold"
            >
              08-743 07 70
            </a>
          </p>
          <p>
            <span className="font-semibold text-slate-700">
              Telefontider:
            </span>
            <br />
            Måndag – fredag 12:00–19:00
          </p>
          <p className="text-slate-400 italic pt-2 border-t border-[#E1EDF8]">
            Eller mejla oss på{" "}
            <a
              href="mailto:info@postbox24.se"
              className="hover:text-[#05A7F4] transition-colors font-medium not-italic"
            >
              info@postbox24.se
            </a>
          </p>
        </div>
      ),
    },
    {
      title: "Direktkanaler",
      icon: <FiMessageSquare className="w-4.5 h-4.5" />,
      content: (
        <div className="space-y-3 text-xs text-slate-500">
          <p>
            <span className="font-semibold text-slate-700">E-post:</span>
            <br />
            <a
              href="mailto:info@postbox24.se"
              className="hover:text-[#05A7F4] transition-colors font-medium"
            >
              info@postbox24.se
            </a>
          </p>
          <p>
            <span className="font-semibold text-slate-700">Telegram:</span>
            <br />
            <a
              href="https://t.me/postbox24se"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#05A7F4] transition-colors font-medium"
            >
              @postbox24se
            </a>
          </p>
          <p className="pt-2 border-t border-[#E1EDF8]">
            <span className="font-semibold text-slate-700">SWISH: </span>
            <span className="font-mono bg-[#F7FBFF] px-2 py-0.5 rounded-lg text-slate-600 font-semibold border border-[#E1EDF8]">
              1230541359
            </span>
          </p>
        </div>
      ),
    },
    {
      title: "Servicekontor",
      icon: <FiMapPin className="w-4.5 h-4.5" />,
      content: (
        <address className="space-y-3 text-xs text-slate-500 not-italic">
          <p>
            <span className="font-semibold text-slate-700">Adress:</span>
            <br />
            <a
              href="https://www.google.com/maps/place/Kocksgatan+49,+116+29+Stockholm/@59.3159457,18.0835462,17z/data=!4m6!3m5!1s0x465f77f8543124c7:0x2f9b80b9a9c43370!8m2!3d59.3150352!4d18.0846841!16s%2Fg%2F11c1xh_6h6?hl=en&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#05A7F4] hover:underline transition-colors font-medium"
            >
              Kocksgatan 49, 116 24 Stockholm, Sverige
            </a>
          </p>
          <p>
            <span className="font-semibold text-slate-700">Öppettider:</span>
            <br />
            Måndag – fredag 12:00–17:00
          </p>
          <div className="pt-2 border-t border-[#E1EDF8] mt-2">
            <a
              href="https://www.google.com/maps/place/Kocksgatan+49,+116+29+Stockholm/@59.3159457,18.0835462,17z/data=!4m6!3m5!1s0x465f77f8543124c7:0x2f9b80b9a9c43370!8m2!3d59.3150352!4d18.0846841!16s%2Fg%2F11c1xh_6h6?hl=en&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-[#EEF6FD] hover:bg-[#EEF6FD]/80 text-[#05A7F4] text-[10px] font-bold px-2 py-0.5 rounded-lg border border-[#05A7F4]/20 transition-colors"
            >
              <FiMapPin className="w-3 h-3 shrink-0" />
              Besök oss för att ta del av erbjudandena
            </a>
          </div>
        </address>
      ),
    },
  ];

  return (
    <footer className="bg-white pt-20 pb-12 border-t border-[#E1EDF8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Contact Section */}
        <div id="contact">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-block text-[#05A7F4] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
                Kontakt
              </span>
              <h2 className="text-3xl font-display font-normal text-[#0a1628] tracking-tight leading-tight">
                Kontakt & <span className="italic text-[#05A7F4]">Support</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {contacts.map((card, i) => (
              <div
                key={i}
                className="reveal bg-[#F7FBFF] border border-[#E1EDF8] p-6 rounded-2xl hover:border-[#05A7F4]/25 hover:shadow-[0_4px_16px_rgba(5,167,244,0.07)] transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-9 h-9 rounded-xl bg-[#EEF6FD] text-[#05A7F4] flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="font-bold text-[#0a1628] text-sm mb-3">
                  {card.title}
                </h3>
                {card.content}
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="reveal bg-[#0a1628] border border-[#1E293B] rounded-2xl p-6 md:py-7 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#05A7F4]/12 rounded-full blur-[50px] blob-1 pointer-events-none" />
            <div className="relative z-10 text-left">
              <h3 className="text-base font-bold text-white mb-1.5">
                Redo att skaffa en professionell företagsadress?
              </h3>
              <p className="text-slate-400 text-sm">
                Det tar mindre än 5 minuter att komma igång. Avsluta när som helst utan dolda avgifter.
              </p>
            </div>
            <div className="shrink-0 relative z-10">
              <a
                href="/#pricing"
                className="inline-flex items-center gap-2 bg-[#05A7F4] hover:bg-[#0393d6] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-[0_4px_16px_rgba(5,167,244,0.4)] hover:shadow-[0_6px_24px_rgba(5,167,244,0.5)] text-sm whitespace-nowrap"
              >
                <span>🚀</span> Starta din adress
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-10 border-t border-[#E1EDF8] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-sm">
            <h3 className="font-black text-base text-[#0a1628] mb-2">
              Postbox24
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              © {new Date().getFullYear()} Postbox24. Alla rättigheter förbehållna.
              Postbox24 AB • Org.nr: 556578-1234 (fiktiv platshållare
              för illustration) • Säte: Stockholm.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-2 text-xs font-medium text-slate-400">
            {[
              { href: "/address-information", label: "Adressinformation" },
              { href: "/rental-conditions", label: "Hyresvillkor" },
              { href: "/refund-policy", label: "Återbetalningspolicy" },
              { href: "/privacy-policy-gdpr", label: "Integritetspolicy & GDPR" },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="hover:text-[#05A7F4] transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
