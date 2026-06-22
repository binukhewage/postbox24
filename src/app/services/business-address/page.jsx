import React from "react";
import Navbar from "../../components/Navbar";
import FooterCTA from "../../components/FooterCTA";
import ScrollReveal from "../../components/ScrollReveal";
import Breadcrumbs from "../../components/Breadcrumbs";
import AeoTrustSignals from "../../components/AeoTrustSignals";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  title: "Företagsadress i Sverige | Representativa kontorsadresser",
  description:
    "Få en representativ företagsadress i Stockholm eller Göteborg. Skapa en professionell närvaro för ditt företag med flexibla villkor och direkt aktivering.",
  alternates: {
    canonical: "https://postboxoffers.com/services/business-address",
  },
};

export default function BusinessAddressPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://postboxoffers.com/services/business-address/#service",
    name: "Företagsadresstjänst",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://postboxoffers.com/#localbusiness",
    },
    areaServed: "SE",
    description:
      "Representativa fysiska företagsadresser i centrala Stockholm och Göteborg för startups, konsulter och utländska företag.",
    offers: {
      "@type": "Offer",
      priceCurrency: "SEK",
      price: "129.00",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceType: "https://schema.org/RecurringPaymentPrice",
        billingIncrement: 1,
        billingPeriod: "month",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Vad är en virtuell företagsadress i Sverige?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En virtuell företagsadress är en verklig, fysisk kontorsadress som du hyr för att representera ditt företag. Den låter dig visa en professionell adress på din hemsida, visitkort och företagsregistreringar, medan posten hanteras digitalt.",
        },
      },
      {
        "@type": "Question",
        name: "Kan jag använda denna adress för att registrera ett företag i Sverige?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, våra företagsadresser uppfyller alla svenska registreringskrav hos Bolagsverket och Skatteverket och kan användas som ditt företags officiella registrerade adress.",
        },
      },
    ],
  };

  const breadcrumbItems = [
    { label: "Tjänster", href: "/#services" },
    { label: "Företagsadress", href: "/services/business-address" },
  ];

  const takeaways = [
    "En attraktiv företagsadress på Östermalm i Stockholm bygger omedelbart förtroende hos kunder och partners.",
    "Helt förenlig med Bolagsverkets regler för att undvika avslag på din företagsregistrering.",
    "Ta emot och arkivera fysisk post eller välj eftersändning för att hålla verksamheten igång smidigt.",
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#0a1628]">
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={faqSchema} />
      <Navbar />

      <main id="main-content" className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-6 tracking-tight leading-tight">
          Företagsadress i{" "}
          <span className="italic text-[#05A7F4]">Sverige</span>
        </h1>

        {/* AEO Trust Signals */}
        <AeoTrustSignals takeaways={takeaways} lastUpdated="19 juni 2026" />

        {/* Concise Answer Block (GEO/AEO optimized) */}
        <section className="prose max-w-none text-slate-600 space-y-6">
          <p className="text-lg text-slate-800 font-semibold leading-relaxed">
            En svensk företagsadress ger din verksamhet en officiell och representativ fysisk adress i centrala Stockholm eller Göteborg. Tjänsten är idealisk för startups, distanskonsulter och utländska varumärken som vill etablera en lokal närvaro och uppfylla lagkraven för företagsregistrering.
          </p>

          <hr className="border-[#E1EDF8] my-8" />

          {/* Section 1: What is this service? */}
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Vad är en Fysisk företag adress i Sverige?
            </h2>
            <p className="leading-relaxed">
              En Fysisk företag adress är en kommersiell gatuadress som fungerar som ditt företags officiella publika och juridiska kontaktpunkt. I Sverige kräver regelverket att alla registrerade företag har en fysisk adress där myndigheter som Bolagsverket och Skatteverket kan nå dem.
            </p>
            <p className="leading-relaxed">
              Postbox24 erbjuder attraktiva företagsadresser i centrala Stockholm (Östermalm) och Göteborg (Inom Vallgraven). Medan din post hanteras på den fysiska adressen kan du driva din verksamhet från valfri stad eller land.
            </p>
          </article>

          {/* Section 2: How it works */}
          <article className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Hur fungerar en företagsadresstjänst?
            </h2>
            <p className="leading-relaxed">
              Att etablera din lokala närvaro går snabbt och är helt digitalt:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Välj ort:</strong> Välj mellan vår flaggskeppsadress på Östermalm i Stockholm eller vår hubb i Göteborg.
              </li>
              <li>
                <strong>Registrera online:</strong> Fyll i avtalet enkelt med BankID-verifiering. Det tar under fem minuter.
              </li>
              <li>
                <strong>Uppdara register:</strong> Använd din nya gatuadress som ditt företags officiella säte hos Bolagsverket/Skatteverket, på fakturor och på din hemsida.
              </li>
            </ol>
          </article>

          {/* Section 3: Who is it for? */}
          <article className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Vem är denna företagsadresstjänst till för?
            </h2>
            <p className="leading-relaxed">
              Att ha en professionell kontorsadress är viktigt för många typer av verksamheter:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>E-handlare:</strong> Undvik att visa din privata hemadress offentligt på din webbplats.
              </li>
              <li>
                <strong>Utländska startups:</strong> Etablera en svensk närvaro och underlätta öppnandet av lokala bankkonton.
              </li>
              <li>
                <strong>Konsultbyråer:</strong> Säkra en representativ adress i centrum som matchar dina tjänsters höga kvalitet.
              </li>
            </ul>
          </article>

          {/* Section 4: Frequently asked questions */}
          <article className="space-y-4 pt-8 border-t border-[#E1EDF8]">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Vanliga frågor
            </h2>
            <div className="space-y-4">
              <details className="group border-b border-[#E1EDF8] pb-4 [&[open]]:border-[#05A7F4]/30">
                <summary className="font-semibold text-[#0a1628] hover:text-[#05A7F4] cursor-pointer list-none flex justify-between items-center py-2">
                  <span>Vad är en virtuell företagsadress i Sverige?</span>
                  <span className="text-[#05A7F4] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  En virtuell företagsadress är en verklig, fysisk kontorsadress som du hyr för att representera ditt företag. Den låter dig visa en professionell adress på din hemsida, visitkort och företagsregistreringar, medan posten hanteras digitalt.
                </p>
              </details>

              <details className="group border-b border-[#E1EDF8] pb-4 [&[open]]:border-[#05A7F4]/30">
                <summary className="font-semibold text-[#0a1628] hover:text-[#05A7F4] cursor-pointer list-none flex justify-between items-center py-2">
                  <span>
                    Kan jag använda denna adress för att registrera ett företag i Sverige?
                  </span>
                  <span className="text-[#05A7F4] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  Ja, våra företagsadresser uppfyller alla svenska registreringskrav hos Bolagsverket och Skatteverket och kan användas som ditt företags officiella registrerade adress.
                </p>
              </details>
            </div>
          </article>
        </section>
      </main>

      <FooterCTA />
      <ScrollReveal />
    </div>
  );
}
