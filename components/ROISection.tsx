'use client';

import { Timer, TrendingUp } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function ROISection() {
  const isEn = usePathname().startsWith('/en');

  return (
    <section aria-label="ROI and business case section" className="bg-[#F6F2EA] text-gray-900 w-full py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-[44px] font-bold text-center mb-6 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}
        >
          {isEn ? 'The Financial Dimension of Active Defense' : 'Finansowy Wymiar Aktywnej Obrony'}
        </h2>
        <p className="text-[20px] text-gray-600 max-w-[600px] mx-auto text-center mb-20 leading-relaxed font-medium">
          {isEn
            ? 'We translate MTTAV\'s technological advantage into hard financial and operational metrics required by the Board.'
            : 'Tłumaczymy technologiczną przewagę MTTAV na twarde metryki finansowe i operacyjne wymagane przez Zarząd.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

          <div className="bg-white border border-gray-200 rounded-2xl p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <Timer className="w-5 h-5 text-[#6D28D9]" strokeWidth={1.5} />
              <span className="text-[11px] text-[#6D28D9] font-medium tracking-[0.08em] uppercase">
                {isEn ? 'OPERATIONAL EFFICIENCY' : 'OPERACYJNA EFEKTYWNOŚĆ'}
              </span>
            </div>
            <span className="text-[72px] font-extrabold leading-none mb-6 text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #A855F7 100%)' }}>-99.4%</span>
            <p className="text-[17px] text-gray-600 leading-relaxed font-medium">
              {isEn
                ? 'Reduction in response time, from 241 days to under 2ms. (IBM Cost of a Data Breach 2025)'
                : 'Redukcja czasu reakcji, z 241 dni do poniżej 2ms. (IBM Cost of a Data Breach 2025)'}
            </p>
          </div>

          <div className="bg-[#171717] rounded-2xl p-10 flex flex-col justify-center text-white shadow-xl shadow-black/20">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-5 h-5 text-white/60" strokeWidth={1.5} />
              <span className="text-[11px] text-white/70 font-medium tracking-wide uppercase">
                {isEn ? 'FINANCIAL CAPITAL PROTECTION' : 'FINANSOWA OCHRONA KAPITAŁU'}
              </span>
            </div>
            <span className="text-[72px] font-extrabold leading-none mb-6 text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>€4.2M</span>
            <p className="text-[17px] text-white/80 leading-relaxed font-medium">
              {isEn
                ? 'Average savings for an enterprise by eliminating AI-native fraud.'
                : 'Średnia oszczędność dla organizacji poprzez eliminację AI-native fraud.'}
            </p>
          </div>

        </div>

        <div className="relative">
          <div className="md:hidden absolute right-0 top-0 bottom-0 w-14 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none rounded-r-2xl" />
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm overflow-x-auto">
            <table className="w-full min-w-[560px] text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="py-5 px-8 font-bold text-gray-900 text-[15px]">{isEn ? 'Parameter' : 'Parametr'}</th>
                  <th className="py-5 px-8 font-bold text-gray-900 text-[15px]">Status Quo</th>
                  <th className="py-5 px-8 font-bold text-gray-900 text-[15px]">Qunigma</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr className="hover:bg-gray-50/50">
                  <td className="py-5 px-8 font-medium text-[15px]">{isEn ? 'Breach identification time' : 'Czas identyfikacji naruszenia'}</td>
                  <td className="py-5 px-8 text-[15px]">{isEn ? 'Avg. 241 days' : 'Średnio 241 dni'}</td>
                  <td className="py-5 px-8 font-bold text-[15px]">
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #A855F7 100%)' }}>&lt;2ms</span> {isEn ? 'active neutralization' : 'aktywna neutralizacja'}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-5 px-8 font-medium text-[15px]">{isEn ? 'DORA/AI Act penalties' : 'Sankcje DORA/AI Act'}</td>
                  <td className="py-5 px-8 text-rose-600 text-[15px]">{isEn ? 'Up to 7% of turnover' : 'Do 7% obrotu'}</td>
                  <td className="py-5 px-8 font-medium text-[15px]">{isEn ? 'Full compliance' : 'Pełna zgodność'}</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-5 px-8 font-medium text-[15px]">{isEn ? 'Board liability' : 'Odpowiedzialność zarządu'}</td>
                  <td className="py-5 px-8 text-rose-600 text-[15px]">{isEn ? '€5M + function ban' : '€5M + zakaz funkcji'}</td>
                  <td className="py-5 px-8 font-medium text-[15px]">{isEn ? 'Immutable logs' : 'Nienaruszalne logi'}</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-5 px-8 font-medium text-[15px]">{isEn ? '3-year ROI' : '3-letni ROI'}</td>
                  <td className="py-5 px-8 text-gray-500 text-[15px]">{isEn ? 'Negative' : 'Ujemny'}</td>
                  <td className="py-5 px-8 font-bold text-emerald-600 text-[15px]">~338% (IBM/IDC 2025)</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-5 px-8 font-medium text-[15px]">{isEn ? 'SecOps efficiency' : 'Efektywność SecOps'}</td>
                  <td className="py-5 px-8 text-rose-600 text-[15px]">{isEn ? 'Alert fatigue' : 'Alert fatigue'}</td>
                  <td className="py-5 px-8 font-medium text-emerald-600 text-[15px]">+38% {isEn ? 'productivity' : 'produktywności'}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="md:hidden text-right text-[11px] text-gray-400 mt-2 pr-1 tracking-wide">{isEn ? 'scroll ›' : 'przewiń ›'}</p>
        </div>

      </div>
    </section>
  );
}
