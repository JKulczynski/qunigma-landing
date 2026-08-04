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
    id: 'pillar-1',
    eyebrow: 'Pillar 1 of 5 · Chapter II · 19 items',
    title: 'ICT risk management',
    intro:
      'The largest and most foundational chapter of DORA (Art. 5-16, ten articles imposing direct obligations). It starts with the management body: Art. 5 makes responsibility for ICT risk a non-delegable duty of the management body, not the security department. This is the most emotionally real item in this document, because it concerns personal, not just corporate, liability.',
    bg: 'F6F2EA',
    items: buildItems('p1', [
      ['The management body has formally approved the internal ICT risk management framework and bears final, non-delegable responsibility for it.', 'Art. 5(1)-(2)'],
      ['The management body has approved a digital operational resilience strategy, including a defined acceptable level of ICT risk tolerance.', 'Art. 5(2)(d)'],
      ['The management body approves and periodically reviews ICT business continuity plans and incident response and recovery plans.', 'Art. 5(2)(e)'],
      ['A dedicated role or senior management representative is designated to oversee arrangements with ICT third-party service providers.', 'Art. 5(3)'],
      ['Members of the management body undergo regular training to maintain knowledge sufficient to assess ICT risk.', 'Art. 5(4)'],
      ['The organization has a documented, sound and comprehensive ICT risk management framework, updated at least once a year and after every major ICT-related incident.', 'Art. 6(1), (5)'],
      ['The ICT risk management function operates on a three-lines-of-defense model, with appropriate independence from operational functions (does not apply to microenterprises).', 'Art. 6(4)'],
      ['The internal audit of the ICT risk management framework is performed regularly by qualified, independent auditors, with a formal process for remediating critical findings.', 'Art. 6(6)-(7)'],
      ['ICT systems, protocols and tools are designed in line with the latest technological developments, and are appropriately resilient and redundant relative to the scale of the business.', 'Art. 7'],
      ['A complete inventory of information assets and ICT assets is maintained, with criticality mapping, updated at least once a year.', 'Art. 8(1), (4), (6)'],
      ['Dependencies between ICT assets and processes supported by third-party providers are mapped, with risk reassessed after every material infrastructure change.', 'Art. 8(3), (5)'],
      ['Documented information security policies are in place covering the full data lifecycle: at rest, in use and in transit.', 'Art. 9(2)-(4)'],
      ['Specific technical controls are implemented: network segmentation with the ability to isolate immediately, strong authentication, and patch and change management.', 'Art. 9(4)'],
      ['Continuous monitoring and anomaly detection is active across ICT systems, with multi-layered control mechanisms and automated alerting.', 'Art. 10'],
      ['ICT business continuity plans are tested at least once a year, covering cyberattack scenarios and switch-over to backup infrastructure.', 'Art. 11(3)'],
      ['A dedicated crisis management function is established, with clear internal and external communication procedures for when the business continuity plan is activated (does not apply to microenterprises).', 'Art. 11(4)'],
      ['Backup policies and data restoration and recovery procedures are documented and regularly tested independently of the primary systems.', 'Art. 12'],
      ['Formal post-incident reviews are carried out after major ICT-related incidents, and lessons learned are systematically fed back into the ICT risk assessment process.', 'Art. 13(1)-(3)'],
      ['Mandatory ICT security and digital operational resilience training programs cover all staff and senior management.', 'Art. 13(6)'],
    ]),
  },
  {
    id: 'pillar-2',
    eyebrow: 'Pillar 2 of 5 · Chapter III · 8 items',
    title: 'ICT incident management, classification and reporting',
    intro:
      'Chapter III has seven articles, but three of them (Art. 20-22) impose tasks on the European Supervisory Authorities, not on the financial entity itself, so they do not get separate items here. That leaves four articles with real operational obligations, including a hard reporting clock that in practice is one of the most underestimated elements of DORA readiness.',
    bg: 'white',
    items: buildItems('p2', [
      ['A documented ICT-related incident management process is established, covering early warning indicators and detection procedures.', 'Art. 17(1), (3)'],
      ['Roles and responsibilities for different incident types are clearly assigned, with a procedure for identifying the root cause of every major ICT-related incident.', 'Art. 17(2)-(3)'],
      ['Major ICT-related incidents are reported to senior management and the management body, in line with an established communication plan.', 'Art. 17(3)(d)-(e)'],
      ['Criteria for classifying ICT-related incidents as major are defined: number of clients affected, duration, geographical spread, data losses, criticality of the services affected, and economic impact.', 'Art. 18(1)'],
      ['The organization is able to assess the materiality of a cyber threat for the purpose of voluntary notification, even before an actual incident occurs.', 'Art. 18(2), Art. 19(2)'],
      ['There is a real capability to submit an initial notification within 4 hours of classifying an incident as major, and no later than 24 hours after becoming aware of it.', 'Art. 19(4), RTS 2025/301'],
      ['There is a real capability to submit an intermediate report within 72 hours and a final report within one month of the initial notification.', 'Art. 19(4), RTS 2025/301'],
      ['For credit, payment and e-money institutions: payment-related operational and security incidents are reported under a separate regime, where applicable.', 'Art. 23'],
    ]),
  },
  {
    id: 'pillar-3',
    eyebrow: 'Pillar 3 of 5 · Chapter IV · 7 items',
    title: 'Digital operational resilience testing',
    intro:
      "The shortest chapter by number of articles (four), but it contains one of DORA's most recognizable requirements: mandatory threat-led penetration testing (TLPT), following the TIBER-EU methodology. Not every institution is subject to TLPT, but every institution is subject to the broader annual testing program under Art. 25.",
    bg: 'F6F2EA',
    items: buildItems('p3', [
      ['The organization has a proportionate digital operational resilience testing program covering the full lifecycle of ICT systems and tools.', 'Art. 24'],
      ['Annual testing covers the full set of methods: vulnerability assessments, scans, source code reviews where feasible, scenario-based tests, performance tests, end-to-end tests and penetration tests.', 'Art. 25(1)'],
      ['For critical or important functions, a vulnerability assessment is carried out before any deployment or redeployment of applications, infrastructure and ICT services.', 'Art. 25(2)'],
      ['The organization has assessed whether it qualifies for mandatory TLPT based on impact, systemic importance and ICT risk profile criteria.', 'Art. 26(8)'],
      ['Where TLPT applies to the organization, testing is performed at least every 3 years on live production systems, covering critical or important functions and relevant third-party providers.', 'Art. 26(1)-(3)'],
      ['Participation in pooled TLPT has been considered where individual participation would negatively affect the quality of services to clients.', 'Art. 26(4)'],
      ['Testers used for TLPT (internal or external) meet accreditation and independence requirements, and a threat intelligence provider is engaged in line with the methodology.', 'Art. 27'],
    ]),
  },
  {
    id: 'pillar-4',
    eyebrow: 'Pillar 4 of 5 · Chapter V, Section I · 7 items',
    title: 'Managing ICT third-party risk',
    intro:
      'Chapter V formally has seventeen articles, but fourteen of them (Art. 31-44) govern the EU Oversight Framework for critical ICT third-party providers, meaning the powers of the Lead Overseer over the providers themselves, not obligations on the financial entity. The items below are based on the three articles of Section I (Art. 28-30), which actually define what a bank must do, plus one awareness item relating to Section II.',
    bg: 'white',
    items: buildItems('p4', [
      ['The management body has approved and regularly reviews a dedicated ICT third-party risk strategy, applied at individual, sub-consolidated and consolidated level.', 'Art. 28(2)'],
      ['A register of information on all contractual arrangements with ICT providers is maintained and kept up to date, distinguishing critical or important functions from others, and reported to the competent authority.', 'Art. 28(3)'],
      ['Before entering into a contract with an ICT provider, an assessment is carried out of whether it supports a critical or important function, of ICT concentration risk, and of compliance with supervisory conditions.', 'Art. 28(4)'],
      ['The concentration risk assessment methodology takes into account the feasibility of replacing the provider and the systemic impact of a potential provider failure or switch.', 'Art. 29'],
      ['Contracts with ICT providers contain the baseline clauses: data location, the right to access and recover data, service levels, and termination rights with a transition period.', 'Art. 30(2)'],
      ['For critical or important functions, contracts additionally include unrestricted access, inspection and audit rights, an obligation to cooperate on TLPT, and a tested exit strategy.', 'Art. 30(3)'],
      ['The organization tracks whether any of its ICT providers may be designated as a critical ICT third-party provider under the EU Oversight Framework, and monitors developments.', 'Art. 31-44'],
    ]),
  },
  {
    id: 'pillar-5',
    eyebrow: 'Pillar 5 of 5 · Chapter VI · 3 items',
    title: 'Information and threat intelligence sharing',
    intro:
      'The smallest chapter of DORA, a single article, entirely voluntary. There is no hard obligation here, but supervisors and the industry treat active participation in threat information sharing as a sign of maturity, not something to skip.',
    bg: 'F6F2EA',
    items: buildItems('p5', [
      ['The organization has considered or entered into a voluntary arrangement for exchanging cyber threat information within a trusted community of financial entities.', 'Art. 45(1)'],
      ['Where the organization participates in such an arrangement, it has notified the competent authority of its membership, and of any termination of it.', 'Art. 45(3)'],
      ['The information-sharing arrangement protects the sensitive nature of the data and complies with GDPR and EU competition law.', 'Art. 45(2)'],
    ]),
  },
];

