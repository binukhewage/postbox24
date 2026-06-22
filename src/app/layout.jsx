import "./globals.css";
import JsonLd from "./components/JsonLd";

export const metadata = {
  metadataBase: new URL("https://postboxoffers.com"),
  title: {
    default: "Postbox24 | Virtuell postbox & företagsadress i Sverige",
    template: "%s | Postbox24",
  },
  description:
    "Få en representativ företagsadress, virtuell postbox och säker eftersändning i Stockholm eller Göteborg. Aktivering samma dag och säker digital skanning.",
  alternates: {
    canonical: "https://postboxoffers.com/",
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
    title: "Postbox24 | Virtuell postbox & företagsadress i Sverige",
    description:
      "Få en representativ företagsadress, virtuell postbox och säker eftersändning i Stockholm eller Göteborg. Aktivering samma dag och säker digital skanning.",
    url: "https://postboxoffers.com",
    siteName: "Postbox24",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Postbox24 | Virtuell postbox & företagsadress i Sverige",
    description:
      "Få en representativ företagsadress, virtuell postbox och säker eftersändning i Stockholm eller Göteborg.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://postboxoffers.com/#organization",
  name: "Postbox24",
  url: "https://postboxoffers.com",
  logo: "https://postboxoffers.com/logo.webp",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+46-8-743-07-70",
    contactType: "kundtjänst",
    availableLanguage: ["Swedish", "English"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://postboxoffers.com/#website",
  name: "Postbox24",
  url: "https://postboxoffers.com",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://postboxoffers.com/#localbusiness",
  name: "Postbox24",
  image: "https://postboxoffers.com/logo.webp",
  url: "https://postboxoffers.com",
  telephone: "08-743 07 70",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kocksgatan 49",
    addressLocality: "Stockholm",
    postalCode: "116 24",
    addressCountry: "SE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 59.3146,
    longitude: 18.0831,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "12:00",
    closes: "17:00",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#0a1628]">
        <JsonLd schema={organizationSchema} />
        <JsonLd schema={websiteSchema} />
        <JsonLd schema={localBusinessSchema} />

        {children}
      </body>
    </html>
  );
}
