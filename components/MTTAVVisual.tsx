'use client';

export function MTTAVVisual() {
  return (
    <div className="relative w-full max-w-[400px] aspect-square flex flex-col items-center justify-between z-10 py-10">
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .pulse-animation {
          animation: pulse-ring 1.8s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        .pulse-animation-delayed {
          animation: pulse-ring 1.8s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          animation-delay: 0.9s;
        }
      `}</style>
      
      {/* Node 1 */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)]" />
        <span className="text-white/70 text-xs tracking-widest font-mono">THREAT AGENT</span>
      </div>

      {/* Dashed line connecting 1 -> 2 */}
      <div className="w-px h-16 border-l-2 border-dashed border-white/20 my-2" />

      {/* Node 2 - Honeypot LLM */}
      <div className="flex flex-col items-center gap-3 relative">
        <div className="absolute top-0 w-6 h-6 bg-[#6D28D9] rounded-full pulse-animation pointer-events-none" />
        <div className="absolute top-0 w-6 h-6 bg-[#6D28D9] rounded-full pulse-animation-delayed pointer-events-none" />
        <div className="w-6 h-6 rounded-full bg-[#6D28D9] shadow-[0_0_20px_rgba(109,40,217,1)] relative z-10" />
        <span className="text-white font-bold text-xs tracking-widest font-mono mt-1 relative z-20">HONEYPOT LLM</span>
      </div>

      {/* Dashed line connecting 2 -> 3 */}
      <div className="w-px h-16 border-l-2 border-dashed border-white/20 my-2" />

      {/* Node 3 */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
        <span className="text-white/50 text-xs tracking-widest font-mono">NEUTRALIZED</span>
      </div>

    </div>
  );
}
