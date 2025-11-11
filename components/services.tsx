"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Laptop, Users2 } from "lucide-react"

export function Services() {
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

  return (
    <section id="servicios" ref={sectionRef} className="container mx-auto px-4 py-16 md:py-24">
      <div className={`text-center mb-16 ${isVisible ? "animate-on-scroll" : "opacity-0"}`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4 text-balance">
          Nuestros servicios
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
          Te ofrecemos soluciones completas para la digitalización de evaluaciones clínicas
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        <Card
          className={`border-2 border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 ${
            isVisible ? "animate-on-scroll-delay-1" : "opacity-0"
          }`}
        >
          <CardHeader className="space-y-4 pb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.60_0.24_290)] flex items-center justify-center shadow-md shadow-primary/30">
              <Laptop className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl md:text-3xl text-foreground">Software NeuroSuite</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Plataforma completa para la digitalización de evaluaciones neurocognitivas. Ideal para profesionales
              individuales y clínicas que quieren modernizar su práctica.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Catálogo completo de evaluaciones digitalizadas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Scoring automático e informes instantáneos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Seguimiento longitudinal de pacientes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Interfaz intuitiva y fácil de usar</span>
              </li>
            </ul>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-12 shadow-md hover:shadow-lg transition-all hover:scale-105"
              asChild
            >
              <a href="#demo">Solicitar demo</a>
            </Button>
          </CardContent>
        </Card>

        <Card
          className={`border-2 border-border hover:border-[oklch(0.60_0.24_290)]/50 hover:shadow-xl hover:shadow-[oklch(0.60_0.24_290)]/10 transition-all duration-500 hover:-translate-y-1 ${
            isVisible ? "animate-on-scroll-delay-2" : "opacity-0"
          }`}
        >
          <CardHeader className="space-y-4 pb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[oklch(0.60_0.24_290)] to-primary flex items-center justify-center shadow-md shadow-[oklch(0.60_0.24_290)]/30">
              <Users2 className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl md:text-3xl text-foreground">Consultoría Especializada</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Acompañamiento personalizado para implementar soluciones de digitalización adaptadas a las necesidades
              específicas de tu organización.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-[oklch(0.60_0.24_290)] font-bold mt-1">✓</span>
                <span>Análisis de necesidades y flujos de trabajo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[oklch(0.60_0.24_290)] font-bold mt-1">✓</span>
                <span>Implementación y formación del equipo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[oklch(0.60_0.24_290)] font-bold mt-1">✓</span>
                <span>Desarrollo de protocolos personalizados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[oklch(0.60_0.24_290)] font-bold mt-1">✓</span>
                <span>Soporte continuo y actualizaciones</span>
              </li>
            </ul>
            <Button
              variant="outline"
              className="w-full border-2 border-[oklch(0.60_0.24_290)] text-[oklch(0.60_0.24_290)] hover:bg-[oklch(0.60_0.24_290)] hover:text-white text-lg h-12 transition-all hover:scale-105 bg-transparent"
              asChild
            >
              <a
                  href="mailto:support@neurosuite.eu"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
                >Contactar</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
