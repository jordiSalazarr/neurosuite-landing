"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Stat } from "@/components/stat"
import { Testimonial } from "@/components/testimonial"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Evidence() {
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
    <section id="evidencia" ref={sectionRef} className="container mx-auto px-4 py-16 md:py-24">
      <div className={`text-center mb-12 ${isVisible ? "animate-on-scroll" : "opacity-0"}`}>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4 text-balance">
          Evidencia clínica
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Resultados validados en entornos clínicos reales
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className={isVisible ? "animate-on-scroll-delay-1" : "opacity-0"}>
          <Stat value="−28 min" label="Reducción mediana por consulta" sublabel="Piloto multicéntrico" />
        </div>
        <div className={isVisible ? "animate-on-scroll-delay-2" : "opacity-0"}>
          <Stat value="↑ 94%" label="Concordancia inter-evaluador" sublabel="vs. papel y lápiz" />
        </div>
        <div className={isVisible ? "animate-on-scroll-delay-3" : "opacity-0"}>
          <Stat value="NPS 64" label="Satisfacción de usuarios" sublabel="Encuesta Q3 2024" />
        </div>
      </div>

      <Card
        className={`border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 max-w-3xl mx-auto mb-8 ${
          isVisible ? "animate-scale-in" : "opacity-0"
        }`}
      >
        <CardContent className="pt-6">
          <Testimonial
            quote="NeuroSuite ha transformado nuestra práctica. La estandarización y el ahorro de tiempo nos permiten ver más pacientes sin comprometer la calidad de la evaluación."
            author="Dr. Gabriel Salazar"
            role="Hospital de Terrassa · Quirón Salud"
            avatar="/male-neurologist-professional-headshot.jpg"
          />
        </CardContent>
      </Card>

      <div className={`text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10 bg-transparent hover:scale-105 transition-all"
        >
          <FileText className="w-4 h-4 mr-2" />
          Descargar caso clínico (PDF)
        </Button>
      </div>
    </section>
  )
}
