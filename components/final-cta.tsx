"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DemoDialog } from "@/components/demo-dialog"

export function FinalCTA() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <>
      <section className="bg-[#0FB5BA] py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
            Empieza con un piloto en 30 días
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 text-pretty">
            Descubre cómo NeuroSuite puede transformar tu práctica clínica. Sin compromiso, con soporte completo.
          </p>
          <Button
            onClick={() => setDemoOpen(true)}
            size="lg"
            className="bg-white text-[#0FB5BA] hover:bg-white/90 text-base font-semibold"
          >
            Solicitar demo
          </Button>
        </div>
      </section>
      <DemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  )
}
