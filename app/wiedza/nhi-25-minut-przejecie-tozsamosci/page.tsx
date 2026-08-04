import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import { Info, HelpCircle, Clock, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'NHI: od przejęcia tożsamości do wycieku danych | Qunigma',
  description: 'Jak realnie wygląda kompromitacja non-human identity (kluczy API, kont serwisowych, tokenów OAuth) w bankowości: udokumentowane incydenty 2023-2025, dane branżowe o dwell time i breakout time oraz wymogi DORA Art. 8.',
  alternates: {
    canonical: 'https://qunigma.ai/wiedza/nhi-25-minut-przejecie-tozsamosci',
    languages: {
      'pl-PL': 'https://qunigma.ai/wiedza/nhi-25-minut-przejecie-tozsamosci',
      'en-US': 'https://qunigma.ai/en/resources/nhi-25-minute-identity-takeover',
    },
  },
};

type CaseStudy = {
  id: string;
  name: string;
  dates: string;
  tag: string;
  summary: string;
  mechanism: string;
  lesson: string;
  source: { label: string; href: string };
};

const caseStudies: CaseStudy[] = [
  {
    id: 'okta',
    name: 'Okta, system wsparcia klienta',
    dates: '28.09 - 20.10.2023',
    tag: 'Skradzione poświadczenia konta serwisowego',
    summary:
      'Atakujący uzyskał dostęp do systemu wsparcia Okta przy użyciu poświadczeń konta serwisowego (non-human identity), skradzionych po tym, jak pracownik Okta zalogował się do prywatnego konta Google na laptopie zarządzanym przez firmę. Nieautoryzowany dostęp trwał od 28 września do 1 października 2023. Klient Okta, BeyondTrust, wykrył i zgłosił podejrzaną aktywność już 2-3 października, ale Okta publicznie potwierdziła incydent dopiero 20 października.',
    mechanism:
      'Konto serwisowe wsparcia technicznego miało uprawnienia wystarczające do przeglądania plików HAR przesyłanych przez klientów w ramach zgłoszeń, plików, które często zawierają aktywne tokeny sesji i sekrety.',
    lesson:
      'Konto serwisowe (NHI) stało się jedynym punktem awarii dla setek organizacji korzystających z Okta jako dostawcy tożsamości, w tym instytucji finansowych. Odstęp między pierwszym sygnałem od klienta a publicznym potwierdzeniem wyniósł około 17 dni.',
    source: { label: 'Krebs on Security, 29.11.2023', href: 'https://krebsonsecurity.com/2023/11/okta-breach-affected-all-customer-support-users/' },
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare, systemy wewnętrzne (Atlassian)',
    dates: '14.11 - 23.11.2023',
    tag: 'Nierotowane poświadczenia po wcześniejszym incydencie',
    summary:
      'Ten sam atakujący (prawdopodobnie podmiot powiązany z państwem) wykorzystał jeden token dostępu serwisowego i trzy poświadczenia kont serwisowych skradzione w incydencie Okta z października 2023. Cloudflare przyznała wprost, że nie zrotowała tych poświadczeń, błędnie zakładając, że nie były w użyciu. Atakujący uzyskał dostęp 14 listopada, aktywność wykryto i zablokowano w Święto Dziękczynienia, 23 listopada.',
    mechanism:
      'Skompromitowane NHI obejmowały token Moveworks z dostępem do Atlassian Confluence, konto serwisowe Smartsheet z uprawnieniami administratora Jira oraz konto serwisowe Bitbucket do zarządzania kodem źródłowym.',
    lesson:
      'Zero Trust i segmentacja ograniczyły ruch boczny, żadne dane klientów nie wyciekły, ale sama luka istniała przez 9 dni, ponieważ rotacja NHI po incydencie u dostawcy tożsamości nie została wykonana konsekwentnie dla wszystkich powiązanych poświadczeń.',
    source: { label: 'Cloudflare Blog, 01.02.2024', href: 'https://blog.cloudflare.com/thanksgiving-2023-security-incident' },
  },
  {
    id: 'microsoft',
    name: 'Microsoft, Midnight Blizzard',
    dates: '12.01 - 19.01.2024',
    tag: 'Przejęta aplikacja OAuth z nadmiarowymi uprawnieniami',
    summary:
      'Grupa Midnight Blizzard (powiązana z Rosją) uzyskała wstępny dostęp metodą password spray na nieprodukcyjne, testowe konto najemcy bez włączonego MFA. Z tego przyczółka zidentyfikowała i przejęła starą, testową aplikację OAuth (non-human identity) z nadmiarowymi uprawnieniami do skrzynek pocztowych w środowisku korporacyjnym Microsoft.',
    mechanism:
      'Aplikacja OAuth, artefakt pozostawiony po zakończonym projekcie testowym, miała uprawnienia znacznie szersze niż uzasadniał jej faktyczny cykl życia. Posłużyła jako most między środowiskiem testowym a produkcyjnym.',
    lesson:
      'Klasyczny wzorzec drift uprawnień: NHI utworzona do jednorazowego celu, nigdy nie wygaszona, z czasem staje się nieudokumentowaną furtką o wysokich uprawnieniach. Microsoft wykrył atak 12 stycznia, ujawnił publicznie 19 stycznia.',
    source: { label: 'Microsoft Security Response Center, 25.01.2024', href: 'https://www.microsoft.com/en-us/security/blog/2024/01/25/midnight-blizzard-guidance-for-responders-on-nation-state-attack/' },
  },
  {
    id: 'snowflake',
    name: 'Kampania Snowflake, w tym Banco Santander',
    dates: 'kwiecień - 28.05.2024 (ujawnienie)',
    tag: 'Poświadczenia bez MFA, zebrane przez infostealery',
    summary:
      'Grupa śledzona przez Mandiant jako UNC5537 systematycznie logowała się do instancji klientów Snowflake przy użyciu ważnych poświadczeń wykradzionych wcześniej przez złośliwe oprogramowanie typu infostealer (m.in. Vidar, Lumma, Racoon Stealer) z urządzeń pracowników i kontraktorów. Konta docelowe nie miały wymuszonego MFA, samo poświadczenie wystarczyło do pełnego dostępu. Kampania dotknęła około 165 organizacji, w tym Ticketmaster, AT&T oraz Banco Santander.',
    mechanism:
      'Santander potwierdził 14 maja 2024 nieautoryzowany dostęp do bazy danych hostowanej u dostawcy trzeciego, z danymi klientów z Chile, Hiszpanii i Urugwaju oraz danymi pracowników grupy. Bank podkreślił, że baza nie zawierała danych transakcyjnych ani poświadczeń umożliwiających dostęp do rachunków online.',
    lesson:
      'To najbardziej bankowy z czterech przypadków: pojedyncze poświadczenie dostępu do platformy danych, bez MFA i bez rotacji, wystarczyło do naruszenia obejmującego wiele rynków jednej grupy finansowej jednocześnie.',
    source: { label: 'Mandiant / Google Cloud Blog, 10.06.2024', href: 'https://cloud.google.com/blog/topics/threat-intelligence/unc5537-snowflake-data-theft-extortion' },
  },
];

