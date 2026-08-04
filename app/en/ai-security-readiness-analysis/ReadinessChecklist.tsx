'use client';

import { useMemo, useState } from 'react';
import { CheckCircle2, MinusCircle, XCircle, RotateCcw } from 'lucide-react';

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
    id: 'section-a',
    eyebrow: 'Section A of 6 · MTTAV Baseline · 5 items',
    title: 'Current response time: baseline',
    intro:
      'MTTAV, Mean Time To Active Vectorization, is the time from a threat appearing to its autonomous neutralization by a defensive system, without waiting for a human in the loop. This section maps where your SOC actually stands today, before we move to specific risk categories in the sections that follow.',
    bg: 'F6F2EA',
    items: buildItems('a', [
      [
        'The SOC detects an active threat involving a non-human identity (NHI) within seconds or single minutes, not hours.',
        'Benchmark for fully autonomous validation: under 2 ms. CrowdStrike measures the average eCrime breakout time (time from initial foothold to lateral movement) at 29 minutes in 2025, with a record of 27 seconds (Global Threat Report 2025-2026).',
      ],
      [
        'Mean Time To Active Vectorization (MTTAV) is defined, measured and reported as a concrete SOC operational metric, not a theoretical concept.',
        'Without a measured baseline it is hard to demonstrate progress, or to justify an automation investment to the board.',
      ],
      [
        'The volume of alerts processed daily by the SOC is known, documented, and fits within the team\'s real capacity.',
        'Ponemon Institute, 2026 State of SecOps Report: enterprises report an average of 4,330 alerts per day, of which only 37% are actually investigated.',
      ],
      [
        'The vast majority of initial alert triage is automated, not performed manually by analysts.',
        'The higher the share of manual triage, the greater the risk that a critical alert gets stuck in a queue behind hundreds of less important ones.',
      ],
      [
        'Mean Time to Containment (the time from detection to containing a threat) is measured and falls within a window of hours, not days.',
        'A longer MTTC translates directly into a longer data exfiltration window and a higher incident cost.',
      ],
    ]),
  },
  {
    id: 'section-b',
    eyebrow: 'Section B of 6 · NHI Exposure · 6 items',
    title: 'Exposure through non-human identities (NHI)',
    intro:
      'Non-human identities, meaning API keys, service accounts and OAuth tokens, now make up the majority of identities in a typical banking infrastructure and are among the least supervised parts of the attack surface. Rather than relying on an aggregated statistic without a verifiable methodology, the questions below draw on patterns from four documented incidents: Okta (2023), Cloudflare (2023), Microsoft / Midnight Blizzard (2024), and the Snowflake-linked campaign affecting Banco Santander among others (2024). In all four cases the source of compromise was a stolen, unrotated, or over-privileged machine credential, not an attack on a human. A full account of these four incidents, with sourcing, is available in a separate research piece on this site.',
    bg: 'white',
    items: buildItems('b', [
      [
        'We maintain a complete, up-to-date inventory of all service accounts, API keys and bot identities in the organization.',
        'This is exactly the element that was missing in the Microsoft attack: a forgotten, test OAuth application with excessive permissions that was never decommissioned.',
      ],
      [
        'Every NHI has an assigned business owner (a human owner), not just a technical entry in a system.',
        'Without an owner, no one decides whether to decommission, rotate, or restrict the permissions of a given identity.',
      ],
      [
        'We monitor anomalies in NHI behavior in real time, not just the presence of a valid credential.',
        'A stolen but still-valid credential passes every standard authorization check. The only signal is often an unusual usage pattern.',
      ],
      [
        'Rotation of NHI credentials, including after incidents at providers in our supply chain, is automated.',
        'Cloudflare was breached because credential rotation following the earlier Okta incident did not cover all related service accounts.',
      ],
      [
        'We are able to detect lateral movement carried out through a compromised NHI.',
        'It was lateral movement from a hijacked service account, not the initial access itself, that was the common denominator across all four incidents.',
      ],
      [
        'The number of NHIs with write or administrative permissions in the production environment is known and regularly reviewed.',
        '"We don\'t know" on this question means an unidentified gap, not a neutral absence of data.',
      ],
    ]),
  },
  {
    id: 'section-c',
    eyebrow: 'Section C of 6 · Memory Poisoning · 5 items',
    title: 'Risk of AI agent memory poisoning (OWASP ASI06)',
    intro:
      'Memory poisoning (OWASP ASI06, from the OWASP Top 10 for Agentic Applications) is a persistent corruption of an AI agent\'s memory: a malicious entry survives the end of a session and can influence the agent\'s decisions weeks after the infection. Research cited by OWASP reports success rates for such attacks in the range of 80-99% against unsecured LLM agent implementations. AI Act Art. 15 requires high-risk systems to maintain "an appropriate level of accuracy, robustness and cybersecurity" throughout their lifecycle, including measures against training data poisoning and model poisoning.',
    bg: 'F6F2EA',
    items: buildItems('c', [
      [
        'The organization uses AI/LLM systems with persistent memory (conversation history, agent memory) in production processes.',
        'This is a qualifying question: if the answer is "No", the rest of this section does not apply to you.',
      ],
      [
        'We verify the integrity of AI agent memory, for example through hashing and comparing state snapshots.',
        'Without this mechanism, it is impossible to distinguish a legitimate memory update from an injected, malicious entry.',
      ],
      [
        'We have detection for prompt injection in our AI systems.',
        'Prompt injection is usually the entry vector for memory poisoning, not a separate, unrelated risk.',
      ],
      [
        'AI systems used in credit decisioning or fraud detection have documented, tested resistance to memory tampering.',
        'This is an area where AI Act Art. 15 overlaps with internal credit risk model requirements.',
      ],
      [
        'We are able to verify that no AI model in production is processing contaminated historical data.',
        'Poisoned training data can influence model decisions long after the original attack source has been removed.',
      ],
    ]),
  },
  {
    id: 'section-d',
    eyebrow: 'Section D of 6 · All Green Fraud · 5 items',
    title: 'The "All Green Fraud" detection gap',
    intro:
      '"All Green Fraud" describes a pattern where malware falsifies system logs: dashboards show an "all OK" status while active data exfiltration is under way. The scale of the problem is real regardless of what you call it: IBM\'s Cost of a Data Breach Report 2025 puts the full lifecycle of a breach, from intrusion to identification and containment, at an average of 241 days (181 days to detect + 60 days to contain), the lowest figure in nine years, and still over eight months.',
    bg: 'white',
    items: buildItems('d', [
      [
        'We have a mechanism to verify the integrity of our own security logs.',
        'Without this, the assumption that "our dashboard shows the truth" is simply unverified.',
      ],
      [
        'System logs are stored in an environment isolated from the production network.',
        'Logs kept in the same environment an attacker already controls are just as vulnerable to manipulation as the dashboard.',
      ],
      [
        'We can detect log manipulation in real time, not only during a post-incident review.',
        'Detecting manipulation a week after the fact does not shorten the exfiltration window, it only lengthens the investigation.',
      ],
      [
        'Our SIEM is resistant to poisoned input data (log poisoning).',
        'A SIEM fed with poisoned input data generates a false sense of security, not protection.',
      ],
      [
        'We have an independent alert verification path, outside the main SIEM.',
        'A single source of truth for security status is, at the same time, a single point of failure.',
      ],
    ]),
  },
  {
    id: 'section-e',
    eyebrow: 'Section E of 6 · Regulatory Exposure · 5 items',
    title: 'Regulatory exposure: DORA and the AI Act',
    intro:
      'DORA (Regulation (EU) 2022/2554) has applied in full since 17 January 2025. The deadline for AI Act obligations for high-risk systems under Annex III was pushed back by the Digital Omnibus package (Regulation (EU) 2026/1744, in force since 27 July 2026) to 2 December 2027. The transparency and content-labeling obligations under AI Act Art. 50 were not postponed and have applied since 2 August 2026.',
    bg: 'F6F2EA',
    items: buildItems('e', [
      [
        'We have implemented automated, rapid-response mechanisms for ICT threats in line with DORA Art. 5-16 (ICT risk management).',
        'Penalties: administrative fines imposed by the national supervisor under the provisions transposing DORA; on this site we use a working figure of up to 2% of annual turnover.',
      ],
      [
        'The management body\'s personal, non-delegable responsibility for ICT risk (DORA Art. 5) is formally documented, not just written into a policy on paper.',
        'DORA Art. 5 makes this responsibility a non-delegable duty of the management body: it is personal liability, not only corporate. The amount of any personal fine is set by the national supervisor under the provisions transposing DORA Art. 50-52; DORA itself does not set a single harmonized amount across the EU.',
      ],
      [
        'We are ready for TLPT (Threat-Led Penetration Testing) under the TIBER-EU methodology, if this obligation applies to us (DORA Art. 26-27).',
        'Risk: non-compliance with a regulatory requirement for entities subject to the TLPT obligation.',
      ],
      [
        'Our high-risk AI systems meet the "high level of robustness and verifiable cybersecurity" requirement of AI Act Art. 15.',
        'Non-compliance with the requirements for high-risk systems (including Art. 15) is subject to a fine of up to EUR 15 million or 3% of global turnover (AI Act Art. 99(4)). The higher tier, up to EUR 35 million or 7% of turnover, applies only to prohibited practices under AI Act Art. 5, not to the requirements for high-risk systems.',
      ],
      [
        'We are able to report a major incident within the timeframe required by NIS2.',
        'National fines of up to EUR 10 million or 2% of global turnover (for "important entities"), plus reputational risk.',
      ],
    ]),
  },
  {
    id: 'section-f',
    eyebrow: 'Section F of 6 · SOC Capacity · 5 items',
    title: 'SOC capacity versus threat volume',
    intro:
      'The operational capacity of a SOC only makes sense measured against the volume of threats it has to handle. CrowdStrike\'s Global Threat Report 2025-2026 measures the average eCrime breakout time (time from foothold to lateral movement) at 29-48 minutes, with a record of 27 seconds. A human SOC team, without automation support, is physically unable to respond within that window to every alert individually.',
    bg: 'white',
    items: buildItems('f', [
      [
        'The number of alerts per day fits within the real capacity of the SOC team and does not exceed the threshold where chronic overload begins.',
        'As a rough guide, above around 3,000 alerts per day most teams enter "alert fatigue" territory (Ponemon, Vectra).',
      ],
      [
        'The share of alerts ending up as false positives is low and actively being reduced, it is not "background noise" the team has simply come to accept.',
        'The industry-reported range is typically 40-50% (Ponemon 2026 State of SecOps, Vectra), a level considered one of the main drivers of SOC analyst burnout.',
      ],
      [
        'The time from an alert being generated to escalation to the CISO is short, measured in minutes, not hours.',
        'Every extra minute in the escalation window is time an attacker moves freely across the network.',
      ],
      [
        'The number of security tools in our stack is manageable and does not create integration gaps between systems.',
        'Above around 30 separate tools, the risk of integration gaps and blind spots grows disproportionately to the number of tools.',
      ],
      [
        'A significant share of threats is neutralized automatically, without requiring a human in the loop at every step.',
        'Below around 50% automatic neutralization, the SOC effectively becomes a bottleneck, not a line of defense.',
      ],
    ]),
  },
];

