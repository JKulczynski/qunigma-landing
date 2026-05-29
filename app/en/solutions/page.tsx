import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { AllGreenFraudVisual } from '@/components/AllGreenFraudVisual';
import { NHIGovernanceVisual } from '@/components/NHIGovernanceVisual';
import { LLMDefenseVisual } from '@/components/LLMDefenseVisual';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | Qunigma, All Green Fraud, NHI Governance, LLM Defense',
  description: 'Three AI-native attack vectors. Three solutions built for DORA and AI Act. Active neutralization in under 2ms.',
  alternates: {
    canonical: 'https://qunigma.ai/en/solutions',
    languages: {
      'en-US': 'https://qunigma.ai/en/solutions',
      'pl-PL': 'https://qunigma.ai/rozwiazania',
    },
  },
};

const solutions = [
  {
    id: 'fraud',
    tag: '01',
    name: 'All Green Fraud',
    tagline: 'Your SOC sees green. The attacker sees an open door.',
    description: 'Malicious code systematically falsifies system logs, compliance reports, and SecOps dashboards. Every sensor shows "All Green", while the attack has been in progress for weeks or months. Average detection time: 90+ days (OWASP ASI06).',
    solution: 'MTTAV Engine detects inconsistencies at the bit level, comparing the actual state of infrastructure with what the logs report. Forgery is detected and neutralized before it can influence operational decisions.',
    stats: [
      { value: '90+ days', label: 'Avg. dwell time without Qunigma' },
      { value: '<2ms', label: 'Neutralization with MTTAV' },
      { value: 'OWASP', label: 'ASI06 coverage' },
    ],
    regulation: 'DORA Art. 19, incident reporting',
    visual: { top: 'THREAT AGENT', middle: 'MTTAV ENGINE', bottom: 'FRAUD EXPOSED' },
  },
  {
    id: 'nhi',
    tag: '02',
    name: 'NHI Governance',
    tagline: '80% of cloud traffic is not humans. Do you know where their keys are?',
    description: 'API keys, service accounts, OAuth tokens, machine identities account for 80% of all corporate cloud traffic (IBM X-Force 2025). One compromised machine identity enables full data exfiltration in just 25 minutes.',
    solution: 'NHI Security automatically inventories, classifies and monitors every machine identity in client infrastructure. Unauthorized NHI creation, key rotation anomalies and suspicious access patterns are detected immediately, with no delay.',
    stats: [
      { value: '80%', label: 'Corporate traffic is NHI (IBM 2025)' },
      { value: '25 min', label: 'To exfiltration without protection' },
      { value: 'DORA', label: 'Art. 8, auto-inventory' },
    ],
    regulation: 'DORA Art. 8, ICT asset inventory',
    visual: { top: 'ROGUE NHI', middle: 'NHI SECURITY', bottom: 'GOVERNED' },
  },
  {
    id: 'llm',
    tag: '03',
    name: 'LLM Defense',
    tagline: 'The attacker does not attack the system. They attack the AI memory that manages it.',
    description: 'Memory Poisoning is an advanced attack vector targeting the context memory of LLM models. Over weeks, the attacker manipulates historical context, gradually and imperceptibly degrading transaction decisions, risk assessments, and compliance recommendations.',
    solution: 'Honeypot LLM intercepts and neutralizes attacks before they reach production models. Memory Guard verifies the integrity of every context using SHA-256 at every request level, with overhead under 1ms.',
    stats: [
      { value: 'SHA-256', label: 'Verification of every context' },
      { value: '<1ms', label: 'Overhead per request' },
      { value: 'AI Act', label: 'Art. 15, AI cybersecurity' },
    ],
    regulation: 'AI Act Annex III Art. 15, cybersecurity for high-risk AI systems',
    visual: { top: 'POISONED CONTEXT', middle: 'MEMORY GUARD', bottom: 'CONTEXT SECURED' },
  },
];

export default function EnRozwiazaniaPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-white/60 uppercase">Solutions</span>
            </div>
            <h1 className="text-[38px] md:text-[64px] font-medium leading-[1.1] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Three attack vectors.</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                Three ready answers.
              </span>
            </h1>
            <p className="text-[17px] md:text-[19px] text-white/70 max-w-[680px] mx-auto leading-relaxed">
              All Green Fraud, NHI Governance and LLM Defense, each solution designed for a specific AI-native attack vector and a specific regulatory article.
            </p>
          </div>
        </section>

        {/* Solutions */}
        {solutions.map((sol, i) => (
          <section
            key={sol.id}
            id={sol.id}
            className={`w-full py-24 px-6 ${i % 2 === 0 ? 'bg-[#F6F2EA]' : 'bg-[#171717]'}`}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Visual */}
              <div className={`bg-[#0D0D0D] border border-purple-800/40 rounded-2xl h-[320px] md:h-[400px] flex items-center justify-center relative overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(109,40,217,0.12) 0%, transparent 70%)' }} />
                {sol.id === 'fraud' && <AllGreenFraudVisual />}
                {sol.id === 'nhi' && <NHIGovernanceVisual />}
                {sol.id === 'llm' && <LLMDefenseVisual />}
              </div>

              {/* Text */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className={`text-[11px] font-bold tracking-[0.12em] uppercase mb-3 block ${i % 2 === 0 ? 'text-purple-600' : 'text-purple-400'}`}>
                  {sol.tag}, {sol.name}
                </span>
                <h2
                  className="text-[28px] md:text-[38px] font-bold leading-tight tracking-tight mb-5"
                  style={i % 2 === 0
                    ? { backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }
                    : { backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }
                  }
                >
                  {sol.tagline}
                </h2>

                <div className={`mb-5 p-5 rounded-xl border ${i % 2 === 0 ? 'bg-rose-50 border-rose-200' : 'bg-red-950/30 border-red-800/30'}`}>
                  <p className={`text-[12px] font-bold uppercase tracking-widest mb-2 ${i % 2 === 0 ? 'text-rose-600' : 'text-rose-400'}`}>Threat</p>
                  <p className={`text-[15px] leading-relaxed ${i % 2 === 0 ? 'text-gray-700' : 'text-white/70'}`}>{sol.description}</p>
                </div>

                <div className={`mb-8 p-5 rounded-xl border ${i % 2 === 0 ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-950/30 border-emerald-800/30'}`}>
                  <p className={`text-[12px] font-bold uppercase tracking-widest mb-2 ${i % 2 === 0 ? 'text-emerald-600' : 'text-emerald-400'}`}>Qunigma Solution</p>
                  <p className={`text-[15px] leading-relaxed ${i % 2 === 0 ? 'text-gray-700' : 'text-white/70'}`}>{sol.solution}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {sol.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-[20px] md:text-[24px] font-extrabold text-transparent bg-clip-text mb-1" style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #A855F7 100%)' }}>
                        {s.value}
                      </div>
                      <div className={`text-[11px] font-medium uppercase tracking-wide leading-tight ${i % 2 === 0 ? 'text-gray-500' : 'text-white/40'}`}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className={`inline-flex items-center gap-2 text-[12px] font-medium px-3 py-1.5 rounded-full ${i % 2 === 0 ? 'bg-purple-100 text-purple-700' : 'bg-purple-900/40 text-purple-300'}`}>
                  <span>⚖</span> {sol.regulation}
                </div>
              </div>

            </div>
          </section>
        ))}

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
