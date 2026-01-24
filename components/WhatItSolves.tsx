
import React, { useState, useEffect } from 'react';

// Counter component local para animaciones numéricas
const Counter = ({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    let frame: number;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4); // Ease out quart
      setCount(Math.floor(ease * end));
      if (progress < 1) {
        frame = window.requestAnimationFrame(step);
      }
    };
    frame = window.requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return <>{count}{suffix}</>;
};

const MockupReception = () => (
  <div className="ui-window mb-8 h-48 relative group overflow-hidden border-white/10 bg-slate-950/50 rounded-xl">
    <div className="scanline absolute inset-0 w-full h-full pointer-events-none z-20 overflow-hidden opacity-30">
        <div className="w-full h-[2px] bg-cyan-500/20 blur-[1px] absolute animate-scan"></div>
    </div>
    <div className="ui-header flex justify-between items-center bg-white/5 px-4 py-2 relative z-10">
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500/50 animate-pulse"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500/50 animate-pulse delay-75"></div>
        <div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse delay-150"></div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest group-hover:text-green-400 transition-colors duration-500 shadow-green-500/10">Inbox Live</span>
      </div>
    </div>
    <div className="p-4 space-y-3 relative z-10">
      <div className="flex items-center justify-between text-[9px] font-black text-slate-600 border-b border-white/5 pb-2 uppercase tracking-tighter">
        <span>Paciente / Especialidad</span>
        <span>Canal / Estado</span>
      </div>
      {[
        { name: "Carlos Rossi", info: "Traumatología", status: "Confirmado", channel: "WhatsApp", color: "text-green-400 bg-green-500/10", delay: "0s" },
        { name: "Lucía Mendez", info: "Oftalmología", status: "Pendiente", channel: "SMS", color: "text-blue-400 bg-blue-500/10", delay: "0.5s" },
        { name: "Jorge Perez", info: "Cardiología", status: "Reagendado", channel: "Web", color: "text-orange-400 bg-orange-500/10", delay: "1s" }
      ].map((p, i) => (
        <div key={i} className="flex items-center justify-between group/item hover:bg-white/[0.02] p-1 rounded transition-colors animate-in fade-in slide-in-from-left-4 duration-1000 fill-mode-forwards opacity-0" style={{ animationDelay: p.delay }}>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-200">{p.name}</span>
            <span className="text-[8px] text-slate-500">{p.info}</span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-[7px] text-slate-600 font-mono">{p.channel}</span>
            <span className={`text-[8px] px-2 py-0.5 rounded-full font-bold border border-white/5 ${p.color}`}>{p.status}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MockupAntiAusencias = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Retraso para iniciar la animación después de que el componente se monte/revele
    const timer = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="ui-window mb-8 h-48 relative group p-6 flex flex-col justify-center bg-slate-950/50 border-white/10 overflow-hidden rounded-xl">
      <div className="absolute top-0 right-0 p-3">
          <div className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-[7px] font-black text-cyan-400 uppercase tracking-widest animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.2)]">
              Regla de Seña: Activa
          </div>
      </div>
      <div className="flex items-center gap-8">
          <div className="relative w-24 h-24 flex-shrink-0">
            <svg className="w-full h-full -rotate-90 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">
              <circle cx="48" cy="48" r="40" fill="transparent" stroke="rgba(255,255,255,0.03)" strokeWidth="8" />
              <circle 
                  cx="48" cy="48" r="40" 
                  fill="transparent" 
                  stroke="var(--brand-cyan)" 
                  strokeWidth="8" 
                  strokeDasharray="251" 
                  strokeDashoffset={mounted ? "62" : "251"} 
                  className="transition-all duration-[2s] ease-out" 
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-black text-xl text-white">
                  {mounted ? <Counter end={75} suffix="%" /> : "0%"}
              </span>
              <span className="text-[7px] text-slate-500 font-bold uppercase">Confirm</span>
            </div>
          </div>
          <div className="space-y-4 flex-grow">
              <div className="space-y-1">
                  <div className="flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                      <span>Riesgo de Inasistencia</span>
                      <span className="text-red-400 animate-[pulse_2s_infinite] drop-shadow-[0_0_5px_rgba(248,113,113,0.5)]">Alto</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full bg-red-500/60 transition-all duration-1000 delay-500 ${mounted ? 'w-[82%]' : 'w-0'} animate-pulse-fast`}></div>
                  </div>
              </div>
              <div className="p-2 bg-white/[0.03] border border-white/5 rounded-lg">
                  <p className="text-[8px] text-slate-300 leading-tight">
                      <span className="text-cyan-400 font-bold">IA:</span> 3 turnos liberados y re-asignados hoy.
                  </p>
              </div>
          </div>
      </div>
    </div>
  );
};

const MockupControlCaja = () => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    // Inicializar barras con valores aleatorios
    setBars(Array.from({length: 24}).map(() => Math.random() * 80 + 20));

    // Animar las barras periódicamente
    const interval = setInterval(() => {
      setBars(prev => prev.map(h => {
        // Movimiento sutil: +/- 10-15% del valor actual, manteniéndose entre 10 y 100
        const delta = (Math.random() - 0.5) * 30;
        return Math.max(10, Math.min(100, h + delta));
      }));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ui-window mb-8 h-48 relative group p-5 bg-slate-950/50 border-white/10 overflow-hidden rounded-xl">
      <div className="flex justify-between items-start mb-4">
          <div>
              <div className="text-[8px] text-slate-500 uppercase font-black tracking-widest mb-1">Caja Estimada (Live)</div>
              <div className="text-2xl font-black text-white">$450.800</div>
          </div>
          <div className="text-right">
              <div className="text-[8px] text-slate-500 uppercase font-black tracking-widest mb-1">Auditado</div>
              <div className="text-sm font-black text-green-400 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-green-400/20 drop-shadow-sm">100.0%</div>
          </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
          {[
              { label: "Turnos Firmes", val: "42", color: "cyan" },
              { label: "Ausencias", val: "2", color: "red" },
              { label: "Efectivo", val: "68%", color: "blue" }
          ].map((item, i) => (
              <div key={i} className="bg-white/5 p-2 rounded-xl border border-white/5">
                  <div className="text-[7px] text-slate-500 font-bold uppercase">{item.label}</div>
                  <div className={`text-xs font-black text-${item.color}-400`}>{item.val}</div>
              </div>
          ))}
      </div>
      <div className="h-10 w-full flex items-end gap-1 relative overflow-hidden">
          <div className="scanline absolute inset-0 w-full h-full pointer-events-none z-20">
              <div className="w-full h-[2px] bg-cyan-500/10 blur-[1px] absolute animate-scan"></div>
          </div>
          {bars.map((h, i) => (
            <div 
              key={i} 
              className="flex-1 bg-gradient-to-t from-cyan-600/20 to-cyan-400/60 rounded-t-[1px] transition-all duration-[600ms] ease-in-out" 
              style={{ 
                  height: `${h}%`
              }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export const WhatItSolves: React.FC = () => {
  return (
    <section id="solucion" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Tres pilares de <span className="text-gradient">eficiencia inmediata</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Impacto directo en la rentabilidad y la experiencia del paciente desde la primera semana.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              t: "Recepción de Alto Tráfico", 
              d: "Centralice el ingreso. Menos colas, más atención. Inbox inteligente que unifica canales y prioriza la admisión.",
              mockup: <MockupReception />
            },
            { 
              t: "Blindaje Anti-Ausencias", 
              d: "Logre un ausentismo menor al 5%. Reglas automáticas de seña y re-agendamiento predictivo para consultorios llenos.",
              mockup: <MockupAntiAusencias />
            },
            { 
              t: "Control de Caja & Auditoría", 
              d: "Cierre de caja automático y control cruzado. Evite fugas de capital y optimice el flujo de efectivo en tiempo real.",
              mockup: <MockupControlCaja />
            }
          ].map((card, i) => (
            <div key={i} className="glass p-8 rounded-[3rem] hover:border-cyan-500/40 transition-all flex flex-col reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="transform group-hover:scale-[1.02] transition-transform duration-500">
                {card.mockup}
              </div>
              <h3 className="text-xl font-black mb-4 text-slate-100 tracking-tight">{card.t}</h3>
              <p className="text-slate-400 leading-relaxed text-sm flex-grow font-medium">{card.d}</p>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">Infra Ready</span>
                <div className="flex gap-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
