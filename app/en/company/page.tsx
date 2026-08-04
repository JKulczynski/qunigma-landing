import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import { TeamSection } from '@/components/TeamSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company | Qunigma, About Us, Team, Mission',
  description: 'Qunigma is an EU-native active cyber defense platform built by AI and security experts for organizations where cybersecurity is a critical business element.',
  alternates: {
    canonical: 'https://qunigma.ai/en/company',
    languages: {
      'en-US': 'https://qunigma.ai/en/company',
      'pl-PL': 'https://qunigma.ai/firma',
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Qunigma Team",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Person",
        "name": "Peter Mankowski",
        "jobTitle": "Chief AI & Emerging Technology Advisor",
        "description": "BlackBerry Technical Lead. VP AI & Computer Vision, 4AG Robotics. Serial CEO and inventor in IoT.",
        "worksFor": { "@type": "Organization", "name": "Qunigma", "url": "https://qunigma.ai" },
        "sameAs": "https://www.linkedin.com/in/peter-mankowski-18065619/"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Person",
        "name": "Paul Cebo",
        "jobTitle": "Executive Consultant & vCISO Lead",
        "description": "President of Norbsoft Mobile (12 years). Enterprise consulting: Samsung, Thomson Reuters, financial institutions.",
        "worksFor": { "@type": "Organization", "name": "Qunigma", "url": "https://qunigma.ai" },
        "sameAs": "https://www.linkedin.com/in/paulcebo/"
      }
    }
  ]
};

