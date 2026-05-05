'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MTTAVCounter } from './MTTAVCounter';
import ParticleBackground from './ParticleBackground';
import { StreamingVideo } from './StreamingVideo';

export function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <section className="relative flex flex-col w-full min-h-[85vh] md:min-h-screen bg-[#000000] overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(109,40,217,0.12) 0%, transparent 70%)'
      }} />
      <ParticleBackground />
      
      {/* Navbar */}
      <nav className={`fixed top-0 inset-x-0 z-50 flex flex-col w-full transition-colors duration-300 ${scrolled || isMenuOpen ? 'bg-black/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between px-6 md:px-[60px] lg:px-[120px] py-[20px] w-full">
        <div className="flex items-center gap-[60px]">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Qunigma"
              width={160}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-[30px]">
            <Link href="/platforma" className="text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200 py-4">Platforma</Link>
            <Link href="/rozwiazania" className="text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200 py-4">Rozwiązania</Link>
            <Link href="/compliance" className="text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200 py-4">Compliance</Link>
            <Link href="/wiedza" className="text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200 py-4">Wiedza</Link>
            <Link href="/firma" className="text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200 py-4">Firma</Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/en" className="hidden md:inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-colors duration-200 text-[13px] font-medium">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            EN
          </Link>
          <a href="mailto:piotr@qunigma.ai" className="hidden md:inline-flex items-center text-white/80 border border-white/20 px-5 py-2.5 rounded-full text-[14px] font-medium hover:border-white/50 hover:text-white transition-colors duration-200">
            Kontakt
          </a>
          <button className="bg-[#6D28D9] text-white px-4 py-1.5 md:px-6 md:py-2.5 rounded-full text-[13px] md:text-[14px] font-medium hover:bg-[#5B21B6] transition-colors duration-200">
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
          <div className="md:hidden bg-black border-t border-white/10 px-6 py-8 flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-80px)]">
            {[['Platforma', '/platforma'], ['Rozwiązania', '/rozwiazania'], ['Compliance', '/compliance'], ['Wiedza', '/wiedza'], ['Firma', '/firma']].map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setIsMenuOpen(false)} className="text-white/80 text-[17px] font-medium py-3 border-b border-white/5 hover:text-purple-400 transition-colors">{label}</Link>
            ))}
            <div className="flex flex-col gap-3 pt-6">
              <Link href="/en" onClick={() => setIsMenuOpen(false)} className="text-center text-white/60 border border-white/10 px-5 py-2.5 rounded-full text-[14px] font-medium hover:text-white transition-colors">
                🌐 English (EN)
              </Link>
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

      {/* Background Video & Placeholder (Z-0) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated Fallback Gradient */}
        <style>{`
          @keyframes pulseFallback {
            0% { opacity: 0.8; }
            100% { opacity: 1; }
          }
          .animate-pulse-fallback {
            animation: pulseFallback 4s ease-in-out infinite alternate;
          }
        `}</style>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.15)_0%,#000000_70%)] animate-pulse-fallback" />

        <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end mix-blend-screen opacity-100">
          {/* Bottom fade overlap to blend beautifully into the logo cloud */}
          <div className="absolute bottom-0 inset-x-0 h-[300px] z-20 bg-gradient-to-b from-transparent to-[#000000]" />
          
          <StreamingVideo 
            src="https://customer-cbeadsgr09pnsezs.cloudflarestream.com/697945ca6b876878dba3b23fbd2f1561/manifest/video.m3u8"
            fallback="/video_fallback.mp4"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center px-6 pt-[90px] md:pt-[120px] pb-12 md:pb-10 w-full max-w-5xl mx-auto text-center flex-grow">

        {/* Pill badge */}
        <div className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-5 md:mb-8">
          <span className="text-[13px] font-medium tracking-[0.08em]" style={{ color: 'rgba(246,242,234,0.70)' }}>
            EU-NATIVE ACTIVE CYBER DEFENSE
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[38px] md:text-[72px] font-medium leading-[1.1] mb-4 md:mb-6 tracking-tight">
          <span className="block text-[#F6F2EA]">Pasywna detekcja</span>
          <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
            to przeszłość.
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-[16px] md:text-[18px] max-w-[640px] mx-auto mb-4 md:mb-6 leading-relaxed font-normal" style={{ color: 'rgba(246,242,234,0.80)' }}>
          W erze autonomicznych ataków AI potrzebujesz aktywnej neutralizacji w czasie poniżej 2 milisekund. Wykrywamy i neutralizujemy NHI, Memory Poisoning i All Green Fraud zanim wyrządzą szkodę.
        </p>

        {/* Proof bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-[13px] font-medium tracking-[0.06em] mb-5 md:mb-8" style={{ color: 'rgba(246,242,234,0.60)' }}>
          <span>MTTAV &lt;2ms</span>
          <span className="hidden md:block">|</span>
          <span>DORA / AI Act / NIS2</span>
          <span className="hidden md:block">|</span>
          <span>EU-sovereign, brak CLOUD Act</span>
        </div>

        {/* MTTAV Live Counter */}
        <div className="mb-5 md:mb-8">
           <MTTAVCounter className="text-purple-400 text-[14px] font-mono tracking-wider font-semibold opacity-90" />
        </div>

        {/* CTA Button */}
        <button className="bg-[#F6F2EA] text-[#0A0E1A] px-8 py-3 rounded-full text-[14px] font-medium hover:bg-white transition-all shadow-[0_-1px_20px_rgba(246,242,234,0.2)] pointer-events-auto">
          Analiza Luk DORA
        </button>
      </div>

    </section>
  );
}
