import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, Shield,EyeOff } from 'lucide-react'

const features = [
  {
    title: 'Nowoczesność',
    description: 'Aktualne pytania i interaktywne testy dostosowane do najnowszych standardów egzaminacyjnych.',
    icon: Sparkles
  },
  {
    title: 'Bezpieczeństwo',
    description: 'Twoje dane i postępy są u nas bezpieczne. Skupiamy się na ochronie Twojej prywatności.',
    icon: Shield
  },
  {
    title: 'Brak reklam',
    description: 'Skoncentruj się na nauce bez rozpraszających reklam. Czyste i przyjazne środowisko do nauki.',
    icon: EyeOff
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 md:px-0 bg-[#00000030]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Dlaczego warto z nami?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#00000030] ">
              <CardHeader>
                <feature.icon className="h-12 w-12  text-white mb-4"/>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