export default function EnFirmaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <SubpageNavbar />
      <main className="flex flex-col w-full">

        {/* Hero */}
        <section className="bg-[#000000] pt-[120px] pb-24 px-6 w-full relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(109,40,217,0.10) 0%, transparent 70%)' }} />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-8 inline-block">
              <span className="text-[12px] font-medium tracking-[0.10em] text-white/60 uppercase">Company</span>
            </div>
            <h1 className="text-[38px] md:text-[64px] font-medium leading-[1.25] tracking-tight mb-6">
              <span className="block text-[#F6F2EA]">Built in the EU,</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
                by experts. For security leaders.
              </span>
            </h1>
            <p className="text-[17px] md:text-[19px] text-white/70 max-w-[680px] mx-auto leading-relaxed">
              Qunigma was created in response to a new generation of AI-native threats, invisible to traditional SIEM systems and out of reach for existing security solutions.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-[#F6F2EA] py-24 px-6 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Mission</span>
              <h2
                className="text-[28px] md:text-[42px] font-bold leading-tight tracking-tight mb-6"
                style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                AI-native active defense for European critical infrastructure.
              </h2>
              <p className="text-[17px] text-gray-600 leading-relaxed mb-8">
                Organizations with AI in their infrastructure face threats that traditional security systems cannot detect. All Green Fraud, Memory Poisoning and NHI attacks operate below the SIEM visibility threshold, for weeks or months.
              </p>
              <p className="text-[17px] text-gray-600 leading-relaxed">
                Qunigma designed the first active defense platform built specifically for these vectors, with EU-sovereign architecture, no CLOUD Act exposure, and readiness for DORA, AI Act, CRA and NIS2 from day one of deployment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: 'EU-sovereign', desc: 'Zero CLOUD Act. Not a single byte of data leaves EU jurisdiction.' },
                { label: 'DORA-aligned', desc: 'Pre-built packs for Art. 8, 19 and 25. Regulatory readiness from day 1.' },
                { label: 'AI-native', desc: 'Designed specifically for AI threats, not adapted from traditional systems.' },
                { label: 'Active defense', desc: 'Neutralization in under 2ms. Not just detection, active response.' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-purple-200 transition-colors">
                  <h3 className="text-[16px] font-bold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-[14px] text-gray-500 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="bg-[#0A0A0A] py-24 px-6 w-full">
          <div className="max-w-4xl mx-auto">
            <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase mb-4 block">Our Story</span>
            <h2
              className="text-[28px] md:text-[40px] font-bold leading-tight tracking-tight mb-12 font-[family-name:var(--font-playfair)]"
              style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Qunigma's story didn't start in a boardroom.
            </h2>
            <div className="flex flex-col gap-6 text-[17px] text-white/70 leading-relaxed">
              <p>
                It started in 1998 in the tech corridors of Waterloo. Our founding team was there at the dawn of BlackBerry (RIM), witnessing the birth of true end-to-end cybersecurity innovation. While the world saw a handheld device, our leadership was in the trenches, innovating against the first wave of sophisticated external threats.
              </p>
              <p>
                As the landscape shifted, we evolved alongside it. When the industry pivoted toward modernizing endpoints and addressing the complex intrusions of the IoT era, we were on the front lines reacting, defending, and learning. Over the last 20 years, the fast-evolving tactics of "Red Teams" haven't just been something we've studied, they've been embedded into our DNA.
              </p>
              <p>
                We don't operate out of five-star resorts, and you won't find us on executive jets. Our resources aren't spent on lavish employee retreats, they are poured into the patent portfolios and defensive tactics that keep our customers safe. We believe cybersecurity belongs in the hands of those who have actually spent decades in the "trenches."
              </p>
              <p>
                Think of us as the older brother who was always watching your back in high school. When the bullies were out and looking for a target, we were the ones standing in the gap. We've been watching the perimeter for a long time, and we aren't planning on blinking now.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <TeamSection />

        {/* Advisory Board */}
        <section className="bg-[#0D0D0D] py-24 px-6 w-full border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[11px] text-purple-400 font-bold tracking-[0.12em] uppercase mb-4 block">Advisory Board</span>
            <h2
              className="text-[28px] md:text-[40px] font-bold leading-tight tracking-tight mb-6 font-[family-name:var(--font-playfair)]"
              style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Strategic validation at the highest level.
            </h2>
            <p className="text-[16px] text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto">
              The Qunigma Advisory Board brings together practitioners from European financial markets, regulators and the AI research community. Formation in progress.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { role: 'EU Regulatory Expert', desc: 'Experience implementing DORA and AI Act in financial institutions.' },
                { role: 'AI Security Leader', desc: 'Research on AI-native attacks and active defense architecture.' },
                { role: 'Financial Market Practitioner', desc: 'Years of experience in Tier-1 risk management.' },
              ].map((item) => (
                <div key={item.role} className="bg-white/5 border border-white/10 rounded-xl p-6 text-left">
                  <div className="w-12 h-12 rounded-full bg-purple-900/40 border border-purple-700/40 mb-4 flex items-center justify-center">
                    <span className="text-purple-400 text-lg">?</span>
                  </div>
                  <h4 className="text-white font-bold mb-2">{item.role}</h4>
                  <p className="text-white/50 text-[13px] leading-snug">{item.desc}</p>
                  <span className="inline-block mt-3 text-[11px] text-purple-400 font-medium uppercase tracking-widest">Coming soon</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-[#F6F2EA] py-24 px-6 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[11px] text-purple-600 font-bold tracking-[0.12em] uppercase mb-4 block">Contact</span>
            <h2
              className="text-[28px] md:text-[40px] font-bold leading-tight tracking-tight mb-6"
              style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Let&apos;s talk.
            </h2>
            <p className="text-[17px] text-gray-600 mb-10 leading-relaxed">
              Are you a CISO, CTO or compliance leader at a European financial institution? Get in touch, we will conduct a free DORA gap analysis and show how Qunigma integrates with your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@qunigma.ai"
                className="bg-[#6D28D9] text-white px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-[#5B21B6] transition-colors"
              >
                info@qunigma.ai
              </a>
              <div className="flex items-center gap-3 text-gray-500 text-[14px]">
                <span className="w-px h-5 bg-gray-300" />
                <span>DPO: privacy@qunigma.ai</span>
              </div>
            </div>
            <p className="text-[13px] text-gray-400 mt-8">EU-sovereign infrastructure. GDPR compliant. No CLOUD Act.</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
