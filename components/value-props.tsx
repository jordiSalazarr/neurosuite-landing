"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, CheckCircle2, FileText, Users } from "lucide-react"

export function ValueProps() {
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

  const props = [
    {
      icon: Clock,
      title: "Ahorra tiempo en cada evaluación",
      description: "Captura estructurada y scoring automático para que te centres en lo importante: tus pacientes.",
    },
    {
      icon: CheckCircle2,
      title: "Resultados precisos y consistentes",
      description: "Protocolos estandarizados que garantizan la fiabilidad de tus evaluaciones.",
    },
    {
      icon: FileText,
      title: "Informes instantáneos",
      description: "Reportes profesionales generados automáticamente listos para compartir.",
    },
    {
      icon: Users,
      title: "Para profesionales y clínicas",
      description: "Solución adaptable tanto para práctica individual como equipos multidisciplinares.",
    },
  ]

  return (
    <section id="producto" ref={sectionRef} className="container mx-auto px-4 py-16 md:py-24">
      <div className={`text-center mb-16 ${isVisible ? "animate-on-scroll" : "opacity-0"}`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4 text-balance">
          ¿Por qué elegir NeuroSuite?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
          Moderniza tu práctica clínica con nuestra plataforma de digitalización
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {props.map((prop, index) => (
          <Card
            key={prop.title}
            className={`border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-2 ${
              isVisible ? `animate-on-scroll-delay-${Math.min(index, 3)}` : "opacity-0"
            }`}
          >
            <CardContent className="pt-8 pb-6 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-[oklch(0.60_0.24_290)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all shadow-md shadow-primary/20">
                <prop.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg text-foreground text-balance group-hover:text-primary transition-colors">
                {prop.title}
              </h3>
              <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{prop.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
