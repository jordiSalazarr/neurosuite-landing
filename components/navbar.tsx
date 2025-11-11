"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-foreground">
            NeuroSuite
          </a>
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hover:opacity-90 text-white transition-opacity hidden md:inline-flex"
            >
              <a
                href="https://calendly.com/jordisalazarbadia/lead-neurosuite"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar demo
              </a>
            </Button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white w-full transition-opacity"
            >
              <a
                href="https://calendly.com/jordisalazarbadia/lead-neurosuite"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solicitar demo
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
