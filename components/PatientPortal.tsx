
import React from 'react';

const PortalMockup = () => (
  <div className="relative w-full max-w-[320px] mx-auto perspective-[1000px] group">
    {/* Glow background */}
    <div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
    
    {/* Phone Frame */}
    <div className="relative bg-slate-900 border-[6px] border-slate-800 rounded-[3rem] aspect-[9/19] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden transform group-hover:rotate-y-[-10deg] group-hover:rotate-x-[5deg] transition-transform duration-700 ease-premium">
      {/* Top Bar / Notch */}
      <div className="absolute top-0 inset-x-0 h-7 flex justify-center items-end pb-1.5 z-20">
        <div className="w-20 h-4 bg-slate-800 rounded-full"></div>
      </div>

      {/* Content Area */}
      <div className="p-6 pt-12 space-y-6 relative h-full flex flex-col">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <span className="text-[10px] font-black text-white">SW</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/5 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-tr from-slate-700 to-slate-600"></div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-black text-xl tracking-tight">Mis Turnos</h4>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Próximas 48hs</p>
        </div>

        {/* Appointment List */}
        <div className="space-y-3">
          {[
            { doctor: "Dr. Roberto Méndez", spec: "Traumatología", time: "Mañana 10:30", color: "cyan" },
            { doctor: "Dra. Elena Costa", spec: "Cardiología", time: "Jue 14:15", color: "blue" }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors cursor-default group/card">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-[11px] font-black text-white">{item.doctor}</div>
                  <div className="text-[9px] text-slate-500 font-medium">{item.spec}</div>
                </div>
                <div className={`w-2 h-2 rounded-full bg-${item.color}-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]`}></div>
              </div>
              <div className="text-[9px] font-mono text-cyan-400 font-bold">{item.time}</div>
            </div>
          ))}
        </div>

        {/* Results Section */}
        <div className="mt-auto space-y-3 pb-4">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 shadow-xl relative overflow-hidden group/results">
            <div className="absolute top-0 right-0 p-2">
               <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
            </div>
            <div className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter mb-2">Resultados Listos</div>
            <div className="text-[11px] text-white font-bold mb-3">Laboratorio Central - ID: 492</div>
            
            <button className="w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-white rounded-xl text-[10px] font-black flex items-center justify-center gap-2 transition-all shadow-[0_10px_20px_-5px_rgba(6,182,212,0.4)] active:scale-95">
              <svg className="w-3 h-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              DESCARGAR PDF
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements Background */}
      <div className="absolute -z-10 -right-8 top-1/4 w-24 h-24 bg-blue-500/10 blur-3xl animate-float"></div>
      <div className="absolute -z-10 -left-8 bottom-1/4 w-24 h-24 bg-cyan-500/10 blur-3xl animate-float delay-1000"></div>
    </div>
  </div>
);

export const PatientPortal: React.FC = () => {
  return (
    <section id="portal" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="glass p-12 rounded-[3.5rem] border-white/10 relative overflow-hidden">
          {/* Subtle background texture */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.05)_0%,transparent_50%)]"></div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="reveal">
              <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                Experiencia de Usuario 2026
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1]">
                Portal del Paciente <br/>
                <span className="text-white-cyan opacity-80">+ Web Premium</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
                Entregamos una web corporativa de alto impacto integrada con su infraestructura operativa. Sus pacientes gestionan sus propios turnos y estudios sin intervención humana, eliminando la carga sobre su recepción.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {[
                  { t: "Autoservicio 24/7", d: "Agendamiento dinámico de turnos." },
                  { t: "Seguridad HIPAA", d: "Descarga segura de resultados." },
                  { t: "Historial Vivo", d: "Evolución médica accesible." },
                  { t: "Cero fricción", d: "UX centrada en adultos mayores." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                    <div>
                      <h4 className="text-slate-100 font-black text-sm uppercase tracking-wide mb-1">{feature.t}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{feature.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 pt-6 border-t border-white/5">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                       <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700"></div>
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-cyan-600 flex items-center justify-center text-[10px] font-black text-white">
                    +1.2k
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                   <span className="text-slate-200 font-bold text-sm tracking-tight italic">"La mejor UX médica que he usado"</span>
                   <span className="text-slate-500 text-[10px] uppercase font-black tracking-widest">NPS Promedio 9.4/10</span>
                </div>
              </div>
            </div>

            <div className="reveal order-1 lg:order-2 flex justify-center">
               <PortalMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
