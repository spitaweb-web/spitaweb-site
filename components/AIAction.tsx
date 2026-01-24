
import React from 'react';

const MockupChatIA = () => (
  <div className="ui-window h-40 mb-6 bg-slate-900 border-white/5 overflow-hidden flex flex-col">
    <div className="bg-slate-800/50 p-2 flex items-center gap-2 border-b border-white/5">
      <div className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center text-[8px] font-bold">SW</div>
      <span className="text-[9px] font-bold">Asistente IA</span>
    </div>
    <div className="p-3 space-y-3 flex-grow overflow-hidden">
      <div className="bg-slate-800 rounded-lg p-2 text-[9px] max-w-[80%] text-slate-300">
        Hola! Deseo un turno para Traumatología el lunes.
      </div>
      <div className="bg-cyan-600/20 border border-cyan-500/20 rounded-lg p-2 text-[9px] max-w-[80%] ml-auto text-cyan-100">
        Perfecto Dr. Rossi tiene a las 10:00. ¿Agendamos?
      </div>
      <div className="flex justify-end gap-2">
        <div className="px-3 py-1 bg-cyan-500 rounded-full text-[8px] font-black text-white">AGENDAR</div>
      </div>
    </div>
  </div>
);

const MockupTimelineIA = () => (
  <div className="ui-window h-40 mb-6 bg-slate-900 border-white/5 p-4 flex flex-col">
    <div className="text-[9px] font-bold text-slate-500 mb-4 uppercase tracking-widest">Lógica de Re-agendamiento</div>
    <div className="relative pl-6 space-y-6 flex-grow">
      <div className="absolute left-1 top-0 bottom-0 w-px bg-white/5"></div>
      {[
        { t: "Inasistencia detectada", active: true },
        { t: "Envío oferta alternativa", active: true },
        { t: "Liberación de espacio", active: false }
      ].map((step, i) => (
        <div key={i} className="relative">
          <div className={`absolute -left-[23px] top-1 w-2.5 h-2.5 rounded-full border-2 border-slate-900 ${step.active ? 'bg-cyan-500' : 'bg-slate-700'}`}></div>
          <span className={`text-[9px] ${step.active ? 'text-slate-200' : 'text-slate-500'}`}>{step.t}</span>
        </div>
      ))}
    </div>
  </div>
);

const MockupCampaignIA = () => (
  <div className="ui-window h-40 mb-6 bg-slate-900 border-white/5 p-4">
    <div className="text-[9px] font-bold text-slate-500 mb-2 uppercase tracking-widest">Segmento: Inactivos +60d</div>
    <div className="space-y-2">
      {Array.from({length: 3}).map((_, i) => (
        <div key={i} className="bg-white/[0.03] p-2 rounded flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full bg-slate-800"></div>
            <div className="h-2 w-16 bg-slate-700 rounded-full"></div>
          </div>
          <div className="h-3 w-8 bg-cyan-500/20 rounded text-[7px] flex items-center justify-center text-cyan-500">ENVIADO</div>
        </div>
      ))}
      <div className="pt-2 text-center">
        <span className="text-[8px] font-black text-cyan-400">Total: 42 reactivados hoy</span>
      </div>
    </div>
  </div>
);

export const AIAction: React.FC = () => {
  return (
    <section id="ia" className="py-24 px-6 bg-slate-900/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto text-center mb-16 reveal">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 italic text-gradient">IA en acción (sin humo)</h2>
        <p className="text-slate-400">Automatización real para problemas diarios.</p>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          { 
            t: "Recepción WhatsApp", 
            d: "Nuestra IA entiende lenguaje natural. El paciente pide turno por chat y el sistema lo agenda solo.",
            mockup: <MockupChatIA />
          },
          { 
            t: "IA Anti-Ausencias", 
            d: "Categoriza la urgencia y ante inasistencia, re-agenda en tiempo real liberando el espacio ocioso.",
            mockup: <MockupTimelineIA />
          },
          { 
            t: "IA Reactivación", 
            d: "Detecta pacientes que no volvieron a su control anual y les ofrece una cita personalizada mediante campañas inteligentes.",
            mockup: <MockupCampaignIA />
          }
        ].map((item, i) => (
          <div key={i} className="p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.02] flex flex-col reveal" style={{ transitionDelay: `${i * 150}ms` }}>
            <div className="flex-grow">
              {item.mockup}
              <h4 className="text-cyan-400 font-bold mb-3 uppercase text-xs tracking-widest">{item.t}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{item.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
