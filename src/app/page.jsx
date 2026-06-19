import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import HighlightsBanner from "./components/HighlightsBanner";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Locations from "./components/Locations";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FooterCTA from "./components/FooterCTA";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-[#0a1628] selection:bg-[#05A7F4]/20 selection:text-[#0a1628]">
      <Navbar />
      <Hero />
      <Pricing />
      <HighlightsBanner />
      <Features />
      <Services />
      <Steps />
      <Locations />
      <Testimonials />
      <FAQ />
      <FooterCTA />
      <ScrollReveal />
    </div>
  );
}
