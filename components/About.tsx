const stats = [
  { value: "+30", label: "Años de experiencia", sublabel: "Years of experience" },
  { value: "+5000", label: "Egresados", sublabel: "Graduates" },
  { value: "20", label: "Docentes certificados", sublabel: "Certified teachers" },
  { value: "4", label: "Niveles disponibles", sublabel: "Available levels" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-crimson text-sm font-semibold tracking-widest uppercase">
            About Us · Sobre Nosotros
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
            Una institución con historia y prestigio
          </h2>
          <div className="w-16 h-1 bg-crimson mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-4">
              Academia y Tecnicatura Superior de Traductorado de Inglés
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Anglo Tucumán es una institución educativa de referencia en San Miguel de Tucumán,
              dedicada a la enseñanza del inglés y la formación de traductores desde hace más de
              tres décadas. Nuestra misión es brindar educación de alta calidad, adaptada a las
              necesidades de cada alumno.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Contamos con docentes altamente calificados, materiales actualizados y una metodología
              comunicativa que garantiza el aprendizaje efectivo del idioma. Preparamos a nuestros
              alumnos para exámenes internacionales y para desempeñarse con confianza en contextos
              reales.
            </p>
            <p className="text-gray-500 italic text-sm">
              Anglo Tucumán is a leading educational institution in San Miguel de Tucumán, dedicated
              to English teaching and translator training for over three decades.
            </p>
            <div className="mt-6 flex items-center gap-2 text-navy">
              <svg className="w-5 h-5 text-crimson flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-700 font-medium">
                25 de Mayo 347, San Miguel de Tucumán, CP 4000
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-navy rounded-xl p-6 text-center shadow-lg"
              >
                <span className="text-4xl font-bold text-skyblue block">{stat.value}</span>
                <span className="text-white font-semibold text-sm mt-1 block">{stat.label}</span>
                <span className="text-white/50 text-xs mt-0.5 block italic">{stat.sublabel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
