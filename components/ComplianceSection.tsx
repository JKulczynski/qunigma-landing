'use client';

import { ShieldCheck, Cpu, FileCheck, Network } from "lucide-react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function ComplianceSection() {
  const isEn = usePathname().startsWith('/en');

  return (
    <section aria-label="Regulatory compliance section" className="bg-[#F6F2EA] text-gray-900 w-full pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-[44px] md:text-[52px] font-bold text-center mb-6 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}
        >
          {isEn ? '100% EU Data Sovereignty' : '100% Suwerenności Danych w UE'}
        </h2>
        <p className="text-[20px] text-gray-600 text-center max-w-3xl mx-auto mb-20 leading-relaxed font-medium">
          {isEn
            ? 'The only price of security, full compliance with the world\'s most stringent regulatory standards.'
            : 'Jedyna cena bezpieczeństwa, pełna zgodność z najsurowszymi regulacyjnymi standardami prawa świata.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

          <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 flex flex-col hover:border-purple-200 hover:shadow-lg transition-all duration-200">
            <ShieldCheck className="w-10 h-10 text-[#6D28D9] mb-6" strokeWidth={1.5} />
            <h3 className="text-[22px] font-bold mb-4">{isEn ? 'DORA 2025 Compliance' : 'Zgodność z DORA 2025'}</h3>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              {isEn
                ? 'Full readiness for DORA requirements on digital operational resilience (ICT).'
                : 'Pełna gotowość na wymogi Rozporządzenia DORA dotyczącego operacyjnej odporności cyfrowej (ICT).'}
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 flex flex-col hover:border-purple-200 hover:shadow-lg transition-all duration-200">
            <Cpu className="w-10 h-10 text-[#6D28D9] mb-6" strokeWidth={1.5} />
            <h3 className="text-[22px] font-bold mb-4">AI Act Annex III</h3>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              {isEn
                ? 'Designed to meet cybersecurity requirements for high-risk AI systems.'
                : 'Zaprojektowane by spełniać wymogi bezpieczeństwa systemów AI wysokiego ryzyka.'}
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 flex flex-col hover:border-purple-200 hover:shadow-lg transition-all duration-200">
            <FileCheck className="w-10 h-10 text-[#6D28D9] mb-6" strokeWidth={1.5} />
            <h3 className="text-[22px] font-bold mb-4">{isEn ? 'CRA Requirements' : 'Wymogi CRA'}</h3>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              {isEn
                ? 'Cyber Resilience Act certification, 24h incident reporting.'
                : 'Certyfikacja zgodna z Cyber Resilience Act, 24h raportowanie incydentów.'}
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 flex flex-col hover:border-purple-200 hover:shadow-lg transition-all duration-200">
            <Network className="w-10 h-10 text-[#6D28D9] mb-6" strokeWidth={1.5} />
            <h3 className="text-[22px] font-bold mb-4">NIS2</h3>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              {isEn
                ? 'Compliance with the network and information security directive, data sovereignty, supply chain resilience.'
                : 'Zgodność z dyrektywą o bezpieczeństwie sieci i systemów informacyjnych, suwerenność danych, odporność łańcucha dostaw.'}
            </p>
          </div>

        </div>

        <div className="relative">
          <div className="md:hidden absolute right-0 top-0 bottom-0 w-14 bg-gradient-to-l from-[#F6F2EA] to-transparent z-10 pointer-events-none rounded-r-2xl" />
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm overflow-x-auto">
            <table className="w-full min-w-[560px] text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="py-4 px-6 font-bold text-gray-900 text-[15px]">{isEn ? 'Regulation' : 'Regulacja'}</th>
                  <th className="py-4 px-6 font-bold text-gray-900 text-[15px]">{isEn ? 'Requirement' : 'Wymóg'}</th>
                  <th className="py-4 px-6 font-bold text-gray-900 text-[15px]">Status Qunigma</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr className="hover:bg-gray-50/50">
                  <td className="py-4 px-6 font-medium text-[15px]">DORA Art. 8</td>
                  <td className="py-4 px-6 text-[15px]">{isEn ? 'NHI asset inventory' : 'Inwentaryzacja aktywów NHI'}</td>
                  <td className="py-4 px-6 font-medium text-emerald-600 text-[15px]">✓ {isEn ? 'Automatic' : 'Automatyczna'}</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-4 px-6 font-medium text-[15px]">DORA Art. 19</td>
                  <td className="py-4 px-6 text-[15px]">{isEn ? 'Reporting 4h/24h/72h' : 'Raportowanie 4h/24h/72h'}</td>
                  <td className="py-4 px-6 font-medium text-emerald-600 text-[15px]">✓ Pre-built packs</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-4 px-6 font-medium text-[15px]">AI Act Art. 15</td>
                  <td className="py-4 px-6 text-[15px]">{isEn ? 'Cybersecurity AI high-risk' : 'Cybersecurity AI high-risk'}</td>
                  <td className="py-4 px-6 font-medium text-emerald-600 text-[15px]">✓ Memory Guard SHA-256</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-4 px-6 font-medium text-[15px]">CRA Art. 14</td>
                  <td className="py-4 px-6 text-[15px]">{isEn ? '24h vulnerability disclosure' : '24h ujawnienie luk'}</td>
                  <td className="py-4 px-6 font-medium text-emerald-600 text-[15px]">✓ VDP aligned</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="md:hidden text-right text-[11px] text-gray-400 mt-2 pr-1 tracking-wide">{isEn ? 'scroll ›' : 'przewiń ›'}</p>
        </div>

        <div className="text-center mt-6">
          <Link
            href={isEn ? '/en/methodology' : '/metodologia'}
            className="text-[13px] text-purple-600/80 hover:text-purple-700 font-medium hover:underline"
          >
            {isEn ? 'How we assess compliance status: methodology ↗' : 'Jak oceniamy status zgodności: metodologia ↗'}
          </Link>
        </div>

      </div>
    </section>
  );
}
