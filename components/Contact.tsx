"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", course: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder: show success message
    setSent(true);
    setForm({ name: "", email: "", course: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-crimson text-sm font-semibold tracking-widest uppercase">
            Contact · Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
            Hablemos — Let&apos;s Talk
          </h2>
          <p className="text-gray-500 mt-3">
            Comunicate con nosotros para consultas, inscripciones o más información.
          </p>
          <div className="w-16 h-1 bg-crimson mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-navy">Dirección</h4>
                <p className="text-gray-600 mt-1">25 de Mayo 347</p>
                <p className="text-gray-600">San Miguel de Tucumán, CP 4000</p>
                <p className="text-gray-400 text-sm">Tucumán, Argentina</p>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-navy">Instagram</h4>
                <a
                  href="https://www.instagram.com/anglotucuman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crimson hover:underline mt-1 block"
                >
                  @anglotucuman
                </a>
                <p className="text-gray-400 text-sm">Seguinos para novedades y horarios</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-navy">Horario de atención</h4>
                <p className="text-gray-600 mt-1">Lunes a Viernes: 8:00 – 20:00 hs</p>
                <p className="text-gray-600">Sábados: 9:00 – 13:00 hs</p>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-xl overflow-hidden shadow-md h-48 bg-gray-200">
              <iframe
                src="https://maps.google.com/maps?q=25+de+Mayo+347,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n,+Argentina&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Anglo Tucumán"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-bold text-navy mb-6">Envianos un mensaje</h3>

            {sent && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                ¡Mensaje enviado! Nos contactaremos pronto.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Curso de interés
                </label>
                <select
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                >
                  <option value="">Seleccioná un curso...</option>
                  <option value="kids">Niños / Kids (6–11 años)</option>
                  <option value="teens">Adolescentes / Teens (12–17 años)</option>
                  <option value="adults">Adultos (18+)</option>
                  <option value="exams">Exámenes Internacionales</option>
                  <option value="traductorado">Tecnicatura de Traductorado</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-navy hover:bg-navy-dark text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
