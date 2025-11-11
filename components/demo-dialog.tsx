"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, Calendar, Phone } from "lucide-react"

interface DemoDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DemoDialog({ open, onOpenChange }: DemoDialogProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    organization: "",
    country: "",
    evaluations: "",
    message: "",
    consent: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Demo form submitted:", formData)
    setSubmitted(true)
  }

  const handleClose = () => {
    setSubmitted(false)
    setFormData({
      name: "",
      email: "",
      role: "",
      organization: "",
      country: "",
      evaluations: "",
      message: "",
      consent: false,
    })
    onOpenChange(false)
  }

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">¡Solicitud recibida!</h3>
              <p className="text-muted-foreground text-pretty">
                Nos pondremos en contacto contigo en las próximas 24 horas.
              </p>
            </div>
            <div className="space-y-3">
              <Button
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white transition-opacity"
                asChild
              >
                <a
                  href="https://calendly.com/jordisalazarbadia/lead-neurosuite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Agenda ahora en Calendly
                </a>
              </Button>
              <Button variant="outline" className="w-full bg-transparent" onClick={handleClose}>
                <Phone className="w-4 h-4 mr-2" />
                Prefiero que me llaméis
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-foreground">Solicitar demo</DialogTitle>
          <DialogDescription className="text-pretty">
            Completa el formulario y te contactaremos para agendar una demostración personalizada.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre y apellidos *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email profesional *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="role">Rol *</Label>
              <Select
                required
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
              >
                <SelectTrigger id="role">
                  <SelectValue placeholder="Selecciona tu rol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="neurologo">Neurólogo/a</SelectItem>
                  <SelectItem value="neuropsicologo">Neuropsicólogo/a</SelectItem>
                  <SelectItem value="jefe-servicio">Jefe/a de Servicio</SelectItem>
                  <SelectItem value="director-clinica">Director/a de Clínica</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="evaluations">Evaluaciones/mes *</Label>
              <Select
                required
                value={formData.evaluations}
                onValueChange={(value) => setFormData({ ...formData, evaluations: value })}
              >
                <SelectTrigger id="evaluations">
                  <SelectValue placeholder="Selecciona rango" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10</SelectItem>
                  <SelectItem value="11-30">11-30</SelectItem>
                  <SelectItem value="31-50">31-50</SelectItem>
                  <SelectItem value="51-100">51-100</SelectItem>
                  <SelectItem value="100+">Más de 100</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="organization">Centro/Organización *</Label>
              <Input
                id="organization"
                required
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">País *</Label>
              <Select
                required
                value={formData.country}
                onValueChange={(value) => setFormData({ ...formData, country: value })}
              >
                <SelectTrigger id="country">
                  <SelectValue placeholder="Selecciona país" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">España</SelectItem>
                  <SelectItem value="pt">Portugal</SelectItem>
                  <SelectItem value="fr">Francia</SelectItem>
                  <SelectItem value="de">Alemania</SelectItem>
                  <SelectItem value="it">Italia</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje (opcional)</Label>
            <Textarea
              id="message"
              rows={3}
              placeholder="Cuéntanos sobre tus necesidades específicas..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <div className="flex items-start gap-2">
            <Checkbox
              id="consent"
              required
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
            />
            <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
              Acepto el tratamiento de mis datos según la{" "}
              <a href="/privacidad" className="text-primary hover:underline">
                política de privacidad
              </a>{" "}
              para recibir información sobre NeuroSuite. *
            </Label>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white transition-opacity"
          >
            Enviar y reservar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
