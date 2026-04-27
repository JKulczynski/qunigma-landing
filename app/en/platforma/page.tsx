import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform | Qunigma — MTTAV Engine, Honeypot LLM, Memory Guard, NHI Security',
  description: 'Four layers of active AI defense in one architecture. MTTAV Engine detects and neutralizes threats in under 2ms.',
};

const modules = [
  {
    id: 'mttav',
    tag: '01',
    name: 'MTTAV Engine',
    tagline: 'Mean Time To Active Vectorization — under 2ms.',
    description:
      'The platform core. Detects anomalies at packet level in real time and autonomously neutralizes threats before they reach the target system. No SIEM operates at this time scale.',
    stats: [
      { value: '<2ms', label: 'Neutralization time' },
      { value: '99.4%', label: 'MTTD reduction' },
      { value: '24/7', label: 'Autonomous protection' },
    ],
  },
  {
    id: 'honeypot',
    name: 'Honeypot LLM',
    tag: '02',
    tagline: 'A trap designed specifically for attacking AI.',
    description:
      'A decoy language model embedded in client infrastructure. Attacking AI agents are automatically directed to the trap, revealing attack methods and delivering threat intelligence.',
    stats: [
      { value: '100%', label: 'Attacker isolation' },
      { value: 'Zero', label: 'False positives' },
      { value: 'Live', label: 'Threat intelligence' },
    ],
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
  },
  {
    id: 'nhi',
    name: 'NHI Security',
    tag: '04',
    tagline: 'Governance for 80% of corporate cloud traffic.',
    description:
      'Automatic inventory, classification and monitoring of all machine identities — API keys, service accounts, OAuth tokens. Eliminates invisible attack vectors before they are exploited.',
    stats: [
      { value: 'Auto', label: 'NHI inventory' },
      { value: '25 min', label: 'Exfiltration time without protection' },
      { value: 'DORA', label: 'Art. 8 compliant' },
    ],
  },
];

export default function EnPlatformaPage() {
  return (
    <>
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
              MTTAV Engine, Honeypot LLM, Memory Guard and NHI Security operate as one integrated platform — sharing threat intelligence in real time.
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
                  <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">{mod.tag} — {mod.name}</span>
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

                {/* Visual placeholder */}
                <div className={`bg-[#0D0D0D] border border-purple-800/40 rounded-2xl h-[320px] md:h-[380px] flex items-center justify-center relative overflow-hidden ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(109,40,217,0.12) 0%, transparent 70%)' }} />
                  <div className="relative text-center">
                    <div className="text-[64px] font-black text-purple-800/30 leading-none mb-2">{mod.tag}</div>
                    <div className="text-white/40 text-[13px] font-medium tracking-widest uppercase">{mod.name}</div>
                    <div className="text-white/20 text-[11px] mt-2">[ Module visualization ]</div>
                  </div>
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
              The three-stage defense cycle operates autonomously — no human intervention, no delay.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '01', name: 'CAPTURE', desc: 'MTTAV Engine and Honeypot LLM detect anomalies at packet and AI traffic level. Every deviation is recorded and classified in real time.' },
                { step: '02', name: 'PUNISH', desc: 'The identified vector is automatically isolated. Suspicious NHI nodes and AI agents are cut off from the infrastructure — before they can cause damage.' },
                { step: '03', name: 'PREVENT', desc: 'Memory Guard and NHI Security harden the entire infrastructure against that attack vector. Knowledge from the incident strengthens global protection.' },
              ].map((item) => (
                <div key={item.step} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:border-purple-600/50 transition-colors">
                  <div className="text-[11px] text-purple-500 font-bold tracking-[0.12em] uppercase mb-3">{item.step}</div>
                  <h3 className="text-white font-bold text-[20px] mb-4">{item.name}</h3>
                  <p className="text-white/60 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
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
                    'REST API + Webhook — integration with any SIEM',
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
