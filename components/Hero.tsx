import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-28 pb-16 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_-10%,rgba(34,211,238,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_10%_40%,rgba(59,130,246,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_90%_60%,rgba(34,211,238,0.10),transparent_55%)]" />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass text-xs font-bold tracking-widest uppercase text-slate-300 reveal">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Infraestructura operativa para clínicas privadas
        </div>

        <h1 className="mt-8 text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.02] text-white reveal">
          Menos ausencias. Más cobros.
          <br />
          <span className="text-gradient">Todo integrado por WhatsApp.</span>
        </h1>

        <p className="mt-7 max-w-3xl mx-auto text-base md:text-xl text-slate-400 leading-relaxed font-light reveal">
          Spitaweb automatiza confirmaciones y recordatorios, ordena la agenda y profesionaliza el flujo de cobro.
          Implementación en 5 días: rápido, premium y medible.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
          <button onClick={onCtaClick} className="btn-secondary w-full sm:w-auto text-base md:text-lg">
            Pedir demo por WhatsApp
          </button>
          <a
            href="#solucion"
            className="w-full sm:w-auto text-base md:text-lg px-8 py-5 border border-white/10 rounded-2xl font-bold hover:bg-white/5 transition-all text-slate-300"
          >
            Ver cómo funciona
          </a>
        </div>

        {/* Mini dashboard */}
        <div className="mt-14 max-w-5xl mx-auto reveal">
          <div className="glass rounded-[2.5rem] p-6 md:p-10 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Inasistencias</div>
                <div className="mt-2 text-3xl font-black text-white">-50%*</div>
                <div className="mt-2 text-sm text-slate-400">Con recordatorios + confirmación</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Cobros</div>
                <div className="mt-2 text-3xl font-black text-white">+Señas</div>
                <div className="mt-2 text-sm text-slate-400">Link de pago + seguimiento</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Implementación</div>
                <div className="mt-2 text-3xl font-black text-white">5 días</div>
                <div className="mt-2 text-sm text-slate-400">Proceso guiado, sin fricción</div>
              </div>
            </div>
            <div className="mt-6 text-xs text-slate-500 text-left">*Estimación típica: se ajusta según operación y volumen.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
