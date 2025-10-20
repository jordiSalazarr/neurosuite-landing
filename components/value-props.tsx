import { Card, CardContent } from "@/components/ui/card"
import { Clock, CheckCircle2, FileText, Shield } from "lucide-react"

export function ValueProps() {
  const props = [
    {
      icon: Clock,
      title: "Ahorra 20–40 min por evaluación",
      description: "Captura estructurada y scoring automático eliminan el trabajo manual repetitivo.",
    },
    {
      icon: CheckCircle2,
      title: "Consistencia y trazabilidad clínica",
      description: "Protocolos estandarizados y registro completo de cada evaluación.",
    },
    {
      icon: FileText,
      title: "Reportes automáticos listos para EMR (FHIR/HL7)",
      description: "Integración directa con tu sistema de historia clínica electrónica.",
    },
    {
      icon: Shield,
      title: "Cumplimiento RGPD y hosting UE",
      description: "Datos alojados en la UE con cifrado completo y controles de acceso.",
    },
  ]

  return (
    <section id="producto" className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {props.map((prop) => (
          <Card key={prop.title} className="border-border hover:shadow-md transition-shadow">
            <CardContent className="pt-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#0FB5BA]/10 flex items-center justify-center">
                <prop.icon className="w-6 h-6 text-[#0FB5BA]" />
              </div>
              <h3 className="font-semibold text-[#1F2937] text-balance">{prop.title}</h3>
              <p className="text-sm text-[#1F2937]/70 text-pretty leading-relaxed">{prop.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
