import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import { CheckSquare, Calendar, HelpCircle, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Act Annex III: Checklist gotowości dla banków Tier-1 | Qunigma',
  description: 'Checklist gotowości na wymogi AI Act dla systemów wysokiego ryzyka w bankowości: Art. 9 (zarządzanie ryzykiem), Art. 15 (dokładność, odporność, cyberbezpieczeństwo) i Art. 17 (system zarządzania jakością), z aktualnym harmonogramem po Digital Omnibus.',
  alternates: {
    canonical: 'https://qunigma.ai/wiedza/ai-act-annex-iii-checklist',
  },
};

type Item = { text: string; ref: string };

const artykul9: Item[] = [
  { text: 'System zarządzania ryzykiem ustanowiony, wdrożony, udokumentowany i utrzymywany dla każdego systemu AI wysokiego ryzyka.', ref: 'Art. 9 ust. 1' },
  { text: 'Proces działa jako ciągły, iteracyjny cykl z regularnym przeglądem i aktualizacją przez cały okres eksploatacji systemu.', ref: 'Art. 9 ust. 2' },
  { text: 'Zidentyfikowane i przeanalizowane znane oraz rozsądnie przewidywalne ryzyka dla zdrowia, bezpieczeństwa i praw podstawowych przy zamierzonym użyciu.', ref: 'Art. 9 ust. 2 lit. a' },
  { text: 'Oszacowane i ocenione ryzyka wynikające z zamierzonego użycia oraz z rozsądnie przewidywalnego niewłaściwego użycia.', ref: 'Art. 9 ust. 2 lit. b' },
  { text: 'Wbudowany mechanizm oceny nowych ryzyk na podstawie danych z systemu monitorowania porynkowego.', ref: 'Art. 9 ust. 2 lit. c' },
  { text: 'Dla każdego zidentyfikowanego ryzyka wdrożone odpowiednie i celowane środki zarządzania ryzykiem.', ref: 'Art. 9 ust. 2 lit. d' },
  { text: 'Ryzyko rezydualne eliminowane lub redukowane poprzez projekt i rozwój tam, gdzie jest to technicznie wykonalne.', ref: 'Art. 9 ust. 5 lit. a' },
  { text: 'Dla ryzyk niemożliwych do wyeliminowania projektowo, wdrożone odpowiednie środki łagodzące i kontrolne.', ref: 'Art. 9 ust. 5 lit. b' },
  { text: 'Dostarczane informacje zgodne z Art. 13 (instrukcja użytkowania) oraz szkolenie operatorów, uwzględniające ich wiedzę, doświadczenie i przewidywany kontekst użycia.', ref: 'Art. 9 ust. 5 lit. c' },
  { text: 'Testy wykonywane na każdym istotnym etapie procesu rozwoju systemu.', ref: 'Art. 9 ust. 6' },
  { text: 'Testy końcowe wykonane przed wprowadzeniem systemu na rynek, wobec z góry określonych metryk i progów probabilistycznych właściwych dla zamierzonego celu.', ref: 'Art. 9 ust. 8' },
  { text: 'Udokumentowana decyzja o ewentualnym wykorzystaniu testów w warunkach rzeczywistych.', ref: 'Art. 9 ust. 7, Art. 60' },
  { text: 'Przeanalizowany i udokumentowany potencjalny niekorzystny wpływ systemu na osoby poniżej 18 roku życia i inne grupy wrażliwe wśród klientów banku.', ref: 'Art. 9 ust. 9' },
  { text: 'Sprawdzone, czy istniejący system zarządzania ryzykiem operacyjnym lub ICT banku (np. ramy przyjęte na potrzeby DORA) może zintegrować wymogi Art. 9 zamiast tworzyć równoległy, zdublowany proces.', ref: 'Art. 9 ust. 10' },
];

