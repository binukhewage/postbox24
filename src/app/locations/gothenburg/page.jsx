import React from "react";
import Navbar from "../../components/Navbar";
import FooterCTA from "../../components/FooterCTA";
import ScrollReveal from "../../components/ScrollReveal";
import Breadcrumbs from "../../components/Breadcrumbs";
import AeoTrustSignals from "../../components/AeoTrustSignals";
import JsonLd from "../../components/JsonLd";
import Link from "next/link";

export const metadata = {
  title: "Företagsadress Göteborg | Virtuell postbox & Säte | Postbox24",
  description:
    "Skaffa en professionell företagsadress och virtuell postbox i centrala Göteborg. Skapa legitimitet i Sveriges industri- och logistikcentrum.",
  alternates: {
    canonical: "https://postboxoffers.com/locations/gothenburg",
  },
};

export default function GothenburgLocationPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://postboxoffers.com/locations/gothenburg/#localbusiness",
    name: "Postbox24 Göteborg",
    image: "https://postboxoffers.com/logo.webp",
    url: "https://postboxoffers.com/locations/gothenburg",
    telephone: "08-743 07 70",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Central Location",
      addressLocality: "Gothenburg",
      postalCode: "411 04",
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 57.7089,
      longitude: 11.9746,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "12:00",
      closes: "17:00",
    },
  };

  const breadcrumbItems = [
    { label: "Kontor", href: "/#locations" },
    { label: "Göteborg", href: "/locations/gothenburg" },
  ];

  const takeaways = [
    "Beläget Inom Vallgraven, Göteborgs historiska och kommersiella hjärta.",
    "Mycket populärt bland handels-, industri-, sjöfarts- och regionala e-handelsföretag.",
    "Fullt godkänt enligt svensk lagstiftning för registrering av företagets säte (Bolagsverket).",
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#0a1628]">
      <JsonLd schema={localBusinessSchema} />
      <Navbar />

      <main id="main-content" className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-6 tracking-tight leading-tight">
          Företagsadress i{" "}
          <span className="italic text-[#05A7F4]">Göteborg</span>
        </h1>

        {/* AEO Trust Signals */}
        <AeoTrustSignals takeaways={takeaways} lastUpdated="June 20, 2026" />

        {/* Concise Answer Block (GEO/AEO optimized) */}
        <section className="prose max-w-none text-slate-600 space-y-6">
          <p className="text-lg text-slate-800 font-semibold leading-relaxed">
            Postbox24:s tjänst för företagsadresser i Göteborg erbjuder dynamisk digital posthantering och värdskap för företagets säte i Göteborgs centrala affärsdistrikt. Perfekt för industrifirmor, sjöfartsstartups och e-handelsföretag som vill ha närvaro i Sveriges största hamnstad.
          </p>

          <hr className="border-[#E1EDF8] my-8" />

          {/* District Highlights */}
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Varför välja en adress i Göteborg?
            </h2>
            <p className="leading-relaxed">
              Göteborg är Sveriges näst största stad och Skandinaviens logistik- och tillverkningscentrum. Staden har Nordens största hamn och fungerar som en port för global handel.
            </p>
            <p className="leading-relaxed">
              Att etablera ett registrerat säte eller en företagsadress i centrala Göteborg (Inom Vallgraven) kopplar ditt varumärke till en stark kultur av industriell innovation, framstående handel och logistiskt ledarskap.
            </p>
          </article>

          {/* Services Available */}
          <article className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Tillgängliga tjänster i Göteborg
            </h2>
            <p className="leading-relaxed">
              Vår hubb i Göteborg erbjuder exakt samma utbud av tjänster som vårt huvudkontor i Stockholm:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none pl-0">
              <li className="flex items-center gap-2 p-2 border border-[#E1EDF8] rounded-lg">
                <span className="text-green-600 font-bold">✓</span>
                <Link
                  href="/services/virtual-mailbox"
                  className="font-semibold text-slate-800 hover:text-[#05A7F4]"
                >
                  Virtuell postbox & skanning
                </Link>
              </li>
              <li className="flex items-center gap-2 p-2 border border-[#E1EDF8] rounded-lg">
                <span className="text-green-600 font-bold">✓</span>
                <Link
                  href="/services/business-address"
                  className="font-semibold text-slate-800 hover:text-[#05A7F4]"
                >
                  Officiell företagsadress
                </Link>
              </li>
              <li className="flex items-center gap-2 p-2 border border-[#E1EDF8] rounded-lg">
                <span className="text-green-600 font-bold">✓</span>
                <Link
                  href="/services/mail-forwarding"
                  className="font-semibold text-slate-800 hover:text-[#05A7F4]"
                >
                  Eftersändning av post
                </Link>
              </li>
              <li className="flex items-center gap-2 p-2 border border-[#E1EDF8] rounded-lg">
                <span className="text-green-600 font-bold">✓</span>
                <Link
                  href="/services/company-registration-address"
                  className="font-semibold text-slate-800 hover:text-[#05A7F4]"
                >
                  Registrerat säte för företag
                </Link>
              </li>
            </ul>
          </article>

          {/* Local Information */}
          <article className="space-y-4 pt-6 border-t border-[#E1EDF8]">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Driftsinformation för Göteborgs-hubben
            </h2>
            <p className="leading-relaxed">
              Göteborgs-konton hanteras centralt med digitalisering av post vid våra automatiserade processcenter, vilket garanterar snabbhet och säkerhet:
            </p>
            <div className="p-5 bg-slate-50 border border-[#E1EDF8] rounded-2xl text-sm space-y-2.5">
              <div>
                <strong>Lokalt område:</strong> Centrala Göteborg (Inom Vallgraven), 411 04 Göteborg, Sverige
              </div>
              <div>
                <strong>Fakturafrågor:</strong> info@postbox24.se
              </div>
              <div>
                <strong>Skanning av post:</strong> Digitalisering samma dag med leverans via säkra PDF-bilagor till din e-post.
              </div>
            </div>
          </article>
        </section>
      </main>

      <FooterCTA />
      <ScrollReveal />
    </div>
  );
}
