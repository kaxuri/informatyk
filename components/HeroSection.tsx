import { Button } from '@/components/ui/button'
import Link from 'next/link'
export function HeroSection() {
  return (
    <section className="py-40 px-2 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Przygotuj się do egzaminów{' '}
              <span className="text-transparent bg-contain bg-clip-text font-bold " style={{backgroundImage:'url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnVna283cW1xOHAwMms0a29peWZwOGpoZWRxbDBnM2NtbGR2dmY1diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3og0IGjLXRttYbbtcc/giphy.webp)'}}>
                Technik-Informatyk
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Sprawdź swoją wiedzę i umiejętności z zakresu informatyki. Nasza platforma oferuje kompleksowe testy dla kwalifikacji INF-03/EE.09 oraz INF-02/EE.08.
            </p>
            <Button asChild size="lg" variant={'outline'} className="p-6 px-12 transition-all duration-200">
              <Link href="/inf03">Rozpocznij Test</Link>
            </Button>
        </div>
        <div className="md:w-1/2">
          <img src="/hero.webp"  alt="Nauka do egzaminów" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}

