'use client';

import { useEffect, useState } from 'react';

const RADIUS = 82;
const CENTER = 120;

const NHI_NODES = [
  { label: 'API KEY', angle: -90 },
  { label: 'SVC ACC', angle: -30 },
  { label: 'OAUTH', angle: 30 },
  { label: 'TOKEN', angle: 90 },
  { label: 'CERT', angle: 150 },
  { label: 'SECRET', angle: 210 },
];

export function NHISecurityVisual() {
  const [rogueIdx, setRogueIdx] = useState<number | null>(null);
  const [isolatedIdx, setIsolatedIdx] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    let t: ReturnType<typeof setTimeout>;

    const cycle = () => {
      if (cancelled) return;
      const idx = Math.floor(Math.random() * NHI_NODES.length);
      setRogueIdx(idx);
      setIsolatedIdx(null);

      t = setTimeout(() => {
        if (cancelled) return;
        setIsolatedIdx(idx);

        t = setTimeout(() => {
          if (cancelled) return;
          setRogueIdx(null);
          setIsolatedIdx(null);
          t = setTimeout(cycle, 1000);
        }, 1200);
      }, 1100);
    };

    t = setTimeout(cycle, 800);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);

  const size = CENTER * 2;

  return (
    <div className="relative flex items-center justify-center w-full h-full z-10 font-mono">
      <div className="relative" style={{ width: size, height: size }}>

        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          {NHI_NODES.map((node, i) => {
            const rad = node.angle * (Math.PI / 180);
            const x = CENTER + Math.cos(rad) * RADIUS;
            const y = CENTER + Math.sin(rad) * RADIUS;
            const isRogue = rogueIdx === i;
            const isIsolated = isolatedIdx === i;
            return (
              <line
                key={i}
                x1={CENTER} y1={CENTER}
                x2={x} y2={y}
                stroke={isIsolated ? 'rgba(255,255,255,0.04)' : isRogue ? 'rgba(239,68,68,0.35)' : 'rgba(255,255,255,0.10)'}
                strokeWidth="1"
                strokeDasharray="3 5"
              />
            );
          })}
        </svg>

        <div
          className="absolute flex flex-col items-center gap-1.5"
          style={{ left: CENTER, top: CENTER, transform: 'translate(-50%, -50%)', zIndex: 20 }}
        >
          <div className="absolute w-8 h-8 bg-[#6D28D9] rounded-full node-pulse pointer-events-none" />
          <div className="absolute w-8 h-8 bg-[#6D28D9] rounded-full node-pulse-delayed pointer-events-none" />
          <div className="w-8 h-8 rounded-full bg-[#6D28D9] shadow-[0_0_20px_rgba(109,40,217,1)] relative z-10" />
          <span className="text-white font-bold text-[8px] tracking-widest text-center leading-tight" style={{ width: 60 }}>
            NHI<br />SECURITY
          </span>
        </div>

        {NHI_NODES.map((node, i) => {
          const rad = node.angle * (Math.PI / 180);
          const x = CENTER + Math.cos(rad) * RADIUS;
          const y = CENTER + Math.sin(rad) * RADIUS;
          const isRogue = rogueIdx === i;
          const isIsolated = isolatedIdx === i;

          return (
            <div
              key={i}
              className="absolute flex flex-col items-center gap-1"
              style={{ left: x, top: y, transform: 'translate(-50%, -50%)', zIndex: 10 }}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isIsolated ? 'bg-white/15 shadow-none' :
                isRogue ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]' :
                'bg-emerald-500/65 shadow-[0_0_5px_rgba(16,185,129,0.3)]'
              }`} />
              <span className={`text-[7px] tracking-wide whitespace-nowrap transition-colors duration-300 ${
                isIsolated ? 'text-white/15' :
                isRogue ? 'text-red-400/80' :
                'text-white/35'
              }`}>
                {node.label}
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
}
