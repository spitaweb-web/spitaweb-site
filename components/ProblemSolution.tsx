
import React from 'react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="solucion" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              ¿Por qué su clínica sigue perdiendo <span className="text-red-500/80">margen operativo?</span>
            </h2>
            <ul className="space-y-6">
              {[
                "Sistemas fragmentados que no se hablan entre sí.",
                "Errores en la facturación con obras sociales y prepagas.",
                "Subutilización de quirófanos y consultorios.",
                "Personal administrativo sobrecargado con tareas manuales."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full border border-red-500/30 flex items-center justify-center shrink-0">
                    <span className="text-red-500 text-xs">✕</span>
                  </div>
                  <p className="text-slate-400 text-lg">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-8 md:p-12 rounded-[2.5rem] relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/20 blur-3xl"></div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-cyan-400">Efecto Spitaweb</span>
            </h3>
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-200">Facturación Automatizada</span>
                  <span className="text-cyan-400 font-bold">+98% precisión</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 w-[98%] transition-all group-hover:bg-cyan-400"></div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-200">Uso de Infraestructura Física</span>
                  <span className="text-cyan-400 font-bold">+35% eficiencia</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 w-[75%] transition-all group-hover:bg-cyan-400"></div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-200">Tiempo de Espera del Paciente</span>
                  <span className="text-blue-400 font-bold">-45% reducción</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[55%] transition-all group-hover:bg-blue-400"></div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-slate-500 italic">
              * Datos proyectados basados en implementaciones promedio en clínicas de alta complejidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
