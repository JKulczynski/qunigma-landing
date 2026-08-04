import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import { Info, HelpCircle, ClipboardList, Scale, ListChecks } from 'lucide-react';
import { GapAnalysisChecklist } from './GapAnalysisChecklist';

export const metadata: Metadata = {
  title: 'DORA Gap Analysis: readiness self-assessment for banks | Qunigma',
  description: "44 checklist items across DORA's 5 pillars (Regulation (EU) 2022/2554), each linked to a specific article, with live scoring and guidance on interpreting your result. DORA has applied since 17.01.2025, check where your organization really stands.",
  alternates: {
    canonical: 'https://qunigma.ai/en/dora-gap-analysis',
    languages: {
      'en-US': 'https://qunigma.ai/en/dora-gap-analysis',
      'pl-PL': 'https://qunigma.ai/dora-gap-analysis',
    },
  },
};

const faq = [
  {
    q: 'How is this document different from a formal DORA compliance audit?',
    a: "This is a preliminary self-assessment tool, filled in by your own team, not by an independent auditor. It does not replace a formal internal audit, a review by an ICT auditor, or a supervisory inspection. Its job is narrower and more practical: to quickly show you where the gaps probably are, before you commission a costly full external audit, or before the supervisor asks first.",
  },
  {
    q: 'Who in the organization should fill out this checklist?',
    a: 'The natural owner is the compliance officer or CISO, but the result should reach the risk committee and the management body. DORA Art. 5 makes responsibility for ICT risk management a non-delegable duty of the management body, not just the security or compliance department, so treating this document as a purely technical matter misses the spirit of the regulation.',
  },
  {
    q: 'What if the result falls in the high-gap band?',
    a: "That is not a reason to panic, but it is a signal to prioritize, not to postpone. DORA has applied since 17 January 2025, so every day of delay is a day of real regulatory exposure, not a theoretical future risk. The first priority is usually to close out Pillar 1 (governance, because without an approved framework and clear board accountability it is hard to demonstrate compliance anywhere else) and Pillar 2 (the ability to report incidents within the 4-hour window, since that is one of the elements most often tested during supervisory reviews).",
  },
  {
    q: 'Does this document account for the latest regulatory changes, for example the Digital Omnibus?',
    a: 'The Digital Omnibus package (Regulation (EU) 2026/1744) primarily concerned the AI Act timeline, not DORA. DORA itself is refined mainly through regulatory technical standards (RTS) and EBA/ESA guidelines, for example Delegated Regulation 2025/301 on incident reporting, which we have factored into Pillar 2. This document reflects the state of knowledge as of August 2026, with a reference to a specific article for every item, so you can verify it independently on EUR-Lex.',
  },
  {
    q: 'How often should this self-assessment be repeated?',
    a: "At minimum once a year, at a cadence similar to DORA's own review requirements (Art. 6(5) for the ICT risk management framework, Art. 8(1) for the asset register). It is also worth repeating it after any material change: a new critical provider, a major ICT-related incident, a change to the ICT architecture, or the entry into force of a new RTS or EBA guideline clarifying any of the five pillars.",
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
              <span className="block text-[#F6F2EA]">DORA has applied since 17.01.2025.</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                Find out where you really stand.
              </span>
            </h1>
            <p className="text-[17px] text-white/70 max-w-[680px] mx-auto leading-relaxed mb-4">
              44 checklist items across the 5 pillars of Regulation (EU) 2022/2554, built directly from the text of the regulation, with a reference to a specific article for every item. Rate each item as Yes, Partially or No and see your result live, with no sign-up and nothing sent to any server.
            </p>
            <p className="text-[13px] text-white/40 max-w-[560px] mx-auto leading-relaxed">
              A working document for compliance, risk and security teams · sources last verified: August 2026
            </p>
          </div>
        </section>

        {/* Methodology note */}
        <section className="bg-white py-10 px-6 w-full border-b border-gray-100">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[14px] text-gray-600 leading-relaxed">
              <strong className="text-gray-900">A note on the number of items.</strong> This document contains <strong className="text-gray-900">44 real, verifiable items</strong>: 19 for Chapter II (ICT risk management), 8 for Chapter III (incident management), 7 for Chapter IV (resilience testing), 7 for Chapter V (third-party risk) and 3 for Chapter VI (information sharing). This distribution reflects the actual size of each DORA chapter, not an artificial split into equal blocks. We deliberately leave out articles that impose tasks on the European Supervisory Authorities (ESAs) or on the Lead Overseer with respect to critical providers, rather than on the financial entity itself (Art. 15, 16, 20-22, most of Art. 31-44), because they cannot meaningfully be turned into a bank self-assessment item. Every remaining item links to a specific paragraph that you can verify on EUR-Lex.
            </p>
          </div>
        </section>

        {/* Who it's for and how to use it */}
        <section id="intro" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Who it&apos;s for and why</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Not preparation for a deadline, but a check of where you stand today</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                The Digital Operational Resilience Act has applied to financial entities in the EU since <strong className="text-gray-900">17 January 2025</strong>. That is an important distinction from other regulations on this site: this is not a document that prepares you for a future deadline, it is a tool for checking your compliance with an obligation that already exists. KPMG and Deloitte research from 2025 and 2026 indicates that a significant share of EU financial entities still have not reached full compliance despite the deadline having passed, so the question &quot;where do we really stand&quot; is more relevant today than the question &quot;are we ready&quot;.
              </p>
              <p>
                This document is intended for three groups, usually working together: <strong className="text-gray-900">compliance officers and operational risk teams</strong>, who run the self-assessment day to day, <strong className="text-gray-900">board risk committees and supervisory boards</strong>, who receive the result, and <strong className="text-gray-900">CISOs and security teams</strong>, who own most of the technical items in Pillars 1 and 3. DORA makes responsibility for ICT risk a non-delegable duty of the management body (Art. 5), so treating this as purely an IT department task is itself a gap.
              </p>
              <p>
                Below are DORA&apos;s five pillars, each presented as a list of checklist items. For each item, rate your actual state as <strong className="text-gray-900">Yes</strong> (fully implemented and documented), <strong className="text-gray-900">Partially</strong> (a process exists but is not fully documented, tested, or consistently applied) or <strong className="text-gray-900">No</strong> (not in place). The result is calculated live in your browser, nothing is saved or sent anywhere. If you would rather work offline, copy the items into a spreadsheet, the structure of the questions stays the same.
              </p>
            </div>
          </div>
        </section>

        {/* How to interpret the result */}
        <section id="interpretation" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">How to read your result</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Three bands, one simple rule</h2>
            <div className="rounded-2xl border border-gray-200 overflow-hidden mb-6">
              {[
                { band: '80-100%', label: 'Low gap', desc: 'A good position. Maintain it with regular review, at least once a year, at the same cadence as the regulation itself.', color: 'text-emerald-700 bg-emerald-50' },
                { band: '50-79%', label: 'Medium gap', desc: 'The foundation is there, but discrete operational gaps remain, for example an untested exit strategy with a critical provider or an incomplete ICT asset register. A typical result for organizations that implemented DORA on time but have not closed every thread.', color: 'text-amber-700 bg-amber-50' },
                { band: '0-49%', label: 'High gap', desc: 'A significant share of obligations is not met or documented. Priority: Pillar 1 (governance, since without it it is hard to demonstrate compliance anywhere else) and Pillar 2 (the ability to meet the 4-hour window for the initial notification).', color: 'text-rose-700 bg-rose-50' },
              ].map((row) => (
                <div key={row.band} className="flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-5 border-b last:border-0 border-gray-100">
                  <span className={`inline-flex items-center justify-center text-[13px] font-bold px-3 py-1 rounded-full shrink-0 ${row.color}`}>{row.band} · {row.label}</span>
                  <p className="text-[14px] text-gray-600 leading-relaxed">{row.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              The percentage score is a simple sum of points (Yes = 2, Partially = 1, No = 0) divided by the maximum of 88 points. This is an indicative tool, not a formal risk assessment methodology: two organizations with an identical percentage score can have very different risk profiles if the gaps sit in different pillars. That is why, alongside the overall score, we also show a score per pillar.
            </p>
          </div>
        </section>

        {/* Table of contents / anchors to pillars */}
        <section className="bg-[#F6F2EA] py-8 px-6 w-full border-b border-gray-200">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
            {[
              { href: '#pillar-1', label: 'Pillar 1: ICT risk management' },
              { href: '#pillar-2', label: 'Pillar 2: Incidents' },
              { href: '#pillar-3', label: 'Pillar 3: Testing' },
              { href: '#pillar-4', label: 'Pillar 4: Third parties' },
              { href: '#pillar-5', label: 'Pillar 5: Information sharing' },
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

        {/* Interactive checklist with 5 pillars and live scoring */}
        <GapAnalysisChecklist />

        {/* Regulatory context */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ListChecks className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Worth knowing</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">How this document connects to the rest of the regulatory stack</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                AI systems used to assess ICT risk or to support decisions within Pillar 1 (for example anomaly scoring or alert prioritization) can simultaneously fall under the AI Act if they support credit scoring for clients or other Annex III use cases. The revised ECB Guide to Internal Models from July 2025 points in the same direction as DORA Art. 9: it is not enough for a model to perform well, it must be &quot;adequately explainable&quot;, properly explainable to an auditor and a supervisor. If this angle matters to you, a full Annex III readiness checklist is available separately.
              </p>
              <p>
                Pillar 1 of this document, specifically Art. 8 (identification of ICT assets), maps directly onto one of the least supervised areas of banking infrastructure: non-human identities (NHI), meaning API keys, service accounts and OAuth tokens. An asset register that does not cover this identity category does not meet the spirit of Art. 8, even if it formally exists. A separate piece on this site covers four documented NHI incidents from 2023-2024 and what Art. 8 actually requires in this area.
              </p>
              <p>
                Pillar 3 (testing) is where DORA connects most strongly to current security architecture: a well-designed TLPT scope under Art. 26-27 should cover attack paths through compromised non-human identities and through high-risk AI systems as part of critical infrastructure, not just classic human-targeted vectors.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#171717] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-5 h-5 text-purple-400" strokeWidth={2} />
              <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase">Questions and answers</span>
            </div>
            <h2
              className="text-[28px] md:text-[36px] font-bold leading-tight tracking-tight mb-12"
              style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Frequently asked questions from compliance and risk teams
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
        <section id="sources" className="bg-[#F6F2EA] py-16 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Sources</span>
            <ul className="text-[13px] text-gray-500 leading-relaxed flex flex-col gap-1.5 list-disc pl-5">
              <li>Regulation (EU) 2022/2554 (DORA), Art. 4-14, 17-19, 23-30, 45, EUR-Lex</li>
              <li>Delegated Regulation (EU) 2025/301 (RTS on the reporting of major ICT-related incidents), EUR-Lex</li>
              <li>EBA and the ESAs, joint regulatory technical standards and guidelines implementing DORA (register of information, incident classification, TLPT)</li>
              <li>ECB Banking Supervision, Revised Guide to Internal Models, 28.07.2025</li>
              <li>KPMG, PwC, Deloitte, public materials on the readiness of the EU financial sector for DORA, 2025-2026</li>
              <li>McKinsey, research on the readiness of European financial institutions for DORA ahead of the application deadline</li>
            </ul>
            <p className="text-[12px] text-gray-400 mt-6 leading-relaxed">
              This document is educational material and a self-assessment tool, not legal advice or a formal compliance audit. Regulations and implementing guidelines change, before making a compliance decision verify the current legal position with your legal department or a regulatory advisor. If you find an inaccuracy, let us know and we will correct the document.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-4 tracking-tight">Want a personalized look at your gaps?</h2>
            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
              Reach out, we will go through this document together with your compliance and risk team, and point out where the real priorities lie in your organization.
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
