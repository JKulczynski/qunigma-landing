import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { MTTAVEngineVisual } from '@/components/MTTAVEngineVisual';
import { HoneypotLLMVisual } from '@/components/HoneypotLLMVisual';
import { MemoryGuardVisual } from '@/components/MemoryGuardVisual';
import { NHISecurityVisual } from '@/components/NHISecurityVisual';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platforma | Qunigma, MTTAV Engine, Honeypot AI Agents, Memory Guard, NHI Security',
  description: 'Cztery warstwy aktywnej obrony AI w jednej architekturze. MTTAV Engine wykrywa i neutralizuje zagrożenia w czasie poniżej 2ms.',
  alternates: {
    canonical: 'https://qunigma.ai/platforma',
    languages: {
      'pl-PL': 'https://qunigma.ai/platforma',
      'en-US': 'https://qunigma.ai/en/platform',
    },
  },
};

const modules = [
  {
    id: 'mttav',
    tag: '01',
    name: 'MTTAV Engine',
    tagline: 'Mean Time To Active Vectorization, poniżej 2ms.',
    description:
      'Rdzeń platformy. Wykrywa anomalie na poziomie pakietu w czasie rzeczywistym i autonomicznie neutralizuje zagrożenie zanim dotrze do systemu docelowego. Żaden SIEM nie działa w tej skali czasowej.',
    stats: [
      { value: '<2ms', label: 'Czas neutralizacji' },
      { value: '99.4%', label: 'Redukcja MTTD' },
      { value: '24/7', label: 'Autonomiczna ochrona' },
    ],
    visual: { top: 'THREAT AGENT', middle: 'MTTAV ENGINE', bottom: 'NEUTRALIZED' },
  },
  {
    id: 'honeypot',
    name: 'Honeypot LLM',
    tag: '02',
    tagline: 'Pułapka zaprojektowana specjalnie dla atakujących AI.',
    description:
      'Fałszywy model językowy wbudowany w infrastrukturę klienta, zwodzący agenty AI i wciągający je w pułapkę, ujawniając metody ataku i dostarczając danych wywiadowczych o zagrożeniu.',
    stats: [
      { value: '100%', label: 'Izolacja atakującego' },
      { value: 'Zero', label: 'False positive' },
      { value: 'Live', label: 'Threat intelligence' },
    ],
    visual: { top: 'ATTACKING AI', middle: 'HONEYPOT LLM', bottom: 'THREAT INTEL' },
  },
  {
    id: 'memory',
    name: 'Memory Guard',
    tagline: 'Ochrona pamięci kontekstowej modeli AI.',
    tag: '03',
    description:
      'Weryfikuje integralność pamięci kontekstowej systemów LLM w czasie rzeczywistym za pomocą SHA-256. Blokuje ataki typu Memory Poisoning zanim zdążą zdegradować decyzje transakcyjne.',
    stats: [
      { value: 'SHA-256', label: 'Weryfikacja integralności' },
      { value: '<1ms', label: 'Overhead na request' },
      { value: 'AI Act', label: 'Art. 15 compliant' },
    ],
    visual: { top: 'POISONED CONTEXT', middle: 'MEMORY GUARD', bottom: 'VERIFIED SHA-256' },
  },
  {
    id: 'nhi',
    name: 'NHI Security',
    tag: '04',
    tagline: 'Governance dla 80% ruchu w chmurze korporacyjnej.',
    description:
      'Automatyczna inwentaryzacja, klasyfikacja i monitoring wszystkich tożsamości maszynowych, API keys, service accounts, tokeny OAuth. Eliminuje niewidoczne wektory ataku zanim zostaną wykorzystane.',
    stats: [
      { value: 'Auto', label: 'Inwentaryzacja NHI' },
      { value: '25 min', label: 'Czas eksfiltracji bez ochrony' },
      { value: 'DORA', label: 'Art. 8 compliant' },
    ],
    visual: { top: 'ROGUE NHI', middle: 'NHI SECURITY', bottom: 'GOVERNED' },
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Co to jest MTTAV Engine i jak działa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MTTAV Engine (Mean Time To Active Vectorization) to rdzeń platformy Qunigma. Wykrywa anomalie na poziomie pakietu w czasie rzeczywistym i autonomicznie neutralizuje zagrożenia w czasie poniżej 2ms, zanim dotrą do systemu docelowego. Redukuje MTTD o 99,4% i działa 24/7 bez interwencji człowieka."
      }
    },
    {
      "@type": "Question",
      "name": "Jak działa Honeypot LLM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Honeypot LLM to fałszywy model językowy wbudowany w infrastrukturę klienta. Zwabia atakujące agenty AI i wciąga je w pułapkę, izolując je ze 100% skutecznością przy zerowej liczbie false positive. Jednocześnie zbiera live threat intelligence o metodach i wektorach ataku."
      }
    },
    {
      "@type": "Question",
      "name": "Co chroni Memory Guard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Memory Guard chroni pamięć kontekstową systemów LLM przed atakami typu Memory Poisoning. Weryfikuje integralność tej pamięci w czasie rzeczywistym za pomocą SHA-256, z narzutem poniżej 1ms na request. Moduł jest zgodny z AI Act Art. 15."
      }
    },
    {
      "@type": "Question",
      "name": "Czym jest NHI Security i dlaczego jest ważna?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NHI Security to moduł automatycznej inwentaryzacji, klasyfikacji i monitorowania wszystkich tożsamości maszynowych: kluczy API, service accounts, tokenów OAuth. Bez ochrony NHI atakujący może dokonać eksfiltracji danych w zaledwie 25 minut. Moduł jest zgodny z DORA Art. 8."
      }
    },
    {
      "@type": "Question",
      "name": "Jak szybko Qunigma wykrywa i neutralizuje zagrożenia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MTTAV Engine neutralizuje zagrożenia w czasie poniżej 2ms od wykrycia anomalii. To czas, w którym żaden tradycyjny SIEM ani SOC nie jest w stanie zareagować. Platforma redukuje Mean Time To Detect o 99,4% w porównaniu do konwencjonalnych rozwiązań."
      }
    },
    {
      "@type": "Question",
      "name": "Czy platforma Qunigma jest zgodna z DORA i AI Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak. Qunigma spełnia wymogi DORA Art. 8 (NHI Security), DORA Art. 19 (gotowe reporting packs od dnia 1) oraz AI Act Art. 15 (Memory Guard). Może być wdrożona on-premise lub w chmurze EU-sovereign, co eliminuje ryzyko CLOUD Act."
      }
    },
    {
      "@type": "Question",
      "name": "Jak długo trwa wdrożenie platformy Qunigma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pełne wdrożenie trwa do 8 dni roboczych. Dzień 1: połączenie API i inwentaryzacja NHI. Dzień 2: kalibracja Honeypot LLM. Dni 3-7: Memory Guard baseline i testy. Od dnia 8: pełna aktywna ochrona. Integracja przez REST API nie wymaga wymiany systemów SIEM, SOC ani core banking."
      }
    }
  ]
};

