import React from "react";
import { MapPin, FileText, Inbox } from "lucide-react";

export default function Steps() {
  const steps = [
    {
      n: "1",
      title: "Välj din adress",
      desc: "Välj den postbox och ort som bäst passar dina behov.",
      icon: MapPin,
    },
    {
      n: "2",
      title: "Registrera adressen",
      desc: "Använd den som din officiella postadress för företag eller privat bruk.",
      icon: FileText,
    },
    {
      n: "3",
      title: "Ta emot din post",
      desc: "Hämta din post eller få den digitalt när det passar dig.",
      icon: Inbox,
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden border-b border-[#E1EDF8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-18">
          <span className="inline-block text-[#05A7F4] text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            Så fungerar det
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-5 tracking-tight leading-tight">
            Kom igång i{" "}
            <span className="italic text-[#05A7F4]">3 enkla steg</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Etablera din officiella närvaro i Sverige på mindre än 5 minuter
            med vår helt digitala process.
          </p>
        </div>

        {/* Steps */}
        <ol className="relative flex flex-col md:flex-row items-start justify-between gap-10 md:gap-6">
          {/* Connecting line (desktop) - Adjusted top to center of the icon circle */}
          <div className="hidden md:block absolute top-[86px] left-[calc(16.66%+3rem)] right-[calc(16.66%+3rem)] h-px bg-gradient-to-r from-[#E1EDF8] via-[#05A7F4]/30 to-[#E1EDF8] z-0" />

          {steps.map((step, i) => {
            const StepIcon = step.icon;
            return (
              <li
                key={i}
                className="reveal flex-1 flex flex-col items-center text-center relative z-10"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Step Kicker Tag */}
                <span className="inline-block bg-[#EEF6FD] text-[#05A7F4] text-[10px] font-extrabold px-3 py-1 rounded-lg border border-[#05A7F4]/10 uppercase tracking-widest mb-4">
                  Steg {step.n}
                </span>

                {/* Icon circle */}
                <div className="w-24 h-24 rounded-full bg-white border-2 border-[#E1EDF8] flex items-center justify-center mb-6 shadow-[0_6px_20px_rgba(5,167,244,0.05)] relative group hover:border-[#05A7F4]/40 hover:bg-[#05A7F4] hover:shadow-[0_12px_28px_rgba(5,167,244,0.12)] transition-all duration-300">
                  <StepIcon className="w-8 h-8 text-[#05A7F4] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-base font-bold text-[#0a1628] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[220px] font-medium">
                  {step.desc}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
