import React from "react";
import Navbar from "../../components/Navbar";
import FooterCTA from "../../components/FooterCTA";
import ScrollReveal from "../../components/ScrollReveal";
import Breadcrumbs from "../../components/Breadcrumbs";
import AeoTrustSignals from "../../components/AeoTrustSignals";
import JsonLd from "../../components/JsonLd";
import Link from "next/link";

export const metadata = {
  title: "Business Address Stockholm | Virtual Mailbox & Registered Office",
  description:
    "Get a prestigious business address and virtual mailbox in Stockholm's premium commercial hubs (Östermalm, Södermalm). Fully compliant company registration.",
  alternates: {
    canonical: "https://postbox24.se/locations/stockholm",
  },
};

export default function StockholmLocationPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://postbox24.se/locations/stockholm/#localbusiness",
    name: "Postbox24 Stockholm",
    image: "https://postbox24.se/logo.webp",
    url: "https://postbox24.se/locations/stockholm",
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
    { label: "Locations", href: "/#locations" },
    { label: "Stockholm", href: "/locations/stockholm" },
  ];

  const takeaways = [
    "Our flagship Stockholm office is located in Östermalm, with supporting sub-locations in Södermalm, Farsta, and Skärholmen.",
    "Ideal for corporate registration (säte) with Bolagsverket and tax registration with Skatteverket.",
    "Physical drop-off and pickup options are available at our Kocksgatan service office.",
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#0a1628]">
      <JsonLd schema={localBusinessSchema} />
      <Navbar />

      <main id="main-content" className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-6 tracking-tight leading-tight">
          Business Address in{" "}
          <span className="italic text-[#05A7F4]">Stockholm</span>
        </h1>

        {/* AEO Trust Signals */}
        <AeoTrustSignals takeaways={takeaways} lastUpdated="June 19, 2026" />

        {/* Concise Answer Block (GEO/AEO optimized) */}
        <section className="prose max-w-none text-slate-600 space-y-6">
          <p className="text-lg text-slate-800 font-semibold leading-relaxed">
            Postbox24's Stockholm business address service allows you to
            register your company and manage correspondence from premium
            commercial hubs including Östermalm, Södermalm, Farsta, and
            Skärholmen. Operating since 1999, we provide full mail digitization
            (same-day scanning) and secure physical mail pickup.
          </p>

          <hr className="border-[#E1EDF8] my-8" />

          {/* District Highlights */}
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Why choose a Stockholm address for your company?
            </h2>
            <p className="leading-relaxed">
              Stockholm is recognized globally as the financial capital of
              Scandinavia and a major breeding ground for tech startups. An
              address in Stockholm's downtown commercial districts instantly
              elevates your company's prestige, reassuring local banks,
              partners, and Swedish regulatory bodies of your presence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 border border-[#E1EDF8] rounded-xl bg-[#F7FBFF]">
                <h4 className="font-bold text-[#0a1628] mb-1">
                  Östermalm & Södermalm
                </h4>
                <p className="text-xs leading-relaxed">
                  Flagship corporate presence. Ideal for tech startups, saas
                  enterprises, financial consultancies, and creative boutiques.
                </p>
              </div>
              <div className="p-4 border border-[#E1EDF8] rounded-xl bg-[#F7FBFF]">
                <h4 className="font-bold text-[#0a1628] mb-1">
                  Farsta & Skärholmen
                </h4>
                <p className="text-xs leading-relaxed">
                  Strategic suburban locations. Excellent for regional offices,
                  logistics support points, and e-commerce companies.
                </p>
              </div>
            </div>
          </article>

          {/* Services Available */}
          <article className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Services Available in Stockholm
            </h2>
            <p className="leading-relaxed">
              At our Stockholm offices, you can access our full suite of
              professional services:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none pl-0">
              <li className="flex items-center gap-2 p-2 border border-[#E1EDF8] rounded-lg">
                <span className="text-green-600 font-bold">✓</span>
                <Link
                  href="/services/virtual-mailbox"
                  className="font-semibold text-slate-800 hover:text-[#05A7F4]"
                >
                  Virtual Mailbox & Scanning
                </Link>
              </li>
              <li className="flex items-center gap-2 p-2 border border-[#E1EDF8] rounded-lg">
                <span className="text-green-600 font-bold">✓</span>
                <Link
                  href="/services/business-address"
                  className="font-semibold text-slate-800 hover:text-[#05A7F4]"
                >
                  Official Business Address
                </Link>
              </li>
              <li className="flex items-center gap-2 p-2 border border-[#E1EDF8] rounded-lg">
                <span className="text-green-600 font-bold">✓</span>
                <Link
                  href="/services/mail-forwarding"
                  className="font-semibold text-slate-800 hover:text-[#05A7F4]"
                >
                  Mail Forwarding
                </Link>
              </li>
              <li className="flex items-center gap-2 p-2 border border-[#E1EDF8] rounded-lg">
                <span className="text-green-600 font-bold">✓</span>
                <Link
                  href="/services/company-registration-address"
                  className="font-semibold text-slate-800 hover:text-[#05A7F4]"
                >
                  Registered Corporate Säte
                </Link>
              </li>
            </ul>
          </article>

          {/* Local Information */}
          <article className="space-y-4 pt-6 border-t border-[#E1EDF8]">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Service Office & Visiting Details
            </h2>
            <p className="leading-relaxed">
              If you wish to visit our team, pick up original physical mail, or
              drop off letters for 24/7 delivery, you can find us at our central
              Södermalm office:
            </p>
            <div className="p-5 bg-slate-50 border border-[#E1EDF8] rounded-2xl text-sm space-y-2.5">
              <div>
                <strong>Street Address:</strong> Kocksgatan 49, 116 24
                Stockholm, Sweden
              </div>
              <div>
                <strong>Customer Support Phone:</strong> 08-743 07 70
              </div>
              <div>
                <strong>Attending Hours:</strong> Monday – Friday 12:00–17:00
                (drop-off slot open 24/7)
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
