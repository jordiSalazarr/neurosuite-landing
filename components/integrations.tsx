import { Badge } from "@/components/ui/badge"
import { Database, FileSpreadsheet, Mail, Cloud, Activity } from "lucide-react"

export function Integrations() {
  const integrations = [
    { icon: Database, label: "FHIR/HL7" },
    { icon: FileSpreadsheet, label: "CSV/Excel" },
    { icon: Mail, label: "Correo seguro" },
    { icon: Cloud, label: "S3" },
    { icon: Activity, label: "EMR genéricos" },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4 text-balance">Integraciones</h2>
        <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto text-pretty">
          Conecta NeuroSuite con tus sistemas existentes
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {integrations.map((integration) => (
          <Badge
            key={integration.label}
            variant="outline"
            className="px-6 py-3 text-base border-[#0FB5BA]/30 hover:bg-[#0FB5BA]/10 transition-colors"
          >
            <integration.icon className="w-5 h-5 mr-2 text-[#0FB5BA]" />
            {integration.label}
          </Badge>
        ))}
      </div>
      <p className="text-center text-sm text-[#1F2937]/60 max-w-2xl mx-auto text-pretty">
        API REST para export de datos y webhooks para integración en tiempo real con tu flujo de trabajo
      </p>
    </section>
  )
}
