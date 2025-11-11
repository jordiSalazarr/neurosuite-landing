import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NeuroSuite - Plataforma de Evaluación Neurocognitiva Digital para Neurólogos y Neuropsicólogos",
  description:
    "Software de evaluación neurocognitiva digital validado clínicamente. Digitaliza evaluaciones de memoria verbal y visual, atención, función ejecutiva y fluencia verbal. Scoring automático, informes instantáneos y compatibilidad FHIR/EMR. Ahorra hasta 40% del tiempo clínico.",
  keywords: [
    "evaluación neurocognitiva digital",
    "neuropsicología digital",
    "test neuropsicológicos online",
    "evaluación memoria verbal digital",
    "evaluación memoria visual digital",
    "evaluación atención digital",
    "evaluación función ejecutiva digital",
    "fluencia verbal digital",
    "software neuropsicología",
    "plataforma evaluación cognitiva",
    "evaluación neurológica digital",
    "neuropsicología clínica",
    "test cognitivos validados",
    "evaluación memoria digital",
    "screening cognitivo",
    "deterioro cognitivo evaluación",
    "demencia evaluación digital",
    "neurólogos software",
    "neuropsicólogos herramientas",
    "FHIR neurología",
    "EMR integración neuropsicología",
    "digitalización evaluaciones neurológicas",
    "telemedicina neurología",
    "evaluación remota cognitiva",
  ].join(", "),
  authors: [{ name: "NeuroSuite" }],
  creator: "NeuroSuite",
  publisher: "NeuroSuite",
  openGraph: {
    title: "NeuroSuite - Evaluación Neurocognitiva Digital Validada Clínicamente",
    description:
      "Digitaliza evaluaciones neurocognitivas con scoring automático e informes instantáneos. Validado clínicamente. Compatible FHIR/EMR. Ahorra tiempo y mejora la consistencia diagnóstica.",
    type: "website",
    locale: "es_ES",
    url: "https://neurosuite.com",
    siteName: "NeuroSuite",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeuroSuite - Plataforma de Evaluación Neurocognitiva Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroSuite - Evaluación Neurocognitiva Digital",
    description:
      "Software validado para digitalizar evaluaciones neurocognitivas. Scoring automático e informes instantáneos.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://neurosuite.com",
    languages: {
      "es-ES": "https://neurosuite.com",
      es: "https://neurosuite.com",
    },
  },
  category: "Healthcare Technology",
  generator: "v0.app",
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
              "@graph": [
                {
                  "@type": ["SoftwareApplication", "MedicalBusiness"],
                  "@id": "https://neurosuite.com/#software",
                  name: "NeuroSuite",
                  applicationCategory: "HealthApplication",
                  operatingSystem: "Web",
                  url: "https://neurosuite.com",
                  description:
                    "Plataforma de evaluación neurocognitiva digital validada clínicamente para neurólogos y neuropsicólogos. Digitaliza evaluaciones de memoria verbal y visual, atención, función ejecutiva y fluencia verbal con scoring automático e informes instantáneos.",
                  medicalSpecialty: ["Neurology", "Neuropsychology"],
                  offers: [
                    {
                      "@type": "Offer",
                      name: "Plan Básico",
                      price: "99",
                      priceCurrency: "EUR",
                      priceSpecification: {
                        "@type": "UnitPriceSpecification",
                        price: "99",
                        priceCurrency: "EUR",
                        unitText: "MONTH",
                      },
                    },
                    {
                      "@type": "Offer",
                      name: "Plan Profesional",
                      price: "249",
                      priceCurrency: "EUR",
                      priceSpecification: {
                        "@type": "UnitPriceSpecification",
                        price: "249",
                        priceCurrency: "EUR",
                        unitText: "MONTH",
                      },
                    },
                    {
                      "@type": "Offer",
                      name: "Plan Clínica",
                      description: "Precio personalizado para clínicas y hospitales",
                    },
                  ],
                  featureList: [
                    "Digitalización de evaluaciones neurocognitivas",
                    "Evaluación de memoria verbal",
                    "Evaluación de memoria visual",
                    "Evaluación de atención y función ejecutiva",
                    "Evaluación de fluencia verbal",
                    "Evaluación de velocidad de procesamiento",
                    "Scoring automático",
                    "Informes instantáneos",
                    "Compatibilidad FHIR/EMR",
                    "Cumplimiento RGPD",
                    "Validación clínica",
                  ],
                  audience: {
                    "@type": "MedicalAudience",
                    audienceType: ["Neurologist", "Neuropsychologist", "Healthcare Professional"],
                    geographicArea: {
                      "@type": "Place",
                      name: "España y Unión Europea",
                    },
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://neurosuite.com/#organization",
                  name: "NeuroSuite",
                  url: "https://neurosuite.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://neurosuite.com/logo.png",
                  },
                  description:
                    "Proveedor líder de soluciones de evaluación neurocognitiva digital para profesionales de la salud",
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "Sales",
                    availableLanguage: ["Spanish", "English"],
                  },
                },
                {
                  "@type": "Service",
                  "@id": "https://neurosuite.com/#service",
                  serviceType: "Evaluación Neurocognitiva Digital",
                  provider: {
                    "@id": "https://neurosuite.com/#organization",
                  },
                  areaServed: {
                    "@type": "Place",
                    name: "España y Unión Europea",
                  },
                  audience: {
                    "@type": "MedicalAudience",
                    audienceType: ["Neurologist", "Neuropsychologist"],
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Evaluaciones Neurocognitivas Digitales",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Evaluación de Memoria Verbal",
                          description: "Evaluación digital de memoria verbal y aprendizaje",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Evaluación de Memoria Visual",
                          description: "Evaluación digital de memoria visual y habilidades visuoespaciales",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Evaluación de Atención y Función Ejecutiva",
                          description: "Evaluación digital de atención, flexibilidad cognitiva y función ejecutiva",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Evaluación de Fluencia Verbal",
                          description: "Evaluación digital de fluencia verbal fonológica y semántica",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://neurosuite.com/#website",
                  url: "https://neurosuite.com",
                  name: "NeuroSuite",
                  inLanguage: "es-ES",
                  publisher: {
                    "@id": "https://neurosuite.com/#organization",
                  },
                },
              ],
            }),
          }}
        />
        <meta name="geo.region" content="ES" />
        <meta name="geo.placename" content="España" />
        <link rel="canonical" href="https://neurosuite.com" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
