import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import { CheckSquare, Calendar, HelpCircle, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Act Annex III: Readiness Checklist for Tier-1 Banks | Qunigma',
  description: 'Readiness checklist for AI Act requirements for high-risk systems in banking: Art. 9 (risk management), Art. 15 (accuracy, robustness and cybersecurity) and Art. 17 (quality management system), with the updated timeline after the Digital Omnibus.',
  alternates: {
    canonical: 'https://qunigma.ai/en/resources/ai-act-annex-iii-checklist',
    languages: {
      'en-US': 'https://qunigma.ai/en/resources/ai-act-annex-iii-checklist',
      'pl-PL': 'https://qunigma.ai/wiedza/ai-act-annex-iii-checklist',
    },
  },
};

type Item = { text: string; ref: string };

const article9: Item[] = [
  { text: 'Risk management system established, implemented, documented and maintained for each high-risk AI system.', ref: 'Art. 9(1)' },
  { text: "The process operates as a continuous, iterative cycle with regular review and updating throughout the system's lifecycle.", ref: 'Art. 9(2)' },
  { text: "Known and reasonably foreseeable risks to health, safety and fundamental rights identified and analysed in light of the system's intended purpose.", ref: 'Art. 9(2)(a)' },
  { text: 'Risks arising from intended use and from reasonably foreseeable misuse estimated and evaluated.', ref: 'Art. 9(2)(b)' },
  { text: 'Built-in mechanism for evaluating new risks based on data from the post-market monitoring system.', ref: 'Art. 9(2)(c)' },
  { text: 'Appropriate, targeted risk management measures implemented for each identified risk.', ref: 'Art. 9(2)(d)' },
  { text: 'Residual risk eliminated or reduced through design and development, where technically feasible.', ref: 'Art. 9(5)(a)' },
  { text: 'For risks that cannot be eliminated through design, adequate mitigation and control measures implemented.', ref: 'Art. 9(5)(b)' },
  { text: "Information provided in accordance with Art. 13 (instructions for use) and operator training, taking into account their knowledge, experience and the expected context of use.", ref: 'Art. 9(5)(c)' },
  { text: "Testing carried out at every relevant stage of the system's development process.", ref: 'Art. 9(6)' },
  { text: 'Final testing carried out before the system is placed on the market, against predetermined metrics and probabilistic thresholds appropriate to the intended purpose.', ref: 'Art. 9(8)' },
  { text: 'Documented decision on any use of real-world testing.', ref: 'Art. 9(7), Art. 60' },
  { text: "Potential adverse impact of the system on persons under 18 and other vulnerable groups among the bank's customers analysed and documented.", ref: 'Art. 9(9)' },
  { text: "Verified whether the bank's existing operational or ICT risk management system (e.g. the framework adopted for DORA) can integrate the Art. 9 requirements instead of creating a parallel, duplicative process.", ref: 'Art. 9(10)' },
];

const article15: Item[] = [
  { text: "System designed to achieve an appropriate level of accuracy, robustness and cybersecurity, and to perform consistently in these respects throughout its lifecycle.", ref: 'Art. 15(1)' },
  { text: "Emerging benchmarks and measurement methodologies relevant to the system's category of application monitored.", ref: 'Art. 15(2)' },
  { text: 'Levels of accuracy and relevant accuracy metrics declared in the accompanying instructions for use.', ref: 'Art. 15(3)' },
  { text: "Technical measures implemented for resilience against errors, faults and inconsistencies arising within the system itself or its operating environment.", ref: 'Art. 15(4)' },
  { text: 'Organisational measures implemented to support system resilience, complementary to technical measures.', ref: 'Art. 15(4)' },
  { text: 'Technical redundancy solutions considered and, where appropriate, implemented, including backup or fail-safe plans.', ref: 'Art. 15(4)' },
  { text: "For systems that continue to learn after being placed on the market: measures implemented to minimise the risk of feedback loops and biases affecting subsequent decisions.", ref: 'Art. 15(4)' },
  { text: "Measures implemented for resilience against attempts by unauthorised third parties to alter the system's use, outputs or performance.", ref: 'Art. 15(5)' },
  { text: 'Specific technical measures implemented against data poisoning.', ref: 'Art. 15(5)' },
  { text: 'Specific technical measures implemented against model poisoning.', ref: 'Art. 15(5)' },
  { text: 'Specific technical measures implemented against adversarial examples and evasion attacks.', ref: 'Art. 15(5)' },
  { text: 'Specific technical measures implemented against confidentiality attacks, including model exfiltration and training-data inference.', ref: 'Art. 15(5)' },
];

