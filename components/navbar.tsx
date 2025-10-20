"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { DemoDialog } from "@/components/demo-dialog"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)

  const links = [
    { label: "Producto", href: "#producto" },
    { label: "Evidencia", href: "#evidencia" },
    { label: "Seguridad", href: "#seguridad" },
    { label: "Precios", href: "#precios" },
    { label: "Recursos", href: "#recursos" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <a href="/" className="text-xl font-bold text-[#1F2937]">
                NeuroSuite
              </a>
              <div className="hidden md:flex items-center gap-6">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#1F2937] hover:text-[#0FB5BA] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => setDemoOpen(true)}
                className="bg-[#0FB5BA] hover:bg-[#0FB5BA]/90 text-white hidden md:inline-flex"
              >
                Solicitar demo
              </Button>
              <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#1F2937] hover:text-[#0FB5BA] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  setDemoOpen(true)
                  setMobileMenuOpen(false)
                }}
                className="bg-[#0FB5BA] hover:bg-[#0FB5BA]/90 text-white w-full"
              >
                Solicitar demo
              </Button>
            </div>
          )}
        </div>
      </nav>
      <DemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  )
}
