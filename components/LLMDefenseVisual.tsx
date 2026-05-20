'use client';

import { useEffect, useState } from 'react';

const CORRUPT_DURATION = 4000;
const TARGET_CORRUPTION = 0.82;

export function LLMDefenseVisual() {
  const [corruption, setCorruption] = useState(0);
  const [days, setDays] = useState(0);
  const [phase, setPhase] = useState<'corrupting' | 'detected' | 'blocked'>('corrupting');

  useEffect(() => {
    let cancelled = false;
    let rafId: number;
    let t: ReturnType<typeof setTimeout>;

    const runCycle = () => {
      if (cancelled) return;
      setCorruption(0);
      setDays(0);
      setPhase('corrupting');
      const start = performance.now();

      const tick = (now: number) => {
        if (cancelled) return;
        const p = Math.min((now - start) / CORRUPT_DURATION, 1);
        setCorruption(p * TARGET_CORRUPTION);
        setDays(Math.floor(p * 47));

        if (p < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setPhase('detected');
          t = setTimeout(() => {
            if (cancelled) return;
            setPhase('blocked');
            t = setTimeout(runCycle, 1500);
          }, 700);
        }
      };
      rafId = requestAnimationFrame(tick);
    };

    runCycle();
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      clearTimeout(t);
    };
  }, []);

  const corruptPct = Math.round(corruption * 100);
  const integrityPct = 100 - corruptPct;

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full py-8 z-10 font-mono gap-5 px-8">

      {/* Header */}
      <div className="text-center">
        <div className="text-white/30 text-[9px] tracking-[0.15em] uppercase mb-1">MEMORY POISONING ATTACK</div>
        <div className={`text-[10px] font-mono transition-colors duration-300 ${phase === 'blocked' ? 'text-emerald-400' : 'text-red-400/70'}`}>
          {phase === 'blocked' ? 'ATTACK NEUTRALIZED' : `ATTACK DAY ${days}`}
        </div>
      </div>

      {/* Integrity bar */}
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between text-[8px]">
          <span className="text-white/25">MEMORY INTEGRITY</span>
          <span className={`transition-colors duration-300 ${phase === 'blocked' ? 'text-emerald-400' : integrityPct < 30 ? 'text-red-400' : 'text-white/40'}`}>
            {phase === 'blocked' ? '100%' : `${integrityPct}%`}
          </span>
        </div>
        <div className="h-3 bg-white/[0.06] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-none ${phase === 'blocked' ? 'bg-emerald-500' : 'bg-emerald-600/60'}`}
            style={{ width: phase === 'blocked' ? '100%' : `${integrityPct}%` }}
          />
        </div>

        {/* Corruption fill */}
        <div className="h-2 bg-white/[0.04] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-none ${phase === 'blocked' ? 'w-0' : 'bg-red-600/50'}`}
            style={phase !== 'blocked' ? { width: `${corruptPct}%` } : undefined}
          />
        </div>
        <div className="flex justify-between text-[7px] text-white/15">
          <span>CLEAN</span>
          <span>CORRUPTED</span>
        </div>
      </div>

      {/* Memory Guard node */}
      <div className="flex flex-col items-center gap-2 relative">
        <div className="absolute top-0 w-5 h-5 bg-[#6D28D9] rounded-full node-pulse pointer-events-none" />
        <div className="absolute top-0 w-5 h-5 bg-[#6D28D9] rounded-full node-pulse-delayed pointer-events-none" />
        <div className="w-5 h-5 rounded-full bg-[#6D28D9] shadow-[0_0_16px_rgba(109,40,217,0.9)] relative z-10" />
        <span className={`text-[9px] tracking-widest mt-1 relative z-20 font-bold transition-colors duration-300 ${
          phase === 'detected' ? 'text-purple-400' :
          phase === 'blocked' ? 'text-emerald-400' :
          'text-white/35'
        }`}>
          {phase === 'detected' ? 'ANOMALY DETECTED' :
           phase === 'blocked' ? 'MEMORY RESTORED' :
           'MEMORY GUARD'}
        </span>
      </div>

    </div>
  );
}
