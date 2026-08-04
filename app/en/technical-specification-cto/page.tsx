import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import { Info, HelpCircle, ListChecks, Layers, Table2, ClipboardList } from 'lucide-react';
import { IntegrationReadinessChecklist } from './IntegrationReadinessChecklist';

export const metadata: Metadata = {
  title: 'Technical Integration Readiness: a self-assessment for CTOs and Chief Architects | Qunigma',
  description: 'Diagnostic questions about your architecture, an explanation of how Qunigma modules work and what they do not cover, DORA/AI Act/NIS2 mapped to real requirements, and a live integration complexity checklist. No sign-up required.',
  alternates: {
    canonical: 'https://qunigma.ai/en/technical-specification-cto',
    languages: {
      'en-US': 'https://qunigma.ai/en/technical-specification-cto',
      'pl-PL': 'https://qunigma.ai/technical-specification-cto',
    },
  },
};

const diagnosticQuestions = [
  'What SIEM or SOAR do you run today: Splunk, Microsoft Sentinel, IBM QRadar, something else, or none at all?',
  'Target infrastructure: on-premise, public cloud, EU-sovereign cloud, or a hybrid model?',
  'What is your actual time today from alert generation to analyst triage?',
  'Does any register of machine identities (API keys, service accounts, OAuth tokens) exist today, even a partial one?',
  'Are the LLM/AI systems in your organization in production, in pilot, or still at the planning stage?',
  'Who is formally responsible in your organization for the ICT asset register required under DORA Art. 8?',
];

const modules = [
  {
    name: 'MTTAV Engine',
    how: 'Detects anomalies at the packet level in real time and autonomously neutralizes the threat before it reaches the target system. The neutralization time we measured, under 2ms, is the MTTAV (Mean Time To Active Vectorization), the time from anomaly detection to autonomous neutralization in our test environment (PoC).',
    notCover: "This is a different measure from the 241 days IBM publishes as the average global time to identify and contain a data breach: that figure also covers stages outside the engine's control, such as internal escalation or communication with the regulator. MTTAV Engine does not replace your SIEM, it integrates with it through an API.",
  },
  {
    name: 'Honeypot LLM',
    how: "A decoy language model embedded in the client's infrastructure that deceives attacking AI agents. In our tests it isolated the attacker in 100% of cases with zero false positives, while collecting intelligence on attack methods.",
    notCover: 'The module targets attack vectors through AI/LLM interfaces. In the compliance table we describe it as TLPT-ready support for DORA Art. 26, not as a standalone substitute for a full threat-led penetration test, which should also cover classic vectors targeting people and infrastructure outside the AI layer.',
  },
  {
    name: 'Memory Guard',
    how: 'Verifies the integrity of LLM context memory in real time using SHA-256, with under 1ms overhead per request, blocking Memory Poisoning attacks before they can degrade decisions.',
    notCover: 'It protects specifically the context memory of LLM models. It is not a general encryption solution for data at rest or in transit, nor a DLP tool for the entire infrastructure.',
  },
  {
    name: 'NHI Security',
    how: 'Automatic inventory, classification and monitoring of machine identities: API keys, service accounts, OAuth tokens. The reference point is 25 minutes, the estimated time in which an attacker could exfiltrate data without this protection.',
    notCover: 'It covers the machine identity category. The full ICT asset register required under DORA Art. 8(1) covers a broader scope, including applications, hardware and networks: an asset register that does not cover the NHI category does not meet the spirit of Art. 8, but NHI Security on its own does not replace the full register.',
  },
];

const complianceRows = [
  { reg: 'DORA', art: 'Art. 8', req: 'ICT and NHI asset inventory', status: 'Automatic, NHI Security' },
  { reg: 'DORA', art: 'Art. 19', req: 'Incident reporting 4h / 24h / 72h', status: 'Pre-built reporting packs' },
  { reg: 'DORA', art: 'Art. 25', req: 'Third-party and ICT provider risk', status: 'Third-party NHI monitoring' },
  { reg: 'DORA', art: 'Art. 26', req: 'TLPT penetration testing', status: 'Honeypot LLM as TLPT-ready' },
  { reg: 'AI Act', art: 'Art. 9', req: 'AI risk management system', status: 'MTTAV real-time risk scoring' },
  { reg: 'AI Act', art: 'Art. 15', req: 'Accuracy, robustness and cybersecurity', status: 'Memory Guard SHA-256' },
  { reg: 'NIS2', art: 'Art. 21', req: 'Network security risk management measures', status: 'MTTAV real-time protection' },
  { reg: 'NIS2', art: 'Art. 21(2)(d)', req: 'Supply chain security', status: 'NHI Security, third-party monitoring' },
];

