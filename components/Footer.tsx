'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');
  const p = isEn ? '/en' : '';

  return (
    <footer className="bg-[#000000] text-white/60 text-sm w-full py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 border-b border-white/10 pb-12 mb-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <Link href={isEn ? '/en' : '/'} className="flex items-center mb-2">
              <Image src="/logo.png" alt="Qunigma" width={130} height={33} className="object-contain" />
            </Link>
            <p>Built in EU, for EU.</p>
            <p>DPO: privacy@qunigma.ai</p>
            <p>EU-sovereign infrastructure.</p>
          </div>

          {/* Platform */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-[13px] tracking-[0.08em] mb-1">
              {isEn ? 'Platform' : 'Platforma'}
            </h4>
            <Link href={`${p}/platforma#mttav`} className="hover:text-white transition-colors">MTTAV Engine</Link>
            <Link href={`${p}/platforma#honeypot`} className="hover:text-white transition-colors">Honeypot LLM</Link>
            <Link href={`${p}/platforma#memory`} className="hover:text-white transition-colors">Memory Guard</Link>
            <Link href={`${p}/platforma#nhi`} className="hover:text-white transition-colors">NHI Security</Link>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-[13px] tracking-[0.08em] mb-1">
              {isEn ? 'Solutions' : 'Rozwiązania'}
            </h4>
            <Link href={`${p}/rozwiazania#fraud`} className="hover:text-white transition-colors">All Green Fraud</Link>
            <Link href={`${p}/rozwiazania#nhi`} className="hover:text-white transition-colors">NHI Governance</Link>
            <Link href={`${p}/rozwiazania#llm`} className="hover:text-white transition-colors">LLM Defense</Link>
            <Link href={`${p}/rozwiazania`} className="hover:text-white transition-colors">Compliance & Risk</Link>
          </div>

          {/* Compliance */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-[13px] tracking-[0.08em] mb-1">Compliance</h4>
            <Link href={`${p}/compliance#dora`} className="hover:text-white transition-colors">DORA 2025</Link>
            <Link href={`${p}/compliance#ai-act`} className="hover:text-white transition-colors">AI Act Annex III</Link>
            <Link href={`${p}/compliance#cra`} className="hover:text-white transition-colors">CRA</Link>
            <Link href={`${p}/compliance#nis2`} className="hover:text-white transition-colors">NIS2</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-[13px] tracking-[0.08em] mb-1">
              {isEn ? 'Contact' : 'Kontakt'}
            </h4>
            <a href="mailto:piotr@qunigma.ai" className="hover:text-white transition-colors">piotr@qunigma.ai</a>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-[13px] tracking-[0.08em] mb-1">
              {isEn ? 'Company' : 'Firma'}
            </h4>
            <Link href={`${p}/firma`} className="hover:text-white transition-colors">{isEn ? 'About us' : 'O nas'}</Link>
            <Link href={`${p}/wiedza`} className="hover:text-white transition-colors">{isEn ? 'Resources' : 'Wiedza'}</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© {new Date().getFullYear()} Qunigma. EU-sovereign. No CLOUD Act exposure. DORA-aligned.</p>
          <div className="flex items-center gap-4">
            <span aria-label="LinkedIn, coming soon" className="text-white/50 hover:text-white transition-colors cursor-not-allowed"><LinkedInIcon /></span>
            <span aria-label="X, coming soon" className="text-white/50 hover:text-white transition-colors cursor-not-allowed"><XIcon /></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
