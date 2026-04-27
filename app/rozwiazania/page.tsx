import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rozwiązania | Qunigma — All Green Fraud, NHI Governance, LLM Defense',
  description: 'Trzy wektory AI-native attacks. Trzy rozwiązania zbudowane pod DORA i AI Act. Aktywna neutralizacja w czasie poniżej 2ms.',
};

const solutions = [
  {
    id: 'fraud',
    tag: '01',
    name: 'All Green Fraud',
    tagline: 'Twój SOC widzi zieleń. Atakujący widzi otwarte drzwi.',
    description: 'Złośliwy kod systematycznie fałszuje logi systemowe, reporty compliance i dashboardy SecOps. Każdy sensor pokazuje "All Green" — podczas gdy atak jest w toku od tygodni lub miesięcy. Średni czas wykrycia: 90+ dni (OWASP ASI06).',
    solution: 'MTTAV Engine wykrywa niespójności na poziomie bitowym — porównując stan rzeczywisty infrastruktury z tym, co raportują logi. Fałszerstwo jest wykrywane i neutralizowane zanim zdąży wpłynąć na decyzje operacyjne.',
    stats: [
      { value: '90+ dni', label: 'Średni czas wykrycia bez Qunigma' },
      { value: '<2ms', label: 'Czas neutralizacji z MTTAV' },
      { value: 'OWASP', label: 'ASI06 coverage' },
    ],
    regulation: 'DORA Art. 19 — raportowanie incydentów',
  },
  {
    id: 'nhi',
    tag: '02',
    name: 'NHI Governance',
    tagline: '80% ruchu w chmurze to nie ludzie. Czy wiesz gdzie są ich klucze?',
    description: 'API keys, service accounts, tokeny OAuth — tożsamości maszynowe stanowią 80% całego ruchu w chmurze korporacyjnej (IBM X-Force 2025). Jedna przejęta tożsamość maszynowa umożliwia pełną eksfiltrację danych w zaledwie 25 minut.',
    solution: 'NHI Security automatycznie inwentaryzuje, klasyfikuje i monitoruje każdą tożsamość maszynową w infrastrukturze klienta. Nieautoryzowane tworzenie NHI, anomalie rotacji kluczy i podejrzane wzorce dostępu są wykrywane natychmiast — bez opóźnienia.',
    stats: [
      { value: '80%', label: 'Ruchu korporacyjnego to NHI (IBM 2025)' },
      { value: '25 min', label: 'Do eksfiltracji bez ochrony' },
      { value: 'DORA', label: 'Art. 8 — auto-inwentaryzacja' },
    ],
    regulation: 'DORA Art. 8 — inwentaryzacja aktywów ICT',
  },
  {
    id: 'llm',
    tag: '03',
    name: 'LLM Defense',
    tagline: 'Atakujący nie atakuje systemu. Atakuje pamięć AI, która nim zarządza.',
    description: 'Memory Poisoning to zaawansowany wektor ataku celujący w pamięć kontekstową modeli LLM. Przez tygodnie atakujący manipuluje kontekstem historycznym — stopniowo i niezauważalnie degradując decyzje transakcyjne, oceny ryzyka i rekomendacje compliance.',
    solution: 'Honeypot LLM przechwytuje i neutralizuje ataki przed dotarciem do produkcyjnych modeli. Memory Guard weryfikuje integralność każdego kontekstu za pomocą SHA-256 na poziomie każdego requestu — z overheadem poniżej 1ms.',
    stats: [
      { value: 'SHA-256', label: 'Weryfikacja każdego kontekstu' },
      { value: '<1ms', label: 'Overhead na request' },
      { value: 'AI Act', label: 'Art. 15 — cybersecurity AI' },
    ],
    regulation: 'AI Act Annex III Art. 15 — cybersecurity systemów AI high-risk',
  },
];

export default function RozwiazaniaPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-white/60 uppercase">Rozwiązania</span>
            </div>
            <h1 className="text-[38px] md:text-[64px] font-medium leading-[1.1] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Trzy wektory ataku.</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                Trzy gotowe odpowiedzi.
              </span>
            </h1>
            <p className="text-[17px] md:text-[19px] text-white/70 max-w-[680px] mx-auto leading-relaxed">
              All Green Fraud, NHI Governance i LLM Defense — każde rozwiązanie zaprojektowane pod konkretny wektor AI-native attack i konkretny artykuł regulacyjny.
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
              <div className={`bg-[#0D0D0D] border border-purple-800/40 rounded-2xl h-[320px] md:h-[400px] flex flex-col items-center justify-center gap-4 relative overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(109,40,217,0.12) 0%, transparent 70%)' }} />
                <div className="relative text-center">
                  <div className="text-[72px] font-black text-purple-800/30 leading-none mb-2">{sol.tag}</div>
                  <div className="text-white/40 text-[13px] font-medium tracking-widest uppercase">{sol.name}</div>
                  <div className="text-white/20 text-[11px] mt-2">[ Wizualizacja scenariusza ataku ]</div>
                </div>
              </div>

              {/* Text */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className={`text-[11px] font-bold tracking-[0.12em] uppercase mb-3 block ${i % 2 === 0 ? 'text-purple-600' : 'text-purple-400'}`}>
                  {sol.tag} — {sol.name}
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
                  <p className={`text-[12px] font-bold uppercase tracking-widest mb-2 ${i % 2 === 0 ? 'text-rose-600' : 'text-rose-400'}`}>Zagrożenie</p>
                  <p className={`text-[15px] leading-relaxed ${i % 2 === 0 ? 'text-gray-700' : 'text-white/70'}`}>{sol.description}</p>
                </div>

                <div className={`mb-8 p-5 rounded-xl border ${i % 2 === 0 ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-950/30 border-emerald-800/30'}`}>
                  <p className={`text-[12px] font-bold uppercase tracking-widest mb-2 ${i % 2 === 0 ? 'text-emerald-600' : 'text-emerald-400'}`}>Rozwiązanie Qunigma</p>
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
