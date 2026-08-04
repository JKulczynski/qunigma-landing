'use client';

import { useMemo, useState } from 'react';
import { CheckCircle2, MinusCircle, XCircle, RotateCcw } from 'lucide-react';

type RawItem = [text: string, ref: string];
type ChecklistItem = { id: string; text: string; ref: string };
type Pillar = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: ChecklistItem[];
  bg: 'F6F2EA' | 'white';
};

function buildItems(pillarId: string, raw: RawItem[]): ChecklistItem[] {
  return raw.map(([text, ref], idx) => ({ id: `${pillarId}-${idx}`, text, ref }));
}

const pillars: Pillar[] = [
  {
    id: 'filar-1',
    eyebrow: 'Filar 1 z 5 · Rozdział II · 19 punktów',
    title: 'ICT risk management, zarządzanie ryzykiem ICT',
    intro:
      'Największy i najbardziej fundamentalny rozdział DORA (Art. 5-16, dziesięć artykułów nakładających bezpośrednie obowiązki). Zaczyna się od zarządu: Art. 5 czyni odpowiedzialność za ryzyko ICT niedelegowalnym obowiązkiem organu zarządzającego, nie działu bezpieczeństwa. To najbardziej emocjonalnie realny punkt tego dokumentu, bo dotyczy osobistej, nie tylko korporacyjnej, odpowiedzialności.',
    bg: 'F6F2EA',
    items: buildItems('p1', [
      ['Zarząd formalnie zatwierdził wewnętrzne ramy zarządzania ryzykiem ICT i ponosi za nie ostateczną, niedelegowalną odpowiedzialność.', 'Art. 5 ust. 1-2'],
      ['Zarząd zatwierdził strategię cyfrowej odporności operacyjnej, w tym określił akceptowalny poziom tolerancji na ryzyko ICT.', 'Art. 5 ust. 2 lit. d'],
      ['Zarząd zatwierdza i okresowo przegląda plany ciągłości działania ICT oraz plany reagowania i odzyskiwania po incydencie.', 'Art. 5 ust. 2 lit. e'],
      ['Wyznaczona jest dedykowana rola lub przedstawiciel kadry kierowniczej wyższego szczebla odpowiedzialny za nadzór nad ustaleniami z dostawcami ICT stron trzecich.', 'Art. 5 ust. 3'],
      ['Członkowie zarządu przechodzą regularne szkolenia utrzymujące wiedzę wystarczającą do oceny ryzyka ICT.', 'Art. 5 ust. 4'],
      ['Organizacja posiada udokumentowane, spójne ramy zarządzania ryzykiem ICT, aktualizowane co najmniej raz w roku i po każdym istotnym incydencie.', 'Art. 6 ust. 1, 5'],
      ['Funkcja zarządzania ryzykiem ICT działa w modelu trzech linii obrony, z odpowiednią niezależnością od funkcji operacyjnych (nie dotyczy mikroprzedsiębiorstw).', 'Art. 6 ust. 4'],
      ['Wewnętrzny audyt ram zarządzania ryzykiem ICT jest wykonywany regularnie przez wykwalifikowanych, niezależnych audytorów, z formalnym procesem naprawy krytycznych ustaleń.', 'Art. 6 ust. 6-7'],
      ['Systemy, protokoły i narzędzia ICT są zaprojektowane zgodnie z aktualnym stanem wiedzy, odpowiednio odporne i redundantne wobec skali działalności.', 'Art. 7'],
      ['Prowadzony jest kompletny rejestr aktywów informacyjnych i aktywów ICT, z mapowaniem ich krytyczności, aktualizowany co najmniej raz w roku.', 'Art. 8 ust. 1, 4, 6'],
      ['Zmapowane są zależności między aktywami ICT a procesami wspieranymi przez dostawców trzecich, z ponowną oceną ryzyka po każdej istotnej zmianie infrastruktury.', 'Art. 8 ust. 3, 5'],
      ['Wdrożone są udokumentowane polityki bezpieczeństwa informacji obejmujące pełen cykl życia danych: w spoczynku, w użyciu i w tranzycie.', 'Art. 9 ust. 2-4'],
      ['Wdrożone są konkretne kontrole techniczne: segmentacja sieci z możliwością natychmiastowej izolacji, silne uwierzytelnianie, zarządzanie poprawkami i zmianą.', 'Art. 9 ust. 4'],
      ['Działa ciągłe monitorowanie i wykrywanie anomalii w systemach ICT, z wielowarstwowymi mechanizmami kontroli i automatycznym alarmowaniem.', 'Art. 10'],
      ['Plany ciągłości działania ICT są testowane co najmniej raz w roku, obejmując scenariusze cyberataków i przełączenie na infrastrukturę zapasową.', 'Art. 11 ust. 3'],
      ['Ustanowiona jest dedykowana funkcja zarządzania kryzysowego z jasnymi procedurami komunikacji wewnętrznej i zewnętrznej podczas aktywacji planu ciągłości działania (nie dotyczy mikroprzedsiębiorstw).', 'Art. 11 ust. 4'],
      ['Polityki backupu oraz procedury odtwarzania i przywracania danych są udokumentowane i regularnie testowane niezależnie od systemów podstawowych.', 'Art. 12'],
      ['Po poważnych incydentach przeprowadzane są formalne przeglądy powdrożeniowe, a wnioski są systematycznie włączane do procesu oceny ryzyka ICT.', 'Art. 13 ust. 1-3'],
      ['Obowiązkowe programy szkoleniowe z zakresu bezpieczeństwa ICT i cyfrowej odporności operacyjnej obejmują wszystkich pracowników oraz kadrę zarządzającą.', 'Art. 13 ust. 6'],
    ]),
  },
  {
    id: 'filar-2',
    eyebrow: 'Filar 2 z 5 · Rozdział III · 8 punktów',
    title: 'Zarządzanie incydentami ICT, klasyfikacja i raportowanie',
    intro:
      'Rozdział III liczy siedem artykułów, ale trzy z nich (Art. 20-22) to zadania nałożone na europejskie urzędy nadzoru, nie na sam podmiot finansowy, więc nie mają tu osobnych punktów. Zostają cztery artykuły z realnymi obowiązkami operacyjnymi, w tym twardy zegar raportowania, który w praktyce jest jednym z najczęściej niedoszacowanych elementów gotowości na DORA.',
    bg: 'white',
    items: buildItems('p2', [
      ['Ustanowiony jest udokumentowany proces zarządzania incydentami ICT obejmujący wczesne wskaźniki ostrzegawcze i procedury wykrywania.', 'Art. 17 ust. 1, 3'],
      ['Role i odpowiedzialności dla różnych typów incydentów są jasno przypisane, z procedurą identyfikacji przyczyn źródłowych każdego poważnego incydentu.', 'Art. 17 ust. 2-3'],
      ['Poważne incydenty są raportowane do kadry zarządzającej wyższego szczebla i zarządu, zgodnie z ustalonym planem komunikacji.', 'Art. 17 ust. 3 lit. d-e'],
      ['Zdefiniowane są kryteria klasyfikacji incydentów jako poważne: liczba klientów, czas trwania, zasięg geograficzny, utrata danych, krytyczność usługi, wpływ ekonomiczny.', 'Art. 18 ust. 1'],
      ['Organizacja potrafi ocenić istotność cyberzagrożenia na potrzeby dobrowolnego powiadomienia, jeszcze zanim dojdzie do faktycznego incydentu.', 'Art. 18 ust. 2, Art. 19 ust. 2'],
      ['Istnieje realna zdolność złożenia zgłoszenia wstępnego w ciągu 4 godzin od klasyfikacji incydentu jako poważny, nie później niż 24 godziny od powzięcia o nim wiadomości.', 'Art. 19 ust. 4, RTS 2025/301'],
      ['Istnieje realna zdolność złożenia raportu pośredniego w ciągu 72 godzin oraz raportu końcowego w ciągu miesiąca od zgłoszenia wstępnego.', 'Art. 19 ust. 4, RTS 2025/301'],
      ['Dla instytucji kredytowych, płatniczych i pieniądza elektronicznego: incydenty operacyjne i bezpieczeństwa związane z płatnościami są raportowane zgodnie z odrębnym reżimem, jeśli dotyczy.', 'Art. 23'],
    ]),
  },
  {
    id: 'filar-3',
    eyebrow: 'Filar 3 z 5 · Rozdział IV · 7 punktów',
    title: 'Testowanie cyfrowej odporności operacyjnej',
    intro:
      'Najkrótszy rozdział pod względem liczby artykułów (cztery), ale zawiera jeden z najbardziej rozpoznawalnych wymogów DORA: obowiązkowe testy penetracyjne oparte na analizie zagrożeń, TLPT, według metodyki TIBER-EU. Nie każda instytucja podlega TLPT, ale każda podlega corocznemu, szerszemu programowi testowania z Art. 25.',
    bg: 'F6F2EA',
    items: buildItems('p3', [
      ['Organizacja posiada proporcjonalny program testowania cyfrowej odporności operacyjnej obejmujący pełny cykl życia systemów i narzędzi ICT.', 'Art. 24'],
      ['Coroczne testy obejmują pełny zestaw metod: oceny podatności, skany, przeglądy kodu źródłowego tam gdzie to możliwe, testy scenariuszowe, testy wydajnościowe, testy end-to-end i testy penetracyjne.', 'Art. 25 ust. 1'],
      ['Dla funkcji krytycznych lub istotnych ocena podatności jest wykonywana przed wdrożeniem lub ponownym wdrożeniem aplikacji, infrastruktury i usług ICT.', 'Art. 25 ust. 2'],
      ['Organizacja oceniła, czy kwalifikuje się do obowiązkowych testów TLPT na podstawie kryteriów wpływu, znaczenia systemowego i profilu ryzyka ICT.', 'Art. 26 ust. 8'],
      ['Jeśli TLPT dotyczy organizacji: testy są wykonywane co najmniej raz na 3 lata na produkcyjnych systemach na żywo, obejmując krytyczne funkcje i istotnych dostawców trzecich.', 'Art. 26 ust. 1-3'],
      ['Rozważono udział w łączonym (pooled) testowaniu TLPT, jeśli indywidualny udział negatywnie wpłynąłby na jakość usług dla klientów.', 'Art. 26 ust. 4'],
      ['Testerzy wykorzystywani do TLPT (wewnętrzni lub zewnętrzni) spełniają wymogi akredytacji i niezależności, a dostawca threat intelligence jest zaangażowany zgodnie z metodyką.', 'Art. 27'],
    ]),
  },
  {
    id: 'filar-4',
    eyebrow: 'Filar 4 z 5 · Rozdział V, Sekcja I · 7 punktów',
    title: 'Zarządzanie ryzykiem ICT stron trzecich',
    intro:
      'Rozdział V ma formalnie siedemnaście artykułów, ale czternaście z nich (Art. 31-44) reguluje unijne Ramy Nadzoru nad krytycznymi dostawcami ICT, czyli uprawnienia Wiodącego Nadzorcy wobec samych dostawców, nie obowiązki podmiotu finansowego. Poniższe punkty opierają się na trzech artykułach Sekcji I (Art. 28-30), które faktycznie definiują, co musi zrobić bank, plus jeden punkt świadomości dotyczący Sekcji II.',
    bg: 'white',
    items: buildItems('p4', [
      ['Zarząd zatwierdził i regularnie przegląda dedykowaną strategię ryzyka ICT stron trzecich, stosowaną na poziomie jednostkowym, subskonsolidowanym i skonsolidowanym.', 'Art. 28 ust. 2'],
      ['Prowadzony i aktualizowany jest rejestr informacji o wszystkich ustaleniach umownych z dostawcami ICT, z rozróżnieniem funkcji krytycznych i pozostałych, raportowany do organu nadzoru.', 'Art. 28 ust. 3'],
      ['Przed zawarciem umowy z dostawcą ICT wykonywana jest ocena wspierania funkcji krytycznej, ryzyka koncentracji ICT i zgodności z warunkami nadzorczymi.', 'Art. 28 ust. 4'],
      ['Metodologia oceny ryzyka koncentracji uwzględnia wykonalność zastąpienia dostawcy i systemowy wpływ ewentualnej awarii lub zmiany dostawcy.', 'Art. 29'],
      ['Umowy z dostawcami ICT zawierają bazowe klauzule: lokalizację danych, prawo dostępu i odzyskania danych, poziomy usług, prawo wypowiedzenia z okresem przejściowym.', 'Art. 30 ust. 2'],
      ['Dla funkcji krytycznych lub istotnych umowy zawierają dodatkowo nieograniczone prawo dostępu, inspekcji i audytu, obowiązek współpracy przy TLPT oraz przetestowaną strategię wyjścia.', 'Art. 30 ust. 3'],
      ['Organizacja śledzi, czy którykolwiek z jej dostawców ICT może zostać wyznaczony jako krytyczny dostawca usług ICT objęty unijnymi Ramami Nadzoru, i monitoruje rozwój sytuacji.', 'Art. 31-44'],
    ]),
  },
  {
    id: 'filar-5',
    eyebrow: 'Filar 5 z 5 · Rozdział VI · 3 punkty',
    title: 'Wymiana informacji i analiz zagrożeń',
    intro:
      'Najmniejszy rozdział DORA, jeden artykuł, w całości dobrowolny. Nie ma tu twardego obowiązku, ale nadzorcy i branża traktują aktywny udział w wymianie informacji o zagrożeniach jako sygnał dojrzałości, nie jako pole do pominięcia.',
    bg: 'F6F2EA',
    items: buildItems('p5', [
      ['Organizacja rozważyła lub przystąpiła do dobrowolnego ustalenia dotyczącego wymiany informacji o cyberzagrożeniach w zaufanej społeczności podmiotów finansowych.', 'Art. 45 ust. 1'],
      ['Jeśli organizacja uczestniczy w takim ustaleniu, powiadomiła właściwy organ nadzoru o członkostwie oraz o jego ewentualnym zakończeniu.', 'Art. 45 ust. 3'],
      ['Ustalenie o wymianie informacji chroni wrażliwy charakter danych i jest zgodne z RODO oraz unijnym prawem konkurencji.', 'Art. 45 ust. 2'],
    ]),
  },
];

