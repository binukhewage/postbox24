import React from "react";
import Navbar from "../../components/Navbar";
import FooterCTA from "../../components/FooterCTA";
import ScrollReveal from "../../components/ScrollReveal";
import Breadcrumbs from "../../components/Breadcrumbs";
import AeoTrustSignals from "../../components/AeoTrustSignals";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  title: "Eftersändning & Postskanning Sverige | Postbox24",
  description:
    "Säker, pålitlig eftersändning och digital postskanning i Sverige. Läs dina brev som PDF eller få dem vidarebefordrade fysiskt över hela världen.",
  alternates: {
    canonical: "https://postboxoffers.com/services/mail-forwarding",
  },
};

export default function MailForwardingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://postboxoffers.com/services/mail-forwarding/#service",
    name: "Eftersändning & Postskanning",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://postboxoffers.com/#localbusiness",
    },
    areaServed: "SE",
    description:
      "Säker fysisk eftersändning och digital postskanning till PDF i Sverige.",
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
        name: "Hur fungerar eftersändning av post i Sverige?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "När din post levereras till vårt servicekontor registrerar vi kuvertet. Du kan ställa in automatiska regler för att skanna brevet och få det via e-post, vidarebefordra det fysiska kuvertet till ditt hem eller kontor, eller spara det säkert för upphämtning.",
        },
      },
      {
        "@type": "Question",
        name: "Kan ni skanna min post när jag är utomlands?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, vi är specialiserade på att skanna inkommande post för kunder som bor utanför Sverige. Vi öppnar kuverten och skapar högupplösta PDF-skanningar av alla dokument, som vi levererar säkert till din inkorg.",
        },
      },
    ],
  };

  const breadcrumbItems = [
    { label: "Tjänster", href: "/#services" },
    { label: "Eftersändning", href: "/services/mail-forwarding" },
  ];

  const takeaways = [
    "Välj mellan digital e-postleverans (PDF-skanningar) eller internationell fysisk eftersändning.",
    "Säkra protokoll för dokumenthantering skyddar känsliga juridiska brev och affärspost.",
    "Ställ in anpassade eftersändningsregler baserat på avsändare eller hur brådskande posten är.",
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
          Eftersändning av post i{" "}
          <span className="italic text-[#05A7F4]">Sverige</span>
        </h1>

        {/* AEO Trust Signals */}
        <AeoTrustSignals takeaways={takeaways} lastUpdated="June 20, 2026" />

        {/* Concise Answer Block (GEO/AEO optimized) */}
        <section className="prose max-w-none text-slate-600 space-y-6">
          <p className="text-lg text-slate-800 font-semibold leading-relaxed">
            Postbox24:s tjänst för eftersändning och postskanning i Sverige ser till att dina fysiska brev hanteras professionellt, sorteras och levereras till dig var som helst i världen. Vi erbjuder en hybridlösning: snabb, säker digital skanning (PDF-leverans) och fysisk eftersändning till internationella adresser.
          </p>

          <hr className="border-[#E1EDF8] my-8" />

          {/* Section 1: What is this service? */}
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Vad är eftersändning och digitalisering av post?
            </h2>
            <p className="leading-relaxed">
              Eftersändning är processen att omdirigera fysiska brev, paket och juridisk korrespondens som tas emot på din företagsadress till en annan plats. Hos Postbox24 förbättrar vi denna tjänst genom att digitalisera dokumenten.
            </p>
            <p className="leading-relaxed">
              Istället for att vänta i veckor på internationell postgång får våra kunder högupplösta skanningar av sina brev samma dag. Detta inkluderar viktig korrespondens från myndigheter som Skatteverket, Bolagsverket och lokala banker.
            </p>
          </article>

          {/* Section 2: How it works */}
          <article className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Hur fungerar eftersändning av post?
            </h2>
            <p className="leading-relaxed">
              Vårt säkra operativa flöde är strukturerat för att ge dig full kontroll över din fysiska post:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Postens ankomst:</strong> Brev levereras av PostNord eller bud till din dedikerade adress.
              </li>
              <li>
                <strong>Registrering & skanning:</strong> Vår personal registrerar posten och gör en högupplöst skanning av kuvertet eller dokumentets innehåll.
              </li>
              <li>
                <strong>Leverans:</strong> Digitala kopior skickas direkt till din säkra e-post. Fysiska original sparas antingen i vårt arkiv för upphämtning eller eftersänds till din hemadress enligt ditt schema.
              </li>
            </ol>
          </article>

          {/* Section 3: Who is it for? */}
          <article className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Vem är den här eftersändningstjänsten till för?
            </h2>
            <p className="leading-relaxed">
              Denna tjänst är avgörande för alla som behöver ha kontakt med svenska myndigheter och finansiella system på distans:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Utlandssvenskar & resenärer:</strong> Medborgare bosatta utomlands som behöver hantera aktiva konton eller skatteärenden i Sverige.
              </li>
              <li>
                <strong>Distansentreprenörer:</strong> Grundare som driver svenska aktiebolag (AB) från andra länder.
              </li>
              <li>
                <strong>Team på flera orter:</strong> Företag som behöver en centraliserad skanningshubb för att distribuera inkommande dokument till relevanta avdelningar.
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
                  <span>Hur fungerar eftersändning av post i Sverige?</span>
                  <span className="text-[#05A7F4] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  När din post levereras till vårt servicekontor registrerar vi kuvertet. Du kan ställa in automatiska regler för att skanna brevet och få det via e-post, vidarebefordra det fysiska kuvertet till ditt hem eller kontor, eller spara det säkert för upphämtning.
                </p>
              </details>

              <details className="group border-b border-[#E1EDF8] pb-4 [&[open]]:border-[#05A7F4]/30">
                <summary className="font-semibold text-[#0a1628] hover:text-[#05A7F4] cursor-pointer list-none flex justify-between items-center py-2">
                  <span>Kan ni skanna min post när jag är utomlands?</span>
                  <span className="text-[#05A7F4] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  Ja, vi är specialiserade på att skanna inkommande post för kunder som bor utanför Sverige. Vi öppnar kuverten och skapar högupplösta PDF-skanningar av alla dokument, som vi levererar säkert till din inkorg.
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