type Score = 0 | 1 | 2;
const SCORE_OPTIONS: { value: Score; label: string; printLabel: string }[] = [
  { value: 0, label: 'Yes', printLabel: 'Yes' },
  { value: 1, label: 'Partially / Not sure', printLabel: 'Partially / Not sure' },
  { value: 2, label: 'No', printLabel: 'No' },
];

function bandFor(pct: number) {
  if (pct <= 20)
    return {
      label: 'Low exposure',
      color: 'emerald',
      desc: 'Maintain your current level of controls. Repeat this self-assessment in 6 months.',
    };
  if (pct <= 50)
    return {
      label: 'Moderate exposure',
      color: 'amber',
      desc: 'Identify priorities among the flagged gaps. Plan a proof of concept within 90 days.',
    };
  if (pct <= 75)
    return {
      label: 'High exposure',
      color: 'rose',
      desc: 'An urgent conversation with active defense vendors is needed. A gap against DORA and AI Act expectations is likely.',
    };
  return {
    label: 'Critical exposure',
    color: 'red',
    desc: 'Immediate action is needed. Remember: the management body\'s responsibility for ICT risk (DORA Art. 5) is personal and non-delegable, not only corporate.',
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
                <span className="text-[12px] font-semibold text-gray-500 tabular-nums">{sectionPct}% exposure</span>
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
                            [Answer: {currentOpt ? currentOpt.printLabel : 'Not rated'}]
                          </span>
                        </p>
                        <span className="inline-block mt-2 text-[12px] text-gray-500 leading-relaxed">{item.note}</span>
                      </div>
                      <div className="flex gap-2 shrink-0 print:hidden" role="group" aria-label={`Rating: ${item.text}`}>
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

      {/* Result: MTTAV Exposure Score */}
      <section id="result" className="bg-[#171717] py-24 px-6 w-full scroll-mt-24 print:bg-white print:text-black print:py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
            <span className="text-[11px] text-purple-400 print:text-purple-700 font-bold tracking-[0.12em] uppercase">Your MTTAV Exposure Score</span>
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

          <div className={`rounded-2xl border ${colors.border} ${colors.bg} p-8 mb-6 print:break-inside-avoid`}>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
              <div>
                <div className="text-[48px] font-bold tracking-tight text-gray-900 leading-none">{pct}%</div>
                <div className={`text-[13px] font-bold uppercase tracking-wide mt-2 ${colors.text}`}>{band.label}</div>
              </div>
              <div className="text-right text-[13px] text-gray-500">
                {currentScore} / {maxScore} exposure pts total
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
              Clear answers
            </button>
            <span className="text-[12px] text-white/30">Your answers are stored only locally in your browser, they are never saved or sent anywhere.</span>
          </div>

          <div className="hidden print:block text-[11px] text-gray-500 mt-4">
            Printed from qunigma.ai/en/ai-security-readiness-analysis. Answers were never saved or sent anywhere, this document exists only in this browser.
          </div>
        </div>
      </section>
    </>
  );
}
