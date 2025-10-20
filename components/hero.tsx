"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { DemoDialog } from "@/components/demo-dialog"
import Image from "next/image"

export function Hero() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] text-balance leading-tight">
              Pruebas validadas. Informes en minutos.
            </h1>
            <p className="text-lg md:text-xl text-[#1F2937]/80 text-pretty leading-relaxed">
              Digitaliza HVLT-R, BVMT-R, TMT, Fluencia, etc. con captura estructurada, scoring automático y reportes
              listos para EMR/FHIR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setDemoOpen(true)}
                size="lg"
                className="bg-[#0FB5BA] hover:bg-[#0FB5BA]/90 text-white text-base"
              >
                Solicitar demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-[#1F2937] text-[#1F2937] hover:bg-[#F3F4F6] text-base bg-transparent"
              >
                <a href="#calendly">Agenda una reunión</a>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-video bg-[#F3F4F6] rounded-lg overflow-hidden border border-border">
              <Image src="/neurocognitive-assessment-dashboard-with-patient-d.jpg" alt="NeuroSuite Dashboard" fill className="object-cover" />
              <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-[#0FB5BA] ml-1" fill="currentColor" />
                </div>
              </button>
            </div>
            <div className="relative aspect-[4/3] bg-white rounded-lg overflow-hidden border border-border shadow-sm">
              <Image src="/clinical-neurocognitive-assessment-report-pdf-prev.jpg" alt="Reporte PDF Preview" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <DemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  )
}
