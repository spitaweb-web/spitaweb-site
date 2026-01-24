
import React from 'react';

const metricItems = [
  { label: "ROI Promedio", value: "2.4x", detail: "En el primer año" },
  { label: "Tiempo de Setup", value: "45", detail: "Días corridos" },
  { label: "Facturación Recuperada", value: "+12%", detail: "Por auditoría IA" },
  { label: "Satisfacción Paciente", value: "9.2", detail: "NPS promedio" }
];

export const Metrics: React.FC = () => {
  return (
    <section id="metricas" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metricItems.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-6xl font-black text-gradient mb-2">{m.value}</div>
              <div className="text-slate-200 font-bold text-sm md:text-base uppercase tracking-wider mb-1">{m.label}</div>
              <div className="text-slate-500 text-xs md:text-sm">{m.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
