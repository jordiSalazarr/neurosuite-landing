"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Hero() {
  return (
   <section className="relative overflow-hidden min-h-[90vh] flex items-center">
  <div className="absolute inset-0 z-0">
    {/* Capa 1 — vídeo ligeramente desaturado y oscurecido */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover scale-105 brightness-[0.55] saturate-[0.8]"
    >
      <source
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        type="video/mp4"
      />
    </video>

    {/* Capa 2 — degradado sutil de refuerzo en parte superior e inferior */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

    {/* (Opcional) Capa 3 — vineta radial muy ligera detrás del texto */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.7)_100%)]" />
  </div>

  <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-primary">Evaluaciones neurocognitivas del futuro</span>
      </div>

      {/* 🔹 Añadimos una sombra de texto muy ligera para contraste */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-white via-white to-primary bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] leading-[1.1]">
        Digitaliza tus evaluaciones clínicas
      </h1>

      <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
        Software profesional para evaluaciones neurocognitivas digitales con scoring automático e informes
        instantáneos.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          asChild
          size="lg"
          className="hover:opacity-90 text-white text-lg px-8 py-6 h-auto shadow-md hover:shadow-lg transition-all hover:scale-105"
        >
          <a href="https://calendly.com/jordisalazarbadia/lead-neurosuite" target="_blank" rel="noopener noreferrer">
            Solicitar demo gratuita
          </a>
        </Button>

        <Button
          variant="outline"
          size="lg"
          asChild
          className="border-2 border-primary/30 text-white hover:bg-primary/10 text-lg px-8 py-6 h-auto bg-white/10 backdrop-blur-[2px] transition-all"
        >
          <a href="#servicios">Descubre nuestros servicios</a>
        </Button>
      </div>
    </div>
  </div>
</section>


  )
}
