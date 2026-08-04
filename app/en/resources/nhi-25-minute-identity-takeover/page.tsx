import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import { Info, HelpCircle, Clock, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'NHI: From Identity Takeover to Data Breach | Qunigma',
  description: 'What non-human identity compromise (API keys, service accounts, OAuth tokens) really looks like in banking: documented incidents from 2023-2025, industry data on dwell time and breakout time, and the requirements of DORA Article 8.',
  alternates: {
    canonical: 'https://qunigma.ai/en/resources/nhi-25-minute-identity-takeover',
    languages: {
      'en-US': 'https://qunigma.ai/en/resources/nhi-25-minute-identity-takeover',
      'pl-PL': 'https://qunigma.ai/wiedza/nhi-25-minut-przejecie-tozsamosci',
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
    name: 'Okta, customer support system',
    dates: '28.09 - 20.10.2023',
    tag: 'Stolen service account credentials',
    summary:
      "An attacker gained access to Okta's support system using service account credentials (a non-human identity) stolen after an Okta employee signed into a personal Google account on a company-managed laptop. Unauthorized access lasted from September 28 to October 1, 2023. An Okta customer, BeyondTrust, detected and reported the suspicious activity as early as October 2-3, but Okta did not publicly confirm the incident until October 20.",
    mechanism:
      'The technical support service account had permissions sufficient to view HAR files uploaded by customers as part of support tickets, files that often contain active session tokens and secrets.',
    lesson:
      'A single service account (NHI) became a single point of failure for hundreds of organizations using Okta as their identity provider, including financial institutions. The gap between the first signal from a customer and public confirmation was about 17 days.',
    source: { label: 'Krebs on Security, 29.11.2023', href: 'https://krebsonsecurity.com/2023/11/okta-breach-affected-all-customer-support-users/' },
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare, internal systems (Atlassian)',
    dates: '14.11 - 23.11.2023',
    tag: 'Unrotated credentials after a prior incident',
    summary:
      'The same attacker (likely a state-affiliated actor) used one service access token and three service account credentials stolen in the October 2023 Okta incident. Cloudflare openly admitted it had not rotated these credentials, wrongly assuming they were not in use. The attacker gained access on November 14; the activity was detected and blocked on Thanksgiving Day, November 23.',
    mechanism:
      'The compromised NHIs included a Moveworks token with access to Atlassian Confluence, a Smartsheet service account with Jira administrator permissions, and a Bitbucket service account for source code management.',
    lesson:
      'Zero Trust and segmentation limited lateral movement, and no customer data was leaked, but the exposure itself lasted 9 days because NHI rotation after the identity provider incident was not carried out consistently across all related credentials.',
    source: { label: 'Cloudflare Blog, 01.02.2024', href: 'https://blog.cloudflare.com/thanksgiving-2023-security-incident' },
  },
  {
    id: 'microsoft',
    name: 'Microsoft, Midnight Blizzard',
    dates: '12.01 - 19.01.2024',
    tag: 'Compromised OAuth application with excessive permissions',
    summary:
      "The Midnight Blizzard group (linked to Russia) gained initial access via a password spray attack against a non-production, test tenant account without MFA enabled. From that foothold, it identified and took over an old, test OAuth application (a non-human identity) with excessive mailbox permissions within Microsoft's corporate environment.",
    mechanism:
      'The OAuth application, a leftover artifact from a completed test project, had permissions far broader than its actual lifecycle warranted. It served as a bridge between the test and production environments.',
    lesson:
      'A classic permission drift pattern: an NHI created for a one-off purpose, never decommissioned, eventually becomes an undocumented, high-privilege back door. Microsoft detected the attack on January 12 and disclosed it publicly on January 19.',
    source: { label: 'Microsoft Security Response Center, 25.01.2024', href: 'https://www.microsoft.com/en-us/security/blog/2024/01/25/midnight-blizzard-guidance-for-responders-on-nation-state-attack/' },
  },
  {
    id: 'snowflake',
    name: 'Snowflake campaign, including Banco Santander',
    dates: 'April - 28.05.2024 (disclosure)',
    tag: 'Credentials without MFA, harvested by infostealers',
    summary:
      'A group tracked by Mandiant as UNC5537 systematically logged into Snowflake customer instances using valid credentials previously stolen by infostealer malware (including Vidar, Lumma, and Raccoon Stealer) from employee and contractor devices. The targeted accounts had no enforced MFA, so the credential alone was enough for full access. The campaign affected roughly 165 organizations, including Ticketmaster, AT&T, and Banco Santander.',
    mechanism:
      'Santander confirmed on May 14, 2024, unauthorized access to a database hosted by a third-party provider, containing customer data from Chile, Spain, and Uruguay, as well as employee data for the group. The bank emphasized that the database did not contain transaction data or credentials that would allow access to online accounts.',
    lesson:
      'This is the most banking-relevant of the four cases: a single credential granting access to a data platform, without MFA and without rotation, was enough to cause a breach spanning multiple markets of one financial group at once.',
    source: { label: 'Mandiant / Google Cloud Blog, 10.06.2024', href: 'https://cloud.google.com/blog/topics/threat-intelligence/unc5537-snowflake-data-theft-extortion' },
  },
];

const stats: { value: string; label: string; source: string }[] = [
  { value: '> 80 : 1', label: 'Machine identities to human identities in an organization', source: 'CyberArk, 2025 Identity Security Landscape' },
  { value: '93%', label: 'Financial institutions with at least 2 identity incidents in the past 12 months', source: 'CyberArk, 2024 Financial Services Threat Landscape' },
  { value: '61-62%', label: 'CISOs who still define a "privileged user" as human only', source: 'CyberArk, 2024 Identity Security Threat Landscape' },
  { value: '99%', label: 'Cloud identities with excessive permissions (analysis of 680K identities)', source: 'Unit 42 Cloud Threat Report, Vol. 6' },
  { value: '11 days', label: 'Median attacker dwell time in the network, 2024', source: 'Mandiant M-Trends 2025' },
  { value: '29-48 min', label: 'Average time from foothold to lateral movement (eCrime breakout time)', source: 'CrowdStrike Global Threat Report 2025-2026' },
  { value: '292 days', label: 'Average time to identify and contain a breach involving stolen credentials', source: 'IBM Cost of a Data Breach 2024' },
  { value: '$6.08M', label: 'Average cost of a breach in the financial sector, 22% above the global average', source: 'IBM Cost of a Data Breach 2024' },
];

const faq = [
  {
    q: 'What is a non-human identity (NHI) and how is it different from a user account?',
    a: 'An NHI is any digital identity that authenticates and operates within a system without direct, one-off human involvement: an API key, a service account, an OAuth token, a machine-to-machine certificate, a secret in a CI/CD pipeline, or an autonomously operating AI agent. Unlike an employee account, an NHI typically has no natural login rhythm, does not go through automatic periodic password resets, and is often not covered by the same offboarding process that applies when an employee leaves. According to CyberArk, this leads to a situation where 61-62% of security teams still define a "privileged user" as human only, leaving NHIs out of that definition entirely.',
  },
  {
    q: 'How long does an NHI attack actually take, from takeover to data breach?',
    a: "It depends on which phase you're measuring, and that distinction is the key point. The technical phase after gaining a foothold (lateral movement, privilege escalation, reaching the data) now takes an average of 29-48 minutes according to the CrowdStrike Global Threat Report, with record cases under a minute. But the phase of detecting the incident as a whole is an entirely different measure: the median dwell time in 2024 was 11 days (Mandiant M-Trends 2025), and breaches involving stolen credentials took an average of 292 days to fully identify and contain (IBM Cost of a Data Breach 2024). In other words, the mechanics of the attack are measured in minutes; your ability to notice it is often measured in months.",
  },
  {
    q: 'Does DORA Article 8 actually require an inventory of API keys and service accounts?',
    a: 'DORA Article 8 requires financial entities to identify, classify and document all business functions supported by ICT, as well as the "information assets and ICT assets" that support those functions, with an obligation to keep the inventory continuously updated and reviewed at least once a year. The provision does not literally use the term "non-human identity", but API keys, service accounts and certificates are functionally ICT assets supporting a specific business process, so they fall within the scope of this obligation. This is an interpretation widely adopted across the compliance industry, not a literal quote from the regulation.',
  },
  {
    q: "Why is the number of machine identities growing faster than a bank's headcount?",
    a: "Every microservice, SaaS integration, CI/CD pipeline and AI agent needs its own set of credentials, and modern banking architecture multiplies these elements far faster than headcount grows. GitGuardian's State of Secrets Sprawl 2026 report recorded 1,275,105 leaked secrets linked to AI services in 2025 alone, an 81% year-over-year increase, illustrating how fast this attack surface is expanding alongside AI adoption.",
  },
  {
    q: 'Do short-lived credentials actually reduce risk?',
    a: 'Yes, because they eliminate exactly the pattern seen in the Cloudflare incident: a stolen credential that remains valid for weeks after a vendor incident because nobody rotated it. A credential valid for minutes or hours, instead of months or years with no expiration date, drastically shortens the window in which a stolen secret has any value to an attacker, regardless of whether the theft is ever detected.',
  },
];

export default function NhiEnPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="rounded-full bg-rose-500/15 border border-rose-500/30 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-rose-300 uppercase">Research report</span>
            </div>
            <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.3] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">NHI: from identity takeover</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                to a data breach in dozens of minutes.
              </span>
            </h1>
            <p className="text-[17px] text-white/70 max-w-[680px] mx-auto leading-relaxed mb-4">
              Non-human identities, API keys, service accounts, OAuth tokens, make up the majority of identities in any financial institution today, and the least supervised part of its attack surface. Four documented incidents from 2023-2024, industry data on attack and detection timelines, and what DORA Article 8 actually requires.
            </p>
            <p className="text-[13px] text-white/40 max-w-[560px] mx-auto leading-relaxed">
              18 min read · sources last verified: August 2026
            </p>
          </div>
        </section>

        {/* Methodological note */}
        <section className="bg-white py-10 px-6 w-full border-b border-gray-100">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[14px] text-gray-600 leading-relaxed">
              <strong className="text-gray-900">A note on the numbers in the title.</strong> &quot;Dozens of minutes&quot; is a rounded illustration of the real range of 27 seconds to 48 minutes, documented by CrowdStrike as the average &quot;eCrime breakout time&quot;, the time from gaining a foothold to lateral movement within the network, not a separate, formal measurement carried out specifically for NHI attacks in banking. We did not find a credible, publicly verified count of &quot;47 NHI incidents at European financial institutions in 2023-2024&quot;, so instead of fabricating that number, we describe below four fully documented, named incidents from that period, along with aggregated industry data from the cited sources. Every number in this article links to the source it comes from.
            </p>
          </div>
        </section>

        {/* Table of contents */}
        <section className="bg-[#F6F2EA] py-8 px-6 w-full border-b border-gray-200">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
            {[
              { href: '#scale', label: 'Scale of the problem' },
              { href: '#anatomy', label: 'Anatomy of an attack' },
              { href: '#cases', label: 'Four incidents' },
              { href: '#numbers', label: 'Industry data' },
              { href: '#regulations', label: 'DORA and AI Act' },
              { href: '#checklist', label: 'What to do' },
              { href: '#faq', label: 'FAQ' },
              { href: '#sources', label: 'Sources' },
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

        {/* Scale of the problem */}
        <section id="scale" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Why this is a problem at all</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">NHI is no longer a fringe part of infrastructure, it is the majority of it</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                Every microservice in a digital banking architecture, every integration with a KYC provider, every CI/CD pipeline and every AI agent needs its own set of credentials. These credentials, collectively called non-human identities (NHI), include API keys, service accounts, OAuth tokens, machine-to-machine certificates, and secrets injected into containers. According to the{' '}
                <a href="https://www.businesswire.com/news/home/20250423817886/en/Machine-Identities-Outnumber-Humans-by-More-Than-80-to-1-New-Report-Exposes-the-Exponential-Threats-of-Fragmented-Identity-Security" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">
                  CyberArk 2025 Identity Security Landscape report
                </a>
                , machine identities now outnumber human identities in a typical organization by more than 80 to 1.
              </p>
              <p>
                This is not an abstract figure for the financial sector. The same company&apos;s{' '}
                <span className="text-gray-900 font-medium">2024 Identity Security Threat Landscape, Financial Services edition</span> (a survey of 2,400 security decision-makers worldwide) found that 93% of financial institutions experienced at least two separate identity-related security incidents in the preceding 12 months. At the same time, 61-62% of security teams in CyberArk&apos;s 2024 research still define a &quot;privileged user&quot; as human only, leaving machine identities structurally outside the scope of privileged access monitoring.
              </p>
              <p>
                The scale of excessive permissions compounds the problem. An analysis of more than 680,000 identities across cloud environments by{' '}
                <a href="https://www.csoonline.com/article/572515/99-of-cloud-identities-are-overly-permissive-misconfigured-iam-opening-door-to-attackers.html" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">
                  Unit 42 (Palo Alto Networks), in the Cloud Threat Report, Volume 6
                </a>
                , found that 99% of users, roles and services had excessive permissions, some unused for 60 days or longer. In other words, almost every NHI in the cloud today has more access than it actually needs to perform its function, turning its compromise into an open door instead of a bottleneck.
              </p>
              <p>
                AI adoption is accelerating this trend, not slowing it down. GitGuardian, in its{' '}
                <a href="https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">
                  State of Secrets Sprawl 2026
                </a>{' '}
                report, recorded 1,275,105 leaked secrets linked to AI services in 2025 alone, an 81% year-over-year increase, while also observing that most NHIs still rely on long-lived credentials with little rotation or no expiration at all.
              </p>
            </div>
          </div>
        </section>

        {/* Anatomy of an attack */}
        <section id="anatomy" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">Three different clocks</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">Anatomy of an NHI attack: why &quot;25 minutes&quot; and &quot;292 days&quot; are not a contradiction</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed mb-10">
              <p>
                Conversations about the speed of identity attacks rest on three different metrics that are easy to conflate but measure completely different things. Separating them is essential to understanding where you can actually do something about it.
              </p>
              <p>
                <strong className="text-gray-900">Phase 1, time to detection (dwell time).</strong> This is the time between gaining unauthorized access and its detection by the organization or an external party. According to{' '}
                <a href="https://cloud.google.com/blog/topics/threat-intelligence/m-trends-2025" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">
                  Mandiant M-Trends 2025
                </a>
                , the global median was 11 days in 2024, up from 10 days in 2023, the first increase since the report&apos;s first edition in 2010. The same report shows the median varies drastically depending on who detects the incident: 10 days for internal detection, as much as 26 days when a third party informs the organization, and just 5 days when the attacker discloses themselves (typical of ransomware, where the ransom demand itself is a form of notification).
              </p>
              <p>
                <strong className="text-gray-900">Phase 2, execution time after the foothold (breakout time).</strong> This is the metric behind the &quot;dozens of minutes&quot; in this article&apos;s title. CrowdStrike, in its{' '}
                <a href="https://www.crowdstrike.com/en-us/press-releases/crowdstrike-releases-2025-global-threat-report/" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">
                  Global Threat Report 2025
                </a>
                , measured the average eCrime breakout time at 48 minutes in 2024 (down from 62 minutes the year before), with the fastest recorded case at 51 seconds. In the{' '}
                <a href="https://www.crowdstrike.com/en-us/global-threat-report/" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">
                  Global Threat Report 2026
                </a>
                , that average dropped to 29 minutes in 2025, with a record of 27 seconds. This is the phase where a compromised NHI, with its typically excessive and unmonitored permissions, allows an attacker to move through the environment exceptionally fast, precisely because nobody treats its access as privileged.
              </p>
              <p>
                <strong className="text-gray-900">Phase 3, the full breach lifecycle.</strong> When stolen or compromised credentials are involved, IBM&apos;s{' '}
                <a href="https://www.ibm.com/think/insights/cost-of-a-data-breach-2024-financial-industry" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">
                  Cost of a Data Breach Report 2024
                </a>{' '}
                put the average time to identify and contain a breach at 292 days, the longest of any attack vector studied. That figure captures everything: detection delay, internal escalation, investigation, regulatory notification, and full remediation.
              </p>
              <p>
                The conclusion is simple and unpleasant: the mechanics of an NHI attack itself are now measured in minutes or seconds, but most organizations&apos; ability to notice it is still measured in weeks or months. It is the gap between these two clocks, not the speed of the attack itself, that is the real operational problem.
              </p>
            </div>
          </div>
        </section>

        {/* Four incidents */}
        <section id="cases" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-5 h-5 text-purple-600" strokeWidth={2} />
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase">2023-2024, fully documented</span>
            </div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">Four incidents, one recurring pattern</h2>
            <p className="text-[16px] text-gray-600 leading-relaxed mb-10">
              Instead of an aggregate figure with no verifiable methodology, below are four named, publicly confirmed incidents from 2023-2024, each with an official source. Three involve infrastructure providers that banks rely on (Okta as an identity provider, Cloudflare, Microsoft); the fourth involves a financial institution directly.
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
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-3"><strong className="text-gray-700">Mechanism: </strong>{cs.mechanism}</p>
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-4"><strong className="text-gray-700">Why it matters: </strong>{cs.lesson}</p>
                  <a
                    href={cs.source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] text-purple-700 underline hover:text-purple-900"
                  >
                    Source: {cs.source.label} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry data */}
        <section id="numbers" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">The scale in numbers</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">Eight industry figures, each with a single source</h2>
            <p className="text-[16px] text-gray-600 leading-relaxed mb-10">
              The figures below draw on data from five independent reports. We deliberately do not roll them up into a single metric, each number measures a different slice of the problem and comes from its own methodology.
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

        {/* Regulations */}
        <section id="regulations" className="bg-[#F6F2EA] py-24 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Regulatory framework</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-6 tracking-tight">What DORA and the AI Act actually say about machine identities</h2>
            <div className="flex flex-col gap-4 text-[16px] text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">DORA Article 8, asset identification.</strong> Regulation (EU) 2022/2554 requires financial entities to identify, classify and document &quot;all business functions supported by ICT&quot; and the &quot;information assets and ICT assets&quot; supporting those functions, with an obligation to keep the inventory continuously updated and reviewed at least once a year. The provision does not literally use the term &quot;non-human identity&quot;, but an API key, a service account or a machine-to-machine certificate is functionally an ICT asset supporting a specific business process, so it falls within the scope of this obligation. This is an interpretation widely adopted by compliance advisors; it should be treated as a reasonable reading of the provision, not its literal wording.
              </p>
              <p>
                <strong className="text-gray-900">DORA Article 5, management body responsibility.</strong> The management body of a financial entity &quot;defines, approves, oversees and is responsible for the implementation of all arrangements&quot; related to the ICT risk management framework. This responsibility cannot be delegated: an NHI register with no business owner and no decision-making path fails to meet the spirit of this provision, even if it formally exists.
              </p>
              <p>
                <strong className="text-gray-900">DORA Article 19, reporting windows.</strong> Classifying an incident as major starts the clock: an initial notification within 4 hours of classification (no later than 24 hours after becoming aware of the incident), an intermediate report within 72 hours, and a final report within one month. The exact deadlines are set out in the regulatory technical standard, Delegated Regulation (EU) 2025/301. An incident involving an NHI, where the source of compromise can be difficult to pin down without a solid access audit, is one of the harder scenarios to close out within this window.
              </p>
              <p>
                <strong className="text-gray-900">DORA Articles 26-27, TLPT.</strong> Threat-led penetration testing is mandatory at least once every three years for entities designated by the supervisor, typically the largest institutions under direct ECB supervision. A well-designed TLPT scope should include attack paths through NHIs (as in the Cloudflare scenario: a compromised identity provider leading into internal systems), not only classic human-targeted vectors.
              </p>
              <p>
                <strong className="text-gray-900">AI Act, Annex III, point 5(b).</strong> AI systems that evaluate the creditworthiness of natural persons or establish their credit score are classified as high-risk (except for systems used solely to detect financial fraud). If such a system relies on an NHI to pull data from external registries or third-party scoring models, compromise of that machine identity also becomes a compliance risk under Article 15 (accuracy, robustness and cybersecurity), not just a security incident.
              </p>
              <p>
                <strong className="text-gray-900">Revised ECB Guide to Internal Models, July 2025.</strong> The supervisor introduced an explicit expectation that models using machine learning within internal models (credit, market, counterparty risk) must be &quot;adequately explainable&quot;, and that model complexity must be justified by its effectiveness. This is the same line of thinking as good NHI hygiene: it is not enough for a system to work, you must be able to explain to an auditor why a given machine identity had the access it had.
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section id="checklist" className="bg-white py-24 px-6 w-full border-t border-gray-100 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">What actually reduces risk</span>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">Seven actions that follow directly from the incidents above</h2>
            <p className="text-[16px] text-gray-600 leading-relaxed mb-10">
              This is not a list of generic best practices. Each item addresses a specific mechanism that played out in one of the four incidents described above.
            </p>
            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden divide-y divide-gray-100">
              {[
                { text: 'Build and maintain a complete NHI register (API keys, service accounts, OAuth tokens, certificates), with a business owner for every entry. This is the letter of DORA Article 8, but more importantly, it is a precondition for noticing an anomaly at all.' },
                { text: 'Enforce NHI credential rotation after every incident at any vendor in your supply chain, not just your own. Cloudflare was compromised precisely because rotation after the Okta incident did not cover all related service accounts.' },
                { text: 'Replace long-lived secrets with short-lived credentials wherever technically possible (workload identity federation, tokens with a short TTL). Shortening the validity window limits the damage even when a theft goes undetected.' },
                { text: 'Audit and remove excessive NHI permissions on a regular basis, not only at creation time. The OAuth application used in the attack on Microsoft was a leftover artifact from a completed test project that nobody had decommissioned.' },
                { text: "Monitor behavior, not just credential presence. A stolen but still-valid credential passes every authorization check; the only signal is an unusual usage pattern relative to that identity's history." },
                { text: 'Include NHI attack paths in the scope of TLPT (DORA Articles 26-27) and regular penetration testing, instead of testing only classic human-targeted vectors.' },
                { text: 'Build a tamper-resistant log of NHI access decisions (who granted access, when, and on what basis), so the initial DORA Article 19 report can be filed within the 4-hour window without a manual archaeological dig through the logs.' },
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
              <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase">Frequently asked questions</span>
            </div>
            <h2
              className="text-[28px] md:text-[36px] font-bold leading-tight tracking-tight mb-12"
              style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Common questions about non-human identity
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

        {/* Sources */}
        <section id="sources" className="bg-[#F6F2EA] py-16 px-6 w-full scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Sources</span>
            <ul className="text-[13px] text-gray-500 leading-relaxed flex flex-col gap-1.5 list-disc pl-5">
              <li>
                <a href="https://www.businesswire.com/news/home/20250423817886/en/Machine-Identities-Outnumber-Humans-by-More-Than-80-to-1-New-Report-Exposes-the-Exponential-Threats-of-Fragmented-Identity-Security" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">CyberArk, 2025 Identity Security Landscape (23.04.2025)</a>
              </li>
              <li>CyberArk, 2024 Identity Security Threat Landscape, Financial Services Infographic (survey of 2,400 respondents)</li>
              <li>
                <a href="https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">GitGuardian, State of Secrets Sprawl 2026</a>
              </li>
              <li>
                <a href="https://www.verizon.com/business/resources/reports/2025-dbir-executive-summary.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Verizon, 2025 Data Breach Investigations Report</a>
                {' '}and Verizon 2024 DBIR
              </li>
              <li>
                <a href="https://cloud.google.com/blog/topics/threat-intelligence/m-trends-2025" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Mandiant / Google Cloud, M-Trends 2025</a>
              </li>
              <li>
                <a href="https://www.crowdstrike.com/en-us/press-releases/crowdstrike-releases-2025-global-threat-report/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">CrowdStrike, Global Threat Report 2025</a>
                {' '}and{' '}
                <a href="https://www.crowdstrike.com/en-us/global-threat-report/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Global Threat Report 2026</a>
              </li>
              <li>ENISA, Threat Landscape: Finance Sector, 2024 (enisa.europa.eu)</li>
              <li>
                <a href="https://www.csoonline.com/article/572515/99-of-cloud-identities-are-overly-permissive-misconfigured-iam-opening-door-to-attackers.html" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Unit 42 (Palo Alto Networks), Cloud Threat Report, Vol. 6</a>
              </li>
              <li>
                <a href="https://www.ibm.com/think/insights/cost-of-a-data-breach-2024-financial-industry" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">IBM, Cost of a Data Breach Report 2024, financial sector</a>
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
                {' '}and{' '}
                <a href="https://www.santander.com/en/stories/statement" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">official statement from Banco Santander</a>
              </li>
              <li>Regulation (EU) 2022/2554 (DORA), Articles 5, 8, 19, 26, 27, EUR-Lex</li>
              <li>Delegated Regulation (EU) 2025/301 (RTS on ICT incident reporting), EUR-Lex</li>
              <li>Regulation (EU) 2024/1689 (AI Act), Annex III, point 5(b), EUR-Lex</li>
              <li>
                <a href="https://www.bankingsupervision.europa.eu/press/pr/date/2025/html/ssm.pr250728~2b36305822.en.html" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">ECB Banking Supervision, revised Guide to Internal Models (28.07.2025)</a>
              </li>
            </ul>
            <p className="text-[12px] text-gray-400 mt-6 leading-relaxed">
              This document is research and educational material, not legal advice or a guarantee of effectiveness. Industry figures come from independent third-party reports, not from Qunigma&apos;s own research, and may differ from one another in data collection methodology. If you find an inaccuracy or an outdated source, let us know and we will correct the article.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white py-24 px-6 w-full border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-4 tracking-tight">Want to see how many NHIs currently have access to your infrastructure?</h2>
            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
              Get in touch, and we&apos;ll walk through the patterns from this article together with your security team and show you where your architecture looks similar.
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
