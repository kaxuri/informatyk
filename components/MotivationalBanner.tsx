import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function MotivationalBanner() {
  return (
    <section className="py-20 px-4 md:px-0 bg-main">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Gotowy na wyzwanie?</h2>
        <p className="text-xl mb-8">Rozpocznij swoją podróż do sukcesu już teraz. Przygotuj się do egzaminów z naszą pomocą!</p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/inf03">Rozpocznij naukę</Link>
        </Button>
      </div>
    </section>
  )
}

