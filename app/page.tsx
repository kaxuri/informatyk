
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { AboutSection } from '@/components/AboutSection'
import { ExamsSection } from '@/components/ExamsSection'
import { MotivationalBanner } from '@/components/MotivationalBanner'

export default function Home() {
  return (
    
    <div className="relative min-h-screen bg-main text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ExamsSection />
      <MotivationalBanner />
      <p className="text-center py-6 text-xs text-gray-400">© Akumadev 2024.Pytania pochodzą ze strony praktycznyegzamin.pl</p>
    </div>
  )
}

