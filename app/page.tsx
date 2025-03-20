'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Code, PenTool } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { AnimatedGridBackground } from '@/components/AnimatedGridBackground'
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar></Navbar>
      <AnimatedGridBackground />
      <div  className="absolute inset-0 z-0" />
      <main className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen relative z-10">
      <svg height="100" stroke="#fff" strokeWidth="2" className="text-line" width="100%"><text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%">ΛKUMΛ</text></svg>
        <p className="text-xl md:text-2xl text-center mb-12 max-w-2xl animate-fade-up animate-delay-200">
          Przygotuj się do egzaminów kwalifikacyjnych INF-03/EE.09 oraz INF-02/EE.08.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl animate-fade-up animate-delay-300">
          <Link href="/inf03" className="group">
            <div className="bg-[#0a0a0a] bg-opacity-50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-opacity-70 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <BookOpen className="h-12 w-12 mb-4 text-blue-400" />
                <h2 className="text-xl font-semibold mb-2">Quizy INF-03/EE.09</h2>
                <p className="text-gray-300">Testuj swoją wiedzę z programowania i baz danych.</p>
              </div>
              <ArrowRight className="h-6 w-6 mt-4 transition-transform group-hover:translate-x-2" />
            </div>
          </Link>
          <Link href="/inf02" className="group">
            <div className="bg-[#0a0a0a] bg-opacity-50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-opacity-70 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <PenTool className="h-12 w-12 mb-4 text-green-400" />
                <h2 className="text-xl font-semibold mb-2">Quizy INF-02/EE.08</h2>
                <p className="text-gray-300">Sprawdź swoje umiejętności z administracji systemami.</p>
              </div>
              <ArrowRight className="h-6 w-6 mt-4 transition-transform group-hover:translate-x-2" />
            </div>
          </Link>
          <Link href="/playground" className="group">
            <div className="bg-[#0a0a0a] bg-opacity-50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-opacity-70 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <Code className="h-12 w-12 mb-4 text-purple-400" />
                <h2 className="text-xl font-semibold mb-2">Kompilator HTML/CSS/JS</h2>
                <p className="text-gray-300">Ćwicz swoje umiejętności kodowania w czasie rzeczywistym.</p>
              </div>
              <ArrowRight className="h-6 w-6 mt-4 transition-transform group-hover:translate-x-2" />
            </div>
          </Link>
        </div>
        <div className="mt-16 animate-fade-up animate-delay-500">
          <Button asChild size="lg" variant="outline">
            <Link href="/about">Ostatnie zmiany w  ΛKUMΛ</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

