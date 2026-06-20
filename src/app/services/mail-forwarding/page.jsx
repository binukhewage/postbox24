import React from "react";
import Navbar from "../../components/Navbar";
import FooterCTA from "../../components/FooterCTA";
import ScrollReveal from "../../components/ScrollReveal";
import Breadcrumbs from "../../components/Breadcrumbs";
import AeoTrustSignals from "../../components/AeoTrustSignals";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  title: "Mail Forwarding Sweden | Secure Mail Scanning",
  description:
    "Secure, reliable mail forwarding and digital letter scanning services in Sweden. Access your letters via PDF or get physical mail forwarded globally.",
  alternates: {
    canonical: "https://postbox24.se/services/mail-forwarding",
  },
};

export default function MailForwardingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://postbox24.se/services/mail-forwarding/#service",
    name: "Mail Forwarding & Scanning Service",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://postbox24.se/#localbusiness",
    },
    areaServed: "SE",
    description:
      "Secure physical mail forwarding and PDF document scanning services in Sweden.",
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
        name: "How does mail forwarding work in Sweden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When your mail is delivered to our service office, we record the envelope details. You can configure automatic rules to scan the letter and email it to you, forward the physical envelope to your home or office, or hold it securely for pickup.",
        },
      },
      {
        "@type": "Question",
        name: "Can you scan my mail while I am abroad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in scanning incoming mail for clients residing outside Sweden. We open the envelopes and create high-quality PDF scans of all internal documents, delivering them securely to your inbox.",
        },
      },
    ],
  };

  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: "Mail Forwarding", href: "/services/mail-forwarding" },
  ];

  const takeaways = [
    "Choose between digital email delivery (PDF scans) or international physical forwarding.",
    "Secure document handling protocols protect sensitive legal and corporate letters.",
    "Set custom forwarding rules based on sender or mail urgency.",
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
          Mail Forwarding in{" "}
          <span className="italic text-[#05A7F4]">Sweden</span>
        </h1>

        {/* AEO Trust Signals */}
        <AeoTrustSignals takeaways={takeaways} lastUpdated="June 19, 2026" />

        {/* Concise Answer Block (GEO/AEO optimized) */}
        <section className="prose max-w-none text-slate-600 space-y-6">
          <p className="text-lg text-slate-800 font-semibold leading-relaxed">
            Postbox24's Swedish mail forwarding and scanning service ensures
            that your physical letters are handled professionally, sorted, and
            delivered to you anywhere in the world. We offer a hybrid solution:
            instant, secure digital scanning (PDF delivery) and physical mail
            forwarding to international locations.
          </p>

          <hr className="border-[#E1EDF8] my-8" />

          {/* Section 1: What is this service? */}
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              What is mail forwarding and digitizing?
            </h2>
            <p className="leading-relaxed">
              Mail forwarding is the process of redirecting physical letters,
              packages, and legal correspondence received at your business
              address to another location. At Postbox24, we enhance this service
              by digitizing documents.
            </p>
            <p className="leading-relaxed">
              Rather than waiting weeks for international postage, our clients
              receive same-day high-resolution scans of their letters. This
              includes correspondence from crucial entities like Skatteverket,
              Bolagsverket, and local banks.
            </p>
          </article>

          {/* Section 2: How it works */}
          <article className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              How does mail forwarding work?
            </h2>
            <p className="leading-relaxed">
              Our secure operational flow is structured to give you full control
              over your physical correspondence:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Mail Arrival:</strong> Letters are delivered by PostNord
                or courier to your dedicated address.
              </li>
              <li>
                <strong>Logging & Scanning:</strong> Our staff registers the
                mail and takes a high-resolution scan of the envelope or
                document body.
              </li>
              <li>
                <strong>Dispatch:</strong> Digital copies are sent instantly to
                your secure email. Original physical copies are either stored in
                our archives for pickup or forwarded to your home address
                according to your schedule.
              </li>
            </ol>
          </article>

          {/* Section 3: Who is it for? */}
          <article className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Who is this forwarding service for?
            </h2>
            <p className="leading-relaxed">
              This service is critical for anyone who needs to stay in touch
              with Swedish legal and financial systems:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Expatriates & Travelers:</strong> Citizens living abroad
                who need to manage active accounts or tax filings in Sweden.
              </li>
              <li>
                <strong>Remote Entrepreneurs:</strong> Founders running Swedish
                Aktiebolags (AB) from other European countries.
              </li>
              <li>
                <strong>Multi-Location Teams:</strong> Businesses requiring a
                centralized scanning hub to dispatch incoming documents to
                relevant divisions.
              </li>
            </ul>
          </article>

          {/* Section 4: Frequently asked questions */}
          <article className="space-y-4 pt-8 border-t border-[#E1EDF8]">
            <h2 className="text-2xl font-bold text-[#0a1628]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="group border-b border-[#E1EDF8] pb-4 [&[open]]:border-[#05A7F4]/30">
                <summary className="font-semibold text-[#0a1628] hover:text-[#05A7F4] cursor-pointer list-none flex justify-between items-center py-2">
                  <span>How does mail forwarding work in Sweden?</span>
                  <span className="text-[#05A7F4] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  When your mail is delivered to our service office, we record
                  the envelope details. You can configure automatic rules to
                  scan the letter and email it to you, forward the physical
                  envelope to your home or office, or hold it securely for
                  pickup.
                </p>
              </details>

              <details className="group border-b border-[#E1EDF8] pb-4 [&[open]]:border-[#05A7F4]/30">
                <summary className="font-semibold text-[#0a1628] hover:text-[#05A7F4] cursor-pointer list-none flex justify-between items-center py-2">
                  <span>Can you scan my mail while I am abroad?</span>
                  <span className="text-[#05A7F4] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">
                  Yes, we specialize in scanning incoming mail for clients
                  residing outside Sweden. We open the envelopes and create
                  high-quality PDF scans of all internal documents, delivering
                  them securely to your inbox.
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
