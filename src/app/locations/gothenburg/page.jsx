import React from "react";
import Navbar from "../../components/Navbar";
import FooterCTA from "../../components/FooterCTA";
import ScrollReveal from "../../components/ScrollReveal";
import Breadcrumbs from "../../components/Breadcrumbs";
import AeoTrustSignals from "../../components/AeoTrustSignals";
import JsonLd from "../../components/JsonLd";
import Link from "next/link";

export const metadata = {
  title: "Business Address Gothenburg | Virtual Mailbox & Registered Office",
  description: "Secure a professional business address and virtual mailbox in central Gothenburg. Build legitimacy in Sweden's industrial and logistics hub.",
  alternates: {
    canonical: "https://postbox24.se/locations/gothenburg",
  },
};

export default function GothenburgLocationPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://postbox24.se/locations/gothenburg/#localbusiness",
    "name": "Postbox24 Gothenburg Hub",
    "image": "https://postbox24.se/logo.webp",
    "url": "https://postbox24.se/locations/gothenburg",
    "telephone": "08-743 07 70",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Central Location",
      "addressLocality": "Gothenburg",
      "postalCode": "411 04",
      "addressCountry": "SE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 57.7089,
      "longitude": 11.9746
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "12:00",
      "closes": "17:00"
    }
  };

  const breadcrumbItems = [
    { label: "Locations", href: "/#locations" },
    { label: "Gothenburg", href: "/locations/gothenburg" },
  ];

  const takeaways = [
    "Located in Inom Vallgraven, the historical and commercial heart of Gothenburg.",
    "Highly popular among trade, industrial, maritime, and regional e-commerce businesses.",
    "Fully compliant with Swedish companies laws for corporate registration (säte)."
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#0a1628]">
      <JsonLd schema={localBusinessSchema} />
      <Navbar />
      
      <main id="main-content" className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-6 tracking-tight leading-tight">
          Business Address in <span className="italic text-[#05A7F4]">Gothenburg</span>
        </h1>
        
        {/* AEO Trust Signals */}
        <AeoTrustSignals takeaways={takeaways} lastUpdated="June 19, 2026" />

        {/* Concise Answer Block (GEO/AEO optimized) */}
        <section className="prose max-w-none text-slate-600 space-y-6">
          <p className="text-lg text-slate-800 font-semibold leading-relaxed">
            Postbox24's Gothenburg business address service offers dynamic digital mail handling and corporate head office (säte) hosting in Gothenburg's central business district. Perfect for industrial firms, maritime startups, and e-commerce companies seeking presence in Sweden's largest port city.
          </p>

          <hr className="border-[#E1EDF8] my-8" />

          {/* District Highlights */}
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0a1628]">Why choose a Gothenburg address?</h2>
            <p className="leading-relaxed">
              Gothenburg (Göteborg) is Sweden's second city and the logistics and manufacturing capital of Scandinavia. The city hosts the largest port in the Nordic region and acts as a gateway for global trade.
            </p>
            <p className="leading-relaxed">
              Establishing a registered office or business address in central Gothenburg (Inom Vallgraven) links your brand with a robust culture of industrial innovation, trade excellence, and logistics leadership.
            </p>
          </article>

          {/* Services Available */}
          <article className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">Services Available in Gothenburg</h2>
            <p className="leading-relaxed">
              Our Gothenburg hub offers the identical suite of services as our flagship Stockholm offices:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none pl-0">
              <li className="flex items-center gap-2 p-2 border border-[#E1EDF8] rounded-lg">
                <span className="text-green-600 font-bold">✓</span>
                <Link href="/services/virtual-mailbox" className="font-semibold text-slate-800 hover:text-[#05A7F4]">
                  Virtual Mailbox & Scanning
                </Link>
              </li>
              <li className="flex items-center gap-2 p-2 border border-[#E1EDF8] rounded-lg">
                <span className="text-green-600 font-bold">✓</span>
                <Link href="/services/business-address" className="font-semibold text-slate-800 hover:text-[#05A7F4]">
                  Official Business Address
                </Link>
              </li>
              <li className="flex items-center gap-2 p-2 border border-[#E1EDF8] rounded-lg">
                <span className="text-green-600 font-bold">✓</span>
                <Link href="/services/mail-forwarding" className="font-semibold text-slate-800 hover:text-[#05A7F4]">
                  Mail Forwarding
                </Link>
              </li>
              <li className="flex items-center gap-2 p-2 border border-[#E1EDF8] rounded-lg">
                <span className="text-green-600 font-bold">✓</span>
                <Link href="/services/company-registration-address" className="font-semibold text-slate-800 hover:text-[#05A7F4]">
                  Registered Corporate Säte
                </Link>
              </li>
            </ul>
          </article>

          {/* Local Information */}
          <article className="space-y-4 pt-6 border-t border-[#E1EDF8]">
            <h2 className="text-2xl font-bold text-[#0a1628]">Gothenburg Hub Operational Details</h2>
            <p className="leading-relaxed">
              Gothenburg accounts are handled centrally with mail digitizing executed at our automated processing centers, assuring speed and security:
            </p>
            <div className="p-5 bg-slate-50 border border-[#E1EDF8] rounded-2xl text-sm space-y-2.5">
              <div>
                <strong>Local Area:</strong> Central Gothenburg (Inom Vallgraven), 411 04 Gothenburg, Sweden
              </div>
              <div>
                <strong>Billing Inquiries:</strong> info@postbox24.se
              </div>
              <div>
                <strong>Mail Scanning Processing:</strong> Same-day digitizing with delivery via secure PDF email attachment.
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
