'use client';

import { useEffect, useRef, useState } from 'react';

const TARGET_MS = 1.87;
const ANIM_DURATION = 1600;
const HOLD_DURATION = 900;

export function MTTAVEngineVisual() {
  const [ms, setMs] = useState(0);
  const [neutralized, setNeutralized] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let rafId: number;
    let t: ReturnType<typeof setTimeout>;

    const runCycle = () => {
      if (cancelled) return;
      setMs(0);
      setNeutralized(false);
      const start = performance.now();

      const tick = (now: number) => {
        if (cancelled) return;
        const p = Math.min((now - start) / ANIM_DURATION, 1);
        setMs(p * TARGET_MS);
        if (p < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setNeutralized(true);
          t = setTimeout(runCycle, HOLD_DURATION);
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

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full py-10 z-10 font-mono">

      <div className="flex flex-col items-center gap-2.5">
        <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)]" />
        <span className="text-white/70 text-xs tracking-widest">THREAT AGENT</span>
      </div>

      <div className="w-px h-12 border-l-2 border-dashed border-white/20 my-3" />

      <div className="flex flex-col items-center relative">
        <div className="absolute top-0 w-6 h-6 bg-[#6D28D9] rounded-full node-pulse pointer-events-none" />
        <div className="absolute top-0 w-6 h-6 bg-[#6D28D9] rounded-full node-pulse-delayed pointer-events-none" />
        <div className="w-6 h-6 rounded-full bg-[#6D28D9] shadow-[0_0_20px_rgba(109,40,217,1)] relative z-10" />
        <div className="mt-3 text-center z-20 relative">
          <div className="text-white/40 text-[9px] tracking-[0.15em] uppercase mb-1.5">MTTAV ENGINE</div>
          {neutralized ? (
            <div className="text-emerald-400 text-[15px] font-black tracking-widest">NEUTRALIZED</div>
          ) : (
            <div className="text-white text-[30px] font-black tracking-tight leading-none">
              {ms.toFixed(2)}
              <span className="text-white/35 text-[13px] font-medium ml-1">ms</span>
            </div>
          )}
        </div>
      </div>

      <div className="w-px h-12 border-l-2 border-dashed border-white/20 my-3" />

      <div className="flex flex-col items-center gap-2.5">
        <div className={`w-4 h-4 rounded-full transition-all duration-500 ${neutralized ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-white/15'}`} />
        <span className={`text-xs tracking-widest transition-colors duration-500 ${neutralized ? 'text-white/50' : 'text-white/20'}`}>PROTECTED</span>
      </div>

    </div>
  );
}
