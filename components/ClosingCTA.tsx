
import React from 'react';

interface ClosingCTAProps {
  onCtaClick: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onCtaClick }) => {
  return (
    <section id="contacto" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Es tiempo de <br/><span className="text-gradient">operar profesionalmente.</span></h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              No todas las instituciones califican para Spitaweb. Buscamos centros médicos con visión de crecimiento real.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="font-bold text-cyan-400 mb-4 text-xs uppercase tracking-widest">Ideal para...</h4>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• Clínicas con +10 médicos</li>
	                  <li>• Centros con &gt;1.000 turnos/mes</li>
                  <li>• Dueños que lideran el cambio</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-red-500 mb-4 text-xs uppercase tracking-widest">No apto para...</h4>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>• Consultorios independientes</li>
                  <li>• Bajo volumen de pacientes</li>
                  <li>• Sin visión de inversión IA</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="glass p-12 rounded-[3rem] text-center">
            <h3 className="text-2xl font-bold mb-6">Agenda tu Demo Estratégica</h3>
            <p className="text-slate-400 mb-8 text-sm">Analizaremos su flujo actual y la viabilidad del despliegue.</p>
            <button 
              onClick={onCtaClick}
              className="px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl font-bold text-xl glow-blue hover:scale-105 transition-all w-full"
            >
              Confirmar Disponibilidad
            </button>
            <div className="mt-8 flex items-center justify-center gap-4 grayscale opacity-40">
              <div className="w-12 h-6 bg-slate-700 rounded"></div>
              <div className="w-12 h-6 bg-slate-700 rounded"></div>
              <div className="w-12 h-6 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