const article17: Item[] = [
  { text: 'Documented regulatory compliance strategy, together with a procedure for managing system modifications.', ref: 'Art. 17(1)(a)' },
  { text: 'Design, design control and design verification techniques and procedures established.', ref: 'Art. 17(1)(b)' },
  { text: 'Techniques, procedures and systematic actions for quality assurance of system development established.', ref: 'Art. 17(1)(c)' },
  { text: 'Procedures for examination, testing and validation before, during and after development, with a defined testing frequency.', ref: 'Art. 17(1)(d)' },
  { text: 'Applicable technical specifications and harmonised standards applied, and, where these are not fully available, alternative means of ensuring compliance defined.', ref: 'Art. 17(1)(e)' },
  { text: 'Data management system covering data acquisition, collection, analysis, labelling, storage, filtration, mining, aggregation and retention.', ref: 'Art. 17(1)(f)' },
  { text: 'Risk management system compliant with Art. 9 implemented as an integral part of the QMS.', ref: 'Art. 17(1)(g)' },
  { text: 'Post-market monitoring system established and maintained.', ref: 'Art. 17(1)(h), Art. 72' },
  { text: 'Procedures for reporting serious incidents established.', ref: 'Art. 17(1)(i), Art. 73' },
  { text: 'Communication protocols with supervisory authorities, notified bodies, deployers, customers and other stakeholders defined.', ref: 'Art. 17(1)(j)' },
  { text: 'System for record-keeping and documentation retention established.', ref: 'Art. 17(1)(k)' },
  { text: 'Resource management, including measures to ensure security of supply.', ref: 'Art. 17(1)(l)' },
  { text: 'Accountability framework for management and other staff defined.', ref: 'Art. 17(1)(m)' },
  { text: 'Proportionality of the QMS to the size of the organisation confirmed and documented, without reducing the required level of rigour and protection.', ref: 'Art. 17(2)' },
  { text: "Mapping completed of which QMS elements the bank can satisfy through existing internal governance arrangements under EU financial services law, and which three elements (risk management, post-market monitoring, incident reporting) must remain separate despite the partial exemption.", ref: 'Art. 17(4)' },
];

const faq = [
  {
    q: 'Does the 2 August 2026 deadline still apply to high-risk AI systems under Annex III?',
    a: "No. Regulation (EU) 2026/1744 (the so-called AI Digital Omnibus), published in the Official Journal of the EU on 24 July 2026 and in force since 27 July 2026, postponed the application date of the main obligations for standalone high-risk systems under Annex III to 2 December 2027. The 2 August 2026 date remains valid only for the Art. 50 transparency obligations, not for Annex III.",
  },
  {
    q: 'Are credit scoring and creditworthiness assessment high-risk systems?',
    a: 'Yes. Any AI system that assesses the creditworthiness of a natural person or establishes their credit score qualifies as high-risk under Annex III point 5(b). The only explicit exception is AI systems used solely to detect financial fraud.',
  },
  {
    q: 'Can a bank rely on its existing internal governance instead of building a separate quality management system under the AI Act?',
    a: "Partially. Art. 17(4) allows financial institutions to satisfy QMS requirements through compliance with internal governance arrangements under EU financial services law, but this does not cover three elements: the risk management system under Art. 9, the post-market monitoring system, and the serious-incident reporting procedures. These three elements must exist separately.",
  },
  {
    q: 'Does biometric customer verification in the KYC process fall under Annex III?',
    a: "Systems used solely to confirm that a person is who they claim to be (one-to-one verification) are explicitly excluded from the definition of remote biometric identification in Annex III point 1. The high-risk classification concerns remote biometric identification and biometric categorisation, not standard identity verification during onboarding.",
  },
  {
    q: 'Do the DORA TLPT penetration tests replace the Art. 15 AI Act cybersecurity requirements?',
    a: "No, these are two separate obligations with different scope. TLPT under Art. 26 and 27 DORA, carried out on a cycle of at most three years following the TIBER-EU methodology, test the resilience of the entire ICT infrastructure supporting critical functions. Art. 15 AI Act requires the resilience of the specific AI system against data poisoning, model poisoning, adversarial attacks and confidentiality attacks already at the design stage. In practice, a well-designed TLPT scope should cover high-risk AI systems as part of critical infrastructure, but this does not exempt an organisation from the separate documentation required by Art. 15.",
  },
];

export default function AIActAnnexIIIChecklistPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="rounded-full bg-amber-500/15 border border-amber-500/30 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-amber-300 uppercase">Checklist</span>
            </div>
            <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.15] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">AI Act Annex III:</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                readiness checklist for Tier-1 banks.
              </span>
            </h1>
            <p className="text-[17px] text-white/70 max-w-[640px] mx-auto leading-relaxed mb-4">
              41 checklist items built directly from the text of Art. 9, 15 and 17 of Regulation (EU) 2024/1689, plus the updated timeline after the Digital Omnibus. A working document for compliance and security teams, not a sales piece.
            </p>
            <p className="text-[13px] text-white/40 max-w-[560px] mx-auto leading-relaxed">
              5 min read · last verified: August 2026
            </p>
          </div>
        </section>

        {/* Item count note */}
        <section className="bg-white py-10 px-6 w-full border-b border-gray-100">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[14px] text-gray-600 leading-relaxed">
              This document contains <strong className="text-gray-900">41 real, verifiable items</strong> (14 for Art. 9, 12 for Art. 15, 15 for Art. 17), each referencing a specific paragraph of the regulation. We would rather have 41 items you can check against EUR-Lex than a round number with no basis in the legal text.
            </p>
          </div>
        </section>

        {/* Scope */}
        <section id="scope" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">What&apos;s in scope and why</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Which AI systems at a Tier-1 bank qualify as high-risk</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                Annex III of Regulation (EU) 2024/1689 sets out a closed list of high-risk AI system categories. For a Tier-1 financial institution, four items on that list carry the most practical weight.
              </p>
              <p>
                <strong className="text-gray-900">Point 5(b), creditworthiness assessment and credit scoring.</strong> Any AI system that assesses the creditworthiness of a natural person or establishes their credit score is high-risk, with the exception of systems used solely to detect financial fraud.
              </p>
              <p>
                <strong className="text-gray-900">Point 5(c), risk assessment and pricing for life and health insurance.</strong> Relevant to banks with a bancassurance arm or offering insurance products bundled with credit.
              </p>
              <p>
                <strong className="text-gray-900">Point 4, employment and worker management.</strong> Recruitment systems, systems that evaluate candidates, affect working conditions, promotion, termination of employment, task allocation, or monitor performance.
              </p>
              <p>
                <strong className="text-gray-900">Point 1, biometrics.</strong> Remote biometric identification and biometric categorisation are high-risk. An important distinction: standard one-to-one identity verification in the KYC process, confirming that a person is who they claim to be, is explicitly excluded from this definition.
              </p>
              <p>
                The checklist below does not reproduce the full Annex III list. It focuses on the three articles that define exactly what needs to be done with a system already classified as high-risk: Art. 9 (risk management system), Art. 15 (accuracy, robustness and cybersecurity) and Art. 17 (quality management system).
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Timeline after the Digital Omnibus</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Annex III deadline postponed to 2 December 2027</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed mb-10">
              <p>
                The obligations for standalone high-risk systems under Annex III were originally due to take effect on 2 August 2026. That deadline no longer applies. Regulation (EU) 2026/1744, commonly known as the AI Digital Omnibus, was published in the Official Journal of the EU on 24 July 2026 and entered into force on 27 July 2026, following approval by the European Parliament on 16 June 2026 and by the Council of the EU on 29 June 2026.
              </p>
              <p>
                The key change for banks: <strong className="text-gray-900">the new application date for the main obligations for standalone high-risk systems under Annex III is 2 December 2027</strong>, 16 months later than originally planned. For AI systems embedded in products regulated under Annex I (a different category from the one covered in this document), the deadline was postponed to 2 August 2028.
              </p>
              <p>
                This doesn&apos;t mean August 2026 has lost its significance. <strong className="text-gray-900">The Art. 50 transparency obligations were not postponed</strong> and apply from 2 August 2026 as originally scheduled, covering matters such as labelling synthetic content and informing individuals that they are interacting with an AI system. The only exception is the technical watermarking mechanism under Art. 50(2), for which a four-month transitional period until 2 December 2026 was introduced, but only for systems already on the market before August 2026.
              </p>
              <p>
                Practical consequence for your internal timeline: you now have more time to implement Art. 9, 15 and 17 for Annex III systems than plans made before July 2026 assumed. This is a good moment to check whether your compliance project plan still assumes the outdated August deadline, and to rebalance priorities instead of rushing against a deadline that no longer applies.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-2 text-[13px] font-bold uppercase tracking-wide px-6 py-3 bg-gray-50 border-b border-gray-200 text-gray-600">
                <span>Obligation</span>
                <span>Application date</span>
              </div>
              {[
                { label: 'Art. 50, transparency obligations', date: '2 August 2026 (unchanged)' },
                { label: 'Art. 50(2), technical watermarking (for systems already on the market)', date: 'transitional period until 2 December 2026' },
                { label: 'Annex III, standalone high-risk systems', date: '2 December 2027 (postponed from 2 August 2026)' },
                { label: 'Annex I, high-risk systems embedded in regulated products', date: '2 August 2028 (postponed)' },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-2 px-6 py-4 border-b last:border-0 border-gray-100 text-[14px]">
                  <span className="text-gray-900 font-medium">{row.label}</span>
                  <span className="text-gray-600">{row.date}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist Art. 9 */}
        <ChecklistSection
          id="art-9"
          eyebrow="Block 1 of 3 · 14 items"
          title="Art. 9: risk management system"
          intro="A continuous, iterative process carried out throughout the system's lifecycle, not a one-off audit before deployment."
          items={article9}
          bg="F6F2EA"
        />

        {/* Checklist Art. 15 */}
        <ChecklistSection
          id="art-15"
          eyebrow="Block 2 of 3 · 12 items"
          title="Art. 15: accuracy, robustness and cybersecurity"
          intro="Design and technical requirements, including four specific categories of attack the system must withstand: data poisoning, model poisoning, adversarial attacks, confidentiality attacks."
          items={article15}
          bg="white"
        />

        {/* Checklist Art. 17 */}
        <ChecklistSection
          id="art-17"
          eyebrow="Block 3 of 3 · 15 items"
          title="Art. 17: quality management system"
          intro="Thirteen elements required explicitly under paragraph 1, plus the proportionality principle and the partial exemption for financial institutions under paragraph 4."
          items={article17}
          bg="F6F2EA"
        />

        {/* Regulatory context */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Worth knowing</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">How this checklist connects to the rest of the regulatory stack</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                DORA Art. 5 places responsibility for ICT risk management directly on the management body, as a non-delegable duty. A high-risk AI system fits the same logic: an immutable log of risk decisions under Art. 9 (who identified the risk, when, on what basis) also protects the people making the decision, not just formally satisfies the requirement.
              </p>
              <p>
                DORA Art. 26 and 27 require threat-led penetration testing (TLPT), following the TIBER-EU methodology, at least once every three years for entities identified by the supervisor. A well-designed TLPT scope should cover high-risk AI systems as part of critical infrastructure, but this does not exempt an organisation from the separate Art. 15 requirements.
              </p>
              <p>
                The revised ECB Guide to Internal Models, published in July 2025, introduced for the first time explicit supervisory expectations for machine-learning models used in internal models: they must be adequately explainable, and model complexity must be justified by its effectiveness. This is the same direction as Art. 15 AI Act: documentation and explainability of the system, not just its effectiveness.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#171717] py-24 px-6 w-full">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-5 h-5 text-purple-400" strokeWidth={2} />
              <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase">Questions and answers</span>
            </div>
            <h2
              className="text-[28px] md:text-[36px] font-bold leading-tight tracking-tight mb-12"
              style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Frequently asked questions from compliance teams
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
        <section className="bg-[#F6F2EA] py-16 px-6 w-full">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Sources</span>
            <ul className="text-[13px] text-gray-500 leading-relaxed flex flex-col gap-1.5 list-disc pl-5">
              <li>Regulation (EU) 2024/1689 (AI Act), Art. 9, 15, 17, Annex III, EUR-Lex</li>
              <li>Regulation (EU) 2026/1744 (AI Digital Omnibus), Official Journal of the EU, published 24 July 2026</li>
              <li>Council of the EU, press release on the adoption of the AI Act simplification package, 29 June 2026</li>
              <li>European Commission, Shaping Europe&apos;s Digital Future, information on the entry into force of the Digital Omnibus</li>
              <li>EBA, AI Act, implications for the EU banking and payments sector</li>
              <li>ECB Banking Supervision, Revised Guide to Internal Models, 28 July 2025</li>
              <li>Regulation (EU) 2022/2554 (DORA), Art. 5, 26, 27</li>
            </ul>
            <p className="text-[12px] text-gray-400 mt-6 leading-relaxed">
              This document is educational material, not legal advice. Regulations and their interpretations change; before making a compliance decision, verify the current legal status with your legal department or a regulatory advisor.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-4 tracking-tight">Need help with a readiness audit?</h2>
            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
              Get in touch, we&apos;ll walk through this checklist with your compliance team and point out where your real gaps are.
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

function ChecklistSection({
  id,
  eyebrow,
  title,
  intro,
  items,
  bg,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: Item[];
  bg: 'F6F2EA' | 'white';
}) {
  const isCream = bg === 'F6F2EA';
  return (
    <section id={id} className={`${isCream ? 'bg-[#F6F2EA]' : 'bg-white border-t border-gray-100'} py-24 px-6 w-full scroll-mt-24`}>
      <div className="max-w-3xl mx-auto">
        <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">{eyebrow}</span>
        <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">{title}</h2>
        <p className="text-[16px] text-gray-600 leading-relaxed mb-10">{intro}</p>

        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden divide-y divide-gray-100">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 px-6 py-5 hover:bg-gray-50/60 transition-colors">
              <CheckSquare className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" strokeWidth={1.75} />
              <div className="flex-1">
                <p className="text-[15px] text-gray-800 leading-relaxed">{item.text}</p>
                <span className="inline-block mt-2 text-[11px] font-bold text-purple-600/80 tracking-wide uppercase">{item.ref}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
