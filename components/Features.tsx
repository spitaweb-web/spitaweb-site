
import React from 'react';

const featureList = [
  {
    title: "IA de Facturación & Cobranza",
    description: "Algoritmos entrenados para detectar discrepancias en liquidaciones de obras sociales antes de enviarlas. Reducción drástica de débitos.",
    icon: "📊"
  },
  {
    title: "Optimización de Flujo Físico",
    description: "Sensores y telemetría para medir el uso real de consultorios y quirófanos. Maximice el rendimiento por metro cuadrado.",
    icon: "🏢"
  },
  {
    title: "Logística Proactiva de Insumos",
    description: "Control de stock inteligente que predice el agotamiento de suministros críticos según la agenda quirúrgica.",
    icon: "📦"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="infraestructura" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Infraestructura <span className="text-gradient">End-to-End</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            No es una herramienta aislada, es el sistema nervioso central de su clínica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featureList.map((f, i) => (
            <div key={i} className="glass p-8 rounded-3xl hover:border-cyan-500/30 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-slate-100">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
