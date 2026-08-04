'use client';

import { useMemo, useState } from 'react';
import { CheckCircle2, MinusCircle, XCircle, RotateCcw, Printer } from 'lucide-react';

type RawItem = [text: string, note: string];
type ChecklistItem = { id: string; text: string; note: string };
type Section = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: ChecklistItem[];
  bg: 'F6F2EA' | 'white';
};

function buildItems(sectionId: string, raw: RawItem[]): ChecklistItem[] {
  return raw.map(([text, note], idx) => ({ id: `${sectionId}-${idx}`, text, note }));
}

const sections: Section[] = [
  {
    id: 'sekcja-a',
    eyebrow: 'Sekcja A z 6 · Baseline MTTAV · 5 punktów',
    title: 'Obecny czas reakcji: baseline',
    intro:
      'MTTAV, Mean Time to Autonomous Validation, to czas od pojawienia się zagrożenia do jego autonomicznej walidacji przez system obronny, bez czekania na człowieka w pętli. Ta sekcja mapuje, gdzie realnie stoi Wasz SOC dziś, zanim przejdziemy do konkretnych kategorii ryzyka w kolejnych sekcjach.',
    bg: 'F6F2EA',
    items: buildItems('a', [
      [
        'SOC wykrywa aktywne zagrożenie związane z tożsamością maszynową (NHI) w czasie liczonym w sekundach lub pojedynczych minutach, nie w godzinach.',
        'Benchmark dla w pełni autonomicznej walidacji: poniżej 2 ms. CrowdStrike mierzy średni eCrime breakout time (czas od uzyskania przyczółka do ruchu bocznego) na 29 minut w 2025 roku, z rekordem 27 sekund (Global Threat Report 2025-2026).',
      ],
      [
        'Mean Time to Autonomous Validation (MTTAV) jest zdefiniowany, mierzony i raportowany jako konkretna metryka operacyjna SOC, nie pojęcie teoretyczne.',
        'Bez zmierzonej wartości bazowej trudno wykazać postęp albo uzasadnić przed zarządem inwestycję w automatyzację.',
      ],
      [
        'Wolumen alertów przetwarzanych dziennie przez SOC jest znany, udokumentowany i mieści się w realnej pojemności zespołu.',
        'Ponemon Institute, 2026 State of SecOps Report: przedsiębiorstwa raportują średnio 4 330 alertów dziennie, z czego realnie badanych jest tylko 37%.',
      ],
      [
        'Zdecydowana większość pierwszej selekcji alertów (triage) jest zautomatyzowana, nie wykonywana ręcznie przez analityków.',
        'Im wyższy odsetek manualnego triage, tym większe ryzyko, że krytyczny alert utknie w kolejce za setkami mniej istotnych.',
      ],
      [
        'Mean Time to Containment (czas od wykrycia do powstrzymania zagrożenia) jest mierzony i mieści się w oknie liczonym w godzinach, nie w dniach.',
        'Dłuższy MTTC wprost przekłada się na dłuższe okno eksfiltracji danych i wyższy koszt incydentu.',
      ],
    ]),
  },
  {
    id: 'sekcja-b',
    eyebrow: 'Sekcja B z 6 · NHI Exposure · 6 punktów',
    title: 'Ekspozycja przez tożsamości maszynowe (NHI)',
    intro:
      'Non-human identities, klucze API, konta serwisowe, tokeny OAuth, stanowią dziś większość tożsamości w typowej infrastrukturze bankowej i należą do najsłabiej nadzorowanych elementów powierzchni ataku. Zamiast opierać się na zagregowanym wskaźniku bez możliwej do zweryfikowania metodologii, poniższe pytania odwołują się do wzorców z czterech udokumentowanych incydentów: Okta (2023), Cloudflare (2023), Microsoft / Midnight Blizzard (2024) i kampanii Snowflake dotykającej m.in. Banco Santander (2024). We wszystkich czterech przypadkach źródłem kompromitacji było skradzione, nierotowane albo nadmiarowo uprawnione poświadczenie maszynowe, nie atak na człowieka. Pełny opis tych czterech incydentów, z sourcingiem, jest w osobnym materiale badawczym na tej stronie.',
    bg: 'white',
    items: buildItems('b', [
      [
        'Mamy pełny, aktualny inwentarz wszystkich service accounts, kluczy API i bot identities w organizacji.',
        'To dokładnie ten element, którego zabrakło w ataku na Microsoft: zapomniana, testowa aplikacja OAuth z nadmiarowymi uprawnieniami, nigdy niewygaszona.',
      ],
      [
        'Każda NHI ma przypisanego właściciela biznesowego (human owner), nie tylko techniczny wpis w systemie.',
        'Bez właściciela nikt nie podejmuje decyzji o wygaszeniu, rotacji ani ograniczeniu uprawnień danej tożsamości.',
      ],
      [
        'Monitorujemy anomalie w zachowaniu NHI w czasie rzeczywistym, nie tylko obecność ważnego poświadczenia.',
        'Skradzione, ale wciąż ważne poświadczenie przechodzi każdą standardową kontrolę autoryzacji. Jedynym sygnałem bywa nietypowy wzorzec użycia.',
      ],
      [
        'Rotacja poświadczeń NHI, w tym po incydentach u dostawców w naszym łańcuchu dostaw, jest zautomatyzowana.',
        'Cloudflare padło ofiarą ataku, bo rotacja poświadczeń po wcześniejszym incydencie u Okta nie objęła wszystkich powiązanych kont serwisowych.',
      ],
      [
        'Mamy zdolność wykrycia ruchu bocznego (lateral movement) prowadzonego przez skompromitowaną NHI.',
        'To właśnie ruch boczny z przejętego konta serwisowego, nie sam wstępny dostęp, był wspólnym mianownikiem wszystkich czterech incydentów.',
      ],
      [
        'Liczba NHI z uprawnieniami zapisu lub administracyjnymi w środowisku produkcyjnym jest znana i regularnie przeglądana.',
        '"Nie wiemy" przy tym pytaniu oznacza niezidentyfikowaną lukę, nie neutralny brak danych.',
      ],
    ]),
  },
  {
    id: 'sekcja-c',
    eyebrow: 'Sekcja C z 6 · Memory Poisoning · 5 punktów',
    title: 'Ryzyko zatrucia pamięci agentów AI (OWASP ASI06)',
    intro:
      'Memory poisoning (OWASP ASI06, z OWASP Top 10 dla aplikacji agentowych) to trwała korupcja pamięci agenta AI: złośliwy wpis przetrwa zamknięcie sesji i może wpływać na decyzje agenta tygodnie po infekcji. Badania cytowane przez OWASP notują wskaźniki skuteczności takich ataków rzędu 80-99% wobec niezabezpieczonych implementacji agentów LLM. AI Act Art. 15 wymaga od systemów wysokiego ryzyka "odpowiedniego poziomu dokładności, solidności i cyberbezpieczeństwa" przez cały cykl życia, w tym środków przeciwko zatruwaniu danych treningowych i zatruwaniu modelu.',
    bg: 'F6F2EA',
    items: buildItems('c', [
      [
        'Organizacja używa systemów AI/LLM z pamięcią trwałą (historia rozmów, pamięć agenta) w procesach produkcyjnych.',
        'To pytanie kwalifikujące: jeśli odpowiedź brzmi "Nie", reszta sekcji Was nie dotyczy.',
      ],
      [
        'Weryfikujemy integralność pamięci agentów AI, na przykład przez hashowanie i porównywanie zrzutów stanu.',
        'Bez tego mechanizmu nie da się odróżnić legalnej aktualizacji pamięci od wstrzykniętego, złośliwego wpisu.',
      ],
      [
        'Mamy detekcję manipulacji promptami (prompt injection) w systemach AI.',
        'Prompt injection jest zwykle wektorem wejścia dla memory poisoning, nie odrębnym, niezwiązanym ryzykiem.',
      ],
      [
        'Systemy AI używane w credit decisioning lub fraud detection mają udokumentowaną, testowaną odporność na memory tampering.',
        'To obszar, w którym pokrywają się AI Act Art. 15 i wewnętrzne wymogi modeli ryzyka kredytowego.',
      ],
      [
        'Potrafimy zweryfikować, że żaden model AI w produkcji nie przetwarza skażonych danych historycznych.',
        'Zatrute dane treningowe mogą wpływać na decyzje modelu długo po usunięciu pierwotnego źródła ataku.',
      ],
    ]),
  },
  {
    id: 'sekcja-d',
    eyebrow: 'Sekcja D z 6 · All Green Fraud · 5 punktów',
    title: 'Luka w wykrywaniu "All Green Fraud"',
    intro:
      '"All Green Fraud" opisuje wzorzec, w którym złośliwe oprogramowanie fałszuje logi systemowe: dashboardy pokazują status "wszystko OK", podczas gdy trwa aktywna eksfiltracja danych. Skala problemu jest realna niezależnie od nazwy zjawiska: IBM w Cost of a Data Breach Report 2025 podaje, że pełny cykl życia naruszenia, od włamania do jego identyfikacji i powstrzymania, trwa średnio 241 dni (181 dni do wykrycia + 60 dni do powstrzymania) - najniższy wynik od dziewięciu lat, a mimo to wciąż ponad osiem miesięcy.',
    bg: 'white',
    items: buildItems('d', [
      [
        'Mamy mechanizm weryfikacji integralności własnych logów bezpieczeństwa.',
        'Bez tego założenie "nasz dashboard pokazuje prawdę" jest po prostu niesprawdzone.',
      ],
      [
        'Logi systemowe są przechowywane w środowisku odizolowanym od sieci produkcyjnej.',
        'Logi trzymane w tym samym środowisku, które atakujący już kontroluje, są tak samo podatne na manipulację jak dashboard.',
      ],
      [
        'Możemy wykryć manipulację logami w czasie rzeczywistym, nie dopiero przy przeglądzie po incydencie.',
        'Wykrycie manipulacji tydzień po fakcie nie skraca okna eksfiltracji, tylko wydłuża śledztwo.',
      ],
      [
        'Nasz SIEM jest odporny na zatruwanie danymi wejściowymi (log poisoning).',
        'SIEM zasilany zatrutymi danymi wejściowymi generuje fałszywe poczucie bezpieczeństwa, nie ochronę.',
      ],
      [
        'Mamy niezależną ścieżkę weryfikacji alertów, poza głównym SIEM.',
        'Pojedynczy punkt prawdy o stanie bezpieczeństwa jest jednocześnie pojedynczym punktem awarii.',
      ],
    ]),
  },
  {
    id: 'sekcja-e',
    eyebrow: 'Sekcja E z 6 · Ekspozycja regulacyjna · 5 punktów',
    title: 'Ekspozycja regulacyjna: DORA i AI Act',
    intro:
      'DORA (Rozporządzenie UE 2022/2554) obowiązuje w pełni od 17 stycznia 2025. Termin obowiązków AI Act dla systemów wysokiego ryzyka z Annex III został przesunięty pakietem Digital Omnibus (Rozporządzenie UE 2026/1744, w mocy od 27 lipca 2026) na 2 grudnia 2027. Obowiązki przejrzystości i znakowania treści z Art. 50 AI Act nie zostały przesunięte i obowiązują od 2 sierpnia 2026.',
    bg: 'F6F2EA',
    items: buildItems('e', [
      [
        'Mamy wdrożone, zautomatyzowane mechanizmy szybkiego reagowania na zagrożenia ICT zgodnie z DORA Art. 5-16 (zarządzanie ryzykiem ICT).',
        'Sankcje: kary administracyjne nakładane przez krajowego nadzorcę na podstawie przepisów transponujących DORA, w tej witrynie przyjmujemy roboczo do 2% rocznego obrotu.',
      ],
      [
        'Osobista, niedelegowalna odpowiedzialność zarządu za ryzyko ICT (DORA Art. 5) jest formalnie udokumentowana, nie tylko zapisana w polityce na papierze.',
        'Art. 5 DORA czyni tę odpowiedzialność niedelegowalnym obowiązkiem organu zarządzającego: to odpowiedzialność osobista, nie tylko korporacyjna. Wysokość ewentualnej kary osobistej ustala krajowy nadzorca na podstawie przepisów transponujących Art. 50-52 DORA; sama DORA nie określa jednej zharmonizowanej kwoty w całej UE.',
      ],
      [
        'Jesteśmy gotowi na TLPT (Threat-Led Penetration Testing) według metodyki TIBER-EU, jeśli podlegamy temu obowiązkowi (DORA Art. 26-27).',
        'Ryzyko: niezgodność z wymogiem regulacyjnym dla podmiotów objętych obowiązkiem TLPT.',
      ],
      [
        'Nasze systemy AI wysokiego ryzyka spełniają wymóg "wysokiego poziomu solidności i weryfikowalnego cyberbezpieczeństwa" z AI Act Art. 15.',
        'Nieprzestrzeganie wymogów dla systemów wysokiego ryzyka (w tym Art. 15) podlega karze do 15 mln EUR lub 3% globalnego obrotu (Art. 99 ust. 4 AI Act). Wyższa stawka, do 35 mln EUR lub 7% obrotu, dotyczy wyłącznie zakazanych praktyk z Art. 5 AI Act, nie wymogów dla systemów wysokiego ryzyka.',
      ],
      [
        'Mamy zdolność zgłoszenia poważnego incydentu w terminie wymaganym przez NIS2.',
        'Kary krajowe do 10 mln EUR lub 2% globalnego obrotu (dla "ważnych podmiotów") plus ryzyko reputacyjne.',
      ],
    ]),
  },
  {
    id: 'sekcja-f',
    eyebrow: 'Sekcja F z 6 · SOC Capacity · 5 punktów',
    title: 'Pojemność SOC kontra wolumen zagrożeń',
    intro:
      'Zdolność operacyjna SOC ma sens tylko w zestawieniu z wolumenem zagrożeń, które musi obsłużyć. CrowdStrike w Global Threat Report 2025-2026 mierzy średni eCrime breakout time (czas od przyczółka do ruchu bocznego) na 29-48 minut, z rekordem 27 sekund. Ludzki zespół SOC, bez wsparcia automatyzacji, fizycznie nie jest w stanie odpowiedzieć w tym oknie na każdy alert z osobna.',
    bg: 'white',
    items: buildItems('f', [
      [
        'Liczba alertów dziennie mieści się w realnej pojemności zespołu SOC i nie przekracza progu, przy którym zaczyna się chroniczne przeciążenie.',
        'Orientacyjnie powyżej ok. 3 000 alertów dziennie większość zespołów wchodzi w terytorium "alert fatigue" (Ponemon, Vectra).',
      ],
      [
        'Odsetek alertów kończących się jako false positive jest niski i aktywnie redukowany, to nie jest "tło", z którym zespół się po prostu pogodził.',
        'Branżowo raportowany zakres to zwykle 40-50% (Ponemon 2026 State of SecOps, Vectra) - poziom uznawany za jeden z głównych driverów wypalenia analityków SOC.',
      ],
      [
        'Czas od wygenerowania alertu do eskalacji do CISO jest krótki, mierzony w minutach, nie w godzinach.',
        'Każda dodatkowa minuta w oknie eskalacji to czas, w którym atakujący porusza się swobodnie po sieci.',
      ],
      [
        'Liczba narzędzi security w naszym stacku jest zarządzalna i nie tworzy luk integracyjnych między systemami.',
        'Powyżej około 30 odrębnych narzędzi ryzyko luk integracyjnych i martwych pól rośnie nieproporcjonalnie do liczby narzędzi.',
      ],
      [
        'Znaczący odsetek zagrożeń jest neutralizowany automatycznie, bez konieczności human-in-the-loop na każdym kroku.',
        'Poniżej około 50% automatycznej neutralizacji SOC realnie staje się wąskim gardłem, nie linią obrony.',
      ],
    ]),
  },
];

