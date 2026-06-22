import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import FooterCTA from "../components/FooterCTA";
import ScrollReveal from "../components/ScrollReveal";
import Breadcrumbs from "../components/Breadcrumbs";
import AeoTrustSignals from "../components/AeoTrustSignals";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: "Integritetspolicy & GDPR | Postbox24",
  description:
    "Information om hur Postbox24 hanterar personuppgifter enligt GDPR, inklusive lagring av personnummer, ID-kopior samt dina rättigheter.",
  alternates: {
    canonical: "https://postboxoffers.com/privacy-policy-gdpr",
  },
};

export default function PrivacyPolicyGdprPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Vilka personuppgifter sparar Postbox24?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vi sparar och behandlar personuppgifter såsom personnummer samt foto på giltig legitimation eller pass i samband med att hyresavtalet upprättas.",
        },
      },
      {
        "@type": "Question",
        name: "Delas mina personuppgifter med tredje part?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dina personuppgifter sparas säkert och delas endast med tredje part (såsom myndigheter) i de fall vi är skyldiga att göra det enligt lag. Uppgifterna överförs aldrig utanför EU/EES.",
        },
      },
      {
        "@type": "Question",
        name: "Vilka rättigheter har jag gällande mina personuppgifter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Du har rätt att begära information om vilka uppgifter vi har om dig, begära rättelse, överföring (dataportabilitet) eller begränsning av behandlingen.",
        },
      },
    ],
  };

  const breadcrumbItems = [
    { label: "Integritetspolicy & GDPR", href: "/privacy-policy-gdpr" },
  ];

  const takeaways = [
    "Vi behandlar personnummer samt kopia av ID-handling/pass för avtalsändamål.",
    "Genom att signera avtalet samtycker du till vår personuppgiftsbehandling.",
    "Dina uppgifter lagras säkert inom EU/EES och delas endast vid lagkrav.",
    "Du har rätt till utdrag, rättelse och radering av dina personuppgifter.",
    "Klagomål kan lämnas till Datainspektionen (numera IMY).",
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#0a1628]">
      <JsonLd schema={faqSchema} />
      <Navbar />

      <main id="main-content" className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-6 tracking-tight leading-tight">
          Integritetspolicy & <span className="italic text-[#05A7F4]">GDPR</span>
        </h1>

        {/* AEO Trust Signals */}
        <AeoTrustSignals takeaways={takeaways} lastUpdated="20 juni 2026" />

        {/* Introduction */}
        <div className="prose max-w-none text-slate-600 space-y-8">
          <p className="text-lg text-slate-800 font-semibold leading-relaxed">
            Postbox24 värnar om din personliga integritet. Denna
            integritetspolicy förklarar hur vi samlar in, lagrar och behandlar
            dina personuppgifter i enlighet med dataskyddsförordningen (GDPR).
          </p>

          <hr className="border-[#E1EDF8] my-8" />

          {/* GDPR Detail Sections */}
          <section className="space-y-6">
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0a1628]">
                Vilka personuppgifter samlar vi in och behandlar?
              </h2>
              <p className="leading-relaxed">
                Vi behöver spara och behandla personuppgifter om dig, såsom ditt{" "}
                <strong>personnummer</strong> samt{" "}
                <strong>foto av ID-handling eller pass</strong>. Vi har fått
                dina uppgifter från dig i samband med att hyresavtalet
                upprättades.
              </p>
              <p className="leading-relaxed">
                Genom att signera hyresavtalet godkänner du att vi behandlar
                dina personuppgifter i enlighet med gällande svensk och
                europeisk lagstiftning.
              </p>
            </article>

            <article className="space-y-4 pt-6">
              <h2 className="text-2xl font-bold text-[#0a1628]">
                Lagring, delning och säkerhet
              </h2>
              <p className="leading-relaxed">
                Dina personuppgifter sparas på ett säkert sätt i våra system.
                Uppgifterna kan komma att delas med tredje part, under
                förutsättning att vi är skyldiga att göra det enligt lag (t.ex.
                vid förfrågningar från polisen, skatteverket eller finansiella
                brottsutredningar).
              </p>
              <p className="leading-relaxed font-semibold text-slate-850">
                Vi kommer aldrig att överföra dina personuppgifter till ett land
                utanför EU/EES.
              </p>
            </article>

            <article className="space-y-4 pt-6">
              <h2 className="text-2xl font-bold text-[#0a1628]">
                Dina rättigheter enligt GDPR
              </h2>
              <p className="leading-relaxed">
                Du har flera rättigheter gällande de personuppgifter vi
                behandlar om dig:
              </p>
              <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                <li>
                  <strong>Rätt till information:</strong> Du har rätt att
                  kontakta oss för att få veta vilka uppgifter vi har lagrade om
                  dig.
                </li>
                <li>
                  <strong>Rätt till rättelse:</strong> Du kan begära att vi
                  korrigerar felaktiga eller ofullständiga uppgifter.
                </li>
                <li>
                  <strong>Rätt till dataportabilitet:</strong> Du har rätt att
                  begära överföring av dina uppgifter.
                </li>
                <li>
                  <strong>Rätt till begränsning:</strong> Du kan begära att vi
                  begränsar behandlingen av dina uppgifter.
                </li>
              </ul>
            </article>

            <article className="space-y-4 pt-6">
              <h2 className="text-2xl font-bold text-[#0a1628]">
                Klagomål till tillsynsmyndigheten
              </h2>
              <p className="leading-relaxed">
                Om du har klagomål på vår behandling av dina personuppgifter har
                du rätt att lämna in ett klagomål till tillsynsmyndigheten{" "}
                <strong>Datainspektionen</strong> (numera namnbytt till{" "}
                <strong>Integritetsskyddsmyndigheten – IMY</strong>).
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
