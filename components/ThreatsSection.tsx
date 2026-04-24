export function ThreatsSection() {
  return (
    <section aria-label="Threat vectors section" className="bg-[#F6F2EA] text-gray-900 py-32 px-6 w-full">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-[44px] font-bold text-center mb-24 max-w-4xl mx-auto leading-tight tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}
        >
          Twój system SIEM i obecny audyt są ślepe na nową generację wektorów AI.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">

          {/* Column 1 */}
          <div className="flex flex-col relative">
            <span aria-hidden="true" className="text-[96px] font-bold text-purple-300 leading-none absolute -top-12 -left-4 z-0 opacity-50 select-none">01</span>
            <div className="relative z-10">
              <h3 className="text-[22px] font-bold text-gray-900 mb-4">All Green Fraud</h3>
              <p className="text-[17px] text-gray-700 leading-relaxed mb-6">
                Złośliwy kod fałszuje logi systemowe, dashboardy SecOps pokazują status 'All Green', podczas gdy kapitał wycieka. Średni czas wykrycia: 90+ dni (OWASP ASI06).
              </p>
              <span className="text-[11px] text-purple-600 font-medium tracking-[0.08em] uppercase">RISK ASSESSMENT: CRITICAL →</span>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col relative">
            <span aria-hidden="true" className="text-[96px] font-bold text-purple-300 leading-none absolute -top-12 -left-4 z-0 opacity-50 select-none">02</span>
            <div className="relative z-10">
              <h3 className="text-[22px] font-bold text-gray-900 mb-4">Memory Poisoning</h3>
              <p className="text-[17px] text-gray-700 leading-relaxed mb-6">
                Infiltracja wektorem pamięci modeli LLM. Atakujący manipulują kontekstem historycznym, celowo degradując decyzje transakcyjne — pozostając pod radarem przez wiele tygodni.
              </p>
              <span className="text-[11px] text-purple-600 font-medium tracking-[0.08em] uppercase">RISK ASSESSMENT: HIGH →</span>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col relative">
            <span aria-hidden="true" className="text-[96px] font-bold text-purple-300 leading-none absolute -top-12 -left-4 z-0 opacity-50 select-none">03</span>
            <div className="relative z-10">
              <h3 className="text-[22px] font-bold text-gray-900 mb-4">Non-Human Identities (NHI)</h3>
              <p className="text-[17px] text-gray-700 leading-relaxed mb-6">
                Tożsamości maszynowe to dziś 80% ruchu w chmurze korporacyjnej (IBM 2025). Gdy zostaną przejęte, czas eksfiltracji danych wynosi zaledwie 25 minut.
              </p>
              <span className="text-[11px] text-purple-600 font-medium tracking-[0.08em] uppercase">RISK ASSESSMENT: IMMEDIATE →</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