type Score = 0 | 1 | 2;
const SCORE_OPTIONS: { value: Score; label: string; printLabel: string }[] = [
  { value: 0, label: 'Tak', printLabel: 'Tak' },
  { value: 1, label: 'Częściowo / Nie wiem', printLabel: 'Częściowo / Nie wiem' },
  { value: 2, label: 'Nie', printLabel: 'Nie' },
];

function bandFor(pct: number) {
  if (pct <= 20)
    return {
      label: 'Niska ekspozycja',
      color: 'emerald',
      desc: 'Utrzymaj obecny poziom kontroli. Powtórz tę samoocenę za 6 miesięcy.',
    };
  if (pct <= 50)
    return {
      label: 'Umiarkowana ekspozycja',
      color: 'amber',
      desc: 'Zidentyfikuj priorytety spośród zaznaczonych luk. Zaplanuj proof of concept w ciągu 90 dni.',
    };
  if (pct <= 75)
    return {
      label: 'Wysoka ekspozycja',
      color: 'rose',
      desc: 'Potrzebna pilna rozmowa z dostawcami active defense. Prawdopodobna luka względem oczekiwań DORA i AI Act.',
    };
  return {
    label: 'Krytyczna ekspozycja',
    color: 'red',
    desc: 'Potrzebna natychmiastowa akcja. Pamiętaj: odpowiedzialność zarządu za ryzyko ICT (DORA Art. 5) jest osobista i niedelegowalna, nie tylko korporacyjna.',
  };
}

