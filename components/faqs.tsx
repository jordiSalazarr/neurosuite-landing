import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQs() {
  const faqs = [
    {
      question: "¿Es NeuroSuite un producto sanitario?",
      answer:
        "NeuroSuite es una herramienta de apoyo clínico para la administración y documentación de evaluaciones neurocognitivas. Estamos evaluando su clasificación según el Reglamento MDR (Regla 11). En ningún caso sustituye el juicio clínico profesional ni realiza diagnósticos automáticos.",
    },
    {
      question: "¿Qué subtests incluye?",
      answer:
        "Actualmente incluimos evaluaciones de memoria verbal y visual, atención y función ejecutiva, fluencia verbal (fonológica y semántica), memoria de trabajo, y velocidad de procesamiento. Estamos añadiendo nuevas evaluaciones validadas cada trimestre según las necesidades de nuestros usuarios.",
    },
    {
      question: "¿Cómo tratáis los datos personales (RGPD)?",
      answer:
        "Todos los datos se almacenan cifrados en servidores ubicados en la UE. Implementamos controles de acceso basados en roles, logs de auditoría completos, y ofrecemos DPA (Data Processing Agreement) a todos nuestros clientes. Cumplimos con RGPD y estamos certificando ISO 27001.",
    },
    {
      question: "¿Se integra con mi sistema de historia clínica (EMR)?",
      answer:
        "Sí. Ofrecemos export en formatos FHIR, HL7, CSV y PDF. También disponemos de API REST y webhooks para integración en tiempo real. Nuestro equipo puede ayudarte a configurar la integración con tu EMR específico durante el piloto.",
    },
    {
      question: "¿Qué soporte ofrecéis durante el piloto?",
      answer:
        "Durante el piloto (8–12 semanas) incluimos onboarding personalizado, formación del equipo clínico, configuración a medida, soporte técnico dedicado y evaluación de resultados. Nuestro objetivo es garantizar una adopción exitosa y medir el impacto en tu práctica.",
    },
    {
      question: "¿Puedo usar NeuroSuite en evaluaciones remotas?",
      answer:
        "Algunos subtests pueden administrarse de forma remota con supervisión por videollamada, pero recomendamos evaluación presencial para garantizar la validez de los resultados. Estamos desarrollando protocolos específicos para telemedicina que estarán disponibles próximamente.",
    },
    {
      question: "¿Necesito formación especial para usar NeuroSuite?",
      answer:
        "No. Si ya administras estas pruebas en papel, podrás usar NeuroSuite inmediatamente. La interfaz está diseñada para seguir el flujo clínico habitual. Ofrecemos sesiones de formación de 1–2 horas para optimizar el uso y aprovechar todas las funcionalidades.",
    },
  ]

  return (
    <section id="recursos" className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4 text-balance">Preguntas frecuentes</h2>
        <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto text-pretty">
          Respuestas a las dudas más comunes sobre NeuroSuite
        </p>
      </div>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-[#1F2937] hover:text-[#0FB5BA]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-[#1F2937]/70 text-pretty leading-relaxed">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
