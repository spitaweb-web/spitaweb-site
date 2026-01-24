
import React from 'react';

export const Timeline: React.FC = () => {
  return (
    <section id="proceso" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-center text-3xl font-bold mb-16">Implementación en <span className="text-cyan-400">5 días hábiles</span></h2>
      <div className="grid md:grid-cols-5 gap-4">
        {[
          { d: "Día 1", t: "Auditoría Operativa", icon: "🔍" },
          { d: "Día 2", t: "Configuración Core", icon: "⚙️" },
          { d: "Día 3", t: "Entrenamiento IA", icon: "🧠" },
          { d: "Día 4", t: "Lanzamiento Portal", icon: "🚀" },
          { d: "Día 5", t: "Handover Equipo", icon: "🤝" }
        ].map((step, i) => (
          <div key={i} className="text-center p-6 border border-white/5 rounded-2xl bg-white/[0.01]">
            <div className="text-slate-500 font-bold text-xs mb-4">{step.d}</div>
            <div className="text-2xl mb-2">{step.icon}</div>
            <div className="text-slate-200 font-bold text-sm leading-tight">{step.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
