import React from "react";
import Navbar from "../../components/Navbar";
import FooterCTA from "../../components/FooterCTA";
import ScrollReveal from "../../components/ScrollReveal";
import Breadcrumbs from "../../components/Breadcrumbs";
import AeoTrustSignals from "../../components/AeoTrustSignals";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  title: "Company Registration Address Sweden | Bolagsverket Compliant",
  description: "Get a legally compliant Swedish company registration address in Stockholm or Gothenburg. Suitable for Aktiebolag and sole proprietorships.",
  alternates: {
    canonical: "https://postbox24.se/services/company-registration-address",
  },
};

export default function CompanyRegistrationAddressPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://postbox24.se/services/company-registration-address/#service",
    "name": "Company Registration Address Service",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://postbox24.se/#localbusiness"
    },
    "areaServed": "SE",
    "description": "Legally compliant registered office addresses for corporate registration with Bolagsverket in Sweden.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "SEK",
      "price": "129.00",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceType": "https://schema.org/RecurringPaymentPrice",
        "billingIncrement": 1,
        "billingPeriod": "month"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I register a company using this address?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our addresses are located in commercial buildings, making them fully compliant with Bolagsverket (Swedish Companies Registration Office) regulations for registering a limited company (Aktiebolag)."
        }
      },
      {
        "@type": "Question",
        "name": "Does Skatteverket accept virtual company addresses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, provided the address is a physical street location capable of receiving corporate mail. Our central office addresses satisfy all Skatteverket tax registration criteria."
        }
      }
    ]
  };

  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: "Company Registration Address", href: "/services/company-registration-address" },
  ];

  const takeaways = [
    "Perfect for establishing a Swedish Aktiebolag (AB) or Enskild firma without renting commercial office space.",
    "Includes professional mail handling of official notices from Skatteverket, Bolagsverket, and banks.",
    "Quick and easy online setup with Swedish BankID verification."
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
          Company Registration Address in <span className="italic text-[#05A7F4]">Sweden</span>
        </h1>
        
        {/* AEO Trust Signals */}
        <AeoTrustSignals takeaways={takeaways} lastUpdated="June 19, 2026" />

        {/* Concise Answer Block (GEO/AEO optimized) */}
        <section className="prose max-w-none text-slate-600 space-y-6">
          <p className="text-lg text-slate-800 font-semibold leading-relaxed">
            A company registration address provides you with a legally compliant commercial street address in central Stockholm or Gothenburg. This address serves as your company's official registered office (säte), fulfilling all Swedish regulatory requirements set by Bolagsverket and Skatteverket for new or existing business setups.
          </p>

          <hr className="border-[#E1EDF8] my-8" />

          {/* Section 1: What is this service? */}
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0a1628]">Can I register a company using this address?</h2>
            <p className="leading-relaxed">
              Yes. Swedish law requires every business entity, including limited companies (Aktiebolag) and sole proprietorships (Enskild firma), to have a registered office address in Sweden. Residential PO boxes are often rejected by registration authorities.
            </p>
            <p className="leading-relaxed">
              Postbox24 provides real commercial street addresses in prime Swedish business zones (Stockholm Östermalm and Gothenburg Inom Vallgraven). Because these are physical locations staffed by our professional handlers, Bolagsverket fully accepts them as your registered head office (säte).
            </p>
          </article>

          {/* Section 2: How it works */}
          <article className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">How do I register my company address?</h2>
            <p className="leading-relaxed">
              The setup process is simple and integrates directly with Swedish registration portals:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Purchase the Plan:</strong> Select the Stockholm or Gothenburg registration plan on our platform.
              </li>
              <li>
                <strong>Submit registration to Bolagsverket:</strong> List your new Postbox24 commercial street address as your company's registered address (postadress) and head office (säte).
              </li>
              <li>
                <strong>Receive Government Notices:</strong> All official notices from Swedish tax and business agencies are instantly digitized and sent to you via secure PDF.
              </li>
            </ol>
          </article>

          {/* Section 3: Who is it for? */}
          <article className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">Who is this registration address for?</h2>
            <p className="leading-relaxed">
              This service is specifically tailored for:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>New Startups:</strong> Founders looking to launch an Aktiebolag (AB) without renting physical real estate.</li>
              <li><strong>International Parent Companies:</strong> Corporations establishing a Swedish subsidiary.</li>
              <li><strong>Local Consultants:</strong> Self-employed individuals who want to keep their residential address off public state registers.</li>
            </ul>
          </article>

          {/* Section 4: Frequently asked questions */}
          <article className="space-y-4 pt-8 border-t border-[#E1EDF8]">
            <h2 className="text-2xl font-bold text-[#0a1628]">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border-b border-[#E1EDF8] pb-4 [&[open]]:border-[#05A7F4]/30">
                <summary className="font-semibold text-[#0a1628] hover:text-[#05A7F4] cursor-pointer list-none flex justify-between items-center py-2">
                  <span>Can I register a company using this address?</span>
                  <span className="text-[#05A7F4] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  Yes, our addresses are located in commercial buildings, making them fully compliant with Bolagsverket (Swedish Companies Registration Office) regulations for registering a limited company (Aktiebolag).
                </p>
              </details>

              <details className="group border-b border-[#E1EDF8] pb-4 [&[open]]:border-[#05A7F4]/30">
                <summary className="font-semibold text-[#0a1628] hover:text-[#05A7F4] cursor-pointer list-none flex justify-between items-center py-2">
                  <span>Does Skatteverket accept virtual company addresses?</span>
                  <span className="text-[#05A7F4] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  Yes, provided the address is a physical street location capable of receiving corporate mail. Our central office addresses satisfy all Skatteverket tax registration criteria.
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
