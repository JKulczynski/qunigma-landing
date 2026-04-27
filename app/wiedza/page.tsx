import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wiedza | Qunigma — Analizy, Raporty, Webinaria AI Security',
  description: 'Baza wiedzy o AI-native threats, regulacjach DORA i AI Act oraz architekturze active defense dla liderów bezpieczeństwa w europejskich bankach Tier-1.',
};

const articles = [
  {
    category: 'Analiza techniczna',
    categoryColor: 'purple',
    title: 'OWASP ASI06: Anatomia ataku All Green Fraud',
    summary: 'Szczegółowa analiza mechanizmu manipulacji logami systemowymi — od initial access po eksfiltrację. Jak MTTAV Engine wykrywa niespójności na poziomie bitowym.',
    readTime: '12 min',
  },
  {
    category: 'Poradnik regulacyjny',
    categoryColor: 'blue',
    title: 'DORA Art. 19: Przewodnik po raportowaniu incydentów',
    summary: 'Praktyczny przewodnik po oknach czasowych DORA — 4h, 24h, 72h. Jakie dane są wymagane na każdym etapie i jak automatyzacja eliminuje ryzyko przekroczenia deadline.',
    readTime: '8 min',
  },
  {
    category: 'Raport badawczy',
    categoryColor: 'red',
    title: 'NHI: 25 minut od przejęcia tożsamości do wycieku danych',
    summary: 'Analiza 47 incydentów NHI z lat 2023–2024 w europejskich instytucjach finansowych. Wektory ataku, czasy eksfiltracji i luki w istniejących systemach ochrony.',
    readTime: '18 min',
  },
  {
    category: 'White paper',
    categoryColor: 'green',
    title: 'Memory Poisoning: Długoterminowe zagrożenie dla decyzji AI',
    summary: 'Pierwsze kompleksowe opracowanie ataku Memory Poisoning na systemy LLM w środowiskach bankowych. Mechanizm degradacji kontekstu, wykrywanie i obrona.',
    readTime: '25 min',
  },
  {
    category: 'Checklist',
    categoryColor: 'amber',
    title: 'AI Act Annex III: Checklist gotowości dla banków Tier-1',
    summary: '47-punktowy checklist gotowości na wymogi AI Act dla systemów wysokiego ryzyka w sektorze finansowym. Audyt Art. 9, 15 i 17 w jednym dokumencie.',
    readTime: '5 min',
  },
  {
    category: 'Analiza',
    categoryColor: 'purple',
    title: 'MTTAV vs MTTD: Rewolucja w metrykach bezpieczeństwa',
    summary: 'Dlaczego Mean Time to Detect jest przestarzałą metryką w erze autonomicznych ataków AI. Wprowadzenie do MTTAV i implikacje dla architektury SOC.',
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

export default function WiedzaPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-white/60 uppercase">Wiedza</span>
            </div>
            <h1 className="text-[38px] md:text-[64px] font-medium leading-[1.1] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Wiedza, która</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                wyprzedza zagrożenia.
              </span>
            </h1>
            <p className="text-[17px] md:text-[19px] text-white/70 max-w-[680px] mx-auto leading-relaxed">
              Analizy techniczne, raporty regulacyjne i badania AI-native threats — dla CISO, CTO i Compliance Officers europejskich banków Tier-1.
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
                Najnowsze materiały
              </h2>
              <div className="flex flex-wrap gap-2">
                {['Wszystkie', 'Analizy', 'Regulacje', 'White papers'].map((f) => (
                  <button key={f} className={`px-4 py-1.5 rounded-full text-[13px] font-medium border transition-colors ${f === 'Wszystkie' ? 'bg-[#6D28D9] text-white border-[#6D28D9]' : 'bg-white text-gray-600 border-gray-200 hover:border-purple-300'}`}>
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
                    <span className="text-[12px] text-gray-400 font-medium">{article.readTime} czytania</span>
                    <span className="text-purple-600 text-[13px] font-semibold group-hover:translate-x-1 transition-transform inline-block">Czytaj →</span>
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
              Dostawaj analizy zanim będą potrzebne.
            </h2>
            <p className="text-[16px] text-white/60 mb-10 leading-relaxed">
              Raz w miesiącu: nowe wektory AI-native attacks, zmiany regulacyjne i praktyczne case studies. Zero spamu.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="twoj@email.com"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/30 px-5 py-3 rounded-full text-[15px] focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="bg-[#6D28D9] text-white px-7 py-3 rounded-full text-[14px] font-semibold hover:bg-[#5B21B6] transition-colors shrink-0">
                Subskrybuj
              </button>
            </div>
            <p className="text-[11px] text-white/30 mt-4">Brak spamu. Wypisz się w każdej chwili.</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