const artykul15: Item[] = [
  { text: 'System zaprojektowany tak, by osiągać odpowiedni poziom dokładności, odporności i cyberbezpieczeństwa oraz działać spójnie w tych wymiarach przez cały cykl życia.', ref: 'Art. 15 ust. 1' },
  { text: 'Monitorowane pojawiające się benchmarki i metodyki pomiaru właściwe dla danej kategorii zastosowania systemu.', ref: 'Art. 15 ust. 2' },
  { text: 'Poziomy dokładności i właściwe metryki dokładności zadeklarowane w dołączonej instrukcji użytkowania.', ref: 'Art. 15 ust. 3' },
  { text: 'Wdrożone techniczne środki odporności na błędy, awarie i niespójności powstające w samym systemie lub w jego środowisku operacyjnym.', ref: 'Art. 15 ust. 4' },
  { text: 'Wdrożone środki organizacyjne wspierające odporność systemu, komplementarne wobec środków technicznych.', ref: 'Art. 15 ust. 4' },
  { text: 'Rozważone i, gdzie zasadne, wdrożone rozwiązania redundancji technicznej, w tym plany backup lub fail-safe.', ref: 'Art. 15 ust. 4' },
  { text: 'Dla systemów uczących się po wprowadzeniu na rynek: wdrożone środki minimalizujące ryzyko sprzężeń zwrotnych (feedback loops) i błędów systematycznych wpływających na kolejne decyzje.', ref: 'Art. 15 ust. 4' },
  { text: 'Wdrożone środki odporności na próby nieautoryzowanej zmiany sposobu użycia, wyników lub działania systemu przez osoby trzecie.', ref: 'Art. 15 ust. 5' },
  { text: 'Wdrożone konkretne środki techniczne przeciwdziałające zatruwaniu danych treningowych (data poisoning).', ref: 'Art. 15 ust. 5' },
  { text: 'Wdrożone konkretne środki techniczne przeciwdziałające zatruwaniu modelu (model poisoning).', ref: 'Art. 15 ust. 5' },
  { text: 'Wdrożone konkretne środki techniczne przeciwdziałające przykładom adwersarialnym i atakom ewazyjnym.', ref: 'Art. 15 ust. 5' },
  { text: 'Wdrożone konkretne środki techniczne przeciwdziałające atakom na poufność, w tym eksfiltracji modelu i wnioskowaniu o danych treningowych.', ref: 'Art. 15 ust. 5' },
];

const artykul17: Item[] = [
  { text: 'Udokumentowana strategia zgodności regulacyjnej wraz z procedurą zarządzania modyfikacjami systemu.', ref: 'Art. 17 ust. 1 lit. a' },
  { text: 'Ustanowione techniki i procedury projektowania, kontroli projektu i weryfikacji projektu.', ref: 'Art. 17 ust. 1 lit. b' },
  { text: 'Ustanowione techniki, procedury i systematyczne działania zapewnienia jakości rozwoju systemu.', ref: 'Art. 17 ust. 1 lit. c' },
  { text: 'Procedury badania, testowania i walidacji przed, w trakcie i po zakończeniu rozwoju systemu, z określoną częstotliwością testów.', ref: 'Art. 17 ust. 1 lit. d' },
  { text: 'Zastosowane specyfikacje techniczne i normy zharmonizowane, a tam gdzie nie są w pełni dostępne, zdefiniowane alternatywne środki zapewnienia zgodności.', ref: 'Art. 17 ust. 1 lit. e' },
  { text: 'System zarządzania danymi obejmujący pozyskiwanie, gromadzenie, analizę, etykietowanie, przechowywanie, filtrowanie, eksplorację, agregację i retencję danych.', ref: 'Art. 17 ust. 1 lit. f' },
  { text: 'Zaimplementowany system zarządzania ryzykiem zgodny z Art. 9 jako integralny element QMS.', ref: 'Art. 17 ust. 1 lit. g' },
  { text: 'Ustanowiony i utrzymywany system monitorowania porynkowego.', ref: 'Art. 17 ust. 1 lit. h, Art. 72' },
  { text: 'Ustanowione procedury zgłaszania poważnych incydentów.', ref: 'Art. 17 ust. 1 lit. i, Art. 73' },
  { text: 'Zdefiniowane protokoły komunikacji z organami nadzoru, jednostkami notyfikowanymi, operatorami, klientami i innymi interesariuszami.', ref: 'Art. 17 ust. 1 lit. j' },
  { text: 'Ustanowiony system prowadzenia rejestrów i przechowywania dokumentacji.', ref: 'Art. 17 ust. 1 lit. k' },
  { text: 'Zarządzanie zasobami, w tym środki zapewnienia ciągłości dostaw.', ref: 'Art. 17 ust. 1 lit. l' },
  { text: 'Zdefiniowane ramy odpowiedzialności kierownictwa i pozostałego personelu.', ref: 'Art. 17 ust. 1 lit. m' },
  { text: 'Potwierdzona i udokumentowana proporcjonalność QMS do wielkości organizacji, bez obniżenia wymaganego poziomu rygoru i ochrony.', ref: 'Art. 17 ust. 2' },
  { text: 'Wykonane mapowanie, które elementy QMS bank może spełnić przez istniejące zasady ładu wewnętrznego wynikające z prawa usług finansowych, a które trzy elementy (zarządzanie ryzykiem, monitorowanie porynkowe, zgłaszanie incydentów) muszą pozostać odrębne mimo częściowego zwolnienia.', ref: 'Art. 17 ust. 4' },
];

