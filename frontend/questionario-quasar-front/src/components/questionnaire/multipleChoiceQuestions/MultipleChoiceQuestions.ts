import { z } from 'zod';
const MultipleChoiceAnswer = z.object({
  id: z.string(),
  letter: z.string(),
  answer: z.string(),
});

const MultipleChoiceQuestion = z.object({
  id: z.string(),
  question: z.string(),
  answers: z.array(MultipleChoiceAnswer),
});

export type MultipleChoiceAnswerType = z.infer<typeof MultipleChoiceAnswer>;
export type MultipleChoiceQuestionType = z.infer<typeof MultipleChoiceQuestion>;

// export interface MultipleChoiceQuestion {
//   id: string;
//   question: string;
//   answers: MultipleChoiceAnswer[];
// }

// export interface MultipleChoiceAnswer {
//   id: string;
//   letter: string;
//   answer: string;
// }
