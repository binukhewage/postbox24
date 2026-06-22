import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import FooterCTA from "../components/FooterCTA";
import ScrollReveal from "../components/ScrollReveal";
import Breadcrumbs from "../components/Breadcrumbs";
import AeoTrustSignals from "../components/AeoTrustSignals";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: "Återbetalningspolicy & Deposition | Postbox24",
  description:
    "Information om återbetalning, depositionsreturer (SEK 250), uppsägningstid och 14 dagars ångerrätt hos Postbox24.",
  alternates: {
    canonical: "https://postboxoffers.com/refund-policy",
  },
};

export default function RefundPolicyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kan jag få återbetalning efter att jag signerat hyresavtalet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hyresavgiften är i regel inte återbetalningsbar efter att hyresavtalet har signerats, med undantag för den lagstadgade 14-dagars ångerrätten för digitalt signerade avtal.",
        },
      },
      {
        "@type": "Question",
        name: "Hur fungerar ångerrätten för digitalt signerade avtal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Digitalt signerade avtal omfattas av 14 dagars ångerrätt. Vid utnyttjande av ångerrätten tas en administrativ avgift ut på 250 SEK. Återbetalning sker via elektronisk överföring.",
        },
      },
      {
        "@type": "Question",
        name: "Hur får jag tillbaka min deposition på 250 SEK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depositionen återbetalas när postboxen sägs upp skriftligen senast 2 månader innan avtalets utgång, en adressändring har registrerats bort från postboxen, samt eventuell nyckel har returnerats.",
        },
      },
    ],
  };

  const breadcrumbItems = [{ label: "Återbetalningspolicy", href: "/refund-policy" }];

  const takeaways = [
    "Hyresavgiften återbetalas inte efter signerat avtal.",
    "14 dagars ångerrätt gäller för digitala avtal mot en avgift på 250 SEK.",
    "Depositionen på 250 SEK återbetalas efter avslutad hyra under specifika villkor.",
    "Uppsägning måste ske skriftligen senast 2 månader innan hyresperiodens slut.",
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#0a1628]">
      <JsonLd schema={faqSchema} />
      <Navbar />

      <main id="main-content" className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-6 tracking-tight leading-tight">
          Återbetalnings<span className="italic text-[#05A7F4]">policy</span>
        </h1>

        {/* AEO Trust Signals */}
        <AeoTrustSignals takeaways={takeaways} lastUpdated="20 juni 2026" />

        {/* Concise Answer Block */}
        <div className="prose max-w-none text-slate-600 space-y-8">
          <p className="text-lg text-slate-800 font-semibold leading-relaxed">
            Här hittar du regler gällande återbetalning av hyresavgifter,
            återbetalning av depositioner samt villkor för ångerrätt vid
            tecknande av postbox online.
          </p>

          <hr className="border-[#E1EDF8] my-8" />

          {/* Policy Detail Sections */}
          <section className="space-y-6">
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0a1628]">
                Uppsägningstid & Återbetalning av Hyresavgift
              </h2>
              <p className="leading-relaxed">
                Hyresperioden löper på sex eller tolv månader och startar när
                betalningen har mottagits. Avtalet förlängs automatiskt med
                samma period (sex eller tolv månader) baserat på den senast
                betalda perioden om det inte sägs upp i tid.
              </p>
              <p className="leading-relaxed">
                Uppsägningstiden är <strong>två månader</strong> och måste ske
                skriftligen via e-post eller brev. Hyresavgiften är{" "}
                <strong>ej återbetalningsbar</strong> efter att hyresavtalet har
                tecknats.
              </p>
            </article>

            <article className="space-y-4 pt-6">
              <h2 className="text-2xl font-bold text-[#0a1628]">
                14 Dagars Ångerrätt för Digitala Avtal
              </h2>
              <p className="leading-relaxed">
                Digitally signerade hyresavtal omfattas av en lagstadgad{" "}
                <strong>fjorton dagars ångerrätt</strong>. Vid utnyttjande av
                ångerrätten tas en administrativ avgift ut på{" "}
                <strong>250 SEK</strong>. Eventuella returer och återbetalningar
                sker uteslutande via elektronisk banköverföring till
                hyrestagaren.
              </p>
            </article>

            <article className="space-y-4 pt-6">
              <h2 className="text-2xl font-bold text-[#0a1628]">
                Hur fungerar depositionsåterbetalningen?
              </h2>
              <p className="leading-relaxed">
                I hyrespriset ingår en deposition på <strong>250 SEK</strong>.
                Depositionen betalas endast tillbaka under följande
                förutsättningar:
              </p>
              <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                <li>
                  Postboxen har sagts upp skriftligen via e-post eller brev
                  senast <strong>två månader</strong> innan hyresavtalets
                  utgång.
                </li>
                <li>
                  En adressändring har genomförts så att ingen post längre
                  skickas till postboxen.
                </li>
                <li>
                  Samtliga nycklar tillhörande postboxen har returnerats till
                  Postbox24.
                </li>
              </ul>
              <p className="leading-relaxed">
                Precis som vid ångerrätt återbetalas depositionen endast via
                elektronisk banköverföring till hyrestagaren.
              </p>
            </article>
          </section>

          {/* Internal Link to Full Conditions */}
          <div className="pt-8 border-t border-[#E1EDF8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm font-medium text-slate-500">
              Vill du läsa de fullständiga avtalsvillkoren?
            </span>
            <Link
              href="/rental-conditions"
              className="inline-flex items-center gap-2 bg-[#05A7F4] hover:bg-[#0393d6] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 text-sm shadow-[0_4px_12px_rgba(5,167,244,0.20)]"
            >
              Läs våra fullständiga villkor här &gt;&gt;
            </Link>
          </div>
        </div>
      </main>

      <FooterCTA />
      <ScrollReveal />
    </div>
  );
}
