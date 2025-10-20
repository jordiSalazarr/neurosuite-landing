import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { ValueProps } from "@/components/value-props"
import { HowItWorks } from "@/components/how-it-works"
import { Evidence } from "@/components/evidence"
import { Security } from "@/components/security"
import { Integrations } from "@/components/integrations"
import { Pricing } from "@/components/pricing"
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
      <main>
        <Hero />
        <TrustBar />
        <ValueProps />
        <HowItWorks />
        <Evidence />
        <Security />
        <Integrations />
        <Pricing />
        <FAQs />
        <FinalCTA />
      </main>
      <Footer />
      <ConsentBanner />
    </>
  )
}
