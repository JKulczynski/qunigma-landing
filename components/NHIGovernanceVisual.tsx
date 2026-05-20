'use client';

import { useEffect, useState } from 'react';

const COUNTDOWN_START = 25 * 60;
const REAL_DURATION = 3200;

export function NHIGovernanceVisual() {
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_START);
  const [nhiCount, setNhiCount] = useState(1);
  const [phase, setPhase] = useState<'counting' | 'contained'>('counting');
  const [stoppedAt, setStoppedAt] = useState('');

  useEffect(() => {
    let cancelled = false;
    let rafId: number;
    let t: ReturnType<typeof setTimeout>;

    const runCycle = () => {
      if (cancelled) return;
      setPhase('counting');
      setSecondsLeft(COUNTDOWN_START);
      setNhiCount(1);
      const start = performance.now();

      const tick = (now: number) => {
        if (cancelled) return;
        const p = Math.min((now - start) / REAL_DURATION, 1);
        const secs = Math.round(COUNTDOWN_START * (1 - p * 0.13));
        setSecondsLeft(secs);
        setNhiCount(Math.min(Math.floor(p * 11) + 1, 11));

        if (p < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          const m = Math.floor(secs / 60);
          const s = secs % 60;
          setStoppedAt(`${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
          setPhase('contained');
          t = setTimeout(runCycle, 2000);
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

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full py-8 z-10 font-mono gap-4">

      {/* Label */}
      <div className="text-center">
        <div className={`text-[9px] tracking-[0.15em] uppercase transition-colors duration-400 ${phase === 'contained' ? 'text-emerald-400/70' : 'text-red-400/60'}`}>
          {phase === 'contained' ? 'EXFILTRATION PREVENTED' : 'ROGUE NHI ACTIVE'}
        </div>
      </div>

      {/* Countdown */}
      <div className="text-center">
        <div className={`text-[46px] font-black tracking-tight leading-none transition-colors duration-400 ${phase === 'contained' ? 'text-emerald-400' : 'text-red-400'}`}>
          {timeStr}
        </div>
        <div className="text-white/20 text-[9px] tracking-widest mt-1.5">
          {phase === 'contained' ? `STOPPED AT ${stoppedAt}` : 'MIN TO EXFILTRATION'}
        </div>
      </div>

      {/* NHI nodes - growing cluster */}
      <div className="flex flex-wrap justify-center gap-1.5" style={{ maxWidth: 200 }}>
        {Array.from({ length: nhiCount }).map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              phase === 'contained'
                ? 'bg-emerald-500/55 shadow-[0_0_4px_rgba(16,185,129,0.35)]'
                : i === 0
                ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]'
                : 'bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* NHI Security node */}
      <div className="flex flex-col items-center gap-1.5 relative">
        <div className="absolute top-0 w-5 h-5 bg-[#6D28D9] rounded-full node-pulse pointer-events-none" />
        <div className="absolute top-0 w-5 h-5 bg-[#6D28D9] rounded-full node-pulse-delayed pointer-events-none" />
        <div className="w-5 h-5 rounded-full bg-[#6D28D9] shadow-[0_0_16px_rgba(109,40,217,0.9)] relative z-10" />
        <span className={`text-[9px] tracking-widest mt-1 transition-colors duration-300 ${phase === 'contained' ? 'text-emerald-400' : 'text-white/30'}`}>
          {phase === 'contained' ? 'NHI GOVERNED' : 'NHI SECURITY'}
        </span>
      </div>

    </div>
  );
}
