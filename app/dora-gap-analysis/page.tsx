import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import { Info, HelpCircle, ClipboardList, Scale, ListChecks } from 'lucide-react';
import { GapAnalysisChecklist } from './GapAnalysisChecklist';

export const metadata: Metadata = {
  title: 'DORA Gap Analysis: samoocena gotowości dla banków | Qunigma',
  description: '44 punkty kontrolne w 5 filarach DORA (rozporządzenie UE 2022/2554), z odniesieniem do konkretnych artykułów, live scoringiem i wskazówką interpretacji wyniku. DORA obowiązuje od 17.01.2025, sprawdź gdzie realnie stoi Twoja organizacja.',
  alternates: {
    canonical: 'https://qunigma.ai/dora-gap-analysis',
    languages: {
      'pl-PL': 'https://qunigma.ai/dora-gap-analysis',
      'en-US': 'https://qunigma.ai/en/dora-gap-analysis',
    },
  },
};

const faq = [
  {
    q: 'Czym różni się ten dokument od formalnego audytu zgodności z DORA?',
    a: 'To narzędzie samooceny wstępnej, wypełniane przez Twój zespół, nie przez niezależnego audytora. Nie zastępuje formalnego audytu wewnętrznego, przeglądu przez biegłego rewidenta ICT ani inspekcji nadzorczej. Jego zadanie jest węższe i bardziej praktyczne: szybko pokazać, gdzie prawdopodobnie są luki, zanim zamówisz kosztowny, pełny audyt zewnętrzny albo zanim nadzorca zapyta pierwszy.',
  },
  {
    q: 'Kto w organizacji powinien wypełnić ten checklist?',
    a: 'Naturalnym właścicielem merytorycznym jest compliance officer lub CISO, ale wynik powinien trafić do komitetu ryzyka i do zarządu. Art. 5 DORA czyni odpowiedzialność za zarządzanie ryzykiem ICT niedelegowalnym obowiązkiem organu zarządzającego, nie tylko działu bezpieczeństwa czy compliance, więc traktowanie tego dokumentu jako sprawy wyłącznie technicznej mija się z duchem regulacji.',
  },
  {
    q: 'Co jeśli wynik wypadnie w paśmie wysokiej luki?',
    a: 'Nie jest to powód do paniki, ale jest to sygnał do priorytetyzacji, nie do odkładania. DORA obowiązuje od 17 stycznia 2025, więc każdy dzień zwłoki to dzień realnej ekspozycji regulacyjnej, nie teoretyczne ryzyko na przyszłość. W pierwszej kolejności warto domknąć Filar 1 (governance, bo bez zatwierdzonych ram i jasnej odpowiedzialności zarządu trudno wykazać zgodność w jakimkolwiek innym obszarze) oraz Filar 2 (zdolność raportowania incydentów w oknie 4 godzin, bo to jeden z najczęściej testowanych elementów podczas kontroli nadzorczej).',
  },
  {
    q: 'Czy ten dokument uwzględnia najnowsze zmiany regulacyjne, na przykład Digital Omnibus?',
    a: 'Pakiet Digital Omnibus (Rozporządzenie UE 2026/1744) dotyczył przede wszystkim harmonogramu AI Act, nie DORA. Sama DORA jest doprecyzowywana głównie przez regulacyjne standardy techniczne (RTS) i wytyczne EBA/ESA, na przykład delegowane rozporządzenie 2025/301 w sprawie raportowania incydentów, które uwzględniliśmy w Filarze 2. Ten dokument odzwierciedla stan wiedzy na sierpień 2026, z odniesieniem do konkretnego artykułu przy każdym punkcie, żeby dało się zweryfikować go samodzielnie w EUR-Lex.',
  },
  {
    q: 'Jak często powtarzać tę samoocenę?',
    a: 'Minimum raz w roku, w rytmie zbliżonym do własnych wymogów przeglądu w samej DORA (Art. 6 ust. 5 dla ram zarządzania ryzykiem ICT, Art. 8 ust. 1 dla rejestru aktywów). Dodatkowo warto powtórzyć ją po każdej istotnej zmianie: nowym dostawcy krytycznym, poważnym incydencie, zmianie architektury ICT albo wejściu w życie nowego RTS lub wytycznych EBA doprecyzowujących którykolwiek z pięciu filarów.',
  },
];

