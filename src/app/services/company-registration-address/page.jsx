import React from "react";
import Navbar from "../../components/Navbar";
import FooterCTA from "../../components/FooterCTA";
import ScrollReveal from "../../components/ScrollReveal";
import Breadcrumbs from "../../components/Breadcrumbs";
import AeoTrustSignals from "../../components/AeoTrustSignals";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  title: "Registrerad företagsadress & Säte i Sverige | Postbox24",
  description:
    "Få en juridiskt godkänd registrerad företagsadress och säte i Stockholm eller Göteborg. Lämplig för Aktiebolag och enskild firma.",
  alternates: {
    canonical: "https://postboxoffers.com/services/company-registration-address",
  },
};

export default function CompanyRegistrationAddressPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://postboxoffers.com/services/company-registration-address/#service",
    name: "Registrerad företagsadress & Säte",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://postboxoffers.com/#localbusiness",
    },
    areaServed: "SE",
    description:
      "Juridiskt godkända företagsadresser för registrering av säte hos Bolagsverket i Sverige.",
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
        name: "Kan jag registrera ett företag på den här adressen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, våra adresser ligger i kommersiella fastigheter, vilket gör dem helt godkända enligt Bolagsverkets regler för att registrera ett aktiebolag (AB).",
        },
      },
      {
        "@type": "Question",
        name: "Godkänner Skatteverket virtuella företagsadresser?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, förutsatt att adressen är en fysisk gatuadress som kan ta emot företagspost. Våra centrala kontorsadresser uppfyller alla Skatteverkets krav för skatteregistrering.",
        },
      },
    ],
  };

  const breadcrumbItems = [
    { label: "Tjänster", href: "/#services" },
    {
      label: "Företagsadress",
      href: "/services/company-registration-address",
    },
  ];

  const takeaways = [
    "Perfekt för att etablera ett svenskt Aktiebolag (AB) eller Enskild firma utan att behöva hyra dyra kontorslokaler.",
    "Inkluderar professionell posthantering av officiella meddelanden från Skatteverket, Bolagsverket och banker.",
    "Snabb och enkel onlineregistrering med BankID-verifiering.",
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
          Registrerad företagsadress i{" "}
          <span className="italic text-[#05A7F4]">Sverige</span>
        </h1>

        {/* AEO Trust Signals */}
        <AeoTrustSignals takeaways={takeaways} lastUpdated="June 20, 2026" />

        {/* Concise Answer Block (GEO/AEO optimized) */}
        <section className="prose max-w-none text-slate-600 space-y-6">
          <p className="text-lg text-slate-800 font-semibold leading-relaxed">
            En registrerad företagsadress ger dig en juridiskt godkänd kommersiell gatuadress i centrala Stockholm eller Göteborg. Denna adress fungerar som ditt företags officiella säte och uppfyller alla krav som ställs av Bolagsverket och Skatteverket för både nya och befintliga företag.
          </p>

          <hr className="border-[#E1EDF8] my-8" />

          {/* Section 1: What is this service? */}
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Kan jag registrera ett företag med denna adress?
            </h2>
            <p className="leading-relaxed">
              Ja. Svensk lag kräver att alla företagsformer, inklusive aktiebolag (AB) och enskilda firmor, har en registrerad adress i Sverige. Skatteverket och Bolagsverket godkänner i regel inte vanliga postboxadresser eller bostadsadresser i samma utsträckning.
            </p>
            <p className="leading-relaxed">
              Postbox24 erbjuder riktiga kommersiella gatuadresser i attraktiva affärsområden (Stockholm Östermalm och Göteborg Inom Vallgraven). Eftersom dessa är fysiska platser bemannade av vår personal, godkänner Bolagsverket dem fullt ut som ditt registrerade säte.
            </p>
          </article>

          {/* Section 2: How it works */}
          <article className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Hur registrerar jag min företagsadress?
            </h2>
            <p className="leading-relaxed">
              Processen är enkel och integreras smidigt med svenska registreringsportaler:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Välj ett abonnemang:</strong> Välj registreringsplanen för Stockholm eller Göteborg på vår plattform.
              </li>
              <li>
                <strong>Skicka registreringen till Bolagsverket:</strong> Ange din nya kommersiella gatuadress från Postbox24 som företagets registrerade adress (postadress) och säte (hos verksamt.se).
              </li>
              <li>
                <strong>Ta emot myndighetspost:</strong> Alla officiella meddelanden från Skatteverket och Bolagsverket digitaliseras direkt och skickas till dig som säker PDF.
              </li>
            </ol>
          </article>

          {/* Section 3: Who is it for? */}
          <article className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Vem är denna registreringstjänst till för?
            </h2>
            <p className="leading-relaxed">
              Denna tjänst är särskilt utformad för:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Nya startups:</strong> Grundare som vill starta ett Aktiebolag (AB) utan att hyra ett fysiskt kontor.
              </li>
              <li>
                <strong>Utländska moderbolag:</strong> Företag som etablerar ett svenskt dotterbolag.
              </li>
              <li>
                <strong>Lokala konsulter:</strong> Egenföretagare som vill hålla sin hemadress privat från offentliga register (såsom Ratsit och Allabolag).
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
                  <span>Kan jag registrera ett företag på den här adressen?</span>
                  <span className="text-[#05A7F4] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  Ja, våra adresser ligger i kommersiella fastigheter, vilket gör dem helt godkända enligt Bolagsverkets regler för att registrera ett aktiebolag (AB).
                </p>
              </details>

              <details className="group border-b border-[#E1EDF8] pb-4 [&[open]]:border-[#05A7F4]/30">
                <summary className="font-semibold text-[#0a1628] hover:text-[#05A7F4] cursor-pointer list-none flex justify-between items-center py-2">
                  <span>
                    Godkänner Skatteverket virtuella företagsadresser?
                  </span>
                  <span className="text-[#05A7F4] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  Ja, förutsatt att adressen är en fysisk gatuadress som kan ta emot företagspost. Våra centrala kontorsadresser uppfyller alla Skatteverkets krav för skatteregistrering.
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
