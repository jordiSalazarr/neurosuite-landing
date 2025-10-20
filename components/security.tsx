import { Badge } from "@/components/ui/badge"
import { Shield, Lock, FileCheck, Server, Eye, FileSignature } from "lucide-react"

export function Security() {
  const features = [
    { icon: Shield, label: "Cumplimiento RGPD" },
    { icon: Lock, label: "Cifrado en tránsito y reposo" },
    { icon: FileCheck, label: "Control de accesos basado en roles" },
    { icon: Server, label: "Hosting en la UE" },
    { icon: Eye, label: "Logs y auditoría completa" },
    { icon: FileSignature, label: "DPA disponible" },
  ]

  return (
    <section id="seguridad" className="bg-[#F3F4F6] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4 text-balance">Seguridad y cumplimiento</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto text-pretty">
            Protección de datos sanitarios con los más altos estándares
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature) => (
            <div key={feature.label} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-border">
              <div className="w-10 h-10 rounded-lg bg-[#0FB5BA]/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-[#0FB5BA]" />
              </div>
              <span className="text-[#1F2937] font-medium">{feature.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="outline" className="px-4 py-2 text-sm border-[#1F2937]/20">
            ISO 27001 (en curso)
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm border-[#1F2937]/20">
            SaMD: Regla 11 MDR
          </Badge>
        </div>
        <p className="text-center text-sm text-[#1F2937]/60 mt-6 max-w-3xl mx-auto text-pretty">
          NeuroSuite es una herramienta de apoyo clínico que no sustituye el juicio profesional. Clasificación según MDR
          en evaluación.
        </p>
      </div>
    </section>
  )
}
