import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #fff 0,
              #fff 1px,
              transparent 0,
              transparent 50%
            )`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-90" />

      {/* Blue accent bar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-skyblue via-white to-skyblue" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-28 h-28 md:w-36 md:h-36 drop-shadow-2xl">
            <Image
              src="/logo.png"
              alt="Anglo Tucuman"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
          Aprendé inglés
          <br />
          <span className="text-skyblue">que te lleva lejos</span>
        </h1>
        <p className="text-white/60 text-base md:text-lg italic mb-2">
          Learn English That Takes You Far
        </p>

        {/* Subheading */}
        <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Academia y Tecnicatura Superior de Traductorado de Inglés.
          <br />
          Formación de excelencia en <span className="text-skyblue font-semibold">San Miguel de Tucumán</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#cursos"
            className="bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg"
          >
            Ver Cursos
          </Link>
          <Link
            href="#contacto"
            className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            Contactanos
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
