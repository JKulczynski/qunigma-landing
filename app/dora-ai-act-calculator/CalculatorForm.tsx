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
/* Metodologia: stałe i wzory                                          */
/* ------------------------------------------------------------------ */
/*
 * Komponent 1: koszt incydentu (benchmark IBM, przeskalowany)
 * Źródło: IBM Cost of a Data Breach Report 2024, sektor finansowy,
 * ta sama liczba jest już cytowana na tej stronie w
 * app/wiedza/nhi-25-minut-przejecie-tozsamosci/page.tsx.
 * Kurs USD->EUR jest przybliżony i ustawiony ręcznie (nie jest to
 * kurs na żywo), to jest jawnie zaznaczone w interfejsie.
 */
const IBM_BREACH_COST_USD = 6_080_000;
const USD_TO_EUR_RATE = 0.92;
const IBM_BREACH_COST_EUR = Math.round(IBM_BREACH_COST_USD * USD_TO_EUR_RATE);

/*
 * Mnożnik wielkości przychodu: własny, jawnie zadeklarowany szacunek
 * Qunigma rzędu wielkości, nie dane zewnętrzne. Ten sam sposób
 * zaznaczania "to nasze modelowanie, nie cytat" jest już używany dla
 * liczby 4.2M EUR w app/metodologia/page.tsx.
 */
const REVENUE_TIERS = [
  { max: 50_000_000, factor: 0.3, label: 'do 50M EUR' },
  { max: 250_000_000, factor: 0.55, label: '50M - 250M EUR' },
  { max: 1_000_000_000, factor: 0.85, label: '250M - 1 mld EUR' },
  { max: 5_000_000_000, factor: 1.4, label: '1 - 5 mld EUR' },
  { max: Infinity, factor: 2.2, label: 'powyżej 5 mld EUR' },
] as const;

function revenueTierFor(revenue: number) {
  return REVENUE_TIERS.find((t) => revenue <= t.max) ?? REVENUE_TIERS[REVENUE_TIERS.length - 1];
}

/*
 * Mnożnik sektora: również własny szacunek, jawnie opisany jako
 * uproszczenie w interfejsie poniżej.
 */
const SECTOR_OPTIONS = [
  { value: 'uniwersalny', label: 'Bank uniwersalny', factor: 1.0 },
  { value: 'specjalistyczny', label: 'Bank specjalistyczny / spółdzielczy', factor: 0.85 },
  { value: 'ubezpieczyciel', label: 'Ubezpieczyciel', factor: 0.9 },
  { value: 'inna', label: 'Inna instytucja finansowa', factor: 0.8 },
] as const;

/*
 * Komponent 2: AI Act, próg zharmonizowany, prawdziwy i weryfikowalny.
 * Art. 99 ust. 4 AI Act: dla systemów wysokiego ryzyka (Art. 16, 25 i
 * powiązane, w tym obowiązki dostawców modeli GPAI) kara to do
 * 15 000 000 EUR albo 3% globalnego rocznego obrotu, W ZALEŻNOŚCI
 * KTÓRA WARTOŚĆ JEST WYŻSZA. Te same liczby są już użyte w
 * app/compliance/page.tsx ("Do 3% obrotu lub 15M EUR").
 * Uwzględniamy ten komponent tylko, gdy użytkownik wskaże systemy
 * AI z Annex III w zakresie działania organizacji.
 */
const AI_ACT_FLAT_EUR = 15_000_000;
const AI_ACT_PERCENT = 0.03;

const STACK_OPTIONS = [
  'SIEM / SOC',
  'EDR / XDR',
  'IAM / PAM',
  'Governance tożsamości maszynowych (NHI)',
  'Threat Intelligence',
  'Brak / wczesny etap',
];

const COUNTRY_OPTIONS = [
  'Polska',
  'Niemcy',
  'Francja',
  'Włochy',
  'Hiszpania',
  'Holandia',
  'Austria',
  'Irlandia',
  'Belgia',
  'Portugalia',
  'Inny kraj UE',
];

function formatEUR(value: number) {
  return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
}

function formatUSD(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
}

