import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka Prywatności | Qunigma',
  description: 'Polityka prywatności Qunigma: jak zbieramy, wykorzystujemy i chronimy Twoje dane osobowe zgodnie z RODO.',
  alternates: {
    canonical: 'https://qunigma.ai/privacy',
    languages: {
      'pl-PL': 'https://qunigma.ai/privacy',
      'en-US': 'https://qunigma.ai/en/privacy',
    },
  },
};

export default function PrivacyPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full bg-[#F6F2EA] min-h-screen">
        <div className="max-w-3xl mx-auto px-6 pt-[140px] pb-24">
          <h1 className="text-[36px] md:text-[48px] font-bold text-gray-900 mb-4 tracking-tight">Polityka Prywatności</h1>
          <p className="text-gray-500 text-[14px] mb-12">Ostatnia aktualizacja: kwiecień 2026</p>

          <div className="prose prose-gray max-w-none space-y-10 text-[16px] text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">1. Administrator danych</h2>
              <p>
                Administratorem danych osobowych zbieranych za pośrednictwem tej strony jest Qunigma. Kontakt: <a href="mailto:privacy@qunigma.ai" className="text-purple-600 hover:underline">privacy@qunigma.ai</a>.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">2. Jakie dane zbieramy</h2>
              <p>Możemy zbierać następujące kategorie danych osobowych:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Dane kontaktowe</strong>: imię i nazwisko, adres e-mail, nazwa firmy: gdy wypełniasz formularz kontaktowy lub wnioskujesz o analizę.</li>
                <li><strong>Dane użytkowania</strong>: adres IP, typ przeglądarki, odwiedzone strony, czas spędzony na stronie: zbierane automatycznie przez narzędzia analityczne.</li>
                <li><strong>Dane komunikacyjne</strong>: treść wiadomości przesyłanych do nas przez e-mail lub formularze.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">3. Podstawa prawna przetwarzania</h2>
              <p>Dane osobowe przetwarzamy na następujących podstawach prawnych zgodnie z RODO:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Zgoda</strong> (art. 6 ust. 1 lit. a): gdy wypełniasz formularz i wyraźnie zgadzasz się na kontakt.</li>
                <li><strong>Prawnie uzasadnione interesy</strong> (art. 6 ust. 1 lit. f): w zakresie analityki i doskonalenia naszych usług.</li>
                <li><strong>Wykonanie umowy</strong> (art. 6 ust. 1 lit. b): gdy przetwarzanie jest niezbędne do realizacji zobowiązania umownego.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">4. Jak wykorzystujemy Twoje dane</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Odpowiadanie na zapytania i dostarczanie żądanych analiz</li>
                <li>Przesyłanie istotnych informacji o naszych usługach (za Twoją zgodą)</li>
                <li>Poprawa wydajności strony i doświadczenia użytkownika</li>
                <li>Wypełnianie obowiązków prawnych</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">5. Przechowywanie i przekazywanie danych</h2>
              <p>
                Qunigma działa w oparciu o infrastrukturę suwerenną wobec UE. Twoje dane są przechowywane na terenie Unii Europejskiej i nie są przekazywane do krajów trzecich. Nie korzystamy z usług podlegających amerykańskiej ustawie CLOUD Act w zakresie przechowywania ani przetwarzania danych.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">6. Okres przechowywania danych</h2>
              <p>
                Dane osobowe przechowujemy wyłącznie przez czas niezbędny do realizacji celów opisanych w niniejszej polityce lub wymagany przez obowiązujące przepisy prawa. Dane z formularza kontaktowego przechowywane są przez maksymalnie 24 miesiące, chyba że wcześniej zażądasz ich usunięcia.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">7. Twoje prawa</h2>
              <p>Na podstawie RODO przysługują Ci następujące prawa:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Prawo dostępu</strong>: możesz zażądać kopii danych, które przechowujemy</li>
                <li><strong>Prawo do sprostowania</strong>: możesz poprawić niedokładne lub niekompletne dane</li>
                <li><strong>Prawo do usunięcia</strong>: możesz zażądać usunięcia swoich danych osobowych</li>
                <li><strong>Prawo do ograniczenia przetwarzania</strong>: możesz ograniczyć sposób przetwarzania Twoich danych</li>
                <li><strong>Prawo do przenoszenia danych</strong>: możesz otrzymać swoje dane w ustrukturyzowanym, nadającym się do odczytu maszynowego formacie</li>
                <li><strong>Prawo do sprzeciwu</strong>: możesz sprzeciwić się przetwarzaniu opartemu na prawnie uzasadnionych interesach</li>
                <li><strong>Prawo do wycofania zgody</strong>: w dowolnym momencie, bez wpływu na zgodność z prawem wcześniejszego przetwarzania</li>
              </ul>
              <p className="mt-4">Aby skorzystać z któregokolwiek z tych praw, skontaktuj się z nami pod adresem <a href="mailto:privacy@qunigma.ai" className="text-purple-600 hover:underline">privacy@qunigma.ai</a>.</p>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">8. Pliki cookie i analityka</h2>
              <p>
                Strona może wykorzystywać pliki cookie i narzędzia analityczne w celu zrozumienia, w jaki sposób odwiedzający korzystają z jej treści. Informacje te wykorzystujemy wyłącznie do poprawy działania strony. Możesz w dowolnym momencie wyłączyć pliki cookie w ustawieniach przeglądarki.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">9. Podmioty trzecie</h2>
              <p>
                Nie sprzedajemy Twoich danych podmiotom trzecim. Możemy udostępniać dane zaufanym dostawcom usług działającym jako podmioty przetwarzające, wyłącznie w celach opisanych w niniejszej polityce i na podstawie umów zgodnych z RODO.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">10. Kontakt i skargi</h2>
              <p>
                W sprawie pytań dotyczących prywatności skontaktuj się z naszym Inspektorem Ochrony Danych pod adresem <a href="mailto:privacy@qunigma.ai" className="text-purple-600 hover:underline">privacy@qunigma.ai</a>.
              </p>
              <p className="mt-3">
                Masz również prawo do złożenia skargi do krajowego organu nadzorczego. W Polsce: <a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">UODO (uodo.gov.pl)</a>.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
