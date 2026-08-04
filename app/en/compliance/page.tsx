import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compliance | Qunigma, DORA, AI Act, CRA, NIS2',
  description: 'Full readiness for DORA 2025, AI Act Annex III, CRA and NIS2. Qunigma is designed from the ground up for EU regulatory requirements.',
  alternates: {
    canonical: 'https://qunigma.ai/en/compliance',
    languages: {
      'en-US': 'https://qunigma.ai/en/compliance',
      'pl-PL': 'https://qunigma.ai/compliance',
    },
  },
};

const regulations = [
  {
    id: 'dora',
    name: 'DORA 2025',
    fullName: 'Digital Operational Resilience Act',
    status: 'active' as const,
    statusLabel: 'Active since 17.01.2025',
    penalty: 'Up to 2% of annual turnover',
    summary: 'DORA requires financial institutions to demonstrate digital operational resilience, including ICT risk management, system testing, and incident reporting within strictly defined time windows.',
    articles: [
      { art: 'Art. 8', req: 'ICT and NHI asset inventory', status: '✓ Automatic, NHI Security' },
      { art: 'Art. 19', req: 'Incident reporting 4h / 24h / 72h', status: '✓ Pre-built reporting packs' },
      { art: 'Art. 25', req: 'Third-party and ICT provider risk', status: '✓ Third-party NHI monitoring' },
      { art: 'Art. 26', req: 'TLPT penetration testing', status: '✓ Honeypot LLM as TLPT-ready' },
    ],
  },
  {
    id: 'ai-act',
    name: 'AI Act Annex III',
    fullName: 'EU Artificial Intelligence Act, High-Risk Systems',
    status: 'upcoming' as const,
    statusLabel: 'Requirements from 02.12.2027',
    penalty: 'Up to 3% of turnover or €15M',
    summary: 'AI systems classified as high-risk (including credit scoring, risk assessment) must meet rigorous cybersecurity, quality management, and risk management requirements. Deadline pushed back by the Digital Omnibus package (Regulation (EU) 2026/1744, in force since 27.07.2026); AI Act Art. 50 transparency obligations still apply from 02.08.2026.',
    articles: [
      { art: 'Art. 9', req: 'AI risk management system', status: '✓ MTTAV real-time risk scoring' },
      { art: 'Art. 15', req: 'Accuracy, robustness and cybersecurity', status: '✓ Memory Guard SHA-256' },
      { art: 'Art. 17', req: 'Quality management system', status: '✓ Immutable audit trail and logs' },
      { art: 'Art. 72', req: 'Incident reporting to supervisory authority', status: '✓ Integrated with DORA Art. 19' },
    ],
  },
  {
    id: 'cra',
    name: 'CRA',
    fullName: 'Cyber Resilience Act',
    status: 'upcoming' as const,
    statusLabel: 'Deadline: 11.09.2026',
    penalty: 'Up to €15M or 2.5% of turnover',
    summary: 'CRA introduces mandatory cybersecurity requirements for products with digital elements, including the obligation to disclose vulnerabilities within 24 hours and ensure security updates throughout the product lifecycle.',
    articles: [
      { art: 'Art. 14', req: 'Vulnerability disclosure within 24 hours', status: '✓ VDP (Vulnerability Disclosure Program)' },
      { art: 'Art. 13', req: 'Manufacturer obligations, secure configuration', status: '✓ Secure-by-default architecture' },
      { art: 'Art. 10', req: 'Essential cybersecurity requirements', status: '✓ MTTAV Engine covers full scope' },
      { art: 'Art. 23', req: 'Reporting actively exploited vulnerabilities', status: '✓ Integrated with ENISA and CERT' },
    ],
  },
  {
    id: 'nis2',
    name: 'NIS2',
    fullName: 'Network and Information Security Directive 2',
    status: 'active' as const,
    statusLabel: 'Active since 17.10.2024',
    penalty: 'Up to €10M or 2% of global turnover',
    summary: 'NIS2 extends the scope of mandatory cybersecurity measures to "important entities" in the financial sector, including supply chain management, network security, and mandatory incident reporting.',
    articles: [
      { art: 'Art. 21', req: 'Network security risk management measures', status: '✓ MTTAV real-time protection' },
      { art: 'Art. 23', req: 'Incident reporting (24h preliminary)', status: '✓ Pre-built NIS2 reporting packs' },
      { art: 'Art. 21(2)(d)', req: 'Supply chain security', status: '✓ NHI Security, third-party monitoring' },
      { art: 'Art. 21(2)(j)', req: 'HR security and training', status: '✓ Security awareness module' },
    ],
  },
];

