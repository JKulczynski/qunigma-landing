import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { MTTAVEngineVisual } from '@/components/MTTAVEngineVisual';
import { HoneypotLLMVisual } from '@/components/HoneypotLLMVisual';
import { MemoryGuardVisual } from '@/components/MemoryGuardVisual';
import { NHISecurityVisual } from '@/components/NHISecurityVisual';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform | Qunigma, MTTAV Engine, Honeypot AI Agents, Memory Guard, NHI Security',
  description: 'Four layers of active AI defense in one architecture. MTTAV Engine detects and neutralizes threats in under 2ms.',
  alternates: {
    canonical: 'https://qunigma.ai/en/platform',
    languages: {
      'en-US': 'https://qunigma.ai/en/platform',
      'pl-PL': 'https://qunigma.ai/platforma',
    },
  },
};

const modules = [
  {
    id: 'mttav',
    tag: '01',
    name: 'MTTAV Engine',
    tagline: 'Mean Time To Active Vectorization, under 2ms.',
    description:
      'The platform core. Detects anomalies at packet level in real time and autonomously neutralizes threats before they reach the target system. No SIEM operates at this time scale.',
    stats: [
      { value: '<2ms', label: 'Neutralization time' },
      { value: '99.4%', label: 'MTTD reduction' },
      { value: '24/7', label: 'Autonomous protection' },
    ],
    visual: { top: 'THREAT AGENT', middle: 'MTTAV ENGINE', bottom: 'NEUTRALIZED' },
  },
  {
    id: 'honeypot',
    name: 'Honeypot LLM',
    tag: '02',
    tagline: 'A trap designed specifically for attacking AI.',
    description:
      'A decoy language model embedded in client infrastructure, deceiving AI agents, drawing them into a trap, revealing attack methods and delivering threat intelligence.',
    stats: [
      { value: '100%', label: 'Attacker isolation' },
      { value: 'Zero', label: 'False positives' },
      { value: 'Live', label: 'Threat intelligence' },
    ],
    visual: { top: 'ATTACKING AI', middle: 'HONEYPOT LLM', bottom: 'THREAT INTEL' },
  },
  {
    id: 'memory',
    name: 'Memory Guard',
    tagline: 'Protection for AI model context memory.',
    tag: '03',
    description:
      'Verifies the integrity of LLM system context memory in real time using SHA-256. Blocks Memory Poisoning attacks before they can degrade transaction decisions.',
    stats: [
      { value: 'SHA-256', label: 'Integrity verification' },
      { value: '<1ms', label: 'Overhead per request' },
      { value: 'AI Act', label: 'Art. 15 compliant' },
    ],
    visual: { top: 'POISONED CONTEXT', middle: 'MEMORY GUARD', bottom: 'VERIFIED SHA-256' },
  },
  {
    id: 'nhi',
    name: 'NHI Security',
    tag: '04',
    tagline: 'Governance for 80% of corporate cloud traffic.',
    description:
      'Automatic inventory, classification and monitoring of all machine identities, API keys, service accounts, OAuth tokens. Eliminates invisible attack vectors before they are exploited.',
    stats: [
      { value: 'Auto', label: 'NHI inventory' },
      { value: '25 min', label: 'Exfiltration time without protection' },
      { value: 'DORA', label: 'Art. 8 compliant' },
    ],
    visual: { top: 'ROGUE NHI', middle: 'NHI SECURITY', bottom: 'GOVERNED' },
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is MTTAV Engine and how does it work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MTTAV Engine (Mean Time To Active Vectorization) is the core of the Qunigma platform. It detects anomalies at the packet level in real time and autonomously neutralizes threats in under 2ms, before they reach the target system. It reduces MTTD by 99.4% and operates 24/7 without human intervention."
      }
    },
    {
      "@type": "Question",
      "name": "How does Honeypot LLM work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Honeypot LLM is a decoy language model embedded in client infrastructure. It lures attacking AI agents and draws them into a trap, isolating them with 100% effectiveness and zero false positives. It simultaneously collects live threat intelligence about attack methods and vectors."
      }
    },
    {
      "@type": "Question",
      "name": "What does Memory Guard protect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Memory Guard protects the context memory of LLM systems against Memory Poisoning attacks. It verifies memory integrity in real time using SHA-256, with an overhead of under 1ms per request. The module is compliant with AI Act Art. 15."
      }
    },
    {
      "@type": "Question",
      "name": "What is NHI Security and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NHI Security automatically inventories, classifies and monitors all machine identities: API keys, service accounts, OAuth tokens. Without NHI protection, attackers can exfiltrate data in as little as 25 minutes. The module is compliant with DORA Art. 8."
      }
    },
    {
      "@type": "Question",
      "name": "How fast does Qunigma detect and neutralize threats?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The MTTAV Engine neutralizes threats in under 2ms from anomaly detection — a time window in which no traditional SIEM or SOC can respond. The platform operates autonomously and reduces Mean Time To Detect by 99.4% compared to conventional solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Qunigma platform compliant with DORA and AI Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Qunigma is compliant with DORA Art. 8 (NHI Security), DORA Art. 19 (ready reporting packs from day 1), and AI Act Art. 15 (Memory Guard). It can be deployed on-premise or in an EU-sovereign cloud, eliminating CLOUD Act exposure."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to deploy the Qunigma platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Full deployment takes up to 8 business days. Day 1: API connection and NHI inventory. Day 2: Honeypot LLM calibration. Days 3-7: Memory Guard baseline and testing. Day 8 onwards: full active protection. Integration via standard REST API requires no replacement of SIEM, SOC or core banking systems."
      }
    }
  ]
};