export default function DoraGapAnalysisPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="rounded-full bg-purple-500/15 border border-purple-500/30 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-purple-300 uppercase">DORA Gap Analysis</span>
            </div>
            <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.15] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">DORA obowiązuje od 17.01.2025.</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                Sprawdź, gdzie naprawdę stoisz.
              </span>
            </h1>
            <p className="text-[17px] text-white/70 max-w-[680px] mx-auto leading-relaxed mb-4">
              44 punkty kontrolne w 5 filarach rozporządzenia (UE) 2022/2554, zbudowane wprost z tekstu regulacji, z odniesieniem do konkretnego artykułu przy każdym punkcie. Oceń każdy punkt jako Tak, Częściowo albo Nie i zobacz wynik na żywo, bez rejestracji i bez wysyłania czegokolwiek na serwer.
            </p>
            <p className="text-[13px] text-white/40 max-w-[560px] mx-auto leading-relaxed">
              Dokument roboczy dla zespołów compliance, ryzyka i bezpieczeństwa · ostatnia weryfikacja źródeł: sierpień 2026
            </p>
          </div>
        </section>

        {/* Uwaga metodologiczna */}
        <section className="bg-white py-10 px-6 w-full border-b border-gray-100">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[14px] text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Uwaga o liczbie punktów.</strong> Ten dokument zawiera <strong className="text-gray-900">44 realne, weryfikowalne punkty</strong>: 19 dla Rozdziału II (ICT risk management), 8 dla Rozdziału III (zarządzanie incydentami), 7 dla Rozdziału IV (testowanie odporności), 7 dla Rozdziału V (ryzyko stron trzecich) i 3 dla Rozdziału VI (wymiana informacji). Rozkład odzwierciedla rzeczywistą wielkość poszczególnych rozdziałów DORA, nie sztuczny podział na równe bloki. Celowo pomijamy artykuły, które nakładają zadania na europejskie urzędy nadzoru (ESA) albo na Wiodącego Nadzorcę wobec krytycznych dostawców, a nie na sam podmiot finansowy (Art. 15, 16, 20-22, większość Art. 31-44), bo nie da się ich sensownie zamienić na punkt samooceny banku. Każdy pozostały punkt linkuje do konkretnego ustępu, który da się zweryfikować w EUR-Lex.
            </p>
          </div>
        </section>

        {/* Dla kogo i jak korzystać */}
        <section id="wstep" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Dla kogo i po co</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Nie przygotowanie na termin, tylko sprawdzenie obecnego stanu</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                Digital Operational Resilience Act obowiązuje instytucje finansowe w UE od <strong className="text-gray-900">17 stycznia 2025</strong>. To ważne rozróżnienie w stosunku do innych regulacji na tej stronie: to nie jest dokument przygotowujący na przyszły deadline, tylko narzędzie do sprawdzenia, jak wygląda zgodność z obowiązkiem, który już istnieje. Badania KPMG i Deloitte z 2025 i 2026 roku wskazują, że znacząca część instytucji finansowych w UE wciąż nie osiągnęła pełnej zgodności mimo minięcia terminu, więc pytanie &quot;gdzie realnie stoimy&quot; jest dziś bardziej aktualne niż samo pytanie &quot;czy jesteśmy gotowi&quot;.
              </p>
              <p>
                Ten dokument jest przeznaczony dla trzech grup, zwykle pracujących razem: <strong className="text-gray-900">compliance officerów i zespołów ryzyka operacyjnego</strong>, które prowadzą samoocenę na co dzień, <strong className="text-gray-900">komitetów ryzyka zarządu i rad nadzorczych</strong>, do których trafia wynik, oraz <strong className="text-gray-900">CISO i zespołów bezpieczeństwa</strong>, które odpowiadają za większość technicznych punktów w Filarach 1 i 3. Rejestr DORA czyni odpowiedzialność za ryzyko ICT niedelegowalnym obowiązkiem organu zarządzającego (Art. 5), więc traktowanie tego wyłącznie jako zadania działu IT jest samo w sobie luką.
              </p>
              <p>
                Poniżej pięć filarów DORA, każdy w formie listy punktów kontrolnych. Przy każdym punkcie oceń stan faktyczny jako <strong className="text-gray-900">Tak</strong> (w pełni wdrożone i udokumentowane), <strong className="text-gray-900">Częściowo</strong> (proces istnieje, ale nie jest w pełni udokumentowany, przetestowany albo konsekwentnie stosowany) albo <strong className="text-gray-900">Nie</strong> (brak). Wynik liczy się na żywo w Twojej przeglądarce, nic nie jest zapisywane ani wysyłane. Jeśli wolisz pracować offline, skopiuj punkty do arkusza kalkulacyjnego, struktura pytań pozostanie taka sama.
              </p>
            </div>
          </div>
        </section>

        {/* Jak interpretować wynik */}
        <section id="interpretacja" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Jak czytać wynik</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Trzy pasma, jedna prosta reguła</h2>
            <div className="rounded-2xl border border-gray-200 overflow-hidden mb-6">
              {[
                { band: '80-100%', label: 'Niska luka', desc: 'Dobra pozycja. Utrzymaj przez regularny przegląd, co najmniej raz w roku, w rytmie samej regulacji.', color: 'text-emerald-700 bg-emerald-50' },
                { band: '50-79%', label: 'Średnia luka', desc: 'Fundament jest, ale zostały odrębne braki operacyjne, na przykład nieprzetestowana strategia wyjścia z dostawcą krytycznym albo niepełny rejestr aktywów ICT. Typowy wynik dla organizacji, które wdrożyły DORA na termin, ale nie zamknęły wszystkich wątków.', color: 'text-amber-700 bg-amber-50' },
                { band: '0-49%', label: 'Wysoka luka', desc: 'Znacząca część obowiązków nie jest spełniona lub udokumentowana. Priorytet: Filar 1 (governance, bo bez niego trudno wykazać zgodność gdziekolwiek indziej) i Filar 2 (zdolność zmieszczenia się w oknie 4 godzin na zgłoszenie wstępne).', color: 'text-rose-700 bg-rose-50' },
              ].map((row) => (
                <div key={row.band} className="flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-5 border-b last:border-0 border-gray-100">
                  <span className={`inline-flex items-center justify-center text-[13px] font-bold px-3 py-1 rounded-full shrink-0 ${row.color}`}>{row.band} · {row.label}</span>
                  <p className="text-[14px] text-gray-600 leading-relaxed">{row.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              Wynik procentowy to prosta suma punktów (Tak = 2, Częściowo = 1, Nie = 0) podzielona przez maksimum 88 punktów. To narzędzie orientacyjne, nie formalna metodyka oceny ryzyka: dwie organizacje z identycznym wynikiem procentowym mogą mieć bardzo różny profil ryzyka, jeśli luki dotyczą różnych filarów. Dlatego obok wyniku ogólnego pokazujemy też wynik per filar.
            </p>
          </div>
        </section>

        {/* Spis treści / kotwice do filarów */}
        <section className="bg-[#F6F2EA] py-8 px-6 w-full border-b border-gray-200">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
            {[
              { href: '#filar-1', label: 'Filar 1: ICT risk management' },
              { href: '#filar-2', label: 'Filar 2: Incydenty' },
              { href: '#filar-3', label: 'Filar 3: Testowanie' },
              { href: '#filar-4', label: 'Filar 4: Strony trzecie' },
              { href: '#filar-5', label: 'Filar 5: Wymiana informacji' },
              { href: '#wynik', label: 'Twój wynik' },
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

        {/* Interaktywny checklist z 5 filarami i live scoringiem */}
        <GapAnalysisChecklist />

        {/* Kontekst regulacyjny */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ListChecks className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Warto wiedzieć</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Jak ten dokument łączy się z resztą stosu regulacyjnego</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                Systemy AI wykorzystywane do oceny ryzyka ICT albo do wspierania decyzji w Filarze 1 (na przykład scoring anomalii czy priorytetyzacja alertów) mogą jednocześnie podlegać AI Act, jeśli wspierają zdolność kredytową klientów albo inne zastosowania z Annex III. Zrewidowany ECB Guide to Internal Models z lipca 2025 idzie w tym samym kierunku co Art. 9 DORA: nie wystarczy, że model działa skutecznie, musi być &quot;adequately explainable&quot;, odpowiednio wytłumaczalny dla audytora i nadzorcy. Jeśli ten wątek jest dla Ciebie istotny, pełny checklist gotowości na Annex III jest dostępny osobno.
              </p>
              <p>
                Filar 1 tego dokumentu, a konkretnie Art. 8 (identyfikacja aktywów ICT), ma bezpośrednie przełożenie na jeden z najsłabiej nadzorowanych obszarów bankowej infrastruktury: tożsamości maszynowe (non-human identities), czyli klucze API, konta serwisowe i tokeny OAuth. Rejestr aktywów bez pokrycia tej kategorii tożsamości nie spełnia ducha Art. 8, nawet jeśli formalnie istnieje. Osobny materiał na tej stronie opisuje cztery udokumentowane incydenty NHI z lat 2023-2024 i to, czego realnie wymaga Art. 8 w tym zakresie.
              </p>
              <p>
                Filar 3 (testowanie) jest miejscem, gdzie DORA najsilniej łączy się z bieżącą architekturą bezpieczeństwa: dobrze zaprojektowany zakres TLPT z Art. 26-27 powinien obejmować ścieżki ataku przez skompromitowane tożsamości maszynowe i przez systemy AI wysokiego ryzyka jako część infrastruktury krytycznej, nie tylko klasyczne wektory ukierunkowane na ludzi.
              </p>
            </div>
          </div>
        </section>

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
              Najczęstsze pytania zespołów compliance i ryzyka
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
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Źródła</span>
            <ul className="text-[13px] text-gray-500 leading-relaxed flex flex-col gap-1.5 list-disc pl-5">
              <li>Rozporządzenie (UE) 2022/2554 (DORA), Art. 4-14, 17-19, 23-30, 45, EUR-Lex</li>
              <li>Delegowane rozporządzenie (UE) 2025/301 (RTS w sprawie raportowania poważnych incydentów ICT), EUR-Lex</li>
              <li>EBA i ESA, wspólne regulacyjne standardy techniczne oraz wytyczne wdrażające DORA (rejestr informacji, klasyfikacja incydentów, TLPT)</li>
              <li>ECB Banking Supervision, Revised Guide to Internal Models, 28.07.2025</li>
              <li>KPMG, PwC, Deloitte, publiczne materiały o stanie gotowości sektora finansowego UE na DORA, 2025-2026</li>
              <li>McKinsey, badanie gotowości europejskich instytucji finansowych na DORA przed terminem stosowania</li>
            </ul>
            <p className="text-[12px] text-gray-400 mt-6 leading-relaxed">
              Ten dokument to materiał edukacyjny i narzędzie samooceny, nie porada prawna ani formalny audyt zgodności. Regulacje i wytyczne wdrażające zmieniają się, przed podjęciem decyzji compliance zweryfikuj aktualny stan prawny z działem prawnym lub doradcą regulacyjnym. Jeśli znajdziesz nieścisłość, napisz do nas, poprawimy dokument.
            </p>
          </div>
        </section>

        {/* Kontakt */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-4 tracking-tight">Chcesz spersonalizowane spojrzenie na Twoje luki?</h2>
            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
              Napisz do nas, przejdziemy przez ten dokument razem z Twoim zespołem compliance i ryzyka, i wskażemy, gdzie w Twojej organizacji realnie leżą priorytety.
            </p>
            <a
              href="mailto:info@qunigma.ai"
              className="inline-block bg-[#6D28D9] text-white px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-[#5B21B6] transition-colors"
            >
              info@qunigma.ai
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
