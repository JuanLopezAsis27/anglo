const courses = [
  {
    id: "kids",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    level: "Kids",
    levelEs: "Niños",
    ages: "6 – 11 años",
    agesEn: "Ages 6–11",
    description:
      "Clases dinámicas y lúdicas diseñadas para que los más pequeños descubran el inglés de manera natural, a través del juego y la creatividad.",
    descriptionEn:
      "Dynamic, play-based classes where young learners discover English naturally through games and creativity.",
    color: "from-yellow-400 to-yellow-500",
    badge: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "teens",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    level: "Teens",
    levelEs: "Adolescentes",
    ages: "12 – 17 años",
    agesEn: "Ages 12–17",
    description:
      "Programa diseñado para adolescentes, enfocado en comunicación real, vocabulario contemporáneo y preparación para exámenes escolares.",
    descriptionEn:
      "Designed for teenagers, focusing on real communication, contemporary vocabulary and school exam preparation.",
    color: "from-green-500 to-green-600",
    badge: "bg-green-100 text-green-800",
  },
  {
    id: "adults",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    level: "Adults",
    levelEs: "Adultos",
    ages: "18 años en adelante",
    agesEn: "18+ · All levels",
    description:
      "Cursos para adultos en todos los niveles, desde principiante hasta avanzado. Horarios flexibles adaptados a tu rutina laboral o familiar.",
    descriptionEn:
      "Courses for adults at all levels, from beginner to advanced. Flexible schedules adapted to your work or family routine.",
    color: "from-blue-500 to-blue-600",
    badge: "bg-blue-100 text-blue-800",
  },
  {
    id: "exams",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    level: "Exams",
    levelEs: "Exámenes Internacionales",
    ages: "Cambridge · IELTS · TOEFL",
    agesEn: "Official International Certificates",
    description:
      "Preparación intensiva para certificaciones internacionales: Cambridge (KET, PET, FCE, CAE), IELTS y TOEFL. Docentes examinadores certificados.",
    descriptionEn:
      "Intensive preparation for international certificates: Cambridge (KET, PET, FCE, CAE), IELTS and TOEFL. Certified examiner teachers.",
    color: "from-crimson to-crimson-dark",
    badge: "bg-red-100 text-red-800",
  },
];

export default function Courses() {
  return (
    <section id="cursos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-crimson text-sm font-semibold tracking-widest uppercase">
            Our Courses · Nuestros Cursos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
            Encontrá el curso ideal para vos
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Ofrecemos programas para cada etapa de la vida, con docentes calificados y metodología
            comunicativa actualizada.
          </p>
          <div className="w-16 h-1 bg-crimson mx-auto mt-4" />
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group flex flex-col"
            >
              {/* Color header */}
              <div className={`bg-gradient-to-br ${course.color} p-6 text-white`}>
                <div className="mb-3">{course.icon}</div>
                <h3 className="text-xl font-bold">{course.levelEs}</h3>
                <p className="text-white/80 text-xs italic">{course.level}</p>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${course.badge} mb-3 self-start`}>
                  {course.ages}
                </span>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {course.description}
                </p>
                <p className="text-gray-400 text-xs italic leading-relaxed mt-auto">
                  {course.descriptionEn}
                </p>
              </div>

              {/* Footer */}
              <div className="px-5 pb-5">
                <a
                  href="#contacto"
                  className="block text-center border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors rounded-md py-2 text-sm font-semibold"
                >
                  Más información
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
