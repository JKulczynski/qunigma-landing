function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M4 4 L20 20"/>
      <path d="M20 4 L4 20"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#000000] text-white/60 text-sm w-full py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 border-b border-white/10 pb-12 mb-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="qGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#A3A3A3" />
                  </linearGradient>
                </defs>
                <circle cx="45" cy="45" r="32" stroke="url(#qGradFooter)" strokeWidth="20" />
                <polygon points="50,50 95,95 65,95 40,70" fill="#FFFFFF" />
              </svg>
              <span className="text-white font-bold text-lg tracking-tighter uppercase leading-none">UNIGMA</span>
            </div>
            <p>Built in EU, for EU.</p>
            <p>DPO: privacy@qunigma.ai</p>
            <p>EU-sovereign infrastructure.</p>
          </div>

          {/* Platforma */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-[13px] tracking-[0.08em] mb-1">Platforma</h4>
            <a href="#" className="hover:text-white transition-colors">MTTAV Engine</a>
            <a href="#" className="hover:text-white transition-colors">Honeypot LLM</a>
            <a href="#" className="hover:text-white transition-colors">Memory Guard</a>
            <a href="#" className="hover:text-white transition-colors">NHI Security</a>
          </div>

          {/* Rozwiązania */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-[13px] tracking-[0.08em] mb-1">Rozwiązania</h4>
            <a href="#" className="hover:text-white transition-colors">All Green Fraud</a>
            <a href="#" className="hover:text-white transition-colors">NHI Governance</a>
            <a href="#" className="hover:text-white transition-colors">LLM Defense</a>
            <a href="#" className="hover:text-white transition-colors">Compliance & Risk</a>
          </div>

          {/* Compliance */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-[13px] tracking-[0.08em] mb-1">Compliance</h4>
            <a href="#" className="hover:text-white transition-colors">DORA 2025</a>
            <a href="#" className="hover:text-white transition-colors">AI Act Annex III</a>
            <a href="#" className="hover:text-white transition-colors">CRA</a>
            <a href="#" className="hover:text-white transition-colors">NIS2</a>
          </div>

          {/* Kontakt */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-[13px] tracking-[0.08em] mb-1">Kontakt</h4>
            <a href="mailto:piotr@qunigma.ai" className="hover:text-white transition-colors">piotr@qunigma.ai</a>
          </div>

          {/* Firma */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-[13px] tracking-[0.08em] mb-1">Firma</h4>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">GDPR</a>
            <a href="#" className="hover:text-white transition-colors">Imprint</a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© {new Date().getFullYear()} Qunigma. EU-sovereign. No CLOUD Act exposure. DORA-aligned.</p>
          <div className="flex items-center gap-4 text-[#6D28D9]">
            <a href="#" aria-label="Qunigma on LinkedIn" className="hover:text-purple-400 transition-colors">
              <LinkedInIcon />
            </a>
            <a href="#" aria-label="Qunigma on X" className="hover:text-purple-400 transition-colors">
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
