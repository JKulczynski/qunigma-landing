import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import { Info, HelpCircle, ClipboardList, Scale, ListChecks } from 'lucide-react';
import { ReadinessChecklist } from './ReadinessChecklist';

export const metadata: Metadata = {
  title: 'AI Security Readiness Analysis: MTTAV Exposure Score for Banks | Qunigma',
  description: 'A self-assessment of your MTTAV Exposure Score across 6 sections: response-time baseline, NHI exposure, memory poisoning, All Green Fraud, DORA/AI Act regulatory exposure, and SOC capacity. Live scoring, no sign-up, ready to print for tomorrow\'s board meeting.',
  alternates: {
    canonical: 'https://qunigma.ai/en/ai-security-readiness-analysis',
    languages: {
      'en-US': 'https://qunigma.ai/en/ai-security-readiness-analysis',
      'pl-PL': 'https://qunigma.ai/ai-security-readiness-analysis',
    },
  },
};

const faq = [
  {
    q: 'How is the MTTAV Exposure Score different from a formal security audit?',
    a: 'This is a preliminary self-assessment tool, filled in by your own team in about fifteen minutes, not by an independent auditor. It does not replace penetration testing, formal red teaming, or a review by an external security auditor. Its job is narrower: to quickly show you which of the six areas probably carry the greatest exposure, before you commission a costly full audit, or before a regulator or an attacker asks the question first.',
  },
  {
    q: 'Why doesn\'t the NHI section include the "machine identities outnumber human ones 80 to 1" statistic?',
    a: 'Because that specific, very widely cited figure is quoted with different context in different reports, and we did not want to build a diagnostic on a statistic we cannot verify directly and unambiguously for this specific use case. Instead of an aggregate, Section B draws on four fully documented, named incidents (Okta, Cloudflare, Microsoft, the Snowflake campaign affecting Banco Santander) and on CrowdStrike\'s measured eCrime breakout time metric. Every claim in this document links either to a specific legal provision or to a named source.',
  },
  {
    q: 'Where does the percentage score come from and what does it actually mean?',
    a: 'You rate each item as Yes (0 exposure points), Partially / Not sure (1 point) or No (2 points). The percentage score is the sum of exposure points divided by the maximum achievable across all 31 checklist items. This is the inverse of "readiness" logic: a high percentage score means high risk exposure, not high readiness. Alongside the overall score we also show a score per section, because two organizations with an identical overall score can have a completely different risk profile.',
  },
  {
    q: 'Did the AI Act really push its deadline to 2 December 2027?',
    a: 'Yes, for the obligations concerning high-risk systems under Annex III. The Digital Omnibus package (Regulation (EU) 2026/1744, in force since 27 July 2026) postponed that specific deadline. It did not, however, postpone the transparency and content-labeling obligations under AI Act Art. 50, which have applied since 2 August 2026 regardless of whether a system is high-risk. It is worth keeping these two deadlines separate, because they are easy to confuse.',
  },
  {
    q: 'What if the result falls in the high or critical exposure band?',
    a: 'That is a signal to prioritize, not a reason to panic and not a reason to postpone action. Start with the section that has the highest percentage score, since that is where the gap is largest relative to what you yourselves marked as the actual state. If the overall score exceeds 50%, it is worth discussing it with your risk team and, if you would like, with us.',
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
            <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.15] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Your MTTAV Exposure Score,</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                ready for tomorrow&apos;s board meeting.
              </span>
            </h1>
            <p className="text-[17px] text-white/70 max-w-[680px] mx-auto leading-relaxed mb-4">
              31 checklist items across 6 sections: response-time baseline, exposure through non-human identities (NHI), AI agent memory-poisoning risk, the &quot;All Green Fraud&quot; detection gap, DORA and AI Act regulatory exposure, and SOC capacity. Rate each item as Yes, Partially/Not sure or No and see your result live, with no sign-up and nothing sent to any server.
            </p>
            <p className="text-[13px] text-white/40 max-w-[560px] mx-auto leading-relaxed">
              Time to complete: 12-15 minutes · sources last verified: August 2026
            </p>
          </div>
        </section>

        {/* Methodology note */}
        <section className="bg-white py-10 px-6 w-full border-b border-gray-100 print:hidden">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[14px] text-gray-600 leading-relaxed">
              <strong className="text-gray-900">A note on the numbers in this document.</strong> We deliberately avoid a single, aggregated statistic without a verifiable methodology (for example the industry-popular &quot;NHIs outnumber humans 80 to 1&quot;). Wherever we cite a figure from an external report, it is attributed to a named source (IBM, CrowdStrike, Ponemon, OWASP) in the text of that section. The MTTAV Exposure Score itself (the percentage score, the Low/Moderate/High/Critical exposure bands) is Qunigma&apos;s own assessment methodology, not a quote from an external study: treat it as an indicative tool for internal conversation, not a formal regulatory risk metric.
            </p>
          </div>
        </section>

        {/* Who it's for and how to use it */}
        <section id="intro" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24 print:hidden">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Who it&apos;s for and why</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Not another audit, just a quick map of your exposure</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                This document is intended for <strong className="text-gray-900">CISOs and SOC teams</strong>, who live day to day with the alert volume described in Section F, for <strong className="text-gray-900">compliance officers and risk teams</strong>, who own Section E, and for the <strong className="text-gray-900">board and risk committee</strong>, who ultimately receive the result. DORA Art. 5 makes responsibility for ICT risk a non-delegable duty of the management body, so treating this as purely a technical task is itself a gap.
              </p>
              <p>
                For each item, rate your actual state as <strong className="text-gray-900">Yes</strong> (fully implemented), <strong className="text-gray-900">Partially / Not sure</strong> (a process partly exists or you are not certain) or <strong className="text-gray-900">No</strong> (not in place). The result is calculated live in your browser, nothing is saved or sent to any server. When you are done, you can save your result as a PDF using the button in the results section; the printout shows your answers as a clean, presentation-ready document.
              </p>
            </div>
          </div>
        </section>

        {/* How to interpret the result */}
        <section id="interpretation" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24 print:hidden">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">How to read your result</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Four exposure bands, one simple rule</h2>
            <div className="rounded-2xl border border-gray-200 overflow-hidden mb-6">
              {[
                { band: '0-20%', label: 'Low exposure', desc: 'Maintain your current level of controls. Repeat this self-assessment in 6 months.', color: 'text-emerald-700 bg-emerald-50' },
                { band: '21-50%', label: 'Moderate exposure', desc: 'Identify priorities among the flagged gaps. Plan a proof of concept within 90 days.', color: 'text-amber-700 bg-amber-50' },
                { band: '51-75%', label: 'High exposure', desc: 'An urgent conversation with active defense vendors is needed. A gap against DORA and AI Act expectations is likely.', color: 'text-rose-700 bg-rose-50' },
                { band: '76-100%', label: 'Critical exposure', desc: 'Immediate action is needed. The management body\'s responsibility for ICT risk (DORA Art. 5) is personal and non-delegable.', color: 'text-red-800 bg-red-50' },
              ].map((row) => (
                <div key={row.band} className="flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-5 border-b last:border-0 border-gray-100">
                  <span className={`inline-flex items-center justify-center text-[13px] font-bold px-3 py-1 rounded-full shrink-0 ${row.color}`}>{row.band} · {row.label}</span>
                  <p className="text-[14px] text-gray-600 leading-relaxed">{row.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              The percentage score is the sum of exposure points (No = 2, Partially/Not sure = 1, Yes = 0) divided by the maximum achievable across all 31 items. This is an indicative tool, not a formal regulatory risk assessment methodology: two organizations with an identical percentage score can have a very different risk profile if the gaps sit in different sections. That is why, alongside the overall score, we also show a score per section.
            </p>
          </div>
        </section>

        {/* Table of contents / anchors to sections */}
        <section className="bg-[#F6F2EA] py-8 px-6 w-full border-b border-gray-200 print:hidden">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
            {[
              { href: '#section-a', label: 'A: MTTAV Baseline' },
              { href: '#section-b', label: 'B: NHI Exposure' },
              { href: '#section-c', label: 'C: Memory Poisoning' },
              { href: '#section-d', label: 'D: All Green Fraud' },
              { href: '#section-e', label: 'E: Regulatory Exposure' },
              { href: '#section-f', label: 'F: SOC Capacity' },
              { href: '#result', label: 'Your result' },
              { href: '#faq', label: 'FAQ' },
              { href: '#sources', label: 'Sources' },
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

        {/* Interactive checklist with 6 sections and live scoring */}
        <ReadinessChecklist />

        {/* Regulatory context */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100 print:hidden">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ListChecks className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Worth knowing</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">How this document connects to the rest of the regulatory stack</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                Section E deliberately separates two different AI Act deadlines that are easy to confuse: the obligations for high-risk systems under Annex III (pushed back to 2 December 2027 by the Digital Omnibus package, Regulation (EU) 2026/1744) and the transparency and content-labeling obligations under AI Act Art. 50, which were not postponed and have applied since 2 August 2026. Treating both as a single deadline leads either to a false sense of security or to unnecessary panic at the wrong moment.
              </p>
              <p>
                Section B (NHI Exposure) connects directly to DORA Art. 8, the identification of ICT assets: API keys, service accounts and OAuth tokens are functionally ICT assets supporting specific business processes, so they fall within the scope of this obligation, even though the article does not literally use the term &quot;non-human identity&quot;. A separate piece on this site covers the four documented NHI incidents from 2023-2024 and what Art. 8 actually requires in this area.
              </p>
              <p>
                Section C (memory poisoning) and Section E together answer the question of whether your high-risk AI systems genuinely meet AI Act Art. 15 (accuracy, robustness, cybersecurity), not just formally cite it in documentation. Non-compliance with this requirement is subject to a fine of up to EUR 15 million or 3% of global turnover, not up to EUR 35 million or 7%, that higher tier applies only to prohibited practices under AI Act Art. 5.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#171717] py-24 px-6 w-full scroll-mt-24 print:hidden">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-5 h-5 text-purple-400" strokeWidth={2} />
              <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase">Questions and answers</span>
            </div>
            <h2
              className="text-[28px] md:text-[36px] font-bold leading-tight tracking-tight mb-12"
              style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Frequently asked questions about the MTTAV Exposure Score
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

        {/* Sources */}
        <section id="sources" className="bg-[#F6F2EA] py-16 px-6 w-full scroll-mt-24 print:hidden">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Sources</span>
            <ul className="text-[13px] text-gray-500 leading-relaxed flex flex-col gap-1.5 list-disc pl-5">
              <li>Regulation (EU) 2022/2554 (DORA), Art. 5, 8, 19, 26-27, 50-52, EUR-Lex</li>
              <li>Regulation (EU) 2024/1689 (AI Act), Art. 5, 15, 50, 99, EUR-Lex</li>
              <li>Regulation (EU) 2026/1744 (Digital Omnibus), in force since 27.07.2026</li>
              <li>Directive (EU) 2022/2555 (NIS2), provisions on incident reporting and administrative penalties</li>
              <li>IBM, Cost of a Data Breach Report 2025 (241 days: 181 to detect + 60 to contain)</li>
              <li>CrowdStrike, Global Threat Report 2025 and Global Threat Report 2026 (eCrime breakout time)</li>
              <li>Ponemon Institute, 2026 State of SecOps Report (alert volume, false positive rate)</li>
              <li>OWASP, Top 10 for Agentic Applications / Agentic Security Initiative, ASI06 Memory Poisoning</li>
              <li>A separate piece on this site: four documented NHI incidents (Okta, Cloudflare, Microsoft, the Snowflake / Banco Santander campaign), with full sourcing per incident</li>
            </ul>
            <p className="text-[12px] text-gray-400 mt-6 leading-relaxed">
              This document is educational material and a self-assessment tool, not legal advice, a formal compliance audit, or a guarantee of effectiveness. The MTTAV Exposure Score (the percentage score, the exposure band thresholds, and the selection of checklist items across the 6 sections) is Qunigma&apos;s own methodology. Regulations and implementing guidance change, before making a compliance decision verify the current legal position with your legal department or a regulatory advisor. If you find an inaccuracy, let us know and we will correct the document.
            </p>
          </div>
        </section>

        {/* Contact, always visible, including in print */}
        <section className="bg-white py-16 px-6 w-full border-t border-gray-100 print:border-t-2 print:border-black print:py-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[20px] font-bold text-gray-900 mb-4 tracking-tight">Qunigma</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[14px] text-gray-600">
              <a href="mailto:info@qunigma.ai" className="text-purple-700 hover:underline font-medium">
                info@qunigma.ai
              </a>
              <span className="hidden sm:inline text-gray-300">·</span>
              <a
                href="https://www.linkedin.com/in/peter-mankowski-18065619/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:underline"
              >
                Peter Mankowski, LinkedIn
              </a>
              <span className="hidden sm:inline text-gray-300">·</span>
              <a
                href="https://www.linkedin.com/in/paulcebo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:underline"
              >
                Paul Cebo, LinkedIn
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
