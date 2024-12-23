export interface Answer {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  codeSnippet?: string;
  image?: string;
  answers: Answer[];
  correctAnswer: string;
}

export interface QuizState {
  timeRemaining: number;
  answers: Record<number, string>;
}

