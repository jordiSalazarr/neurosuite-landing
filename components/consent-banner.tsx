"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
    // Initialize analytics here
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-50 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#1F2937]/70 text-pretty">
          Usamos cookies esenciales para el funcionamiento del sitio. Puedes aceptar cookies analíticas para ayudarnos a
          mejorar.
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button variant="outline" size="sm" onClick={handleReject} className="border-[#1F2937]/20 bg-transparent">
            Solo esenciales
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white transition-opacity"
          >
            Aceptar todas
          </Button>
          <button onClick={handleReject} className="p-2 hover:bg-[#F3F4F6] rounded-md transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
