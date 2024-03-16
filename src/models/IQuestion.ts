export interface IQuestion {
  question: string;
  code?: string[];
  answers: IAnswers;
  correctAnswer: string;
  points: number;
}

interface IAnswers {
  1: string;
  X: string;
  2: string;
}