const faq = [
  {
    q: 'Czy termin 2 sierpnia 2026 nadal obowiązuje dla systemów AI wysokiego ryzyka z Annex III?',
    a: 'Nie. Regulacja (UE) 2026/1744 (tzw. Digital Omnibus na AI), opublikowana w Dzienniku Urzędowym UE 24 lipca 2026 i obowiązująca od 27 lipca 2026, przesunęła datę stosowania głównych obowiązków dla samodzielnych systemów wysokiego ryzyka z Annex III na 2 grudnia 2027. Data 2 sierpnia 2026 pozostaje aktualna wyłącznie dla obowiązków przejrzystości z Art. 50, nie dla Annex III.',
  },
  {
    q: 'Czy scoring kredytowy i ocena zdolności kredytowej to systemy wysokiego ryzyka?',
    a: 'Tak, jeśli oceniają zdolność kredytową osób fizycznych lub ustalają ich scoring kredytowy, kwalifikują się jako wysokiego ryzyka na mocy Annex III pkt 5 lit. b. Jedyny wyraźny wyjątek to systemy AI służące wyłącznie do wykrywania oszustw finansowych.',
  },
  {
    q: 'Czy bank może użyć istniejącego ładu wewnętrznego zamiast budować osobny system zarządzania jakością pod AI Act?',
    a: 'Częściowo tak. Art. 17 ust. 4 pozwala instytucjom finansowym spełnić wymogi QMS poprzez zgodność z zasadami ładu wewnętrznego wynikającymi z unijnego prawa usług finansowych, ale nie obejmuje to trzech elementów: systemu zarządzania ryzykiem z Art. 9, systemu monitorowania porynkowego i procedur zgłaszania poważnych incydentów. Te trzy elementy muszą istnieć odrębnie.',
  },
  {
    q: 'Czy weryfikacja biometryczna klienta w procesie KYC podlega pod Annex III?',
    a: 'Systemy służące wyłącznie do potwierdzenia, że dana osoba jest tą, za którą się podaje (weryfikacja jeden-do-jednego), są wprost wyłączone z definicji zdalnej identyfikacji biometrycznej w Annex III pkt 1. Ryzyko wysokiego ryzyka dotyczy zdalnej identyfikacji biometrycznej i kategoryzacji biometrycznej, nie standardowej weryfikacji tożsamości w onboardingu.',
  },
  {
    q: 'Czy testy penetracyjne TLPT wymagane przez DORA zastępują wymogi cyberbezpieczeństwa z Art. 15 AI Act?',
    a: 'Nie, to dwa odrębne obowiązki o różnym zakresie. TLPT z Art. 26 i 27 DORA, wykonywane w cyklu maksymalnie trzyletnim według metodyki TIBER-EU, testują odporność całej infrastruktury ICT wspierającej funkcje krytyczne. Art. 15 AI Act wymaga odporności konkretnego systemu AI na zatruwanie danych, zatruwanie modelu, ataki adwersarialne i ataki na poufność już na etapie projektowania. W praktyce dobrze zaprojektowany zakres TLPT powinien obejmować systemy AI wysokiego ryzyka jako część infrastruktury krytycznej, ale nie zwalnia to z odrębnej dokumentacji wymaganej przez Art. 15.',
  },
];

export default function AIActAnnexIIIChecklistPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="rounded-full bg-amber-500/15 border border-amber-500/30 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-amber-300 uppercase">Checklist</span>
            </div>
            <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.15] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">AI Act Annex III:</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                checklist gotowości dla banków Tier-1.
              </span>
            </h1>
            <p className="text-[17px] text-white/70 max-w-[640px] mx-auto leading-relaxed mb-4">
              41 punktów kontrolnych zbudowanych wprost z tekstu Art. 9, 15 i 17 rozporządzenia (UE) 2024/1689, plus zaktualizowany harmonogram po Digital Omnibus. Dokument roboczy dla zespołów compliance i bezpieczeństwa, nie materiał sprzedażowy.
            </p>
            <p className="text-[13px] text-white/40 max-w-[560px] mx-auto leading-relaxed">
              5 min czytania · ostatnia weryfikacja: sierpień 2026
            </p>
          </div>
        </section>

        {/* Uwaga o liczbie punktów */}
        <section className="bg-white py-10 px-6 w-full border-b border-gray-100">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Ten dokument zawiera <strong className="text-gray-900">41 realnych, weryfikowalnych punktów</strong> (14 dla Art. 9, 12 dla Art. 15, 15 dla Art. 17), każdy z odniesieniem do konkretnego ustępu regulacji. Wolimy 41 punktów, które da się sprawdzić w EUR-Lex, niż okrągłą liczbę bez pokrycia w tekście prawnym.
            </p>
          </div>
        </section>

        {/* Zakres */}
        <section id="zakres" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Co jest w zakresie i dlaczego</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Które systemy AI w banku Tier-1 kwalifikują się jako wysokiego ryzyka</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                Annex III rozporządzenia (UE) 2024/1689 wylicza zamkniętą listę kategorii systemów AI wysokiego ryzyka. Dla instytucji finansowej Tier-1 praktyczne znaczenie mają przede wszystkim cztery punkty tej listy.
              </p>
              <p>
                <strong className="text-gray-900">Punkt 5 lit. b, ocena zdolności kredytowej i scoring kredytowy.</strong> Każdy system AI oceniający zdolność kredytową osoby fizycznej lub ustalający jej scoring kredytowy jest wysokiego ryzyka, z wyjątkiem systemów służących wyłącznie do wykrywania oszustw finansowych.
              </p>
              <p>
                <strong className="text-gray-900">Punkt 5 lit. c, ocena ryzyka i taryfikacja w ubezpieczeniach na życie i zdrowotnych.</strong> Dotyczy banków z ramieniem bancassurance lub oferujących produkty ubezpieczeniowe powiązane z kredytem.
              </p>
              <p>
                <strong className="text-gray-900">Punkt 4, zatrudnienie i zarządzanie pracownikami.</strong> Systemy rekrutacyjne, oceniające kandydatów, wpływające na warunki pracy, awanse, rozwiązanie stosunku pracy, przydział zadań lub monitorujące wydajność.
              </p>
              <p>
                <strong className="text-gray-900">Punkt 1, biometria.</strong> Zdalna identyfikacja biometryczna i kategoryzacja biometryczna są wysokiego ryzyka. Ważne rozróżnienie: standardowa weryfikacja tożsamości jeden-do-jednego w procesie KYC, czyli potwierdzenie, że dana osoba jest tą, za którą się podaje, jest z tej definicji wprost wyłączona.
              </p>
              <p>
                Poniższy checklist nie odtwarza całej listy Annex III. Skupia się na trzech artykułach, które definiują, co dokładnie trzeba zrobić z systemem już zakwalifikowanym jako wysokiego ryzyka: Art. 9 (system zarządzania ryzykiem), Art. 15 (dokładność, odporność, cyberbezpieczeństwo) i Art. 17 (system zarządzania jakością).
              </p>
            </div>
          </div>
        </section>

        {/* Harmonogram */}
        <section id="harmonogram" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Harmonogram po Digital Omnibus</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Termin Annex III przesunięty na 2 grudnia 2027</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed mb-10">
              <p>
                Pierwotnie obowiązki dla samodzielnych systemów wysokiego ryzyka z Annex III miały wejść w życie 2 sierpnia 2026. Ten termin już nie obowiązuje. Regulacja (UE) 2026/1744, zwana potocznie Digital Omnibus na AI, została opublikowana w Dzienniku Urzędowym UE 24 lipca 2026 i weszła w życie 27 lipca 2026, po zatwierdzeniu przez Parlament Europejski 16 czerwca 2026 i przez Radę UE 29 czerwca 2026.
              </p>
              <p>
                Kluczowa zmiana dla banków: <strong className="text-gray-900">nowa data stosowania głównych obowiązków dla samodzielnych systemów wysokiego ryzyka z Annex III to 2 grudnia 2027</strong>, czyli 16 miesięcy później niż pierwotnie planowano. Dla systemów AI wbudowanych w produkty regulowane na mocy Annex I (inna kategoria niż ta opisana w tym dokumencie) termin przesunięto na 2 sierpnia 2028.
              </p>
              <p>
                To nie oznacza, że sierpień 2026 stracił znaczenie. <strong className="text-gray-900">Obowiązki przejrzystości z Art. 50 nie zostały przesunięte</strong> i obowiązują od 2 sierpnia 2026 zgodnie z pierwotnym harmonogramem, dotyczy to m.in. oznaczania treści syntetycznych i informowania osób o interakcji z systemem AI. Jedyny wyjątek to techniczny mechanizm znakowania (watermarking) z Art. 50 ust. 2, dla którego wprowadzono czteromiesięczny okres przejściowy do 2 grudnia 2026, ale wyłącznie dla systemów już obecnych na rynku przed sierpniem 2026.
              </p>
              <p>
                Praktyczna konsekwencja dla harmonogramu wewnętrznego: masz teraz więcej czasu na wdrożenie Art. 9, 15 i 17 dla systemów z Annex III niż zakładały plany sprzed lipca 2026. To dobry moment, żeby zweryfikować, czy Twój plan projektu compliance nadal zakłada nieaktualną datę sierpniową i przesunąć priorytety zamiast przyspieszać pod presją terminu, który już nie obowiązuje.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-2 text-[13px] font-bold uppercase tracking-wide px-6 py-3 bg-gray-50 border-b border-gray-200 text-gray-600">
                <span>Obowiązek</span>
                <span>Data stosowania</span>
              </div>
              {[
                { label: 'Art. 50, obowiązki przejrzystości', date: '2 sierpnia 2026 (bez zmian)' },
                { label: 'Art. 50 ust. 2, znakowanie techniczne (dla systemów już na rynku)', date: 'okres przejściowy do 2 grudnia 2026' },
                { label: 'Annex III, samodzielne systemy wysokiego ryzyka', date: '2 grudnia 2027 (przesunięte z 2 sierpnia 2026)' },
                { label: 'Annex I, systemy wysokiego ryzyka wbudowane w produkty regulowane', date: '2 sierpnia 2028 (przesunięte)' },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-2 px-6 py-4 border-b last:border-0 border-gray-100 text-[14px]">
                  <span className="text-gray-900 font-medium">{row.label}</span>
                  <span className="text-gray-600">{row.date}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist Art. 9 */}
        <ChecklistSection
          id="art-9"
          eyebrow="Blok 1 z 3 · 14 punktów"
          title="Art. 9: system zarządzania ryzykiem"
          intro="Ciągły, iteracyjny proces prowadzony przez cały cykl życia systemu, nie jednorazowy audyt przed wdrożeniem."
          items={artykul9}
          bg="F6F2EA"
        />

        {/* Checklist Art. 15 */}
        <ChecklistSection
          id="art-15"
          eyebrow="Blok 2 z 3 · 12 punktów"
          title="Art. 15: dokładność, odporność i cyberbezpieczeństwo"
          intro="Wymogi projektowe i techniczne, w tym cztery konkretne kategorie ataków, które system musi wytrzymać: zatruwanie danych, zatruwanie modelu, ataki adwersarialne, ataki na poufność."
          items={artykul15}
          bg="white"
        />

        {/* Checklist Art. 17 */}
        <ChecklistSection
          id="art-17"
          eyebrow="Blok 3 z 3 · 15 punktów"
          title="Art. 17: system zarządzania jakością"
          intro="Trzynaście elementów wymaganych wprost w ust. 1, plus zasada proporcjonalności i częściowe zwolnienie dla instytucji finansowych z ust. 4."
          items={artykul17}
          bg="F6F2EA"
        />

        {/* Kontekst regulacyjny */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Warto wiedzieć</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Jak ten checklist łączy się z resztą stosu regulacyjnego</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                Art. 5 DORA nakłada odpowiedzialność za zarządzanie ryzykiem ICT wprost na zarząd, jako obowiązek niedelegowalny. System AI wysokiego ryzyka wpisuje się w tę samą logikę: nienaruszalny log decyzji dotyczących ryzyka z Art. 9 (kto zidentyfikował ryzyko, kiedy, na jakiej podstawie) chroni też osoby podejmujące decyzję, nie tylko formalnie spełnia wymóg.
              </p>
              <p>
                Art. 26 i 27 DORA wymagają testów penetracyjnych opartych na analizie zagrożeń (TLPT), zgodnych z metodyką TIBER-EU, co najmniej raz na trzy lata dla podmiotów zidentyfikowanych przez nadzorcę. Dobrze zaprojektowany zakres TLPT powinien obejmować systemy AI wysokiego ryzyka jako część infrastruktury krytycznej, ale to nie zwalnia z odrębnych wymogów Art. 15.
              </p>
              <p>
                Zrewidowany ECB Guide to Internal Models z lipca 2025 wprowadził po raz pierwszy jednoznaczne oczekiwania nadzorcze wobec modeli uczenia maszynowego wykorzystywanych w modelach wewnętrznych: muszą być odpowiednio wytłumaczalne (adequately explainable), a złożoność modelu musi być uzasadniona jego skutecznością. To ten sam kierunek co Art. 15 AI Act, dokumentacja i wytłumaczalność systemu, nie tylko jego skuteczność.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#171717] py-24 px-6 w-full">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-5 h-5 text-purple-400" strokeWidth={2} />
              <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase">Pytania i odpowiedzi</span>
            </div>
            <h2
              className="text-[28px] md:text-[36px] font-bold leading-tight tracking-tight mb-12"
              style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Najczęstsze pytania zespołów compliance
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
        <section className="bg-[#F6F2EA] py-16 px-6 w-full">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Źródła</span>
            <ul className="text-[13px] text-gray-500 leading-relaxed flex flex-col gap-1.5 list-disc pl-5">
              <li>Rozporządzenie (UE) 2024/1689 (AI Act), Art. 9, 15, 17, Annex III, EUR-Lex</li>
              <li>Rozporządzenie (UE) 2026/1744 (Digital Omnibus na AI), Dziennik Urzędowy UE, publikacja 24.07.2026</li>
              <li>Rada UE, komunikat prasowy o przyjęciu pakietu upraszczającego AI Act, 29.06.2026</li>
              <li>Komisja Europejska, Shaping Europe's Digital Future, informacja o wejściu w życie Digital Omnibus</li>
              <li>EBA, AI Act, implications for the EU banking and payments sector</li>
              <li>ECB Banking Supervision, Revised Guide to Internal Models, 28.07.2025</li>
              <li>Rozporządzenie (UE) 2022/2554 (DORA), Art. 5, 26, 27</li>
            </ul>
            <p className="text-[12px] text-gray-400 mt-6 leading-relaxed">
              Ten dokument to materiał edukacyjny, nie porada prawna. Regulacje i ich interpretacje zmieniają się, przed podjęciem decyzji compliance zweryfikuj aktualny stan prawny z działem prawnym lub doradcą regulacyjnym.
            </p>
          </div>
        </section>

        {/* Kontakt */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-4 tracking-tight">Potrzebujesz pomocy przy audycie gotowości?</h2>
            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
              Napisz do nas, przejdziemy przez ten checklist razem z Twoim zespołem compliance i wskażemy, gdzie masz realne luki.
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

function ChecklistSection({
  id,
  eyebrow,
  title,
  intro,
  items,
  bg,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: Item[];
  bg: 'F6F2EA' | 'white';
}) {
  const isCream = bg === 'F6F2EA';
  return (
    <section id={id} className={`${isCream ? 'bg-[#F6F2EA]' : 'bg-white border-t border-gray-100'} py-24 px-6 w-full scroll-mt-24`}>
      <div className="max-w-3xl mx-auto">
        <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">{eyebrow}</span>
        <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">{title}</h2>
        <p className="text-[16px] text-gray-600 leading-relaxed mb-10">{intro}</p>

        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden divide-y divide-gray-100">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 px-6 py-5 hover:bg-gray-50/60 transition-colors">
              <CheckSquare className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" strokeWidth={1.75} />
              <div className="flex-1">
                <p className="text-[15px] text-gray-800 leading-relaxed">{item.text}</p>
                <span className="inline-block mt-2 text-[11px] font-bold text-purple-600/80 tracking-wide uppercase">{item.ref}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
