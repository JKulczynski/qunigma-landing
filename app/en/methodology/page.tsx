import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Methodology | Qunigma: where our numbers come from',
  description: 'How we calculate MTTAV, ROI and savings from eliminating AI-native fraud. Full methodology behind the numbers on the Qunigma site.',
  alternates: {
    canonical: 'https://qunigma.ai/en/methodology',
    languages: {
      'en-US': 'https://qunigma.ai/en/methodology',
      'pl-PL': 'https://qunigma.ai/metodologia',
    },
  },
};

export default function MethodologyPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-white/60 uppercase">Methodology</span>
            </div>
            <h1 className="text-[38px] md:text-[56px] font-medium leading-[1.1] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Where our numbers</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                come from.
              </span>
            </h1>
            <p className="text-[17px] text-white/70 max-w-[640px] mx-auto leading-relaxed">
              We&apos;re a young company and we&apos;d rather be transparent about our methodology than leave numbers without context. Below is a full explanation of where every figure on the site comes from and how we calculated it.
            </p>
          </div>
        </section>

        {/* Response time */}
        <section id="response-time" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">241 days → under 2ms</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Response time</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">241 days</strong> is the average global time to identify and contain a data breach, published periodically in IBM&apos;s &quot;Cost of a Data Breach&quot; report. It&apos;s an industry benchmark, not our own figure: a reference point showing how long response typically takes in an organization without active defense.
              </p>
              <p>
                <strong className="text-gray-900">Under 2ms</strong> is our measured MTTAV (Mean Time To Active Vectorization), from packet-level anomaly detection to autonomous neutralization in our test environment (PoC). This is a different metric than the full breach lifecycle (241 days also includes stages outside our control, like internal escalation or regulator communication). We place them side by side to illustrate the scale of the difference between passive detection and active neutralization, not as a like-for-like comparison of the same measure.
              </p>
            </div>
          </div>
        </section>

        {/* Savings */}
        <section id="fraud-savings" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">€4.2M</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Savings from eliminating AI-native fraud</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                This is our own modeling, not a quote from a single report. We combine published data-breach cost benchmarks with data on loss scale specific to AI-native fraud (deepfakes, synthetic identity, All Green Fraud) and translate them into a scenario for an organization the size of a typical Qunigma client.
              </p>
              <p>
                Treat this figure as an illustration of the order of magnitude of potential exposure, not a guaranteed amount: actual savings depend on organization scale, current security stack, and risk profile. We&apos;re happy to run a concrete scenario for your organization during a call.
              </p>
            </div>
          </div>
        </section>

        {/* ROI */}
        <section id="roi" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">338% ROI · +38% productivity · Regulatory exposure</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">How we calculate ROI and operational metrics</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">338% (3-year ROI)</strong> and <strong className="text-gray-900">+38% SecOps productivity</strong> come from our internal TCO/ROI model, built with a methodology similar to standard &quot;Total Economic Impact&quot; studies used in the security industry (alert fatigue reduction, analyst time per incident, cost of tools consolidated by MTTAV). It&apos;s our own estimate based on our PoC testing, not a figure taken directly from a single external report: comparable, publicly available studies in this category (AI fraud/risk in fintech) show ROI in a similar range.
              </p>
              <p>
                <strong className="text-gray-900">DORA/AI Act penalties (up to 7% of turnover)</strong> and <strong className="text-gray-900">board liability (€5M + function ban)</strong> represent the combined maximum regulatory exposure across the DORA + AI Act + NIS2 stack, three separate legal instruments with different penalty thresholds, presented as a single upper risk ceiling rather than a single provision. We&apos;re preparing a full article-by-article breakdown for a compliance-team resource. Reach out if you need it now.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-4 tracking-tight">Have a question about a specific number?</h2>
            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
              Reach out, we&apos;ll walk you through the methodology and show what the numbers look like for your organization.
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
