'use client';

interface Props {
  topLabel: string;
  middleLabel: string;
  bottomLabel: string;
}

export function ModuleVisual({ topLabel, middleLabel, bottomLabel }: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-0 w-full h-full py-10 z-10">

      {/* Top node - threat */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)]" />
        <span className="text-white/70 text-xs tracking-widest font-mono">{topLabel}</span>
      </div>

      {/* Line */}
      <div className="w-px h-14 border-l-2 border-dashed border-white/20 my-3" />

      {/* Middle node - module (pulsing) */}
      <div className="flex flex-col items-center gap-3 relative">
        <div className="absolute top-0 w-6 h-6 bg-[#6D28D9] rounded-full node-pulse pointer-events-none" />
        <div className="absolute top-0 w-6 h-6 bg-[#6D28D9] rounded-full node-pulse-delayed pointer-events-none" />
        <div className="w-6 h-6 rounded-full bg-[#6D28D9] shadow-[0_0_20px_rgba(109,40,217,1)] relative z-10" />
        <span className="text-white font-bold text-xs tracking-widest font-mono mt-1 relative z-20 text-center leading-snug">
          {middleLabel}
        </span>
      </div>

      {/* Line */}
      <div className="w-px h-14 border-l-2 border-dashed border-white/20 my-3" />

      {/* Bottom node - result */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
        <span className="text-white/50 text-xs tracking-widest font-mono">{bottomLabel}</span>
      </div>

    </div>
  );
}
