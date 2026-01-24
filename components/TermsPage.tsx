
import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
        Marco Legal Operativo
      </div>
      <h1 className="text-4xl md:text-6xl font-black mb-12 tracking-tight">Términos y <span className="text-gradient">Condiciones</span></h1>
      
      <div className="space-y-12 text-slate-400 leading-relaxed text-lg font-light">
        <section>
          <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-wider">1. Aceptación del Ecosistema</h2>
          <p>
            Al contratar la infraestructura de Spitaweb, la clínica (en adelante "El Cliente") acepta los presentes términos que rigen la implementación, mantenimiento y uso de los nodos de IA y portal de pacientes. Spitaweb provee una solución B2B (Business-to-Business) diseñada para la eficiencia institucional.
          </p>
        </section>

        <section className="glass p-8 rounded-[2.5rem] border-white/10">
          <h2 className="text-2xl font-black text-blue-400 mb-4 uppercase tracking-wider">2. Responsabilidad Médica</h2>
          <p>
            Spitaweb es una infraestructura operativa y administrativa. El Cliente reconoce que:
          </p>
          <ul className="space-y-4 mt-6">
            <li className="flex gap-4">
              <span className="text-blue-500 font-black">01</span>
              <p className="text-sm font-medium">La IA de agendamiento no sustituye el criterio médico en urgencias.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-500 font-black">02</span>
              <p className="text-sm font-medium">La veracidad de los reportes de facturación depende de los datos de entrada del sistema HIS del cliente.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-500 font-black">03</span>
              <p className="text-sm font-medium">Spitaweb no es un proveedor de servicios de salud, sino de infraestructura tecnológica.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-wider">3. Niveles de Servicio (SLA)</h2>
          <p>
            Garantizamos un tiempo de actividad (uptime) de la infraestructura central del 99.9%. En caso de mantenimiento programado del nodo de IA, se notificará con 48hs de antelación, priorizando horarios de baja actividad nocturna para no afectar la agenda diaria.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-wider">4. Propiedad Intelectual</h2>
          <p>
            Todos los algoritmos de IA, diseños de portal y arquitecturas de red desarrolladas por Spitaweb son propiedad intelectual exclusiva de Spitaweb. El Cliente obtiene una licencia de uso no transferible durante la vigencia del contrato de mantenimiento.
          </p>
        </section>

        <div className="pt-12 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">Protocolo Legal v4.2 - 2026</span>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
