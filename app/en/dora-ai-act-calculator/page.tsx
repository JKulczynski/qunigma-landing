import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import { Info, HelpCircle, ScrollText, Scale, ListChecks } from 'lucide-react';
import { CalculatorForm } from './CalculatorForm';

export const metadata: Metadata = {
  title: 'DORA & AI Act ROI Calculator: regulatory exposure for CFOs | Qunigma',
  description: 'Calculate your bank\'s indicative regulatory and operational exposure: an incident-cost benchmark (IBM 2024) and the harmonized AI Act penalty for high-risk systems. Transparent methodology, every figure with a visible formula and source.',
  alternates: {
    canonical: 'https://qunigma.ai/en/dora-ai-act-calculator',
    languages: {
      'en-US': 'https://qunigma.ai/en/dora-ai-act-calculator',
      'pl-PL': 'https://qunigma.ai/dora-ai-act-calculator',
    },
  },
};

const faq = [
  {
    q: 'Why doesn\'t the calculator show a single penalty amount for DORA?',
    a: 'Because no such single, harmonized amount exists. Unlike the AI Act, the DORA regulation (EU 2022/2554) does not set one turnover-based penalty rate applicable across the whole EU. Administrative sanctions are set by national supervisory authorities based on their own transposition of the provision, around Art. 50-52 DORA, so the real ranges differ between member states. Quoting a single "X% of turnover for DORA" figure would be a dishonest simplification, so instead we show the real operational cost of the incident that DORA is designed to prevent, and the fact that ICT risk management is a non-delegable duty of the management body under Art. 5.',
  },
  {
    q: 'Where does the AI Act figure come from?',
    a: 'From the text of the regulation. AI Act Art. 99(4) sets a harmonized, public and verifiable upper limit on penalties for high-risk systems (including Art. 16, 25 and related provisions, as well as GPAI model providers\' obligations): the higher of €15,000,000 or 3% of global annual turnover. The same figures are already cited in the Compliance section of this site. We include this component only when you indicate that Annex III systems actually operate in your organization.',
  },
  {
    q: 'Is this a binding valuation or an actuarial forecast?',
    a: 'No. This is an indicative tool that shows the order of magnitude of potential exposure, not a precise, binding calculation. The AI Act component is based on a real, harmonized provision, but the incident-cost component is a scaled industry benchmark with explicitly disclosed Qunigma-specific multipliers. Two organizations with identical revenue can have very different real risk profiles. Before any budget or compliance decision, verify the figures with your own risk, legal or actuarial team.',
  },
  {
    q: 'Why does the form ask about revenue, not assets under management (AUM)?',
    a: 'Because both the incident-cost benchmark and the AI Act percentage threshold (Art. 99(4)) refer to global annual turnover, not balance-sheet size or AUM. This distinction is often confused, but it has a direct effect on the result: a bank with large AUM but relatively low revenue will have a different exposure than balance-sheet size alone would suggest.',
  },
  {
    q: 'Why doesn\'t my current security stack lower the result?',
    a: 'Because we don\'t have a credible, publicly verified multiplier that says "deploying a SIEM lowers expected incident cost by X%" for a specific organization. We prefer not to state such a number rather than make one up. The security stack information goes to our team so that any follow-up conversation can address specific gaps directly, rather than artificially improving the calculator\'s result.',
  },
  {
    q: 'What happens to my data after I submit the form?',
    a: 'It goes into the Qunigma team\'s internal lead system, solely so we can contact you about this result. We do not sell or share data with third parties. Details are in our Privacy Policy.',
  },
];

