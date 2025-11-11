import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ValueProps } from "@/components/value-props"
import { HowItWorks } from "@/components/how-it-works"
import { Services } from "@/components/services"
import { AboutUs } from "@/components/about-us"
import { Evidence } from "@/components/evidence"
import { FAQs } from "@/components/faqs"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { AnnouncementBar } from "@/components/announcement-bar"
import { ConsentBanner } from "@/components/consent-banner"

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main role="main" aria-label="Contenido principal">
        <Hero />
        <ValueProps />
        <HowItWorks />
        <Services />
        <AboutUs />
        {/*<Evidence />*/}
        {/*<FAQs />*/}
        <FinalCTA />
      </main>
      <Footer />
      <ConsentBanner />
    </>
  )
}
