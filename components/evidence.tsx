import { Card, CardContent } from "@/components/ui/card"
import { Stat } from "@/components/stat"
import { Testimonial } from "@/components/testimonial"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Evidence() {
  return (
    <section id="evidencia" className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4 text-balance">Evidencia clínica</h2>
        <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto text-pretty">
          Resultados validados en entornos clínicos reales
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Stat value="−28 min" label="Reducción mediana por consulta" sublabel="Piloto multicéntrico" />
        <Stat value="↑ 94%" label="Concordancia inter-evaluador" sublabel="vs. papel y lápiz" />
        <Stat value="NPS 64" label="Satisfacción de usuarios" sublabel="Encuesta Q3 2024" />
      </div>
      <Card className="border-border max-w-3xl mx-auto mb-8">
        <CardContent className="pt-6">
          <Testimonial
            quote="NeuroSuite ha transformado nuestra práctica. La estandarización y el ahorro de tiempo nos permiten ver más pacientes sin comprometer la calidad de la evaluación."
            author="Dra. María González"
            role="Jefa de Neuropsicología, Hospital Universitario"
            avatar="/female-neuropsychologist-professional-headshot.jpg"
          />
        </CardContent>
      </Card>
      <div className="text-center">
        <Button variant="outline" className="border-[#0FB5BA] text-[#0FB5BA] hover:bg-[#0FB5BA]/10 bg-transparent">
          <FileText className="w-4 h-4 mr-2" />
          Descargar caso clínico (PDF)
        </Button>
      </div>
    </section>
  )
}
