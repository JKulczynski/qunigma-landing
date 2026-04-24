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
  return (
    <section aria-label="Team section" className="bg-[#F6F2EA] text-gray-900 w-full pt-16 pb-32 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-[#6D28D9] font-semibold text-sm uppercase tracking-widest mb-4 inline-block block">EKSPERTYZA</span>
        <h2
          className="text-[44px] font-bold mb-6 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #111827 0%, #6D28D9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}
        >
          Architekci Bezpieczeństwa
        </h2>
        <p className="text-[20px] text-gray-600 max-w-3xl mx-auto mb-20 leading-relaxed">
          Połączone doświadczenie z globalnych instytucji finansowych, środowisk AI i czołowych ośrodków badań technologicznych.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-2 border-purple-300 mb-6 bg-gray-200 overflow-hidden">
              {/* Placeholder until photos are swapped */}
              <div className="w-full h-full bg-gray-300" />
            </div>
            <h3 className="text-[20px] font-bold text-gray-900 mb-1">Peter Mankowski</h3>
            <span className="text-[12px] text-purple-600 font-bold uppercase tracking-widest mb-3 text-center">CHIEF AI & EMERGING TECHNOLOGY ADVISOR</span>
            <p className="text-[15px] text-gray-600 font-medium max-w-[280px] mb-4">
              BlackBerry Technical Lead. VP AI & Computer Vision, 4AG Robotics. Wielokrotny CEO i wynalazca w IoT.
            </p>
            <a href="#" aria-label="Peter Mankowski on LinkedIn" className="hover:opacity-70 transition-opacity">
              <LinkedInIcon />
            </a>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-2 border-purple-300 mb-6 bg-gray-200 overflow-hidden">
              {/* Placeholder until photos are swapped */}
              <div className="w-full h-full bg-gray-300" />
            </div>
            <h3 className="text-[20px] font-bold text-gray-900 mb-1">Paul Cebo</h3>
            <span className="text-[12px] text-purple-600 font-bold uppercase tracking-widest mb-3 text-center">EXECUTIVE CONSULTANT & vCISO LEAD</span>
            <p className="text-[15px] text-gray-600 font-medium max-w-[280px] mb-4">
              Prezes Norbsoft Mobile (12 lat). Enterprise consulting: Samsung, Thomson Reuters, instytucje finansowe.
            </p>
            <a href="#" aria-label="Paul Cebo on LinkedIn" className="hover:opacity-70 transition-opacity">
              <LinkedInIcon />
            </a>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-2 border-purple-300 mb-6 bg-gray-200 overflow-hidden">
              {/* Placeholder until photos are swapped */}
              <div className="w-full h-full bg-gray-300" />
            </div>
            <h3 className="text-[20px] font-bold text-gray-900 mb-1">Andrei Buin, PhD</h3>
            <span className="text-[12px] text-purple-600 font-bold uppercase tracking-widest mb-3 text-center">RESEARCH LEAD — AI & COMPUTATIONAL SECURITY</span>
            <p className="text-[15px] text-gray-600 font-medium max-w-[280px] mb-4">
              University of Toronto & Waterloo. Architekt MTTAV. Publikacje: Nano Letters, Physical Review B.
            </p>
            <a href="#" aria-label="Andrei Buin on LinkedIn" className="hover:opacity-70 transition-opacity">
              <LinkedInIcon />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
