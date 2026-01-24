import React from 'react';

const NodeVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-cyan-500/5 blur-[100px]" />
    <svg viewBox="0 0 400 400" className="w-full h-full opacity-40">
      <defs>
        <linearGradient id="spwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g stroke="url(#spwGrad)" strokeWidth="0.6" strokeDasharray="4 4">
        <line x1="90" y1="110" x2="310" y2="150" />
        <line x1="310" y1="150" x2="260" y2="300" />
        <line x1="260" y1="300" x2="90" y2="110" />
        <line x1="90" y1="110" x2="200" y2="210" />
        <line x1="200" y1="210" x2="310" y2="150" />
      </g>
      {[{ x: 90, y: 110 }, { x: 310, y: 150 }, { x: 260, y: 300 }, { x: 200, y: 210 }].map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="4" fill="#fff" opacity="0.85" />
      ))}
    </svg>
  </div>
);

export const WhyInfrastructure: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="solucion">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[380px] lg:h-[560px] bg-slate-900/50 rounded-[3rem] border border-white/5 overflow-hidden reveal">
          <NodeVisual />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-slate-950/80 backdrop-blur-md border border-white/10 px-8 py-4 rounded-2xl shadow-2xl">
              <span className="text-cyan-400 font-bold text-lg block mb-1">Conexión total</span>
              <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                Agenda • WhatsApp • Cobros
              </span>
            </div>
          </div>
        </div>

        <div className="reveal">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            El fin del <br />
            <span className="text-gradient">caos administrativo.</span>
          </h2>

          <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
            <p>
              Turnos por un lado, cobros por otro, y pacientes pidiendo respuestas por WhatsApp.
              <strong className="text-white font-bold"> Esa desconexión cuesta caja.</strong>
            </p>
            <p>
              Spitaweb unifica operación: cuando se reserva, se confirma, se recuerda y se cobra con trazabilidad.
              Menos huecos, más ocupación real.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="pl-4 border-l-2 border-cyan-500">
              <span className="text-2xl font-black text-white block mb-1">-30% a -70%</span>
              <span className="text-slate-500 text-sm">Inasistencias (según operación)</span>
            </div>
            <div className="pl-4 border-l-2 border-blue-500">
              <span className="text-2xl font-black text-white block mb-1">+Señas</span>
              <span className="text-slate-500 text-sm">Cobro y confirmación con intención real</span>
            </div>
            <div className="pl-4 border-l-2 border-cyan-500">
              <span className="text-2xl font-black text-white block mb-1">5 días</span>
              <span className="text-slate-500 text-sm">Implementación premium guiada</span>
            </div>
            <div className="pl-4 border-l-2 border-blue-500">
              <span className="text-2xl font-black text-white block mb-1">+Control</span>
              <span className="text-slate-500 text-sm">Métricas y mejora continua</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInfrastructure;
