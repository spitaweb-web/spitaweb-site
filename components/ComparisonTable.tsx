
import React from 'react';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="comparativa" className="py-24 px-4 md:px-6 max-w-5xl mx-auto">
      <h2 className="text-center text-3xl font-bold mb-12">Antes vs <span className="text-cyan-400">Después de Spitaweb</span></h2>
      <div className="glass rounded-[2rem] border border-white/5 shadow-2xl w-full">
        <div className="overflow-x-auto pb-2">
            <table className="w-full text-left border-collapse min-w-[600px] md:min-w-0">
            <thead>
                <tr className="bg-white/5">
                <th className="p-6 font-bold text-slate-400 uppercase text-xs">Atributo</th>
                <th className="p-6 font-bold text-red-400 uppercase text-xs">Software Tradicional</th>
                <th className="p-6 font-bold text-cyan-400 uppercase text-xs">Infraestructura Spitaweb</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
                {[
                ["Turnos", "Pasivo (Espera llamada)", "Activo (IA Reactiva)"],
                ["Ausentismo", "15-25% promedio", "< 5% garantizado"],
                ["Recepción", "Personal saturado", "Autogestión fluida"],
                ["Caja", "Cierre manual lento", "Automatizado y auditado"],
                ["Soporte", "Ticketera lenta", "Account Manager directo"]
                ].map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-semibold text-slate-300 text-sm">{row[0]}</td>
                    <td className="p-6 text-slate-500 text-sm line-through opacity-50">{row[1]}</td>
                    <td className="p-6 text-cyan-100 text-sm font-bold italic">{row[2]}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
    </section>
  );
};
