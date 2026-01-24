
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onCtaClick: () => void;
  onHomeClick: () => void;
  onConsultantClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick, onHomeClick, onConsultantClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const handleLinkClick = (href: string) => {
    closeMenu();
    onHomeClick();
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navLinks = [
    { href: "#solucion", label: "Solución" },
    { href: "#portal", label: "Pacientes" },
    { href: "#casos", label: "Resultados" },
    { href: "#precios", label: "Precios" },
    { href: "#faq", label: "Ayuda" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[50] px-4 py-4 md:px-8 transition-all duration-300">
        <nav className="max-w-7xl mx-auto flex items-center justify-between glass px-4 md:px-6 py-3 rounded-full border border-white/10 shadow-2xl bg-slate-950/80 backdrop-blur-md">
          <div className="flex flex-col group z-[51]">
            <button onClick={() => { onHomeClick(); closeMenu(); }} className="flex items-center text-left focus:outline-none">
              <span className="text-xl md:text-2xl font-black tracking-tighter text-white transition-all group-hover:text-cyan-400">Spitaweb</span>
            </button>
          </div>

          <div className="hidden xl:flex items-center gap-8 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
            {navLinks.map(link => (
              <button 
                key={link.href} 
                onClick={() => handleLinkClick(link.href)} 
                className="hover:text-cyan-400 transition-colors relative group/link focus:outline-none"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover/link:w-full"></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4 z-[51]">
            <button 
              onClick={onCtaClick}
              className="px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all active:scale-95 border border-white/10"
            >
              Pedir Demo
            </button>
            
            <button 
              onClick={toggleMenu} 
              className="xl:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none bg-white/5 rounded-full border border-white/10 active:bg-white/10"
              aria-label="Abrir menú"
            >
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 w-5' : 'w-5'}`}></span>
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 w-5' : 'w-3'}`}></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 z-[49] xl:hidden transition-all duration-500 ${isMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-950/90 backdrop-blur-xl transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={closeMenu}
        ></div>

        {/* Menu Content */}
        <div className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-[320px] bg-slate-950 border-l border-white/10 p-8 pt-32 flex flex-col gap-6 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map(link => (
            <button 
              key={link.href} 
              onClick={() => handleLinkClick(link.href)}
              className="text-2xl font-bold text-slate-300 hover:text-white hover:translate-x-2 transition-all flex items-center justify-between group focus:outline-none text-left border-b border-white/5 pb-4"
            >
              {link.label}
              <span className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity text-lg">→</span>
            </button>
          ))}
          
          <div className="mt-auto bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-6 rounded-2xl border border-white/5">
            <p className="text-[10px] text-cyan-400 uppercase tracking-widest font-black mb-3">Soporte Directo</p>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">¿Dudas técnicas? Hablá directamente con nuestros ingenieros.</p>
            <button onClick={() => { onConsultantClick(); closeMenu(); }} className="w-full py-3 bg-white text-slate-950 rounded-xl font-bold text-sm hover:bg-cyan-50 transition-colors">
              Chat Soporte WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
