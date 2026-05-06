import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anglo Tucumán — Academia de Inglés y Tecnicatura de Traductorado",
  description:
    "Academia y Tecnicatura Superior de Traductorado de Inglés en San Miguel de Tucumán. Cursos para niños, adolescentes, adultos y preparación para exámenes Cambridge, IELTS y TOEFL.",
  keywords: [
    "academia de inglés Tucumán",
    "cursos de inglés Tucumán",
    "Cambridge Tucumán",
    "IELTS Tucumán",
    "Anglo Tucumán",
    "traductorado inglés Tucumán",
  ],
  openGraph: {
    title: "Anglo Tucumán — Academia de Inglés",
    description:
      "Formación de excelencia en inglés. Cursos para todas las edades y preparación para certificaciones internacionales.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