const stats: { value: string; label: string; source: string }[] = [
  { value: '> 80 : 1', label: 'Tożsamości maszynowe do ludzkich w organizacji', source: 'CyberArk, 2025 Identity Security Landscape' },
  { value: '93%', label: 'Instytucji finansowych z co najmniej 2 incydentami tożsamościowymi w 12 mies.', source: 'CyberArk, 2024 Financial Services Threat Landscape' },
  { value: '61-62%', label: 'CISO nadal definiuje "uprzywilejowanego użytkownika" wyłącznie jako człowieka', source: 'CyberArk, 2024 Identity Security Threat Landscape' },
  { value: '99%', label: 'Tożsamości chmurowych z nadmiarowymi uprawnieniami (analiza 680 tys. tożsamości)', source: 'Unit 42 Cloud Threat Report, Vol. 6' },
  { value: '11 dni', label: 'Mediana czasu przebywania atakującego w sieci (dwell time), 2024', source: 'Mandiant M-Trends 2025' },
  { value: '29-48 min', label: 'Średni czas od przyczółka do ruchu bocznego (eCrime breakout time)', source: 'CrowdStrike Global Threat Report 2025-2026' },
  { value: '292 dni', label: 'Średni czas identyfikacji i powstrzymania naruszenia ze skradzionymi poświadczeniami', source: 'IBM Cost of a Data Breach 2024' },
  { value: '6,08 mln USD', label: 'Średni koszt naruszenia w sektorze finansowym, 22% powyżej średniej globalnej', source: 'IBM Cost of a Data Breach 2024' },
];

