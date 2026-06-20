import React from "react";
import Navbar from "../../components/Navbar";
import FooterCTA from "../../components/FooterCTA";
import ScrollReveal from "../../components/ScrollReveal";
import Breadcrumbs from "../../components/Breadcrumbs";
import AeoTrustSignals from "../../components/AeoTrustSignals";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  title: "Business Address Sweden | Prestigious Office Locations",
  description: "Get a prestigious business address in Stockholm or Gothenburg. Establish a professional presence for your company with flexible terms and instant setup.",
  alternates: {
    canonical: "https://postbox24.se/services/business-address",
  },
};

export default function BusinessAddressPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://postbox24.se/services/business-address/#service",
    "name": "Business Address Service",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://postbox24.se/#localbusiness"
    },
    "areaServed": "SE",
    "description": "Prestigious physical business addresses in central Stockholm and Gothenburg for startups, consultants, and international enterprises.",
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
        "name": "What is a virtual business address in Sweden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A virtual business address is a real, physical office location that you rent to represent your business. It allows you to list a professional address on your website, business cards, and corporate registrations while handling mail digitally."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this address to register a company in Sweden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our business addresses are fully compliant with Swedish registry requirements (Bolagsverket and Skatteverket) and can be used as your official company registration address."
        }
      }
    ]
  };

  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: "Business Address", href: "/services/business-address" },
  ];

  const takeaways = [
    "A prime business address in Stockholm's Östermalm district instantly builds credibility with clients and partners.",
    "Fully compliant with Swedish registry standards (Bolagsverket) to avoid registry application rejections.",
    "Receive and archive physical mail or choose mail forwarding to keep your operations running smoothly."
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
          Business Address in <span className="italic text-[#05A7F4]">Sweden</span>
        </h1>
        
        {/* AEO Trust Signals */}
        <AeoTrustSignals takeaways={takeaways} lastUpdated="June 19, 2026" />

        {/* Concise Answer Block (GEO/AEO optimized) */}
        <section className="prose max-w-none text-slate-600 space-y-6">
          <p className="text-lg text-slate-800 font-semibold leading-relaxed">
            A Swedish business address provides your enterprise with an official, prestigious physical location in central Stockholm or Gothenburg. This service is ideal for startups, remote consultants, and international brands looking to establish a local presence and satisfy legal corporate registration requirements.
          </p>

          <hr className="border-[#E1EDF8] my-8" />

          {/* Section 1: What is this service? */}
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0a1628]">What is a virtual business address in Sweden?</h2>
            <p className="leading-relaxed">
              A virtual business address is a commercial street address that serves as your company's official public and legal contact point. In Sweden, regulations require all registered business entities to have a physical address where government agencies like Bolagsverket (Swedish Companies Registration Office) and Skatteverket (Swedish Tax Agency) can reach them.
            </p>
            <p className="leading-relaxed">
              Postbox24 offers prestigious corporate addresses in central Stockholm (Östermalm) and Gothenburg (Inom Vallgraven). While your mail is handled at this physical site, you can operate your business from any city or country.
            </p>
          </article>

          {/* Section 2: How it works */}
          <article className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">How does a business address service work?</h2>
            <p className="leading-relaxed">
              Establishing your local presence is rapid and fully digital:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Select a City:</strong> Choose between our flagship Stockholm office in Östermalm or our Gothenburg hub.
              </li>
              <li>
                <strong>Register Online:</strong> Fill out the contract using BankID verification. The setup takes less than five minutes.
              </li>
              <li>
                <strong>Update Registries:</strong> Use the newly acquired street address as your official corporate headquarters on Skatteverket, invoices, and your public website.
              </li>
            </ol>
          </article>

          {/* Section 3: Who is it for? */}
          <article className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">Who is this business address service for?</h2>
            <p className="leading-relaxed">
              Having an office address is vital for multiple professional profiles:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>E-commerce Retailers:</strong> Avoid listing your personal home address publicly on your online store.</li>
              <li><strong>Foreign Startups:</strong> Establish a Swedish presence and easily open local bank accounts.</li>
              <li><strong>Consulting Firms:</strong> Secure a prestigious downtown address to match the premium nature of your services.</li>
            </ul>
          </article>

          {/* Section 4: Frequently asked questions */}
          <article className="space-y-4 pt-8 border-t border-[#E1EDF8]">
            <h2 className="text-2xl font-bold text-[#0a1628]">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border-b border-[#E1EDF8] pb-4 [&[open]]:border-[#05A7F4]/30">
                <summary className="font-semibold text-[#0a1628] hover:text-[#05A7F4] cursor-pointer list-none flex justify-between items-center py-2">
                  <span>What is a virtual business address in Sweden?</span>
                  <span className="text-[#05A7F4] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  A virtual business address is a real, physical office location that you rent to represent your business. It allows you to list a professional address on your website, business cards, and corporate registrations while handling mail digitally.
                </p>
              </details>

              <details className="group border-b border-[#E1EDF8] pb-4 [&[open]]:border-[#05A7F4]/30">
                <summary className="font-semibold text-[#0a1628] hover:text-[#05A7F4] cursor-pointer list-none flex justify-between items-center py-2">
                  <span>Can I use this address to register a company in Sweden?</span>
                  <span className="text-[#05A7F4] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  Yes, our business addresses are fully compliant with Swedish registry requirements (Bolagsverket and Skatteverket) and can be used as your official company registration address.
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
