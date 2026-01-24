
import React from 'react';

interface PricingPlanProps {
  onCtaClick: () => void;
}

export const PricingPlan: React.FC<PricingPlanProps> = ({ onCtaClick }) => {
  return (
    <section id="precios" className="px-4 md:px-6 relative py-12 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 leading-tight">Plan Único: <br className="md:hidden" /><span className="text-gradient">Potencial Full</span></h2>
          <p className="text-slate-400 italic text-sm md:text-lg px-4">No vendemos módulos. Entregamos la arquitectura completa de su éxito.</p>
        </div>
        
        <div className="glass p-6 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 md:right-12 md:-translate-y-1/2 w-full md:w-auto text-center md:text-left pt-4 md:pt-0">
             <div className="inline-block px-4 py-1.5 md:px-6 md:py-2.5 bg-cyan-500 text-white font-black rounded-full text-[9px] md:text-[10px] tracking-[0.2em] animate-pulse uppercase shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                Suscripción Anual
             </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-12 md:mt-0">
            <div>
              <div className="mb-8 md:mb-10 relative">
                <span className="text-slate-500 text-[9px] md:text-[10px] uppercase font-black tracking-widest block mb-2 md:mb-3">Inversión Setup (Única)</span>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-4xl md:text-5xl font-black text-white tracking-tight">$680.000</span>
                  <span className="text-slate-600 text-xs md:text-lg font-medium italic">/ ARS</span>
                </div>
              </div>
              <div className="mb-10 md:mb-14 relative">
                <span className="text-slate-500 text-[9px] md:text-[10px] uppercase font-black tracking-widest block mb-2 md:mb-3">Mantenimiento IA (Mensual)</span>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-5xl md:text-7xl font-black text-gradient tracking-tighter">$190.000</span>
                  <span className="text-slate-600 text-sm md:text-xl font-medium italic">/ ARS</span>
                </div>
              </div>
              <button 
                onClick={onCtaClick}
                className="btn-secondary w-full text-base md:text-xl py-4 md:py-6 shadow-xl"
              >
                Solicitar implementación
              </button>
            </div>
            
            <div className="space-y-4 md:space-y-5 pt-6 md:pt-0 border-t border-white/5 md:border-0">
              <h4 className="font-black text-slate-200 mb-4 md:mb-8 uppercase text-[9px] md:text-[10px] tracking-widest md:border-b border-white/10 pb-0 md:pb-4">Protocolo de entrega:</h4>
              {[
                "Infraestructura IA de Recepción WhatsApp",
                "Portal del Paciente Web Premium",
                "Módulo de Caja Blindada y Auditoría",
                "Account Manager Dedicado 24/7",
                "Implementación Express (5 días)",
                "Integración API con HIS/Sistemas Actuales",
                "Dashboard de Métricas ROI en tiempo real"
              ].map((inc, i) => (
                <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-slate-400 font-medium">
                  <span className="text-cyan-400 flex-shrink-0 mt-0.5">✦</span> 
                  <span className="leading-snug">{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
