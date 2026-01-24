
import React, { useState } from 'react';

interface InfraLayersProps {
  onCtaClick: () => void;
}

const layers = [
  {
    id: 3,
    title: "IA ASISTIDA",
    subtitle: "Capa superior",
    items: [
      "Recepción IA WhatsApp-first",
      "Anti-ausencias predictivo",
      "Reactivación automática"
    ],
    color: "from-cyan-400 to-cyan-600",
    glow: "shadow-[0_0_70px_rgba(6,182,212,0.6)]",
    border: "border-cyan-400/50"
  },
  {
    id: 2,
    title: "AUTOMATIZACIÓN",
    subtitle: "Capa core",
    items: [
      "Flujos inteligentes",
      "Reglas por especialidad",
      "Reagendado + liberación automática",
      "Alertas y disparadores"
    ],
    color: "from-blue-500 to-blue-700",
    glow: "shadow-[0_0_60px_rgba(37,99,235,0.5)]",
    border: "border-blue-400/50"
  },
  {
    id: 1,
    title: "OPERACIÓN",
    subtitle: "Capa base",
    items: [
      "Agenda por profesional",
      "Confirmaciones",
      "Pagos / señas",
      "Portal paciente"
    ],
    color: "from-slate-600 to-slate-800",
    glow: "shadow-[0_0_50px_rgba(255,255,255,0.2)]",
    border: "border-white/30"
  }
];

export const InfraLayers: React.FC<InfraLayersProps> = ({ onCtaClick }) => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <section id="infra-capas" className="py-24 px-6 relative overflow-hidden bg-slate-950/40">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.05)_0%,transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="reveal order-2 lg:order-1">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Autoridad Tecnológica
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">
            Infraestructura <br />
            <span className="text-gradient">en capas</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold text-slate-200 mb-6 italic">
            "No vendemos un sistema. Implementamos infraestructura."
          </p>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10">
            <p>
              La mayoría de los directores médicos creen que necesitan un "software nuevo", cuando en realidad les falta <span className="text-slate-100 font-bold">infraestructura operativa</span>.
            </p>
            <p>
              Un software se instala. La infraestructura se habita y se escala. La clínica que tiene infraestructura deja de perder dinero por ineficiencias invisibles.
            </p>
            <div className="p-6 border-l-2 border-cyan-500 bg-cyan-500/5 rounded-r-2xl">
              <p className="text-slate-200 font-bold uppercase text-xs tracking-widest mb-2">Promesa Técnica:</p>
              <p className="text-cyan-400 font-bold">Orden, control y caja: 100% medible desde el día 1.</p>
            </div>
          </div>
          
          <button 
            onClick={onCtaClick}
            className="btn-secondary text-lg group focus:outline-none"
          >
            Ver demo de infraestructura (1 min)
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        <div className="relative order-1 lg:order-2 h-[550px] flex items-center justify-center perspective-[1200px] reveal">
          <div className="relative w-full max-w-sm transform-gpu rotate-x-[25deg] rotate-z-[-12deg]">
            {layers.map((layer, idx) => {
              const isActive = activeLayer === layer.id;
              const isBlurred = activeLayer !== null && activeLayer !== layer.id;

              return (
                <div 
                  key={layer.id}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`
                    absolute left-0 w-full p-10 rounded-[2.5rem] glass border-white/10 cursor-pointer
                    transition-all duration-700 ease-premium
                    ${isActive ? `bg-gradient-to-br ${layer.color} ${layer.glow} ${layer.border} scale-110 z-50` : 'scale-100'}
                    ${isBlurred ? 'opacity-30 scale-90 blur-[4px]' : 'opacity-100'}
                  `}
                  style={{ 
                    top: `${idx * -75}px`,
                    zIndex: isActive ? 100 : layer.id,
                    transform: `translateY(${isActive ? '-40px' : '0'}) translateZ(${isActive ? '50px' : idx * 10 + 'px'})`,
                    background: isActive ? undefined : 'rgba(15, 23, 42, 0.4)'
                  }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-500 ${isActive ? 'text-white' : 'text-cyan-400'}`}>
                        {layer.subtitle}
                      </span>
                      <h3 className={`text-2xl md:text-3xl font-black text-white transition-all duration-500 ${isActive && layer.id === 3 ? 'animate-glow-pulse' : ''}`}>
                        {layer.title}
                      </h3>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border font-bold text-lg transition-all duration-500 ${isActive ? 'bg-white text-slate-900 border-white' : 'bg-white/10 text-white border-white/20'}`}>
                      {layer.id}
                    </div>
                  </div>
                  
                  <div className={`space-y-3 transition-all duration-700 ease-premium ${isActive ? 'max-h-60 opacity-100 translate-y-0' : 'max-h-0 opacity-0 overflow-hidden translate-y-4'}`}>
                    {layer.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-white/90 font-bold group/item">
                        <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse"></span>
                        <span className="group-hover/item:translate-x-1 transition-transform">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  {!isActive && (
                    <div className="flex flex-col gap-2 mt-2">
                      <div className="h-3 w-3/4 bg-white/10 rounded-full animate-pulse"></div>
                      <div className="h-3 w-1/2 bg-white/5 rounded-full animate-pulse delay-75"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="absolute bottom-4 right-0 lg:-right-10 bg-slate-900/90 border border-white/20 p-5 rounded-3xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 shadow-2xl z-[60]">
             <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">Protocolo de Capas</span>
             <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-sm text-slate-100 font-mono font-bold">INFRA_STATUS: OPTIMIZED</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
