import { Linkedin } from "lucide-react"

export function Footer() {
  const links = {
    legal: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "DPA", href: "/dpa" },
      { label: "Seguridad", href: "/seguridad" },
      { label: "Términos", href: "/terminos" },
    ],
    contact: [{ label: "Contacto", href: "#contacto" }],
  }

  return (
    <footer id="contacto" className="bg-[#1F2937] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">NeuroSuite</h3>
            <p className="text-white/70 text-sm text-pretty leading-relaxed">
              Evaluaciones neurocognitivas digitales validadas para neurólogos y neuropsicología.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@neurosuite.eu"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  info@neurosuite.eu
                </a>
              </li>
              <li>
                <a href="tel:+34900000000" className="text-sm text-white/70 hover:text-white transition-colors">
                  +34 900 000 000
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} NeuroSuite. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
