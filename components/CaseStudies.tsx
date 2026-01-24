
import React from 'react';

export const CaseStudies: React.FC = () => {
  return (
    <section id="casos" className="px-6 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-black mb-16 italic">Evolución de <span className="text-gradient">Casos Reales</span></h2>
        
        <div className="snap-carousel md:grid md:grid-cols-3 md:gap-8 pb-8 md:pb-0">
          {[
            {
              name: "Centro Traumatológico San Juan*",
              prob: "Ausentismo del 35% en turnos de kinesiología.",
              imp: "Recordatorios multicanal e IA de re-agendamiento.",
              res: "Ausentismo reducido al 4%. Incremento de facturación de +$4.2M/mes."
            },
            {
              name: "Clínica Oftalmológica Vision*",
              prob: "Colapso en recepción telefónica y demoras de 40min.",
              imp: "Centralización en Portal Web + Recepción WhatsApp IA.",
              res: "90% de turnos autogestionados. Tiempo de espera en sala < 10min."
            },
            {
              name: "Multiespacio Médico Premium*",
              prob: "Fuga de capital por falta de auditoría en caja.",
              imp: "Módulo de infraestructura de caja blindada Spitaweb.",
              res: "Detección de 12% de discrepancias en auditoría el primer mes."
            }
          ].map((caseData, i) => (
            <div key={i} className="snap-item">
              <div className="glass p-8 rounded-[2rem] border-white/5 flex flex-col h-full">
                <h3 className="font-bold text-xl mb-6 text-cyan-400">{caseData.name}</h3>
                <div className="space-y-6 flex-grow">
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-2">Problema</span>
                    <p className="text-base text-slate-300 leading-relaxed">{caseData.prob}</p>
                  </div>
                  <div className="w-full h-px bg-white/5"></div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-2">Implementación</span>
                    <p className="text-base text-slate-300 leading-relaxed">{caseData.imp}</p>
                  </div>
                  <div className="w-full h-px bg-white/5"></div>
                  <div className="bg-cyan-500/10 p-5 rounded-2xl border border-cyan-500/20">
                    <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest block mb-2">Resultado</span>
                    <p className="text-base text-cyan-100 font-bold italic leading-relaxed">{caseData.res}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="md:hidden flex justify-center gap-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
        </div>

        <p className="text-center mt-12 text-[10px] text-slate-600 italic uppercase tracking-widest">* Datos basados en métricas de rendimiento interno de implementaciones similares.</p>
      </div>
    </section>
  );
};
