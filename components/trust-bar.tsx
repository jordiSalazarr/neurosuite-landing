import Image from "next/image"

export function TrustBar() {
  const partners = [
    { name: "Clínica Privada", logo: "/medical-clinic-logo.png" },
    { name: "Hospital Universitario", logo: "/university-hospital-logo.jpg" },
    { name: "Unidad de Rehabilitación", logo: "/rehabilitation-unit-logo.jpg" },
  ]

  return (
    <section className="bg-[#F3F4F6] py-12">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-[#1F2937]/60 mb-6">Confiado por profesionales en toda Europa</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="relative w-32 h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            >
              <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
