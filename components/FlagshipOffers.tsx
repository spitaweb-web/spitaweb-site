
import React from 'react';
import { SvgIcon } from './SvgIcon';

const icons = {
  rocket: "M13 10V3L4 14h7v7l9-11h-7z",
  hotel: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
};

export const FlagshipOffers: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      {/* Premium Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl opacity-20 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.15)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
            Spitaweb Enterprise Studio
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Flagship <span className="text-amber-400">Offers</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Nuestras arquitecturas de alto rendimiento. Soluciones empaquetadas para dominar su categoría de mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative bg-slate-950/80 backdrop-blur-md border border-white/5 hover:border-amber-500/40 rounded-[2rem] p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] reveal">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]"></div>
            
            <div className="mb-8 p-4 bg-slate-900 border border-white/5 rounded-2xl w-fit group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
              <SvgIcon d={icons.rocket} size="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Landing Page That Sells</h3>
            <p className="text-[10px] text-amber-500 font-black uppercase tracking-widest mb-6">High Velocity Conversion</p>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
              No una web informativa, sino un embudo de conversión médica. Diseño psicológico enfocado en transformar visitantes en turnos confirmados. Copywriting persuasivo + UX de alta velocidad.
            </p>

            <ul className="space-y-3 mb-8">
              {["Diseño Neuro-Persuasivo", "Copywriting Clínico", "SEO Técnico Avanzado"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                  <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest text-white hover:bg-amber-500 hover:text-slate-950 hover:border-transparent transition-all">
              Ver Especificaciones
            </button>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-slate-950/80 backdrop-blur-md border border-white/5 hover:border-amber-500/40 rounded-[2rem] p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] reveal delay-100">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]"></div>
            
            <div className="mb-8 p-4 bg-slate-900 border border-white/5 rounded-2xl w-fit group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
              <SvgIcon d={icons.hotel} size="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Medical Hotel Experience</h3>
            <p className="text-[10px] text-amber-500 font-black uppercase tracking-widest mb-6">Premium Hospitality</p>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
              Para clínicas de cirugía plástica y estética que buscan un servicio 5 estrellas. Sistema de conserjería digital, menú a la carta para internación y seguimiento VIP post-operatorio.
            </p>

            <ul className="space-y-3 mb-8">
              {["App de Concierge", "Menú Digital de Internación", "Encuestas NPS Automatizadas"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                  <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest text-white hover:bg-amber-500 hover:text-slate-950 hover:border-transparent transition-all">
              Ver Especificaciones
            </button>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-slate-950/80 backdrop-blur-md border border-white/5 hover:border-amber-500/40 rounded-[2rem] p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] reveal delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]"></div>
            
            <div className="mb-8 p-4 bg-slate-900 border border-white/5 rounded-2xl w-fit group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
              <SvgIcon d={icons.shield} size="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Infrastructure Shield</h3>
            <p className="text-[10px] text-amber-500 font-black uppercase tracking-widest mb-6">Total Reliability</p>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
              El stack tecnológico más robusto del mercado. Garantizamos 99.9% de uptime, backups horarios encriptados y cumplimiento estricto de normativas de datos médicos internacionales.
            </p>

            <ul className="space-y-3 mb-8">
              {["SLA 99.9% Garantizado", "Auditoría de Seguridad", "Backups Inmutables"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                  <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest text-white hover:bg-amber-500 hover:text-slate-950 hover:border-transparent transition-all">
              Ver Especificaciones
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
