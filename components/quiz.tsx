'use client'

import { useState, useEffect } from 'react'
import { Question, QuizState } from '../types/quiz'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { allQuizData } from '../lib/quiz-data'
import { cn } from '@/lib/utils'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

const QUESTIONS_PER_TEST = 40

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
  const [showResults, setShowResults] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  useEffect(() => {
    setQuestions(getRandomQuestions(allQuestions, QUESTIONS_PER_TEST));
  }, [allQuestions]);

  useEffect(() => {
    if (!showResults) {
      const timer = setInterval(() => {
        setQuizState((prev) => ({
          ...prev,
          timeRemaining: Math.max(0, prev.timeRemaining - 1),
        }))
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [showResults])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes} minut ${remainingSeconds} sekund`
  }

  const handleAnswerClick = (questionId: number, answerId: string) => {
    setQuizState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answerId,
      },
    }))
  }

  const openConfirmDialog = () => {
    setShowConfirmDialog(true)
  }

  const checkResults = () => {
    setShowResults(true)
    setShowConfirmDialog(false)
  }

  const getAnswerCardStyle = (question: Question, answerId: string) => {
    if (!showResults) return 'bg-[#06060E]'
    if (question.correctAnswer === answerId) return 'bg-green-600'
    if (quizState.answers[question.id] === answerId) return 'bg-red-600'
    return 'bg-[#06060E]'
  }

  const correctAnswers = questions.filter(q => q.correctAnswer === quizState.answers[q.id]).length
  const totalQuestions = questions.length
  const percentCorrect = Math.round((correctAnswers / totalQuestions) * 100)

  return (
    <div className="min-h-screen bg-[#080810] text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-lg mb-2 text-center p-4">
          {showResults ? (
            <div className="text-2xl font-bold text-center ">
              Wyniki: <span className={percentCorrect < 50 ? "text-red-600" : "text-green-600"}>{percentCorrect}% ({correctAnswers}/{totalQuestions})</span>
            </div>
          ) : (
            <><span className='p-6 '>Czas do końca egzaminu → {formatTime(quizState.timeRemaining)}</span></>
          )}
        </div>
        <div className="text-sm mb-8 mt-6">
          Dostępnych pytań: {allQuestions.length} | Wylosowano: {QUESTIONS_PER_TEST}
        </div>

        {questions.map((question) => (
          <div key={question.id} className="mb-8">
            <Card className="bg-[#07070F] border-main p-6 mb-5">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <p className="text-xl">{question.text}</p>
                </div>

                {question.codeSnippet && (
                  <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm text-white font-mono">{question.codeSnippet}</code>
                  </pre>
                )}

                { question.image && question.image !== "./placeholder.png" && (
    <img
      src={question.image}
      alt="Question diagram"
      className="max-w-full h-auto rounded-lg"
    />
  )}
              </div>
            </Card>

            <div className="grid grid-cols-1 gap-4">
              {question.answers.map((answer) => (
                <Card
                  key={answer.id}
                  className={cn(
                    "p-6 cursor-pointer transition-colors hover:scale-105 transition ease-in-out delay-50",
                    getAnswerCardStyle(question, answer.id),
                    quizState.answers[question.id] === answer.id && !showResults && "bg-blue-900"
                  )}
                  onClick={() => !showResults && handleAnswerClick(question.id, answer.id)}
                >
                  <div className="flex items-center space-x-2 ">
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
            onClick={openConfirmDialog} 
            className="px-10 py-6  text-white rounded-lg"
            disabled={showResults}
          >
            {showResults ? 'Test Zakończony' : 'Zakończ Test'}
          </Button>
        </div>

        <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Zakończyć Test?</AlertDialogTitle>
              <AlertDialogDescription>
                Zakończenie testu jest nieodwracalne
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Anuluj</AlertDialogCancel>
              <AlertDialogAction onClick={checkResults}>Zakończ Test</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}

