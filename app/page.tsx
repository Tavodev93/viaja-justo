import Hero from "@/components/Hero"
import AntesDeViajarPreview from "@/components/AntesDeViajarPreview"
import PreciosPreview from "@/components/PreciosPreview"
import ConfianzaSection from "@/components/ConfianzaSection"
import RecomendacionesPreview from "@/components/RecomendacionesPreview"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      <Hero />
      <AntesDeViajarPreview />
      <PreciosPreview />
      <ConfianzaSection />
      <RecomendacionesPreview />
    </main>
  )
}