function formatPl(value: number) {
  return new Intl.NumberFormat('pl-PL', { maximumFractionDigits: 2 }).format(value);
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

    if (!company.trim()) errs.push('Podaj nazwę banku / instytucji.');
    if (!revenueStr || !Number.isFinite(revenue) || revenue <= 0) errs.push('Podaj roczny przychód w EUR (nie AUM).');
    if (!country) errs.push('Wybierz kraj.');
    if (!sector) errs.push('Wybierz segment działalności.');
    if (aiActInScope === null) errs.push('Zaznacz, czy systemy AI z Annex III są w zakresie.');

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
    if (!fullName.trim()) errs.push('Podaj imię i nazwisko.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail)) errs.push('Podaj poprawny służbowy adres email.');
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
      // Wynik pokazujemy niezależnie od statusu zapisu do CRM: użytkownik podał już
      // swoje dane, nie ma powodu blokować mu dostępu do policzonej wartości, gdy
      // zawiedzie wyłącznie zapis leada. Błąd zapisu sygnalizujemy osobno, poniżej.
      setStage('result');
      requestAnimationFrame(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }

  return (
    <>
      {/* KROK 1: dane organizacji */}
      <section id="kalkulator" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-5 h-5 text-purple-600" strokeWidth={2} />
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Krok 1 z 2 · Twoja organizacja</span>
          </div>
          <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">Kilka danych, żeby liczba miała sens</h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-10">
            Roczny przychód w EUR, nie aktywa pod zarządzaniem (AUM). Sankcje AI Act i benchmarki kosztu incydentu odnoszą się do obrotu, nie do wielkości bilansu.
          </p>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 flex flex-col gap-8">
            <div>
              <label htmlFor="company" className="block text-[13px] font-semibold text-gray-700 mb-2">Nazwa banku / instytucji</label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="np. Bank XYZ S.A."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label htmlFor="revenue" className="block text-[13px] font-semibold text-gray-700 mb-2">Roczny przychód (EUR), nie AUM</label>
              <input
                id="revenue"
                type="number"
                min={0}
                step={1_000_000}
                value={revenueStr}
                onChange={(e) => setRevenueStr(e.target.value)}
                placeholder="np. 250000000"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <div className="flex flex-wrap gap-2 mt-3">
                {REVENUE_TIERS.map((t) => (
                  <Pill key={t.label} active={false} onClick={() => setRevenueStr(String(Math.round(Math.min(t.max, t.max === Infinity ? 8_000_000_000 : t.max) * 0.6)))}>
                    {t.label}
                  </Pill>
                ))}
              </div>
              <p className="text-[12px] text-gray-400 mt-2">Przyciski powyżej wstawiają orientacyjną wartość ze środka przedziału, możesz ją nadpisać ręcznie.</p>
            </div>

            <div>
              <label htmlFor="country" className="block text-[13px] font-semibold text-gray-700 mb-2">Kraj</label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Wybierz kraj</option>
                {COUNTRY_OPTIONS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <span className="block text-[13px] font-semibold text-gray-700 mb-2">Segment działalności</span>
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
                Czy w organizacji działają systemy AI z Annex III AI Act?
              </span>
              <p className="text-[12px] text-gray-400 mb-3">Np. scoring kredytowy, ocena zdolności kredytowej, biometria, wykrywanie oszustw oparte o AI.</p>
              <div className="flex gap-2">
                <Pill active={aiActInScope === true} onClick={() => setAiActInScope(true)}>Tak</Pill>
                <Pill active={aiActInScope === false} onClick={() => setAiActInScope(false)}>Nie / nie wiem</Pill>
              </div>
            </div>

            <div>
              <span className="block text-[13px] font-semibold text-gray-700 mb-2">Obecny stos zabezpieczeń (opcjonalnie)</span>
              <div className="flex flex-wrap gap-2">
                {STACK_OPTIONS.map((item) => (
                  <Pill key={item} active={stack.includes(item)} onClick={() => toggleStack(item)}>
                    {item}
                  </Pill>
                ))}
              </div>
              <p className="text-[12px] text-gray-400 mt-2">
                Ta informacja nie zmienia wyniku poniżej, tłumaczymy dlaczego w sekcji &quot;jak to liczymy&quot;. Trafia do naszego zespołu, żeby ewentualna rozmowa była konkretna.
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
              Oblicz ekspozycję
            </button>
          </div>
        </div>
      </section>

      {/* KROK 2: bramka kontaktowa */}
      {stage !== 'form' && (
        <section ref={gateRef} id="kontakt" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Krok 2 z 2 · Dokąd wysłać wynik</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">Wynik jest spersonalizowany, więc prosimy o dane kontaktowe</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-10">
              W przeciwieństwie do innych materiałów na tej stronie, ten wynik jest liczony specjalnie dla podanych przez Ciebie danych, dlatego prosimy o kontakt, zanim go pokażemy. Wynik pojawi się od razu poniżej, bez czekania na email zwrotny.
            </p>

            <form onSubmit={handleGateSubmit} className="rounded-2xl border border-gray-200 bg-[#F6F2EA] p-6 md:p-8 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-[13px] font-semibold text-gray-700 mb-2">Imię i nazwisko</label>
                  <input id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
                <div>
                  <label htmlFor="workEmail" className="block text-[13px] font-semibold text-gray-700 mb-2">Służbowy adres email</label>
                  <input id="workEmail" type="email" value={workEmail} onChange={(e) => setWorkEmail(e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
                <div>
                  <label htmlFor="role" className="block text-[13px] font-semibold text-gray-700 mb-2">Stanowisko (opcjonalnie)</label>
                  <input id="role" type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="np. CFO" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[13px] font-semibold text-gray-700 mb-2">Telefon (opcjonalnie)</label>
                  <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
              </div>
              <div>
                <label htmlFor="concern" className="block text-[13px] font-semibold text-gray-700 mb-2">Co najbardziej niepokoi Cię w kontekście DORA? (opcjonalnie)</label>
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
                Pokaż mój wynik
              </button>
              <p className="text-[12px] text-gray-400">
                Dane trafiają do zespołu Qunigma wyłącznie po to, żeby móc się z Tobą skontaktować w sprawie tego wyniku. Nie sprzedajemy danych stronom trzecim.
              </p>
            </form>
          </div>
        </section>
      )}

      {/* WYNIK */}
      {stage === 'result' && exposure && (
        <section ref={resultRef} id="wynik" className="bg-[#171717] py-24 px-6 w-full border-t border-white/10 scroll-mt-24 print:bg-white print:text-black print:border-0">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4 print:hidden">
              <ShieldCheck className="w-5 h-5 text-purple-400" strokeWidth={2} />
              <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase">Twoja wstępna ekspozycja</span>
            </div>

            {submitNotice === 'error' && (
              <div className="mb-6 rounded-xl bg-amber-950/40 border border-amber-700/40 px-4 py-3 flex gap-3 items-start print:hidden">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" strokeWidth={2} />
                <p className="text-[13px] text-amber-200 leading-relaxed">
                  Wynik jest poniżej, ale nie udało się zapisać Twojego zgłoszenia w naszym systemie. Napisz do nas bezpośrednio na{' '}
                  <a href="mailto:info@qunigma.ai" className="underline">info@qunigma.ai</a>, żebyśmy na pewno mieli Twoje dane.
                </p>
              </div>
            )}

            <h2 className="text-[26px] md:text-[32px] font-bold text-white mb-2 tracking-tight print:text-black">
              {company || 'Twoja organizacja'}: orientacyjna ekspozycja
            </h2>
            <p className="text-[14px] text-white/50 mb-10 print:text-gray-600">
              To nie jest kwota, którą &quot;stracisz&quot;, ani gwarantowana kara. To rząd wielkości ryzyka, przed którym ubezpiecza dobrze udokumentowana zgodność, nie rabat na narzędzie.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-6 print:border-gray-200 print:bg-white">
              <div className="text-[13px] text-white/50 uppercase tracking-widest font-bold mb-2 print:text-gray-500">Łączna orientacyjna ekspozycja</div>
              <div className="text-[44px] md:text-[52px] font-bold text-white tracking-tight leading-none mb-2 print:text-black">{formatEUR(exposure.total)}</div>
              <p className="text-[13px] text-white/40 print:text-gray-500">Suma dwóch komponentów poniżej, każdy z osobnym wzorem i źródłem.</p>
            </div>

            <div className="flex flex-col gap-4 mb-8">

              {/* Komponent 1 */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 print:border-gray-200 print:bg-white">
                <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
                  <span className="text-[14px] font-bold text-white print:text-black">Koszt operacyjny incydentu (benchmark, przeskalowany)</span>
                  <span className="text-[20px] font-bold text-purple-300 tabular-nums print:text-purple-700">{formatEUR(exposure.incidentComponent)}</span>
                </div>
                <p className="text-[13px] text-white/50 leading-relaxed print:text-gray-600">
                  Baza: średni koszt naruszenia w sektorze finansowym {formatUSD(IBM_BREACH_COST_USD)} (IBM Cost of a Data Breach Report 2024), orientacyjnie {formatEUR(IBM_BREACH_COST_EUR)} po przybliżonym przeliczeniu kursem {formatPl(USD_TO_EUR_RATE)} USD/EUR (kurs ustawiony ręcznie na potrzeby tego kalkulatora, nie jest to kurs na żywo). Przeskalowane mnożnikiem wielkości przychodu ({formatPl(exposure.revenueFactor)}x dla przedziału {exposure.revenueTierLabel}) i mnożnikiem segmentu ({exposure.sectorLabel}, {formatPl(exposure.sectorFactor)}x). Oba mnożniki to własny, jawnie deklarowany szacunek Qunigma rzędu wielkości, nie dane z zewnętrznego badania: dwie organizacje o identycznym przychodzie mogą mieć bardzo różny realny koszt incydentu.
                </p>
              </div>

              {/* Komponent 2 */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 print:border-gray-200 print:bg-white">
                <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
                  <span className="text-[14px] font-bold text-white print:text-black">Zharmonizowana kara AI Act (systemy wysokiego ryzyka)</span>
                  <span className="text-[20px] font-bold text-purple-300 tabular-nums print:text-purple-700">{exposure.aiActInScope ? formatEUR(exposure.aiActComponent) : formatEUR(0)}</span>
                </div>
                <p className="text-[13px] text-white/50 leading-relaxed print:text-gray-600">
                  {exposure.aiActInScope ? (
                    <>
                      Art. 99 ust. 4 AI Act: dla systemów wysokiego ryzyka (m.in. Art. 16, 25 i powiązane, oraz obowiązki dostawców modeli GPAI) górna granica kary to wyższa z kwot {formatEUR(AI_ACT_FLAT_EUR)} albo {AI_ACT_PERCENT * 100}% globalnego rocznego obrotu. Przy podanym przychodzie {formatEUR(exposure.revenue)}, {AI_ACT_PERCENT * 100}% obrotu to {formatEUR(AI_ACT_PERCENT * exposure.revenue)}, więc zastosowanie ma {AI_ACT_PERCENT * exposure.revenue > AI_ACT_FLAT_EUR ? 'próg procentowy' : 'kwota stała 15 mln EUR'}. To realny, zharmonizowany przepis unijny, ta sama liczba jest już cytowana w sekcji Compliance na tej stronie.
                    </>
                  ) : (
                    <>
                      Nie wliczamy tego komponentu, bo zaznaczono, że systemy z Annex III AI Act nie są dziś w zakresie działania organizacji. Jeśli to się zmieni (np. wdrożenie scoringu kredytowego opartego o AI), realna górna granica kary to wyższa z kwot {formatEUR(AI_ACT_FLAT_EUR)} albo 3% globalnego rocznego obrotu, Art. 99 ust. 4 AI Act.
                    </>
                  )}
                </p>
              </div>

              {/* DORA, jakosciowo */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 print:border-gray-200 print:bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4 text-white/40 print:text-gray-400" strokeWidth={2} />
                  <span className="text-[14px] font-bold text-white print:text-black">Dlaczego nie ma tu osobnej kwoty za DORA</span>
                </div>
                <p className="text-[13px] text-white/50 leading-relaxed print:text-gray-600">
                  W przeciwieństwie do AI Act, rozporządzenie DORA (UE 2022/2554) nie ustanawia jednej, zharmonizowanej stawki kary jako procent obrotu. Sankcje administracyjne ustalają krajowe organy nadzoru na podstawie własnej transpozycji przepisu (okolice Art. 50-52 DORA), więc każda pojedyncza liczba &quot;X% obrotu za naruszenie DORA&quot; byłaby nieuczciwym uproszczeniem. Realny koszt niezgodności z DORA ujawnia się głównie przez sam incydent operacyjny (komponent powyżej) oraz przez fakt, że DORA Art. 5 czyni zarządzanie ryzykiem ICT niedelegowalnym obowiązkiem zarządu, nie działu bezpieczeństwa.
                </p>
              </div>

            </div>

            <div className="flex flex-wrap gap-3 print:hidden">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 bg-[#6D28D9] text-white px-6 py-3 rounded-full text-[14px] font-semibold hover:bg-[#5B21B6] transition-colors"
              >
                Zapisz jako PDF
              </button>
              <a
                href="mailto:info@qunigma.ai"
                className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-6 py-3 rounded-full text-[14px] font-medium hover:border-white/50 hover:text-white transition-colors"
              >
                Omów wynik z zespołem
              </a>
            </div>

            {/* Stopka kontaktowa, zawsze widoczna, także w wydruku */}
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
