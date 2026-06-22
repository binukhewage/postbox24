import React from "react";
import Navbar from "../components/Navbar";
import FooterCTA from "../components/FooterCTA";
import ScrollReveal from "../components/ScrollReveal";
import Breadcrumbs from "../components/Breadcrumbs";
import AeoTrustSignals from "../components/AeoTrustSignals";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: "Hyresvillkor & Avtalsvillkor | Postbox24",
  description:
    "Allmänna hyresvillkor och avtalsregler för hyra av postbox hos Postbox24 AB. Läs om hyresperioder, uppsägning, depositioner och villkor.",
  alternates: {
    canonical: "https://postboxoffers.com/rental-conditions",
  },
};

export default function RentalConditionsPage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://postboxoffers.com/rental-conditions/#webpage",
    name: "Postbox24 Hyresvillkor",
    description:
      "Allmänna avtalsvillkor och hyresklausuler för postboxar hos Postbox24 AB.",
    publisher: {
      "@type": "Organization",
      name: "Postbox24",
    },
  };

  const breadcrumbItems = [
    { label: "Hyresvillkor", href: "/rental-conditions" },
  ];

  const takeaways = [
    "Hyresperioden förlängs automatiskt med samma varaktighet (6 eller 12 månader) om den inte sägs upp.",
    "Uppsägning måste ske skriftligen senast 2 månader före avtalstidens utgång.",
    "Depositionen på 250 kr återbetalas efter avslutad hyra och återlämnad nyckel.",
    "Postboxar får INTE användas för folkbokföring (folkbokföringsadress).",
    "Andrahandsuthyrning är strängt förbjuden och leder till omedelbar uppsägning.",
  ];

  const conditions = [
    {
      id: "section-1",
      title: "§ 1. Hyresperiod, förlängning & ångerrätt",
      content:
        "Hyresperioden på sex eller tolv månader börjar gälla när betalningen har mottagits. Hyresavtalet förlängs automatiskt med sex eller tolv månader i enlighet med den senast betalda perioden. Uppsägningstiden är två månader och uppsägning måste ske skriftligen via e-post eller brev. Hyresavgiften återbetalas inte efter att hyresavtalet har tecknats. Digitalt signerade hyresavtal omfattas av fjorton dagars ångerrätt mot en avgift på 250 kr. Depositioner återbetalas endast via elektronisk överföring till hyresgästen.",
    },
    {
      id: "section-2",
      title: "§ 2. Ansvar för postleverans & adressändring",
      content:
        "Postbox24 ansvarar inte för post som felsorterats av Posten, PostNord och CityMail eller förlorats av andra skäl, ej heller för ändringar gällande adressen. Hyresgästen ansvarar själv för adressändring. Genom att signera hyresavtalet godkänner kunden att Postbox24 får kasta eventuell kvarvarande post vid hyresavtalets utgång samt framtida post som kommer felaktigt på grund av att kunden inte har ändrat sin adress.",
    },
    {
      id: "section-3",
      title: "§ 3. Korrekt användning & förbud mot kriminell verksamhet",
      content:
        "Postboxen får endast användas för lagring av post. Postbox24 och dess franchisetagare har inget ansvar för postboxens innehåll. Hyresgästen har inte rätt att använda postboxen för andra ändamål. Överträdelse av detta resulterar i omedelbar uppsägning av avtalet. Misstanke om kriminell verksamhet, penningtvätt eller finansiering av terrorism leder till omedelbar uppsägning av avtalet, och kommer att polisanmälas samt rapporteras till Finanspolisen. Erlagd hyresavgift återbetalas ej.",
    },
    {
      id: "section-4",
      title: "§ 4. Villkor för återbetalning av deposition",
      content:
        "I priset ingår en deposition på 250 kr. Depositionen återbetalas endast när postboxen sägs upp skriftligen via e-post eller brev två månader innan avtalstidens utgång, en adressändring har registrerats bort från postboxen, samt eventuell nyckel har returnerats. Depositionen återbetalas endast via elektronisk överföring till hyresgästen.",
    },
    {
      id: "section-5",
      title: "§ 5. Riktlinjer för uppsägning av tjänst",
      content:
        "Uppsägning av tjänsten måste ske skriftligen via e-post eller brev senast två månader före hyresperiodens slut, annars förlängs hyresperioden automatiskt med sex eller tolv månader i enlighet med den senast betalda perioden. Vid uppsägning återbetalas depositionen endast om postboxen sägs upp skriftligen via e-post eller brev två månader före avtalets utgång, en adressändring har gjorts och eventuell nyckel returnerats. Genom att signera hyresavtalet godkänner kunden att Postbox24 får slänga kvarvarande post vid avtalets slut samt framtida post som kommer felaktigt på grund av utebliven adressändring.",
    },
    {
      id: "section-6",
      title: "§ 6. Fakturor, betalningar & betalkanaler",
      content:
        "En till två månader innan hyresperiodens slut skickar vi en faktura/påminnelse gällande nästa period. Nästa period ska vara betald en månad före den aktuella hyresperiodens utgång. Vi erbjuder för närvarande följande betalningsalternativ: SWISH (1230541359), kortbetalning på kontoret eller via vår hemsida, samt betalning till vårt Bankgiro: 5521-6121.",
    },
    {
      id: "section-7",
      title: "§ 7. Ansvar & undantag för egendomsförsäkring",
      content:
        "Postbox24 ansvarar inte för kundernas egendom i deras respektive postboxar i händelse av inbrott, brand eller vattenskada i Postbox24:s lokaler eller deras franchisetagares lokaler.",
    },
    {
      id: "section-8",
      title: "§ 8. Efterlevnad av folkbokföringslagen & böter",
      content:
        "Kunder som vill folkbokföra sig på en adress ansvarar själva för sin ansökan, ändring eller avslag på en ansökan enligt folkbokföringslagen (1991:481). Böter kan påföras av Skatteverket för den som inte följer ett föreläggande. Hyresavgiften återbetalas ej.",
    },
    {
      id: "section-9",
      title: "§ 9. c/o-post & förbud mot andrahandsuthyrning",
      content:
        "Post adresserad c/o till en hyresgäst kommer att returneras till avsändaren. All form av andrahandsuthyrning av postboxen leder till omedelbar uppsägning av hyresavtalet. Hyresavgiften återbetalas ej.",
    },
    {
      id: "section-10",
      title: "§ 10. Folkbokföring förbjuden",
      content:
        "Under inga omständigheter är det tillåtet att använda Postbox24:s postboxar som folkbokföringsadress. Vi rekommenderar dock att du registrerar postboxen som en särskild postadress hos Skatteverket. Postbox24 förbehåller sig rätten att omedelbart säga upp ett hyresavtal i de fall kunden har lämnat felaktiga personuppgifter. Hyresavgiften återbetalas ej.",
    },
    {
      id: "section-11",
      title: "§ 11. Digital postbox & avtal om eftersändningstjänst",
      content:
        "Digital postbox – I de fall kunden önskar eftersänder Postbox24 inkommande post till kunden via e-post eller vanlig post. För denna tjänst ersätter kunden Postbox24 enligt gällande prislista. Kunden bekräftar genom att beställa tjänsten att Postbox24 eller den de utser har rätt att öppna post för eftersändning till kunden via e-post eller vanlig post. Post som endast eftersänds via e-post sparas i 30 dagar. Bud som hämtar post för kundens räkning måste anmälas i förväg till kontoret och kunna uppvisa giltig legitimation.",
    },
    {
      id: "section-12",
      title: "§ 12. Policy kring hotfullt beteende & säkerhet",
      content:
        "Postbox24 förbehåller sig rätten att omedelbart säga upp ett hyresavtal utan ytterligare förklaring i de fall hyresgästen uppträder hotfullt eller på annat sätt skapar obehag för anställda och övrig personal. Alla hot polisanmäls. Hyresavgiften återbetalas ej.",
    },
    {
      id: "section-13",
      title: "§ 13. Godkännande av villkor",
      content:
        "Kunden godkänner dessa villkor genom att signera hyresavtalet med sin namnteckning eller digitala signatur.",
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
          Hyres<span className="italic text-[#05A7F4]">villkor</span>
        </h1>

        {/* AEO Trust Signals */}
        <AeoTrustSignals takeaways={takeaways} lastUpdated="20 juni 2026" />

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
