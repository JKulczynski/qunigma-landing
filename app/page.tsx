import { HeroSection } from '@/components/HeroSection';
import { ThreatsSection } from '@/components/ThreatsSection';
import { ComplianceSection } from '@/components/ComplianceSection';
import { ROISection } from '@/components/ROISection';
import { TeamSection } from '@/components/TeamSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { MTTAVVisualSection } from '@/components/MTTAVVisualSection';

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Qunigma",
    "applicationCategory": "SecurityApplication",
    "description": "AI-native active defense platform for Tier-1 EU banks. MTTAV under 2 milliseconds. Neutralizes NHI attacks, Memory Poisoning, and All Green Fraud.",
    "operatingSystem": "Cloud, On-premise",
    "featureList": ["MTTAV <2ms", "Honeypot LLM", "NHI Security", "Memory Guard", "DORA Compliance", "AI Act Art.15"],
    "areaServed": "EU",
    "audience": {
      "@type": "Audience",
      "audienceType": "CISO, CTO, CFO, Compliance Officer at Tier-1 EU banks"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
