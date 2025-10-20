import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NeuroSuite - Evaluaciones neurocognitivas digitales validadas",
  description:
    "Digitaliza HVLT-R, BVMT-R, TMT, Fluencia, etc. con captura estructurada, scoring automático y reportes listos para EMR/FHIR. Ahorra tiempo y mejora la consistencia clínica.",
  keywords: "evaluación neurocognitiva, neuropsicología digital, HVLT-R, BVMT-R, TMT, neurología, FHIR, EMR",
  openGraph: {
    title: "NeuroSuite - Evaluaciones neurocognitivas digitales validadas",
    description: "Pruebas validadas. Informes en minutos. Digitaliza tus evaluaciones neurocognitivas.",
    type: "website",
    locale: "es_ES",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "NeuroSuite",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "99",
                priceCurrency: "EUR",
              },
              description: "Evaluaciones neurocognitivas digitales validadas para neurólogos y neuropsicología",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
