import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import { Info, HelpCircle, ListChecks, Layers, Table2, ClipboardList } from 'lucide-react';
import { IntegrationReadinessChecklist } from './IntegrationReadinessChecklist';

export const metadata: Metadata = {
  title: 'Technical Integration Readiness: samoocena dla CTO i Chief Architect | Qunigma',
  description: 'Diagnostyczne pytania o Twoją architekturę, wyjaśnienie jak działają moduły Qunigma i czego nie obejmują, mapowanie DORA/AI Act/NIS2 na realne wymogi oraz live checklist złożoności integracji. Bez rejestracji.',
  alternates: {
    canonical: 'https://qunigma.ai/technical-specification-cto',
    languages: {
      'pl-PL': 'https://qunigma.ai/technical-specification-cto',
      'en-US': 'https://qunigma.ai/en/technical-specification-cto',
    },
  },
};

const diagnosticQuestions = [
  'Jaki SIEM lub SOAR działa u Ciebie dzisiaj: Splunk, Microsoft Sentinel, IBM QRadar, coś innego, czy żaden?',
  'Infrastruktura docelowa: on-premise, chmura publiczna, chmura EU-sovereign, czy model hybrydowy?',
  'Jaki jest dziś Twój realny czas od wygenerowania alertu do triage przez analityka?',
  'Czy istnieje dziś jakikolwiek rejestr tożsamości maszynowych (klucze API, service accounts, tokeny OAuth), choćby cząstkowy?',
  'Czy systemy LLM/AI w Twojej organizacji są w produkcji, w pilotażu, czy dopiero w fazie planowania?',
  'Kto formalnie odpowiada w Twojej organizacji za rejestr aktywów ICT wymagany DORA Art. 8?',
];

const modules = [
  {
    name: 'MTTAV Engine',
    how: 'Wykrywa anomalie na poziomie pakietu w czasie rzeczywistym i autonomicznie neutralizuje zagrożenie, zanim dotrze do systemu docelowego. Zmierzony przez nas czas neutralizacji, poniżej 2ms, to czas MTTAV (Mean Time To Active Vectorization) od wykrycia anomalii do autonomicznej neutralizacji w naszym środowisku testowym (PoC).',
    notCover: 'To inna miara niż 241 dni, publikowany przez IBM średni globalny czas identyfikacji i powstrzymania naruszenia danych: ta liczba obejmuje też etapy poza kontrolą silnika, jak eskalację wewnętrzną czy komunikację z regulatorem. MTTAV Engine nie zastępuje Twojego SIEM, integruje się z nim przez API.',
  },
  {
    name: 'Honeypot LLM',
    how: 'Fałszywy model językowy wbudowany w infrastrukturę klienta, zwodzący atakujące agenty AI. W naszych testach izolował atakującego w 100% przypadków przy zerowej liczbie false positive, jednocześnie zbierając dane wywiadowcze o metodach ataku.',
    notCover: 'Moduł celuje w wektory ataku przez interfejsy AI/LLM. W tabeli compliance opisujemy go jako wsparcie TLPT-ready dla DORA Art. 26, nie jako samodzielny substytut pełnego testu penetracyjnego opartego na analizie zagrożeń, który powinien obejmować też klasyczne wektory skierowane na ludzi i infrastrukturę spoza warstwy AI.',
  },
  {
    name: 'Memory Guard',
    how: 'Weryfikuje integralność pamięci kontekstowej systemów LLM w czasie rzeczywistym za pomocą SHA-256, z narzutem poniżej 1ms na request, blokując ataki typu Memory Poisoning zanim zdążą zdegradować decyzje.',
    notCover: 'Chroni konkretnie pamięć kontekstową modeli LLM. Nie jest ogólnym rozwiązaniem szyfrowania danych w spoczynku czy w tranzycie ani narzędziem DLP dla całej infrastruktury.',
  },
  {
    name: 'NHI Security',
    how: 'Automatyczna inwentaryzacja, klasyfikacja i monitoring tożsamości maszynowych: kluczy API, service accounts, tokenów OAuth. Punktem odniesienia jest 25 minut, szacowany czas, w jakim atakujący może dokonać eksfiltracji danych przy braku tej ochrony.',
    notCover: 'Pokrywa kategorię tożsamości maszynowych. Pełny rejestr aktywów ICT wymagany DORA Art. 8 ust. 1 obejmuje szerszy zakres, w tym aplikacje, sprzęt i sieci: rejestr aktywów bez pokrycia kategorii NHI nie spełnia ducha Art. 8, ale samo NHI Security nie zastępuje pełnego rejestru.',
  },
];

