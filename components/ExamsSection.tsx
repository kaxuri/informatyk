import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { CalendarDays, BookOpen } from 'lucide-react'
import Link from 'next/link'

const quizCategories = [
  {
    title: 'INF 03 / EE.09',
    description: 'Programowanie Aplikacji Internetowych i Baz Danych',
    image: '/inf-03-okladka.jpg',
    link: '/inf03',
    questionCount: 1074,
    lastUpdated: '2024-12-24',
  },
  {
    title: 'INF 02 / EE 0.8',
    description: 'Montaż i Eksploatacja urządzeń peryferyjnych oraz Lokalnych Sieci Komputerowych',
    image: '/inf-02-okladka.jpg',
    link: '/inf02',
    questionCount: 541,
    lastUpdated: '2024-12-24',
  }
]

export function ExamsSection() {
  return (
    <section className="py-20 px-4 md:px-0 bg-[#00000030]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Dostępne egzaminy</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {quizCategories.map((category, index) => (
            <Card key={index} className="bg-[#00000030] overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{category.title}</CardTitle>
                <CardDescription className="text-gray-300">{category.description}</CardDescription>
              </CardHeader>
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="mt-4">
                <div className="flex items-center text-sm text-gray-300 mb-2">
                  <BookOpen className="mr-2 h-4 w-4" />
                  <span>{category.questionCount} pytań</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  <span>Aktualizacja: {category.lastUpdated}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <Link href={category.link}>Rozpocznij Test</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

