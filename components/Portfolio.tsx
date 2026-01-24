
import React from 'react';

const PortalVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="w-24 h-48 bg-slate-900 rounded-[2rem] border-[3px] border-white/10 relative overflow-hidden shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700">
      <div className="absolute top-0 inset-x-0 h-4 flex justify-center items-center">
        <div className="w-8 h-1.5 bg-white/10 rounded-full"></div>
      </div>
      <div className="p-3 pt-6 space-y-2">
        <div className="h-2 w-10 bg-cyan-500/50 rounded-full"></div>
        <div className="space-y-1.5">
          <div className="h-6 w-full bg-white/5 rounded-lg border border-white/5 flex items-center px-1.5">
             <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-1.5"></div>
             <div className="h-1 w-8 bg-white/10 rounded-full"></div>
          </div>
          <div className="h-6 w-full bg-white/5 rounded-lg border border-white/5 flex items-center px-1.5">
             <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5"></div>
             <div className="h-1 w-6 bg-white/10 rounded-full"></div>
          </div>
        </div>
        <div className="pt-4">
          <div className="h-10 w-full bg-cyan-600 rounded-xl flex items-center justify-center">
            <div className="w-6 h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/10 blur-3xl -z-10 group-hover:bg-cyan-500/20 transition-colors"></div>
  </div>
);

const DashboardVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <div className="w-full aspect-video bg-slate-900 rounded-xl border border-white/10 p-3 space-y-3 shadow-2xl group-hover:scale-105 transition-transform duration-700">
      <div className="flex justify-between items-center border-b border-white/5 pb-2">
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-red-500/50"></div>
          <div className="w-1 h-1 rounded-full bg-yellow-500/50"></div>
          <div className="w-1 h-1 rounded-full bg-green-500/50"></div>
        </div>
        <div className="w-8 h-1 bg-white/10 rounded-full"></div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="h-8 bg-white/5 rounded-lg border border-white/5 p-1">
           <div className="h-1 w-4 bg-slate-500 rounded-full mb-1"></div>
           <div className="h-2 w-6 bg-cyan-400 rounded-full"></div>
        </div>
        <div className="h-8 bg-white/5 rounded-lg border border-white/5 p-1">
           <div className="h-1 w-3 bg-slate-500 rounded-full mb-1"></div>
           <div className="h-2 w-5 bg-blue-400 rounded-full"></div>
        </div>
        <div className="h-8 bg-white/5 rounded-lg border border-white/5 p-1">
           <div className="h-1 w-4 bg-slate-500 rounded-full mb-1"></div>
           <div className="h-2 w-4 bg-green-400 rounded-full"></div>
        </div>
      </div>
      <div className="h-12 w-full flex items-end gap-1">
        {Array.from({length: 12}).map((_, i) => (
          <div key={i} className="flex-1 bg-cyan-500/30 rounded-t-sm group-hover:bg-cyan-500/60 transition-colors" style={{ height: `${Math.random()*60 + 20}%` }}></div>
        ))}
      </div>
    </div>
  </div>
);

const NotificationVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="w-48 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl relative z-10 animate-float group-hover:border-cyan-500/30 transition-colors">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded bg-green-500 flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
        </div>
        <span className="text-[10px] font-black text-white uppercase tracking-widest">WhatsApp</span>
      </div>
      <div className="space-y-1.5">
        <div className="h-1.5 w-full bg-white/20 rounded-full"></div>
        <div className="h-1.5 w-3/4 bg-white/10 rounded-full"></div>
      </div>
    </div>
    <div className="absolute inset-0 bg-slate-950/40 blur-md pointer-events-none"></div>
  </div>
);

const ChatAIVisual = () => (
  <div className="relative w-full h-full p-6 flex flex-col justify-center gap-3">
    <div className="w-3/4 bg-white/5 border border-white/5 rounded-2xl p-3 transform group-hover:-translate-x-2 transition-transform">
      <div className="h-1.5 w-16 bg-slate-500 rounded-full mb-2"></div>
      <div className="h-1 w-24 bg-slate-700 rounded-full"></div>
    </div>
    <div className="w-3/4 bg-cyan-600/20 border border-cyan-500/20 rounded-2xl p-3 self-end transform group-hover:translate-x-2 transition-transform">
      <div className="h-1.5 w-12 bg-cyan-400 rounded-full mb-2"></div>
      <div className="h-1 w-20 bg-cyan-200/50 rounded-full mb-1"></div>
      <div className="h-1 w-16 bg-cyan-200/50 rounded-full"></div>
    </div>
    <div className="absolute bottom-4 right-4 animate-pulse">
       <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_var(--brand-cyan)]"></div>
    </div>
  </div>
);

const WebPremiumVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="w-full h-full bg-slate-950 rounded-2xl border border-white/10 overflow-hidden relative group-hover:scale-105 transition-transform duration-700 shadow-2xl">
      <div className="h-6 bg-white/5 border-b border-white/5 px-3 flex items-center gap-1">
        <div className="w-1 h-1 rounded-full bg-slate-700"></div>
        <div className="w-1 h-1 rounded-full bg-slate-700"></div>
        <div className="w-1 h-1 rounded-full bg-slate-700"></div>
      </div>
      <div className="p-4 flex flex-col items-center justify-center h-full gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 animate-float"></div>
        <div className="h-2 w-24 bg-white/20 rounded-full"></div>
        <div className="h-1.5 w-32 bg-white/5 rounded-full"></div>
        <div className="flex gap-2 mt-2">
          <div className="h-4 w-12 bg-cyan-600/50 rounded-full"></div>
          <div className="h-4 w-12 bg-white/5 rounded-full border border-white/10"></div>
        </div>
      </div>
    </div>
  </div>
);

const AuditVisual = () => (
  <div className="relative w-full h-full p-8 flex flex-col justify-center">
    <div className="space-y-6">
       <div className="space-y-2">
         <div className="flex justify-between items-center">
           <div className="h-1.5 w-20 bg-slate-500 rounded-full"></div>
           <div className="text-[10px] font-black text-green-400">98%</div>
         </div>
         <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-500 w-[98%] group-hover:bg-green-400 transition-colors"></div>
         </div>
       </div>
       <div className="space-y-2">
         <div className="flex justify-between items-center">
           <div className="h-1.5 w-16 bg-slate-500 rounded-full"></div>
           <div className="text-[10px] font-black text-cyan-400">AUDITED</div>
         </div>
         <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-[75%] group-hover:w-[100%] transition-all duration-1000"></div>
         </div>
       </div>
       <div className="grid grid-cols-2 gap-4 pt-4">
         <div className="h-10 bg-white/5 rounded-xl border border-white/5 p-2">
            <div className="h-1 w-6 bg-slate-600 rounded-full mb-1"></div>
            <div className="h-3 w-10 bg-white/20 rounded-full"></div>
         </div>
         <div className="h-10 bg-white/5 rounded-xl border border-white/5 p-2">
            <div className="h-1 w-6 bg-slate-600 rounded-full mb-1"></div>
            <div className="h-3 w-8 bg-white/20 rounded-full"></div>
         </div>
       </div>
    </div>
  </div>
);

const portfolioItems = [
  {
    title: "Portal del Paciente",
    caption: "Autoservicio intuitivo para turnos y resultados.",
    visual: <PortalVisual />
  },
  {
    title: "Dashboard de Operaciones",
    caption: "Métricas de ausentismo y rendimiento en tiempo real.",
    visual: <DashboardVisual />
  },
  {
    title: "Confirmaciones Inteligentes",
    caption: "Recordatorios automáticos vía WhatsApp y SMS.",
    visual: <NotificationVisual />
  },
  {
    title: "Asistente Virtual IA",
    caption: "Agendamiento conversacional sin intervención humana.",
    visual: <ChatAIVisual />
  },
  {
    title: "Home Web Premium",
    caption: "Sitio corporativo de alto impacto para su clínica.",
    visual: <WebPremiumVisual />
  },
  {
    title: "Auditoría de Facturación",
    caption: "Control total de liquidaciones y débitos.",
    visual: <AuditVisual />
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Ecosistema Visual
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">Interfaces de <span className="text-gradient">Grado Médico</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg italic leading-relaxed">
            Una interfaz diseñada para proyectar la máxima solvencia tecnológica y profesional de su institución ante pacientes y directivos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, i) => (
            <div key={i} className="glass rounded-[2.5rem] overflow-hidden group reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="aspect-[4/3] bg-slate-950 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 left-4 w-12 h-1 bg-white/5 rounded-full"></div>
                
                {/* Visual Component Render */}
                <div className="relative z-10 w-full h-full">
                  {item.visual}
                </div>

                <div className="absolute bottom-4 right-4 flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-slate-100 mb-2 text-lg group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