export default function PlataformaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Page Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-white/60 uppercase">Architektura</span>
            </div>
            <h1 className="text-[38px] md:text-[64px] font-medium leading-[1.1] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Cztery warstwy aktywnej obrony,</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                jedna architektura.
              </span>
            </h1>
            <p className="text-[17px] md:text-[19px] text-white/70 max-w-[680px] mx-auto leading-relaxed">
              MTTAV Engine, Honeypot LLM, Memory Guard i NHI Security działają jako jedna zintegrowana platforma, wymieniając dane wywiadowcze w czasie rzeczywistym.
            </p>
          </div>
        </section>

        {/* Modules */}
        <section className="bg-[#F6F2EA] py-24 px-6 w-full">
          <div className="max-w-7xl mx-auto flex flex-col gap-32">
            {modules.map((mod, i) => (
              <div
                key={mod.id}
                id={mod.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Text */}
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">{mod.tag}, {mod.name}</span>
                  <h2
                    className="text-[32px] md:text-[40px] font-bold leading-tight tracking-tight mb-4"
                    style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                  >
                    {mod.tagline}
                  </h2>
                  <p className="text-[17px] text-gray-600 leading-relaxed mb-10">
                    {mod.description}
                  </p>
                  <div className="grid grid-cols-3 gap-6">
                    {mod.stats.map((s) => (
                      <div key={s.label}>
                        <div className="text-[26px] font-extrabold text-transparent bg-clip-text mb-1" style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #A855F7 100%)' }}>
                          {s.value}
                        </div>
                        <div className="text-[12px] text-gray-500 font-medium uppercase tracking-wide leading-tight">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`bg-[#0D0D0D] border border-purple-800/40 rounded-2xl h-[320px] md:h-[380px] flex items-center justify-center relative overflow-hidden ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(109,40,217,0.12) 0%, transparent 70%)' }} />
                  {mod.id === 'mttav' && <MTTAVEngineVisual />}
                  {mod.id === 'honeypot' && <HoneypotLLMVisual />}
                  {mod.id === 'memory' && <MemoryGuardVisual />}
                  {mod.id === 'nhi' && <NHISecurityVisual />}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works, CAPTURE / PUNISH / PREVENT */}
        <section className="bg-[#171717] py-24 px-6 w-full">
          <div className="max-w-5xl mx-auto text-center">
            <span className="text-[11px] text-purple-500 font-bold tracking-[0.12em] uppercase mb-4 block">Jak to działa</span>
            <h2
              className="text-[32px] md:text-[48px] font-bold leading-tight tracking-tight mb-6 font-[family-name:var(--font-playfair)]"
              style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Od detekcji do neutralizacji w jednym cyklu.
            </h2>
            <p className="text-[17px] text-white/60 max-w-2xl mx-auto mb-20 leading-relaxed">
              Trzyetapowy cykl obrony działa autonomicznie, bez interwencji człowieka, bez opóźnienia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '01', name: 'CAPTURE', desc: 'MTTAV Engine i Honeypot AI agents wykrywają anomalie na poziomie pakietu i ruchu AI. Każde odchylenie jest rejestrowane i klasyfikowane w czasie rzeczywistym.' },
                { step: '02', name: 'PUNISH', desc: 'Zidentyfikowany wektor jest automatycznie izolowany. Podejrzane węzły NHI i agenty AI są odcinane od infrastruktury, zanim zdążą wyrządzić szkody.' },
                { step: '03', name: 'PREVENT', desc: 'Memory Guard i NHI Security uodparniają całą infrastrukturę na dany wektor ataku. Wiedza z incydentu wzmacnia ochronę globalnie.' },
              ].map((item) => (
                <div key={item.step} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:border-purple-600/50 transition-colors">
                  <div className="text-[11px] text-purple-500 font-bold tracking-[0.12em] uppercase mb-3">{item.step}</div>
                  <h3 className="text-white font-bold text-[20px] mb-4">{item.name}</h3>
                  <p className="text-white/60 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 max-w-4xl mx-auto flex flex-col gap-6">
              <p className="text-white/70 text-[16px] leading-relaxed">
                Zasilana zaawansowaną detekcją anomalii, nasza platforma identyfikuje nowe, zero-day threats, które tradycyjne narzędzia bezpieczeństwa oparte na sygnaturach pomijają. Podczas gdy konkurenci polegają na rejestrach zagrożeń i konwencjonalnych frameworkach takich jak FS-ISAC Adversarial AI Framework czy FS AI RMF, technologia Qunigma idzie dalej. Wykrywamy wysoce zaawansowane i wcześniej nieznane ataki poprzez rozpoznawanie subtelnych odchyleń behawioralnych, zabezpieczając środowisko przed ukrytymi zagrożeniami bez konieczności wcześniejszej ekspozycji lub danych treningowych.
              </p>
              <p className="text-white/70 text-[16px] leading-relaxed">
                Nasze AI RED Team Engagements są zaprojektowane, by ujawniać krytyczne luki w zabezpieczeniach wykraczające poza standardowe frameworki bezpieczeństwa. Qunigma przeprowadza wysoce spersonalizowane symulacje ataków dostosowane do specyfiki klienta, testując prawdziwe granice Twojej ochrony. W miarę jak eksploatacja agentów AI staje się jednym z najszybciej rosnących wektorów zagrożeń w branży, jesteśmy pionierami w tym obszarze, proaktywnie zabezpieczając zaawansowane luki, które inni pomijają.
              </p>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="bg-[#F6F2EA] py-24 px-6 w-full">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Integracja</span>
                <h2
                  className="text-[32px] md:text-[42px] font-bold leading-tight tracking-tight mb-6"
                  style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                  Zero disruption.
                </h2>
                <p className="text-[17px] text-gray-600 leading-relaxed mb-10">
                  Platforma integruje się z istniejącą infrastrukturą bankową przez standardowe API. Brak konieczności wymiany systemów SIEM, SOC ani core banking.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    'REST API + Webhook, integracja z dowolnym SIEM',
                    'On-premise lub EU-sovereign cloud (brak CLOUD Act)',
                    'Pre-built connectors: Splunk, Microsoft Sentinel, IBM QRadar',
                    'DORA Art. 19 reporting packs gotowe od dnia 1',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold text-[16px] mt-0.5 shrink-0">✓</span>
                      <span className="text-gray-700 text-[16px] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0D0D0D] border border-purple-800/40 rounded-2xl p-10 flex flex-col gap-6">
                <div className="text-[11px] text-purple-500 font-bold tracking-[0.12em] uppercase">Timeline wdrożenia</div>
                {[
                  { day: 'Dzień 1', label: 'API connect + inwentaryzacja NHI' },
                  { day: 'Dzień 2', label: 'Kalibracja Honeypot LLM' },
                  { day: 'Dzień 3–7', label: 'Memory Guard baseline + testy' },
                  { day: 'Dzień 8+', label: 'Pełna ochrona aktywna' },
                ].map((item) => (
                  <div key={item.day} className="flex items-center gap-4">
                    <div className="w-20 shrink-0 text-[12px] font-bold text-purple-400 uppercase tracking-wide">{item.day}</div>
                    <div className="flex-1 h-px bg-white/10" />
                    <div className="text-white/70 text-[14px] text-right">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
