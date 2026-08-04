'use client';

import { useState, useRef } from 'react';
import {
  Calculator,
  ShieldCheck,
  Info,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  Lock,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Methodology: constants and formulas                                 */
/* ------------------------------------------------------------------ */
/*
 * Component 1: incident cost (IBM benchmark, scaled)
 * Source: IBM Cost of a Data Breach Report 2024, financial sector,
 * the same figure is already cited on this site in
 * app/wiedza/nhi-25-minut-przejecie-tozsamosci/page.tsx.
 * The USD->EUR rate is approximate and set manually (it is not a
 * live rate), this is explicitly disclosed in the interface.
 */
const IBM_BREACH_COST_USD = 6_080_000;
const USD_TO_EUR_RATE = 0.92;
const IBM_BREACH_COST_EUR = Math.round(IBM_BREACH_COST_USD * USD_TO_EUR_RATE);

/*
 * Revenue-size multiplier: an own, explicitly declared order-of-
 * magnitude Qunigma estimate, not external data. The same way of
 * flagging "this is our own modeling, not a quote" is already used
 * for the €4.2M figure in app/metodologia/page.tsx.
 */
const REVENUE_TIERS = [
  { max: 50_000_000, factor: 0.3, label: 'up to €50M' },
  { max: 250_000_000, factor: 0.55, label: '€50M - €250M' },
  { max: 1_000_000_000, factor: 0.85, label: '€250M - €1bn' },
  { max: 5_000_000_000, factor: 1.4, label: '€1bn - €5bn' },
  { max: Infinity, factor: 2.2, label: 'above €5bn' },
] as const;

function revenueTierFor(revenue: number) {
  return REVENUE_TIERS.find((t) => revenue <= t.max) ?? REVENUE_TIERS[REVENUE_TIERS.length - 1];
}

/*
 * Sector multiplier: also an own estimate, explicitly described as a
 * simplification in the interface below.
 */
const SECTOR_OPTIONS = [
  { value: 'uniwersalny', label: 'Universal bank', factor: 1.0 },
  { value: 'specjalistyczny', label: 'Specialist / cooperative bank', factor: 0.85 },
  { value: 'ubezpieczyciel', label: 'Insurer', factor: 0.9 },
  { value: 'inna', label: 'Other financial institution', factor: 0.8 },
] as const;

/*
 * Component 2: AI Act, a harmonized, real and verifiable threshold.
 * AI Act Art. 99(4): for high-risk systems (Art. 16, 25 and related
 * provisions, including GPAI model providers' obligations) the
 * penalty is up to €15,000,000 or 3% of global annual turnover,
 * WHICHEVER IS HIGHER. The same figures are already used in
 * app/en/compliance/page.tsx ("Up to 3% of turnover or €15M").
 * We include this component only when the user indicates that AI
 * Act Annex III systems are in scope of the organization's activity.
 */
const AI_ACT_FLAT_EUR = 15_000_000;
const AI_ACT_PERCENT = 0.03;

const STACK_OPTIONS = [
  'SIEM / SOC',
  'EDR / XDR',
  'IAM / PAM',
  'Non-human identity (NHI) governance',
  'Threat Intelligence',
  'None / early stage',
];

const COUNTRY_OPTIONS = [
  'Poland',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Netherlands',
  'Austria',
  'Ireland',
  'Belgium',
  'Portugal',
  'Other EU country',
];

function formatEUR(value: number) {
  return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
}

function formatUSD(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
}

type Stage = 'form' | 'gated' | 'result';

interface ComputedExposure {
  revenue: number;
  sectorLabel: string;
  sectorFactor: number;
  revenueFactor: number;
  revenueTierLabel: string;
  incidentComponent: number;
  aiActInScope: boolean;
  aiActComponent: number;
  total: number;
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-colors ${
        active
          ? 'bg-purple-100 border-purple-300 text-purple-700'
          : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
      }`}
    >
      {children}
    </button>
  );
}

export function CalculatorForm() {
  const [stage, setStage] = useState<Stage>('form');

  const [company, setCompany] = useState('');
  const [revenueStr, setRevenueStr] = useState('');
  const [country, setCountry] = useState('');
  const [sector, setSector] = useState<(typeof SECTOR_OPTIONS)[number]['value'] | ''>('');
  const [aiActInScope, setAiActInScope] = useState<boolean | null>(null);
  const [stack, setStack] = useState<string[]>([]);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const [concern, setConcern] = useState('');
  const [gateErrors, setGateErrors] = useState<string[]>([]);

  const [submitting, setSubmitting] = useState(false);
  const [submitNotice, setSubmitNotice] = useState<'ok' | 'error' | null>(null);

  const [exposure, setExposure] = useState<ComputedExposure | null>(null);

  const gateRef = useRef<HTMLDivElement | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);

  function toggleStack(item: string) {
    setStack((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));
  }

  function handleCalculate() {
    const errs: string[] = [];
    const revenue = parseFloat(revenueStr.replace(/\s/g, '').replace(/,/g, ''));

    if (!company.trim()) errs.push('Enter the name of the bank / institution.');
    if (!revenueStr || !Number.isFinite(revenue) || revenue <= 0) errs.push('Enter annual revenue in EUR (not AUM).');
    if (!country) errs.push('Select a country.');
    if (!sector) errs.push('Select a business segment.');
    if (aiActInScope === null) errs.push('Indicate whether Annex III AI systems are in scope.');

    setFormErrors(errs);
    if (errs.length > 0) return;

    const sectorOpt = SECTOR_OPTIONS.find((s) => s.value === sector)!;
    const tier = revenueTierFor(revenue);
    const incidentComponent = Math.round(IBM_BREACH_COST_EUR * tier.factor * sectorOpt.factor);
    const aiActComponent = aiActInScope ? Math.max(AI_ACT_FLAT_EUR, AI_ACT_PERCENT * revenue) : 0;

    const computed: ComputedExposure = {
      revenue,
      sectorLabel: sectorOpt.label,
      sectorFactor: sectorOpt.factor,
      revenueFactor: tier.factor,
      revenueTierLabel: tier.label,
      incidentComponent,
      aiActInScope: !!aiActInScope,
      aiActComponent,
      total: incidentComponent + aiActComponent,
    };

    setExposure(computed);
    setStage('gated');
    requestAnimationFrame(() => gateRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  async function handleGateSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: string[] = [];
    if (!fullName.trim()) errs.push('Enter your full name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail)) errs.push('Enter a valid work email address.');
    setGateErrors(errs);
    if (errs.length > 0 || !exposure) return;

    setSubmitting(true);
    setSubmitNotice(null);

    try {
      const res = await fetch('/api/calculator-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          workEmail,
          company,
          role,
          phone,
          annualRevenueEur: exposure.revenue,
          calculatedExposureEur: exposure.total,
          country,
          sector: exposure.sectorLabel,
          aiActInScope: exposure.aiActInScope,
          currentSecurityStack: stack,
          biggestDoraConcern: concern,
        }),
      });
      setSubmitNotice(res.ok ? 'ok' : 'error');
    } catch {
      setSubmitNotice('error');
    } finally {
      setSubmitting(false);
      // We show the result regardless of the CRM save status: the user has already
      // given their details, there is no reason to block them from the calculated
      // value just because the lead save failed. We flag the save error separately, below.
      setStage('result');
      requestAnimationFrame(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }

  return (
    <>
      {/* STEP 1: organization data */}
      <section id="calculator" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-5 h-5 text-purple-600" strokeWidth={2} />
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Step 1 of 2 · Your organization</span>
          </div>
          <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">A few details, so the number makes sense</h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-10">
            Annual revenue in EUR, not assets under management (AUM). AI Act penalties and incident-cost benchmarks refer to turnover, not balance-sheet size.
          </p>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 flex flex-col gap-8">
            <div>
              <label htmlFor="company" className="block text-[13px] font-semibold text-gray-700 mb-2">Bank / institution name</label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Bank XYZ S.A."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label htmlFor="revenue" className="block text-[13px] font-semibold text-gray-700 mb-2">Annual revenue (EUR), not AUM</label>
              <input
                id="revenue"
                type="number"
                min={0}
                step={1_000_000}
                value={revenueStr}
                onChange={(e) => setRevenueStr(e.target.value)}
                placeholder="e.g. 250000000"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <div className="flex flex-wrap gap-2 mt-3">
                {REVENUE_TIERS.map((t) => (
                  <Pill key={t.label} active={false} onClick={() => setRevenueStr(String(Math.round(Math.min(t.max, t.max === Infinity ? 8_000_000_000 : t.max) * 0.6)))}>
                    {t.label}
                  </Pill>
                ))}
              </div>
              <p className="text-[12px] text-gray-400 mt-2">The buttons above insert an indicative value from the middle of the range, you can overwrite it manually.</p>
            </div>

            <div>
              <label htmlFor="country" className="block text-[13px] font-semibold text-gray-700 mb-2">Country</label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Select a country</option>
                {COUNTRY_OPTIONS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <span className="block text-[13px] font-semibold text-gray-700 mb-2">Business segment</span>
              <div className="flex flex-wrap gap-2">
                {SECTOR_OPTIONS.map((s) => (
                  <Pill key={s.value} active={sector === s.value} onClick={() => setSector(s.value)}>
                    {s.label}
                  </Pill>
                ))}
              </div>
            </div>

            <div>
              <span className="block text-[13px] font-semibold text-gray-700 mb-2">
                Does your organization run AI Act Annex III systems?
              </span>
              <p className="text-[12px] text-gray-400 mb-3">E.g. credit scoring, creditworthiness assessment, biometrics, AI-based fraud detection.</p>
              <div className="flex gap-2">
                <Pill active={aiActInScope === true} onClick={() => setAiActInScope(true)}>Yes</Pill>
                <Pill active={aiActInScope === false} onClick={() => setAiActInScope(false)}>No / not sure</Pill>
              </div>
            </div>

            <div>
              <span className="block text-[13px] font-semibold text-gray-700 mb-2">Current security stack (optional)</span>
              <div className="flex flex-wrap gap-2">
                {STACK_OPTIONS.map((item) => (
                  <Pill key={item} active={stack.includes(item)} onClick={() => toggleStack(item)}>
                    {item}
                  </Pill>
                ))}
              </div>
              <p className="text-[12px] text-gray-400 mt-2">
                This information does not change the result below, we explain why in the &quot;how we calculate&quot; section. It goes to our team so any follow-up conversation can be specific.
              </p>
            </div>

            {formErrors.length > 0 && (
              <div className="rounded-xl bg-rose-50 border border-rose-200 px-4 py-3 flex gap-3 items-start">
                <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" strokeWidth={2} />
                <ul className="text-[13px] text-rose-700 leading-relaxed list-disc pl-4">
                  {formErrors.map((e) => <li key={e}>{e}</li>)}
                </ul>
              </div>
            )}

            <button
              type="button"
              onClick={handleCalculate}
              className="inline-flex items-center justify-center gap-2 bg-[#6D28D9] text-white px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-[#5B21B6] transition-colors self-start"
            >
              <Calculator className="w-4 h-4" strokeWidth={2} />
              Calculate exposure
            </button>
          </div>
        </div>
      </section>

      {/* STEP 2: contact gate */}
      {stage !== 'form' && (
        <section ref={gateRef} id="contact" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Step 2 of 2 · Where to send the result</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">The result is personalized, so we ask for your contact details</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-10">
              Unlike other materials on this site, this result is calculated specifically for the data you provided, which is why we ask for contact details before showing it. The result will appear right below, with no need to wait for a reply email.
            </p>

            <form onSubmit={handleGateSubmit} className="rounded-2xl border border-gray-200 bg-[#F6F2EA] p-6 md:p-8 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-[13px] font-semibold text-gray-700 mb-2">Full name</label>
                  <input id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
                <div>
                  <label htmlFor="workEmail" className="block text-[13px] font-semibold text-gray-700 mb-2">Work email address</label>
                  <input id="workEmail" type="email" value={workEmail} onChange={(e) => setWorkEmail(e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
                <div>
                  <label htmlFor="role" className="block text-[13px] font-semibold text-gray-700 mb-2">Role (optional)</label>
                  <input id="role" type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="e.g. CFO" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[13px] font-semibold text-gray-700 mb-2">Phone (optional)</label>
                  <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
              </div>
              <div>
                <label htmlFor="concern" className="block text-[13px] font-semibold text-gray-700 mb-2">What concerns you most about DORA? (optional)</label>
                <textarea id="concern" value={concern} onChange={(e) => setConcern(e.target.value)} rows={3} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>

              {gateErrors.length > 0 && (
                <div className="rounded-xl bg-rose-50 border border-rose-200 px-4 py-3 flex gap-3 items-start">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" strokeWidth={2} />
                  <ul className="text-[13px] text-rose-700 leading-relaxed list-disc pl-4">
                    {gateErrors.map((e) => <li key={e}>{e}</li>)}
                  </ul>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 bg-[#6D28D9] text-white px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-[#5B21B6] transition-colors self-start disabled:opacity-60"
              >
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2} /> : <CheckCircle2 className="w-4 h-4" strokeWidth={2} />}
                Show my result
              </button>
              <p className="text-[12px] text-gray-400">
                Data goes to the Qunigma team solely so we can contact you about this result. We do not sell data to third parties.
              </p>
            </form>
          </div>
        </section>
      )}

      {/* RESULT */}
      {stage === 'result' && exposure && (
        <section ref={resultRef} id="result" className="bg-[#171717] py-24 px-6 w-full border-t border-white/10 scroll-mt-24 print:bg-white print:text-black print:border-0">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4 print:hidden">
              <ShieldCheck className="w-5 h-5 text-purple-400" strokeWidth={2} />
              <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase">Your indicative exposure</span>
            </div>

            {submitNotice === 'error' && (
              <div className="mb-6 rounded-xl bg-amber-950/40 border border-amber-700/40 px-4 py-3 flex gap-3 items-start print:hidden">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" strokeWidth={2} />
                <p className="text-[13px] text-amber-200 leading-relaxed">
                  The result is below, but we were unable to save your submission in our system. Please write to us directly at{' '}
                  <a href="mailto:info@qunigma.ai" className="underline">info@qunigma.ai</a>, so we make sure we have your details.
                </p>
              </div>
            )}

            <h2 className="text-[26px] md:text-[32px] font-bold text-white mb-2 tracking-tight print:text-black">
              {company || 'Your organization'}: indicative exposure
            </h2>
            <p className="text-[14px] text-white/50 mb-10 print:text-gray-600">
              This is not an amount you will &quot;lose&quot;, nor a guaranteed penalty. It is the order of magnitude of risk that well-documented compliance insures against, not a discount on a tool.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-6 print:border-gray-200 print:bg-white">
              <div className="text-[13px] text-white/50 uppercase tracking-widest font-bold mb-2 print:text-gray-500">Total indicative exposure</div>
              <div className="text-[44px] md:text-[52px] font-bold text-white tracking-tight leading-none mb-2 print:text-black">{formatEUR(exposure.total)}</div>
              <p className="text-[13px] text-white/40 print:text-gray-500">The sum of the two components below, each with its own formula and source.</p>
            </div>

            <div className="flex flex-col gap-4 mb-8">

              {/* Component 1 */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 print:border-gray-200 print:bg-white">
                <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
                  <span className="text-[14px] font-bold text-white print:text-black">Operational incident cost (scaled benchmark)</span>
                  <span className="text-[20px] font-bold text-purple-300 tabular-nums print:text-purple-700">{formatEUR(exposure.incidentComponent)}</span>
                </div>
                <p className="text-[13px] text-white/50 leading-relaxed print:text-gray-600">
                  Baseline: average breach cost in the financial sector {formatUSD(IBM_BREACH_COST_USD)} (IBM Cost of a Data Breach Report 2024), indicatively {formatEUR(IBM_BREACH_COST_EUR)} after an approximate conversion at {USD_TO_EUR_RATE} USD/EUR (a rate set manually for this calculator, not a live rate). Scaled by a revenue-size multiplier ({exposure.revenueFactor}x for the {exposure.revenueTierLabel} range) and a segment multiplier ({exposure.sectorLabel}, {exposure.sectorFactor}x). Both multipliers are an own, explicitly declared order-of-magnitude Qunigma estimate, not data from an external study: two organizations with identical revenue can have very different real incident costs.
                </p>
              </div>

              {/* Component 2 */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 print:border-gray-200 print:bg-white">
                <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
                  <span className="text-[14px] font-bold text-white print:text-black">Harmonized AI Act penalty (high-risk systems)</span>
                  <span className="text-[20px] font-bold text-purple-300 tabular-nums print:text-purple-700">{exposure.aiActInScope ? formatEUR(exposure.aiActComponent) : formatEUR(0)}</span>
                </div>
                <p className="text-[13px] text-white/50 leading-relaxed print:text-gray-600">
                  {exposure.aiActInScope ? (
                    <>
                      AI Act Art. 99(4): for high-risk systems (including Art. 16, 25 and related provisions, as well as GPAI model providers&apos; obligations) the upper penalty limit is the higher of {formatEUR(AI_ACT_FLAT_EUR)} or {AI_ACT_PERCENT * 100}% of global annual turnover. At the revenue you entered, {formatEUR(exposure.revenue)}, {AI_ACT_PERCENT * 100}% of turnover is {formatEUR(AI_ACT_PERCENT * exposure.revenue)}, so the {AI_ACT_PERCENT * exposure.revenue > AI_ACT_FLAT_EUR ? 'percentage threshold' : 'flat €15M amount'} applies. This is a real, harmonized EU provision, the same figure is already cited in the Compliance section of this site.
                    </>
                  ) : (
                    <>
                      We do not include this component, since you indicated that Annex III AI Act systems are not currently in scope of your organization&apos;s activity. If this changes (e.g. deploying AI-based credit scoring), the real upper penalty limit is the higher of {formatEUR(AI_ACT_FLAT_EUR)} or 3% of global annual turnover, AI Act Art. 99(4).
                    </>
                  )}
                </p>
              </div>

              {/* DORA, qualitative */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 print:border-gray-200 print:bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4 text-white/40 print:text-gray-400" strokeWidth={2} />
                  <span className="text-[14px] font-bold text-white print:text-black">Why there is no separate DORA amount here</span>
                </div>
                <p className="text-[13px] text-white/50 leading-relaxed print:text-gray-600">
                  Unlike the AI Act, the DORA regulation (EU 2022/2554) does not set a single, harmonized penalty rate as a percentage of turnover. Administrative sanctions are set by national supervisory authorities based on their own transposition of the provision (around Art. 50-52 DORA), so any single &quot;X% of turnover for a DORA breach&quot; figure would be a dishonest simplification. The real cost of DORA non-compliance shows up mainly through the operational incident itself (the component above) and through the fact that DORA Art. 5 makes ICT risk management a non-delegable duty of the management body, not the security department.
                </p>
              </div>

            </div>

            <div className="flex flex-wrap gap-3 print:hidden">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 bg-[#6D28D9] text-white px-6 py-3 rounded-full text-[14px] font-semibold hover:bg-[#5B21B6] transition-colors"
              >
                Save as PDF
              </button>
              <a
                href="mailto:info@qunigma.ai"
                className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-6 py-3 rounded-full text-[14px] font-medium hover:border-white/50 hover:text-white transition-colors"
              >
                Discuss the result with our team
              </a>
            </div>

            {/* Contact footer, always visible, including in print */}
            <div className="mt-16 pt-8 border-t border-white/10 print:border-gray-200 text-[13px] text-white/50 print:text-gray-600 flex flex-col items-center gap-2 text-center">
              <span className="font-bold text-white print:text-black">Qunigma</span>
              <span>info@qunigma.ai</span>
              <div className="flex items-center gap-4 mt-1">
                <a href="https://www.linkedin.com/in/peter-mankowski-18065619/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white print:text-gray-600">Peter Mankowski, LinkedIn</a>
                <span className="w-px h-4 bg-white/20 print:bg-gray-300" />
                <a href="https://www.linkedin.com/in/paulcebo/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white print:text-gray-600">Paul Cebo, LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
