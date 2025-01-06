
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { AboutSection } from '@/components/AboutSection'
import { ExamsSection } from '@/components/ExamsSection'
import { MotivationalBanner } from '@/components/MotivationalBanner'

export default function Home() {
  return (
    
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ExamsSection />
      <MotivationalBanner />
      <p className="text-center  text-xs text-gray-400">Wersja v 0.0.3.0</p>
      <p className="text-center py-2 text-xs text-gray-400">© Akumadev 2025. Pytania pochodzą ze strony praktycznyegzamin.pl</p>
    </div>
  )
}

