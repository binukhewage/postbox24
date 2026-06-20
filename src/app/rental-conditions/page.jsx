import React from "react";
import Navbar from "../components/Navbar";
import FooterCTA from "../components/FooterCTA";
import ScrollReveal from "../components/ScrollReveal";
import Breadcrumbs from "../components/Breadcrumbs";
import AeoTrustSignals from "../components/AeoTrustSignals";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: "Rental Conditions & Terms of Service | Postbox24",
  description:
    "Official terms and conditions governing the postbox rentals at Postbox24. Learn about rental periods, cancellations, deposits, and conditions.",
  alternates: {
    canonical: "https://postbox24.se/rental-conditions",
  },
};

export default function RentalConditionsPage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://postbox24.se/rental-conditions/#webpage",
    name: "Postbox24 Rental Conditions",
    description:
      "General terms of service and mailbox lease clauses for Postbox24 AB.",
    publisher: {
      "@type": "Organization",
      name: "Postbox24",
    },
  };

  const breadcrumbItems = [
    { label: "Rental Conditions", href: "/rental-conditions" },
  ];

  const takeaways = [
    "Rental periods automatically renew for the paid duration (6 or 12 months).",
    "Cancellation requires a written notice 2 months prior to the end date.",
    "Deposit of SEK 250 is refunded after successful termination and key return.",
    "Mailboxes CANNOT be used as a folkbokföring (civil registration) address.",
    "Subletting is strictly prohibited and leads to immediate termination.",
  ];

  const conditions = [
    {
      id: "section-1",
      title: "§ 1. Rental Period, Renewal & Right of Withdrawal",
      content:
        "The rental period of six or twelve months starts when payment has been received. The lease is automatically extended by six or twelve months in accordance with the last paid period. The notice period is two months and notice must be given in writing via e-mail or by letter. The rental fee is non-refundable after signing the rental agreement. Digitally signed leases are subject to a fourteen-day right of withdrawal for a fee of SEK 250. Digital returns are only refunded via electronic transfer to the lessee.",
    },
    {
      id: "section-2",
      title: "§ 2. Delivery & Address Change Responsibility",
      content:
        "Postbox24 is not responsible for mail misordered by Posten, Postnord and City Mail or lost for other reasons, nor for changes regarding the address. The lessee is responsible for changes of address himself. By signing the rental agreement, the customer agrees that Postbox24 may throw away any remaining mail at the end of the rental agreement as well as future mail that comes incorrectly because the customer has not changed his address.",
    },
    {
      id: "section-3",
      title: "§ 3. Proper Use & Criminal Activities Prohibitions",
      content:
        "The post office box may only be used for storing mail. Postbox24 has no responsibility for the contents of the post office box. The lessee has no right to use the post office box for other purposes. Violation of this results in immediate termination of the lease. Suspicion of possible criminal activity, money laundering or terrorist financing results in immediate termination of the lease, and will be reported to the police and reported to the financial police. The rental fee is non-refundable.",
    },
    {
      id: "section-4",
      title: "§ 4. Security Deposit Refund Conditions",
      content:
        "The price includes a deposit of SEK 250. The deposit is only refunded when the post office box is terminated in writing via e-mail or by letter two months before the end of the rental agreement, a change of address has taken place and any key returned. The deposit is only refunded via electronic transfer to the lessee.",
    },
    {
      id: "section-5",
      title: "§ 5. Service Termination Guidelines",
      content:
        "For termination of service, this must be done in writing via e-mail or by letter no later than two months before the end of the rental period, otherwise the rental period is automatically extended by six months or twelve months in accordance with the last paid period. In the event of termination, the deposit is only refunded when the post office box is canceled in writing via e-mail or by letter two months before the end of the rental agreement, a change of address must have taken place and any key must be returned. The deposit is only refunded via electronic transfer to the lessee. By signing the rental agreement, the customer agrees that Postbox24 may throw away any remaining mail at the end of the rental agreement as well as future mail that comes incorrectly because the customer has not changed his address.",
    },
    {
      id: "section-6",
      title: "§ 6. Invoices, Payments & Payment Channels",
      content:
        "One to two months before the end of the rental period, we send an invoice/reminder regarding the next period. The next period must be paid one month before the end of the current rental period. We currently offer the following payment options: SWISH (1230541359), card payment at the office or via our website, and payment to our Bankgiro: 5521-6121.",
    },
    {
      id: "section-7",
      title: "§ 7. Liabilities & Property Insurance Exclusions",
      content:
        "Postbox24 is not responsible for customers' property in their respective mailboxes in the event of burglary, fire or water damage to Postbox24's premises or their franchisee's premises.",
    },
    {
      id: "section-8",
      title: "§ 8. Civil Registration Act Compliance & Fines",
      content:
        "Customers who, according to the Civil Registration Act (1991:481), want to register at an address may themselves be responsible for their own use, amendment and rejection of an application, i.e. § 37. A fine can be imposed by the Swedish Tax Agency (Skatteverket) on anyone who does not comply with an order according to § 31 or 32. The rental fee is non-refundable.",
    },
    {
      id: "section-9",
      title: "§ 9. c/o Mail Forwarding & Subletting Prohibition",
      content:
        "Mail addressed c/o a lessee will be returned to the sender. Any form of subletting of the post office box leads to an immediate termination of the rental agreement. The rental fee is non-refundable.",
    },
    {
      id: "section-10",
      title: "§ 10. Civil Registration (Folkbokföring) Forbidden",
      content:
        "Under no circumstances is it permitted to use Postbox24's mailboxes as a civil registration address (folkbokföringsadress). However, we recommend registering the post office box as a special postal address (särskild postadress). Postbox24 reserves the right to immediately terminate a rental contract in cases where the customer has provided incorrect personal data. The rental fee is non-refundable.",
    },
    {
      id: "section-11",
      title: "§ 11. Digital Mailbox & Forwarding Service Agreements",
      content:
        "Digital mailbox – In cases where the customer wishes, Postbox24 forwards incoming mail to the customer via e-mail or regular mail. For this service, the Customer replaces Postbox24 according to the current price list. The customer confirms by ordering the service that Postbox24 or the person they appoint has the right to open mail for forwarding to the customer via e-mail or regular mail. Mail that is only forwarded via e-mail is saved for 30 days. Any bids that pick up mail on behalf of the customer must be notified in advance to the office and be able to present valid identification.",
    },
    {
      id: "section-12",
      title: "§ 12. Policy on Threatening Behavior & Safety",
      content:
        "Postbox24 reserves the right to immediately terminate a rental contract without further explanation in cases where the lessee behaves threateningly or otherwise creates discomfort for employees and other personnel. All threats are reported to the police. The rental fee is non-refundable.",
    },
    {
      id: "section-13",
      title: "§ 13. Acceptance of Terms",
      content:
        "The customer accepts these terms by signing the rental agreement with their signature or digital signature.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#0a1628]">
      <JsonLd schema={termsSchema} />
      <Navbar />

      <main id="main-content" className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-6 tracking-tight leading-tight">
          Rental <span className="italic text-[#05A7F4]">Conditions</span>
        </h1>

        {/* AEO Trust Signals */}
        <AeoTrustSignals takeaways={takeaways} lastUpdated="June 20, 2026" />

        {/* Introduction */}
        <div className="prose max-w-none text-slate-600 space-y-8">
          <p className="text-lg text-slate-800 font-semibold leading-relaxed">
            Här presenteras de allmänna hyresvillkoren för Postbox24. Dessa
            villkor gäller för samtliga hyresavtal gällande postboxar och
            digitala postbox-tjänster. Hyresvillkoren har senast uppdaterats den
            1 februari 2025.
          </p>

          <hr className="border-[#E1EDF8] my-8" />

          {/* Condition Cards Grid */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0a1628] mb-6">
              Hyresregler & Avtalsvillkor
            </h2>

            <div className="grid grid-cols-1 gap-5">
              {conditions.map((item, index) => (
                <article
                  key={index}
                  id={item.id}
                  className="bg-[#F7FBFF] border border-[#E1EDF8] p-6 rounded-2xl hover:border-[#05A7F4]/20 hover:shadow-[0_4px_16px_rgba(5,167,244,0.02)] transition-all duration-300"
                >
                  <h3 className="font-bold text-[#0a1628] text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Bottom Footer Notice */}
          <div className="bg-[#F7FBFF] border border-[#E1EDF8] p-5 rounded-2xl text-xs text-slate-500 mt-10">
            <p>
              Senast uppdaterad: <strong>2025-02-01</strong>. Vid frågor
              gällande dessa villkor är du välkommen att kontakta vår support på{" "}
              <a
                href="mailto:info@postbox24.se"
                className="text-[#05A7F4] hover:underline font-semibold"
              >
                info@postbox24.se
              </a>{" "}
              eller besöka vårt servicekontor.
            </p>
          </div>
        </div>
      </main>

      <FooterCTA />
      <ScrollReveal />
    </div>
  );
}
