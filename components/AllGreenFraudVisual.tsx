'use client';

import { useEffect, useState } from 'react';

const ROWS = [
  'FIREWALL STATUS',
  'LOG INTEGRITY',
  'IDS / IPS SENSOR',
  'COMPLIANCE AUDIT',
];

export function AllGreenFraudVisual() {
  const [day, setDay] = useState(1);
  const [flickerIdx, setFlickerIdx] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const dayInterval = setInterval(() => {
      setDay(d => (d >= 90 ? 1 : d + 1));
    }, 90);

    let t: ReturnType<typeof setTimeout>;
    const scheduleFlicker = () => {
      if (cancelled) return;
      t = setTimeout(() => {
        if (cancelled) return;
        const idx = Math.floor(Math.random() * ROWS.length);
        setFlickerIdx(idx);
        setTimeout(() => {
          setFlickerIdx(null);
          scheduleFlicker();
        }, 200);
      }, 2200 + Math.random() * 1000);
    };
    scheduleFlicker();

    return () => {
      cancelled = true;
      clearInterval(dayInterval);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="absolute inset-0 p-5 flex flex-col gap-2.5 font-mono overflow-hidden">

      <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.07]">
        <span className="text-white/35 text-[10px] tracking-[0.15em] uppercase">SOC Dashboard</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-[10px] tracking-widest">LIVE</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        {ROWS.map((label, i) => {
          const flick = flickerIdx === i;
          return (
            <div key={label} className="flex items-center justify-between bg-white/[0.03] border border-white/[0.06] rounded-lg px-3.5 py-2.5">
              <span className="text-white/45 text-[11px] tracking-wide">{label}</span>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full transition-all duration-75 ${flick ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]' : 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]'}`} />
                <span className={`text-[10px] font-bold tracking-widest transition-colors duration-75 ${flick ? 'text-red-400' : 'text-emerald-400'}`}>
                  {flick ? 'ANOMALY' : 'ALL CLEAR'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-red-950/20 border border-red-900/35 rounded-lg px-4 py-2.5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-red-400/55 text-[9px] tracking-[0.18em] uppercase">Actual Status</span>
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        </div>
        <div className="text-red-400 text-[12px] font-bold tracking-wide">
          BREACH ACTIVE - DAY {day} / 90
        </div>
      </div>

    </div>
  );
}