const faq = [
  {
    q: 'Is this a full API specification I can hand to my architecture team?',
    a: 'Not in this form. This document is an integration readiness self-assessment tool: diagnostic questions about your architecture, an honest explanation of how our modules work and what they do not cover, mapping to real regulatory requirements, and an indicative integration complexity score. We discuss the full API specification, webhook schema and integration details for a specific SIEM individually, usually under NDA, during the technical scoping conversation.',
  },
  {
    q: 'How do we know that under 2ms MTTAV is a real number and not marketing?',
    a: "It is a neutralization time we measured in a test environment (PoC), from packet-level anomaly detection to autonomous neutralization, not a claim without a methodology. We explain this in full, including why it is not the same measure as the 241-day industry benchmark from IBM's Cost of a Data Breach, separately in Methodology.",
  },
  {
    q: 'What if my SIEM is not one of the pre-built connectors?',
    a: 'Pre-built connectors (Splunk, Microsoft Sentinel, IBM QRadar) speed up deployment, but the baseline integration works through a standard REST API and webhook, regardless of your specific SIEM. It is worth clarifying this in the checklist below and during the technical conversation.',
  },
  {
    q: 'Does deployment require replacing an existing SIEM, SOC or core banking system?',
    a: 'No. The platform integrates with your existing infrastructure through an API, with no need to replace these systems. The indicative timeline is 8 business days: day 1, API connection and NHI inventory, day 2, Honeypot LLM calibration, days 3-7, Memory Guard baseline and testing, from day 8, full active protection.',
  },
  {
    q: 'On-premise or cloud?',
    a: 'Both are possible: on-premise or EU-sovereign cloud, which eliminates exposure to the CLOUD Act. Which model fits your organization depends on the answers to the diagnostic questions in the first section of this document.',
  },
];

export default function TechnicalSpecificationCtoPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="rounded-full bg-purple-500/15 border border-purple-500/30 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-purple-300 uppercase">Technical Integration Readiness</span>
            </div>
            <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.15] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Before we start the technical conversation,</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                find out where you stand.
              </span>
            </h1>
            <p className="text-[17px] text-white/70 max-w-[680px] mx-auto leading-relaxed mb-4">
              Diagnostic questions about your architecture, an honest explanation of how our modules work and what they do not cover, mapping to real DORA, AI Act and NIS2 requirements, and a live integration complexity checklist. No sign-up, nothing sent to any server.
            </p>
            <p className="text-[13px] text-white/40 max-w-[560px] mx-auto leading-relaxed">
              A working document for CTOs, Chief Architects and security teams · last verified: August 2026
            </p>
          </div>
        </section>

        {/* Methodology note */}
        <section className="bg-white py-10 px-6 w-full border-b border-gray-100">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[14px] text-gray-600 leading-relaxed">
              <strong className="text-gray-900">What this is, and what it is not.</strong> Qunigma does not yet publish the full API specification and webhook schema externally, so you will not find them below. This document is built entirely from what is already described on this site: platform architecture, the methodology behind our metrics, and the compliance mapping. If a specific integration topic is not covered here, the diagnostic section asks about your side, rather than guessing ours.
            </p>
          </div>
        </section>

        {/* Table of contents */}
        <section className="bg-[#F6F2EA] py-8 px-6 w-full border-b border-gray-200 print:hidden">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
            {[
              { href: '#diagnostics', label: 'Your architecture' },
              { href: '#modules', label: 'How the modules work' },
              { href: '#compliance', label: 'Compliance mapping' },
              { href: '#checklist', label: 'Integration checklist' },
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

        {/* (a) Architecture diagnostics */}
        <section id="diagnostics" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Step 1, before we talk</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Questions about your architecture, not ours</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed mb-10">
              <p>
                Instead of guessing your stack, we start with questions. It is worth knowing the answers before you sit down with us for the technical conversation, because they determine what your integration path looks like: through a pre-built connector, through the REST API, on-premise or in the cloud.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden divide-y divide-gray-100">
              {diagnosticQuestions.map((q) => (
                <div key={q} className="px-6 py-5">
                  <p className="text-[15px] text-gray-800 leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* (b) How the modules work */}
        <section id="modules" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Step 2, how it works</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">How each module works and what it does not cover</h2>
            <p className="text-[16px] text-gray-600 leading-relaxed mb-10">
              Every number on this page has a methodology behind it. Below, for each module separately: how the mechanism works and where its scope ends, so there are no gaps left unsaid in the technical conversation.
            </p>
            <div className="flex flex-col gap-6">
              {modules.map((mod) => (
                <div key={mod.name} className="rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-[18px] font-bold text-gray-900 mb-3">{mod.name}</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-3">
                    <strong className="text-gray-900">How it works: </strong>{mod.how}
                  </p>
                  <p className="text-[15px] text-gray-500 leading-relaxed">
                    <strong className="text-gray-700">What it does not cover: </strong>{mod.notCover}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* (c) Compliance mapping */}
        <section id="compliance" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Table2 className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Step 3, mapping to regulations</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">Integration as an answer to a specific article</h2>
            <p className="text-[16px] text-gray-600 leading-relaxed mb-10">
              Selected rows from the full regulatory map on the Compliance page, limited to the articles directly related to what you are integrating technically. The full DORA, AI Act, CRA and NIS2 overview is available separately.
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-200">
              <div className="grid grid-cols-4 text-[12px] font-bold uppercase tracking-wide px-6 py-3 border-b bg-gray-100 border-gray-200 text-gray-600">
                <span>Regulation</span>
                <span>Article</span>
                <span>Requirement</span>
                <span>Qunigma Status</span>
              </div>
              {complianceRows.map((row) => (
                <div key={`${row.reg}-${row.art}`} className="grid grid-cols-4 px-6 py-4 border-b last:border-0 text-[13px] border-gray-100 hover:bg-gray-50 bg-white">
                  <span className="font-bold text-gray-900">{row.reg}</span>
                  <span className="text-gray-700">{row.art}</span>
                  <span className="text-gray-600">{row.req}</span>
                  <span className="text-emerald-600 font-medium">{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* (d) Interactive integration complexity checklist */}
        <IntegrationReadinessChecklist />

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
              Frequently asked questions from CTOs and Chief Architects
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
            <div className="flex items-center gap-3 mb-4">
              <ListChecks className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase block">Sources</span>
            </div>
            <ul className="text-[13px] text-gray-500 leading-relaxed flex flex-col gap-1.5 list-disc pl-5">
              <li>qunigma.ai/en/platform, architecture of MTTAV Engine, Honeypot LLM, Memory Guard, NHI Security</li>
              <li>qunigma.ai/en/methodology, explanation of response time metrics, ROI and savings</li>
              <li>qunigma.ai/en/compliance, full DORA, AI Act, CRA, NIS2 mapping</li>
              <li>qunigma.ai/en/company, EU-sovereign infrastructure, no CLOUD Act exposure</li>
            </ul>
            <p className="text-[12px] text-gray-400 mt-6 leading-relaxed">
              This document is educational material and a self-assessment tool, not a formal technical specification or a contractual commitment. Integration details specific to your organization are agreed individually during the technical conversation.
            </p>
          </div>
        </section>

        {/* Contact, always visible, including in print */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-4 tracking-tight">Ready for the technical conversation?</h2>
            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
              Reach out with your checklist result, we will go through your organization&apos;s architecture together and show you exactly what integration looks like in your case.
            </p>
            <a
              href="mailto:info@qunigma.ai"
              className="inline-block bg-[#6D28D9] text-white px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-[#5B21B6] transition-colors mb-8"
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
