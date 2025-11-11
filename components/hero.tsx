"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Sparkles, Play, X } from "lucide-react"

export function Hero() {
  const [open, setOpen] = useState(false)
  const previewRef = useRef<HTMLVideoElement | null>(null)
  const dialogVideoRef = useRef<HTMLVideoElement | null>(null)

  // autoplay muted preview
  useEffect(() => {
    const v = previewRef.current
    if (!v) return
    v.muted = true
    v.play().catch(() => {})
  }, [])

  // manage modal playback
  useEffect(() => {
    const v = dialogVideoRef.current
    if (!v) return
    if (open) v.play().catch(() => {})
    else {
      v.pause()
      v.currentTime = 0
    }
  }, [open])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Decorative subtle background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_15%_20%,rgba(14,124,134,0.10),transparent_60%),radial-gradient(800px_400px_at_85%_0%,rgba(14,47,60,0.08),transparent_60%)]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Centered content block */}
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0E7C86]/30 bg-[#0E7C86]/5">
            <Sparkles className="h-4 w-4 text-[#0E7C86]" />
            <span className="text-sm font-medium text-[#0E7C86]">
              Evaluaciones neurocognitivas del futuro
            </span>
          </div>

          {/* Big title */}
          <h1 className="max-w-5xl text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight bg-gradient-to-br from-slate-900 via-slate-900 to-[#0E7C86] bg-clip-text text-transparent">
            Digitaliza tus evaluaciones clínicas
          </h1>

          {/* Two-column layout: video + copy */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full max-w-6xl">
            {/* --- VIDEO --- */}
            <div className="relative group rounded-2xl overflow-hidden border border-slate-200 bg-white/90 shadow-sm hover:shadow-md transition-all">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button
                    className="relative block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7C86]"
                    aria-label="Ver video de demostración"
                  >
                    <video
                      ref={previewRef}
                      playsInline
                      autoPlay
                      loop
                      muted={false}
                      src="/hero-bg.mp4"
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent transition-opacity group-hover:opacity-70" />
                  
                  </button>
                </DialogTrigger>
              </Dialog>
            </div>

            {/* --- TEXT + CTA --- */}
            <div className="text-left space-y-6 lg:pl-8">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                NeuroSuite transforma la forma en que los profesionales evalúan la cognición. 
                Automatiza la puntuación, genera informes clínicos instantáneos y simplifica 
                el seguimiento longitudinal del paciente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#0E7C86] hover:bg-[#0a646c] text-white px-8 h-12 rounded-xl shadow-sm hover:shadow-md transition-transform hover:scale-[1.03]"
                >
                  <a
                    href="https://calendly.com/jordisalazarbadia/lead-neurosuite"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar demo gratuita
                  </a>
                </Button>

                <Button
                  variant="outline"
                  asChild
                  size="lg"
                  className="border-slate-300 text-slate-800 hover:bg-slate-50 px-8 h-12 rounded-xl"
                >
                  <a href="#servicios">Descubrir servicios</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
