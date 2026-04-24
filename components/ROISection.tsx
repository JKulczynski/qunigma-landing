import { Timer, TrendingUp } from 'lucide-react';

export function ROISection() {
  return (
    <section aria-label="ROI and business case section" className="bg-[#F6F2EA] text-gray-900 w-full py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-[44px] font-bold text-center mb-6 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}
        >
          Finansowy Wymiar Aktywnej Obrony
        </h2>
        <p className="text-[20px] text-gray-600 max-w-[600px] mx-auto text-center mb-20 leading-relaxed font-medium">
          Tłumaczymy technologiczną przewagę MTTAV na twarde metryki finansowe i operacyjne wymagane przez Zarząd.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

          <div className="bg-white border border-gray-200 rounded-2xl p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <Timer className="w-5 h-5 text-[#6D28D9]" strokeWidth={1.5} />
              <span className="text-[11px] text-[#6D28D9] font-medium tracking-[0.08em] uppercase">OPERACYJNA EFEKTYWNOŚĆ</span>
            </div>
            <span className="text-[72px] font-extrabold leading-none mb-6 text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #A855F7 100%)' }}>-99.4%</span>
            <p className="text-[17px] text-gray-600 leading-relaxed font-medium">
              Redukcja czasu reakcji — z 241 dni do poniżej 2ms. (IBM Cost of a Data Breach 2025)
            </p>
          </div>

          <div className="bg-[#171717] rounded-2xl p-10 flex flex-col justify-center text-white shadow-xl shadow-black/20">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-5 h-5 text-white/60" strokeWidth={1.5} />
              <span className="text-[11px] text-white/70 font-medium tracking-wide uppercase">FINANSOWA OCHRONA KAPITAŁU</span>
            </div>
            <span className="text-[72px] font-extrabold leading-none mb-6 text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F6F2EA 30%, #6D28D9 100%)' }}>€4.2M</span>
            <p className="text-[17px] text-white/80 leading-relaxed font-medium">
              Średnia oszczędność dla banku Tier-1 poprzez eliminację AI-native fraud.
            </p>
          </div>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="py-5 px-8 font-bold text-gray-900 text-[15px]">Parametr</th>
                <th className="py-5 px-8 font-bold text-gray-900 text-[15px]">Status Quo</th>
                <th className="py-5 px-8 font-bold text-gray-900 text-[15px]">Qunigma</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              <tr className="hover:bg-gray-50/50">
                <td className="py-5 px-8 font-medium text-[15px]">Czas identyfikacji naruszenia</td>
                <td className="py-5 px-8 text-[15px]">Średnio 241 dni</td>
                <td className="py-5 px-8 font-bold text-[15px]">
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #A855F7 100%)' }}>&lt;2ms</span> aktywna neutralizacja
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="py-5 px-8 font-medium text-[15px]">Sankcje DORA/AI Act</td>
                <td className="py-5 px-8 text-rose-600 text-[15px]">Do 7% obrotu</td>
                <td className="py-5 px-8 font-medium text-[15px]">Pełna zgodność</td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="py-5 px-8 font-medium text-[15px]">Odpowiedzialność zarządu</td>
                <td className="py-5 px-8 text-rose-600 text-[15px]">€5M + zakaz funkcji</td>
                <td className="py-5 px-8 font-medium text-[15px]">Nienaruszalne logi</td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="py-5 px-8 font-medium text-[15px]">3-letni ROI</td>
                <td className="py-5 px-8 text-gray-500 text-[15px]">Ujemny</td>
                <td className="py-5 px-8 font-bold text-emerald-600 text-[15px]">~338% (IBM/IDC 2025)</td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="py-5 px-8 font-medium text-[15px]">Efektywność SecOps</td>
                <td className="py-5 px-8 text-rose-600 text-[15px]">Alert fatigue</td>
                <td className="py-5 px-8 font-medium text-emerald-600 text-[15px]">+38% produktywności</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
