'use client';

import { useEffect, useState } from 'react';

const CONTEXTS = ['CONTEXT 1', 'CONTEXT 2', 'CONTEXT 3', 'CONTEXT 4', 'CONTEXT 5'];

export function MemoryGuardVisual() {
  const [poisonedIdx, setPoisonedIdx] = useState<number | null>(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let t: ReturnType<typeof setTimeout>;

    const cycle = () => {
      if (cancelled) return;
      const idx = Math.floor(Math.random() * CONTEXTS.length);
      setPoisonedIdx(idx);
      setBlocked(false);

      t = setTimeout(() => {
        if (cancelled) return;
        setBlocked(true);

        t = setTimeout(() => {
          if (cancelled) return;
          setPoisonedIdx(null);
          setBlocked(false);
          t = setTimeout(cycle, 1400);
        }, 900);
      }, 850);
    };

    t = setTimeout(cycle, 500);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full py-8 z-10 font-mono gap-5">

      <div className="flex flex-col items-center gap-2 relative">
        <div className="absolute top-0 w-6 h-6 bg-[#6D28D9] rounded-full node-pulse pointer-events-none" />
        <div className="absolute top-0 w-6 h-6 bg-[#6D28D9] rounded-full node-pulse-delayed pointer-events-none" />
        <div className="w-6 h-6 rounded-full bg-[#6D28D9] shadow-[0_0_20px_rgba(109,40,217,1)] relative z-10" />
        <div className="text-center mt-1">
          <div className="text-white font-bold text-xs tracking-widest">MEMORY GUARD</div>
          <div className="text-purple-400/60 text-[9px] mt-0.5">SHA-256</div>
        </div>
      </div>

      <div className={`text-[11px] font-bold tracking-widest transition-colors duration-200 min-h-[16px] ${blocked ? 'text-emerald-400' : poisonedIdx !== null ? 'text-red-400' : 'text-white/25'}`}>
        {blocked ? 'POISONING BLOCKED' : poisonedIdx !== null ? 'ANOMALY DETECTED' : 'ALL CONTEXTS VERIFIED'}
      </div>

      <div className="flex gap-2">
        {CONTEXTS.map((ctx, i) => {
          const isPoisoned = poisonedIdx === i && !blocked;
          const isBlocked = poisonedIdx === i && blocked;
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className={`w-11 h-11 rounded border flex items-center justify-center transition-all duration-250 ${
                isBlocked
                  ? 'bg-emerald-950/40 border-emerald-500/50'
                  : isPoisoned
                  ? 'bg-red-950/40 border-red-500/50'
                  : 'bg-white/[0.03] border-white/10'
              }`}>
                <span className={`text-[13px] font-bold transition-colors duration-200 ${isBlocked ? 'text-emerald-400' : isPoisoned ? 'text-red-400' : 'text-emerald-500/50'}`}>
                  {isBlocked ? '✓' : isPoisoned ? '!' : '✓'}
                </span>
              </div>
              <span className="text-[7px] text-white/25 text-center leading-tight">{ctx}</span>
            </div>
          );
        })}
      </div>

    </div>
  );
}
