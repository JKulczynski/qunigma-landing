import Link from 'next/link';
import { SubpageNavbar } from '@/components/SubpageNavbar';
import { ThreatsSection } from '@/components/ThreatsSection';
import { MTTAVVisualSection } from '@/components/MTTAVVisualSection';
import { ComplianceSection } from '@/components/ComplianceSection';
import { ROISection } from '@/components/ROISection';
import { TeamSection } from '@/components/TeamSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { MTTAVCounter } from '@/components/MTTAVCounter';
import ParticleBackground from '@/components/ParticleBackground';
import { StreamingVideo } from '@/components/StreamingVideo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qunigma | AI-Native Active Defense. MTTAV <2ms.',
  description: 'The first EU-sovereign active defense platform built specifically for AI-native threats: NHI attacks, Memory Poisoning, and All Green Fraud. MTTAV under 2ms.',
  alternates: {
    canonical: 'https://qunigma.ai/en',
    languages: {
      'en-US': 'https://qunigma.ai/en',
      'pl-PL': 'https://qunigma.ai',
    },
  },
};

export default function EnHomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is MTTAV and why does it matter?",
        "acceptedAnswer": { "@type": "Answer", "text": "MTTAV (Mean Time To Active Vectorization) is the time from threat detection to neutralization. Qunigma achieves MTTAV under 2ms, while traditional SIEM systems take hours or days. This is the difference between stopping an attack and dealing with its consequences." }
      },
      {
        "@type": "Question",
        "name": "What is All Green Fraud?",
        "acceptedAnswer": { "@type": "Answer", "text": "All Green Fraud (OWASP ASI06) is an attack where malicious code falsifies system logs and SOC dashboards, showing 'all clear' status while an attack has been ongoing for weeks or months. Average detection time without protection: 90+ days. Qunigma detects it in under 2ms." }
      },
      {
        "@type": "Question",
        "name": "What are Non-Human Identities (NHI) and why are they a threat?",
        "acceptedAnswer": { "@type": "Answer", "text": "NHIs are machine identities: API keys, service accounts, OAuth tokens. They comprise 80% of all corporate cloud traffic (IBM X-Force 2025). One compromised machine identity enables full data exfiltration in just 25 minutes. Qunigma NHI Security automatically inventories and monitors every NHI." }
      },
      {
        "@type": "Question",
        "name": "Is Qunigma DORA compliant?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Qunigma is designed from the ground up for DORA 2025. It covers Art. 8 (ICT and NHI inventory), Art. 19 (incident reporting 4h/24h/72h), Art. 25 (third-party risk), and Art. 26 (TLPT testing). Pre-built reporting packs automate all reporting obligations." }
      },
      {
        "@type": "Question",
        "name": "Does Qunigma work on-premise or in the cloud?",
        "acceptedAnswer": { "@type": "Answer", "text": "Qunigma works both on-premise and in the cloud. It is EU-sovereign, built and operated in the EU, not subject to the US CLOUD Act. Customer data never leaves EU jurisdiction." }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Qunigma and a traditional SIEM?",
        "acceptedAnswer": { "@type": "Answer", "text": "SIEM detects threats after the fact and requires manual response (hours to days). Qunigma acts actively: it detects anomalies at the packet level and autonomously neutralizes threats in under 2ms, before they reach the target system. Qunigma also natively handles AI-specific threats (Memory Poisoning, LLM hijacking) that SIEM cannot address." }
      },
      {
        "@type": "Question",
        "name": "Who is Qunigma for?",
        "acceptedAnswer": { "@type": "Answer", "text": "Qunigma is designed for CISOs, CTOs, and Compliance Officers at EU enterprises operating under DORA, AI Act, and NIS2, particularly financial institutions, insurers, banks, large corporations, and organizations processing high-risk data." }
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
      <SubpageNavbar transparent />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-32 px-6 w-full relative overflow-hidden min-h-[85vh] flex flex-col justify-center">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(109,40,217,0.12) 0%, transparent 70%)' }} />
          <ParticleBackground />
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <style>{`@keyframes pulseFallback{0%{opacity:.8}100%{opacity:1}}.animate-pulse-fallback{animation:pulseFallback 4s ease-in-out infinite alternate}`}</style>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.15)_0%,#000000_70%)] animate-pulse-fallback" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end mix-blend-screen opacity-100">
              <div className="absolute bottom-0 inset-x-0 h-[300px] z-20 bg-gradient-to-b from-transparent to-[#000000]" />
              <StreamingVideo
                src="https://customer-cbeadsgr09pnsezs.cloudflarestream.com/697945ca6b876878dba3b23fbd2f1561/manifest/video.m3u8"
                fallback="/video_fallback.mp4"
              />
            </div>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
            <div className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[13px] font-medium tracking-[0.08em] text-white/70 uppercase">EU-Native Active Cyber Defense</span>
            </div>
            <h1 className="text-[38px] md:text-[72px] font-medium leading-[1.25] mb-6 tracking-tight">
              <span className="block text-[#F6F2EA]">Passive detection</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                is the past.
              </span>
            </h1>
            <p className="text-[17px] md:text-[19px] max-w-[680px] mx-auto mb-6 leading-relaxed text-white/80">
              In the era of autonomous AI attacks, you need active neutralization in under 2 milliseconds. Detecting and neutralizing NHI attacks, Memory Poisoning, and All Green Fraud before they cause damage.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-[13px] font-medium tracking-[0.06em] mb-8 text-white/60">
              <span>MTTAV &lt;2ms</span>
              <span className="hidden md:block">|</span>
              <span>DORA / AI Act / NIS2</span>
              <span className="hidden md:block">|</span>
              <span>EU-sovereign, no CLOUD Act</span>
            </div>
            <div className="mb-8">
              <MTTAVCounter className="text-purple-400 text-[14px] font-mono tracking-wider font-semibold opacity-90" />
            </div>
            <Link href="/en/dora-gap-analysis" className="bg-[#F6F2EA] text-[#0A0E1A] px-8 py-3 rounded-full text-[14px] font-medium hover:bg-white transition-all shadow-[0_-1px_20px_rgba(246,242,234,0.2)] inline-block">
              DORA Gap Analysis
            </Link>
          </div>
        </section>

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
