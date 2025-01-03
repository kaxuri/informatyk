import { Question } from '../types/quiz'

export const allQuizData: Question[] = [
  {
    id: 1,
    text: "Po wykonaniu przedstawionego kodu JavaScript działającego na wcześniej zainicjalizowanej tablicy liczby w zmiennej wynik jest przechowywana suma",
    codeSnippet: "var wynik = 0;\nfor (i=0; i < liczby.length; i++)\n    if (liczby[i] % 2 == 0)\n        wynik += liczby[i];",
    answers: [
      {
        id: "A",
        text: "nieparzystych elementów tablicy"
      },
      {
        id: "B",
        text: "dodatnich elementów tablicy"
      },
      {
        id: "C",
        text: "wszystkich elementów tablicy"
      },
      {
        id: "D",
        text: "parzystych elementów tablicy"
      }
    ],
    correctAnswer: "D"
  },
  {
    id: 2,
    text: "W przedstawionym diagramie bazy danych biblioteka, elementy: czytelnik, wypozyczenie i książka są",
    image: "/placeholder.svg?height=200&width=600",
    answers: [
      {
        id: "A",
        text: "Zielony"
      },
      {
        id: "B",
        text: "Czerwony"
      },
      {
        id: "C",
        text: "Czerwony"
      },
      {
        id: "D",
        text: "Czerwony"
      }
    ],
    correctAnswer: "A"
  }
]
// Add more questions as needed

