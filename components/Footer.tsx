
import React from 'react';

interface FooterProps {
  onCtaClick: () => void;
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onCtaClick, onPrivacyClick, onTermsClick }) => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass p-12 rounded-[3rem] mb-20 text-center relative overflow-hidden border border-white/5 reveal">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/10 -z-10"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Escale su clínica <br/><span className="text-gradient">sin límites operativos</span></h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto font-medium text-lg leading-relaxed">
            Solicite una consultoría estratégica para auditar sus procesos actuales y diseñar su nueva infraestructura.
          </p>
          <button 
            onClick={onCtaClick}
            className="px-12 py-5 bg-white text-slate-950 rounded-2xl font-black text-xl hover:bg-cyan-400 hover:text-white transition-all shadow-2xl active:scale-95"
          >
            Solicitar Demo Estratégica
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
          <div className="flex items-center">
            <span className="font-black tracking-tighter text-white text-xl uppercase">Spitaweb © 2026</span>
          </div>
          
          <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-slate-500">
            <button onClick={onPrivacyClick} className="hover:text-cyan-400 transition-colors focus:outline-none">Privacidad</button>
            <button onClick={onTermsClick} className="hover:text-cyan-400 transition-colors focus:outline-none">Términos</button>
            <a 
              href="https://instagram.com/spitaweb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
            >
              <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Instagram</span>
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
