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

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-secondary/30 selection:text-slate-900">
      {/* Floating Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Pricing Cards Section */}
      <Pricing />

      {/* Features Grid Section */}
      <Features />

      {/* Dark Value Highlights Banner */}
      <HighlightsBanner />

      {/* Services Grid Section */}
      <Services />

      {/* Onboarding Checklist Steps Section */}
      <Steps />

      {/* Locations Map Cards Section */}
      <Locations />

      {/* Testimonials Reviews Section */}
      <Testimonials />

      {/* Frequently Asked Questions Section */}
      <FAQ />

      {/* Final Action Banner and Footer */}
      <FooterCTA />
    </div>
  );
}