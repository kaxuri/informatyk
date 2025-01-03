import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Jak często aktualizowane są pytania?",
    answer: "Nasze pytania są regularnie aktualizowane, aby odzwierciedlać najnowsze wymagania egzaminacyjne. Staramy się dodawać nowe pytania co miesiąc."
  },
  {
    question: "Czy mogę korzystać z platformy na urządzeniach mobilnych?",
    answer: "Tak, nasza platforma jest w pełni responsywna i działa na wszystkich urządzeniach, w tym na smartfonach i tabletach."
  },
  {
    question: "Czy dostępne są pełne symulacje egzaminów?",
    answer: "Tak, oferujemy pełne symulacje egzaminów, które odzwierciedlają rzeczywiste warunki egzaminacyjne, w tym czas trwania i liczbę pytań."
  },
  {
    question: "Jak mogę śledzić swoje postępy?",
    answer: "Nasza platforma oferuje szczegółowe statystyki i analizę wyników, które pozwalają na śledzenie postępów w nauce i identyfikację obszarów wymagających poprawy."
  }
]

export function FAQSection() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Często zadawane pytania</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

