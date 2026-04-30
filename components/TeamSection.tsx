'use client';

import { usePathname } from 'next/navigation';

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export function TeamSection() {
  const isEn = usePathname().startsWith('/en');

  return (
    <section aria-label="Team section" className="bg-[#F6F2EA] text-gray-900 w-full pt-16 pb-32 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-[#6D28D9] font-semibold text-sm uppercase tracking-widest mb-4 inline-block block">
          {isEn ? 'EXPERTISE' : 'EKSPERTYZA'}
        </span>
        <h2
          className="text-[44px] font-bold mb-6 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}
        >
          {isEn ? 'Security Architects' : 'Architekci Bezpieczeństwa'}
        </h2>
        <p className="text-[20px] text-gray-600 max-w-3xl mx-auto mb-20 leading-relaxed">
          {isEn
            ? 'Combined experience from global financial institutions, AI environments and leading technology research centres.'
            : 'Połączone doświadczenie z globalnych instytucji finansowych, środowisk AI i czołowych ośrodków badań technologicznych.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">

          <div className="flex flex-col items-center">
            <h3 className="text-[20px] font-bold text-gray-900 mb-1">Peter Mankowski</h3>
            <span className="text-[12px] text-purple-600 font-bold uppercase tracking-widest mb-3 text-center">CHIEF AI & EMERGING TECHNOLOGY ADVISOR</span>
            <p className="text-[15px] text-gray-600 font-medium max-w-[280px] mb-4">
              {isEn
                ? 'BlackBerry Technical Lead. VP AI & Computer Vision, 4AG Robotics. Serial CEO and inventor in IoT.'
                : 'BlackBerry Technical Lead. VP AI & Computer Vision, 4AG Robotics. Wielokrotny CEO i wynalazca w IoT.'}
            </p>
            <a href="https://www.linkedin.com/in/peter-mankowski-18065619/" target="_blank" rel="noopener noreferrer" aria-label="Peter Mankowski on LinkedIn" className="hover:opacity-70 transition-opacity">
              <LinkedInIcon />
            </a>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[20px] font-bold text-gray-900 mb-1">Paul Cebo</h3>
            <span className="text-[12px] text-purple-600 font-bold uppercase tracking-widest mb-3 text-center">EXECUTIVE CONSULTANT & vCISO LEAD</span>
            <p className="text-[15px] text-gray-600 font-medium max-w-[280px] mb-4">
              {isEn
                ? 'President of Norbsoft Mobile (12 years). Enterprise consulting: Samsung, Thomson Reuters, financial institutions.'
                : 'Prezes Norbsoft Mobile (12 lat). Enterprise consulting: Samsung, Thomson Reuters, instytucje finansowe.'}
            </p>
            <a href="https://www.linkedin.com/in/paulcebo/" target="_blank" rel="noopener noreferrer" aria-label="Paul Cebo on LinkedIn" className="hover:opacity-70 transition-opacity">
              <LinkedInIcon />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