const faq = [
  {
    q: 'Czym jest non-human identity (NHI) i czym różni się od konta użytkownika?',
    a: 'NHI to każda tożsamość cyfrowa, która uwierzytelnia się i działa w systemie bez bezpośredniego, jednorazowego udziału człowieka: klucz API, konto serwisowe, token OAuth, certyfikat maszyna-maszyna, sekret w pipeline CI/CD czy agent AI działający autonomicznie. W przeciwieństwie do konta pracownika, NHI zwykle nie ma naturalnego rytmu logowania, nie przechodzi okresowego resetu hasła z automatu i często nie jest objęta tym samym procesem offboardingu co odejście pracownika, co według CyberArk prowadzi do sytuacji, w której 61-62% zespołów bezpieczeństwa wciąż definiuje "uprzywilejowanego użytkownika" wyłącznie jako człowieka, pomijając w tej definicji właśnie NHI.',
  },
  {
    q: 'Ile faktycznie trwa atak na NHI, od przejęcia do wycieku danych?',
    a: 'To zależy, którą fazę mierzysz, i to jest kluczowe rozróżnienie. Techniczna faza po uzyskaniu przyczółka (ruch boczny, eskalacja, dotarcie do danych) trwa dziś średnio 29-48 minut według CrowdStrike Global Threat Report, z rekordami poniżej minuty. Ale faza wykrycia całego incydentu to zupełnie inna miara: mediana dwell time w 2024 wyniosła 11 dni (Mandiant M-Trends 2025), a naruszenia ze skradzionymi poświadczeniami wymagały średnio 292 dni na pełną identyfikację i powstrzymanie (IBM Cost of a Data Breach 2024). Innymi słowy: mechanika ataku jest liczona w minutach, twoja zdolność do jego zauważenia często w miesiącach.',
  },
  {
    q: 'Czy DORA Art. 8 faktycznie wymaga inwentaryzacji kluczy API i kont serwisowych?',
    a: 'Art. 8 DORA nakłada obowiązek identyfikacji, klasyfikacji i dokumentowania wszystkich funkcji biznesowych wspieranych przez ICT oraz "aktywów informacyjnych i aktywów ICT" wspierających te funkcje, z obowiązkiem aktualizacji inwentarza na bieżąco i przeglądu co najmniej raz w roku. Przepis nie używa dosłownie terminu "non-human identity", ale klucze API, konta serwisowe i certyfikaty funkcjonalnie są zasobami ICT wspierającymi konkretne procesy biznesowe, więc mieszczą się w zakresie tego obowiązku. To interpretacja przyjmowana szeroko w branży compliance, nie dosłowny cytat z regulacji.',
  },
  {
    q: 'Dlaczego liczba tożsamości maszynowych rośnie szybciej niż liczba pracowników banku?',
    a: 'Każda mikrousługa, integracja SaaS, pipeline CI/CD i agent AI potrzebuje własnego zestawu poświadczeń, a nowoczesna architektura bankowa mnoży te elementy znacznie szybciej niż rośnie zatrudnienie. GitGuardian w raporcie State of Secrets Sprawl 2026 odnotował 1 275 105 wyciekniętych sekretów powiązanych z usługami AI w samym 2025 roku, wzrost o 81% rok do roku, co pokazuje tempo, w jakim rozrasta się ta powierzchnia ataku wraz z adopcją AI.',
  },
  {
    q: 'Czy krótkoterminowe poświadczenia (short-lived credentials) realnie ograniczają ryzyko?',
    a: 'Tak, bo eliminują dokładnie ten wzorzec widoczny w przypadku Cloudflare: skradzione poświadczenie, które pozostaje ważne tygodniami po incydencie u dostawcy, bo nikt go nie zrotował. Poświadczenie ważne przez minuty lub godziny, zamiast miesięcy lub lat bez daty wygaśnięcia, drastycznie skraca okno, w którym skradziony sekret ma jakąkolwiek wartość dla atakującego, niezależnie od tego, czy kradzież w ogóle zostanie wykryta.',
  },
];

