'use client';

import { Download } from 'lucide-react';

export function CTASection() {
  return (
    <section aria-label="Call to action section" className="bg-[#171717] w-full py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="flex flex-col lg:flex-row justify-between w-full items-center gap-12 mb-20">
          <h2 className="text-[40px] md:text-[48px] font-bold leading-[1.1] max-w-2xl tracking-tight text-center lg:text-left font-[family-name:var(--font-playfair)]" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
            Zmapuj swoje martwe punkty, zanim zostaną wykorzystane.
          </h2>
          <button className="bg-[#6D28D9] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-500 transition-colors shadow-[0_0_30px_rgba(109,40,217,0.3)] shrink-0">
            Analiza Luk DORA
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-purple-600 transition-colors duration-200 cursor-pointer flex flex-col h-full group">
            <h4 className="text-white font-bold mb-3">Analiza Gotowości AI Security</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">MTTAV Gap Analysis Template — wypełnij i przynieś na jutrzejszy board meeting.</p>
            <div className="mt-auto flex justify-end">
              <Download className="w-5 h-5 text-purple-400 group-hover:translate-y-1 transition-transform" />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-purple-600 transition-colors duration-200 cursor-pointer flex flex-col h-full group">
            <h4 className="text-white font-bold mb-3">Specyfikacja Techniczna dla CTO</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Pełna dokumentacja integracji dla CTO i Chief Architect.</p>
            <div className="mt-auto flex justify-end">
              <Download className="w-5 h-5 text-purple-400 group-hover:translate-y-1 transition-transform" />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-purple-600 transition-colors duration-200 cursor-pointer flex flex-col h-full group">
            <h4 className="text-white font-bold mb-3">Matryca ROI: DORA & AI Act</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Business case dla CFO: TCO vs. ryzyko regulacyjne dla Tier-1.</p>
            <div className="mt-auto flex justify-end">
              <Download className="w-5 h-5 text-purple-400 group-hover:translate-y-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
