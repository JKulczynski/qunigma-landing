'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SubpageNavbar({ transparent = false }: { transparent?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');

  const plToEn: Record<string, string> = { platforma: 'platform', rozwiazania: 'solutions', wiedza: 'resources', firma: 'company', metodologia: 'methodology' };
  const enToPl: Record<string, string> = { platform: 'platforma', solutions: 'rozwiazania', resources: 'wiedza', company: 'firma', methodology: 'metodologia' };

  const slug = (enSlug: string, plSlug: string) => isEn ? `/en/${enSlug}` : `/${plSlug}`;

  const langTogglePath = (() => {
    if (isEn) {
      const rest = pathname.slice(3) || '/';
      const segment = rest.split('/').filter(Boolean)[0] || '';
      return segment ? rest.replace(segment, enToPl[segment] ?? segment) : '/';
    } else {
      const segment = pathname.split('/').filter(Boolean)[0] || '';
      const mapped = plToEn[segment] ?? segment;
      return segment ? `/en${pathname.replace(segment, mapped)}` : '/en';
    }
  })();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!transparent) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [transparent]);

  const isTransparent = transparent && !scrolled && !isMenuOpen;

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 flex flex-col w-full transition-colors duration-300 ${isTransparent ? 'bg-transparent' : 'bg-black/95 backdrop-blur-md border-b border-white/10'}`}>

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-[60px] lg:px-[120px] py-[20px] w-full">

        <div className="flex items-center gap-[60px]">
          <Link href={isEn ? '/en' : '/'} className="flex items-center">
            <Image src="/logo.png" alt="Qunigma" width={160} height={40} className="object-contain" priority />
          </Link>

          <div className="hidden md:flex items-center gap-[30px]">
            <Link href={slug('platform', 'platforma')} className="text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200 py-4">
              {isEn ? 'Platform' : 'Platforma'}
            </Link>
            <Link href={slug('solutions', 'rozwiazania')} className="text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200 py-4">
              {isEn ? 'Solutions' : 'Rozwiązania'}
            </Link>
            <Link href={slug('compliance', 'compliance')} className="text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200 py-4">
              Compliance
            </Link>
            <Link href={slug('resources', 'wiedza')} className="text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200 py-4">
              {isEn ? 'Resources' : 'Wiedza'}
            </Link>
            <Link href={slug('company', 'firma')} className="text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200 py-4">
              {isEn ? 'Company' : 'Firma'}
            </Link>
            <Link href={slug('methodology', 'metodologia')} className="text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200 py-4">
              {isEn ? 'Methodology' : 'Metodologia'}
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={langTogglePath}
            className="hidden md:inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-colors duration-200 text-[13px] font-medium"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            {isEn ? 'PL' : 'EN'}
          </Link>
          <a href="mailto:info@qunigma.ai" className="hidden md:inline-flex items-center text-white/80 border border-white/20 px-5 py-2.5 rounded-full text-[14px] font-medium hover:border-white/50 hover:text-white transition-colors duration-200">
            {isEn ? 'Contact' : 'Kontakt'}
          </a>
          <Link href={isEn ? '/en/dora-gap-analysis' : '/dora-gap-analysis'} className={`bg-[#6D28D9] text-white px-4 py-1.5 text-[13px] md:px-6 md:py-2.5 rounded-full md:text-[14px] font-medium hover:bg-[#5B21B6] transition-colors duration-200`}>
            {isEn ? 'DORA Gap Analysis' : 'Analiza Luk DORA'}
          </Link>
          <button
            className="md:hidden text-white flex items-center justify-center hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-8 flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-80px)]">
          {[
            [isEn ? 'Platform' : 'Platforma', slug('platform', 'platforma')],
            [isEn ? 'Solutions' : 'Rozwiązania', slug('solutions', 'rozwiazania')],
            ['Compliance', slug('compliance', 'compliance')],
            [isEn ? 'Resources' : 'Wiedza', slug('resources', 'wiedza')],
            [isEn ? 'Company' : 'Firma', slug('company', 'firma')],
            [isEn ? 'Methodology' : 'Metodologia', slug('methodology', 'metodologia')],
          ].map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setIsMenuOpen(false)} className="text-white/80 text-[17px] font-medium py-3 border-b border-white/5 hover:text-purple-400 transition-colors">
              {label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-6">
            <Link href={langTogglePath} onClick={() => setIsMenuOpen(false)} className="text-center text-white/60 border border-white/10 px-5 py-2.5 rounded-full text-[14px] font-medium hover:text-white transition-colors">
              {isEn ? '🌐 Polski (PL)' : '🌐 English (EN)'}
            </Link>
            <a href="mailto:info@qunigma.ai" onClick={() => setIsMenuOpen(false)} className="text-center text-white/80 border border-white/20 px-5 py-3 rounded-full text-[15px] font-medium hover:border-white/50 hover:text-white transition-colors">
              {isEn ? 'Contact' : 'Kontakt'}
            </a>
            <Link href={isEn ? '/en/dora-gap-analysis' : '/dora-gap-analysis'} onClick={() => setIsMenuOpen(false)} className="text-center bg-[#6D28D9] text-white px-6 py-3 rounded-full text-[15px] font-medium hover:bg-[#5B21B6] transition-colors">
              {isEn ? 'DORA Gap Analysis' : 'Analiza Luk DORA'}
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
}