export default function NhiPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="rounded-full bg-rose-500/15 border border-rose-500/30 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-rose-300 uppercase">Raport badawczy</span>
            </div>
            <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.15] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">NHI: od przejęcia tożsamości</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                do wycieku danych w kilkadziesiąt minut.
              </span>
            </h1>
            <p className="text-[17px] text-white/70 max-w-[680px] mx-auto leading-relaxed mb-4">
              Non-human identities, klucze API, konta serwisowe, tokeny OAuth, stanowią dziś większość tożsamości w każdej instytucji finansowej i najsłabiej nadzorowaną część jej powierzchni ataku. Cztery udokumentowane incydenty z lat 2023-2024, dane branżowe o czasie ataku i wykrycia oraz to, czego naprawdę wymaga DORA Art. 8.
            </p>
            <p className="text-[13px] text-white/40 max-w-[560px] mx-auto leading-relaxed">
              18 min czytania · ostatnia weryfikacja źródeł: sierpień 2026
            </p>
          </div>
        </section>

        {/* Uwaga metodologiczna */}
        <section className="bg-white py-10 px-6 w-full border-b border-gray-100">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[14px] text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Uwaga o liczbach w tytule.</strong> "Kilkadziesiąt minut" to zaokrąglona ilustracja realnego zakresu 27 sekund do 48 minut, udokumentowanego przez CrowdStrike jako średni "eCrime breakout time", czas od uzyskania przyczółka do ruchu bocznego w sieci, nie osobny, formalny pomiar wykonany specyficznie dla ataków na NHI w bankowości. Nie znaleźliśmy wiarygodnego, publicznie zweryfikowanego liczenia "47 incydentów NHI w europejskich instytucjach finansowych w latach 2023-2024", więc zamiast fabrykować taką liczbę, opisujemy niżej cztery w pełni udokumentowane, nazwane incydenty z tego okresu oraz agregowane dane branżowe z podanych źródeł. Każda liczba w tym artykule linkuje do źródła, z którego pochodzi.
            </p>
          </div>
        </section>

        {/* Spis treści */}
        <section className="bg-[#F6F2EA] py-8 px-6 w-full border-b border-gray-200">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
            {[
              { href: '#skala', label: 'Skala problemu' },
              { href: '#anatomia', label: 'Anatomia ataku' },
              { href: '#przypadki', label: 'Cztery incydenty' },
              { href: '#liczby', label: 'Dane branżowe' },
              { href: '#regulacje', label: 'DORA i AI Act' },
              { href: '#checklist', label: 'Co robić' },
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

        {/* Skala problemu */}
        <section id="skala" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Dlaczego to w ogóle problem</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">NHI to już nie margines infrastruktury, to jej większość</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                Każda mikrousługa w architekturze bankowości cyfrowej, każda integracja z dostawcą KYC, każdy pipeline CI/CD i każdy agent AI potrzebuje własnego zestawu poświadczeń. Te poświadczenia, łącznie nazywane non-human identities (NHI), obejmują klucze API, konta serwisowe, tokeny OAuth, certyfikaty maszyna-maszyna i sekrety wstrzykiwane do kontenerów. Według{' '}
                <a href="https://www.businesswire.com/news/home/20250423817886/en/Machine-Identities-Outnumber-Humans-by-More-Than-80-to-1-New-Report-Exposes-the-Exponential-Threats-of-Fragmented-Identity-Security" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">
                  raportu CyberArk 2025 Identity Security Landscape
                </a>
                , tożsamości maszynowe przewyższają dziś liczebnie tożsamości ludzkie w typowej organizacji o ponad 80 do 1.
              </p>
              <p>
                To nie jest liczba abstrakcyjna dla sektora finansowego. Z{' '}
                <span className="text-gray-900 font-medium">2024 Identity Security Threat Landscape, edycja Financial Services</span> tej samej firmy (badanie na próbie 2400 decydentów bezpieczeństwa na świecie) wynika, że 93% instytucji finansowych doświadczyło co najmniej dwóch odrębnych incydentów bezpieczeństwa związanych z tożsamością w ciągu ostatnich 12 miesięcy. Jednocześnie 61-62% zespołów bezpieczeństwa w badaniach CyberArk z 2024 roku wciąż definiuje "uprzywilejowanego użytkownika" wyłącznie jako człowieka, pozostawiając tożsamości maszynowe strukturalnie poza zakresem monitoringu uprzywilejowanego dostępu.
              </p>
              <p>
                Skala nadmiarowych uprawnień pogłębia problem. Analiza ponad 680 tysięcy tożsamości w środowiskach chmurowych, przeprowadzona przez{' '}
                <a href="https://www.csoonline.com/article/572515/99-of-cloud-identities-are-overly-permissive-misconfigured-iam-opening-door-to-attackers.html" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">
                  Unit 42 (Palo Alto Networks) w raporcie Cloud Threat Report, tom 6
                </a>
                , wykazała, że 99% użytkowników, ról i usług miało nadmiarowe uprawnienia, część z nich niewykorzystywane od 60 dni lub dłużej. Innymi słowy: prawie każda NHI w chmurze ma dziś więcej dostępu, niż faktycznie potrzebuje do wykonania swojej funkcji, co zamienia jej kompromitację w otwarte drzwi zamiast wąskiego gardła.
              </p>
              <p>
                Adopcja AI przyspiesza ten trend, nie spowalnia go. GitGuardian w raporcie{' '}
                <a href="https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">
                  State of Secrets Sprawl 2026
                </a>{' '}
                odnotował 1 275 105 wyciekniętych sekretów powiązanych z usługami AI w 2025 roku, wzrost o 81% rok do roku, przy jednoczesnej obserwacji, że NHI w większości opierają się na poświadczeniach długoterminowych, z niewielką rotacją lub bez wygasania w ogóle.
              </p>
            </div>
          </div>
        </section>

        {/* Anatomia ataku */}
        <section id="anatomia" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Trzy różne zegary</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Anatomia ataku na NHI: dlaczego "25 minut" i "292 dni" to nie sprzeczność</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed mb-10">
              <p>
                Rozmowa o szybkości ataków na tożsamość opiera się na trzech różnych metrykach, które łatwo pomylić, a które mierzą zupełnie inne rzeczy. Rozdzielenie ich jest kluczowe, żeby zrozumieć, gdzie realnie da się coś zrobić.
              </p>
              <p>
                <strong className="text-gray-900">Faza 1, czas do wykrycia (dwell time).</strong> To czas od uzyskania nieautoryzowanego dostępu do jego wykrycia przez organizację lub zewnętrzną stronę. Według{' '}
                <a href="https://cloud.google.com/blog/topics/threat-intelligence/m-trends-2025" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">
                  Mandiant M-Trends 2025
                </a>{' '}
                globalna mediana wyniosła 11 dni w 2024 roku, wzrost z 10 dni w 2023, pierwszy wzrost od pierwszej edycji raportu w 2010 roku. Ten sam raport pokazuje, że mediana różni się drastycznie w zależności od tego, kto wykrywa incydent: 10 dni przy detekcji wewnętrznej, aż 26 dni, gdy organizację informuje strona trzecia, i zaledwie 5 dni, gdy sam atakujący ujawnia się (typowe dla ransomware, gdzie żądanie okupu jest formą powiadomienia).
              </p>
              <p>
                <strong className="text-gray-900">Faza 2, czas wykonania po przyczółku (breakout time).</strong> To metryka, z której pochodzi "kilkadziesiąt minut" w tytule tego artykułu. CrowdStrike w{' '}
                <a href="https://www.crowdstrike.com/en-us/press-releases/crowdstrike-releases-2025-global-threat-report/" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">
                  Global Threat Report 2025
                </a>{' '}
                zmierzył średni czas eCrime breakout na 48 minut w 2024 roku (spadek z 62 minut rok wcześniej), z najszybszym odnotowanym przypadkiem na poziomie 51 sekund. W{' '}
                <a href="https://www.crowdstrike.com/en-us/global-threat-report/" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">
                  Global Threat Report 2026
                </a>{' '}
                ta średnia spadła do 29 minut w 2025 roku, z rekordem 27 sekund. To jest faza, w której skompromitowana NHI, z jej zwykle nadmiarowymi i niemonitorowanymi uprawnieniami, pozwala poruszać się po środowisku wyjątkowo szybko, właśnie dlatego że nikt nie traktuje jej dostępu jako uprzywilejowanego.
              </p>
              <p>
                <strong className="text-gray-900">Faza 3, pełny cykl życia naruszenia.</strong> Gdy w grę wchodzą skradzione lub skompromitowane poświadczenia, IBM w{' '}
                <a href="https://www.ibm.com/think/insights/cost-of-a-data-breach-2024-financial-industry" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">
                  Cost of a Data Breach Report 2024
                </a>{' '}
                policzył średni czas identyfikacji i powstrzymania na 292 dni, najdłużej ze wszystkich badanych wektorów ataku. To liczba, która obejmuje wszystko: opóźnienie wykrycia, eskalację wewnętrzną, śledztwo, powiadomienie regulatora i pełne usunięcie zagrożenia.
              </p>
              <p>
                Wniosek jest prosty i nieprzyjemny: mechanika samego ataku na NHI jest dziś liczona w minutach lub sekundach, ale zdolność większości organizacji do jej zauważenia wciąż liczona jest w tygodniach lub miesiącach. To luka między tymi dwoma zegarami, nie sama szybkość ataku, jest realnym problemem operacyjnym.
              </p>
            </div>
          </div>
        </section>

        {/* Cztery przypadki */}
        <section id="przypadki" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">2023-2024, w pełni udokumentowane</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">Cztery incydenty, jeden powtarzający się wzorzec</h2>
            <p className="text-[16px] text-gray-600 leading-relaxed mb-10">
              Zamiast agregatu bez możliwej do zweryfikowania metodologii, poniżej cztery nazwane, publicznie potwierdzone incydenty z lat 2023-2024, każdy z oficjalnym źródłem. Trzy dotyczą dostawców infrastruktury, na których polegają banki (Okta jako dostawca tożsamości, Cloudflare, Microsoft), czwarty bezpośrednio instytucji finansowej.
            </p>

            <div className="flex flex-col gap-6">
              {caseStudies.map((cs) => (
                <div key={cs.id} className="bg-white rounded-2xl border border-gray-200 p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <h3 className="text-[19px] font-bold text-gray-900">{cs.name}</h3>
                    <span className="text-[12px] font-bold text-purple-600/80 tracking-wide uppercase">{cs.dates}</span>
                  </div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 bg-rose-100 text-rose-700">
                    {cs.tag}
                  </span>
                  <p className="text-[15px] text-gray-700 leading-relaxed mb-3">{cs.summary}</p>
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-3"><strong className="text-gray-700">Mechanizm: </strong>{cs.mechanism}</p>
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-4"><strong className="text-gray-700">Dlaczego to ważne: </strong>{cs.lesson}</p>
                  <a
                    href={cs.source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] text-purple-700 underline hover:text-purple-900"
                  >
                    Źródło: {cs.source.label} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dane branżowe */}
        <section id="liczby" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Skala w liczbach</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">Osiem liczb branżowych, każda z jednym źródłem</h2>
            <p className="text-[16px] text-gray-600 leading-relaxed mb-10">
              Zestawienie poniżej łączy dane z pięciu niezależnych raportów. Celowo nie sumujemy ich w jeden wskaźnik, każda liczba mierzy inny wycinek problemu i pochodzi z osobnej metodologii.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-gray-200 p-6 bg-[#F6F2EA]/40">
                  <div className="text-[28px] font-bold text-gray-900 mb-2 tracking-tight">{s.value}</div>
                  <p className="text-[14px] text-gray-600 leading-relaxed mb-3">{s.label}</p>
                  <span className="text-[11px] font-bold text-purple-600/80 tracking-wide uppercase">{s.source}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulacje */}
        <section id="regulacje" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Ramy regulacyjne</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Co DORA i AI Act faktycznie mówią o tożsamościach maszynowych</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">DORA Art. 8, identyfikacja aktywów.</strong> Rozporządzenie (UE) 2022/2554 wymaga, by instytucje finansowe identyfikowały, klasyfikowały i dokumentowały "wszystkie funkcje biznesowe wspierane przez ICT" oraz "aktywa informacyjne i aktywa ICT" wspierające te funkcje, z obowiązkiem bieżącej aktualizacji inwentarza i przeglądu co najmniej raz w roku. Przepis nie posługuje się dosłownie terminem "non-human identity", ale klucz API, konto serwisowe czy certyfikat maszyna-maszyna funkcjonalnie są zasobem ICT wspierającym konkretny proces biznesowy, więc mieszczą się w zakresie tego obowiązku. To interpretacja przyjęta szeroko przez doradców compliance, warto ją traktować jako rozsądne odczytanie przepisu, nie jego dosłowne brzmienie.
              </p>
              <p>
                <strong className="text-gray-900">DORA Art. 5, odpowiedzialność zarządu.</strong> Zarząd instytucji finansowej "definiuje, zatwierdza, nadzoruje i odpowiada za wdrożenie wszystkich ustaleń" związanych z ramami zarządzania ryzykiem ICT. To odpowiedzialność niedelegowalna: rejestr NHI bez właściciela biznesowego i bez ścieżki decyzyjnej nie spełnia ducha tego przepisu, nawet jeśli formalnie istnieje.
              </p>
              <p>
                <strong className="text-gray-900">DORA Art. 19, okna raportowania.</strong> Klasyfikacja incydentu jako poważnego uruchamia zegar: zgłoszenie wstępne w ciągu 4 godzin od klasyfikacji (nie później niż 24 godziny od powzięcia wiadomości o incydencie), raport pośredni w ciągu 72 godzin, raport końcowy w ciągu miesiąca. Dokładne terminy doprecyzowuje regulacyjny standard techniczny, delegowane rozporządzenie (UE) 2025/301. Incydent z udziałem NHI, gdzie źródło kompromitacji bywa trudne do ustalenia bez dobrego audytu dostępu, jest jednym z trudniejszych scenariuszy do domknięcia w tym oknie czasowym.
              </p>
              <p>
                <strong className="text-gray-900">DORA Art. 26-27, TLPT.</strong> Testy penetracyjne oparte na analizie zagrożeń są obowiązkowe co najmniej raz na trzy lata dla podmiotów wskazanych przez nadzorcę, zwykle największych instytucji objętych bezpośrednim nadzorem EBC. Dobrze zaprojektowany zakres TLPT powinien obejmować ścieżki ataku przez NHI (jak w scenariuszu Cloudflare: przejęty dostawca tożsamości prowadzący do wewnętrznych systemów), nie tylko klasyczne wektory ludzkie.
              </p>
              <p>
                <strong className="text-gray-900">AI Act, Annex III pkt 5 lit. b.</strong> Systemy AI oceniające zdolność kredytową osób fizycznych lub ustalające ich scoring kredytowy są klasyfikowane jako wysokiego ryzyka (z wyjątkiem systemów służących wyłącznie wykrywaniu oszustw finansowych). Jeśli taki system korzysta z NHI do pobierania danych z rejestrów zewnętrznych czy modeli scoringowych stron trzecich, kompromitacja tej tożsamości maszynowej staje się też ryzykiem zgodności z Art. 15 (dokładność, odporność, cyberbezpieczeństwo), nie tylko incydentem bezpieczeństwa.
              </p>
              <p>
                <strong className="text-gray-900">Zrewidowany ECB Guide to Internal Models, lipiec 2025.</strong> Nadzorca wprowadził wprost oczekiwanie, że modele wykorzystujące uczenie maszynowe w modelach wewnętrznych (ryzyko kredytowe, rynkowe, kontrahenta) muszą być "adequately explainable", odpowiednio wytłumaczalne, a złożoność modelu musi być uzasadniona jego skutecznością. To ten sam kierunek myślenia co dobra higiena NHI: nie wystarczy, że system działa, musisz umieć wytłumaczyć audytorowi, dlaczego dana tożsamość maszynowa miała taki, a nie inny dostęp.
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section id="checklist" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Co realnie zmniejsza ryzyko</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">Siedem działań, które wynikają wprost z powyższych incydentów</h2>
            <p className="text-[16px] text-gray-600 leading-relaxed mb-10">
              To nie jest lista uniwersalnych dobrych praktyk. Każdy punkt odpowiada na konkretny mechanizm, który zadziałał w jednym z czterech opisanych wyżej incydentów.
            </p>
            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden divide-y divide-gray-100">
              {[
                { text: 'Zbuduj i utrzymuj kompletny rejestr NHI (klucze API, konta serwisowe, tokeny OAuth, certyfikaty), z właścicielem biznesowym dla każdego wpisu. To jest litera Art. 8 DORA, ale przede wszystkim warunek konieczny, żeby w ogóle zauważyć anomalię.' },
                { text: 'Wymuś rotację poświadczeń NHI po każdym incydencie u dostawcy w twoim łańcuchu dostaw, nie tylko własnych. Cloudflare padło ofiarą właśnie dlatego, że rotacja po incydencie Okta nie objęła wszystkich powiązanych kont serwisowych.' },
                { text: 'Zastąp długożyciowe sekrety poświadczeniami krótkoterminowymi tam, gdzie to technicznie możliwe (workload identity federation, tokeny z krótkim TTL). Skrócenie okna ważności ogranicza szkodę nawet przy niewykrytej kradzieży.' },
                { text: 'Audytuj i usuwaj nadmiarowe uprawnienia NHI regularnie, nie tylko przy tworzeniu. Aplikacja OAuth wykorzystana w ataku na Microsoft była artefaktem po zakończonym projekcie testowym, nikt jej nie wygasił.' },
                { text: 'Monitoruj behawioralnie, nie tylko obecność poświadczenia. Skradzione, ale ważne poświadczenie przechodzi każdą kontrolę autoryzacji, jedyny sygnał to nietypowy wzorzec użycia względem historii danej tożsamości.' },
                { text: 'Włącz ścieżki ataku przez NHI w zakres TLPT (DORA Art. 26-27) i regularnych testów penetracyjnych, zamiast testować wyłącznie klasyczne wektory ukierunkowane na ludzi.' },
                { text: 'Zbuduj log decyzji dostępu NHI odporny na manipulację (kto nadał dostęp, kiedy, na jakiej podstawie), żeby raport wstępny z Art. 19 DORA dało się złożyć w oknie 4 godzin bez ręcznego archeologicznego śledztwa po logach.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 px-6 py-5 hover:bg-gray-50/60 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" strokeWidth={1.75} />
                  <p className="text-[15px] text-gray-800 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
              Najczęstsze pytania o non-human identity
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
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Źródła</span>
            <ul className="text-[13px] text-gray-500 leading-relaxed flex flex-col gap-1.5 list-disc pl-5">
              <li>
                <a href="https://www.businesswire.com/news/home/20250423817886/en/Machine-Identities-Outnumber-Humans-by-More-Than-80-to-1-New-Report-Exposes-the-Exponential-Threats-of-Fragmented-Identity-Security" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">CyberArk, 2025 Identity Security Landscape (23.04.2025)</a>
              </li>
              <li>CyberArk, 2024 Identity Security Threat Landscape, Financial Services Infographic (badanie na próbie 2400 respondentów)</li>
              <li>
                <a href="https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">GitGuardian, State of Secrets Sprawl 2026</a>
              </li>
              <li>
                <a href="https://www.verizon.com/business/resources/reports/2025-dbir-executive-summary.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Verizon, 2025 Data Breach Investigations Report</a>
                {' '}oraz Verizon 2024 DBIR
              </li>
              <li>
                <a href="https://cloud.google.com/blog/topics/threat-intelligence/m-trends-2025" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Mandiant / Google Cloud, M-Trends 2025</a>
              </li>
              <li>
                <a href="https://www.crowdstrike.com/en-us/press-releases/crowdstrike-releases-2025-global-threat-report/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">CrowdStrike, Global Threat Report 2025</a>
                {' '}oraz{' '}
                <a href="https://www.crowdstrike.com/en-us/global-threat-report/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Global Threat Report 2026</a>
              </li>
              <li>ENISA, Threat Landscape: Finance Sector, 2024 (enisa.europa.eu)</li>
              <li>
                <a href="https://www.csoonline.com/article/572515/99-of-cloud-identities-are-overly-permissive-misconfigured-iam-opening-door-to-attackers.html" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Unit 42 (Palo Alto Networks), Cloud Threat Report, Vol. 6</a>
              </li>
              <li>
                <a href="https://www.ibm.com/think/insights/cost-of-a-data-breach-2024-financial-industry" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">IBM, Cost of a Data Breach Report 2024, sektor finansowy</a>
              </li>
              <li>
                <a href="https://krebsonsecurity.com/2023/11/okta-breach-affected-all-customer-support-users/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Krebs on Security, Okta Breach Affected All Customer Support Users (29.11.2023)</a>
              </li>
              <li>
                <a href="https://blog.cloudflare.com/thanksgiving-2023-security-incident" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Cloudflare Blog, Thanksgiving 2023 security incident (01.02.2024)</a>
              </li>
              <li>
                <a href="https://www.microsoft.com/en-us/security/blog/2024/01/25/midnight-blizzard-guidance-for-responders-on-nation-state-attack/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Microsoft Security Response Center, Midnight Blizzard guidance (25.01.2024)</a>
              </li>
              <li>
                <a href="https://cloud.google.com/blog/topics/threat-intelligence/unc5537-snowflake-data-theft-extortion" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Mandiant / Google Cloud, UNC5537 Snowflake data theft (10.06.2024)</a>
                {' '}oraz{' '}
                <a href="https://www.santander.com/en/stories/statement" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">oficjalne oświadczenie Banco Santander</a>
              </li>
              <li>Rozporządzenie (UE) 2022/2554 (DORA), Art. 5, 8, 19, 26, 27, EUR-Lex</li>
              <li>Delegowane rozporządzenie (UE) 2025/301 (RTS dot. raportowania incydentów ICT), EUR-Lex</li>
              <li>Rozporządzenie (UE) 2024/1689 (AI Act), Annex III pkt 5 lit. b, EUR-Lex</li>
              <li>
                <a href="https://www.bankingsupervision.europa.eu/press/pr/date/2025/html/ssm.pr250728~2b36305822.en.html" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">ECB Banking Supervision, revised Guide to Internal Models (28.07.2025)</a>
              </li>
            </ul>
            <p className="text-[12px] text-gray-400 mt-6 leading-relaxed">
              Ten dokument to materiał badawczo-edukacyjny, nie porada prawna ani gwarancja skuteczności. Liczby branżowe pochodzą z niezależnych raportów stron trzecich, nie z badań własnych Qunigma, i mogą różnić się metodologią zbierania danych między sobą. Jeśli znajdziesz nieścisłość lub nieaktualne źródło, napisz do nas, poprawimy artykuł.
            </p>
          </div>
        </section>

        {/* Kontakt */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-4 tracking-tight">Chcesz zobaczyć, ile NHI ma dziś dostęp do Twojej infrastruktury?</h2>
            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
              Napisz do nas, przejdziemy przez wzorce z tego artykułu razem z Twoim zespołem bezpieczeństwa i pokażemy, gdzie w Twojej architekturze wygląda to podobnie.
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
