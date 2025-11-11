"use client"

import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
          Empieza con un piloto en 30 días
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 text-pretty">
          Descubre cómo NeuroSuite puede transformar tu práctica clínica. Sin compromiso, con soporte completo.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-primary hover:bg-white/90 text-base font-semibold hover:scale-105 transition-transform"
        >
          <a href="https://calendly.com/jordisalazarbadia/lead-neurosuite" target="_blank" rel="noopener noreferrer">
            Solicitar demo
          </a>
        </Button>
      </div>
    </section>
  )
}
