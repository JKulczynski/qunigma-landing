import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import { MTTAVCounter } from '@/components/MTTAVCounter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qunigma — AI-Native Active Cyber Defense for Tier-1 EU Banks',
  description: 'The first EU-sovereign active defense platform built specifically for AI-native threats — NHI attacks, Memory Poisoning, and All Green Fraud. MTTAV under 2ms.',
};

export default function EnHomePage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-32 px-6 w-full relative overflow-hidden min-h-[85vh] flex flex-col justify-center">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(109,40,217,0.12) 0%, transparent 70%)' }} />
          <div className="relative max-w-5xl mx-auto text-center w-full">
            <div className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[13px] font-medium tracking-[0.08em] text-white/70 uppercase">EU-Native Active Cyber Defense</span>
            </div>
            <h1 className="text-[38px] md:text-[72px] font-medium leading-[1.1] mb-6 tracking-tight">
              <span className="block text-[#F6F2EA]">Passive detection</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                is the past.
              </span>
            </h1>
            <p className="text-[17px] md:text-[19px] max-w-[680px] mx-auto mb-6 leading-relaxed text-white/80">
              In the era of autonomous AI attacks, you need active neutralization in under 2 milliseconds. Protecting Tier-1 banks from NHI attacks, Memory Poisoning, and All Green Fraud.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-[13px] font-medium tracking-[0.06em] mb-8 text-white/60">
              <span>MTTAV &lt;2ms</span>
              <span className="hidden md:block">|</span>
              <span>DORA / AI Act / NIS2</span>
              <span className="hidden md:block">|</span>
              <span>EU-sovereign — no CLOUD Act</span>
            </div>
            <div className="mb-8">
              <MTTAVCounter className="text-purple-400 text-[14px] font-mono tracking-wider font-semibold opacity-90" />
            </div>
            <button className="bg-[#F6F2EA] text-[#0A0E1A] px-8 py-3 rounded-full text-[14px] font-medium hover:bg-white transition-all shadow-[0_-1px_20px_rgba(246,242,234,0.2)]">
              DORA Gap Analysis
            </button>
          </div>
        </section>

        {/* Threats */}
        <section className="bg-[#F6F2EA] py-24 px-6 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Three Attack Vectors</span>
              <h2 className="text-[28px] md:text-[44px] font-bold leading-tight tracking-tight mb-6"
                style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Invisible to your SIEM.<br />Not to Qunigma.
              </h2>
              <p className="text-[17px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
                AI-native attacks operate below the detection threshold of traditional security systems. Average dwell time: 90+ days.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  tag: 'OWASP ASI06',
                  name: 'All Green Fraud',
                  desc: 'Malicious code systematically falsifies system logs, compliance reports, and SecOps dashboards. Every sensor shows "All Green" — while the attack has been in progress for weeks.',
                  stat: '90+ days',
                  statLabel: 'average dwell time',
                },
                {
                  tag: 'IBM X-Force 2025',
                  name: 'NHI Attacks',
                  desc: 'API keys, service accounts, OAuth tokens — machine identities are 80% of corporate cloud traffic. One compromised machine identity enables full data exfiltration in 25 minutes.',
                  stat: '80%',
                  statLabel: 'of cloud traffic is NHI',
                },
                {
                  tag: 'AI Act Art. 15',
                  name: 'Memory Poisoning',
                  desc: 'Advanced attack targeting the context memory of LLM models. Over weeks, the attacker gradually corrupts historical context — silently degrading transaction decisions and compliance recommendations.',
                  stat: 'Weeks',
                  statLabel: 'before detection',
                },
              ].map((item) => (
                <div key={item.name} className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-purple-200 hover:shadow-lg transition-all duration-200">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600 bg-purple-100 px-2.5 py-1 rounded-full mb-5 inline-block">{item.tag}</span>
                  <h3 className="text-[20px] font-bold text-gray-900 mb-3">{item.name}</h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-[28px] font-extrabold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #A855F7 100%)' }}>{item.stat}</div>
                    <div className="text-[12px] text-gray-500 font-medium uppercase tracking-wide">{item.statLabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform */}
        <section className="bg-[#171717] py-24 px-6 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase mb-4 block">Platform</span>
              <h2 className="text-[28px] md:text-[44px] font-bold leading-tight tracking-tight mb-6"
                style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Four defense layers.<br />One integrated architecture.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { tag: '01', name: 'MTTAV Engine', desc: 'Detects anomalies at packet level in real time and autonomously neutralizes threats in under 2ms.' },
                { tag: '02', name: 'Honeypot LLM', desc: 'A decoy language model built into client infrastructure. Attacking AI agents are automatically redirected to the trap.' },
                { tag: '03', name: 'Memory Guard', desc: 'Verifies the integrity of LLM context memory in real time using SHA-256. Blocks Memory Poisoning before it degrades decisions.' },
                { tag: '04', name: 'NHI Security', desc: 'Automatic inventory, classification and monitoring of all machine identities — API keys, service accounts, OAuth tokens.' },
              ].map((item) => (
                <div key={item.tag} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-purple-600/50 transition-colors">
                  <div className="text-[32px] font-black text-purple-800/30 leading-none mb-4">{item.tag}</div>
                  <h3 className="text-white font-bold text-[17px] mb-3">{item.name}</h3>
                  <p className="text-white/50 text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="bg-[#F6F2EA] py-24 px-6 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Regulatory Compliance</span>
              <h2 className="text-[28px] md:text-[44px] font-bold leading-tight tracking-tight mb-6"
                style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Built for EU regulation.<br />From day one.
              </h2>
              <p className="text-[17px] text-gray-600 max-w-2xl mx-auto">DORA, AI Act, CRA and NIS2 — Qunigma is designed from the ground up for these requirements.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'DORA', date: 'Active since Jan 2025', art: 'Art. 8, 19, 25, 26', active: true },
                { name: 'AI Act', date: 'Deadline Aug 2026', art: 'Annex III, Art. 15', active: false },
                { name: 'CRA', date: 'Deadline Sep 2026', art: 'Art. 10, 13, 14', active: false },
                { name: 'NIS2', date: 'Active since Oct 2024', art: 'Art. 21, 23', active: true },
              ].map((item) => (
                <div key={item.name} className={`rounded-2xl p-6 border text-center ${item.active ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}>
                  <div className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${item.active ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {item.active ? '● Active' : '⚠ Upcoming'}
                  </div>
                  <div className="text-gray-900 font-bold text-[20px] mb-1">{item.name}</div>
                  <div className="text-gray-500 text-[12px] mb-2">{item.date}</div>
                  <div className="text-purple-600 text-[11px] font-semibold">{item.art}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0D0D0D] py-24 px-6 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[28px] md:text-[48px] font-bold leading-tight tracking-tight mb-6"
              style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Start with a DORA Gap Analysis.
            </h2>
            <p className="text-[17px] text-white/60 mb-10 leading-relaxed max-w-xl mx-auto">
              Find out exactly which DORA articles your current infrastructure does not cover — and how Qunigma fixes it from day one.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#6D28D9] text-white px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-[#5B21B6] transition-colors">
                Free DORA Gap Analysis
              </button>
              <a href="mailto:piotr@qunigma.ai" className="text-white/70 border border-white/20 px-8 py-3.5 rounded-full text-[15px] font-medium hover:text-white hover:border-white/40 transition-colors">
                piotr@qunigma.ai
              </a>
            </div>
            <p className="text-[12px] text-white/30 mt-8">EU-sovereign infrastructure. GDPR compliant. No CLOUD Act.</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
