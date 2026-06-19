"use client";

import React from "react";
import { Rocket, Home, Globe, Check } from "lucide-react";

export default function Services() {
  const audience = [
    {
      title: "Business Owners",
      desc: "Ideal for limited companies, sole proprietors, consultants, freelancers, startups, and e-commerce businesses.",
      icon: Rocket,
    },
    {
      title: "Private Individuals",
      desc: "Maintain your privacy and enjoy a stable mailing address, even if you relocate frequently.",
      icon: Home,
    },
    {
      title: "International Companies",
      desc: "Establish a professional Swedish business presence with a trusted local mailing address.",
      icon: Globe,
    },
  ];

  const services = [
    "Business Address",
    "Virtual Address",
    "Legal Mailing Address",
    "Business Mail Handling",
    "Address for Sole Proprietorships",
    "Digital Mail Management",
  ];

  return (
    <section id="services" className="bg-[#F7FBFF] py-24 md:py-32 border-y border-[#E1EDF8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Who Is It For */}
        <div className="reveal">
          
          <h2 className="text-4xl font-display font-normal text-[#0a1628] mb-10 tracking-tight leading-tight">
            Who Is It <span className="italic text-[#05A7F4]">For?</span>
          </h2>
          
          <div className="space-y-5">
            {audience.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white border border-[#E1EDF8] p-6 rounded-2xl flex gap-5 shadow-[0_2px_8px_rgba(5,167,244,0.03)] hover:shadow-[0_8px_30px_rgba(5,167,244,0.06)] hover:border-[#05A7F4]/20 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EEF6FD] text-[#05A7F4] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#05A7F4] group-hover:text-white transition-all duration-300 border border-[#05A7F4]/10 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1628] text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Our Services Card */}
        <div className="reveal reveal-delay-1">
          <div className="bg-white border border-[#E1EDF8] p-8 md:p-10 rounded-3xl shadow-[0_8px_32px_rgba(5,167,244,0.04)] relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-[#05A7F4]" />
            
           
            <h2 className="text-4xl font-display font-normal text-[#0a1628] mb-6 tracking-tight leading-tight">
              Our <span className="italic text-[#05A7F4]">Services</span>
            </h2>
            
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
              These services provide a convenient and professional way to receive and manage your mail without maintaining a physical office.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#F7FBFF] border border-[#E1EDF8]/50 hover:border-[#05A7F4]/20 transition-all duration-200">
                  <div className="w-5 h-5 rounded-full bg-[#EEF6FD] text-[#05A7F4] flex items-center justify-center shrink-0 border border-[#05A7F4]/10">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <span className="text-[#0a1628] text-xs md:text-sm font-semibold tracking-tight">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}