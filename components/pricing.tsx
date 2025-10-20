"use client"

import { useState } from "react"
import { PriceCard } from "@/components/price-card"
import { DemoDialog } from "@/components/demo-dialog"

export function Pricing() {
  const [demoOpen, setDemoOpen] = useState(false)

  const plans = [
    {
      name: "Starter Clínica",
      price: "99–149",
      period: "médico/mes",
      description: "Ideal para clínicas privadas y consultas individuales",
      features: [
        "Hasta 30 evaluaciones/mes",
        "Reportes PDF automáticos",
        "Subtests principales (HVLT-R, BVMT-R, TMT, Fluencia)",
        "Soporte por email",
        "Almacenamiento seguro en UE",
      ],
      cta: "Solicitar demo",
    },
    {
      name: "Pro Servicio",
      price: "299–399",
      period: "médico/mes",
      description: "Para servicios de neurología y unidades especializadas",
      features: [
        "Evaluaciones ilimitadas",
        "Grabación de vídeo",
        "Gestión de roles y permisos",
        "Export FHIR/HL7",
        "Reportes avanzados y tendencias",
        "Soporte prioritario",
        "API y webhooks",
      ],
      cta: "Solicitar demo",
      featured: true,
    },
    {
      name: "Piloto",
      price: "1.500–3.500",
      period: "proyecto cerrado",
      description: "Implementación guiada de 8–12 semanas",
      features: [
        "Onboarding personalizado",
        "Formación del equipo",
        "Configuración a medida",
        "Soporte dedicado",
        "Evaluación de resultados",
        "Migración de datos (si aplica)",
      ],
      cta: "Solicitar demo",
    },
  ]

  return (
    <>
      <section id="precios" className="bg-[#F3F4F6] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4 text-balance">Precios transparentes</h2>
            <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto text-pretty">
              Elige el plan que mejor se adapte a tu práctica clínica
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <PriceCard key={plan.name} {...plan} onCTAClick={() => setDemoOpen(true)} />
            ))}
          </div>
        </div>
      </section>
      <DemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  )
}
