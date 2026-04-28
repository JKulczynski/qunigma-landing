import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import { TeamSection } from '@/components/TeamSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Firma | Qunigma, O nas, Zespół, Misja',
  description: 'Qunigma to EU-native platforma active cyber defense zbudowana przez ekspertów AI i bezpieczeństwa dla europejskich banków Tier-1.',
};

export default function FirmaPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-white/60 uppercase">Firma</span>
            </div>
            <h1 className="text-[38px] md:text-[64px] font-medium leading-[1.1] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Zbudowane w UE,</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                przez ekspertów. Dla banków.
              </span>
            </h1>
            <p className="text-[17px] md:text-[19px] text-white/70 max-w-[680px] mx-auto leading-relaxed">
              Qunigma powstała jako odpowiedź na nową generację zagrożeń AI-native, niewidocznych dla tradycyjnych systemów SIEM i niedostępnych dla istniejących rozwiązań security.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-[#F6F2EA] py-24 px-6 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Misja</span>
              <h2
                className="text-[28px] md:text-[42px] font-bold leading-tight tracking-tight mb-6"
                style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                Aktywna obrona AI-native dla europejskiej infrastruktury finansowej.
              </h2>
              <p className="text-[17px] text-gray-600 leading-relaxed mb-8">
                Europejskie banki Tier-1 stają przed zagrożeniami, które tradycyjne systemy bezpieczeństwa nie są w stanie wykryć, All Green Fraud, Memory Poisoning i ataki NHI działają poniżej progu widzialności SIEM, przez tygodnie lub miesiące.
              </p>
              <p className="text-[17px] text-gray-600 leading-relaxed">
                Qunigma zaprojektowało pierwszą platformę active defense zbudowaną specjalnie pod te wektory, z architekturą EU-sovereign, bez CLOUD Act exposure i gotowością na DORA, AI Act, CRA i NIS2 od dnia wdrożenia.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: 'EU-sovereign', desc: 'Zero CLOUD Act. Żaden bajt danych nie opuszcza jurysdykcji UE.' },
                { label: 'DORA-aligned', desc: 'Pre-built packs dla Art. 8, 19 i 25. Gotowość regulacyjna od dnia 1.' },
                { label: 'AI-native', desc: 'Zaprojektowane specjalnie dla zagrożeń AI, nie adaptowane z tradycyjnych systemów.' },
                { label: 'Active defense', desc: 'Neutralizacja w czasie poniżej 2ms. Nie tylko detekcja, aktywna odpowiedź.' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-purple-200 transition-colors">
                  <h4 className="text-[16px] font-bold text-gray-900 mb-2">{item.label}</h4>
                  <p className="text-[14px] text-gray-500 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="bg-[#0A0A0A] py-24 px-6 w-full">
          <div className="max-w-4xl mx-auto">
            <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase mb-4 block">Nasza historia</span>
            <h2
              className="text-[28px] md:text-[40px] font-bold leading-tight tracking-tight mb-12 font-[family-name:var(--font-playfair)]"
              style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Historia Qunigma nie zaczęła się w sali konferencyjnej.
            </h2>
            <div className="flex flex-col gap-6 text-[17px] text-white/70 leading-relaxed">
              <p>
                Zaczęła się w 1998 roku w korytarzach technologicznych Waterloo. Nasz zespół założycielski był przy narodzinach BlackBerry (RIM), obserwując, jak rodzi się prawdziwa innowacja w obszarze end-to-end cybersecurity. Podczas gdy świat widział urządzenie mobilne, nasze kierownictwo było w okopach, walcząc z pierwszą falą zaawansowanych zagrożeń zewnętrznych.
              </p>
              <p>
                Gdy krajobraz się zmieniał, ewoluowaliśmy razem z nim. Kiedy branża przestawiła się na modernizację punktów końcowych i złożone włamania ery IoT, byliśmy na pierwszej linii, reagując, broniąc i ucząc się. Przez ostatnie 20 lat szybko ewoluujące taktyki "Red Teams" to nie tylko coś, co studiowaliśmy, to część naszego DNA.
              </p>
              <p>
                Nie operujemy z pięciogwiazdkowych kurortów i nie znajdziesz nas na prywatnych odrzutowcach. Nasze zasoby nie są wydawane na luksusowe wyjazdy pracownicze, są inwestowane w portfele patentowe i taktyki obronne, które chronią naszych klientów. Wierzymy, że cyberbezpieczeństwo należy do rąk tych, którzy naprawdę spędzili dekady w "okopach."
              </p>
              <p>
                Pomyśl o nas jak o starszym bracie, który zawsze miał twoje plecy w liceum. Gdy chuligani szukali celu, to my staliśmy w luce. Strzegliśmy obwodu przez długi czas, i nie zamierzamy teraz mrugać.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <TeamSection />

        {/* Rada Doradcza */}
        <section className="bg-[#0D0D0D] py-24 px-6 w-full border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase mb-4 block">Rada Doradcza</span>
            <h2
              className="text-[28px] md:text-[40px] font-bold leading-tight tracking-tight mb-6 font-[family-name:var(--font-playfair)]"
              style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Strategiczna walidacja na najwyższym poziomie.
            </h2>
            <p className="text-[16px] text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto">
              Rada Doradcza Qunigma skupia praktyków z europejskich rynków finansowych, regulatorów i środowiska AI research. Trwa formowanie składu.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { role: 'Ekspert regulacyjny UE', desc: 'Doświadczenie w implementacji DORA i AI Act w instytucjach finansowych.' },
                { role: 'Lider AI Security', desc: 'Badania nad AI-native attacks i architekturą active defense.' },
                { role: 'Praktyk rynku finansowego', desc: 'Wieloletnie doświadczenie w zarządzaniu ryzykiem Tier-1.' },
              ].map((item) => (
                <div key={item.role} className="bg-white/5 border border-white/10 rounded-xl p-6 text-left">
                  <div className="w-12 h-12 rounded-full bg-purple-900/40 border border-purple-700/40 mb-4 flex items-center justify-center">
                    <span className="text-purple-400 text-lg">?</span>
                  </div>
                  <h4 className="text-white font-bold mb-2">{item.role}</h4>
                  <p className="text-white/50 text-[13px] leading-snug">{item.desc}</p>
                  <span className="inline-block mt-3 text-[11px] text-purple-400 font-medium uppercase tracking-widest">Wkrótce</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-[#F6F2EA] py-24 px-6 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Kontakt</span>
            <h2
              className="text-[28px] md:text-[40px] font-bold leading-tight tracking-tight mb-6"
              style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Porozmawiajmy.
            </h2>
            <p className="text-[17px] text-gray-600 mb-10 leading-relaxed">
              Jesteś CISO, CTO lub liderem compliance w europejskiej instytucji finansowej? Skontaktuj się, przeprowadzimy bezpłatną analizę luk DORA i pokażemy jak Qunigma integruje się z Twoją infrastrukturą.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:piotr@qunigma.ai"
                className="bg-[#6D28D9] text-white px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-[#5B21B6] transition-colors"
              >
                piotr@qunigma.ai
              </a>
              <div className="flex items-center gap-3 text-gray-500 text-[14px]">
                <span className="w-px h-5 bg-gray-300" />
                <span>DPO: privacy@qunigma.ai</span>
              </div>
            </div>
            <p className="text-[13px] text-gray-400 mt-8">EU-sovereign infrastructure. GDPR compliant. Brak CLOUD Act.</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
