import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import { Info, HelpCircle, ClipboardList, Scale, ListChecks } from 'lucide-react';
import { ReadinessChecklist } from './ReadinessChecklist';

export const metadata: Metadata = {
  title: 'AI Security Readiness Analysis: MTTAV Exposure Score dla banków | Qunigma',
  description: 'Samoocena MTTAV Exposure Score w 6 sekcjach: baseline reakcji, ekspozycja NHI, memory poisoning, All Green Fraud, ekspozycja regulacyjna DORA/AI Act i pojemność SOC. Live scoring, bez rejestracji, gotowe do wydruku na jutrzejszy board meeting.',
  alternates: {
    canonical: 'https://qunigma.ai/ai-security-readiness-analysis',
    languages: {
      'pl-PL': 'https://qunigma.ai/ai-security-readiness-analysis',
      'en-US': 'https://qunigma.ai/en/ai-security-readiness-analysis',
    },
  },
};

const faq = [
  {
    q: 'Czym różni się MTTAV Exposure Score od formalnego audytu bezpieczeństwa?',
    a: 'To narzędzie samooceny wstępnej, wypełniane przez Twój zespół w kilkanaście minut, nie przez niezależnego audytora. Nie zastępuje testów penetracyjnych, formalnego red teamingu ani przeglądu przez zewnętrznego audytora bezpieczeństwa. Jego zadanie jest węższe: szybko pokazać, w których z sześciu obszarów prawdopodobnie masz największą ekspozycję, zanim zamówisz kosztowny, pełny audyt albo zanim regulator albo atakujący zada to pytanie pierwszy.',
  },
  {
    q: 'Dlaczego w sekcji NHI nie ma statystyki "tożsamości maszynowe przewyższają ludzkie 80 do 1"?',
    a: 'Bo ta konkretna, bardzo popularna liczba bywa cytowana z różnym kontekstem w różnych raportach i nie chcieliśmy budować diagnostyki na wskaźniku, którego nie potrafimy wprost i jednoznacznie zweryfikować dla tego konkretnego zastosowania. Zamiast agregatu, sekcja B odwołuje się do czterech w pełni udokumentowanych, nazwanych incydentów (Okta, Cloudflare, Microsoft, kampania Snowflake dotykająca Banco Santander) oraz do zmierzonej przez CrowdStrike metryki eCrime breakout time. Każde twierdzenie w tym dokumencie linkuje albo do konkretnego przepisu, albo do nazwanego źródła.',
  },
  {
    q: 'Skąd bierze się wynik procentowy i co właściwie oznacza?',
    a: 'Każdy punkt oceniasz jako Tak (0 punktów ekspozycji), Częściowo / Nie wiem (1 punkt) albo Nie (2 punkty). Wynik procentowy to suma punktów ekspozycji podzielona przez maksimum możliwe do zdobycia we wszystkich 31 punktach kontrolnych. To odwrotność logiki "gotowości": wysoki wynik procentowy oznacza wysoką ekspozycję na ryzyko, nie wysoką gotowość. Obok wyniku ogólnego pokazujemy też wynik per sekcja, bo dwie organizacje z identycznym wynikiem ogólnym mogą mieć zupełnie inny profil ryzyka.',
  },
  {
    q: 'Czy AI Act faktycznie przesunął termin na 2 grudnia 2027?',
    a: 'Tak, dla obowiązków dotyczących systemów wysokiego ryzyka z Annex III. Pakiet Digital Omnibus (Rozporządzenie UE 2026/1744, w mocy od 27 lipca 2026) przesunął ten konkretny termin. Nie przesunął natomiast obowiązków przejrzystości i znakowania treści z Art. 50 AI Act, które obowiązują od 2 sierpnia 2026 niezależnie od statusu systemu jako wysokiego ryzyka. Warto rozróżniać te dwa terminy, bo łatwo je pomylić.',
  },
  {
    q: 'Co jeśli wynik wypadnie w paśmie wysokiej lub krytycznej ekspozycji?',
    a: 'To sygnał do priorytetyzacji, nie powód do paniki i nie powód do odkładania. Zacznij od sekcji z najwyższym wynikiem procentowym, bo tam luka jest największa względem tego, co sami zaznaczyliście jako stan faktyczny. Jeśli wynik ogólny przekracza 50%, warto omówić go z zespołem ryzyka i, jeśli chcesz, z nami.',
  },
];

export default function AiSecurityReadinessAnalysisPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden print:hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="rounded-full bg-purple-500/15 border border-purple-500/30 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-purple-300 uppercase">AI Security Readiness Analysis</span>
            </div>
            <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.3] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Twój MTTAV Exposure Score,</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                gotowy na jutrzejszy board meeting.
              </span>
            </h1>
            <p className="text-[17px] text-white/70 max-w-[680px] mx-auto leading-relaxed mb-4">
              31 punktów kontrolnych w 6 sekcjach: baseline czasu reakcji, ekspozycja przez tożsamości maszynowe (NHI), ryzyko zatrucia pamięci agentów AI, luka w wykrywaniu "All Green Fraud", ekspozycja regulacyjna DORA i AI Act oraz pojemność SOC. Oceń każdy punkt jako Tak, Częściowo/Nie wiem albo Nie i zobacz wynik na żywo, bez rejestracji i bez wysyłania czegokolwiek na serwer.
            </p>
            <p className="text-[13px] text-white/40 max-w-[560px] mx-auto leading-relaxed">
              Czas wypełnienia: 12-15 minut · ostatnia weryfikacja źródeł: sierpień 2026
            </p>
          </div>
        </section>

        {/* Uwaga metodologiczna */}
        <section className="bg-white py-10 px-6 w-full border-b border-gray-100 print:hidden">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[14px] text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Uwaga o liczbach w tym dokumencie.</strong> Celowo nie używamy tu jednego, zagregowanego wskaźnika bez możliwej do zweryfikowania metodologii (np. popularnego w branży "NHI przewyższają ludzi 80 do 1"). Tam, gdzie podajemy liczbę z zewnętrznego raportu, jest ona przypisana do nazwanego źródła (IBM, CrowdStrike, Ponemon, OWASP) w tekście danej sekcji. Sam MTTAV Exposure Score (wynik procentowy, progi Niska/Umiarkowana/Wysoka/Krytyczna ekspozycja) to własna metodologia oceny Qunigma, nie cytat z zewnętrznego badania: traktuj ją jako narzędzie orientacyjne do rozmowy wewnętrznej, nie formalny wskaźnik ryzyka regulacyjnego.
            </p>
          </div>
        </section>

        {/* Dla kogo i jak korzystać */}
        <section id="wstep" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24 print:hidden">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Dla kogo i po co</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Nie kolejny audyt, tylko szybka mapa Twojej ekspozycji</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                Ten dokument jest przeznaczony dla <strong className="text-gray-900">CISO i zespołów SOC</strong>, które na co dzień żyją z wolumenem alertów opisanym w sekcji F, dla <strong className="text-gray-900">compliance officerów i zespołów ryzyka</strong>, które odpowiadają za sekcję E, oraz dla <strong className="text-gray-900">zarządu i komitetu ryzyka</strong>, do których ostatecznie trafia wynik. Art. 5 DORA czyni odpowiedzialność za ryzyko ICT niedelegowalnym obowiązkiem organu zarządzającego, więc traktowanie tego wyłącznie jako zadania technicznego samo w sobie jest luką.
              </p>
              <p>
                Przy każdym punkcie oceń stan faktyczny jako <strong className="text-gray-900">Tak</strong> (w pełni wdrożone), <strong className="text-gray-900">Częściowo / Nie wiem</strong> (proces istnieje częściowo albo nie masz pewności) albo <strong className="text-gray-900">Nie</strong> (brak). Wynik liczy się na żywo w Twojej przeglądarce, nic nie jest zapisywane ani wysyłane na żaden serwer. Po zakończeniu możesz zapisać wynik jako PDF przyciskiem w sekcji wyników, wydruk pokazuje Twoje odpowiedzi jako czysty, gotowy do prezentacji dokument.
              </p>
            </div>
          </div>
        </section>

        {/* Jak interpretować wynik */}
        <section id="interpretacja" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24 print:hidden">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Jak czytać wynik</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Cztery pasma ekspozycji, jedna prosta reguła</h2>
            <div className="rounded-2xl border border-gray-200 overflow-hidden mb-6">
              {[
                { band: '0-20%', label: 'Niska ekspozycja', desc: 'Utrzymaj obecny poziom kontroli. Powtórz tę samoocenę za 6 miesięcy.', color: 'text-emerald-700 bg-emerald-50' },
                { band: '21-50%', label: 'Umiarkowana ekspozycja', desc: 'Zidentyfikuj priorytety spośród zaznaczonych luk. Zaplanuj proof of concept w ciągu 90 dni.', color: 'text-amber-700 bg-amber-50' },
                { band: '51-75%', label: 'Wysoka ekspozycja', desc: 'Potrzebna pilna rozmowa z dostawcami active defense. Prawdopodobna luka względem oczekiwań DORA i AI Act.', color: 'text-rose-700 bg-rose-50' },
                { band: '76-100%', label: 'Krytyczna ekspozycja', desc: 'Potrzebna natychmiastowa akcja. Odpowiedzialność zarządu za ryzyko ICT (DORA Art. 5) jest osobista i niedelegowalna.', color: 'text-red-800 bg-red-50' },
              ].map((row) => (
                <div key={row.band} className="flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-5 border-b last:border-0 border-gray-100">
                  <span className={`inline-flex items-center justify-center text-[13px] font-bold px-3 py-1 rounded-full shrink-0 ${row.color}`}>{row.band} · {row.label}</span>
                  <p className="text-[14px] text-gray-600 leading-relaxed">{row.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              Wynik procentowy to suma punktów ekspozycji (Nie = 2, Częściowo/Nie wiem = 1, Tak = 0) podzielona przez maksimum możliwe do zdobycia we wszystkich 31 punktach. To narzędzie orientacyjne, nie formalna metodyka oceny ryzyka regulacyjnego: dwie organizacje z identycznym wynikiem procentowym mogą mieć bardzo różny profil ryzyka, jeśli luki dotyczą różnych sekcji. Dlatego obok wyniku ogólnego pokazujemy też wynik per sekcja.
            </p>
          </div>
        </section>

        {/* Spis treści / kotwice do sekcji */}
        <section className="bg-[#F6F2EA] py-8 px-6 w-full border-b border-gray-200 print:hidden">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
            {[
              { href: '#sekcja-a', label: 'A: Baseline MTTAV' },
              { href: '#sekcja-b', label: 'B: NHI Exposure' },
              { href: '#sekcja-c', label: 'C: Memory Poisoning' },
              { href: '#sekcja-d', label: 'D: All Green Fraud' },
              { href: '#sekcja-e', label: 'E: Ekspozycja regulacyjna' },
              { href: '#sekcja-f', label: 'F: Pojemność SOC' },
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

        {/* Interaktywny checklist z 6 sekcjami i live scoringiem */}
        <ReadinessChecklist />

        {/* Kontekst regulacyjny */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100 print:hidden">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ListChecks className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Warto wiedzieć</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Jak ten dokument łączy się z resztą stosu regulacyjnego</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                Sekcja E celowo rozdziela dwa różne terminy AI Act, które łatwo pomylić: obowiązki dla systemów wysokiego ryzyka z Annex III (przesunięte na 2 grudnia 2027 pakietem Digital Omnibus, Rozporządzenie UE 2026/1744) i obowiązki przejrzystości oraz znakowania treści z Art. 50 AI Act, które nie zostały przesunięte i obowiązują od 2 sierpnia 2026. Traktowanie obu jako jednego deadline'u prowadzi albo do fałszywego poczucia bezpieczeństwa, albo do niepotrzebnej paniki w niewłaściwym momencie.
              </p>
              <p>
                Sekcja B (NHI Exposure) łączy się bezpośrednio z Art. 8 DORA, identyfikacją aktywów ICT: klucze API, konta serwisowe i tokeny OAuth funkcjonalnie są zasobami ICT wspierającymi konkretne procesy biznesowe, więc mieszczą się w zakresie tego obowiązku, nawet jeśli przepis nie posługuje się dosłownie terminem "non-human identity". Osobny materiał na tej stronie opisuje cztery udokumentowane incydenty NHI z lat 2023-2024 i to, czego realnie wymaga Art. 8 w tym zakresie.
              </p>
              <p>
                Sekcja C (memory poisoning) i sekcja E razem odpowiadają na pytanie, czy Twoje systemy AI wysokiego ryzyka realnie spełniają AI Act Art. 15 (dokładność, solidność, cyberbezpieczeństwo), nie tylko formalnie go cytują w dokumentacji. Nieprzestrzeganie tego wymogu podlega karze do 15 mln EUR lub 3% globalnego obrotu, nie do 35 mln EUR lub 7%, ta wyższa stawka dotyczy wyłącznie zakazanych praktyk z Art. 5 AI Act.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#171717] py-24 px-6 w-full scroll-mt-24 print:hidden">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-5 h-5 text-purple-400" strokeWidth={2} />
              <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase">Pytania i odpowiedzi</span>
            </div>
            <h2
              className="text-[28px] md:text-[36px] font-bold leading-tight tracking-tight mb-12"
              style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Najczęstsze pytania o MTTAV Exposure Score
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
        <section id="zrodla" className="bg-[#F6F2EA] py-16 px-6 w-full scroll-mt-24 print:hidden">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Źródła</span>
            <ul className="text-[13px] text-gray-500 leading-relaxed flex flex-col gap-1.5 list-disc pl-5">
              <li>Rozporządzenie (UE) 2022/2554 (DORA), Art. 5, 8, 19, 26-27, 50-52, EUR-Lex</li>
              <li>Rozporządzenie (UE) 2024/1689 (AI Act), Art. 5, 15, 50, 99, EUR-Lex</li>
              <li>Rozporządzenie (UE) 2026/1744 (Digital Omnibus), w mocy od 27.07.2026</li>
              <li>Dyrektywa (UE) 2022/2555 (NIS2), przepisy dot. raportowania incydentów i kar administracyjnych</li>
              <li>IBM, Cost of a Data Breach Report 2025 (241 dni: 181 do wykrycia + 60 do powstrzymania)</li>
              <li>CrowdStrike, Global Threat Report 2025 oraz Global Threat Report 2026 (eCrime breakout time)</li>
              <li>Ponemon Institute, 2026 State of SecOps Report (wolumen alertów, false positive rate)</li>
              <li>OWASP, Top 10 for Agentic Applications / Agentic Security Initiative, ASI06 Memory Poisoning</li>
              <li>Osobny materiał na tej stronie: cztery udokumentowane incydenty NHI (Okta, Cloudflare, Microsoft, kampania Snowflake / Banco Santander), z pełnym sourcingiem per incydent</li>
            </ul>
            <p className="text-[12px] text-gray-400 mt-6 leading-relaxed">
              Ten dokument to materiał edukacyjny i narzędzie samooceny, nie porada prawna, nie formalny audyt zgodności ani gwarancja skuteczności. MTTAV Exposure Score (wynik procentowy, progi pasm ekspozycji, dobór punktów kontrolnych w 6 sekcjach) to własna metodologia Qunigma. Regulacje i wytyczne wdrażające zmieniają się, przed podjęciem decyzji compliance zweryfikuj aktualny stan prawny z działem prawnym lub doradcą regulacyjnym. Jeśli znajdziesz nieścisłość, napisz do nas, poprawimy dokument.
            </p>
          </div>
        </section>

        {/* Kontakt, zawsze widoczny, także w wydruku */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100 print:border-t-2 print:border-black print:py-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-4 tracking-tight print:hidden">Chcesz omówić swój wynik z zespołem?</h2>
            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed print:hidden">
              Napisz do nas z wynikiem MTTAV Exposure Score, przejdziemy razem przez sekcje z największą ekspozycją i wskażemy, od czego realnie zacząć.
            </p>
            <a
              href="mailto:info@qunigma.ai"
              className="inline-block bg-[#6D28D9] text-white px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-[#5B21B6] transition-colors mb-8 print:hidden"
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
