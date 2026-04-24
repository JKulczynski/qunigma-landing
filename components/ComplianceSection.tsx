'use client';

import { ShieldCheck, Cpu, FileCheck } from "lucide-react";

export function ComplianceSection() {
  return (
    <section aria-label="Regulatory compliance section" className="bg-[#F6F2EA] text-gray-900 w-full pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-[44px] md:text-[52px] font-bold text-center mb-6 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}
        >
          100% Suwerenności Danych w UE
        </h2>
        <p className="text-[20px] text-gray-600 text-center max-w-3xl mx-auto mb-20 leading-relaxed font-medium">
          Jedyna cena bezpieczeństwa — pełna zgodność z najsurowszymi regulacyjnymi standardami prawa świata.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

          <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 flex flex-col hover:border-purple-200 hover:shadow-lg transition-all duration-200">
            <ShieldCheck className="w-10 h-10 text-[#6D28D9] mb-6" strokeWidth={1.5} />
            <h3 className="text-[22px] font-bold mb-4">Zgodność z DORA 2025</h3>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              Pełna gotowość na wymogi Rozporządzenia DORA dotyczącego operacyjnej odporności cyfrowej (ICT).
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 flex flex-col hover:border-purple-200 hover:shadow-lg transition-all duration-200">
            <Cpu className="w-10 h-10 text-[#6D28D9] mb-6" strokeWidth={1.5} />
            <h3 className="text-[22px] font-bold mb-4">AI Act Annex III</h3>
            <p className="text-[16px] text-gray-600 leading-relaxed mb-6">
              Zaprojektowane by spełniać wymogi bezpieczeństwa systemów AI wysokiego ryzyka.
            </p>
            <div className="mt-auto">
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-[11px] font-bold rounded-md">⚠ DEADLINE: 02.08.2026</span>
            </div>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 flex flex-col hover:border-purple-200 hover:shadow-lg transition-all duration-200">
            <FileCheck className="w-10 h-10 text-[#6D28D9] mb-6" strokeWidth={1.5} />
            <h3 className="text-[22px] font-bold mb-4">Wymogi CRA</h3>
            <p className="text-[16px] text-gray-600 leading-relaxed mb-6">
              Certyfikacja zgodna z Cyber Resilience Act — 24h raportowanie incydentów.
            </p>
            <div className="mt-auto">
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-[11px] font-bold rounded-md">⚠ DEADLINE: 11.09.2026</span>
            </div>
          </div>

        </div>

        {/* Compliance Table */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="py-4 px-6 font-bold text-gray-900 text-[15px]">Regulacja</th>
                <th className="py-4 px-6 font-bold text-gray-900 text-[15px]">Wymóg</th>
                <th className="py-4 px-6 font-bold text-gray-900 text-[15px]">Status Qunigma</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              <tr className="hover:bg-gray-50/50">
                <td className="py-4 px-6 font-medium text-[15px]">DORA Art. 8</td>
                <td className="py-4 px-6 text-[15px]">Inwentaryzacja aktywów NHI</td>
                <td className="py-4 px-6 font-medium text-emerald-600 text-[15px]">✓ Automatyczna</td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="py-4 px-6 font-medium text-[15px]">DORA Art. 19</td>
                <td className="py-4 px-6 text-[15px]">Raportowanie 4h/24h/72h</td>
                <td className="py-4 px-6 font-medium text-emerald-600 text-[15px]">✓ Pre-built packs</td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="py-4 px-6 font-medium text-[15px]">AI Act Art. 15</td>
                <td className="py-4 px-6 text-[15px]">Cybersecurity AI high-risk</td>
                <td className="py-4 px-6 font-medium text-emerald-600 text-[15px]">✓ Memory Guard SHA-256</td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="py-4 px-6 font-medium text-[15px]">CRA Art. 14</td>
                <td className="py-4 px-6 text-[15px]">24h ujawnienie luk</td>
                <td className="py-4 px-6 font-medium text-emerald-600 text-[15px]">✓ VDP aligned</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