export default function EnCompliancePage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-white/60 uppercase">Compliance</span>
            </div>
            <h1 className="text-[38px] md:text-[64px] font-medium leading-[1.25] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Regulations change.</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                Your responsibility does not.
              </span>
            </h1>
            <p className="text-[17px] md:text-[19px] text-white/70 max-w-[680px] mx-auto leading-relaxed">
              DORA, AI Act, CRA and NIS2 create a new operational reality for European banks. Qunigma is designed from the ground up for these requirements.
            </p>
          </div>
        </section>

        {/* Deadline Timeline */}
        <section className="bg-[#0D0D0D] py-16 px-6 w-full border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <p className="text-[11px] text-white/40 font-bold tracking-widest uppercase text-center mb-10">Regulatory map</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'NIS2', date: 'Oct 2024', active: true },
                { name: 'DORA', date: 'Jan 2025', active: true },
                { name: 'AI Act Annex III', date: 'Dec 2027', active: false },
                { name: 'CRA', date: 'Sep 2026', active: false },
              ].map((item) => (
                <div key={item.name} className={`rounded-xl p-5 border text-center ${item.active ? 'bg-emerald-950/40 border-emerald-700/40' : 'bg-amber-950/30 border-amber-700/30'}`}>
                  <div className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${item.active ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {item.active ? '● Active' : '⚠ Upcoming'}
                  </div>
                  <div className="text-white font-bold text-[17px] mb-1">{item.name}</div>
                  <div className="text-white/40 text-[13px]">{item.date}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulation Deep Dives */}
        {regulations.map((reg, i) => (
          <section
            key={reg.id}
            id={reg.id}
            className={`w-full py-20 px-6 ${i % 2 === 0 ? 'bg-[#F6F2EA]' : 'bg-[#171717]'}`}
          >
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${reg.status === 'active' ? (i % 2 === 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-emerald-900/40 text-emerald-400') : (i % 2 === 0 ? 'bg-amber-100 text-amber-700' : 'bg-amber-900/40 text-amber-400')}`}>
                      {reg.statusLabel}
                    </span>
                  </div>
                  <h2
                    className="text-[28px] md:text-[40px] font-bold leading-tight tracking-tight mb-2"
                    style={i % 2 === 0
                      ? { backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }
                      : { backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }
                    }
                  >
                    {reg.name}
                  </h2>
                  <p className={`text-[14px] font-medium ${i % 2 === 0 ? 'text-gray-500' : 'text-white/40'}`}>{reg.fullName}</p>
                </div>
                <div className={`shrink-0 px-4 py-2 rounded-xl border text-center ${i % 2 === 0 ? 'bg-rose-50 border-rose-200' : 'bg-red-950/30 border-red-800/30'}`}>
                  <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${i % 2 === 0 ? 'text-rose-500' : 'text-rose-400'}`}>Penalties</div>
                  <div className={`text-[15px] font-bold ${i % 2 === 0 ? 'text-rose-700' : 'text-rose-300'}`}>{reg.penalty}</div>
                </div>
              </div>

              <p className={`text-[16px] leading-relaxed mb-10 max-w-3xl ${i % 2 === 0 ? 'text-gray-600' : 'text-white/60'}`}>
                {reg.summary}
              </p>

              <div className={`rounded-2xl overflow-hidden border ${i % 2 === 0 ? 'border-gray-200' : 'border-white/10'}`}>
                <div className={`grid grid-cols-3 text-[13px] font-bold uppercase tracking-wide px-6 py-3 border-b ${i % 2 === 0 ? 'bg-gray-100 border-gray-200 text-gray-600' : 'bg-white/5 border-white/10 text-white/40'}`}>
                  <span>Article</span>
                  <span>Requirement</span>
                  <span>Qunigma Status</span>
                </div>
                {reg.articles.map((a) => (
                  <div key={a.art} className={`grid grid-cols-3 px-6 py-4 border-b last:border-0 text-[14px] ${i % 2 === 0 ? 'border-gray-100 hover:bg-gray-50' : 'border-white/5 hover:bg-white/5'}`}>
                    <span className={`font-bold ${i % 2 === 0 ? 'text-gray-900' : 'text-white'}`}>{a.art}</span>
                    <span className={i % 2 === 0 ? 'text-gray-600' : 'text-white/60'}>{a.req}</span>
                    <span className="text-emerald-500 font-medium">{a.status}</span>
                  </div>
                ))}
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
