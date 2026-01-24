
import React from 'react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
        Soberanía de Datos
      </div>
      <h1 className="text-4xl md:text-6xl font-black mb-12 tracking-tight">Política de <span className="text-gradient">Privacidad</span></h1>
      
      <div className="space-y-12 text-slate-400 leading-relaxed text-lg font-light">
        <section>
          <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-wider">1. Compromiso Spitaweb 2026</h2>
          <p>
            En Spitaweb, entendemos que la infraestructura médica no solo transporta bytes, transporta confianza. Nuestra arquitectura está diseñada bajo el principio de "Privacidad por Diseño", garantizando que los datos de salud de sus pacientes permanezcan en entornos estancos, encriptados y bajo su exclusiva soberanía institucional.
          </p>
        </section>

        <section className="glass p-8 rounded-[2.5rem] border-white/10">
          <h2 className="text-2xl font-black text-cyan-400 mb-4 uppercase tracking-wider">2. Cumplimiento Normativo (HIPAA & GDPR)</h2>
          <p className="mb-4">
            Nuestra infraestructura cumple con los estándares internacionales más exigentes de salud digital:
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-sm font-bold text-slate-300">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> Encriptación AES-256 en reposo</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> Túneles TLS 1.3 en tránsito</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> Auditoría de acceso biométrico</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> Despersonalización para IA</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-wider">3. Tratamiento de Datos por IA</h2>
          <p>
            Nuestros algoritmos de IA operan exclusivamente sobre metadatos operativos para optimizar agendas y flujos de caja. En ningún caso la IA de Spitaweb tiene acceso no supervisado a historias clínicas con fines distintos al agendamiento o la facturación automatizada solicitada por el centro médico.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-wider">4. Derechos del Titular</h2>
          <p>
            Tanto la clínica como el paciente conservan en todo momento el derecho de Acceso, Rectificación, Cancelación y Oposición (ARCO). Spitaweb actúa como Encargado del Tratamiento, siendo el Centro Médico el Responsable del Tratamiento.
          </p>
        </section>

        <div className="pt-12 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">Última actualización: Enero 2026</span>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