type Score = 0 | 1 | 2;
const SCORE_OPTIONS: { value: Score; label: string }[] = [
  { value: 2, label: 'Yes' },
  { value: 1, label: 'Partially' },
  { value: 0, label: 'No' },
];

function bandFor(pct: number) {
  if (pct >= 80) return { label: 'Low gap', color: 'emerald', desc: 'Good position. Maintain it through regular review, at least once a year.' };
  if (pct >= 50) return { label: 'Medium gap', color: 'amber', desc: 'The foundation is there, but discrete operational gaps remain that need a remediation plan.' };
  return { label: 'High gap', color: 'rose', desc: 'A significant share of obligations is not met or documented. Start with Pillar 1 (governance) and Pillar 2 (incident reporting).' };
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
                <span className="text-[12px] font-semibold text-gray-500 tabular-nums">{pillarScore} / {pillarMax} pts</span>
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
                        <span className="hidden print:inline-block mt-2 ml-2 text-[11px] font-bold text-gray-700">
                          [Answer: {current !== undefined ? SCORE_OPTIONS.find((o) => o.value === current)?.label : 'Not rated'}]
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
        );
      })}

      {/* Result */}
      <section id="result" className="bg-[#171717] py-24 px-6 w-full scroll-mt-24 print:bg-white print:text-black print:py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
            <span className="text-[11px] text-purple-400 print:text-purple-700 font-bold tracking-[0.12em] uppercase">Your result</span>
            <button
              type="button"
              onClick={() => window.print()}
              className="print:hidden inline-flex items-center gap-2 bg-[#6D28D9] text-white px-4 py-2 rounded-full text-[13px] font-semibold hover:bg-[#5B21B6] transition-colors"
            >
              Save as PDF
            </button>
          </div>
          <h2 className="text-[26px] md:text-[32px] font-bold text-white print:text-black mb-6 tracking-tight">
            Answered {answeredCount} of {allItems.length} items
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

          <div className="flex flex-wrap items-center gap-4 print:hidden">
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