const complianceRows = [
  { reg: 'DORA', art: 'Art. 8', req: 'Inwentaryzacja aktywów ICT i NHI', status: 'Automatyczna, NHI Security' },
  { reg: 'DORA', art: 'Art. 19', req: 'Raportowanie incydentów 4h / 24h / 72h', status: 'Pre-built reporting packs' },
  { reg: 'DORA', art: 'Art. 25', req: 'Ryzyko stron trzecich i dostawców ICT', status: 'Third-party NHI monitoring' },
  { reg: 'DORA', art: 'Art. 26', req: 'Testy penetracyjne TLPT', status: 'Honeypot LLM jako TLPT-ready' },
  { reg: 'AI Act', art: 'Art. 9', req: 'System zarządzania ryzykiem AI', status: 'MTTAV risk scoring w czasie rzeczywistym' },
  { reg: 'AI Act', art: 'Art. 15', req: 'Dokładność, solidność i cybersecurity', status: 'Memory Guard SHA-256' },
  { reg: 'NIS2', art: 'Art. 21', req: 'Środki zarządzania ryzykiem bezpieczeństwa sieci', status: 'MTTAV real-time protection' },
  { reg: 'NIS2', art: 'Art. 21(2)(d)', req: 'Bezpieczeństwo łańcucha dostaw', status: 'NHI Security, third-party monitoring' },
];

const faq = [
  {
    q: 'Czy to jest pełna specyfikacja API, którą mogę przekazać zespołowi architektury?',
    a: 'Nie w tej formie. Ten dokument to narzędzie samooceny gotowości integracyjnej: diagnostyczne pytania o Twoją architekturę, uczciwe wyjaśnienie jak działają nasze moduły i czego nie obejmują, mapowanie na realne wymogi regulacyjne oraz orientacyjny wynik złożoności integracji. Pełną specyfikację API, schemat webhooków i szczegóły integracji z konkretnym SIEM omawiamy indywidualnie, zwykle pod NDA, na etapie technicznej rozmowy scopingowej.',
  },
  {
    q: 'Skąd wiadomo, że poniżej 2ms MTTAV to prawdziwa liczba, a nie marketing?',
    a: 'To zmierzony przez nas czas neutralizacji w środowisku testowym (PoC), od wykrycia anomalii na poziomie pakietu do autonomicznej neutralizacji, nie deklaracja bez metodologii. Pełne wyjaśnienie, łącznie z tym dlaczego nie jest to ta sama miara co 241-dniowy branżowy benchmark IBM Cost of a Data Breach, opisujemy osobno w Metodologii.',
  },
  {
    q: 'Co jeśli mój SIEM nie jest jednym z gotowych konektorów?',
    a: 'Gotowe konektory (Splunk, Microsoft Sentinel, IBM QRadar) przyspieszają wdrożenie, ale integracja podstawowa działa przez standardowe REST API i webhook, niezależnie od konkretnego SIEM. Warto to doprecyzować w checklisti poniżej i podczas rozmowy technicznej.',
  },
  {
    q: 'Czy wdrożenie wymaga wymiany istniejącego SIEM, SOC albo systemu core banking?',
    a: 'Nie. Platforma integruje się z istniejącą infrastrukturą przez API, bez konieczności wymiany tych systemów. Orientacyjny timeline to 8 dni roboczych: dzień 1 połączenie API i inwentaryzacja NHI, dzień 2 kalibracja Honeypot LLM, dni 3-7 Memory Guard baseline i testy, od dnia 8 pełna aktywna ochrona.',
  },
  {
    q: 'On-premise czy chmura?',
    a: 'Jedno i drugie jest możliwe: on-premise albo EU-sovereign cloud, co eliminuje ekspozycję na CLOUD Act. Który model pasuje do Twojej organizacji, zależy od odpowiedzi na pytania diagnostyczne w pierwszej sekcji tego dokumentu.',
  },
];

export default function TechnicalSpecificationCtoPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="rounded-full bg-purple-500/15 border border-purple-500/30 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-purple-300 uppercase">Technical Integration Readiness</span>
            </div>
            <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.15] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Zanim zaczniemy rozmowę techniczną,</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                sprawdź gdzie stoisz.
              </span>
            </h1>
            <p className="text-[17px] text-white/70 max-w-[680px] mx-auto leading-relaxed mb-4">
              Diagnostyczne pytania o Twoją architekturę, uczciwe wyjaśnienie jak działają nasze moduły i czego nie obejmują, mapowanie na realne wymogi DORA, AI Act i NIS2 oraz live checklist złożoności integracji. Bez rejestracji i bez wysyłania czegokolwiek na serwer.
            </p>
            <p className="text-[13px] text-white/40 max-w-[560px] mx-auto leading-relaxed">
              Dokument roboczy dla CTO, Chief Architect i zespołów bezpieczeństwa · ostatnia weryfikacja: sierpień 2026
            </p>
          </div>
        </section>

        {/* Uwaga metodologiczna */}
        <section className="bg-white py-10 px-6 w-full border-b border-gray-100">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[14px] text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Czym to jest, a czym nie jest.</strong> Qunigma nie publikuje jeszcze zewnętrznie pełnej specyfikacji API i schematu webhooków, dlatego nie znajdziesz ich poniżej. Ten dokument jest zbudowany wyłącznie z tego, co już jest opisane na tej stronie: architektura platformy, metodologia liczenia naszych metryk i mapowanie compliance. Jeśli konkretny temat integracyjny nie jest tu opisany, sekcja diagnostyczna pyta o Twoją stronę, nie zgaduje naszej.
            </p>
          </div>
        </section>

        {/* Spis treści */}
        <section className="bg-[#F6F2EA] py-8 px-6 w-full border-b border-gray-200 print:hidden">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
            {[
              { href: '#diagnostyka', label: 'Twoja architektura' },
              { href: '#moduly', label: 'Jak działają moduły' },
              { href: '#compliance', label: 'Mapowanie compliance' },
              { href: '#checklist', label: 'Checklist integracyjny' },
              { href: '#faq', label: 'FAQ' },
              { href: '#zrodla', label: 'Źródła' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-1.5 rounded-full text-[13px] font-medium border bg-white text-gray-600 border-gray-200 hover:border-purple-300 hover:text-purple-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        {/* (a) Diagnostyka architektury */}
        <section id="diagnostyka" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Krok 1, zanim rozmawiamy</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Pytania o Twoją architekturę, nie o naszą</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed mb-10">
              <p>
                Zamiast zgadywać, jaki masz stack, zaczynamy od pytań. Warto znać odpowiedzi zanim usiądziesz z nami do rozmowy technicznej, bo od nich zależy, jak wygląda Twoja ścieżka integracji: przez gotowy konektor, przez REST API, on-premise czy w chmurze.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden divide-y divide-gray-100">
              {diagnosticQuestions.map((q) => (
                <div key={q} className="px-6 py-5">
                  <p className="text-[15px] text-gray-800 leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* (b) Jak działają moduły */}
        <section id="moduly" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Krok 2, jak to działa</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Jak działa każdy moduł i czego nie obejmuje</h2>
            <p className="text-[16px] text-gray-600 leading-relaxed mb-10">
              Każda liczba na tej stronie ma metodologię. Poniżej, dla każdego modułu osobno: jak działa mechanizm i gdzie kończy się jego zakres, żeby nie było niedopowiedzeń przy rozmowie technicznej.
            </p>
            <div className="flex flex-col gap-6">
              {modules.map((mod) => (
                <div key={mod.name} className="rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-[18px] font-bold text-gray-900 mb-3">{mod.name}</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-3">
                    <strong className="text-gray-900">Jak działa: </strong>{mod.how}
                  </p>
                  <p className="text-[15px] text-gray-500 leading-relaxed">
                    <strong className="text-gray-700">Czego nie obejmuje: </strong>{mod.notCover}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* (c) Mapowanie compliance */}
        <section id="compliance" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Table2 className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Krok 3, mapowanie na regulacje</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">Integracja jako odpowiedź na konkretny artykuł</h2>
            <p className="text-[16px] text-gray-600 leading-relaxed mb-10">
              Wybrane wiersze z pełnej mapy regulacyjnej na stronie Compliance, ograniczone do artykułów bezpośrednio związanych z tym, co integrujesz technicznie. Pełne zestawienie DORA, AI Act, CRA i NIS2 jest dostępne osobno.
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-200">
              <div className="grid grid-cols-4 text-[12px] font-bold uppercase tracking-wide px-6 py-3 border-b bg-gray-100 border-gray-200 text-gray-600">
                <span>Regulacja</span>
                <span>Artykuł</span>
                <span>Wymóg</span>
                <span>Status Qunigma</span>
              </div>
              {complianceRows.map((row) => (
                <div key={`${row.reg}-${row.art}`} className="grid grid-cols-4 px-6 py-4 border-b last:border-0 text-[13px] border-gray-100 hover:bg-gray-50 bg-white">
                  <span className="font-bold text-gray-900">{row.reg}</span>
                  <span className="text-gray-700">{row.art}</span>
                  <span className="text-gray-600">{row.req}</span>
                  <span className="text-emerald-600 font-medium">{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* (d) Interaktywny checklist złożoności integracji */}
        <IntegrationReadinessChecklist />

        {/* FAQ */}
        <section id="faq" className="bg-[#171717] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-5 h-5 text-purple-400" strokeWidth={2} />
              <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase">Pytania i odpowiedzi</span>
            </div>
            <h2
              className="text-[28px] md:text-[36px] font-bold leading-tight tracking-tight mb-12"
              style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Najczęstsze pytania CTO i Chief Architect
            </h2>
            <div className="flex flex-col divide-y divide-white/10">
              {faq.map((item) => (
                <div key={item.q} className="py-7">
                  <h3 className="text-[17px] font-bold text-white mb-3">{item.q}</h3>
                  <p className="text-[15px] text-white/60 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Źródła */}
        <section id="zrodla" className="bg-[#F6F2EA] py-16 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ListChecks className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase block">Źródła</span>
            </div>
            <ul className="text-[13px] text-gray-500 leading-relaxed flex flex-col gap-1.5 list-disc pl-5">
              <li>qunigma.ai/platforma, architektura MTTAV Engine, Honeypot LLM, Memory Guard, NHI Security</li>
              <li>qunigma.ai/metodologia, wyjaśnienie metryk czasu reakcji, ROI i oszczędności</li>
              <li>qunigma.ai/compliance, pełne mapowanie DORA, AI Act, CRA, NIS2</li>
              <li>qunigma.ai/firma, EU-sovereign infrastructure, brak CLOUD Act</li>
            </ul>
            <p className="text-[12px] text-gray-400 mt-6 leading-relaxed">
              Ten dokument to materiał edukacyjny i narzędzie samooceny, nie formalna specyfikacja techniczna ani zobowiązanie umowne. Szczegóły integracji specyficzne dla Twojej organizacji ustalamy indywidualnie podczas rozmowy technicznej.
            </p>
          </div>
        </section>

        {/* Kontakt, zawsze widoczny, także w wydruku */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-4 tracking-tight">Gotowy na rozmowę techniczną?</h2>
            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
              Napisz do nas z wynikiem checklisty, przejdziemy razem przez architekturę Twojej organizacji i pokażemy, jak dokładnie wygląda integracja w Twoim przypadku.
            </p>
            <a
              href="mailto:info@qunigma.ai"
              className="inline-block bg-[#6D28D9] text-white px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-[#5B21B6] transition-colors mb-8"
            >
              info@qunigma.ai
            </a>
            <div className="flex flex-col items-center gap-2 text-[14px] text-gray-500">
              <p className="font-semibold text-gray-700">Qunigma</p>
              <p>info@qunigma.ai</p>
              <div className="flex items-center gap-4 mt-1">
                <a
                  href="https://www.linkedin.com/in/peter-mankowski-18065619/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:text-purple-900 underline underline-offset-2"
                >
                  Peter Mankowski, LinkedIn
                </a>
                <span className="w-px h-4 bg-gray-300" />
                <a
                  href="https://www.linkedin.com/in/paulcebo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:text-purple-900 underline underline-offset-2"
                >
                  Paul Cebo, LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
