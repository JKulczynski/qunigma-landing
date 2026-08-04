import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metodologia | Qunigma: skąd biorą się nasze liczby',
  description: 'Jak liczymy MTTAV, ROI i oszczędności z eliminacji AI-native fraud. Pełna metodologia stojąca za liczbami na stronie Qunigma.',
  alternates: {
    canonical: 'https://qunigma.ai/metodologia',
    languages: {
      'pl-PL': 'https://qunigma.ai/metodologia',
      'en-US': 'https://qunigma.ai/en/methodology',
    },
  },
};

export default function MetodologiaPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-white/60 uppercase">Metodologia</span>
            </div>
            <h1 className="text-[38px] md:text-[56px] font-medium leading-[1.25] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Skąd biorą się</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                nasze liczby.
              </span>
            </h1>
            <p className="text-[17px] text-white/70 max-w-[640px] mx-auto leading-relaxed">
              Jesteśmy młodą firmą i wolimy być transparentni co do metodologii niż zostawić liczby bez kontekstu. Poniżej pełne wyjaśnienie, skąd pochodzi każda wartość na stronie i jak ją policzyliśmy.
            </p>
          </div>
        </section>

        {/* Czas reakcji */}
        <section id="czas-reakcji" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">241 dni → poniżej 2ms</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Czas reakcji</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">241 dni</strong> to średni globalny czas identyfikacji i powstrzymania naruszenia danych, publikowany cyklicznie w raporcie IBM &quot;Cost of a Data Breach&quot;. To liczba branżowa, nie nasza: punkt odniesienia pokazujący, jak długo trwa reakcja w typowej organizacji bez aktywnej obrony.
              </p>
              <p>
                <strong className="text-gray-900">Poniżej 2ms</strong> to zmierzony przez nas czas MTTAV (Mean Time To Active Vectorization), od wykrycia anomalii na poziomie pakietu do autonomicznej neutralizacji w naszym środowisku testowym (PoC). To inna metryka niż pełny cykl życia naruszenia (241 dni obejmuje też etapy poza naszą kontrolą, jak eskalację wewnętrzną czy komunikację z regulatorem). Zestawiamy je obok siebie jako ilustrację skali różnicy między detekcją pasywną a aktywną neutralizacją, nie jako porównanie jeden do jednego tej samej miary.
              </p>
            </div>
          </div>
        </section>

        {/* Oszczędności */}
        <section id="oszczednosci" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">€4.2M</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Oszczędności z eliminacji AI-native fraud</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                To nasze własne modelowanie, nie cytat z pojedynczego raportu. Łączymy publikowane benchmarki kosztu naruszenia danych z danymi o skali strat specyficznych dla oszustw AI-native (deepfake, syntetyczna tożsamość, All Green Fraud) i przekładamy je na scenariusz organizacji wielkości typowego klienta Qunigma.
              </p>
              <p>
                Traktuj tę liczbę jako ilustrację rzędu wielkości potencjalnej ekspozycji, nie jako gwarantowaną kwotę: realne oszczędności zależą od skali organizacji, obecnego stosu zabezpieczeń i profilu ryzyka. Chętnie policzymy konkretny scenariusz dla Twojej organizacji podczas rozmowy.
              </p>
            </div>
          </div>
        </section>

        {/* ROI */}
        <section id="roi" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">338% ROI · +38% produktywności · Ekspozycja regulacyjna</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Jak liczymy ROI i wskaźniki operacyjne</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">338% (3-letni ROI)</strong> i <strong className="text-gray-900">+38% produktywności SecOps</strong> pochodzą z naszego wewnętrznego modelu TCO/ROI, budowanego metodologią zbliżoną do standardowych badań &quot;Total Economic Impact&quot; stosowanych w branży bezpieczeństwa (redukcja alert fatigue, czasu analityka na incydent, kosztu narzędzi konsolidowanych przez MTTAV). To nasza estymata na bazie własnych testów PoC, nie liczba przejęta wprost z jednego zewnętrznego raportu: porównywalne, publicznie dostępne badania dla tej kategorii (AI fraud/risk w fintech) pokazują ROI w podobnym rzędzie wielkości.
              </p>
              <p>
                <strong className="text-gray-900">Sankcje DORA/AI Act (do 7% obrotu)</strong> i <strong className="text-gray-900">odpowiedzialność zarządu (€5M + zakaz funkcji)</strong> to łączna, maksymalna ekspozycja regulacyjna zsumowana ze stosu DORA + AI Act + NIS2, trzy różne akty prawne z różnymi progami kar, przedstawione jako jeden górny pułap ryzyka, nie jako pojedynczy przepis. Pełne rozbicie na poszczególne artykuły przygotowujemy do materiału dla działu compliance. Napisz do nas, jeśli potrzebujesz go już teraz.
              </p>
              <p>
                Ważne doprecyzowanie: DORA Art. 5 nakłada tę odpowiedzialność wprost na zarząd jako obowiązek niedelegowalny, nie da się jej w całości przenieść na dział bezpieczeństwa czy dostawcę. Dlatego traktujemy nienaruszalny log decyzji (kto, kiedy, na jakiej podstawie) jako element ochrony osób podejmujących decyzję, nie tylko formalny wymóg. To też kierunek, w którym idzie nadzór: zrewidowany ECB Guide to Internal Models (2025) wprost wymaga, żeby modele wykorzystujące uczenie maszynowe były &quot;adequately explainable&quot;, nie tylko skuteczne, ale możliwe do wytłumaczenia audytorowi.
              </p>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-4 tracking-tight">Masz pytanie o konkretną liczbę?</h2>
            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
              Napisz do nas, chętnie przejdziemy przez metodologię i pokażemy jak liczby wyglądają dla Twojej organizacji.
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
