import { Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#7c3aed] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              NeuroSuite
            </h3>
            <p className="text-white/80 text-sm text-pretty leading-relaxed">
              Digitalización de evaluaciones clínicas validadas para profesionales de la salud mental.
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-semibold mb-6 text-lg">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@neurosuite.eu"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>info@neurosuite.eu</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+34628931419"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+34 628 931 419</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-semibold mb-6 text-lg">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} NeuroSuite. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
