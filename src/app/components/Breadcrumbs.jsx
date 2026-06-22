import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "./JsonLd";

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  // Build the BreadcrumbList JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href.startsWith("http")
        ? item.href
        : `https://postboxoffers.com${item.href}`,
    })),
  };

  return (
    <>
      <JsonLd schema={schema} />
      <nav aria-label="Breadcrumb" className="w-full py-4 mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
          <li>
            <Link
              href="/"
              className="hover:text-[#05A7F4] transition-colors duration-200"
            >
              Hem
            </Link>
          </li>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <li>
                  {isLast ? (
                    <span className="text-slate-800 font-semibold" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-[#05A7F4] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
