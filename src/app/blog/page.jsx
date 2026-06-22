import React from "react";
import Navbar from "../components/Navbar";
import FooterCTA from "../components/FooterCTA";
import ScrollReveal from "../components/ScrollReveal";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export const metadata = {
  title: "Blogg & Företagsinsikter | Postbox24",
  description:
    "Läs de senaste tipsen om företagsregistrering, virtuell posthantering, regler och hur du etablerar din närvaro i Sverige.",
  alternates: {
    canonical: "https://postboxoffers.com/blog",
  },
};

export default function BlogListingPage() {
  const articles = [
    {
      title: "Hur du väljer en virtuell postbox i Sverige",
      slug: "how-to-choose-virtual-mailbox-sweden",
      desc: "Lär dig vad du ska tänka på när du väljer en digital postboxtjänst, från säkra skanningsstandarder till godkända kommersiella adresser.",
      date: "19 juni 2026",
    },
    {
      title: "Hur du registrerar ett svenskt företag med en virtuell adress",
      slug: "register-company-swedish-address",
      desc: "En steg-för-steg-guide för att registrera ett nytt Aktiebolag eller en enskild firma med en virtuell kommersiell adress hos Bolagsverket.",
      date: "18 juni 2026",
    },
  ];

  const breadcrumbItems = [{ label: "Blogg", href: "/blog" }];

  return (
    <div className="relative min-h-screen bg-white text-[#0a1628]">
      <Navbar />

      <main id="main-content" className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-6 tracking-tight leading-tight">
          Blogg & <span className="italic text-[#05A7F4]">företagsinsikter</span>
        </h1>

        <p className="text-slate-500 text-base leading-relaxed mb-12 max-w-2xl">
          Experthandböcker och information om regelverk som hjälper distansentreprenörer och utländska företag att navigera kring företagsregistrering och postlogistik i Sverige.
        </p>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((post, idx) => (
            <article
              key={post.slug}
              className="reveal group bg-white border border-[#E1EDF8] rounded-3xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(5,167,244,0.03)] hover:shadow-[0_12px_40px_rgba(5,167,244,0.08)] hover:border-[#05A7F4]/20 transition-all duration-300"
            >
              <div>
                <span className="text-[#05A7F4] text-[10px] font-bold uppercase tracking-wider block mb-2">
                  {post.date}
                </span>
                <h3 className="text-lg font-bold text-[#0a1628] mb-3 leading-snug group-hover:text-[#05A7F4] transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 font-medium">
                  {post.desc}
                </p>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a1628] group-hover:text-[#05A7F4] transition-colors mt-4"
              >
                Läs artikeln
                <FiArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </main>

      <FooterCTA />
      <ScrollReveal />
    </div>
  );
}