const colorClasses: Record<string, { bg: string; text: string; border: string; barBg: string }> = {
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', barBg: 'bg-emerald-500' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', barBg: 'bg-amber-500' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', barBg: 'bg-rose-500' },
  red: { bg: 'bg-red-50', text: 'text-red-800', border: 'border-red-300', barBg: 'bg-red-700' },
};

export function ReadinessChecklist() {
  const [answers, setAnswers] = useState<Record<string, Score>>({});

  const allItems = useMemo(() => sections.flatMap((s) => s.items), []);
  const maxScore = allItems.length * 2;
  const currentScore = allItems.reduce((sum, item) => sum + (answers[item.id] ?? 0), 0);
  const answeredCount = allItems.filter((item) => answers[item.id] !== undefined).length;
  const pct = maxScore ? Math.round((currentScore / maxScore) * 100) : 0;
  const band = bandFor(pct);
  const colors = colorClasses[band.color];

  function setAnswer(id: string, value: Score) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function reset() {
    setAnswers({});
  }

  return (
    <>
      {sections.map((section) => {
        const sectionMax = section.items.length * 2;
        const sectionScore = section.items.reduce((sum, item) => sum + (answers[item.id] ?? 0), 0);
        const sectionPct = sectionMax ? Math.round((sectionScore / sectionMax) * 100) : 0;
        const isCream = section.bg === 'F6F2EA';
        return (
          <section
            key={section.id}
            id={section.id}
            className={`${isCream ? 'bg-[#F6F2EA]' : 'bg-white border-t border-gray-100'} py-24 px-6 w-full scroll-mt-24`}
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">{section.eyebrow}</span>
                <span className="text-[12px] font-semibold text-gray-500 tabular-nums">{sectionPct}% ekspozycji</span>
              </div>
              <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">{section.title}</h2>
              <p className="text-[16px] text-gray-600 leading-relaxed mb-10">{section.intro}</p>

              <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden divide-y divide-gray-100">
                {section.items.map((item) => {
                  const current = answers[item.id];
                  const currentOpt = SCORE_OPTIONS.find((o) => o.value === current);
                  return (
                    <div key={item.id} className="flex flex-col sm:flex-row sm:items-start gap-4 px-6 py-5 hover:bg-gray-50/60 transition-colors print:hover:bg-transparent">
                      <div className="flex-1">
                        <p className="text-[15px] text-gray-800 leading-relaxed">
                          {item.text}{' '}
                          <span className="hidden print:inline font-bold text-gray-900">
                            [Odpowiedź: {currentOpt ? currentOpt.printLabel : 'Nie oceniono'}]
                          </span>
                        </p>
                        <span className="inline-block mt-2 text-[12px] text-gray-500 leading-relaxed">{item.note}</span>
                      </div>
                      <div className="flex gap-2 shrink-0 print:hidden" role="group" aria-label={`Ocena: ${item.text}`}>
                        {SCORE_OPTIONS.map((opt) => {
                          const selected = current === opt.value;
                          const Icon = opt.value === 0 ? CheckCircle2 : opt.value === 1 ? MinusCircle : XCircle;
                          const activeColor = opt.value === 0 ? 'emerald' : opt.value === 1 ? 'amber' : 'rose';
                          return (
                            <button
                              key={opt.label}
                              type="button"
                              aria-pressed={selected}
                              onClick={() => setAnswer(item.id, opt.value)}
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium border transition-colors ${
                                selected
                                  ? activeColor === 'emerald'
                                    ? 'bg-emerald-100 border-emerald-300 text-emerald-700'
                                    : activeColor === 'amber'
                                    ? 'bg-amber-100 border-amber-300 text-amber-700'
                                    : 'bg-rose-100 border-rose-300 text-rose-700'
                                  : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
                              }`}
                            >
                              <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Wynik: MTTAV Exposure Score */}
      <section id="wynik" className="bg-[#171717] py-24 px-6 w-full scroll-mt-24 print:bg-white print:text-black print:py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
            <span className="text-[11px] text-purple-400 print:text-purple-700 font-bold tracking-[0.12em] uppercase">Twój MTTAV Exposure Score</span>
            <button
              type="button"
              onClick={() => window.print()}
              className="print:hidden inline-flex items-center gap-2 bg-[#6D28D9] text-white px-4 py-2 rounded-full text-[13px] font-semibold hover:bg-[#5B21B6] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" strokeWidth={2} />
              Zapisz jako PDF
            </button>
          </div>
          <h2 className="text-[26px] md:text-[32px] font-bold text-white print:text-black mb-6 tracking-tight">
            Odpowiedziano na {answeredCount} z {allItems.length} punktów
          </h2>

          <div className={`rounded-2xl border ${colors.border} ${colors.bg} p-8 mb-6 print:break-inside-avoid`}>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
              <div>
                <div className="text-[48px] font-bold tracking-tight text-gray-900 leading-none">{pct}%</div>
                <div className={`text-[13px] font-bold uppercase tracking-wide mt-2 ${colors.text}`}>{band.label}</div>
              </div>
              <div className="text-right text-[13px] text-gray-500">
                {currentScore} / {maxScore} pkt ekspozycji łącznie
              </div>
            </div>
            <div className="w-full h-2 rounded-full bg-white/60 overflow-hidden mb-4">
              <div className={`h-full ${colors.barBg} transition-all`} style={{ width: `${pct}%` }} />
            </div>
            <p className="text-[14px] text-gray-700 leading-relaxed">{band.desc}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 print:grid-cols-3">
            {sections.map((section) => {
              const sectionMax = section.items.length * 2;
              const sectionScore = section.items.reduce((sum, item) => sum + (answers[item.id] ?? 0), 0);
              const sectionPct = sectionMax ? Math.round((sectionScore / sectionMax) * 100) : 0;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/10 print:border-gray-300 bg-white/5 print:bg-white px-4 py-3 hover:bg-white/10 transition-colors"
                >
                  <span className="text-[13px] text-white/70 print:text-black">{section.title}</span>
                  <span className="text-[13px] font-bold text-white print:text-black tabular-nums shrink-0">{sectionPct}%</span>
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4 print:hidden">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 text-[13px] font-medium text-white/50 hover:text-white/80 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" strokeWidth={2} />
              Wyczyść odpowiedzi
            </button>
            <span className="text-[12px] text-white/30">Odpowiedzi są przechowywane wyłącznie lokalnie w Twojej przeglądarce, nie są nigdzie zapisywane ani wysyłane.</span>
          </div>

          <div className="hidden print:block text-[11px] text-gray-500 mt-4">
            Wydruk wygenerowany z qunigma.ai/ai-security-readiness-analysis. Odpowiedzi nie były nigdzie zapisywane ani wysyłane, dokument istnieje wyłącznie w tej przeglądarce.
          </div>
        </div>
      </section>
    </>
  );
}
