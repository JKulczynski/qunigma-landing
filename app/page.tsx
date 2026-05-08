import { HeroSection } from '@/components/HeroSection';
import { ThreatsSection } from '@/components/ThreatsSection';
import { ComplianceSection } from '@/components/ComplianceSection';
import { ROISection } from '@/components/ROISection';
import { TeamSection } from '@/components/TeamSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { MTTAVVisualSection } from '@/components/MTTAVVisualSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qunigma | AI-Native Active Defense. MTTAV <2ms.',
  description: 'Qunigma neutralizuje ataki NHI, Memory Poisoning i All Green Fraud w czasie poniżej 2ms. DORA, AI Act i NIS2 aligned. EU-sovereign, brak CLOUD Act.',
  alternates: {
    canonical: 'https://qunigma.ai',
    languages: {
      'pl-PL': 'https://qunigma.ai',
      'en-US': 'https://qunigma.ai/en',
    },
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Co to jest MTTAV i dlaczego jest ważny?",
        "acceptedAnswer": { "@type": "Answer", "text": "MTTAV (Mean Time To Active Vectorization) to czas od wykrycia zagrożenia do jego neutralizacji. Qunigma osiąga MTTAV poniżej 2ms, podczas gdy tradycyjne systemy SIEM potrzebują godzin lub dni. To różnica między zatrzymaniem ataku a jego konsekwencjami." }
      },
      {
        "@type": "Question",
        "name": "Czym jest All Green Fraud?",
        "acceptedAnswer": { "@type": "Answer", "text": "All Green Fraud (OWASP ASI06) to atak, w którym złośliwy kod fałszuje logi systemowe i dashboardy SOC, pokazując stan 'wszystko OK' podczas gdy atak trwa od tygodni lub miesięcy. Średni czas wykrycia bez ochrony: 90+ dni. Qunigma wykrywa to w czasie poniżej 2ms." }
      },
      {
        "@type": "Question",
        "name": "Co to są NHI (Non-Human Identities) i dlaczego są zagrożeniem?",
        "acceptedAnswer": { "@type": "Answer", "text": "NHI to tożsamości maszynowe: klucze API, service accounts, tokeny OAuth. Stanowią 80% całego ruchu w chmurze korporacyjnej (IBM X-Force 2025). Jedna przejęta tożsamość maszynowa umożliwia pełną eksfiltrację danych w zaledwie 25 minut. Qunigma NHI Security automatycznie inwentaryzuje i monitoruje każdą NHI." }
      },
      {
        "@type": "Question",
        "name": "Czy Qunigma jest zgodne z DORA?",
        "acceptedAnswer": { "@type": "Answer", "text": "Tak. Qunigma jest zaprojektowane od fundamentu pod DORA 2025. Pokrywa Art. 8 (inwentaryzacja ICT i NHI), Art. 19 (raportowanie incydentów 4h/24h/72h), Art. 25 (ryzyko stron trzecich) i Art. 26 (testy TLPT). Pre-built reporting packs automatyzują obowiązki raportowe." }
      },
      {
        "@type": "Question",
        "name": "Czy Qunigma działa on-premise czy w chmurze?",
        "acceptedAnswer": { "@type": "Answer", "text": "Qunigma działa zarówno on-premise, jak i w chmurze. Jest EU-sovereign — zbudowane i operowane w UE, nie podlega US CLOUD Act. Dane klientów nie opuszczają jurysdykcji UE." }
      },
      {
        "@type": "Question",
        "name": "Jaka jest różnica między Qunigma a tradycyjnym SIEM?",
        "acceptedAnswer": { "@type": "Answer", "text": "SIEM wykrywa zagrożenia po fakcie i wymaga manualnej reakcji (godziny-dni). Qunigma działa aktywnie: wykrywa anomalie na poziomie pakietu i autonomicznie neutralizuje zagrożenie w czasie poniżej 2ms, zanim dotrze do systemu docelowego. Ponadto Qunigma natively obsługuje zagrożenia AI (Memory Poisoning, LLM hijacking), których SIEM nie obejmuje." }
      },
      {
        "@type": "Question",
        "name": "Dla kogo jest Qunigma?",
        "acceptedAnswer": { "@type": "Answer", "text": "Qunigma jest przeznaczone dla CISO, CTO i Compliance Officers w przedsiębiorstwach UE operujących pod DORA, AI Act i NIS2 — szczególnie instytucje finansowe, ubezpieczyciele, banki, duże korporacje i organizacje przetwarzające dane wysokiego ryzyka." }
      }
    ]
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Qunigma",
    "applicationCategory": "SecurityApplication",
    "description": "AI-native active defense platform. MTTAV under 2 milliseconds. Neutralizes NHI attacks, Memory Poisoning, and All Green Fraud.",
    "operatingSystem": "Cloud, On-premise",
    "featureList": ["MTTAV <2ms", "Honeypot AI Agents", "NHI Security", "Memory Guard", "DORA Compliance", "AI Act Art.15"],
    "areaServed": "EU",
    "audience": {
      "@type": "Audience",
      "audienceType": "CISO, CTO, CFO, Compliance Officer at EU enterprises"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="flex flex-col w-full">
        <HeroSection />
        <ThreatsSection />
        <MTTAVVisualSection />
        <ComplianceSection />
        <ROISection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
