import { Button } from '@/components/ui/button'
import Link from 'next/link'
export function HeroSection() {
  return (
    <section className="py-40 px-2 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Przygotuj się do egzaminów kwalifikacyjnych</h1>
          <p className="text-l mb-8">Sprawdź swoją wiedzę i umiejętności z zakresu informatyki. Nasza platforma oferuje kompleksowe testy dla kwalifikacji INF-03/EE.09 oraz INF-02/EE.08.</p>
          <Button asChild size="lg" variant={'outline'}>
            <Link href="/inf03">Rozpocznij naukę</Link>
          </Button>
        </div>
        <div className="md:w-1/2">
          <img src="/hero.webp"  alt="Nauka do egzaminów" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}