export default function DoraAiActCalculatorPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="rounded-full bg-purple-500/15 border border-purple-500/30 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-purple-300 uppercase">DORA &amp; AI Act ROI Calculator</span>
            </div>
            <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.3] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">You&apos;re not buying savings.</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                You&apos;re buying insurance against risk.
              </span>
            </h1>
            <p className="text-[17px] text-white/70 max-w-[680px] mx-auto leading-relaxed mb-4">
              Calculate your bank&apos;s indicative regulatory and operational exposure in two minutes: the real, harmonized AI Act penalty threshold for high-risk systems and a scaled benchmark of incident cost in the financial sector. Every figure in the result has a visible formula and source.
            </p>
            <p className="text-[13px] text-white/40 max-w-[560px] mx-auto leading-relaxed">
              A business case for CFOs · a personalized result, requires contact details · sources last verified: August 2026
            </p>
          </div>
        </section>

        {/* Methodology note */}
        <section className="bg-white py-10 px-6 w-full border-b border-gray-100">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[14px] text-gray-600 leading-relaxed">
              <strong className="text-gray-900">A note on methodology.</strong> Unlike GDPR or the AI Act, DORA (Regulation (EU) 2022/2554) has no single, harmonized penalty rate as a percentage of turnover, sanctions are set by national supervisory authorities. So you won&apos;t find a made-up "X% of turnover for DORA" figure in this tool. Instead, we combine two elements that can be reliably calculated: the real, harmonized AI Act penalty threshold for high-risk systems (Art. 99(4)), and a scaled benchmark of incident cost in the financial sector, explicitly labeled as an estimate (IBM Cost of a Data Breach Report 2024, the same figure is already cited elsewhere on this site). The full breakdown of the formula is visible next to every figure in the result.
            </p>
          </div>
        </section>

        {/* Who it's for and why, insurance framing */}
        <section id="who-its-for" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ScrollText className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Who it&apos;s for and why</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">A business case, not another tool discount</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                This calculator is addressed directly to <strong className="text-gray-900">the CFO and the finance committee</strong>, not to the CISO or the security department: those two roles have separate materials on this site. The question it answers is not "how much will we save", but <strong className="text-gray-900">"what order of magnitude of risk are we actually insuring against"</strong>. That distinction matters: the TCO of a security tool is easy to calculate, the cost of not having it, until it turns into a real incident or penalty, usually is not.
              </p>
              <p>
                The result is personalized to your data: revenue, country, business segment and whether your organization runs AI systems covered by AI Act Annex III. This is the only lead-magnet material on this site that requires contact details before showing the result, and we do this deliberately: the number you see genuinely depends on what you tell us, so the gate before the result has a substantive justification, not just a marketing one.
              </p>
            </div>
          </div>
        </section>

        {/* How we calculate, full methodology */}
        <section id="methodology" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">How we calculate</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Two components, two different levels of certainty</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed mb-10">
              <p>
                <strong className="text-gray-900">Component 1, operational incident cost.</strong> The starting point is the average cost of a data breach in the financial sector from the IBM Cost of a Data Breach 2024 report, the same figure we cite in another material on this site. We convert it to EUR on an indicative basis (a manually set rate, not a live rate, explicitly shown in the result) and scale it with two Qunigma-specific multipliers: revenue size and business segment. Both multipliers are explicitly labeled as a Qunigma estimate, not data from an external study, in exactly the same spirit in which we describe the €4.2M figure in our general methodology.
              </p>
              <p>
                <strong className="text-gray-900">Component 2, AI Act penalty.</strong> This is the only element of this calculator based on a single, harmonized EU provision, not an estimate. AI Act Art. 99(4) sets an upper limit on the penalty for high-risk systems (Art. 16, 25 and related provisions, as well as GPAI model providers&apos; obligations): the higher of €15,000,000 or 3% of global annual turnover. We include this component only when you indicate that Annex III systems actually operate in your organization, since otherwise the provision does not apply.
              </p>
              <p>
                <strong className="text-gray-900">What we deliberately don&apos;t calculate.</strong> We don&apos;t give a single penalty amount for DORA, because no such harmonized rate exists: sanctions are set by national supervisory authorities. We also don&apos;t reduce the result based on a declared security stack, because we don&apos;t have a credible, publicly verified multiplier linking a specific tool to a specific risk reduction. We prefer not to give a number rather than give one we can&apos;t defend.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 overflow-hidden">
              {[
                { label: 'Incident cost (benchmark)', desc: 'IBM Cost of a Data Breach 2024 (financial sector) x revenue multiplier x segment multiplier. An order-of-magnitude estimate.', tag: 'Estimate' },
                { label: 'AI Act penalty (high-risk systems)', desc: 'The higher of €15M or 3% of turnover, only when Annex III systems are in scope. AI Act Art. 99(4).', tag: 'Provision' },
                { label: 'DORA', desc: 'No single harmonized rate, a matter for national supervisors. Shown qualitatively, with no made-up figure.', tag: 'Qualitative' },
              ].map((row) => (
                <div key={row.label} className="flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-5 border-b last:border-0 border-gray-100">
                  <span className="inline-flex items-center justify-center text-[12px] font-bold px-3 py-1 rounded-full shrink-0 bg-purple-50 text-purple-700 border border-purple-200">{row.tag}</span>
                  <div>
                    <p className="text-[14px] font-bold text-gray-900">{row.label}</p>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Table of contents */}
        <section className="bg-[#F6F2EA] py-8 px-6 w-full border-b border-gray-200">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
            {[
              { href: '#who-its-for', label: 'Who it\'s for' },
              { href: '#methodology', label: 'How we calculate' },
              { href: '#calculator', label: 'Calculator' },
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

        {/* Calculator, gate, result */}
        <CalculatorForm />

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
              Frequently asked questions about the methodology and data
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
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Sources</span>
            </div>
            <ul className="text-[13px] text-gray-500 leading-relaxed flex flex-col gap-1.5 list-disc pl-5">
              <li>Regulation (EU) 2024/1689 (AI Act), Art. 99(4) (penalties for infringements relating to high-risk systems and GPAI models), EUR-Lex</li>
              <li>Regulation (EU) 2022/2554 (DORA), Art. 5 (non-delegable responsibility of the management body for ICT risk), Art. 50-52 (administrative sanctions, national competence), EUR-Lex</li>
              <li>IBM, Cost of a Data Breach Report 2024, financial sector (average breach cost, 22% above the global average), also cited in another material on this site</li>
              <li>Revenue-size and business-segment multipliers: an own, explicitly labeled Qunigma estimate, not data from an external study</li>
            </ul>
            <p className="text-[12px] text-gray-400 mt-6 leading-relaxed">
              This calculator is an educational, indicative tool, not legal or tax advice, nor a formal actuarial valuation. The amounts show the order of magnitude of potential exposure, not a guaranteed penalty or a forecast cost. Before any budget or compliance decision, verify the figures with your own legal, risk or actuarial department. If you find an inaccuracy, let us know and we will correct the tool.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-4 tracking-tight">Want to walk through the result together?</h2>
            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
              Reach out, we will go through the calculator&apos;s assumptions and show you what a more precise business case would look like for your organization.
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
