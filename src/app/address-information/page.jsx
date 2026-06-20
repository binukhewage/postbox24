import React from "react";
import Navbar from "../components/Navbar";
import FooterCTA from "../components/FooterCTA";
import ScrollReveal from "../components/ScrollReveal";
import Breadcrumbs from "../components/Breadcrumbs";
import AeoTrustSignals from "../components/AeoTrustSignals";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: "Adressinformation & Regler för Postbox | Postbox24",
  description:
    "Viktig information om att anmäla Särskild postadress hos Skatteverket samt ändra företagsadress hos Bolagsverket och verksamt.se.",
  alternates: {
    canonical: "https://postbox24.se/address-information",
  },
};

export default function AddressInformationPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Jag har ingen folkbokföringsadress, kan jag vara folkbokförd på en postbox?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nej, du kan INTE vara folkbokförd på en postbox. Du måste ha en folkbokföringsadress också. Däremot kan du anmäla din postbox som Särskild postadress hos Skatteverket för att få din post dit.",
        },
      },
      {
        "@type": "Question",
        name: "Hur anmäler jag min nya adress som Särskild postadress och hur lång tid tar det?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Du anmäler själv din Särskilda postadress hos Skatteverket. Med Bank-ID tar det 2-5 arbetsdagar. Med pappersblankett tar det normalt 4-6 veckor. Ange alltid boxnumret i c/o-fältet.",
        },
      },
      {
        "@type": "Question",
        name: "Måste jag anmäla min postbox som Särskild postadress?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nej, det måste du inte, men om du låter bli får du inte post från myndigheter och företag som hämtar sin adressinformation automatiskt från Skatteverket.",
        },
      },
      {
        "@type": "Question",
        name: "Jag är inte kund längre men min postadress är fortfarande till postboxen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Postbox24 kan inte ta bort eller ändra din adress hos Skatteverket. Du måste själv logga in hos Skatteverket och ta bort den Särskilda postadressen.",
        },
      },
    ],
  };

  const breadcrumbItems = [
    { label: "Address Information", href: "/address-information" },
  ];

  const takeaways = [
    "Du kan inte vara folkbokförd på en postbox enligt svensk lag.",
    "Registrera din postbox som Särskild postadress hos Skatteverket för myndighetspost.",
    "Företag måste uppdatera sin adress hos Bolagsverket via verksamt.se.",
    "Kom ihåg att alltid ange ditt boxnummer i c/o-fältet.",
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#0a1628]">
      <JsonLd schema={faqSchema} />
      <Navbar />

      <main id="main-content" className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-6 tracking-tight leading-tight">
          Address <span className="italic text-[#05A7F4]">Information</span>
        </h1>

        {/* AEO Trust Signals */}
        <AeoTrustSignals takeaways={takeaways} lastUpdated="June 20, 2026"/>

        {/* Introduction */}
        <div className="prose max-w-none text-slate-600 space-y-8">
          <p className="text-lg text-slate-800 font-semibold leading-relaxed">
            När du skaffar en ny postadress hos Postbox24 är det viktigt att
            registrera den på rätt sätt hos de svenska myndigheterna. Här hittar
            du all information om hur du anmäler din nya adress för både
            privatpersoner och företag.
          </p>

          <hr className="border-[#E1EDF8] my-8" />

          {/* Section 1: Privatpersoner - Skatteverket */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0a1628] border-b border-[#E1EDF8] pb-3">
              Privatpersoner – Skatteverket
            </h2>
            <p className="leading-relaxed">
              När du får din nya postadress ifrån oss så måste du registrera den
              som en <strong>Särskild postadress</strong> om du vill att
              myndigheter och andra ska kunna nå dig via den. Om du inte
              registrerar adressen så måste du själv lämna ut adressen för att
              få post till postboxen.
            </p>

            <div className="bg-[#FFF9F2] border border-[#FFE7CC] rounded-xl p-5 text-sm text-[#8A5000] space-y-2">
              <p className="font-bold uppercase tracking-wider">
                ⚠️ Viktigt Ansvar & Folkbokföring
              </p>
              <p className="font-medium leading-relaxed">
                Att registrera din nya adress är ditt eget ansvar. Postbox24 kan
                inte ändra, ta bort eller uppdatera din adress hos
                myndigheterna.
              </p>
              <p className="font-bold underline leading-relaxed">
                DU KAN INTE VARA FOLKBOKFÖRD PÅ EN POSTBOX!
              </p>
            </div>

            {/* Skatteverket Image */}
            <div className="my-6 rounded-2xl overflow-hidden border border-[#E1EDF8] bg-slate-50">
              <img
                src="https://cdn.shopify.com/s/files/1/0535/4124/0990/files/skv4.jpg?v=1614706699"
                alt="Skatteverket blanketter och e-tjänster för särskild postadress"
                className="w-full h-auto object-cover max-h-[350px]"
              />
            </div>
          </section>

          {/* Section 2: FAQ */}
          <section className="space-y-6 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Vanliga Frågor Om Adresser
            </h2>

            <div className="space-y-4">
              <details className="group border-b border-[#E1EDF8] pb-4 [&[open]]:border-[#05A7F4]/30">
                <summary className="font-semibold text-[#0a1628] hover:text-[#05A7F4] cursor-pointer list-none flex justify-between items-center py-2">
                  <span>
                    Jag har ingen folkbokföringsadress, kan jag vara folkbokförd
                    på en postbox?
                  </span>
                  <span className="text-[#05A7F4] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  Nej, du kan INTE vara folkbokförd på en postbox, du måste ha
                  en folkbokföringsadress också. Du kan anmäla din postbox som
                  Särskild postadress hos Skatteverket, då får du din post dit.
                  Det är vanligt när man t.ex. delar lägenhet, är bortrest en
                  lång period, befinner sig mellan olika boenden eller av andra
                  skäl inte vill eller kan ha sin post till sin
                  folkbokföringsadress.
                </p>
              </details>

              <details className="group border-b border-[#E1EDF8] pb-4 [&[open]]:border-[#05A7F4]/30">
                <summary className="font-semibold text-[#0a1628] hover:text-[#05A7F4] cursor-pointer list-none flex justify-between items-center py-2">
                  <span>
                    Hur anmäler jag min nya adress som Särskild postadress och
                    hur lång tid tar det?
                  </span>
                  <span className="text-[#05A7F4] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="mt-2 text-slate-500 leading-relaxed text-sm space-y-2">
                  <p>
                    Du måste själv anmäla din nya adress som Särskild postadress
                    till Skatteverket. Vi kan, i mån av tid, vara behjälpliga
                    med det, men det är ditt eget ansvar att anmäla och avanmäla
                    den.
                  </p>
                  <p>
                    Om du anmäler ny Särskild postadress med{" "}
                    <strong>Bank-ID</strong> via Skatteverkets hemsida så tar
                    det normalt <strong>2-5 arbetsdagar</strong> innan den är
                    registrerad. Om du väljer att skicka in blanketten "Anmälan
                    om Särskild postadress" på papper, så tar det normalt{" "}
                    <strong>4-6 veckor</strong> innan den registreras.
                  </p>
                  <p className="font-semibold text-slate-700">
                    *Ange boxnummer i fältet ”c/o” när du ändrar adressen.*
                  </p>
                </div>
              </details>

              <details className="group border-b border-[#E1EDF8] pb-4 [&[open]]:border-[#05A7F4]/30">
                <summary className="font-semibold text-[#0a1628] hover:text-[#05A7F4] cursor-pointer list-none flex justify-between items-center py-2">
                  <span>
                    Måste jag anmäla min postbox som Särskild postadress?
                  </span>
                  <span className="text-[#05A7F4] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  Nej, du måste inte anmäla din postbox som Särskild postadress,
                  men det innebär att du inte får post till postboxen från de
                  myndigheter och företag som hämtar adressinformation från
                  Skatteverket. Endast från de företag och personer som du själv
                  väljer att lämna ut adressen till.
                </p>
              </details>

              <details className="group border-b border-[#E1EDF8] pb-4 [&[open]]:border-[#05A7F4]/30">
                <summary className="font-semibold text-[#0a1628] hover:text-[#05A7F4] cursor-pointer list-none flex justify-between items-center py-2">
                  <span>
                    Jag är inte kund längre men min postadress är fortfarande
                    till postboxen?
                  </span>
                  <span className="text-[#05A7F4] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  Postbox24 kan inte och får inte ändra din adress hos
                  Skatteverket – det är ditt eget ansvar. Ta bort den Särskilda
                  postadressen genom att besöka Skatteverket online eller
                  fysiskt.
                </p>
              </details>
            </div>

            {/* Skatteverket External Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://www.skatteverket.se/privat/folkbokforing/flyttanmalan/sarskildpostadress.4.361DC0C1153351C9B9C1DFD.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#05A7F4] hover:bg-[#0393d6] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 text-sm shadow-[0_4px_12px_rgba(5,167,244,0.25)]"
              >
                Registrera Särskild postadress hos Skatteverket
              </a>
              <a
                href="https://www.skatteverket.se"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#F7FBFF] hover:bg-[#EEF6FD] border border-[#E1EDF8] text-[#0a1628] font-semibold py-3 px-6 rounded-xl transition-all duration-200 text-sm"
              >
                Läs mer hos Skatteverket
              </a>
            </div>
          </section>

          <hr className="border-[#E1EDF8] my-8" />

          {/* Section 3: Företag - Bolagsverket */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0a1628] border-b border-[#E1EDF8] pb-3">
              Företag – Bolagsverket
            </h2>
            <p className="leading-relaxed">
              När ni fått er nya adress från oss så måste ni uppdatera den hos
              Bolagsverket, det gör ni enklast med Bank-ID på{" "}
              <strong>verksamt.se</strong>. Skatteverket hämtar automatiskt
              information om företagsadressändringar från Bolagsverket.
            </p>
            <p className="font-semibold text-slate-800 bg-[#F7FBFF] border border-[#E1EDF8] px-4 py-3 rounded-lg inline-block">
              * Ange alltid boxnumret i fältet ”c/o” när ni ändrar adressen. *
            </p>

            {/* Bolagsverket Image */}
            <div className="my-6 rounded-2xl overflow-hidden border border-[#E1EDF8] bg-slate-50">
              <img
                src="https://cdn.shopify.com/s/files/1/0535/4124/0990/files/bolagsverket_fasad_1600x610_cf9b961d-52fb-47c0-9535-c3690ff6e330.jpg?v=1614078817"
                alt="Bolagsverkets huvudkontor fasad"
                className="w-full h-auto object-cover max-h-[350px]"
              />
            </div>

            {/* Bolagsverket External Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://www.verksamt.se"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#05A7F4] hover:bg-[#0393d6] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 text-sm shadow-[0_4px_12px_rgba(5,167,244,0.25)]"
              >
                Ändra/Registrera adress på verksamt.se
              </a>
              <a
                href="https://bolagsverket.se"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#F7FBFF] hover:bg-[#EEF6FD] border border-[#E1EDF8] text-[#0a1628] font-semibold py-3 px-6 rounded-xl transition-all duration-200 text-sm"
              >
                Läs mer hos Bolagsverket
              </a>
            </div>
          </section>
        </div>
      </main>

      <FooterCTA />
      <ScrollReveal />
    </div>
  );
}
