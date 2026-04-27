import Image from 'next/image';
import Link from 'next/link';

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M4 4 L20 20"/>
      <path d="M20 4 L4 20"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#000000] text-white/60 text-sm w-full py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 border-b border-white/10 pb-12 mb-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <Link href="/" className="flex items-center mb-2">
              <Image
                src="/logo.png"
                alt="Qunigma"
                width={130}
                height={33}
                className="object-contain"
              />
            </Link>
            <p>Built in EU, for EU.</p>
            <p>DPO: privacy@qunigma.ai</p>
            <p>EU-sovereign infrastructure.</p>
          </div>

          {/* Platforma */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-[13px] tracking-[0.08em] mb-1">Platforma</h4>
            <Link href="/platforma#mttav" className="hover:text-white transition-colors">MTTAV Engine</Link>
            <Link href="/platforma#honeypot" className="hover:text-white transition-colors">Honeypot LLM</Link>
            <Link href="/platforma#memory" className="hover:text-white transition-colors">Memory Guard</Link>
            <Link href="/platforma#nhi" className="hover:text-white transition-colors">NHI Security</Link>
          </div>

          {/* Rozwiązania */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-[13px] tracking-[0.08em] mb-1">Rozwiązania</h4>
            <Link href="/rozwiazania#fraud" className="hover:text-white transition-colors">All Green Fraud</Link>
            <Link href="/rozwiazania#nhi" className="hover:text-white transition-colors">NHI Governance</Link>
            <Link href="/rozwiazania#llm" className="hover:text-white transition-colors">LLM Defense</Link>
            <Link href="/rozwiazania" className="hover:text-white transition-colors">Compliance & Risk</Link>
          </div>

          {/* Compliance */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-[13px] tracking-[0.08em] mb-1">Compliance</h4>
            <Link href="/compliance#dora" className="hover:text-white transition-colors">DORA 2025</Link>
            <Link href="/compliance#ai-act" className="hover:text-white transition-colors">AI Act Annex III</Link>
            <Link href="/compliance#cra" className="hover:text-white transition-colors">CRA</Link>
            <Link href="/compliance#nis2" className="hover:text-white transition-colors">NIS2</Link>
          </div>

          {/* Kontakt */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-[13px] tracking-[0.08em] mb-1">Kontakt</h4>
            <a href="mailto:piotr@qunigma.ai" className="hover:text-white transition-colors">piotr@qunigma.ai</a>
          </div>

          {/* Firma */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-[13px] tracking-[0.08em] mb-1">Firma</h4>
            <Link href="/firma" className="hover:text-white transition-colors">O nas</Link>
            <Link href="/wiedza" className="hover:text-white transition-colors">Wiedza</Link>
            <a href="mailto:privacy@qunigma.ai" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© {new Date().getFullYear()} Qunigma. EU-sovereign. No CLOUD Act exposure. DORA-aligned.</p>
          <div className="flex items-center gap-4 text-white/20">
            <span aria-label="LinkedIn — coming soon">
              <LinkedInIcon />
            </span>
            <span aria-label="X — coming soon">
              <XIcon />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