export default function EnPlatformaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Page Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-white/60 uppercase">Architecture</span>
            </div>
            <h1 className="text-[38px] md:text-[64px] font-medium leading-[1.1] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Four layers of active defense,</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                one architecture.
              </span>
            </h1>
            <p className="text-[17px] md:text-[19px] text-white/70 max-w-[680px] mx-auto leading-relaxed">
              MTTAV Engine, Honeypot LLM, Memory Guard and NHI Security operate as one integrated platform, sharing threat intelligence in real time.
            </p>
          </div>
        </section>

        {/* Modules */}
        <section className="bg-[#F6F2EA] py-24 px-6 w-full">
          <div className="max-w-7xl mx-auto flex flex-col gap-32">
            {modules.map((mod, i) => (
              <div
                key={mod.id}
                id={mod.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Text */}
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">{mod.tag}, {mod.name}</span>
                  <h2
                    className="text-[32px] md:text-[40px] font-bold leading-tight tracking-tight mb-4"
                    style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                  >
                    {mod.tagline}
                  </h2>
                  <p className="text-[17px] text-gray-600 leading-relaxed mb-10">
                    {mod.description}
                  </p>
                  <div className="grid grid-cols-3 gap-6">
                    {mod.stats.map((s) => (
                      <div key={s.label}>
                        <div className="text-[26px] font-extrabold text-transparent bg-clip-text mb-1" style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #A855F7 100%)' }}>
                          {s.value}
                        </div>
                        <div className="text-[12px] text-gray-500 font-medium uppercase tracking-wide leading-tight">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`bg-[#0D0D0D] border border-purple-800/40 rounded-2xl h-[320px] md:h-[380px] flex items-center justify-center relative overflow-hidden ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(109,40,217,0.12) 0%, transparent 70%)' }} />
                  {mod.id === 'mttav' && <MTTAVEngineVisual />}
                  {mod.id === 'honeypot' && <HoneypotLLMVisual />}
                  {mod.id === 'memory' && <MemoryGuardVisual />}
                  {mod.id === 'nhi' && <NHISecurityVisual />}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-[#171717] py-24 px-6 w-full">
          <div className="max-w-5xl mx-auto text-center">
            <span className="text-[11px] text-purple-500 font-bold tracking-[0.12em] uppercase mb-4 block">How it works</span>
            <h2
              className="text-[32px] md:text-[48px] font-bold leading-tight tracking-tight mb-6 font-[family-name:var(--font-playfair)]"
              style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              From detection to neutralization in one cycle.
            </h2>
            <p className="text-[17px] text-white/60 max-w-2xl mx-auto mb-20 leading-relaxed">
              The three-stage defense cycle operates autonomously, no human intervention, no delay.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '01', name: 'CAPTURE', desc: 'MTTAV Engine and Honeypot AI agents detect anomalies at packet and AI traffic level. Every deviation is recorded and classified in real time.' },
                { step: '02', name: 'PUNISH', desc: 'The identified vector is automatically isolated. Suspicious NHI nodes and AI agents are cut off from the infrastructure, before they can cause damage.' },
                { step: '03', name: 'PREVENT', desc: 'Memory Guard and NHI Security harden the entire infrastructure against that attack vector. Knowledge from the incident strengthens global protection.' },
              ].map((item) => (
                <div key={item.step} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:border-purple-600/50 transition-colors">
                  <div className="text-[11px] text-purple-500 font-bold tracking-[0.12em] uppercase mb-3">{item.step}</div>
                  <h3 className="text-white font-bold text-[20px] mb-4">{item.name}</h3>
                  <p className="text-white/60 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 max-w-4xl mx-auto flex flex-col gap-6">
              <p className="text-white/70 text-[16px] leading-relaxed">
                Powered by advanced anomaly detection, our platform identifies novel, zero-day threats that traditional, signature-based security tools miss. While competitors rely heavily on established threat registries and conventional frameworks such as the FS-ISAC Adversarial AI Framework or FS AI RMF, Qunigma's technology goes further. We detect highly sophisticated and previously unseen attacks by recognizing subtle behavioral deviations, securing your environment against stealthy threats without requiring prior exposure or training data.
              </p>
              <p className="text-white/70 text-[16px] leading-relaxed">
                Our AI RED Team Engagements are designed to expose critical blind spots that fall outside of standard security frameworks. Qunigma executes highly customized, client-specific attack simulations to test the true limits of your defenses. As the exploitation of AI agents rapidly emerges as one of the fastest-growing threat vectors in the industry, we are proud to be pioneers in this space, proactively securing the advanced vulnerabilities that others overlook.
              </p>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="bg-[#F6F2EA] py-24 px-6 w-full">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Integration</span>
                <h2
                  className="text-[32px] md:text-[42px] font-bold leading-tight tracking-tight mb-6"
                  style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                  Deploy in 48 hours. Zero disruption.
                </h2>
                <p className="text-[17px] text-gray-600 leading-relaxed mb-10">
                  The platform integrates with existing banking infrastructure through standard APIs. No need to replace SIEM, SOC or core banking systems.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    'REST API + Webhook, integration with any SIEM',
                    'On-premise or EU-sovereign cloud (no CLOUD Act)',
                    'Pre-built connectors: Splunk, Microsoft Sentinel, IBM QRadar',
                    'DORA Art. 19 reporting packs ready from day 1',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold text-[16px] mt-0.5 shrink-0">✓</span>
                      <span className="text-gray-700 text-[16px] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0D0D0D] border border-purple-800/40 rounded-2xl p-10 flex flex-col gap-6">
                <div className="text-[11px] text-purple-500 font-bold tracking-[0.12em] uppercase">Deployment timeline</div>
                {[
                  { day: 'Day 1', label: 'API connect + NHI inventory' },
                  { day: 'Day 2', label: 'Honeypot LLM calibration' },
                  { day: 'Day 3–7', label: 'Memory Guard baseline + testing' },
                  { day: 'Day 8+', label: 'Full active protection' },
                ].map((item) => (
                  <div key={item.day} className="flex items-center gap-4">
                    <div className="w-20 shrink-0 text-[12px] font-bold text-purple-400 uppercase tracking-wide">{item.day}</div>
                    <div className="flex-1 h-px bg-white/10" />
                    <div className="text-white/70 text-[14px] text-right">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
