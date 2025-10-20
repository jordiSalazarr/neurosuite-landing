import Image from "next/image"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Selecciona la evaluación",
      description: "Elige el protocolo o batería de tests según tu caso clínico.",
      image: "/selecting-neurocognitive-test-from-digital-interfa.jpg",
    },
    {
      number: "02",
      title: "Administra subtests",
      description: "Captura guiada paso a paso con opción de grabación de vídeo.",
      image: "/clinician-administering-digital-cognitive-test-to-.jpg",
    },
    {
      number: "03",
      title: "Obtén el informe",
      description: "Reporte automático con scoring, percentiles y tendencias longitudinales.",
      image: "/clinical-report-with-cognitive-test-scores-and-cha.jpg",
    },
  ]

  return (
    <section className="bg-[#F3F4F6] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4 text-balance">Cómo funciona</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto text-pretty">
            Tres pasos simples para digitalizar tus evaluaciones neurocognitivas
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="space-y-4">
              <div className="relative aspect-[4/3] bg-white rounded-lg overflow-hidden border border-border">
                <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#0FB5BA]">{step.number}</div>
                <h3 className="text-xl font-semibold text-[#1F2937]">{step.title}</h3>
                <p className="text-[#1F2937]/70 text-pretty leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
