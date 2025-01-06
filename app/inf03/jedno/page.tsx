'use client'

import { useState, useEffect } from 'react'
import { Question, QuizState } from '../../../types/quiz'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { allQuizData } from '../../../lib/inf03'
import { cn } from '@/lib/utils'
import { Navbar } from "../../../components/Navbar"

const QUESTIONS_PER_TEST = 1
const getRandomQuestions = (allQuestions: Question[], count: number): Question[] => {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function Quiz() {
  const [allQuestions] = useState<Question[]>(allQuizData)
  const [questions, setQuestions] = useState<Question[]>([])
  const [quizState, setQuizState] = useState<QuizState>({
    timeRemaining: 60 * 60, // 60 minutes in seconds
    answers: {},
  })
  const [showFeedback, setShowFeedback] = useState<Record<number, boolean>>({})
  const [feedbackMessages, setFeedbackMessages] = useState<Record<number, string>>({})

  useEffect(() => {
    setQuestions(getRandomQuestions(allQuestions, QUESTIONS_PER_TEST));
  }, [allQuestions]);


  const handleAnswerClick = (questionId: number, answerId: string) => {
    if (showFeedback[questionId]) return; // Jeśli już kliknięto, nie pozwól na ponowny wybór
    const isCorrect = questions.find(q => q.id === questionId)?.correctAnswer === answerId;

    setQuizState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answerId,
      },
    }))

    setShowFeedback((prev) => ({
      ...prev,
      [questionId]: true,
    }))

    setFeedbackMessages((prev) => ({
        ...prev,
        [questionId]: isCorrect ? "Prawidłowa odpowiedź!" : "Błędna odpowiedź",
      }))
  }

  const getAnswerCardStyle = (question: Question, answerId: string) => {
    if (!showFeedback[question.id]) return 'bg-black' // Jeśli brak odpowiedzi, domyślny kolor
    if (question.correctAnswer === answerId) return 'bg-green-600' // Poprawna odpowiedź
    if (quizState.answers[question.id] === answerId) return 'bg-red-600' // Zaznaczona błędna odpowiedź
    return 'bg-black' // Niezaznaczone odpowiedzi
  }

  const drawNextQuestion = () => {
    setQuestions(getRandomQuestions(allQuestions, QUESTIONS_PER_TEST));
    setQuizState((prev) => ({
      ...prev,
      answers: {},
    }))
    setShowFeedback({})
    setFeedbackMessages({})
  }

  return (
    <div className="relative min-h-screen pt-20 h-full w-full bg-black text-white">
      <Navbar />
      <div className="max-w-4xl py-5 mx-auto">
      <div className="text-2xl py-4 font-bold text-center ">
      INF 03 / EE 0.9 - Jedno pytanie

              </div>
        {questions.map((question, index) => (
          <div key={question.id} className="mb-8">
            <Card className="bg-black border p-6 mb-5">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <p className="text-xl">{index + 1}. {question.text}</p>
                </div>

                {question.codeSnippet && (
                  <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm text-white font-mono">{question.codeSnippet}</code>
                  </pre>
                )}

                {question.image && question.image !== "./placeholder.png" && (
                  <img
                    src={question.image}
                    alt="Question image"
                    className="max-w-full h-auto rounded-lg"
                  />
                )}

                {showFeedback[question.id] && (
                  <div className={`text-lg font-bold ${feedbackMessages[question.id] === "Prawidłowa odpowiedź!" ? "text-green-400 py-4 bg-green-900 border border-green-600 p-4 rounded-lg" : "text-red-400 py-4 bg-red-900 border border-red-600 p-4 rounded-lg"}`}>
                    {feedbackMessages[question.id]}
                  </div>
                )}
              </div>
            </Card>

            <div className="grid grid-cols-1 gap-4">
              {question.answers.map((answer) => (
                <Card
                  key={answer.id}
                  className={cn(
                    "p-6 cursor-pointer transition-colors hover:scale-105 transition ease-in-out delay-50",
                    getAnswerCardStyle(question, answer.id)
                  )}
                  onClick={() => handleAnswerClick(question.id, answer.id)}
                >
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">{answer.id}</span>
                    <span>{answer.text}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 flex justify-center">
          <Button 
            variant={'outline'}
            onClick={drawNextQuestion}
            className="px-10 py-6 text-white rounded-lg"
          >
            Losuj Kolejne Pytanie
          </Button>
        </div>
      </div>
    </div>
  )
}
