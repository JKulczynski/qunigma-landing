import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import { Info, HelpCircle, ScrollText, Scale, ListChecks } from 'lucide-react';
import { CalculatorForm } from './CalculatorForm';

export const metadata: Metadata = {
  title: 'Kalkulator ROI: DORA & AI Act, ekspozycja regulacyjna dla CFO | Qunigma',
  description: 'Policz orientacyjną ekspozycję regulacyjną i operacyjną Twojego banku: benchmark kosztu incydentu (IBM 2024) i zharmonizowana kara AI Act dla systemów wysokiego ryzyka. Transparentna metodologia, każda liczba z widocznym wzorem i źródłem.',
  alternates: {
    canonical: 'https://qunigma.ai/dora-ai-act-calculator',
    languages: {
      'pl-PL': 'https://qunigma.ai/dora-ai-act-calculator',
      'en-US': 'https://qunigma.ai/en/dora-ai-act-calculator',
    },
  },
};

const faq = [
  {
    q: 'Dlaczego kalkulator nie pokazuje jednej kwoty kary za DORA?',
    a: 'Bo taka jedna, zharmonizowana kwota nie istnieje. W przeciwieństwie do AI Act, rozporządzenie DORA (UE 2022/2554) nie ustanawia jednej stawki procentu obrotu obowiązującej w całej UE. Sankcje administracyjne ustalają krajowe organy nadzoru na podstawie własnej transpozycji przepisu, w okolicach Art. 50-52 DORA, więc realne widełki różnią się między państwami członkowskimi. Podanie jednej liczby "X% obrotu za DORA" byłoby nieuczciwym uproszczeniem, dlatego zamiast tego pokazujemy realny koszt operacyjny incydentu, któremu DORA ma zapobiegać, oraz fakt, że zarządzanie ryzykiem ICT jest niedelegowalnym obowiązkiem zarządu z Art. 5.',
  },
  {
    q: 'Skąd bierze się liczba dla AI Act?',
    a: 'Z tekstu regulacji. Art. 99 ust. 4 AI Act ustanawia zharmonizowaną, publiczną i weryfikowalną górną granicę kary dla systemów wysokiego ryzyka (m.in. Art. 16, 25 i powiązane, oraz obowiązki dostawców modeli GPAI): wyższa z kwot 15 000 000 EUR albo 3% globalnego rocznego obrotu. Te same liczby są już cytowane w sekcji Compliance na tej stronie. Uwzględniamy ten komponent tylko wtedy, gdy zaznaczysz, że systemy z Annex III faktycznie działają w Twojej organizacji.',
  },
  {
    q: 'Czy to jest wiążąca wycena albo prognoza aktuarialna?',
    a: 'Nie. To narzędzie orientacyjne, pokazujące rząd wielkości potencjalnej ekspozycji, nie precyzyjną, wiążącą kalkulację. Komponent AI Act opiera się na prawdziwym, zharmonizowanym przepisie, ale komponent kosztu incydentu jest przeskalowanym benchmarkiem branżowym z jawnie zadeklarowanymi mnożnikami własnymi Qunigma. Dwie organizacje o identycznym przychodzie mogą mieć bardzo różny realny profil ryzyka. Przed decyzją budżetową czy compliance zweryfikuj liczby z własnym działem ryzyka, prawnym lub aktuarialnym.',
  },
  {
    q: 'Dlaczego formularz pyta o przychód, a nie o aktywa pod zarządzaniem (AUM)?',
    a: 'Bo zarówno benchmark kosztu incydentu, jak i próg procentowy AI Act (Art. 99 ust. 4) odnoszą się do globalnego rocznego obrotu (turnover), nie do wielkości bilansu czy AUM. To rozróżnienie bywa mylone, ale ma bezpośredni wpływ na wynik: bank z dużym AUM, ale relatywnie niskim przychodem, będzie miał inną ekspozycję niż wynikałoby to z samej wielkości bilansu.',
  },
  {
    q: 'Dlaczego mój obecny stos zabezpieczeń nie obniża wyniku?',
    a: 'Bo nie mamy wiarygodnego, zweryfikowanego publicznie mnożnika, który powiedziałby "wdrożenie SIEM obniża oczekiwany koszt incydentu o X%" dla konkretnej organizacji. Wolimy nie podawać takiej liczby niż ją zmyślić. Informacja o stosie zabezpieczeń trafia do naszego zespołu, żeby ewentualna rozmowa od razu dotyczyła konkretnych luk, a nie żeby sztucznie poprawić wynik kalkulatora.',
  },
  {
    q: 'Co się dzieje z moimi danymi po wysłaniu formularza?',
    a: 'Trafiają do wewnętrznego systemu leadów zespołu Qunigma, wyłącznie po to, żeby móc skontaktować się z Tobą w sprawie tego wyniku. Nie sprzedajemy ani nie udostępniamy danych stronom trzecim. Szczegóły w naszej Polityce Prywatności.',
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
              <span className="text-[12px] font-medium tracking-[0.10em] text-purple-300 uppercase">Kalkulator ROI: DORA &amp; AI Act</span>
            </div>
            <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.15] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Nie kupujecie oszczędności.</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                Kupujecie ubezpieczenie od ryzyka.
              </span>
            </h1>
            <p className="text-[17px] text-white/70 max-w-[680px] mx-auto leading-relaxed mb-4">
              Policz orientacyjną ekspozycję regulacyjną i operacyjną Twojego banku w dwóch minutach: realny, zharmonizowany próg kary AI Act dla systemów wysokiego ryzyka i przeskalowany benchmark kosztu incydentu w sektorze finansowym. Każda liczba w wyniku ma widoczny wzór i źródło.
            </p>
            <p className="text-[13px] text-white/40 max-w-[560px] mx-auto leading-relaxed">
              Business case dla CFO · wynik spersonalizowany, wymaga podania danych kontaktowych · ostatnia weryfikacja źródeł: sierpień 2026
            </p>
          </div>
        </section>

        {/* Uwaga metodologiczna */}
        <section className="bg-white py-10 px-6 w-full border-b border-gray-100">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[14px] text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Uwaga o metodologii.</strong> DORA (rozporządzenie UE 2022/2554), inaczej niż GDPR czy AI Act, nie ma jednej zharmonizowanej stawki kary jako procent obrotu, sankcje ustalają krajowe organy nadzoru. Nie znajdziesz więc w tym narzędziu wymyślonej liczby "X% obrotu za DORA". Zamiast tego łączymy dwa elementy, które da się rzetelnie policzyć: realny, zharmonizowany próg kary AI Act dla systemów wysokiego ryzyka (Art. 99 ust. 4) oraz przeskalowany, jawnie oznaczony jako szacunkowy, benchmark kosztu incydentu w sektorze finansowym (IBM Cost of a Data Breach Report 2024, ta sama liczba jest już cytowana gdzie indziej na tej stronie). Pełny rozkład wzoru jest widoczny przy każdej liczbie w wyniku.
            </p>
          </div>
        </section>

        {/* Dla kogo i po co, framing ubezpieczeniowy */}
        <section id="dla-kogo" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ScrollText className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Dla kogo i po co</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Business case, nie kolejny rabat na narzędzie</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                Ten kalkulator jest zaadresowany bezpośrednio do <strong className="text-gray-900">CFO i komitetu finansowego</strong>, nie do CISO czy działu bezpieczeństwa: te dwie role mają osobne materiały na tej stronie. Pytanie, na które odpowiada, nie brzmi &quot;ile zaoszczędzimy&quot;, tylko <strong className="text-gray-900">&quot;przed jakim rzędem wielkości ryzyka faktycznie się ubezpieczamy&quot;</strong>. To rozróżnienie ma znaczenie: TCO narzędzia bezpieczeństwa jest łatwe do policzenia, koszt jego braku, dopóki nie zamieni się w realny incydent lub karę, zwykle nie jest.
              </p>
              <p>
                Wynik jest spersonalizowany pod Twoje dane: przychód, kraj, segment działalności i to, czy w organizacji działają systemy AI objęte Annex III AI Act. To jedyny materiał typu lead magnet na tej stronie, który wymaga podania kontaktu przed pokazaniem wyniku, i robimy to celowo: liczba, którą zobaczysz, faktycznie zależy od tego, co nam podasz, więc gate przed wynikiem ma uzasadnienie merytoryczne, nie tylko marketingowe.
              </p>
            </div>
          </div>
        </section>

        {/* Jak liczymy, pełna metodologia */}
        <section id="metodologia" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Jak liczymy</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Dwa komponenty, dwa różne poziomy pewności</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed mb-10">
              <p>
                <strong className="text-gray-900">Komponent 1, koszt operacyjny incydentu.</strong> Punkt startowy to średni koszt naruszenia danych w sektorze finansowym z raportu IBM Cost of a Data Breach 2024, ta sama liczba, którą cytujemy w innym materiale na tej stronie. Przeliczamy ją orientacyjnie na EUR (kurs ustawiony ręcznie, nie na żywo, jawnie pokazany w wyniku) i skalujemy dwoma własnymi mnożnikami: wielkością przychodu i segmentem działalności. Oba mnożniki są jawnie oznaczone jako szacunek Qunigma, nie dane z zewnętrznego badania, dokładnie w tym samym duchu, w jakim opisujemy liczbę 4,2M EUR w naszej ogólnej metodologii.
              </p>
              <p>
                <strong className="text-gray-900">Komponent 2, kara AI Act.</strong> To jedyny element tego kalkulatora oparty o jeden, zharmonizowany przepis unijny, nie o szacunek. Art. 99 ust. 4 AI Act ustanawia dla systemów wysokiego ryzyka (Art. 16, 25 i powiązane, oraz obowiązki dostawców modeli GPAI) górną granicę kary: wyższa z kwot 15 000 000 EUR albo 3% globalnego rocznego obrotu. Wliczamy ten komponent tylko, gdy zaznaczysz, że systemy z Annex III faktycznie działają w Twojej organizacji, bo inaczej przepis nie ma zastosowania.
              </p>
              <p>
                <strong className="text-gray-900">Czego celowo nie liczymy.</strong> Nie podajemy jednej kwoty kary za DORA, bo taka zharmonizowana stawka nie istnieje: sankcje ustalają krajowe organy nadzoru. Nie obniżamy też wyniku na podstawie deklarowanego stosu zabezpieczeń, bo nie mamy wiarygodnego, publicznie zweryfikowanego mnożnika łączącego konkretne narzędzie z konkretną redukcją ryzyka. Wolimy nie podać liczby, niż podać liczbę, której nie potrafimy obronić.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 overflow-hidden">
              {[
                { label: 'Koszt incydentu (benchmark)', desc: 'IBM Cost of a Data Breach 2024 (sektor finansowy) x mnożnik przychodu x mnożnik segmentu. Szacunek rzędu wielkości.', tag: 'Szacunek' },
                { label: 'Kara AI Act (systemy wysokiego ryzyka)', desc: 'Wyższa z kwot 15M EUR albo 3% obrotu, wyłącznie gdy systemy z Annex III są w zakresie. Art. 99 ust. 4 AI Act.', tag: 'Przepis' },
                { label: 'DORA', desc: 'Brak jednej zharmonizowanej stawki, kompetencja krajowych nadzorców. Pokazane jakościowo, bez wymyślonej kwoty.', tag: 'Jakościowo' },
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

        {/* Spis treści */}
        <section className="bg-[#F6F2EA] py-8 px-6 w-full border-b border-gray-200">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
            {[
              { href: '#dla-kogo', label: 'Dla kogo' },
              { href: '#metodologia', label: 'Jak liczymy' },
              { href: '#kalkulator', label: 'Kalkulator' },
              { href: '#faq', label: 'FAQ' },
              { href: '#zrodla', label: 'Źródła' },
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

        {/* Kalkulator, gate, wynik */}
        <CalculatorForm />

        {/* FAQ */}
        <section id="faq" className="bg-[#171717] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-5 h-5 text-purple-400" strokeWidth={2} />
              <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase">Pytania i odpowiedzi</span>
            </div>
            <h2
              className="text-[28px] md:text-[36px] font-bold leading-tight tracking-tight mb-12"
              style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Najczęstsze pytania o metodologię i dane
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

        {/* Źródła */}
        <section id="zrodla" className="bg-[#F6F2EA] py-16 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ListChecks className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Źródła</span>
            </div>
            <ul className="text-[13px] text-gray-500 leading-relaxed flex flex-col gap-1.5 list-disc pl-5">
              <li>Rozporządzenie (UE) 2024/1689 (AI Act), Art. 99 ust. 4 (kary za naruszenia dot. systemów wysokiego ryzyka i modeli GPAI), EUR-Lex</li>
              <li>Rozporządzenie (UE) 2022/2554 (DORA), Art. 5 (niedelegowalna odpowiedzialność zarządu za ryzyko ICT), Art. 50-52 (sankcje administracyjne, kompetencja krajowa), EUR-Lex</li>
              <li>IBM, Cost of a Data Breach Report 2024, sektor finansowy (średni koszt naruszenia, 22% powyżej średniej globalnej), cytowane też w innym materiale na tej stronie</li>
              <li>Mnożniki wielkości przychodu i segmentu działalności: własny, jawnie oznaczony szacunek Qunigma, nie dane z zewnętrznego badania</li>
            </ul>
            <p className="text-[12px] text-gray-400 mt-6 leading-relaxed">
              Ten kalkulator to narzędzie edukacyjne i orientacyjne, nie porada prawna, podatkowa ani formalna wycena aktuarialna. Kwoty pokazują rząd wielkości potencjalnej ekspozycji, nie gwarantowaną karę ani przewidywany koszt. Przed decyzją budżetową lub compliance zweryfikuj liczby z własnym działem prawnym, ryzyka lub aktuarialnym. Jeśli znajdziesz nieścisłość, napisz do nas, poprawimy narzędzie.
            </p>
          </div>
        </section>

        {/* Kontakt */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-4 tracking-tight">Chcesz przejść przez wynik razem z nami?</h2>
            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
              Napisz do nas, omówimy założenia kalkulatora i pokażemy, jak dokładniejszy business case wyglądałby dla Twojej organizacji.
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
