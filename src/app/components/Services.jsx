import React from "react";
import Link from "next/link";
import { 
  Briefcase, 
  Home, 
  Globe, 
  MapPin, 
  Mail, 
  Inbox, 
  User, 
  FileText, 
  ArrowRight 
} from "lucide-react";

export default function Services() {
  const audience = [
    {
      title: "Business Owners",
      desc: "Ideal for startups, consultants, sole proprietors, freelancers, e-commerce and growing businesses looking for a professional business address.",
      icon: Briefcase,
      image: "/business_owner.png",
      link: "/services/business-address"
    },
    {
      title: "Private Individuals",
      desc: "Keep your home address private and enjoy a stable mailing address, even if you move frequently.",
      icon: Home,
      image: "/private_individual.png",
      link: "/services/virtual-mailbox"
    },
    {
      title: "International Companies",
      desc: "Establish a trusted Swedish business presence with a local mailing address and reliable mail handling.",
      icon: Globe,
      image: "/international_companies.png",
      link: "/services/company-registration-address"
    },
  ];

  const offers = [
    {
      title: "Business Address",
      icon: Briefcase,
      link: "/services/business-address"
    },
    {
      title: "Virtual Address",
      icon: MapPin,
      link: "/services/virtual-mailbox"
    },
    {
      title: "Legal Mailing Address",
      icon: Mail,
      link: "/services/company-registration-address"
    },
    {
      title: "Business Mail Handling",
      icon: Inbox,
      link: "/services/mail-forwarding"
    },
    {
      title: "Address for Sole Proprietorships",
      icon: User,
      link: "/services/company-registration-address"
    },
    {
      title: "Digital Mail Management",
      icon: FileText,
      link: "/services/mail-forwarding"
    },
  ];

  return (
    <section id="services" className="bg-white py-24 md:py-32 overflow-hidden border-y border-[#E1EDF8]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[#05A7F4] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            WHO IS IT FOR?
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-normal text-[#0a1628] mb-5 tracking-tight leading-tight">
            A Perfect Mailing Solution for <span className="italic text-[#05A7F4]">Everyone</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Whether you are building a business, protecting your privacy or expanding internationally, Postbox24 has you covered.
          </p>
        </div>

        {/* 3 Arched Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {audience.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article
                key={idx}
                className="reveal flex flex-col group"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Arched Image Container */}
                <div className="relative w-full aspect-[1.5] mb-6 overflow-visible">
                  <div className="w-full h-full rounded-t-[140px] overflow-hidden bg-[#F7FBFF] border border-[#E1EDF8] relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-[#05A7F4] border-4 border-white text-white flex items-center justify-center shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-2">
                  <h3 className="text-xl font-bold text-[#0a1628] mb-3 group-hover:text-[#05A7F4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#05A7F4] hover:text-[#0393d6] transition-colors group/link"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Section Box */}
        <div className="reveal bg-[#F5F9FD] border border-[#E1EDF8] rounded-3xl p-8 lg:p-12 shadow-[0_4px_24px_rgba(5,167,244,0.02)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <span className="text-[#05A7F4] text-xs font-bold tracking-[0.2em] uppercase mb-3">
                WHAT WE OFFER
              </span>
              <h3 className="text-3xl lg:text-4xl font-display font-normal text-[#0a1628] mb-4 leading-tight">
                Professional Services <br /> That Work for <span className="italic text-[#05A7F4]">You</span>
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Convenient and secure solutions to receive, manage and access your mail without the need for a physical office.
              </p>
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-2 bg-[#05A7F4] hover:bg-[#0393d6] text-white text-sm font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-[0_4px_12px_rgba(5,167,244,0.3)] hover:shadow-[0_6px_16px_rgba(5,167,244,0.4)] hover:-translate-y-0.5 active:translate-y-0"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offers.map((offer, idx) => {
                const OfferIcon = offer.icon;
                return (
                  <article
                    key={idx}
                    className="bg-white border border-[#E1EDF8] rounded-2xl p-4 flex items-center gap-4 hover:shadow-[0_8px_24px_rgba(5,167,244,0.06)] hover:border-[#05A7F4]/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EEF6FD] text-[#05A7F4] flex items-center justify-center shrink-0 border border-[#05A7F4]/10 shadow-sm">
                      <OfferIcon className="w-5 h-5" />
                    </div>
                    <Link
                      href={offer.link}
                      className="font-bold text-sm text-[#0a1628] hover:text-[#05A7F4] transition-colors leading-tight"
                    >
                      {offer.title}
                    </Link>
                  </article>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}