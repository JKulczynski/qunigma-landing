'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export function SubpageNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex flex-col w-full bg-black/95 backdrop-blur-md border-b border-white/10">

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-[60px] lg:px-[120px] py-[18px] w-full">

        <div className="flex items-center gap-[60px]">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Qunigma" width={140} height={35} className="object-contain" priority />
          </Link>

          <div className="hidden md:flex items-center gap-[30px]">
            <div className="relative group py-4">
              <Link href="/platforma" className="flex items-center text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200">Platforma</Link>
              <div className="absolute top-full left-0 mt-0 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl p-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col gap-2">
                <Link href="/platforma#mttav" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">MTTAV Engine</Link>
                <Link href="/platforma#honeypot" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">Honeypot LLM</Link>
                <Link href="/platforma#memory" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">Memory Guard</Link>
                <Link href="/platforma#nhi" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">NHI Security</Link>
              </div>
            </div>

            <div className="relative group py-4">
              <Link href="/rozwiazania" className="flex items-center text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200">Rozwiązania</Link>
              <div className="absolute top-full left-0 mt-0 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl p-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col gap-2">
                <Link href="/rozwiazania#fraud" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">All Green Fraud</Link>
                <Link href="/rozwiazania#nhi" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">NHI Governance</Link>
                <Link href="/rozwiazania#llm" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">LLM Defense</Link>
              </div>
            </div>

            <div className="relative group py-4">
              <Link href="/compliance" className="flex items-center text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200">Compliance</Link>
              <div className="absolute top-full left-0 mt-0 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl p-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col gap-2">
                <Link href="/compliance#dora" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">DORA 2025</Link>
                <Link href="/compliance#ai-act" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">AI Act Annex III</Link>
                <Link href="/compliance#cra" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">CRA</Link>
                <Link href="/compliance#nis2" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">NIS2</Link>
              </div>
            </div>

            <Link href="/wiedza" className="text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200 py-4">Wiedza</Link>
            <Link href="/firma" className="text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200 py-4">Firma</Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="mailto:piotr@qunigma.ai" className="hidden md:inline-flex items-center text-white/80 border border-white/20 px-5 py-2.5 rounded-full text-[14px] font-medium hover:border-white/50 hover:text-white transition-colors duration-200">
            Kontakt
          </a>
          <button className="bg-[#6D28D9] text-white px-6 py-2.5 rounded-full text-[14px] font-medium hover:bg-[#5B21B6] transition-colors duration-200">
            Analiza Luk DORA
          </button>
          <button
            className="md:hidden text-white flex items-center justify-center hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-8 flex flex-col gap-8 overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-purple-500 font-bold tracking-[0.12em] uppercase mb-2">Platforma</span>
            {[['MTTAV Engine', '/platforma#mttav'], ['Honeypot LLM', '/platforma#honeypot'], ['Memory Guard', '/platforma#memory'], ['NHI Security', '/platforma#nhi']].map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setIsMenuOpen(false)} className="text-white/80 text-[17px] font-medium py-2.5 border-b border-white/5 hover:text-purple-400 transition-colors">{label}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-purple-500 font-bold tracking-[0.12em] uppercase mb-2">Rozwiązania</span>
            {[['All Green Fraud', '/rozwiazania#fraud'], ['NHI Governance', '/rozwiazania#nhi'], ['LLM Defense', '/rozwiazania#llm']].map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setIsMenuOpen(false)} className="text-white/80 text-[17px] font-medium py-2.5 border-b border-white/5 hover:text-purple-400 transition-colors">{label}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-purple-500 font-bold tracking-[0.12em] uppercase mb-2">Compliance</span>
            {[['DORA 2025', '/compliance#dora'], ['AI Act Annex III', '/compliance#ai-act'], ['CRA', '/compliance#cra'], ['NIS2', '/compliance#nis2']].map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setIsMenuOpen(false)} className="text-white/80 text-[17px] font-medium py-2.5 border-b border-white/5 hover:text-purple-400 transition-colors">{label}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            {[['Wiedza', '/wiedza'], ['Firma', '/firma']].map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setIsMenuOpen(false)} className="text-white/80 text-[17px] font-medium py-2.5 border-b border-white/5 hover:text-purple-400 transition-colors">{label}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <a href="mailto:piotr@qunigma.ai" onClick={() => setIsMenuOpen(false)} className="text-center text-white/80 border border-white/20 px-5 py-3 rounded-full text-[15px] font-medium hover:border-white/50 hover:text-white transition-colors">
              Kontakt
            </a>
            <button onClick={() => setIsMenuOpen(false)} className="bg-[#6D28D9] text-white px-6 py-3 rounded-full text-[15px] font-medium hover:bg-[#5B21B6] transition-colors">
              Analiza Luk DORA
            </button>
          </div>
        </div>
      )}

    </nav>
  );
}
