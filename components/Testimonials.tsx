
import React from 'react';

const quotes = [
  {
    text: "Spitaweb nos permitió entender que el problema no era la falta de médicos, sino la ineficiencia en la asignación de quirófanos. Recuperamos un 20% de capacidad ociosa.",
    author: "Dr. Roberto Méndez",
    role: "Director Médico - Clínica del Sol*"
  },
  {
    text: "La automatización de la facturación con IA eliminó las tareas repetitivas de mi equipo. Ahora se enfocan en la gestión de excepciones, no en cargar datos.",
    author: "Lic. Clara Valenzuela",
    role: "Gerente Operativa - Centro Austral*"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-16 italic text-slate-400">“La infraestructura que separa a las clínicas rentables de las que sobreviven.”</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {quotes.map((q, i) => (
            <div key={i} className="glass p-10 rounded-[2rem] border-l-4 border-l-cyan-500">
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed font-light">
                "{q.text}"
              </p>
              <div>
                <div className="font-bold text-slate-100">{q.author}</div>
                <div className="text-sm text-cyan-500/70">{q.role}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-xs text-slate-600">
          * Casos de uso simulados basados en implementaciones reales bajo acuerdo de confidencialidad.
        </p>
      </div>
    </section>
  );
};
