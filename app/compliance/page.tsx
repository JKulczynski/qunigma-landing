import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compliance | Qunigma, DORA, AI Act, CRA, NIS2',
  description: 'Pełna gotowość na DORA 2025, AI Act Annex III, CRA i NIS2. Qunigma jest zaprojektowane od fundamentu pod wymogi regulacyjne EU.',
};

const regulations = [
  {
    id: 'dora',
    name: 'DORA 2025',
    fullName: 'Digital Operational Resilience Act',
    status: 'active' as const,
    statusLabel: 'Obowiązuje od 17.01.2025',
    penalty: 'Do 2% rocznego obrotu',
    summary: 'DORA wymaga od instytucji finansowych udowodnienia operacyjnej odporności cyfrowej, w tym zarządzania ryzykiem ICT, testowania systemów i raportowania incydentów w ściśle określonych oknach czasowych.',
    articles: [
      { art: 'Art. 8', req: 'Inwentaryzacja aktywów ICT i NHI', status: '✓ Automatyczna, NHI Security' },
      { art: 'Art. 19', req: 'Raportowanie incydentów 4h / 24h / 72h', status: '✓ Pre-built reporting packs' },
      { art: 'Art. 25', req: 'Ryzyko stron trzecich i dostawców ICT', status: '✓ Third-party NHI monitoring' },
      { art: 'Art. 26', req: 'Testy penetracyjne TLPT', status: '✓ Honeypot LLM jako TLPT-ready' },
    ],
  },
  {
    id: 'ai-act',
    name: 'AI Act Annex III',
    fullName: 'EU Artificial Intelligence Act, High-Risk Systems',
    status: 'upcoming' as const,
    statusLabel: 'Deadline: 02.08.2026',
    penalty: 'Do 3% obrotu lub 15M EUR',
    summary: 'Systemy AI sklasyfikowane jako wysokiego ryzyka (m.in. scoring kredytowy, ocena ryzyka) muszą spełnić rygorystyczne wymogi cybersecurity, zarządzania jakością i zarządzania ryzykiem.',
    articles: [
      { art: 'Art. 9', req: 'System zarządzania ryzykiem AI', status: '✓ MTTAV risk scoring w czasie rzeczywistym' },
      { art: 'Art. 15', req: 'Dokładność, solidność i cybersecurity', status: '✓ Memory Guard SHA-256' },
      { art: 'Art. 17', req: 'System zarządzania jakością', status: '✓ Audit trail i logi nienaruszalne' },
      { art: 'Art. 72', req: 'Raportowanie incydentów do organu nadzoru', status: '✓ Zintegrowane z DORA Art. 19' },
    ],
  },
  {
    id: 'cra',
    name: 'CRA',
    fullName: 'Cyber Resilience Act',
    status: 'upcoming' as const,
    statusLabel: 'Deadline: 11.09.2026',
    penalty: 'Do 15M EUR lub 2.5% obrotu',
    summary: 'CRA wprowadza obowiązkowe wymogi cybersecurity dla produktów z elementami cyfrowymi, w tym obowiązek ujawniania luk w ciągu 24 godzin i zapewnienie aktualizacji bezpieczeństwa przez cały cykl życia produktu.',
    articles: [
      { art: 'Art. 14', req: 'Ujawnienie luk w ciągu 24 godzin', status: '✓ VDP (Vulnerability Disclosure Program)' },
      { art: 'Art. 13', req: 'Obowiązki producentów, bezpieczna konfiguracja', status: '✓ Secure-by-default architektura' },
      { art: 'Art. 10', req: 'Wymagania zasadnicze cybersecurity', status: '✓ MTTAV Engine covers full scope' },
      { art: 'Art. 23', req: 'Raportowanie aktywnie wykorzystywanych luk', status: '✓ Zintegrowane z ENISA i CERT' },
    ],
  },
  {
    id: 'nis2',
    name: 'NIS2',
    fullName: 'Network and Information Security Directive 2',
    status: 'active' as const,
    statusLabel: 'Obowiązuje od 17.10.2024',
    penalty: 'Do 10M EUR lub 2% obrotu globalnego',
    summary: 'NIS2 rozszerza zakres obowiązkowych środków cybersecurity na "ważne podmioty" w sektorze finansowym, w tym zarządzanie łańcuchem dostaw, bezpieczeństwo sieci i obowiązkowe raportowanie incydentów.',
    articles: [
      { art: 'Art. 21', req: 'Środki zarządzania ryzykiem bezpieczeństwa sieci', status: '✓ MTTAV real-time protection' },
      { art: 'Art. 23', req: 'Raportowanie incydentów (24h wstępne)', status: '✓ Pre-built NIS2 reporting packs' },
      { art: 'Art. 21(2)(d)', req: 'Bezpieczeństwo łańcucha dostaw', status: '✓ NHI Security, third-party monitoring' },
      { art: 'Art. 21(2)(j)', req: 'Bezpieczeństwo kadr i szkolenia', status: '✓ Security awareness moduł' },
    ],
  },
];

export default function CompliancePage() {
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
            <h1 className="text-[38px] md:text-[64px] font-medium leading-[1.1] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Regulacje się zmieniają.</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                Twoja odpowiedzialność, nie.
              </span>
            </h1>
            <p className="text-[17px] md:text-[19px] text-white/70 max-w-[680px] mx-auto leading-relaxed">
              DORA, AI Act, CRA i NIS2 tworzą nową rzeczywistość operacyjną dla europejskich banków. Qunigma jest zaprojektowane od fundamentu pod te wymogi.
            </p>
          </div>
        </section>

        {/* Deadline Timeline */}
        <section className="bg-[#0D0D0D] py-16 px-6 w-full border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <p className="text-[11px] text-white/40 font-bold tracking-widest uppercase text-center mb-10">Mapa regulacyjna</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'NIS2', date: 'Okt 2024', active: true },
                { name: 'DORA', date: 'Sty 2025', active: true },
                { name: 'AI Act Annex III', date: 'Sie 2026', active: false },
                { name: 'CRA', date: 'Wrz 2026', active: false },
              ].map((item) => (
                <div key={item.name} className={`rounded-xl p-5 border text-center ${item.active ? 'bg-emerald-950/40 border-emerald-700/40' : 'bg-amber-950/30 border-amber-700/30'}`}>
                  <div className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${item.active ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {item.active ? '● Aktywne' : '⚠ Nadchodzi'}
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
                  <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${i % 2 === 0 ? 'text-rose-500' : 'text-rose-400'}`}>Sankcje</div>
                  <div className={`text-[15px] font-bold ${i % 2 === 0 ? 'text-rose-700' : 'text-rose-300'}`}>{reg.penalty}</div>
                </div>
              </div>

              <p className={`text-[16px] leading-relaxed mb-10 max-w-3xl ${i % 2 === 0 ? 'text-gray-600' : 'text-white/60'}`}>
                {reg.summary}
              </p>

              <div className={`rounded-2xl overflow-hidden border ${i % 2 === 0 ? 'border-gray-200' : 'border-white/10'}`}>
                <div className={`grid grid-cols-3 text-[13px] font-bold uppercase tracking-wide px-6 py-3 border-b ${i % 2 === 0 ? 'bg-gray-100 border-gray-200 text-gray-600' : 'bg-white/5 border-white/10 text-white/40'}`}>
                  <span>Artykuł</span>
                  <span>Wymóg</span>
                  <span>Status Qunigma</span>
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
