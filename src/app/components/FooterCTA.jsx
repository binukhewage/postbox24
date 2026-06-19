"use client";

import React from "react";

export default function FooterCTA() {
  return (
    <footer className="bg-white pt-16 pb-12 border-t border-slate-150">
      <div className="max-w-6xl mx-auto px-6">
        {/* Small CTA Banner */}

        {/* Contact Section */}
        <div id="contact" className="border-t border-slate-100 pt-16 pb-16">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-10 tracking-tight text-center md:text-left">
            Contact & Support
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
            {/* Card 1: Telephone Support */}
            <div className="bg-slate-50/50 border border-slate-200/60 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-3">
                Telephone Support
              </h3>
              <div className="space-y-2 text-xs text-slate-600">
                <p>
                  <span className="font-bold text-slate-800">Phone:</span>{" "}
                  <a
                    href="tel:087430770"
                    className="hover:text-secondary font-semibold"
                  >
                    08-743 07 70
                  </a>
                </p>
                <p>
                  <span className="font-bold text-slate-800">
                    Telephone hours:
                  </span>
                  <br />
                  Monday - Friday 12:00-19:00
                </p>
                <p className="text-slate-400 italic mt-2 pt-2 border-t border-slate-200/50">
                  Please send an email at{" "}
                  <a
                    href="mailto:info@postbox24.se"
                    className="hover:text-secondary font-semibold"
                  >
                    info@postbox24.se
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Card 2: Direct Channels */}
            <div className="bg-slate-50/50 border border-slate-200/60 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-3">
                Direct Channels
              </h3>
              <div className="space-y-3 text-xs text-slate-600">
                <p>
                  <span className="font-bold text-slate-800">Email:</span>
                  <br />
                  <a
                    href="mailto:info@postbox24.se"
                    className="hover:text-secondary font-semibold"
                  >
                    info@postbox24.se
                  </a>
                </p>
                <p>
                  <span className="font-bold text-slate-800">Telegram:</span>
                  <br />
                  <a
                    href="https://t.me/postbox24se"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-secondary font-semibold"
                  >
                    @postbox24se
                  </a>
                </p>
                <p className="pt-2 border-t border-slate-200/50">
                  <span className="font-bold text-slate-800">SWISH:</span>{" "}
                  <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-semibold">
                    1230541359
                  </span>
                </p>
              </div>
            </div>

            {/* Card 3: Service Office */}
            <div className="bg-slate-50/50 border border-slate-200/60 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-3">
                Service Office
              </h3>
              <div className="space-y-3 text-xs text-slate-600">
                <p>
                  <span className="font-bold text-slate-800">Address:</span>
                  <br />
                  Kocksgatan 49
                </p>
                <p>
                  <span className="font-bold text-slate-800">
                    Opening Hours:
                  </span>
                  <br />
                  Monday - Friday 12:00-17:00
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 relative overflow-hidden ">
            <div className="text-left">
              <h3 className="text-lg font-extrabold text-slate-900 mb-1">
                Ready to Get Your Professional Business Address?
              </h3>
              <p className="text-slate-500 text-xs md:text-sm">
                Setting up takes less than 5 minutes. Cancel at any time with no
                hidden fees.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#pricing"
                className="bg-secondary hover:bg-secondary-hover text-white font-bold py-3 px-6 rounded-full transition-all duration-200 shadow-sm hover:shadow text-xs inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>🚀</span> Start Your Address
              </a>
            </div>
          </div>
        </div>

        {/* Real Footer Links & Info */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left copyright and details */}
          <div className="max-w-md">
            <h3 className="font-extrabold text-lg text-slate-900 mb-2">
              Postbox24
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              © {new Date().getFullYear()} Postbox24. All rights reserved.
              Postbox24 provides premium virtual business addresses in Sweden,
              helping remote entrepreneurs and businesses establish a secure,
              professional presence.
            </p>
          </div>

          {/* Right legal links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-semibold text-slate-500">
            <a
              href="#"
              className="hover:text-secondary transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-secondary transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-secondary transition-colors duration-200"
            >
              Cookie Policy
            </a>
            <a
              href="#contact"
              className="hover:text-secondary transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
