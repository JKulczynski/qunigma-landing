'use client';

import { useMemo, useState } from 'react';
import { CheckCircle2, MinusCircle, XCircle, RotateCcw, Printer } from 'lucide-react';

type Score = 0 | 1 | 2;
const SCORE_OPTIONS: { value: Score; label: string }[] = [
  { value: 2, label: 'Tak' },
  { value: 1, label: 'Częściowo' },
  { value: 0, label: 'Nie' },
];

type Item = { id: string; text: string; ref: string };

const items: Item[] = [
  {
    id: 'q1',
    text: 'Masz dostęp API do obecnego SIEM/SOAR i możesz go udostępnić na potrzeby integracji.',
    ref: 'Platforma: REST API + Webhook, integracja z dowolnym SIEM',
  },
  {
    id: 'q2',
    text: 'Twój SIEM to Splunk, Microsoft Sentinel lub IBM QRadar (gotowy konektor) albo jesteś otwarty na integrację przez standardowe REST API.',
    ref: 'Platforma: pre-built connectors Splunk, Sentinel, QRadar',
  },
  {
    id: 'q3',
    text: 'Wiesz, czy Twoja infrastruktura docelowa dla wdrożenia będzie on-premise, czy w chmurze EU-sovereign.',
    ref: 'Platforma: on-premise lub EU-sovereign cloud',
  },
  {
    id: 'q4',
    text: 'Prowadzisz dziś jakikolwiek rejestr tożsamości maszynowych (klucze API, service accounts, tokeny OAuth), nawet niepełny.',
    ref: 'DORA Art. 8, NHI Security',
  },
  {
    id: 'q5',
    text: 'Możesz zapewnić dostęp do logów ruchu sieciowego na poziomie pakietu dla środowiska objętego pilotażem.',
    ref: 'Platforma: MTTAV Engine, detekcja na poziomie pakietu',
  },
  {
    id: 'q6',
    text: 'Masz wyznaczonego inżyniera lub zespół bezpieczeństwa dostępny na czas onboardingu, orientacyjnie 8 dni roboczych.',
    ref: 'Platforma: timeline wdrożenia, dzień 1-8',
  },
  {
    id: 'q7',
    text: 'Masz w produkcji lub pilotażu systemy LLM/AI, których pamięć kontekstowa wymagałaby ochrony przed Memory Poisoning.',
    ref: 'Platforma: Memory Guard, AI Act Art. 15',
  },
  {
    id: 'q8',
    text: 'Twoja organizacja podlega DORA i potrzebuje zdolności raportowania incydentów w oknie 4h / 24h / 72h.',
    ref: 'DORA Art. 19, compliance: reporting packs',
  },
];

function bandFor(pct: number) {
  if (pct >= 80) {
    return {
      label: 'Niska złożoność integracji',
      color: 'emerald',
      desc: 'Większość technicznych warunków wstępnych jest po Twojej stronie spełniona. Rozmowa techniczna może od razu przejść do konkretów wdrożenia.',
    };
  }
  if (pct >= 50) {
    return {
      label: 'Średnia złożoność integracji',
      color: 'amber',
      desc: 'Fundament jest, ale zostały luki do domknięcia przed pierwszym dniem wdrożenia, na przykład dostęp API do SIEM albo rejestr tożsamości maszynowych.',
    };
  }
  return {
    label: 'Wysoka złożoność integracji',
    color: 'rose',
    desc: 'Znacząca część warunków wstępnych nie jest jeszcze spełniona. To nie przekreśla integracji, ale rozmowę warto zacząć od strony architektury, nie od terminu wdrożenia.',
  };
}

const colorClasses: Record<string, { bg: string; text: string; border: string; barBg: string }> = {
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', barBg: 'bg-emerald-500' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', barBg: 'bg-amber-500' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', barBg: 'bg-rose-500' },
};

export function IntegrationReadinessChecklist() {
  const [answers, setAnswers] = useState<Record<string, Score>>({});

  const maxScore = items.length * 2;
  const currentScore = items.reduce((sum, item) => sum + (answers[item.id] ?? 0), 0);
  const answeredCount = items.filter((item) => answers[item.id] !== undefined).length;
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
      <section id="checklist" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Checklist gotowości integracyjnej · 8 punktów</span>
            <button
              type="button"
              onClick={() => window.print()}
              className="print:hidden inline-flex items-center gap-2 text-[13px] font-medium text-purple-700 border border-purple-300 bg-white px-4 py-2 rounded-full hover:border-purple-500 hover:bg-purple-50 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" strokeWidth={2} />
              Zapisz jako PDF
            </button>
          </div>
          <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">Osiem pytań o Twoją stronę integracji</h2>
          <p className="text-[16px] text-gray-600 leading-relaxed mb-10">
            Odpowiedz Tak, Częściowo albo Nie na każde pytanie. Wynik to orientacyjny odczyt złożoności integracji, nie formalna wycena wdrożenia. Nic nie jest zapisywane ani wysyłane, wszystko liczy się lokalnie w Twojej przeglądarce.
          </p>

          <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden divide-y divide-gray-100">
            {items.map((item) => {
              const current = answers[item.id];
              const selectedLabel = SCORE_OPTIONS.find((o) => o.value === current)?.label;
              return (
                <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 hover:bg-gray-50/60 transition-colors">
                  <div className="flex-1">
                    <p className="text-[15px] text-gray-800 leading-relaxed">{item.text}</p>
                    <span className="inline-block mt-2 text-[11px] font-bold text-purple-600/80 tracking-wide uppercase">{item.ref}</span>
                    <span className="hidden print:inline mt-2 ml-3 text-[13px] font-bold text-gray-900">
                      {selectedLabel ? `Odpowiedź: ${selectedLabel}` : 'Odpowiedź: brak'}
                    </span>
                  </div>
                  <div className="print:hidden flex gap-2 shrink-0" role="group" aria-label={`Ocena: ${item.text}`}>
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

      {/* Wynik */}
      <section id="wynik-integracja" className="bg-[#171717] py-24 px-6 w-full scroll-mt-24 print:bg-white print:text-black">
        <div className="max-w-3xl mx-auto">
          <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase mb-4 block print:text-purple-700">Twój wynik</span>
          <h2 className="text-[26px] md:text-[32px] font-bold text-white mb-6 tracking-tight print:text-black">
            Odpowiedziano na {answeredCount} z {items.length} punktów
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

          <div className="print:hidden flex flex-wrap items-center gap-4">
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
