'use client';

import { useEffect, useState } from 'react';

type Phase = 'idle' | 'approaching' | 'trapped' | 'intel';

export function HoneypotLLMVisual() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let rafId: number;
    let t: ReturnType<typeof setTimeout>;
    const APPROACH_DURATION = 1800;

    const runCycle = () => {
      if (cancelled) return;
      setPhase('idle');
      setLineProgress(0);

      t = setTimeout(() => {
        if (cancelled) return;
        setPhase('approaching');
        const start = performance.now();

        const tick = (now: number) => {
          if (cancelled) return;
          const p = Math.min((now - start) / APPROACH_DURATION, 1);
          setLineProgress(p);
          if (p < 1) {
            rafId = requestAnimationFrame(tick);
          } else {
            setPhase('trapped');
            t = setTimeout(() => {
              if (cancelled) return;
              setPhase('intel');
              t = setTimeout(runCycle, 1500);
            }, 700);
          }
        };
        rafId = requestAnimationFrame(tick);
      }, 800);
    };

    runCycle();
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      clearTimeout(t);
    };
  }, []);

  const attackerOpacity = phase === 'trapped' || phase === 'intel' ? 0.12 : 1;
  const midFlare = phase === 'trapped';

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full py-8 z-10 font-mono gap-7 px-2">

      {/* Main row: attacker — line — honeypot | real system */}
      <div className="flex items-center w-full px-5 gap-2">

        {/* Attacking AI */}
        <div
          className="flex flex-col items-center gap-2 shrink-0 transition-opacity duration-400"
          style={{ opacity: attackerOpacity }}
        >
          <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.6)]" />
          <span className="text-white/65 text-[8px] tracking-widest whitespace-nowrap">ATTACKING AI</span>
        </div>

        {/* Animated line */}
        <div className="flex-1 relative h-px mx-1">
          <div className="absolute inset-0 border-t border-dashed border-white/10" />
          <div
            className="absolute left-0 top-0 h-px bg-red-400/60"
            style={{ width: `${lineProgress * 100}%` }}
          />
        </div>

        {/* Honeypot LLM */}
        <div className="flex flex-col items-center gap-2 shrink-0 relative">
          <div className="absolute top-0 w-6 h-6 bg-[#6D28D9] rounded-full node-pulse pointer-events-none" />
          <div className="absolute top-0 w-6 h-6 bg-[#6D28D9] rounded-full node-pulse-delayed pointer-events-none" />
          <div className={`w-6 h-6 rounded-full bg-[#6D28D9] relative z-10 transition-shadow duration-300 ${midFlare ? 'shadow-[0_0_45px_rgba(109,40,217,1.5)]' : 'shadow-[0_0_20px_rgba(109,40,217,0.8)]'}`} />
          <span className="text-white font-bold text-[8px] tracking-widest mt-1 relative z-20 text-center leading-tight">
            HONEYPOT<br />LLM
          </span>
        </div>

        {/* Divider */}
        <div className="h-10 w-px bg-white/10 shrink-0 mx-1" />

        {/* Client Infrastructure */}
        <div className="flex flex-col items-center gap-2 shrink-0">
          <div className="w-5 h-5 rounded-full bg-emerald-500/70 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
          <span className="text-white/55 text-[8px] font-bold tracking-widest text-center leading-tight whitespace-nowrap">
            CLIENT<br />INFRA
          </span>
        </div>

      </div>

      {/* Status bottom */}
      <div className="flex flex-col items-center gap-2">
        <div className={`w-3 h-3 rounded-full transition-all duration-500 ${phase === 'intel' ? 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]' : 'bg-white/10'}`} />
        <span className={`text-[9px] tracking-widest transition-colors duration-300 ${
          phase === 'trapped' ? 'text-purple-400' :
          phase === 'intel' ? 'text-emerald-400' :
          phase === 'approaching' ? 'text-red-400/70' :
          'text-white/20'
        }`}>
          {phase === 'trapped' ? 'ATTACKER TRAPPED' :
           phase === 'intel' ? 'THREAT INTEL GATHERED' :
           phase === 'approaching' ? 'LURING IN...' :
           'MONITORING'}
        </span>
      </div>

    </div>
  );
}
