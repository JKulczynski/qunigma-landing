'use client';
import { MTTAVVisual } from './MTTAVVisual';
import { useEffect, useRef, useState } from 'react';
import { Radar, ShieldOff, Lock } from 'lucide-react';

function RollingLatencyCounter() {
  const [value, setValue] = useState("0.00ms");
  const [isFinished, setIsFinished] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let startTime: number | null = null;
        const duration = 1500;

        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

        const animate = (time: number) => {
          if (!startTime) startTime = time;
          const progress = Math.min((time - startTime) / duration, 1);
          const eased = easeOut(progress);

          if (progress < 1) {
            setValue((eased * 1.99).toFixed(2) + "ms");
            requestAnimationFrame(animate);
          } else {
            setIsFinished(true);
          }
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className="text-[80px] md:text-[96px] font-bold leading-none tracking-tighter tabular-nums font-mono text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>
      {isFinished ? "<2ms" : value}
    </span>
  );
}

export function MTTAVVisualSection() {
  return (
    <section aria-label="MTTAV architecture section" className="bg-[#171717] w-full py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left Side */}
        <div className="flex flex-col">
          <h2 className="text-[48px] font-bold leading-[1.1] tracking-tight mb-12 font-[family-name:var(--font-playfair)]" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
            Architektura MTTAV:<br/>Zero opóźnienia, pełna siła.
          </h2>

          <div className="flex items-baseline gap-4 mb-14">
            <RollingLatencyCounter />
            <span className="text-[13px] font-bold tracking-widest text-white/50 uppercase">LATENCY</span>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex gap-6 items-start">
              <Radar className="w-5 h-5 text-[#6D28D9] mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-white font-bold mb-1 text-[16px]">CAPTURE</h4>
                <p className="text-gray-400 leading-relaxed text-[16px]">Wykrywanie anomalii na poziomie pakietu w czasie rzeczywistym.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <ShieldOff className="w-5 h-5 text-[#6D28D9] mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-white font-bold mb-1 text-[16px]">PUNISH</h4>
                <p className="text-gray-400 leading-relaxed text-[16px]">Autonomiczna izolacja podejrzanych węzłów i agentów NHI.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <Lock className="w-5 h-5 text-[#6D28D9] mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-white font-bold mb-1 text-[16px]">PREVENT</h4>
                <p className="text-gray-400 leading-relaxed text-[16px]">Uodparnianie sieci na dany wektor ataku w całej infrastrukturze.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-[#0D0D0D] border border-purple-800/50 rounded-2xl p-12 lg:h-[600px] flex items-center justify-center relative shadow-2xl overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#6D28D9] opacity-10 rounded-full blur-[100px]" />
          <MTTAVVisual />
        </div>

      </div>
    </section>
  );
}
