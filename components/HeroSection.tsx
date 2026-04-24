'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { InfiniteSlider } from './InfiniteSlider';
import { MTTAVCounter } from './MTTAVCounter';
import ParticleBackground from './ParticleBackground';

function StreamingVideo({ src, fallback }: { src: string; fallback: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: any = null;

    import('hls.js').then((HlsModule) => {
      const Hls = HlsModule.default;
      if (Hls.isSupported()) {
        hlsInstance = new Hls({ startLevel: -1 });
        hlsInstance.loadSource(src);
        hlsInstance.attachMedia(video);
        hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {});
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
        video.addEventListener('loadedmetadata', () => {
          video.play().catch(() => {});
        });
      } else {
        video.src = fallback;
        video.play().catch(() => {});
      }
    });

    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    };
  }, [src, fallback]);

  return (
    <video
      ref={videoRef}
      muted
      autoPlay
      loop
      playsInline
      className="w-full h-auto mix-blend-screen"
    />
  );
}

export function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative flex flex-col w-full min-h-screen bg-[#000000] overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(109,40,217,0.12) 0%, transparent 70%)'
      }} />
      <ParticleBackground />
      
      {/* Navbar */}
      <nav className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-[60px] lg:px-[120px] py-[20px] w-full transition-colors duration-300 ${scrolled ? 'bg-black/85 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
        <div className="flex items-center gap-[60px]">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/logo.jpeg"
              alt="Qunigma"
              width={160}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          
          <div className="hidden md:flex items-center gap-[30px]">
            
            <div className="relative group py-4">
              <a href="#" className="flex items-center text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200">Platforma</a>
              <div className="absolute top-full left-0 mt-0 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl p-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col gap-2">
                <a href="#" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">MTTAV Engine</a>
                <a href="#" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">Honeypot LLM</a>
                <a href="#" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">Memory Guard</a>
                <a href="#" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">NHI Security</a>
              </div>
            </div>

            <div className="relative group py-4">
              <a href="#" className="flex items-center text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200">Rozwiązania</a>
              <div className="absolute top-full left-0 mt-0 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl p-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col gap-2">
                <a href="#" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">All Green Fraud</a>
                <a href="#" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">NHI Governance</a>
                <a href="#" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">LLM Defense</a>
              </div>
            </div>

            <div className="relative group py-4">
              <a href="#" className="flex items-center text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200">Compliance</a>
              <div className="absolute top-full left-0 mt-0 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl p-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col gap-2">
                <a href="#" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">DORA</a>
                <a href="#" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">AI Act Annex III</a>
                <a href="#" className="text-white text-[14px] font-medium hover:text-purple-400 py-1 transition-colors">Data Sovereignty</a>
              </div>
            </div>

            <div className="flex items-center py-4">
              <a href="#" className="text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200">Wiedza</a>
            </div>

            <div className="flex items-center py-4">
              <a href="#" className="text-white text-[14px] font-medium hover:text-purple-400 transition-colors duration-200">Firma</a>
            </div>

          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="mailto:piotr@qunigma.ai" className="hidden md:inline-flex items-center text-white/80 border border-white/20 px-5 py-2.5 rounded-full text-[14px] font-medium hover:border-white/50 hover:text-white transition-colors duration-200">
            Kontakt
          </a>
          <button className="bg-[#6D28D9] text-white px-6 py-2.5 rounded-full text-[14px] font-medium hover:bg-[#5B21B6] transition-colors duration-200">
            Analiza Luk DORA
          </button>

          <button className="md:hidden text-white flex items-center justify-center hover:text-purple-400 transition-colors">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
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
      <div className="relative z-10 flex flex-col justify-center items-center px-6 pt-[120px] pb-10 w-full max-w-5xl mx-auto text-center flex-grow">
        
        {/* Pill badge */}
        <div className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-8">
          <span className="text-[13px] font-medium tracking-[0.08em]" style={{ color: 'rgba(246,242,234,0.70)' }}>
            EU-NATIVE ACTIVE CYBER DEFENSE
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[42px] md:text-[72px] font-medium leading-[1.1] mb-6 tracking-tight">
          <span className="block text-[#F6F2EA]">Pasywna detekcja</span>
          <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
            to przeszłość.
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-[18px] max-w-[640px] mx-auto mb-6 leading-relaxed font-normal" style={{ color: 'rgba(246,242,234,0.80)' }}>
          W erze autonomicznych ataków AI potrzebujesz aktywnej neutralizacji w czasie poniżej 2 milisekund. Ochrona banków Tier-1 przed NHI, Memory Poisoning i All Green Fraud.
        </p>

        {/* Proof bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-[13px] font-medium tracking-[0.06em] mb-8" style={{ color: 'rgba(246,242,234,0.60)' }}>
          <span>MTTAV &lt;2ms</span>
          <span className="hidden md:block">|</span>
          <span>DORA / AI Act / NIS2</span>
          <span className="hidden md:block">|</span>
          <span>EU-sovereign — brak CLOUD Act</span>
        </div>

        {/* MTTAV Live Counter */}
        <div className="mb-8">
           <MTTAVCounter className="text-purple-400 text-[14px] font-mono tracking-wider font-semibold opacity-90" />
        </div>

        {/* CTA Button */}
        <button className="bg-[#F6F2EA] text-[#0A0E1A] px-8 py-3 rounded-full text-[14px] font-medium hover:bg-white transition-all shadow-[0_-1px_20px_rgba(246,242,234,0.2)] pointer-events-auto">
          Analiza Luk DORA
        </button>
      </div>

      {/* Logo Cloud / Social Proof */}
      <div className="relative w-full z-30 bg-black/20 backdrop-blur-sm border-t border-white/10 py-8 px-6 md:px-12 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-14">
          
          <div className="w-full md:w-auto shrink-0 md:border-r border-white/10 md:pr-14 text-center md:text-left">
            <p className="text-white/80 font-medium text-[13px] tracking-widest uppercase">
              Zabezpieczamy infrastrukturę Tier-1
            </p>
          </div>
          
          <div className="flex-1 w-full overflow-hidden mask-horizontal-fades">
            <style>{`
              .mask-horizontal-fades {
                mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              }
            `}</style>
            <InfiniteSlider speed={40} className="items-center flex">
              {['DACH Bank', 'Nordic Tier-1', 'CEE G-SIB', 'ECB Partner', 'DACH Bank', 'Nordic Tier-1'].map((logo, idx) => (
                <div key={idx} className="text-white/90 font-semibold text-lg whitespace-nowrap transition-opacity duration-300 hover:opacity-100 uppercase tracking-widest px-8">
                  {logo}
                </div>
              ))}
            </InfiniteSlider>
          </div>

        </div>
      </div>

    </section>
  );
}
