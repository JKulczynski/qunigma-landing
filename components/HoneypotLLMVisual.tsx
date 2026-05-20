'use client';

import { useEffect, useState } from 'react';

type Phase = 'probing' | 'trapping' | 'trapped' | 'intel';

export function HoneypotLLMVisual() {
  const [phase, setPhase] = useState<Phase>('probing');
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let t: ReturnType<typeof setTimeout>;

    const runCycle = () => {
      if (cancelled) return;
      setPhase('probing');
      setBlink(false);

      let blinkCount = 0;
      const doBlink = () => {
        if (cancelled) return;
        setBlink(true);
        t = setTimeout(() => {
          if (cancelled) return;
          setBlink(false);
          blinkCount++;
          if (blinkCount < 4) {
            t = setTimeout(doBlink, 450);
          } else {
            t = setTimeout(() => {
              if (cancelled) return;
              setPhase('trapping');
              t = setTimeout(() => {
                if (cancelled) return;
                setPhase('trapped');
                t = setTimeout(() => {
                  if (cancelled) return;
                  setPhase('intel');
                  t = setTimeout(runCycle, 1500);
                }, 700);
              }, 400);
            }, 200);
          }
        }, 280);
      };

      t = setTimeout(doBlink, 700);
    };

    runCycle();
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);

  const topFaded = phase === 'trapped' || phase === 'intel';
  const midFlare = phase === 'trapping' || phase === 'trapped';
  const bottomLit = phase === 'intel';

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full py-10 z-10 font-mono">

      <div className={`flex flex-col items-center gap-2.5 transition-opacity duration-400 ${topFaded ? 'opacity-15' : 'opacity-100'}`}>
        <div className={`w-4 h-4 rounded-full bg-red-500 transition-all duration-150 ${blink ? 'shadow-[0_0_22px_rgba(239,68,68,0.95)]' : 'shadow-[0_0_10px_rgba(239,68,68,0.45)]'}`} />
        <span className="text-white/70 text-xs tracking-widest">ATTACKING AI</span>
      </div>

      <div className="w-px h-14 border-l-2 border-dashed border-white/20 my-3" />

      <div className="flex flex-col items-center gap-2.5 relative">
        <div className="absolute top-0 w-6 h-6 bg-[#6D28D9] rounded-full node-pulse pointer-events-none" />
        <div className="absolute top-0 w-6 h-6 bg-[#6D28D9] rounded-full node-pulse-delayed pointer-events-none" />
        <div className={`w-6 h-6 rounded-full bg-[#6D28D9] relative z-10 transition-shadow duration-300 ${midFlare ? 'shadow-[0_0_45px_rgba(109,40,217,1.5)]' : 'shadow-[0_0_20px_rgba(109,40,217,0.8)]'}`} />
        <span className="text-white font-bold text-xs tracking-widest mt-1 relative z-20 text-center transition-all duration-300">
          {midFlare ? 'ATTACKER TRAPPED' : 'HONEYPOT LLM'}
        </span>
      </div>

      <div className="w-px h-14 border-l-2 border-dashed border-white/20 my-3" />

      <div className="flex flex-col items-center gap-2.5">
        <div className={`w-4 h-4 rounded-full transition-all duration-500 ${bottomLit ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-white/15'}`} />
        <span className={`text-xs tracking-widest transition-colors duration-500 ${bottomLit ? 'text-white/50' : 'text-white/20'}`}>THREAT INTEL</span>
      </div>

    </div>
  );
}
