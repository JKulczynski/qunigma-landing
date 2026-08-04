'use client';

import { useMemo, useState } from 'react';
import { CheckCircle2, MinusCircle, XCircle, RotateCcw } from 'lucide-react';

type Score = 0 | 1 | 2;
const SCORE_OPTIONS: { value: Score; label: string }[] = [
  { value: 2, label: 'Yes' },
  { value: 1, label: 'Partially' },
  { value: 0, label: 'No' },
];

type Item = { id: string; text: string; ref: string };

const items: Item[] = [
  {
    id: 'q1',
    text: 'You have API access to your current SIEM/SOAR and can make it available for integration purposes.',
    ref: 'Platform: REST API + Webhook, integration with any SIEM',
  },
  {
    id: 'q2',
    text: 'Your SIEM is Splunk, Microsoft Sentinel or IBM QRadar (pre-built connector), or you are open to integrating through a standard REST API.',
    ref: 'Platform: pre-built connectors for Splunk, Sentinel, QRadar',
  },
  {
    id: 'q3',
    text: 'You know whether your target infrastructure for deployment will be on-premise or EU-sovereign cloud.',
    ref: 'Platform: on-premise or EU-sovereign cloud',
  },
  {
    id: 'q4',
    text: 'You currently maintain some register of machine identities (API keys, service accounts, OAuth tokens), even a partial one.',
    ref: 'DORA Art. 8, NHI Security',
  },
  {
    id: 'q5',
    text: 'You can provide access to packet-level network traffic logs for the environment covered by the pilot.',
    ref: 'Platform: MTTAV Engine, packet-level detection',
  },
  {
    id: 'q6',
    text: 'You have a designated engineer or security team available for the onboarding period, roughly 8 business days.',
    ref: 'Platform: deployment timeline, day 1-8',
  },
  {
    id: 'q7',
    text: 'You have LLM/AI systems in production or pilot whose context memory would need protection against Memory Poisoning.',
    ref: 'Platform: Memory Guard, AI Act Art. 15',
  },
  {
    id: 'q8',
    text: 'Your organization is subject to DORA and needs the capability to report incidents within the 4h / 24h / 72h window.',
    ref: 'DORA Art. 19, compliance: reporting packs',
  },
];

function bandFor(pct: number) {
  if (pct >= 80) {
    return {
      label: 'Low integration complexity',
      color: 'emerald',
      desc: 'Most of the technical prerequisites are already met on your side. The technical conversation can move straight to deployment specifics.',
    };
  }
  if (pct >= 50) {
    return {
      label: 'Medium integration complexity',
      color: 'amber',
      desc: 'The foundation is there, but some gaps remain to close before day one of deployment, for example API access to your SIEM or a machine identity register.',
    };
  }
  return {
    label: 'High integration complexity',
    color: 'rose',
    desc: 'A significant share of the prerequisites is not yet met. That does not rule out integration, but the conversation is better started from the architecture side, not from the deployment date.',
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
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Integration readiness checklist · 8 items</span>
            <button
              type="button"
              onClick={() => window.print()}
              className="print:hidden inline-flex items-center gap-2 text-[13px] font-medium text-purple-700 border border-purple-300 bg-white px-4 py-2 rounded-full hover:border-purple-500 hover:bg-purple-50 transition-colors"
            >
              Save as PDF
            </button>
          </div>
          <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">Eight questions about your side of the integration</h2>
          <p className="text-[16px] text-gray-600 leading-relaxed mb-10">
            Answer Yes, Partially or No to each question. The result is an indicative read on integration complexity, not a formal deployment quote. Nothing is saved or sent anywhere, everything is calculated locally in your browser.
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
                      {selectedLabel ? `Answer: ${selectedLabel}` : 'Answer: none'}
                    </span>
                  </div>
                  <div className="print:hidden flex gap-2 shrink-0" role="group" aria-label={`Rating: ${item.text}`}>
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

      {/* Result */}
      <section id="result-integration" className="bg-[#171717] py-24 px-6 w-full scroll-mt-24 print:bg-white print:text-black">
        <div className="max-w-3xl mx-auto">
          <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase mb-4 block print:text-purple-700">Your result</span>
          <h2 className="text-[26px] md:text-[32px] font-bold text-white mb-6 tracking-tight print:text-black">
            Answered {answeredCount} of {items.length} items
          </h2>

          <div className={`rounded-2xl border ${colors.border} ${colors.bg} p-8 mb-6`}>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
              <div>
                <div className="text-[48px] font-bold tracking-tight text-gray-900 leading-none">{pct}%</div>
                <div className={`text-[13px] font-bold uppercase tracking-wide mt-2 ${colors.text}`}>{band.label}</div>
              </div>
              <div className="text-right text-[13px] text-gray-500">
                {currentScore} / {maxScore} pts total
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
              Clear answers
            </button>
            <span className="text-[12px] text-white/30">Your answers are stored only locally in your browser, they are never saved or sent anywhere.</span>
          </div>
        </div>
      </section>
    </>
  );
}
