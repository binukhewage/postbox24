import React from "react";
import Navbar from "../../components/Navbar";
import FooterCTA from "../../components/FooterCTA";
import ScrollReveal from "../../components/ScrollReveal";
import Breadcrumbs from "../../components/Breadcrumbs";
import AeoTrustSignals from "../../components/AeoTrustSignals";
import JsonLd from "../../components/JsonLd";
import Link from "next/link";

export const metadata = {
  title: "Företagsadress Stockholm | Virtuell postbox & Säte | Postbox24",
  description:
    "Få en representativ företagsadress och virtuell postbox i Stockholms attraktiva områden (Östermalm, Södermalm). Fullt godkänd företagsregistrering.",
  alternates: {
    canonical: "https://postboxoffers.com/locations/stockholm",
  },
};

export default function StockholmLocationPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://postboxoffers.com/locations/stockholm/#localbusiness",
    name: "Postbox24 Stockholm",
    image: "https://postboxoffers.com/logo.webp",
    url: "https://postboxoffers.com/locations/stockholm",
    telephone: "08-743 07 70",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kocksgatan 49",
      addressLocality: "Stockholm",
      postalCode: "116 24",
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 59.3146,
      longitude: 18.0831,
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
    { label: "Stockholm", href: "/locations/stockholm" },
  ];

  const takeaways = [
    "Vårt huvudkontor i Stockholm ligger på Östermalm, med stödjande underkontor på Södermalm, i Farsta och Skärholmen.",
    "Idealiskt för registrering av säte hos Bolagsverket och skatteregistrering hos Skatteverket.",
    "Fysisk inlämning och upphämtning är möjlig på vårt servicekontor på Kocksgatan.",
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
          <span className="italic text-[#05A7F4]">Stockholm</span>
        </h1>

        {/* AEO Trust Signals */}
        <AeoTrustSignals takeaways={takeaways} lastUpdated="June 20, 2026" />

        {/* Concise Answer Block (GEO/AEO optimized) */}
        <section className="prose max-w-none text-slate-600 space-y-6">
          <p className="text-lg text-slate-800 font-semibold leading-relaxed">
            Postbox24:s tjänst for företagsadresser i Stockholm gör det möjligt att registrera ditt företag och hantera din post i attraktiva områden som Östermalm, Södermalm, Farsta och Skärholmen. Vi har varit verksamma sedan 1999 och erbjuder full digitalisering av post (skanning samma dag) samt säker fysisk upphämtning.
          </p>

          <hr className="border-[#E1EDF8] my-8" />

          {/* District Highlights */}
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Varför välja en adress i Stockholm för ditt företag?
            </h2>
            <p className="leading-relaxed">
              Stockholm är internationellt känt som Skandinaviens finansiella huvudstad och ett stort nav för tech-startups. En adress i Stockholms centrala affärsdistrikt höjer omedelbart företagets status och ger ett seriöst intryck gentemot banker, partners och svenska myndigheter.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 border border-[#E1EDF8] rounded-xl bg-[#F7FBFF]">
                <h4 className="font-bold text-[#0a1628] mb-1">
                  Östermalm & Södermalm
                </h4>
                <p className="text-xs leading-relaxed">
                  Representativ närvaro. Perfekt för tech-startups, SaaS-företag, finansiella konsulter och kreativa byråer.
                </p>
              </div>
              <div className="p-4 border border-[#E1EDF8] rounded-xl bg-[#F7FBFF]">
                <h4 className="font-bold text-[#0a1628] mb-1">
                  Farsta & Skärholmen
                </h4>
                <p className="text-xs leading-relaxed">
                  Strategiska förortslägen. Utmärkt för regionkontor, logistiska stödpunkter och e-handelsföretag.
                </p>
              </div>
            </div>
          </article>

          {/* Services Available */}
          <article className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Tillgängliga tjänster i Stockholm
            </h2>
            <p className="leading-relaxed">
              På våra Stockholmskontor har du tillgång till hela vårt utbud av professionella tjänster:
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
              Servicekontor & besöksinformation
            </h2>
            <p className="leading-relaxed">
              Om du vill besöka oss, hämta dina fysiska originalbrev eller lämna in brev för leverans dygnet runt, hittar du oss på vårt centrala kontor på Södermalm:
            </p>
            <div className="p-5 bg-slate-50 border border-[#E1EDF8] rounded-2xl text-sm space-y-2.5">
              <div>
                <strong>Gatuadress:</strong> Kocksgatan 49, 116 24 Stockholm, Sverige
              </div>
              <div>
                <strong>Kundsupport (tfn):</strong> 08-743 07 70
              </div>
              <div>
                <strong>Besökstider:</strong> Måndag – fredag 12:00–17:00 (inkastet öppet dygnet runt)
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
