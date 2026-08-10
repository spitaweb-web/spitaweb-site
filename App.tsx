import React, { useState } from 'react';

type LeadForm = {
  name: string;
  clinic: string;
  city: string;
  professionals: string;
  problem: string;
};

const WHATSAPP_NUMBER = '5492617140051';

const ArrowRight = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BrandMark = () => (
  <div className="flex items-center gap-2.5" aria-label="Spitaweb">
    <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#0ea5b7] text-sm font-black tracking-tight text-white shadow-sm">S</div>
    <div className="leading-none">
      <div className="text-[15px] font-extrabold tracking-[-0.035em] text-slate-950">SPITAWEB</div>
      <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">Clinic OS</div>
    </div>
  </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0b8998]">{children}</div>
);

const Metric = ({ value, label, tone = 'default' }: { value: string; label: string; tone?: 'default' | 'alert' | 'good' }) => {
  const toneClass = tone === 'alert' ? 'text-amber-700' : tone === 'good' ? 'text-emerald-700' : 'text-slate-950';
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
      <div className={`text-2xl font-extrabold tracking-[-0.04em] ${toneClass}`}>{value}</div>
      <div className="mt-1 text-xs font-medium leading-5 text-slate-500">{label}</div>
    </div>
  );
};

const App: React.FC = () => {
  const [form, setForm] = useState<LeadForm>({
    name: '',
    clinic: '',
    city: '',
    professionals: '',
    problem: '',
  });

  const updateField = (field: keyof LeadForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitLead = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      'Hola Spitaweb. Quiero solicitar un diagnóstico para la primera cohorte de Clinic OS.',
      '',
      `Nombre: ${form.name}`,
      `Clínica: ${form.clinic}`,
      `Ciudad: ${form.city}`,
      `Profesionales: ${form.professionals}`,
      `Principal problema operativo: ${form.problem}`,
    ].join('\n');

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const scrollToDiagnosis = () => {
    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#f7f9fa] text-slate-950 selection:bg-[#bdebf0] selection:text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/75 bg-[#f7f9fa]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-10">
          <a href="#inicio" className="rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5b7] focus-visible:ring-offset-4">
            <BrandMark />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-500 md:flex" aria-label="Principal">
            <a className="transition hover:text-slate-950" href="#problema">Problema</a>
            <a className="transition hover:text-slate-950" href="#producto">Clinic OS</a>
            <a className="transition hover:text-slate-950" href="#implementacion">Implementación</a>
          </nav>
          <button
            onClick={scrollToDiagnosis}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-bold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-4"
          >
            <span className="hidden sm:inline">Solicitar diagnóstico</span>
            <span className="sm:hidden">Diagnóstico</span>
            <ArrowRight />
          </button>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden border-b border-slate-200/80">
          <div className="hero-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-7 sm:py-20 lg:grid-cols-[1.04fr_.96fr] lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b9e5ea] bg-[#eaf8fa] px-3 py-1.5 text-xs font-bold text-[#087887]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0ea5b7]" />
                Primera cohorte · Septiembre 2026
              </div>
              <h1 className="max-w-3xl text-[44px] font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-[60px] lg:text-[72px]">
                Tu clínica trabaja. <span className="text-[#0b8998]">Spitaweb controla</span> que nada se pierda.
              </h1>
              <p className="mt-7 max-w-2xl text-[17px] font-medium leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Recepción, pacientes, agenda y seguimiento dentro de una misma operación. Cada pendiente tiene estado, responsable y próxima acción.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={scrollToDiagnosis}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-[#0b8998] px-6 text-[15px] font-bold text-white shadow-[0_12px_30px_-15px_rgba(11,137,152,.75)] transition hover:bg-[#087887] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5b7] focus-visible:ring-offset-4"
                >
                  Solicitar diagnóstico <ArrowRight />
                </button>
                <a
                  href="#producto"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 text-[15px] font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Ver cómo funciona
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">
                <span className="inline-flex items-center gap-1.5"><span className="text-[#0b8998]"><Check /></span> Implementación asistida</span>
                <span className="inline-flex items-center gap-1.5"><span className="text-[#0b8998]"><Check /></span> Configurado para tu clínica</span>
                <span className="inline-flex items-center gap-1.5"><span className="text-[#0b8998]"><Check /></span> Mobile-first</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[580px] lg:ml-auto">
              <div className="absolute -inset-8 -z-10 rounded-full bg-[#cceff2] blur-3xl" aria-hidden="true" />
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_90px_-45px_rgba(15,23,42,.38)]">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">Control operativo</div>
                    <div className="mt-1 text-lg font-extrabold tracking-[-0.03em] text-slate-950">Hoy</div>
                  </div>
                  <div className="rounded-full bg-[#eaf8fa] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#087887]">Vista de ejemplo</div>
                </div>
                <div className="grid grid-cols-2 gap-3 p-4 sm:p-6">
                  <Metric value="6" label="consultas sin resolver" tone="alert" />
                  <Metric value="2" label="huecos recuperables hoy" />
                  <Metric value="92%" label="consultas resueltas" tone="good" />
                  <Metric value="7" label="seguimientos vencidos" tone="alert" />
                </div>
                <div className="border-t border-slate-100 px-4 pb-5 pt-4 sm:px-6 sm:pb-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-extrabold text-slate-950">Fugas detectadas</span>
                    <span className="text-xs font-semibold text-slate-400">Prioridad</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      ['Consulta sin responsable', 'Paciente nuevo · 42 min', 'Alta'],
                      ['Turno cancelado', 'Mañana 11:30 · recuperable', 'Media'],
                      ['Tratamiento sin seguimiento', 'Último contacto · 6 días', 'Alta'],
                    ].map(([title, detail, priority]) => (
                      <div key={title} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5">
                        <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0ea5b7]" />
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-xs font-bold text-slate-800 sm:text-sm">{title}</div>
                          <div className="mt-0.5 truncate text-[11px] font-medium text-slate-500">{detail}</div>
                        </div>
                        <div className="rounded-lg bg-white px-2 py-1 text-[10px] font-bold text-slate-500 shadow-sm">{priority}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 px-5 py-7 text-center sm:grid-cols-5 sm:px-7 lg:px-10">
            {['Recepción', 'Pacientes', 'Agenda', 'Seguimiento', 'Dirección'].map((item) => (
              <div key={item} className="text-xs font-extrabold uppercase tracking-[0.13em] text-slate-400">{item}</div>
            ))}
          </div>
        </section>

        <section id="problema" className="mx-auto max-w-7xl px-5 py-20 sm:px-7 sm:py-28 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.88fr_1.12fr] lg:gap-20">
            <div>
              <SectionLabel>El problema real</SectionLabel>
              <h2 className="text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl">
                El problema no es WhatsApp. Es lo que queda fuera de control.
              </h2>
              <p className="mt-6 max-w-xl text-base font-medium leading-7 text-slate-600">
                Una clínica puede responder mensajes y seguir perdiendo pacientes, capacidad y tiempo. Cuando el trabajo vive entre chats, planillas y memoria, nadie tiene la operación completa.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['Consultas abandonadas', 'Mensajes leídos que nunca se convierten en una acción resuelta.'],
                ['Agenda con fugas', 'Cancelaciones y huecos que podrían recuperarse pero nadie prioriza.'],
                ['Seguimientos dispersos', 'Presupuestos, tratamientos y controles que dependen de memoria humana.'],
                ['Dirección sin señal', 'Muchos datos, poca claridad sobre qué está mal ahora y quién debe actuar.'],
              ].map(([title, description], index) => (
                <article key={title} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_12px_36px_-30px_rgba(15,23,42,.32)]">
                  <div className="mb-8 text-xs font-black text-[#0b8998]">0{index + 1}</div>
                  <h3 className="text-lg font-extrabold tracking-[-0.025em] text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-500">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="producto" className="border-y border-slate-200/80 bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-7 sm:py-28 lg:px-10">
            <div className="max-w-3xl">
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#52d0dc]">Spitaweb Clinic OS</div>
              <h2 className="text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-5xl">Una sola operación. No otro sistema aislado.</h2>
              <p className="mt-6 text-base font-medium leading-7 text-slate-400 sm:text-lg">
                Cada consulta entra, se clasifica, se asigna, avanza y termina con un resultado. Spitaweb conecta lo que hoy suele quedar repartido entre personas y herramientas.
              </p>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-5">
              {[
                ['01', 'Recepción', 'Consultas nuevas, responsables y pendientes.'],
                ['02', 'Paciente', 'Historial operativo unificado y contexto.'],
                ['03', 'Agenda', 'Turnos, confirmaciones, cancelaciones y huecos.'],
                ['04', 'Seguimiento', 'Próximas acciones, vencimientos y reactivación.'],
                ['05', 'Dirección', 'Riesgos, capacidad y métricas para actuar.'],
              ].map(([number, title, description]) => (
                <div key={title} className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5">
                  <div className="text-[11px] font-bold text-[#52d0dc]">{number}</div>
                  <div className="mt-8 text-base font-extrabold tracking-[-0.02em]">{title}</div>
                  <div className="mt-2 text-xs font-medium leading-5 text-slate-400">{description}</div>
                </div>
              ))}
            </div>

            <div className="mt-14 grid items-center gap-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 sm:p-8 lg:grid-cols-[.9fr_1.1fr] lg:p-10">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#52d0dc]">Control de fugas</div>
                <h3 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em]">Spitaweb detecta lo que está por perderse antes de que desaparezca.</h3>
                <p className="mt-4 text-sm font-medium leading-6 text-slate-400">
                  Consultas sin resolver, turnos recuperables, seguimientos vencidos y oportunidades que todavía requieren una acción concreta.
                </p>
              </div>
              <div className="grid gap-2.5">
                {[
                  ['Consulta nueva', 'Sin responsable · 31 min', 'Resolver ahora'],
                  ['Turno cancelado', 'Mañana · 14:00', 'Buscar reemplazo'],
                  ['Presupuesto pendiente', 'Sin contacto · 5 días', 'Hacer seguimiento'],
                  ['Paciente recurrente', 'Control vencido · 12 días', 'Reactivar'],
                ].map(([title, detail, action]) => (
                  <div key={title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 p-4">
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-bold">{title}</div>
                      <div className="mt-1 text-xs font-medium text-slate-500">{detail}</div>
                    </div>
                    <div className="hidden shrink-0 rounded-lg border border-white/10 px-2.5 py-1.5 text-[10px] font-bold text-[#8ce3eb] sm:block">{action}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="implementacion" className="mx-auto max-w-7xl px-5 py-20 sm:px-7 sm:py-28 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div>
              <SectionLabel>Implementación</SectionLabel>
              <h2 className="text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl">No te damos una cuenta y te dejamos solo.</h2>
              <p className="mt-6 max-w-lg text-base font-medium leading-7 text-slate-600">
                Primero entendemos cómo funciona tu clínica. Después configuramos Spitaweb alrededor de esa operación y acompañamos la puesta en marcha.
              </p>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {[
                ['01', 'Diagnóstico operativo', 'Relevamos recepción, agenda, seguimiento, responsables y puntos de fuga.'],
                ['02', 'Diseño de la operación', 'Definimos estados, reglas, permisos, automatizaciones y métricas.'],
                ['03', 'Implementación', 'Configuramos la instancia, usuarios, datos iniciales y canales.'],
                ['04', 'Puesta en marcha', 'Acompañamos al equipo y corregimos la operación con uso real.'],
              ].map(([number, title, description]) => (
                <div key={title} className="grid gap-2 py-6 sm:grid-cols-[70px_1fr_1.35fr] sm:items-start sm:gap-5">
                  <div className="text-xs font-black text-[#0b8998]">{number}</div>
                  <div className="text-base font-extrabold tracking-[-0.02em] text-slate-950">{title}</div>
                  <div className="text-sm font-medium leading-6 text-slate-500">{description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200/80 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-7 sm:py-24 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
              <div>
                <SectionLabel>Primera cohorte</SectionLabel>
                <h2 className="text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl">Buscamos 3 clínicas para implementar Spitaweb en septiembre.</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {['Clínica privada en funcionamiento', 'Equipo de recepción propio', 'Operación relevante por WhatsApp', 'Decisor involucrado en el proceso'].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#f7f9fa] p-4 text-sm font-bold leading-5 text-slate-700">
                    <span className="mt-0.5 text-[#0b8998]"><Check /></span>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="diagnostico" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-7 sm:py-28 lg:px-10">
            <div className="grid overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_30px_90px_-60px_rgba(15,23,42,.4)] lg:grid-cols-[.86fr_1.14fr]">
              <div className="bg-[#0b8998] p-7 text-white sm:p-10 lg:p-12">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#bcecf0]">Solicitar diagnóstico</div>
                <h2 className="mt-5 text-4xl font-extrabold leading-[1.03] tracking-[-0.045em]">Veamos si Spitaweb tiene sentido para tu clínica.</h2>
                <p className="mt-5 text-sm font-medium leading-6 text-[#d8f4f6]">
                  No empezamos con una demo genérica. Primero necesitamos entender tamaño, operación y principal problema actual.
                </p>
                <div className="mt-8 space-y-3 text-sm font-semibold text-white/90">
                  <div className="flex gap-2.5"><Check /> Diagnóstico inicial breve</div>
                  <div className="flex gap-2.5"><Check /> Sin compromiso de implementación</div>
                  <div className="flex gap-2.5"><Check /> Selección de la cohorte durante agosto</div>
                </div>
              </div>

              <form onSubmit={submitLead} className="p-6 sm:p-10 lg:p-12">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-slate-600">Tu nombre</span>
                    <input
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0ea5b7] focus:ring-4 focus:ring-[#0ea5b7]/10"
                      placeholder="Nombre y apellido"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-slate-600">Clínica</span>
                    <input
                      required
                      value={form.clinic}
                      onChange={(e) => updateField('clinic', e.target.value)}
                      className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0ea5b7] focus:ring-4 focus:ring-[#0ea5b7]/10"
                      placeholder="Nombre de la clínica"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-slate-600">Ciudad</span>
                    <input
                      required
                      autoComplete="address-level2"
                      value={form.city}
                      onChange={(e) => updateField('city', e.target.value)}
                      className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0ea5b7] focus:ring-4 focus:ring-[#0ea5b7]/10"
                      placeholder="Ej. Mendoza"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-slate-600">Profesionales aprox.</span>
                    <select
                      required
                      value={form.professionals}
                      onChange={(e) => updateField('professionals', e.target.value)}
                      className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-[#0ea5b7] focus:ring-4 focus:ring-[#0ea5b7]/10"
                    >
                      <option value="" disabled>Seleccionar</option>
                      <option>1–5</option>
                      <option>6–10</option>
                      <option>11–20</option>
                      <option>21–30</option>
                      <option>Más de 30</option>
                    </select>
                  </label>
                </div>
                <label className="mt-5 block">
                  <span className="mb-2 block text-xs font-bold text-slate-600">¿Cuál es hoy el mayor problema operativo?</span>
                  <textarea
                    required
                    rows={4}
                    value={form.problem}
                    onChange={(e) => updateField('problem', e.target.value)}
                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0ea5b7] focus:ring-4 focus:ring-[#0ea5b7]/10"
                    placeholder="Ej. Tenemos muchas consultas por WhatsApp, la recepción se satura y no sabemos cuáles quedan sin seguimiento."
                  />
                </label>
                <button
                  type="submit"
                  className="mt-5 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-bold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-4 sm:w-auto"
                >
                  Enviar por WhatsApp <ArrowRight />
                </button>
                <p className="mt-4 max-w-xl text-[11px] font-medium leading-5 text-slate-400">
                  Al continuar se abrirá WhatsApp con los datos cargados. No almacenamos esta información en esta página.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:px-10">
          <BrandMark />
          <div className="text-xs font-semibold text-slate-400">Sistema operativo para clínicas · Mendoza, Argentina</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
