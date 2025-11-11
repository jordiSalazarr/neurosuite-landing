"use client"

import { Brain, Code, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function AboutUs() {
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

  const team = [
    {
      icon: Brain,
      title: "Profesionales Médicos",
      description: "Neurólogos y neuropsicólogos con años de experiencia en evaluación clínica",
    },
    {
      icon: Code,
      title: "Ingenieros de Software",
      description: "Expertos en desarrollo que transforman la práctica clínica en soluciones digitales",
    },
    {
      icon: Users,
      title: "Equipo Multidisciplinar",
      description: "La combinación perfecta de conocimiento clínico y tecnología avanzada",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#7c3aed] bg-clip-text text-transparent">
            Quiénes Somos
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance leading-relaxed">
            En NeuroSuite, unimos lo mejor de dos mundos: la experiencia clínica y la innovación tecnológica
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#7c3aed] flex items-center justify-center mb-6 mx-auto">
                <member.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{member.title}</h3>
              <p className="text-slate-600 text-center leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg text-slate-700 text-center leading-relaxed text-balance">
            Nuestro equipo está formado por{" "}
            <span className="font-semibold text-[#1e3a8a]">profesionales médicos especializados</span> en
            neuropsicología y neurología, junto con{" "}
            <span className="font-semibold text-[#7c3aed]">ingenieros de software expertos</span> en desarrollo de
            soluciones digitales. Esta combinación única nos permite crear herramientas que no solo son tecnológicamente
            avanzadas, sino que también responden a las necesidades reales de los profesionales de la salud.
          </p>
        </div>
      </div>
    </section>
  )
}
