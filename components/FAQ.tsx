
import React from 'react';

const faqs = [
  {
    q: "¿Es compatible con mi sistema de gestión actual?",
    a: "Nuestra infraestructura se monta por encima de su software actual mediante APIs o conectores propietarios. No necesita reemplazar su HIS, nosotros lo potenciamos integrando los flujos de IA de manera transparente."
  },
  {
    q: "¿Cuánto tiempo toma ver resultados?",
    a: "Las primeras métricas de eficiencia en facturación y reducción de ausentismo se observan a los 30 días de la puesta en marcha inicial (Fase 1). El ROI completo suele alcanzarse entre el mes 4 y 6."
  },
  {
    q: "¿Requiere capacitación extensa del personal?",
    a: "Diseñamos interfaces de baja fricción centradas en el usuario. El personal administrativo suele dominar el nuevo flujo operativo en menos de 3 jornadas de capacitación técnica acompañada."
  },
  {
    q: "¿Cómo garantizan la seguridad de los datos?",
    a: "Cumplimos con estándares internacionales de encriptación y soberanía de datos médicos (HIPAA compliant logic). La información sensible permanece en entornos controlados y auditables permanentemente."
  }
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-center text-gradient">Preguntas frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="glass rounded-2xl group overflow-hidden">
              <summary className="hover:bg-white/[0.02]">
                {f.q}
              </summary>
              <div className="content">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
