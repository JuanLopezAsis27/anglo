const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Docentes Certificados",
    titleEn: "Certified Teachers",
    desc: "Todos nuestros profesores poseen certificaciones internacionales y formación pedagógica continua.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Grupos Reducidos",
    titleEn: "Small Groups",
    desc: "Grupos de no más de 12 alumnos para garantizar atención personalizada y mayor participación.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Horarios Flexibles",
    titleEn: "Flexible Schedules",
    desc: "Turnos mañana, tarde y noche para adaptarse a tus actividades laborales, académicas o familiares.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Exámenes Oficiales",
    titleEn: "Official Exams",
    desc: "Centro habilitado para rendir exámenes Cambridge. Preparación garantizada con material oficial.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-skyblue text-sm font-semibold tracking-widest uppercase">
            Why Anglo · Por qué Anglo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Tu mejor elección en Tucumán
          </h2>
          <div className="w-16 h-1 bg-crimson mx-auto mt-4" />
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-white hover:bg-white/15 transition-colors"
            >
              <div className="text-skyblue mb-4">{feat.icon}</div>
              <h3 className="font-bold text-lg mb-0.5">{feat.title}</h3>
              <p className="text-white/50 text-xs italic mb-3">{feat.titleEn}</p>
              <p className="text-white/70 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
