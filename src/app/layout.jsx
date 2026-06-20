import "./globals.css";
import JsonLd from "./components/JsonLd";

export const metadata = {
  metadataBase: new URL("https://postbox24.se"),
  title: {
    default: "Postbox24 | Premium Virtual Mailbox & Business Address in Sweden",
    template: "%s | Postbox24",
  },
  description: "Get a prestigious business address, virtual mailbox, and secure mail forwarding in Stockholm or Gothenburg. Same-day activation, secure digital scanning.",
  alternates: {
    canonical: "https://postbox24.se/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Postbox24 | Premium Virtual Mailbox & Business Address in Sweden",
    description: "Get a prestigious business address, virtual mailbox, and secure mail forwarding in Stockholm or Gothenburg. Same-day activation, secure digital scanning.",
    url: "https://postbox24.se",
    siteName: "Postbox24",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Postbox24 | Premium Virtual Mailbox & Business Address in Sweden",
    description: "Get a prestigious business address, virtual mailbox, and secure mail forwarding in Stockholm or Gothenburg.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://postbox24.se/#organization",
  "name": "Postbox24",
  "url": "https://postbox24.se",
  "logo": "https://postbox24.se/logo.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+46-8-743-07-70",
    "contactType": "customer service",
    "availableLanguage": ["English", "Swedish"]
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://postbox24.se/#website",
  "name": "Postbox24",
  "url": "https://postbox24.se"
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://postbox24.se/#localbusiness",
  "name": "Postbox24",
  "image": "https://postbox24.se/logo.webp",
  "url": "https://postbox24.se",
  "telephone": "08-743 07 70",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kocksgatan 49",
    "addressLocality": "Stockholm",
    "postalCode": "116 24",
    "addressCountry": "SE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 59.3146,
    "longitude": 18.0831
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "12:00",
    "closes": "17:00"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#0a1628]">
        <JsonLd schema={organizationSchema} />
        <JsonLd schema={websiteSchema} />
        <JsonLd schema={localBusinessSchema} />
        
        {children}
      </body>
    </html>
  );
}