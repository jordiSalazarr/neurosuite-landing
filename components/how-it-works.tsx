"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: "01",
      title: "Selección de Evaluación",
      description:
        "Accede a nuestro catálogo completo de evaluaciones neurocognitivas digitalizadas. Cada test está diseñado siguiendo estándares clínicos y validado por profesionales del sector sanitario.",
      image: "/selecting-neurocognitive-test-from-digital-interfa.jpg",
    },
    {
      number: "02",
      title: "Administración Guiada",
      description:
        "La plataforma proporciona una interfaz intuitiva que guía al profesional durante todo el proceso de evaluación, asegurando una administración estandarizada y precisa del test al paciente.",
      image: "/clinician-administering-digital-cognitive-test-to-.jpg",
    },
    {
      number: "03",
      title: "Generación de Informes",
      description:
        "Sistema automatizado que genera informes clínicos profesionales con análisis detallados, puntuaciones normalizadas y gráficos comparativos, listos para integrar en la historia clínica del paciente.",
      image: "/clinical-report-with-cognitive-test-scores-and-cha.jpg",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-background to-accent/20 py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[oklch(0.60_0.24_290)]/5 rounded-full" />

      <div className="container relative mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-on-scroll" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4 text-balance">
            Cómo funciona
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Proceso optimizado para la práctica clínica diaria
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative space-y-6 group ${isVisible ? `animate-on-scroll-delay-${index + 1}` : "opacity-0"}`}
            >
              <div className="relative aspect-video bg-white rounded-2xl overflow-hidden border border-border shadow-lg group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-500">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <div className="text-5xl font-bold bg-gradient-to-br from-primary/30 to-[oklch(0.60_0.24_290)]/30 bg-clip-text text-transparent">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-base text-pretty leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
