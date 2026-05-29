import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | Qunigma, AI Security Analyses, Reports, Webinars',
  description: 'Knowledge base on AI-native threats, DORA and AI Act regulations, and active defense architecture for security leaders at EU organizations.',
  alternates: {
    canonical: 'https://qunigma.ai/en/resources',
    languages: {
      'en-US': 'https://qunigma.ai/en/resources',
      'pl-PL': 'https://qunigma.ai/wiedza',
    },
  },
};

const articles = [
  {
    category: 'Technical analysis',
    categoryColor: 'purple',
    title: 'OWASP ASI06: Anatomy of an All Green Fraud Attack',
    summary: 'Detailed analysis of the system log manipulation mechanism, from initial access to exfiltration. How MTTAV Engine detects inconsistencies at the bit level.',
    readTime: '12 min',
  },
  {
    category: 'Regulatory guide',
    categoryColor: 'blue',
    title: 'DORA Art. 19: Incident Reporting Guide',
    summary: 'Practical guide to DORA time windows, 4h, 24h, 72h. What data is required at each stage and how automation eliminates the risk of missing deadlines.',
    readTime: '8 min',
  },
  {
    category: 'Research report',
    categoryColor: 'red',
    title: 'NHI: 25 Minutes from Identity Takeover to Data Breach',
    summary: 'Analysis of 47 NHI incidents from 2023–2024 in European financial institutions. Attack vectors, exfiltration times, and gaps in existing protection systems.',
    readTime: '18 min',
  },
  {
    category: 'White paper',
    categoryColor: 'green',
    title: 'Memory Poisoning: A Long-Term Threat to AI Decisions',
    summary: 'The first comprehensive study of Memory Poisoning attacks on LLM systems in banking environments. Context degradation mechanism, detection, and defense.',
    readTime: '25 min',
  },
  {
    category: 'Checklist',
    categoryColor: 'amber',
    title: 'AI Act Annex III: Readiness Checklist for Tier-1 Banks',
    summary: '47-point readiness checklist for AI Act requirements for high-risk systems in the financial sector. Audit of Art. 9, 15 and 17 in one document.',
    readTime: '5 min',
  },
  {
    category: 'Analysis',
    categoryColor: 'purple',
    title: 'MTTAV vs MTTD: A Revolution in Security Metrics',
    summary: 'Why Mean Time to Detect is an outdated metric in the era of autonomous AI attacks. Introduction to MTTAV and implications for SOC architecture.',
    readTime: '10 min',
  },
];

const colorMap: Record<string, string> = {
  purple: 'bg-purple-100 text-purple-700',
  blue: 'bg-blue-100 text-blue-700',
  red: 'bg-rose-100 text-rose-700',
  green: 'bg-emerald-100 text-emerald-700',
  amber: 'bg-amber-100 text-amber-700',
};

export default function EnWiedzaPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-white/60 uppercase">Resources</span>
            </div>
            <h1 className="text-[38px] md:text-[64px] font-medium leading-[1.1] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Knowledge that</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                stays ahead of threats.
              </span>
            </h1>
            <p className="text-[17px] md:text-[19px] text-white/70 max-w-[680px] mx-auto leading-relaxed">
              Technical analyses, regulatory reports, and AI-native threat research, for CISOs, CTOs and Compliance Officers at EU organizations.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="bg-[#F6F2EA] py-24 px-6 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-14">
              <h2
                className="text-[28px] md:text-[36px] font-bold tracking-tight"
                style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                Latest resources
              </h2>
              <div className="flex flex-wrap gap-2">
                {['All', 'Analyses', 'Regulations', 'White papers'].map((f) => (
                  <button key={f} className={`px-4 py-1.5 rounded-full text-[13px] font-medium border transition-colors ${f === 'All' ? 'bg-[#6D28D9] text-white border-[#6D28D9]' : 'bg-white text-gray-600 border-gray-200 hover:border-purple-300'}`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <article key={article.title} className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col hover:border-purple-200 hover:shadow-lg transition-all duration-200 cursor-pointer group">
                  <span className={`self-start text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-5 ${colorMap[article.categoryColor]}`}>
                    {article.category}
                  </span>
                  <h3 className="text-[18px] font-bold text-gray-900 leading-tight mb-3 group-hover:text-purple-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed mb-6 flex-grow">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-[12px] text-gray-400 font-medium">{article.readTime} read</span>
                    <span className="text-purple-600 text-[13px] font-semibold group-hover:translate-x-1 transition-transform inline-block">Read →</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-[#171717] py-24 px-6 w-full">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase mb-4 block">Newsletter</span>
            <h2
              className="text-[28px] md:text-[40px] font-bold leading-tight tracking-tight mb-4 font-[family-name:var(--font-playfair)]"
              style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Get analyses before you need them.
            </h2>
            <p className="text-[16px] text-white/60 mb-10 leading-relaxed">
              Once a month: new AI-native attack vectors, regulatory changes and practical case studies. Zero spam.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/30 px-5 py-3 rounded-full text-[15px] focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="bg-[#6D28D9] text-white px-7 py-3 rounded-full text-[14px] font-semibold hover:bg-[#5B21B6] transition-colors shrink-0">
                Subscribe
              </button>
            </div>
            <p className="text-[11px] text-white/30 mt-4">No spam. Unsubscribe at any time.</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
