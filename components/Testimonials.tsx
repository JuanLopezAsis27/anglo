const testimonials = [
  {
    name: "María González",
    role: "Egresada — Cambridge FCE",
    text: "Gracias a Anglo Tucumán obtuve mi certificado Cambridge FCE con distinción. Los profesores son increíbles y siempre dispuestos a ayudar. ¡Lo recomiendo a todos!",
    stars: 5,
    initials: "MG",
    color: "bg-skyblue",
  },
  {
    name: "Lucía Fernández",
    role: "Alumna de Adultos",
    text: "Empecé de cero y hoy puedo mantener conversaciones en inglés con fluidez. El ambiente es muy cálido y los horarios me permitieron combinar con mi trabajo.",
    stars: 5,
    initials: "LF",
    color: "bg-crimson",
  },
  {
    name: "Tomás Ruiz",
    role: "Ex alumno — Teens",
    text: "Cursé desde los 13 años y cuando terminé el secundario ya tenía el nivel B2 de Cambridge. Una institución con un nivel académico altísimo.",
    stars: 5,
    initials: "TR",
    color: "bg-navy",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-crimson text-sm font-semibold tracking-widest uppercase">
            Testimonios · Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
            Lo que dicen nuestros alumnos
          </h2>
          <div className="w-16 h-1 bg-crimson mx-auto mt-4" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              <Stars count={t.stars} />
              <p className="text-gray-600 leading-relaxed text-sm flex-1 mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