type Score = 0 | 1 | 2;
const SCORE_OPTIONS: { value: Score; label: string }[] = [
  { value: 2, label: 'Tak' },
  { value: 1, label: 'Częściowo' },
  { value: 0, label: 'Nie' },
];

function bandFor(pct: number) {
  if (pct >= 80) return { label: 'Niska luka', color: 'emerald', desc: 'Dobra pozycja. Utrzymaj przez regularny przegląd, co najmniej raz w roku.' };
  if (pct >= 50) return { label: 'Średnia luka', color: 'amber', desc: 'Fundament jest, ale zostały odrębne braki operacyjne wymagające planu naprawczego.' };
  return { label: 'Wysoka luka', color: 'rose', desc: 'Znacząca część obowiązków nie jest spełniona lub udokumentowana. Zacznij od Filaru 1 (governance) i Filaru 2 (raportowanie incydentów).' };
}

const colorClasses: Record<string, { bg: string; text: string; border: string; barBg: string }> = {
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', barBg: 'bg-emerald-500' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', barBg: 'bg-amber-500' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', barBg: 'bg-rose-500' },
};

export function GapAnalysisChecklist() {
  const [answers, setAnswers] = useState<Record<string, Score>>({});

  const allItems = useMemo(() => pillars.flatMap((p) => p.items), []);
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
      {pillars.map((pillar) => {
        const pillarMax = pillar.items.length * 2;
        const pillarScore = pillar.items.reduce((sum, item) => sum + (answers[item.id] ?? 0), 0);
        const isCream = pillar.bg === 'F6F2EA';
        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`${isCream ? 'bg-[#F6F2EA]' : 'bg-white border-t border-gray-100'} py-24 px-6 w-full scroll-mt-24`}
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">{pillar.eyebrow}</span>
                <span className="text-[12px] font-semibold text-gray-500 tabular-nums">{pillarScore} / {pillarMax} pkt</span>
              </div>
              <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">{pillar.title}</h2>
              <p className="text-[16px] text-gray-600 leading-relaxed mb-10">{pillar.intro}</p>

              <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden divide-y divide-gray-100">
                {pillar.items.map((item) => {
                  const current = answers[item.id];
                  return (
                    <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 hover:bg-gray-50/60 transition-colors">
                      <div className="flex-1">
                        <p className="text-[15px] text-gray-800 leading-relaxed">{item.text}</p>
                        <span className="inline-block mt-2 text-[11px] font-bold text-purple-600/80 tracking-wide uppercase">{item.ref}</span>
                      </div>
                      <div className="flex gap-2 shrink-0" role="group" aria-label={`Ocena: ${item.text}`}>
                        {SCORE_OPTIONS.map((opt) => {
                          const selected = current === opt.value;
                          const Icon = opt.value === 2 ? CheckCircle2 : opt.value === 1 ? MinusCircle : XCircle;
                          const activeColor = opt.value === 2 ? 'emerald' : opt.value === 1 ? 'amber' : 'rose';
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

      {/* Wynik */}
      <section id="wynik" className="bg-[#171717] py-24 px-6 w-full scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase mb-4 block">Twój wynik</span>
          <h2 className="text-[26px] md:text-[32px] font-bold text-white mb-6 tracking-tight">
            Odpowiedziano na {answeredCount} z {allItems.length} punktów
          </h2>

          <div className={`rounded-2xl border ${colors.border} ${colors.bg} p-8 mb-6`}>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
              <div>
                <div className="text-[48px] font-bold tracking-tight text-gray-900 leading-none">{pct}%</div>
                <div className={`text-[13px] font-bold uppercase tracking-wide mt-2 ${colors.text}`}>{band.label}</div>
              </div>
              <div className="text-right text-[13px] text-gray-500">
                {currentScore} / {maxScore} pkt łącznie
              </div>
            </div>
            <div className="w-full h-2 rounded-full bg-white/60 overflow-hidden mb-4">
              <div className={`h-full ${colors.barBg} transition-all`} style={{ width: `${pct}%` }} />
            </div>
            <p className="text-[14px] text-gray-700 leading-relaxed">{band.desc}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {pillars.map((pillar) => {
              const pillarMax = pillar.items.length * 2;
              const pillarScore = pillar.items.reduce((sum, item) => sum + (answers[item.id] ?? 0), 0);
              return (
                <a
                  key={pillar.id}
                  href={`#${pillar.id}`}
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors"
                >
                  <span className="text-[13px] text-white/70">{pillar.title}</span>
                  <span className="text-[13px] font-bold text-white tabular-nums shrink-0">{pillarScore}/{pillarMax}</span>
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4">
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
        </div>
      </section>
    </>
  );
}
